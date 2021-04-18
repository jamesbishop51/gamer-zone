const functions = require('firebase-functions');
const admin=require("firebase-admin");
admin.initializeApp();


exports.addAdminRole = functions.https.onCall((data) => {

    // add custom claim to user
    // setCustomerClaims is provided by firebase SDK functionality
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid, {
            admin:true
        })
    }).then(() => {
        return{
            message: `${data.email} setup as admin`
        }
    }).catch(err => {
        return err;
    })
})

exports.removeAdminRole = functions.https.onCall((data) => {

    // add custom claim to user
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid, null)
    }).then(() => {
        return{
            message: `${data.email} removed as admin`
        }
    }).catch(err => {
        return err;
    });
});
