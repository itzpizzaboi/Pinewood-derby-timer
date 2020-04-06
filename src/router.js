const express = require('express')
const studentRouter = require('./routers/studentRouter');
const router = express.Router()

router.use('/students', studentRouter);

module.exports = router;
