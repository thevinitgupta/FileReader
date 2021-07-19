//to handle files
let fileHandle;

//selecting the various HTML elements
const displayFile = document.querySelector(".displayFile");//textarea
const fileName = document.querySelector(".fileName");//displayFileName
const getFile = document.querySelector("#getFile");//select file button

//async function to handle promises returned by the file access API. 
async function displayFileContent(){
  //try-catch block to handle errors returned by the promises
  try {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    //get contents of the file
    const contents = await file.text();

    //setting the values of the HTML elements
    displayFile.value = contents;
    //unhiding the text area to display the file contents
    displayFile.style.display = "inherit";
    fileName.innerHTML = file.name;
  } catch (error) {
    //logging the errors
    console.log(error);
  }
}

//adding "click" event listener to the button and calling the above async function as callback
getFile.addEventListener("click",displayFileContent);