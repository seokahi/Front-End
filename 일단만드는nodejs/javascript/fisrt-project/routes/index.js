var express = require('express');
var router = express.Router();
const loginCheck = require("../module/loginCheck");
let arr=[];
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', loginCheck,(req,res) => {
  res.status(200).json({
    message:"login success",
  });
})
// router.post("/", (req,res) => {
//   const data = req.body.data;
//   res.send("문자열이 응답됨");
//   res.json({
//     message:"json 응답"
//   })
//   // 템플릿 파일들을 주면 렌더링해서 보여줌
//   res.render("index");
// })

//get
// router.get('/read',(req,res)=> {
//   res.status(200);
//   res.json( {
//     message:"succes",
//   });
// })

//post 
// router.post('/create',(req,res)=> {
//   console.log(req.body.data);
//   arr.push(req.body.data);
//   res.status(200).json({
//     message:"create",
//     result:arr
//   });
  
// })

//put
// router.put('/update/:id',(req,res) => {
//   const {id} = req.params;
//   const {data} = req.body;
//   arr[id]= data;
//   res.status(200).json({
//     message:"sucess",
//     result: arr
//   });
// })

//delete 
// router.delete("/delete/:id",(req,res) => {
//   const {id}= req.params;
//   arr.splice(id,1);
//   res.status(200).json({
//     message:"성공삭제",
//     result: arr
//   });
// })
module.exports = router;
