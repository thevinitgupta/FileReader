let directory;

const folderItems = document.querySelector(".folderItems");
const folderName = document.querySelector(".folderName");
const selectFolder = document.querySelector("#selectFolder");

async function displayFolderContent(){
  //call function to remove all the previous directory items
  removeAllChildNodes(folderItems);
  try {
    directory = await window.showDirectoryPicker({
      startIn : "desktop"
    });

    let i=1;
      for await(const entry of directory.values()){
        let file = await entry.getFile();
        console.log(file);
        
        //handle all files except images to only display name and type
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

        //creating file reader to handle image files and display them 
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
  catch (error) {
    console.log(error)
  }
}

selectFolder.addEventListener("click",displayFolderContent);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
