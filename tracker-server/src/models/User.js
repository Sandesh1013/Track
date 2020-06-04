const mongoose = require('mongoose');
const bcryt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }

    bcryt.genSalt(10, (err, salt) =>{
        if (err){
            return next(err);
        }

        bcryt.hash( user.password, salt, (err, hash)=> {

            if(err){
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

//Here we are using keyword 'function' instead of arrow function because
// in the later case, value of 'this' will be set to the context of the file
//while using function keyword sets 'this' to the user

userSchema.methods.comparePassword = function comparePassword( candidatePassword ){
    const user = this;

    return new Promise (( resolve,reject ) => {
        bcryt.compare( candidatePassword, user.password, (err,isMatch)=>{
            if(err){
                return reject(err);
            }
    
            if(!isMatch){
                return reject(false);
            }
    
            resolve(true);
        });
    });
};

mongoose.model('User', userSchema);