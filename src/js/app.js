'use strict';
//precompiled handlebars template to display user info
import template from '../templates/compiled/li-tile';

const url = 'https://wind-bow.glitch.me/twitch-api',
    userArr = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    ],
    apiArr = [];

    //cacheDom
const domUL = document.getElementById('channels-ul');

init();

function init() {
    getUsers(userArr);
}

function getUsers(arr) {
    arr.forEach(getApi)
}

function getApi(userName) {
    fetch(`${url}/channels/${userName}`)
        .then((res) => res.json())
        .then((data) => {
            return fetch(`${url}/streams/${userName}`)
                .then((res) => res.json())
                .then((stream) => {
                    if (stream) {
                        data.active = 'online';
                        data.stream = stream;
                    }
                    apiArr.push(data);
                    renderTemplate(data);
                })
        })
        .catch((err) => console.log(err));
}

function renderTemplate(context) {
    domUL.insertAdjacentHTML('beforeend', template(context));
}
