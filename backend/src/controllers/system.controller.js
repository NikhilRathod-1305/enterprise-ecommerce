export const healthCheck = ('/api/health', (req , res) => {
    res.status(200).json({
        success: true,
        message: 'Backend is running'
    });
});

export const versionCheck = ('/api/version', (req, res) =>{
    res.json({
        version:'1.0.0'
    });
});

export const getTime = ('/api/time' , (req, res) => {
    res.json({
        time: new Date()
    });
});
