const employeeModel = require('../models/employee.model')

// get all employee
const getAllEmployee = async (req, res, next) => {
    const result = await employeeModel.find().exec();
    return res.send(result);
};

// get employee by id
const getEmployeeById = async (req, res) => {
    const employee = await employeeModel.findOne({employeeNumber: req.params.id  }).exec();
    res.send(employee);
};

// add new employee
const addEmployee = async (req, res)=>{
    const employee = new employeeModel(req.body);
    const result = await employee.save();
    res.send(result)
};

// update employee
const updateEmployee = async (req, res)=>{
    const employee = await employeeModel.findOne({ employeeNumber: req.params.id }).exec();
    employee.set(req.body);
    const result = await employee.save();
    res.send(result);
};

// delete employee
const deleteEmployee = async (req, res)=>{
    const result = await employeeModel.deleteOne({ employeeNumber: req.params.id }).exec();
    res.send(result);
    res.status(500).send(error);
};


module.exports = {
    getAllEmployee,
    getEmployeeById, 
    addEmployee,
    updateEmployee,
    deleteEmployee
}