const customerModel = require('../models/customer.model')

// get all customer
const getAllCustomer = async (req, res, next) => {
    try{
        const result = await customerModel.find().exec();
        return res.send(result);
    } catch (error){
        next(error)
    }
};

// get customer by id
const getCustomerById =async (req, res) => {
    try{
        const customer = await customerModel.findOne({customerNumber: req.params.id  }).exec();
        return res.send(customer);
    } catch (error){
        next(error)
    }
};

// add new customer
const addCustomer =async (req, res)=>{
    try{
        const customer = new customerModel(req.body);
        const result = await customer.save();
        return res.send(result)
    } catch (error){
        next(error)
    }
};

// update customer
const updateCustomer = async (req, res)=>{
    try{
        const customer = await customerModel.findOne({customerNumber: req.params.id }).exec();
        customer.set(req.body);
        const result = await customer.save();
        return res.send(result)
    } catch (error){
        next(error)
    }
};

// delete customer
const deleteCustomer =async (req, res)=>{
    try{
        const result = await customerModel.deleteOne({ customerNumber: req.params.id }).exec();
        return res.send(result);
    } catch (error){
        next(error)
    }
};

module.exports = {
    getAllCustomer,
    getCustomerById, 
    addCustomer,
    updateCustomer,
    deleteCustomer
}