// // src/components/FileUpload.js
// import FileUpload from 'react-material-file-upload';

// import React, { useState } from 'react';

// function FileUpload() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (file) {
//       // Perform the file upload logic here
//       console.log('Uploading file:', file.name);
//       // You can use FormData to send the file to a server
//       const formData = new FormData();
//       formData.append('file', file);
//       // Example: axios.post('/upload', formData);
//     } else {
//       alert('Please select a file to upload');
//     }
//   };

//   return (
//     <div className="file-upload">
//       <h1>Upload File</h1>
//       <input type="file" onChange={handleFileChange} />
//       {file && <p>Selected file: {file.name}</p>}
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default FileUpload;
