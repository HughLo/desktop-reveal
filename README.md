# desktop-reveal

By combining reveal.js and electron, create a desktop experice of using reveal.js.
This application uses external markdown as the mean to compose the slides. 
The following table shows separator used by this application.

|reveal.js tag|separator|
|-------------|---------|
|data-separator-vertical|\|\|\|\|\||
|data-separator|---->|
|data-separator-note|Note:|

There is a file **reveal.md** under test folder, which can be used as a example for you to write external markdown.

# How-to

* Clone the project into your disk
* Run `npm install`(for people living in China, you may need to run `cnpm install` due to GFW)
* Run `npm run webpack` to generate bundle files
* Run `npm run prog` to start the adventure

> **Note**

> **New** button can not work right now. Enjoy your journey!


# TODO

- [ ] Create a workspace so that it can refer to local resources
- [ ] Create a slide editor
