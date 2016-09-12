# Asynchronous Pizza

This is small code-based illustration of the difference between callbacks and promises. After you clone this repo, `npm install`.

The `package.json` includes a couple of scripts to make it easier to debug the two files if you want to step through the scripts. To run them:

```
npm run callbacks
npm run promises
```

These should open Chrome and drop you in the dev tools. It will break immediately in `modules.js`. The scripts we're debugging have not began to run yet. Open `callbacks.js` or `promises.js` and set a breakpoint. Continue the debugger to break on your break point. Step through the code as you wish.

Of course you can also run them with Node directly.

```
node callbacks
node promises
```

Feel free to use them as a canvas to have a play.
