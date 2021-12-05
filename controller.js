const { User, userProfile } = require('./model')

exports.createUser = async  (req,res) => {
    try{
        const { name, username, email, contact, address} = req.body;
        const userprofile = await userProfile.create({
            email, contact, address
        });
        
        const user = await User.create({
            name, username
        });

        return res.status(201).send({
            user, userprofile
        })
    }catch(e){
        console.log(e)
        res.status(500).send("something went wrong")
    }
    

}