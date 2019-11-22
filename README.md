# makerjs-simple-page
Simple Maker.js project environment

This will give you a basic page for developing and viewing your Maker.js model. Thanks to [Parcel](https://parceljs.org/) you will get hot module reloading. This means that when you edit/save a file, the page will refresh automatically.

## Setup
```
git clone https://github.com/danmarshall/makerjs-simple-page.git
cd makerjs-simple-page
npm install
```

## Run
```
npm start
```
This will start a Parcel development web server, and automatically open http://localhost:1234/

![image](https://user-images.githubusercontent.com/11507384/69370053-06410f00-0c52-11ea-96c2-e7bb1e369045.png)

# Modify
* Edit `smile.js` and save. The browser page will show your new drawing automatically. 
* Change parameters in `index.js`.
* Add other modules in `package.json` and `require` them, Parcel will handle all the module bundling for you!
