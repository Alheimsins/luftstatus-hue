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
  "token": 'uihef98efuijef98fewfne0', // Optional. Only needed for remote api
  "serviceUrl": "https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json",
  "area": "Grenland",
  "pollIntervalMinutes": 60
}
```

If you don't know there is still hope.

## Find the Area

Pick your area from [this list](https://s3.eu-central-1.amazonaws.com/luftstatus/areas.json)

Add it to [config.json](config.json)

## Find bridgeip

First run find bridge script

```
$ npm run findBridge
```

This will return a list of bridges on your network.

```JavaScript
[
  {
    "id": "0287dgdt93",
    "internalipaddress": "192.168.1.110"
  }
]
```

Add the ```internalipaddress``` value to your config's ```bridge```

## Add a user

Push the link button on your bridge and run the addUser script

```
$ npm run addUser
```

```JavaScript
[
  {
    "success": {
      "username": "VK5h1bIbP6wtyAz6W4O5VbcuVqbrdqU4-iqLiyVU"
    }
  }
]
```

Add the values from ``` username ``` to [config.json](config.json) and move on.

## Find your lightbulbs

Run the list script

```
$ npm run list
```

Find the light you want to use and add the id to [config.json](config.json)

You are now ready to start.

# Start

```
$ npm start
```

As long as it runs the script will check the status every config.pollIntervalMinutes (defaults to 60)

## License

[MIT](LICENSE)

![Robohash image of luftstatus-hue](https://robots.kebabstudios.party/luftstatus-hue.png "Robohash image of luftstatus-hue")
