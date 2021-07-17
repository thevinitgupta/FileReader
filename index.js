let fileHandle,saveFile,fileContent;

const selectFile = document.querySelector("#selectFile");
const editFile = document.querySelector(".editFile");

const displayFile = document.querySelector(".displayFile");
const fileName = document.querySelector(".fileName");
const getFile = document.querySelector("#getFile");

//get the previous content of the file
async function saveFileFunc(){
  try{
    saveFile = await window.showSaveFilePicker({
      suggestedName : 'My First File.txt'
    });
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





selectFile.addEventListener("click",saveFileFunc);

displayFile.addEventListener('keyup',readText);


