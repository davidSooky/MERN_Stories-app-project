import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; // google tokens length is bigger then 500

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.TOKEN_SECRET);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; // Specific for google token
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;