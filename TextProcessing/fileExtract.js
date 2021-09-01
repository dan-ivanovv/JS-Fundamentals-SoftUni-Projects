function extract(file) {

    let extracted = file.split('\\').pop();
    let index = extracted.lastIndexOf('.');
    let fileName = extracted.substring(0, index);
    let fileType = extracted.substring(index + 1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileType}`);



}