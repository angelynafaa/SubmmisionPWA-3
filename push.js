var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BH2f8yIc39hMPM60PxkP97FxT5r-EQxpvsht-rJiPhNYIE-zptYg_RmyjgmH2tcw4x86eNPc4wGwGPo0DJsEZ5M",
    "privateKey": "dKlC4TQ0cs5KpebLZZJ0qmZgjVdzbnoglSj301cybGc"
};
 
 
webPush.setVapidDetails(
    'angelyna826@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eyavSFuwUU4:APA91bFfToBUuMWKwDpY-p5SCiSpZaZGf8Rla6O_HRoLaHaHISFul0VhyRifhA25U4UFkyiFunoeEo8W_W47Ui2FnCM-X404Ix__btkGQ0Qsj0Yv5_pVHT0dPxUo2wvayD55e3RW7XLg",
    "keys": {
        "p256dh": "BKQWaK65qIc7DWNDYlXLA/ftcvuRJ8I3E2IRd7zrXosN/8TsN7mlx0FA0+uf7PJRIKLb6g5J82isggdW7zY7PME=",
        "auth": "xrhCHJsj4ToZnu1OwSB2RQ=="
    }
};
var payload = 'lets add your favourite teams!';
var options = {
    gcmAPIKey: '586657408159',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options)
    .catch(function(err){
        console.log(err);
    });;