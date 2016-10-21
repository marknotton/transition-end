

(function($) {
  var transitionEnd = 'webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend';

  $.fn.transitionend = function() {

    var args       = Array.prototype.slice.call(arguments);
    var options    = args.length > 1 ? args.slice(0,-1) : args;
    var callback   = args.pop();
    var transition = false;
    var delay      = false;
    var onOrOne    = 'one';

    // OPTIONS
    if ( options.length ) {
      for (var i in options) {
        var option = options[i];
        if ( typeof(option) === 'string' ) {
          if (option == 'on' || option == 'one') {
            onOrOne = option;
          } else {
            transition = option.split(' ');
          }
        } else if ( typeof(option) === 'array' ) {
          transition = option;
        } else if ( typeof(option) === 'number' ) {
          delay = option;
        }
      }
    }

    // ON
    if (onOrOne == 'on') {
      this.on(transitionEnd, function(event) {
        if ( transition === false ){
          // All transitions
          // console.log(event.originalEvent.propertyName + ' transition has finished.');
          return callback.apply(this, [event]);
        } else if ( transition.indexOf(event.originalEvent.propertyName) > -1)  {
          // Delay callback
          // console.log(event.originalEvent.propertyName + ' transition has finished.');
          if ( delay && delay !== 0 ) {
            setTimeout(function() {
              return callback.apply(this, [event]);
            }, delay);
          } else {
            return callback.apply(this, [event]);
          }
        }
      });
    } else {
    // ONE
      this.one(transitionEnd, function(event) {
        if ( transition === false ){
          // All transitions
          // console.log(event.originalEvent.propertyName + ' transition has finished.');
          return callback.apply(this, [event]);
        } else if ( transition.indexOf(event.originalEvent.propertyName) > -1)  {
          // Delay callback
          // console.log(event.originalEvent.propertyName + ' transition has finished.');
          if ( delay && delay !== 0 ) {
            setTimeout(function() {
              return callback.apply(this, [event]);
            }, delay);
          } else {
            return callback.apply(this, [event]);
          }
        }
      });
    }
  };
}( jQuery ));
