# Transition End

Listen for css transition ends, with delays and transition type targeting.

Call function when height and width transitions end (space delimited string for multiple transitions)
```
$('.box').transitionend('height width', function(e) {
   console.log(e);
});
```

Call function when height transition ends
```
$('.box').transitionend('height', function(e) {
   console.log('hello world');
});
```

Call function when each transitions has ended
```
$('.box').transitionend(function(e) {
   console.log('hello world');
});
```

You can also pass in a number to delay the callback. Add as a number, in milisecond format
```
$('.box').transitionend(2000, function(e) {
   console.log('hello world with 2 second delay');
});
```

Pass in the string ```'one'``` or ```'on'``` to adjust the type of event handler you'd prefer to use. 'one'is used by default. More details here: [one](http://api.jquery.com/one/) and [on](http://api.jquery.com/on/)
```
$('.box').transitionend('on', function(e) {
   console.log('hello world');
});
```
