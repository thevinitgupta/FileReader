let fileHandle;

const displayFile = document.querySelector(".displayFile");
const fileName = document.querySelector(".fileName");
const getFile = document.querySelector("#getFile");

//async function to handle the process
 async function displayFileContent(){
   try {
     [fileHandle] = await window.showOpenFilePicker();
     const file = await fileHandle.getFile();
     const contents = await file.text();

     displayFile.value = contents;
     displayFile.style.display = "inherit";
     fileName.innerHTML = file.name;
   } catch (error) {
     console.log(error)
   }
 }

 getFile.addEventListener('touchend', function(e) {
  e.preventDefault();
  e.target.click();
  }, false);
getFile.addEventListener("click",displayFileContent);