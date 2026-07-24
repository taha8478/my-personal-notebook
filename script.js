const MD_FILE = "content.md";

fetch(MD_FILE)
  .then(function (res) {
    if (!res.ok) {
      throw new Error("File not found");
    }
    return res.text();
  })
  .then(function (text) {
    document.getElementById("content").innerHTML = marked.parse(text);
  })
  .catch(function (err) {
    document.getElementById("content").innerHTML =
      '<p id="error">Failed to load markdown file: ' + err.message + "</p>";
  });
