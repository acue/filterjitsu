# jquery.filterjitsu.js

[View contributors](https://github.com/Fullscreen/filterjitsu/graphs/contributors)

## Demo
```shell
 $ python -m SimpleHTTPServer 3000
```
Navigate to [http://localhost:3000](http://localhost:3000)

## How to use
The filterjitsu plugin is initialized by being chained onto a list of jQuery objects. The plugin
accepts an options object which will override the defaults defined within the plugin.

Filterjitsu assumes a few things about the HTML and the URL structure on the page which it is
initialized. The `DATA_FILTERABLE` selector is required on each item that can be filtered, and for
that reason it is the best jQuery selector to initialize the plugin with (but this is up to you).
The filterable items are filtered based on key value pairs provided in the search query parameters of
the url that match data attributes on the filterable elements. For example, a URL with the search
query `?type=video&genre=comedy` would filter all elements that did not have the `data-type="video"`
or `data-genre="comedy"` data attributes. It is important to note that the url parameters form a
boolean OR when filtering out filterable elements.

The `data-count` attribute can be applied to any elment and will be updated with the current number
of elements displayed on the page after the main list of filterable elements ahve been filtered.

The `data-alert` attribute can be applied to an element and it will be populated with an alert with
a description about the visible elements based on how they were filterd.

Below is an example of how filterjitsu could be structured in HTML and initialized in javascript.
```html
  <!-- links to change url and cause filtering -->
  <a href="/">Clear filters</a>
  <a href="?type=WaterItem">Water Items</a>
  <a href="?type=LandItem">Land Items</a>
  <a href="?">All</a>
  <!-- items to be filtered -->
  <div data-alert></div>
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
    $.fn.filterjitsu({
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
    DATA_COUNT: '[data-count]',
    /**
     * jQuery selector for info
     * @type {String}
     */
    DATA_ALERT: '[data-alert]'
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

## Testing with Karma + Jasmine
```shell
 $ gulp test
```
