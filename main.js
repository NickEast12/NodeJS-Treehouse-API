// program that uses treehouses API and dispalys profile informaion
    // user event - mouse click
    // system event set timeout 
const https = require('https');


function printMessage(username, badgeCount, points, cssPoints, javascriptPoints) {
    const message= `${username} has ${badgeCount} badge/s, ${points} HTML points/s, ${cssPoints} CSS points and ${javascriptPoints} Javascript points`;
    console.log(message);
}
function getProfile(username) {
    // connect to the API
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        console.log(response.statusCode);
        let body = "";
        // read the data
        response.on('data', data => {
            body += data.toString();
        });
        response.on('end', () => {
            // parse(conver) the data
            const profile = JSON.parse(body);
            // print to console
            printMessage(username, profile.badges.length, profile.points.HTML, profile.points.CSS, profile.points.JavaScript);
        });
    });
}
getProfile('nickeast');
getProfile('chalkers');
getProfile('alenaholligan');
getProfile('guil');
getProfile('liamclarke');
