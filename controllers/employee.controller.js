const employeeModel = require('../models/employee.model')

// get all employee
const getAllEmployee = async (req, res, next) => {
    try{
        const result = await employeeModel.find().exec();
        return res.send(result);
    } catch (error) {
        next(error)
    }
};

// get employee by id
const getEmployeeById = async (req, res) => {
    try{
        const employee = await employeeModel.findOne({employeeNumber: req.params.id  }).exec();
        return res.send(employee);
    } catch (error){
        next(error)
    }
};

// add new employee
const addEmployee = async (req, res)=>{
    try{
        const employee = new employeeModel(req.body);
        const result = await employee.save();
        return res.send(result)
    } catch (error){
        next(error)
    }
};

// update employee
const updateEmployee = async (req, res)=>{
    try{
        const employee = await employeeModel.findOne({ employeeNumber: req.params.id }).exec();
        employee.set(req.body);
        const result = await employee.save();
        return res.send(result);
    } catch (error){
        next(error)
    }
};

// delete employee
const deleteEmployee = async (req, res)=>{
    try{
        const result = await employeeModel.deleteOne({ employeeNumber: req.params.id }).exec();
        return res.send(result);
    } catch (error){
        next(error)
    }
};


module.exports = {
    getAllEmployee,
    getEmployeeById, 
    addEmployee,
    updateEmployee,
    deleteEmployee
}