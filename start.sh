#!/usr/bin/env bash

# Load vars in .env
export $(egrep -v '^#' /home/porto/www/wind-forecast/.env | xargs)

/usr/local/bin/node /home/porto/www/wind-forecast/index.js
