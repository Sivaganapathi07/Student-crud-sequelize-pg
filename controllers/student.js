const Student = require('../models/student');


//CRUD controllers

// firstName
// surName
// company
// shortAddress
// completeAddress
// phoneNumber


//CREATE Student Data
exports.createStudent = (req,res,next) => {
    const fName = req.body.firstName;
    const sName = req.body.surName;
    const comp = req.body.company;
    const sAdd = req.body.shortAddress;
    const cAdd = req.body.completeAddress;
    const pNum = req.body.phoneNumber;

    Student.create({
        firstName:fName,
        surName:sName,
        company:comp,
        shortAddress:sAdd,
        completeAddress:cAdd,
        phoneNumber:pNum
    })
    .then((result)=>{
        res.status(200).json({message:'Record added successfully', result})
    })
    .catch((err)=>{
        res.status(500).json({message:'Something went wrong!'})
    })
}

//GetAll Student Data
exports.getAllStudentData = (req,res,next) => {
    Student.findAll()
    .then((stud)=>{
        res.status(200).json({stud:stud})
    })
    .catch((err)=>{
        res.status(500).json({message:'Something went wrong!'})
    })

}

//Get Student Data By ID
exports.getStudentById = (req,res,next) => {
    const sId = req.params.sId;

    Student.findByPk(sId)
        .then((stud)=>{
            if(!stud){
                res.status(404).json({message:'Data not found'})
            }
            res.status(200).json({stud:stud})
        })
        .catch((err)=>{
            res.status(500).json({message:'Something went wrong!'})
        })
}

//Update Student Data
exports.updateStudentData = (req,res,next) =>{
    const sId = req.params.sId;
    const updatedFName = req.body.firstName;
    const updatedSName = req.body.surName;
    const updatedComp = req.body.company;
    const updatedSAdd = req.body.shortAddress;
    const updatedCAdd = req.body.completeAddress;
    const updatedPNum = req.body.phoneNumber;

    Student.findByPk(sId)
        .then((stud)=>{
            if(!stud){
                return res.status(404).json({message:'Data not found'});
            }
            stud.firstName=updatedFName;
            stud.surName=updatedSName;
            stud.company=updatedComp;
            stud.shortAddress=updatedSAdd;
            stud.completeAddress=updatedCAdd;
            stud.phoneNumber=updatedPNum;
            
            return stud.save();
        })
        .then((result)=>{
            res.status(200).json({message:'Data updated', stud:result})
        })
        .catch((err)=>{
            res.status(500).json({message:'Something went wrong!'})
        })

}

//Delete Student
exports.deleteStudentData = (req,res,next) =>{
    const sId = req.params.sId;

    Student.findByPk(sId)
        .then((stud)=>{
            if(!stud){
                return res.status(404).json({message:'Data not found'})
            }
            return Student.destroy({
                where:{
                    id:sId
                }
            })
        })
        .then(()=>{
            res.status(200).json({message:'Record deleted'});
        })
        .catch((err)=>{
            res.status(500).json({message:'Something went wrong!'})
        })
}