# HTMX

1. Learn
  * What is HTMX?
    * Frontend library
  * What is it used for?
    * Making HTML pages interactive without extra JS
    * Everything is done through HTML attributes
  * What can we build with it?
    * Anything frontend....
    * Must have a custom backend that responds with HTML
  * Why should we use it?
    * Don't have to learn / use frontend frameworks
  * How do we get started?
    * Add htmx to an HTML page
      * Just like we would add any other JS lib
        * With a script tag
2. Build!
  * Setup SSR templating library
    * hbs
  * Autocomplete UI
    * https://tree-suggestion-api.deno.dev/?filter= 
    * UI with input and place to display suggestions
    * When filter changes, get suggestions
    * Show loading indicator
    * Show suggestions on page
    * If error, show error on page
    * Clear suggestions and error when filter is cleared
    * Debounce the input filter value
    * Abort / cancel requests when filter changes
3. Opinions / Results
  * We wrote 0 frontend JS
  * We wrote some server side rendered code
  * Docs are really good!
    * Inline examples are useful
  * Would I use it again?
    * Probably not...
      * Just not a fan of SSR
