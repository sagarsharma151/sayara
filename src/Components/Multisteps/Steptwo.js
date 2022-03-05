// import { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";

// import '../../style/Signup.scss'

// const fileTypes = ["JPEG", "PNG", "GIF"];

// const Steptwo = ()=> {
//   const [file, setFile] = useState(null);
//   const handleChange = (file) => {
//     setFile(file);
//   };
//   return (
//     <div className="drag">
//       <h1>Drag & drop your file here or Browse</h1>
//       <FileUploader handleChange={handleChange} label='Drag & drop your file here or Browse' multiple={false} name="file" types={fileTypes} />
//       {/* <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p> */}
//     </div>
//   );
// }
// export default Steptwo;

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import '../../style/Signup.scss';

import { ImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../images/img-icon.png';

const Steptwo = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
        <div className='documents-heading-div'> <h1 className='documents-heading'>Company Documents</h1></div>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
               
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt=""/>
                    
                </div>
                <div><p className='drag-para'>Drag & drop your file here or <span className='browse'> Browse</span></p></div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}

Steptwo.propTypes = {
    onFileChange: PropTypes.func
}

export default Steptwo;
