# Fireball

Fireball intends to be your go-to starter tool for Meteor apps. While the freedom Meteor provides in the way you structure your projects is nice, I found it hard to start as a beginner in Meteor.

I was searching for best practices and keept refactoring the small app I was writing at that moment. It was a slow and tedious process.

This is an opinionated way of writing Meteor applications. Soon, I will try to explain the reasoning behind each decision and why I didn't choose an existing boilerplate.

### Main Folders

```
/client - views & interactions
/server - startup & other
/domain - data related stuff
/public - static assets
/styles - ui scss layer
/mobile - specific for cordova
/routes - route files
```

---

### Detailed File Structure

```
/server                # startup, seeds

/client                # views, interactions
-- /tasks
---- templates.html
---- helpers.js
---- events.js
---- subscriptions.js
---- styles.css
--routes.js            # use this or /routes folder

/domain                # data related stuff
-- /tasks
---- collection.js     # collection & schema
---- publications.js   # server only
---- methods.js        # rpc calls

/public                # static assets

/mobile                # specific for cordova

/styles                # ui scss layer

/routes                # route files

config.json
```

#### Questions

- **Q** Where to put the code for sending emails?
  - **A** In `/domain` folder.
- **Q** Where to put the routes?
  - **A** In `/client/routes.js` or in `/routes` folder (if you want to split them further)
- **Q** Should we include jshint/eslint or leave it up to the users?
- **Q** Should we use ES6 or ES5?
- **Q** What packages should we include in the core?
- **Q** Anything else we should put in `.gitignore`?

#### Ideas

1. Have CLI tool for scaffolding
  - `fireball create collection {name}` will create
    - `collection.js`
    - `publications.js`
    - `methods.js`
  - `fireball create template {name}` will create
    - `template.html`
    - `helpers.js`
    - `events.js`
    - `subscriptions.js`
    - `styles.css`
2. Create some sample apps
  - will helps users see where to put every piece of code
  - a good process to validate the structure