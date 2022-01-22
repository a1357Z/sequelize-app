const { User, userProfile } = require('./model')

exports.createUser = async  (req,res) => {
    try{
        const { name, username, email, contact, address, married} = req.body;

        let obj = {
            name, username
        }
        const user = await User.create(obj);

        const userprofile = await userProfile.create({
            email, contact, address, married, userId: user.getDataValue("id")
        });
        
        return res.status(201).send({
            userprofile,
            user
        })
    }catch(e){
        console.log(e)
        res.status(500).send("something went wrong")
    }
}

exports.deleteUser = async function(req, res){
    try {
        const { id }= req.body;
        let count = await User.destroy({
            where:{
                id
            }
        })
        if(count >0)return res.status(201).send("successfully deleted the user")
        return res.status(500).send("something went wrong");
    } catch (error) {
        res.status(500).send("something went wrong");
    }
}