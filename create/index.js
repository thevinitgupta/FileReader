//saveFile to get access to the newly created file and fileContent to store and update the content of the file using a writable stream
let saveFile,fileContent;
 
//accessing HTML elements
const selectFile = document.querySelector("#selectFile");//button that handles creation of file
const editFile = document.querySelector(".editFile");//textarea to set contents of the file
 
//async function to handle new file creation
async function saveFileFunc(){
  try {
    saveFile = await window.showSaveFilePicker({
      //set the suggested default name for the new file, which you can change while saving if you want to
      suggestedName : "My First File.txt"
    })
  } catch (error) {
    console.log(error);
  }
}
 
//async function to listen to keypress and update the contents of the newly created file using the content-writable stream
async function readText(event){
  //checking if a new File is created or not
  if(saveFile!=="undefined"){
    //checking if the user has granted access
    if((await saveFile.queryPermission())==="granted"){
      //starting the writable stream
      const writable = await saveFile.createWritable();
      //setting the value of stream to the current value of the text area
      await writable.write(event.target.value);
      await writable.close(); //close the writable stream
    }
  }
}
 
 
//setting event listeners for the click and keyup events
selectFile.addEventListener("click",saveFileFunc);
 
editFile.addEventListener('keyup',readText);