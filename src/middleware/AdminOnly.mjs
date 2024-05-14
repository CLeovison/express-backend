
export const AdminOnly  = (req, res, next) => {
    if(req.role === 'Admin'){
        next()
    }else{
        res.status(403).json({message: "Access to the requested resource is forbidden"})
    }
}