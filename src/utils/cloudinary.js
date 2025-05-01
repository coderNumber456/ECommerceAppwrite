const uploadOnClodinary = async (file) => {



    if (!file) return null;
    const formData = new FormData();
    formData.append('file', file); // Append the file
    formData.append('upload_preset', "ecom_uploads"); // Append the upload preset
    formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // Append the cloud name


    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData
        })
        const result = await response.json()
        return result.secure_url
    } catch (error) {
        console.log(`upload Failed error message - ${error}`)
        throw error;
    }
}


export { uploadOnClodinary }
