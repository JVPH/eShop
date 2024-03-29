
import path from 'path'
import express from 'express'
import multer from 'multer'
import { protect, adminOnly } from '../middleware/authMiddleware.js'
const uploadRouter = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {limits : {fileSize : 1000000}
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  limits : {fileSize : 1000000},
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

uploadRouter.post('/', protect, adminOnly, upload.single('image'), (req, res) => {
  res.json(`/${req.file.path}`)
})

export default uploadRouter