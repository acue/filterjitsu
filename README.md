# jquery.filterjitsu.js

## Demo
```shell
 $ python -m SimpleHTTPServer 3000
```
Navigate to [http://localhost:3000](http://localhost:3000)

## Plugin Options
```js
  Filterjitsu.defaults = {
    /**
     * jQuery selector for all filterable elements
     * @type {String}
     */
    DATA_FILTERABLE: '[data-filterable]',
    /**
     * jQuery selector for field to show count
     * @type {String}
     */
    DATA_COUNT: '[data-count]'
    /**
     * jQuery selector for info
     * @type {String}
     */
    INFO_SELECTOR: '.info',
    /**
     * jQuery selector for breadcrumb
     * @type {String}
     */
    BREADCRUMB_SELECTOR: '.breadcrumb',
    /**
     * Array of video classifications
     * @type {Array}
     */
    CATEGORIES: ['official', 'international', 'unofficial']
  };
```

## Development
The development file lives under `src/jquery.filterjitsu.js`. To develop, first run `npm install` to
install the devDependencies.
```shell
 $ npm install
 $ gulp
 ... edit jquery.filterjitsu.js
 ... look in terminal for gulp output as you save
 $ python -m SimpleHTTPServer 3000
 ... test in [browser](http://localhost:3000)
```
