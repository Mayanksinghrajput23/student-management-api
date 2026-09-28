// Custom Logger Middleware
// Logs the HTTP method, requested URL, and timestamp for every incoming request

function logger(req, res, next) {
  const method = req.method;
  const url = req.originalUrl;
  const time = new Date().toISOString();

  console.log(`[${time}] ${method} ${url}`);

  next(); // pass control to the next middleware/route handler
}

module.exports = logger;
