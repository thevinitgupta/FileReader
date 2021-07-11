let fileHandle,fileContent;

const selectFile = document.querySelector("#selectFile");

const displayFile = document.querySelector(".displayFile");

const fileName = document.querySelector(".fileName");

async function displayFileContent(){
  try{
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();

    displayFile.value = contents;
    fileName.innerHTML = file.name;
  }
  catch(e){
    console.log(e);
  }
}

selectFile.addEventListener("click",displayFileContent);