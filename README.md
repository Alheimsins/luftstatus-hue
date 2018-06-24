[![Build Status](https://travis-ci.com/Alheimsins/luftstatus-hue.svg?branch=master)](https://travis-ci.com/Alheimsins/luftstatus-hue)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# luftstatus-hue

Change the colour of your Philips hue lightbulb according to air pollution status from [luftstatus.no](https://luftstatus.no/)

# Setup

To make this work you'll need the IP for your bridge, a user for the bridge and the number for the lightbulb you will use. You will also need to add the Area you want to check.

If you have all this just update the values in [config.json](config.json).

```JavaScript
{
  "bridge": "127.0.0.1",
  "username": "c1faa0ab-11aa-466a-b87e-20aefbccfb8b",
  "light": 1,
  "serviceUrl": "https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json",
  "area": "Grenland",
  "pollIntervalMinutes": 60
}
```

If you don't know there is still hope.

## Find the Area

Pick your area from [this list](https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json)

Add it to [config.json](config.json)

## Find bridgeip and add a user

First run the setup script

```
$ npm run setup
```

This will result in an error. Now push the link-button on your bridge and rund the script again.

```
$ npm run setup
```

Add the values to [config.json](config.json) and move on.

## Find your lightbulbs

Run the list script

```
$ npm run list
```

Find the light you want and add it to [config.json](config.json)

You are now ready to start.

# Start

```
$ npm start
```

As long as it runs the script will check the status every config.pollIntervalMinutes (defaults to 60)

## License

[MIT](LICENSE)

![Robohash image of luftstatus-hue](https://robots.kebabstudios.party/luftstatus-hue.png "Robohash image of luftstatus-hue")
