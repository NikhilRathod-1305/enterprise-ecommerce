const requestTime = async (req , res , next) => {
    try{
        throw new Error('Async error');
    }
    catch(err){
        next(err);
    }
}

export default requestTime;