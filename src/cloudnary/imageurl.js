const cloundary =require('cloudinary').v2
require('dotenv').config()

// Configuration
cloundary.config({ 
    cloud_name: process.env.CloudName, 
    api_key:  process.env.APIkey , 
    api_secret: process.env.APISecret // Click 'View API Keys' above to copy your API secret
});


// Upload an image

 exports.userURLImg = async(userIMG)=>{
    const uploadResult = await cloundary.uploader.upload(userIMG) 
    return (uploadResult.secure_url)
}
