"use client"
import React, { useState, FC } from 'react'
import Resizer from "react-image-file-resizer"
import Image from 'next/image';

interface Props {
    handleImage: (image: any) => void
}

const FileUpload: FC<Props> = ({ handleImage }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showImage, setShowImage] = useState(null);

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        let handleFile = file.type.startsWith('image/')
        if (!handleFile) {
            alert('Please select an image file.');
            return
        }

        //Resizer
        if (file) {
            Resizer.imageFileResizer(
                file,
                720,
                720,
                "JPEG",
                90,
                0,
                (uri: any) => {
                    setSelectedImage(uri);
                    handleImage(uri)
                },
                "file"
            )
        }

    };
    //  set in state and to show file
    if (selectedImage) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            setShowImage(e.target.result);
        };
        reader.readAsDataURL(selectedImage);
    }

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            {showImage && (
                <Image
                    src={showImage}
                    alt="Selected Image"
                    height={200}
                    width={200}
                />
            )}
        </div>
    )
}

export default FileUpload