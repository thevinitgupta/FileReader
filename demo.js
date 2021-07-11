const openAndUpdate = document.querySelector("#openFileButtonToUpdate");
const textFieldUpdate = document.querySelector(".textAreaUpdate");
openAndUpdate.addEventListener('click', async () => {
  // Destructure the one-element array.
  [fileHandle] = await window.showOpenFilePicker();
  // Do something with the file handle.
  fileContent = await fileHandle.getFile();
  console.log(fileContent.name)
  writeFile(fileHandle,textFieldUpdate.value)
  fileContent.text().then((res)=> textField.value = res ).catch((err)=>console.log(err))
});


async function writeFile(fileHandle, contents) {
    // Support for Chrome 82 and earlier.
    if (fileHandle.createWriter) {
      // Create a writer (request permission if necessary).
      const writer = await fileHandle.createWriter();
      // Write the full length of the contents
      await writer.write(0, contents);
      // Close the file and write the contents to disk
      await writer.close();
      return;
    }
}

/**
 * 
 * <div class="row align-items-center">
            <div class="col"><span>To Select File To Edit: </span></div>
            <div class="col"><button type="button" class="btn btn-primary btn-md" id="openFileButtonToUpdate">Select File</button></div>
        </div>
        <div class="mt-3"><textarea class="textAreaUpdate" value="" rows="10" cols="70"></textarea></div>
        <button type="button" class="btn btn-success btn-md" id="updateFile">Update File</button>
 */