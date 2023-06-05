import express from 'express';
import ConnectDb from './db/connectDb.js';
import auth from './routes/auth.js';
import './config/passport.js';
import user from './models/User.js';
const app=express();

app.set('view engine',"ejs");//template engine
ConnectDb();

app.use('/auth',auth);

app.listen(3000,()=>{
    console.log('App is listening at port 3000');
});
