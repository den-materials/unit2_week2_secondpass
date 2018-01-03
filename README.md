# Unit 2 Week 2 Second Pass

## Gulp

Gulp is a useful tool for automating tasks in order to increase productivity. Earlier, we used it for *transpiling* ES6 to ES5 and Sass into CSS.  It can also be used to minify code, and much more.

Let's take a look at how this works in Sensus...

## Controllers vs Routes

A **route** is a combination of a path (e.g. `/about`) and HTTP verb (e.g. `GET`) that allows a server to direct (route) a certain request to a certain response.

In an MVC architecture, a **controller** accepts input and converts it to commands for the model or view.  In Node/Express, this means a **controller** is the *callback function* that gets executed after a **route** is matched.

## Form Data vs JSON Data

For an HTTP request coming from the front-end, we have explored two options which are by far the most common methods for sending data from the front-end to the back-end on the Internet today:

### Form Data

When you create a form, you can give it an `action` and `method` attribute which together make a RESTful route (in the example below, the route is `POST /cars`):

```html
<form method="post" action="/cars">
  <input name="make">
  <input name="model">
  <input type="submit" value="Save Car">
</form>
```

This sends `make` and `model` in the body of a request to `POST /cars` of type `application/x-www-form-urlencoded`.  Look familiar?  That's probably because our body-parser package sometimes uses the following: `app.use(bodyParser.urlencoded({ extended: true }));`  The body when it gets to the back-end then looks like this: `make=Lamborghini&model=Diablo`.

### JSON Data

Another way to send data is with an AJAX request which again gives an `action` and `method` before sending the request (in the example below, the RESTful route is `POST /candy`):

```js
var candy = {name: "Caramello", description: "Chocolate with Caramel"}
$.post('/candy', candy, function(response) {
  console.log(response);
});
```

This sends the `candy` object in the body of a request to `POST /candy` of type `application/json`.  Look familiar?  That's probably because our body-parser package sometimes uses the following: ` app.use(bodyParser.json());`  The body when it gets to the back-end looks just like the `candy` object did on the front-end.

## JSON.parse vs JSON.stringify

- [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) is a function that converts a string that looks like an object or array into an object or array.
- [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) is a function that converts an object or array into a string that looks like an object or array.

If you are unsure of whether the variable you are currently printing is an object, array, or string, `console.log(response)` is not very helpful, because it prints them the same way.  In this case, you probably want to try `console.log(typeof(response))`.  This will print "string" or "object" for a String or Object, respectively.

## From the top, one more time!

![](fullStack.jpg)

## Starting Project 2

If you are feeling nervous about where to start with Project 2, [this activity](full_stack_ajax.md) is a helpful skeleton to follow.  It does not provide code, but does walk through all the steps to create a simple full stack app.
