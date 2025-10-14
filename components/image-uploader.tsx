"use client"
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image';
import { useUploadThing } from '@/lib/uploadthing';
import ViewUploadedImages from './viewUploadedImages';

export default function ImageDropZone() {
    const [preview, setPreview] = useState<string | null>(null);
    const [orientation, setOrientation] = useState<'landscape' | 'portrait'>('landscape');
    const [file, setFile] = useState<File | null>(null);

    const { startUpload, isUploading } = useUploadThing("imageUploader", {
        onClientUploadComplete: async (uploadedFiles) => {
            if (!uploadedFiles?.[0]) return;

            const uploadedFile = uploadedFiles[0];

            const fileUrl = uploadedFile.ufsUrl;
            const fileName = uploadedFile.name;

            console.log("Uploaded image URL:", fileUrl);

            await fetch("http://localhost:5173/uploads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fileUrl, fileName }),
            });

            setFile(null);
            setPreview(null);
        },
    });

    const onDrop = (files: File[]) => {
        const f = files[0];
        if (!f) return;
        setFile(f);

        const img = new window.Image();
        img.src = URL.createObjectURL(f);
        img.onload = () => {
            if (img.width > img.height) setOrientation('landscape');
            else setOrientation('portrait');

            setPreview(img.src);
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { "image/*": [] },
        maxFiles: 1,
        onDrop
    });

    return (
        <div className='min-h-screen p-8'>
            <div className='max-w-4xl mx-auto space-y-6'>
                <h1 className='text-3xl font-bold text-purple'>Image Upload</h1>

                <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer text-purple font-semibold transition ${isDragActive ? "border-purple-500 bg-gray-300" : "border-purple"}`}>
                    <input {...getInputProps()} />
                    {!preview ? (
                        <p>Drag and drop, or select file</p>
                    ) : (
                        <div className={`mx-auto rounded overflow-hidden ${orientation === 'landscape' ? 'w-full max-w-lg h-auto' : 'w-48 h-64'}`}>
                            <Image
                                src={preview}
                                alt="Preview"
                                width={orientation === 'landscape' ? 400 : 200}
                                height={orientation === 'landscape' ? 200 : 400}
                                className="object-cover rounded"
                            />
                        </div>
                    )}
                </div>

                {file && (
                    <button
                        onClick={() => startUpload([file])}
                        className="w-full bg-purple text-white py-3 rounded-lg hover:bg-purple-900"
                        disabled={isUploading}
                    >
                        {isUploading ? "Uploading..." : "Upload"}
                    </button>
                )}
            </div>
            <div className='w-full'>
                <ViewUploadedImages />
            </div>
        </div>
    )
}
