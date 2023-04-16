const catchAsync = (handler) => {
  return (req, res, next) => {
    try {
      handler();
      next();
    } catch (error) {
      res.status(500).json("Something Went Worng");
    }
  };
};
module.exports = catchAsync;
