const loginCheck = (req,res,next) => {
    const userlogin =true;
    if(userlogin) {
      next();
    } else {
      res.status(400).json({
        message:"login 실패",
      });
    }
}

module.exports = loginCheck;