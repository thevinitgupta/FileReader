let directory;
const folderItems = document.querySelector(".folderItems");
const folderName = document.querySelector(".folderName");
const selectFolder = document.querySelector("#selectFolder");

//read folder demo
async function displayFolderContent(){
  removeAllChildNodes(folderItems)
    try{
     directory = await window.showDirectoryPicker({
       startIn : "desktop"
     });
      let i=1;
      for await(const entry of directory.values()){
        let file = await entry.getFile();
        console.log(file);
        if (!file.type.startsWith('image/')) {
          let newLi = document.createElement('li');
        newLi.innerHTML = `${entry.name} - ${entry.kind}`;
        if(i%2===0)
        newLi.classList = "list-group-item list-group-item-light";
        else 
        newLi.classList = "list-group-item list-group-item-dark";
        folderItems.appendChild(newLi);
        i++;
        }
        else {
          const reader = new FileReader();
          let img = document.createElement('img');
          reader.addEventListener('loadend',(e)=>{
            img.src = e.target.result;
          });
          reader.readAsDataURL(file)
          img.classList = "my-3";
          folderItems.appendChild(img);
        }
        
      }
    }
    catch(e){
      console.log(e);
    }
  }
selectFolder.addEventListener("click",displayFolderContent);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}