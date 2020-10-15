# Wind forecast

REST API to serve GRIB2 wind forecast data as JSON.

## Setup
Install node dependencies
```
npm install
```

Start server
```
nmp start
```

## Endpoints
- **/latest** latest data available

## Notes

Currently, the HTTP server only serves a static JSON file, in order to update the file there're two ways:

1. Manually download the desired GRIB2 file and convert it using [grib2json](http://github.com/cambecc/grib2json)
2. Load vars from `.env` and set up the following cron jobs with a time of your choice (note that NCEP only updates GFS model every 6 hours):
	- `$PROJECT_PATH/start.sh`
	- `$PROJECT_PATH/converter/bin/grib2json --data --output $PROJECT_PATH/tmp/wind-global.json --names --compact $PROJECT_PATH/tmp/latest.grib2` 


## Environment variables

```
NODE_ENV=""
PORT=""

TMP_PATH=""
```
