require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../models/user.model')
const employeeModel = require('../models/employee.model')

const salt = process.env.SALT;
const secret = process.env.TOKEN_SECRET;

const hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(+salt));
};

const isPasswordValid = (password, hashedPwd) => {
    return bcrypt.compareSync(password, hashedPwd);
};

const generateToken = async (user) => {
    const { employeeNumber } = user;
    const employee = await employeeModel.findOne({employeeNumber: employeeNumber });
    const {  officeCode, jobTitle } = employee;
    return jwt.sign({ employeeNumber, officeCode, jobTitle }, secret);
};


const addUser = async (req, res, next)=>{
    const { username, password, employeeNumber } = req.body;

    try{
        const user = new userModel({
            username,
            password: hashPassword(password),
            employeeNumber
        });
        const result = await user.save();
        return res.send({
            result,
            massage: 'successfully'
        })
    } catch (error){
        next(error)
    }
};

const login = async(req, res, next) => {
    const { username, password } = req.body;

    const user = await userModel.findOne({username: username });

    if(user){
        if (isPasswordValid(password, user.password)) {
            const token = await generateToken(user);
            return res.json({
                message: 'Authentication successful!',
                token,
                user,
            });
        } else {
            return res.json({message: 'Incorrect password'});
        }
    } else{
        return res.json({message: 'user is not define'});
    }
}

module.exports = {
    addUser,
    login
}