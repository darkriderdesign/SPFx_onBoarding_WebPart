## on-boarding-web-part-v-3

This is where you include your WebPart documentation.

you have to do this inorder to build for online: in this order

gulp clean
gulp build --ship
gulp bundle --ship
gulp package-solution --ship

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
