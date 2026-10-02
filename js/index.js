function NavigateToPage(page) {
    window.location.href = page;
}

const asciiArt = document.querySelector(".ascii-art");
if (asciiArt) {
    const characters = "!<>[]{}()\\/\\\\|+-=~:;,.?01IL_";
    const rows = new Array(90);

    for (let row = 0; row < rows.length; row += 1) {
        let line = "";
        for (let column = 0; column < 320; column += 1) {
            line += characters[(row * 17 + column * 7 + row * column) % characters.length];
        }
        rows[row] = line;
    }

    asciiArt.textContent = rows.join("\n");
}