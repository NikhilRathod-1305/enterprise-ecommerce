export const healthCheck = ('/api/health', (req , res) => {
    res.status(200).json({
        success: true,
        message: 'Backend is running'
    });
});

export const versionCheck = (req, res) =>{
   throw new Error('Version API crahsed');
};

export const getTime = async (req, res, next) => {
    try{
        const currentTime = new Date();
        res.status(200).json({
            success: true,
            time: currentTime
        });
        throw new Error('Time API crashed');
    }
    catch(err){
        next(err);
    }
}
