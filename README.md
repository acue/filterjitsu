# jquery.filterjitsu.js

## Demo
```shell
 $ python -m SimpleHTTPServer 3000
```
Navigate to [http://localhost:3000](http://localhost:3000)

## How to use
The filterjitsu plugin is initialized by being chained onto a list of jQuery objects. The plugin
accepts an options object which will override the defaults defined within the plugin.

Filterjitsu assumes a few things about the HTML structure on the page which it is initialized. The
`DATA_FILTERABLE` selector is required on each item that can be filtered, and for that reason it is
the best jQuery selector to initialize the plugin with (but this is up to you).
```html
  <!-- links to change url and cause filtering -->
  <a href="/">Clear filters</a>
  <a href="?type=WaterItem">Water Items</a>
  <a href="?type=LandItem">Land Items</a>
  <a href="?type=Item">All</a>
  <!-- items to be filtered -->
  <div class="info"></div>
  <div data-count></div>
  <div>
    <div data-filterable data-type="WaterItem">Surfboard</div>
    <div data-filterable data-type="LandItem">Skateboard</div>
    <div data-filterable data-type="WaterItem">Skimboard</div>
    <div data-filterable data-type="WaterItem">Paddleboard</div>
    <div data-filterable data-type="LandItem">Rollerblades</div>
    <div data-filterable data-type="LandItem">BMX Bike</div>
  </div>
  <!-- filterjitsu plugin -->
  <script>
    $('[data-filterable]').filterjitsu({
      // plugin options here
    });
  </script>
```

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
     * Descriptive word for what things are being filtered
     * @type {String}
     */
    ITEM_STRING: 'item',
    /**
     * URL param for type being filtered
     * @type {String}
     */
    ITEM_TYPE: 'Item'
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
