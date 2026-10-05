const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const siteRoot = path.resolve(__dirname);
const contentTypes = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.m4a': 'audio/mp4',
  '.map': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.ogg': 'audio/ogg',
  '.otf': 'font/otf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.wav': 'audio/wav',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.wasm': 'application/wasm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function sendError(response, statusCode, message) {
  response.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(message);
}

const hollowKnightUrl = 'https://cdn.jsdelivr.net/gh/TinTinWinata/hollow-knight-js@b76aa97c331a439b68b7501f9e43356606ebcaf7/index.html';

const server = http.createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    sendError(response, 405, 'Method not allowed');
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    sendError(response, 400, 'Bad request');
    return;
  }

  if (['/pages/hollow-knight-js', '/pages/hollow-knight-js/', '/pages/hollow-knight-js/index.html'].includes(pathname)) {
    response.writeHead(302, { Location: hollowKnightUrl });
    response.end();
    return;
  }

  let filePath = path.resolve(siteRoot, `.${pathname}`);
  if (filePath !== siteRoot && !filePath.startsWith(`${siteRoot}${path.sep}`)) {
    sendError(response, 403, 'Forbidden');
    return;
  }

  try {
    let fileInfo = await fs.promises.stat(filePath);
    if (fileInfo.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fileInfo = await fs.promises.stat(filePath);
    }
    if (!fileInfo.isFile()) {
      sendError(response, 404, 'Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Length': fileInfo.size,
      'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    if (request.method === 'HEAD') {
      response.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!response.headersSent) sendError(response, 500, 'Internal server error');
      else response.destroy();
    });
    stream.pipe(response);
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') {
      sendError(response, 404, 'Not found');
      return;
    }
    console.error('Failed to serve request:', error);
    sendError(response, 500, 'Internal server error');
  }
});

const port = Number.parseInt(process.env.PORT || '3000', 10);
server.listen(port, '0.0.0.0', () => {
  console.log(`Gaming HP is listening on port ${port}`);
});
