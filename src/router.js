const express = require('express')

const studentRouter = require('./routers/studentRouter');
const adminRouter = require('./routers/adminRouter');
const router = express.Router()


router.use('/times', studentRouter);
router.use('/admin', adminRouter);

router.get('/', (request, response) => {
    response.render("pages/index");
})

module.exports = router;