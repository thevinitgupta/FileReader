let fileHandle,fileContent;
const butOpenFile = document.querySelector("#openFileButton");
const textField = document.querySelector(".textArea");
butOpenFile.addEventListener('click', async () => {
  // Destructure the one-element array.
  [fileHandle] = await window.showOpenFilePicker();
  // Do something with the file handle.
  fileContent = await fileHandle.getFile();
  console.log(fileContent.name)
  fileContent.text().then((res)=> textField.value = res ).catch((err)=>console.log(err))
});

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