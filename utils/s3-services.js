const config = require("./config");
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const bucketName = config.bucketName;

const region = config.region;
const accessKeyId = config.accessKeyId;
const secretAccessKey = config.secretAccessKey;
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

//delete a file from s3
function deleteFile(file) {
  //var AWS = require('aws-sdk');

  //AWS.config.loadFromPath('./credentials-ehl.json');

  //var s3 = new AWS.S3();
  const deleteParams = { Bucket: bucketName, Key: file };

  s3.deleteObject(deleteParams, function (err, data) {
    if (err) console.log(err, err.stack);
    // error
    else console.log("deleted"); // deleted
  });
}
//upload a file to s3
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };
  return s3.upload(uploadParams).promise();
}

//download a file  from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };
  return s3.getObject(downloadParams).createReadStream();
}

//disk storage
const storage = multer.diskStorage({
  destination: "upload",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//check file type func
function checkFileType(file, cb) {
  //allowed extention
  const fileTypes = /jpeg|jpg|png|gif/;
  //check extension
  const isRightExtention = fileTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  //Check mimetype
  const mimeType = fileTypes.test(file.mimetype);
  if (isRightExtention && mimeType) {
    return cb(null, true);
  } else {
    cb({ error: "images only" });
  }
}
function uploadFunc(fileSize) {
  const upload = multer({
    storage: storage,
    limits: { fileSize: fileSize },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }).single("image");
  return upload;
}
exports.uploadFile = uploadFile;
exports.getFileStream = getFileStream;
exports.uploadFunc = uploadFunc;
exports.deleteFile = deleteFile;
