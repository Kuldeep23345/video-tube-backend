const asyncHandler = (requestionHandler)=>{
  return  (req,res,next) =>{
        Promise.resolve(requestionHandler(req,res,next)).catch((Error)=>next(Error))
    }
}
export {asyncHandler}