const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "ds682jtwm",
    api_key: "783878921483575",
    api_secret: "0wf8nrS7ck43YK0HEK4NrpM4q9U"
  });

module.exports = cloudinary;