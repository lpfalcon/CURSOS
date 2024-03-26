exports.sucess = (req, res, message, status = 200) => {
  res.status(status).send({
    error: false,
    body: message || '',
    status,
  });
};

exports.error = (req, res, message, status = 500) => {
  res.status(status).send({
    error: true,
    body: message || 'Internal Server Error',
    status,
  });
};
