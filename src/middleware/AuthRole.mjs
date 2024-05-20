export const authorizeRoles = (roles) => {
    return (req, res, next) => {
        if (req.user && roles.includes(req.role)) {
            next();
        } else {
            res.status(403).json({ message: "Access to the requested resource is forbidden" });
        }
    };
};