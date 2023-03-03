import { StatusCodes } from "http-status-codes";
import usermodel from "../model/UserModel.js";

export async function savedata(req, res) {
    try {
        const user = new usermodel(req.body)
        const s = await user.save()
        console.log(s);
        res.status(StatusCodes.CREATED).json(s)
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: " data not saved " })

    }
}




export async function fetchdata(req, res) {
    try {
        console.log(req.body)
        let filter = { email: req.body.email }
        const s = await usermodel.findOne(filter)
        console.log(s);
        if (s.password == req.body.password) {
            res.status(StatusCodes.OK).json(s)

        }
        else {
            res.status(StatusCodes.UNAUTHORIZED).json({ massage: "invalid password" })
        }
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massage: " data not saved " })

    }
}



