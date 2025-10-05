import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the directory to store uploaded files
        cb(null, 'uploads/'); // You can specify a folder here
      },
    filename : function(req,file,callback){
        callback(null,file.originalname);
    }
})

const upload = multer({storage})

export default upload;