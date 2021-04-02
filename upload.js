const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET,
});
const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: "aniketgoogledrive",
    Key: "c.txt", // File name you want to save as in S3
    Body: fileContent,
  };

  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    } else {
      console.log(`file uploaded ${data.location}`);
    }
  });
};

module.exports = { uploadFile };
