document.body.innerHTML = '';
document.head.innerHTML = "<title>Simple Text Editor - Offline</title>";
document.body.style = `
background-color: #1f1f1f;
color: white;
font-family: Courier New;
font-weight: bold;
font-size: 13pt;
`;
document.body.contentEditable = "true";
const loaderPanel = document.createElement("div");
loaderPanel.contentEditable = "false";
loaderPanel.style.position = "fixed";
loaderPanel.style.bottom = "0px";
loaderPanel.style.width = "100%";
loaderPanel.style.height = "10%";
loaderPanel.style.backgroundColor = "##1f1f1f";
loaderPanel.align = "center";
loaderPanel.style.display = "flex";
loaderPanel.style.alignItems = "center";
const loaderPanelE1 = document.createElement("input");
loaderPanelE1.type = "submit";
loaderPanelE1.value = "Save";
loaderPanelE1.addEventListener("click", function() {
  localStorage.setItem(loaderPanelE3.value, document.body.textContent);
  console.log(loaderPanelE3.value + " has been saved");
});
const loaderPanelE2 = document.createElement("input");
loaderPanelE2.type = "submit";
loaderPanelE2.value = "Load";
loaderPanelE2.addEventListener("click", function() {
  if (localStorage.getItem(loaderPanelE3.value)) {
    document.body.textContent = localStorage.getItem(loaderPanelE3.value);
    console.log(loaderPanelE3.value + " has been loaded");
  } else {
    console.error("The requested item from storage does not exist.");
  }
});
const loaderPanelE3 = document.createElement("input");
loaderPanelE3.type = "text";

const css = document.createElement("style");
css.innerHTML = `
input {
  background-color: #1f1f1f;
  color: white;
  font-family: Courier New;
  font-weight: bold;
  text-align: center;
}
`;
document.head.appendChild(css);
document.body.appendChild(loaderPanel);
loaderPanel.appendChild(loaderPanelE1);
loaderPanel.appendChild(loaderPanelE2);
loaderPanel.appendChild(loaderPanelE3);
