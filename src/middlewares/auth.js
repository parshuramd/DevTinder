const adminAuth = (req, res, next) => {
    const token = "xyzjhdfjh";
    const isAdminAuth = token === "xyz";
    if (!isAdminAuth) {
        res.status(401).send("Admin unauthorized")
    } else {
        next()
    }
}

const userAuth = (req, res, next) => {
    const token = "xyz";
    const isAdminAuth = token === "abc";
    if (!isAdminAuth) {
        res.status(401).send("user unauthorized")
    } else {
        next()
    }
}

module.exports = {
    adminAuth, userAuth
}