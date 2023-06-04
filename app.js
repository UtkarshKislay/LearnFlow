import express from 'express';
import ConnectDb from './db/connectDb.js';
const app=express();
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';



app.set('view engine',"ejs");
ConnectDb();

passport.use(new GoogleStrategy({
    clientID:'33994256326-jeso97nreug3jjrtbe2uq8egabta6s2i.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'/auth/google/callback'
},(accessToken,refreshTocken,profile,done)=>{
    console.log(accessToken);
    console.log(refreshTocken);
    console.log(profile);
}));
app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}))

app.get('/auth/google/callback',passport.authenticate('google'));
// 33994256326-jeso97nreug3jjrtbe2uq8egabta6s2i.apps.googleusercontent.com
// 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
app.listen(3000,()=>{
    console.log('App is listening at port 3000');
})
