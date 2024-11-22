const directory = "https://xxx-gloriousphoenix-xxx.github.io/Uni-Grade2-Web/Work-2/";
const pageName = {
    table: "general-table",
    grid: "general-grid",
    flex: "general-flex",

    python: "python",
    c: "c",
    cpp: "cpp",
    cs: "cs",
    html: "html"
};
const externalPageName = {
    github: "https://github.com/xXx-GloriousPhoenix-xXx"
};

for (const id in pageName) {
    document.getElementById(id).addEventListener("click", () => {
        document.location.href = directory + name[id] + '.html';
    });
}
document.getElementById("github").addEventListener("click", () => {
    document.location.href = externalPageName["github"];
});
