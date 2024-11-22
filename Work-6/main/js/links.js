const directory = "https://xxx-gloriousphoenix-xxx.github.io/Uni-Grade2-Web/Work%202/";
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
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            document.location.href = directory + pageName[id] + '.html';
        });
    }
}
const githubButton = document.getElementById("github");
if (githubButton) {
    githubButton.addEventListener("click", () => {
        document.location.href = externalPageName["github"];
    });
}

