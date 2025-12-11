module.exports = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  const message = process.env.NODE_ENV === 'development' ? err.message : 'Server Error';
  res.status(status).json({ message });
};
