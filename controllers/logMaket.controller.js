const loggerModel = require("../model/logger");
const {AppError, handleError} =  require("../utils/errorsHandle");

class LogMaker{
    creatLog = async(level,message,user,action) =>{
        try {
            await new loggerModel({
                level,
                message,
                user,
                action,
            }).save().then((log)=>log).catch((err)=>{
                throw new AppError(err.message, 500);
            })
        } catch (error) {
            throw new AppError(error.message,500)
        }
    }
}
module.exports= new LogMaker();