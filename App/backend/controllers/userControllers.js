import User from '../models/userModel.js';
import generateToken from '../config/generateToken.js';

const authUser = async(req,res)=>{
        const {email,password,role} = req.body;
        const user = await User.findOne({email});
        if(!user){
            res.status(401).send({message:"No such user found, try to register"});
            return;
        }
        else if(await user.matchPassword(password)){
            if(role!=user.role){
                res.status(401).send({message:"looks like you have selected an incorrect role"});
                return;
            }
            else{
                console.log("exex1");
                res.json({
                    _id : user._id, 
                    name : user.name,
                    email : user.email,
                    token : generateToken(user._id)
                });
                return;
            }
        }
        else{
            res.status(401).send({message:"Incorrect Password"});
            return;
        }   
}

const registeruser = async(req,res)=>{
    try{
        const {email,password,name,role} = req.body;
        if(!name || !email || !password || !role){
            res.status(401).send({message:'Please enter all the details'});
            return;
        }

        const userExists = await User.findOne({email});
        if(userExists){
            res.status(400).send({message:'User already exists, try to login'});
            return ;
        }

        const user = await User.create({
            name,password,email,role
        });

        if(!user){
            res.status(402).send({message:"Failed to create the user"});
            return;
        }

        res.status(201).send({message:"User created successfully, Proceed to login"});
    }
    catch(e){
        res.status(402).send('Some unexpected error occured');
    }
}

export {authUser,registeruser};