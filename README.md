# CSS Transition End Listener

Listen for css transition events. You can delay callbacks and target specific transition types.

## Listener functions
- transitionend() - [Official Documenation](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
- ~~transitionstart()~~ This doesn't exist, sorry.
- ~~transitioniteration()~~ This doesn't exist, sorry.

**Check out my [Animations Listener plugin](https://github.com/marknotton/animation-listener) if you want to listen for animation events as well as all the features of this plugin**

Three parameters are returned to the function.

| Param | Type   | Description
| ----- | ------ | -----------
| 1     | string | The animation name or transition type.
| 2     | number | The iteration count.
| 3     | object | The full event object

### Transition Examples

Call a function when height and width transitions have ended (use space delimited string for multiple transition types or an array of strings).
The transition type will be returned as the first parameter. The event object is returned as the second parameter.
```
$('.box').transitionend('height width', function(type) {
   console.log(type + ' has finished transitioning');
});
```

Call a function when only the height transition ends.
```
$('.box').transitionend('height', function(type) {
   console.log(type + ' has finished transitioning');
});
```

Call a function when every transition has ended. The callback function will be called for each transition type.
```
$('.box').transitionend(function(type) {
  console.log(type + ' has finished transitioning');
});
```

You can also pass in a number to delay the callback. Add as a number, in the milisecond format.
```
$('.box').transitionend(2000, function() {
  console.log('transition ended 2 seconds ago');
});
```

You can call query the amount of times this transition had ended
```
$('.box').transitionend(function(type, count) {
  console.log('This transition has happened' + count + 'times');
});
```

----

### On or One
Passing in the string ```'one'``` or ```'on'``` will adjust the type of event handler you'd prefer to use. 'on' is used by default. What's the different? [one](http://api.jquery.com/one/) removes the event listener after being run once. [on](http://api.jquery.com/on/) will continue to listen for the transition event.
```
$('.box').animationend('one', function(e) {
   console.log('hello world');
});
```

## Help is always appreciated

If anyone has the time and courtesy to fork out a vanilla (non-jQuery dependant) version of this plugin, that would be greatly appreciated.
