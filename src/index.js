import dotenv from "dotenv"
import connectDb from "./db/connectDB.js"
import {app} from "./app.js"
dotenv.config()
const PORT = process.env.PORT || 5000
connectDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`);
    })
})
.catch((error)=>(console.log("MONGODB CONNECTION FAILED"),error))
