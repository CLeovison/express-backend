import multer from "multer";
import path from "path";

import { cwd } from "node:process";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, cwd() + "/uploads/");
  },
  filename: function (req, file, cb) {
    const suffix  = 
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype & extname) {
      return cb(null, true);
    } else {
      cb("Error: Image Only");
    }
  },
});
