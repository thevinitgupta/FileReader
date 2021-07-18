let fileHandle,saveFile,fileContent;

const selectFile = document.querySelector("#selectFile");
const editFile = document.querySelector(".editFile");

//get the previous content of the file
async function saveFileFunc(){
  try{
    saveFile = await window.showSaveFilePicker({
      suggestedName : 'My First File.txt'
    });
    fileContent = await saveFile.getFile();
    fileContent = await fileContent.text();
  }
  catch(e){
    console.log(e);
  }
}
async function readText(event){
  if(saveFile!=="undefined"){
    if((await saveFile.queryPermission()) === "granted"){
      const writable = await saveFile.createWritable();
      console.log(event.target.value)
      await writable.write(event.target.value);
      await writable.close();
    }
  }
}

if(window.matchMedia("(pointer: coarse)").matches) {
  selectFile.addEventListener("touchend",saveFileFunc);
}
else {
  selectFile.addEventListener("click",saveFileFunc);
}



editFile.addEventListener('keyup',readText);