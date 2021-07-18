let directory;
const folderItems = document.querySelector(".folderItems");
const folderName = document.querySelector(".folderName");
const selectFolder = document.querySelector("#selectFolder");

//read folder demo
async function displayFolderContent(){
    try{
     directory = await window.showDirectoryPicker({
       startIn : "desktop"
     });
      let i=1;
      for await(const entry of directory.values()){
        let newLi = document.createElement('li');
        newLi.innerHTML = `${entry.name} - ${entry.kind}`;
        if(i%2===0)
        newLi.classList = "list-group-item list-group-item-light";
        else 
        newLi.classList = "list-group-item list-group-item-dark";
        folderItems.appendChild(newLi);
        i++;
      }
    }
    catch(e){
      console.log(e);
    }
  }
  selectFolder.addEventListener("click",displayFolderContent);