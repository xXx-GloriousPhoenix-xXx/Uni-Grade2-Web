const directory = "https://xxx-gloriousphoenix-xxx.github.io/Uni-Grade2-Web/Work%202/";
const name = {
    table: "general-table.html",
    grid: "general-grid.html",
    flex: "general-flex.html",

    python: "python.html",
    c: "c.html",
    cpp: "cpp.html",
    cs: "cs.html",
    html: "html.html"
};
const external = {
    github: "https://github.com/xXx-GloriousPhoenix-xXx"
};

for (const id in name) {
    document.getElementById(id).addEventListener("click", () => {
        document.location.href = directory + name[id];
    });
}
document.getElementById("github").addEventListener("click", () => {
    document.location.href = external["github"];
});
