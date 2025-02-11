function createTable(size) {
    const table = document.createElement("table")
    table.style.borderCollapse = "collapse"

    for (let i = 1; i <= size; i++) {
        const row = document.createElement("tr");

        for (let y = 1; y <= size; y++) {
            const cel = document.createElement("td");
            cel.style.border = "1px solid black";
            cel.style.padding = "15px";
            cel.style.textAlign = "center";
            cel.textContent = i * y;

            row.appendChild(cel);
        }
        table.appendChild(row);
    }
    document.getElementById("table").appendChild(table);
}
createTable(15);