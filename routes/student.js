const controller = require('../controllers/student.js');

const router = require('express').Router();

router.post('/', controller.createStudent); //stud
router.get('/', controller.getAllStudentData); //stud
router.get('/:sId', controller.getStudentById); //stud/:sId
router.put('/:sId', controller.updateStudentData); //stud/:sId
router.delete('/:sId', controller.deleteStudentData); //stud/:sId

module.exports = router;