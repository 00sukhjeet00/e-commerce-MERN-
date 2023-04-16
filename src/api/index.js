const express = require("express");
const router = express.Router();

router.use("/health", (req, res, next) => {
  res.json({
    status: "success",
    message: "server is active",
  });
});

// const userRouter = require("./user/index");
// router.use("/user", userRouter);

// const venueRouter = require("./venue/index");
// router.use("/venue", venueRouter);

// const outletRouter = require("./outlet/index");
// router.use("/outlet", outletRouter);

module.exports = router;