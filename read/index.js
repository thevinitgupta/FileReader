let fileHandle;
const displayFile = document.querySelector(".displayFile");
const fileName = document.querySelector(".fileName");
const getFile = document.querySelector("#getFile");

//read File demo
async function displayFileContent(){
    try{
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
  
      displayFile.value = contents;
      displayFile.style.display = "inherit";
      fileName.innerHTML = file.name;
    }
    catch(e){
      console.log(e);
    }
  }
getFile.addEventListener("click",displayFileContent);