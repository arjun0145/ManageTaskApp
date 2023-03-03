import express from 'express'
import  {fetchdata, savedata}  from '../controller/UserControll.js'

const  userrouter = express.Router()


userrouter.post("/savedata",savedata)
userrouter.post("/fetchdata",fetchdata)


export default userrouter ;     