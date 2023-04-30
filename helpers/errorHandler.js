const handleErrorResponse = (res, statusCode, error) => {
    console.error(error);
    res.status(statusCode).json({ error: error.message });
  };
  
  module.exports = {
    handleErrorResponse,
  };
  