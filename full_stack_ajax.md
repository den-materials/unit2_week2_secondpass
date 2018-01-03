# Let's Go Full Stack!

>**Note:** This will be a pair programming activity.  You will only need to use one computer, but make sure one partner is driving half the time, and the other driving the other half.

## A Full Stack App From Scratch

There is no starter code for this app, just bullet points and the knowledge that you can use any earlier homeworks or lessons as a reference.  The journey is more important than the finished product here (solution coming soon), so just get as far as you can and focus on learning with your partner.

### Summary

Throughout this lab, we will hit a lot of the pieces we introduced earlier in the unit.  In order, you will:

1. Achieve a server-side "Hello World"
2. Include jQuery in your front end
3. Make a request to the back end with AJAX
4. Respond to this request with Express
5. Seed your database
6. Use this database to respond to the AJAX request

### Step 1: Hello Server!

In order to set up our server, we need to do a few things:

- Create a new folder called `JSON_server`
- Go into this folder and `init` `npm` inside
- `install` `express` and `mongoose` with `npm`
- `require` `express` and `mongoose` inside a `server.js` file
- Add an `app.get` listener on `/` (i.e. `http://localhost:3000/`) in `server.js`
- Make this listener `send` a `res`ponse of "Hello `<yourPartnersName>`"
- Start up your `server.js` with `node` or `nodemon`
- Make sure you can see your quote in the browser

### Step 2: Hello Client!

- Replace the `app.get` response from before with a `sendFile` that sends an `index.html` file
- Make this `index.html` file with some HTML boilerplate (think Sublime shortcuts)
- Move your "Hello `<yourPartnersName>`" from before into an `<h1>` tag in `index.html`
- Add jQuery to this project from a CDN link (Google is your best friend here)
- Add a `<script>` tag to the bottom of your `index.html` file that `console.log`s "Front End is working!"\*
- Make sure you can see the heading and `console.log` in the browser

\*  Does having JS inside your HTML file bother you?  It probably does.  Stay tuned for a stretch goal to fix this issue.

### Step 3: AJAX Request

- In the `index.html` `<script>` tag make a jQuery AJAX `$.get` request to `/api`.
- `console.log` the `response` to this query
- Look in Developer Tools.  Oh no, we're failing...or...oh yay, we have an error message!

### Step 4: Express Response

- In `server.js` add a listener for the `/api` GET request you just sent.
- `res`pond with the following object in JSON format: `{name: <yourPartnersName>}`

### Step 5: Seeding a Database

- Make a file called `person.js`
- Require `mongoose` in this file
- Create a `Schema` for a `Person` with a `name` field that is a `String`
- Create a `Model` for a `Person`
- `export` this `Model` as a `module`
- Create a file called `seed.js`
- `require` `person.js` in your seed file
- Connect to a database called `json_server` in your seed file
- `create` a new `Person` with the JSON from step 4
- Check the `mongo` CLI to make sure your person was added to the `people` collection in the `json_server` database

### Step 6: Use the DB in Express Response

- `require` `person.js` in `server.js`
- Connect to a database called `json_server` in your server file
- Change the `/api` response to `findOne` `Person` from the DB first, then respond with that person instead of the hardcoded JSON from Step 4
- Check Developer Tools to make sure your DB name is showing up (it should have an `_id` property now)
- Change the `html` of the `h1` to have the name you are getting from the DB (DOM Manipulation: the return)

### Pairs

![](team_awesome.jpg)

First, come up to the front of the room.

Now, on a scale of 1-5 how confident do you feel in your ability to code this app out with a partner?

Raise this number in the air, and find a partner that has the same number as you.

Figure out whose laptop you're using, and who's typing first, then dive in!

### Stretch Goals

- Remember that `<script>` tag in our HTML file?  That's a little messy.  Pull this into its own JS file and put that file inside a `public` folder.  Then "serve up a static folder with Express"?  If you don't remember how to do this, that quote is an excellent question for Google.
- Everything for the back end is in `server.js` right now.  Move the routes and `model` work into their own files.
