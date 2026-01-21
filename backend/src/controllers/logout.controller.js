const logout = (req, res) => {
    res.clearCookie('refreshToken',
        {
            httpOnly: true,
            sameSite: 'strict'
        }
    )

    res.json({
        success:true,
        message:"Logged out successfully"
    })
}

export default logout;