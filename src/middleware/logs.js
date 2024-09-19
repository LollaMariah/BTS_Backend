const middlewareLogRequest = (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} at ${new Date().toISOString()}`);
    next();
};

module.exports = middlewareLogRequest;
