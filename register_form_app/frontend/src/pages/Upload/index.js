import React, { useState } from 'react';
import axios from 'axios';

function Upload () {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = (event) => {
        event.preventDefault()
		const formData = new FormData();
        console.log(selectedFile)
		formData.append('File', selectedFile);
        console.log(formData)


        // axios.post('https://api.imgbb.com/1/upload?expiration=600&key=9dc3c6fe1f2ef409bfa75ca09a0fc5ca', formData)
        //     .then((res) => {
        //         console.log(res)
        //     })


	};

    return (
        <div>
            <h1>Upload</h1>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
    );
}

export default Upload;
