// checks if Jquery is loaded
try {
  console.log(jQuery);
  console.log(typeof jQuery);

  console.log(jQuery());
  console.log(typeof jQuery());

  console.log(jQuery().jquery);
  console.log(typeof jQuery().jquery);
} catch (e) {
  console.log(e);
}

// If jQuery is ready to be used console logs
//"jQuery has been loaded correctly"

if ("undefined" == typeof window.jQuery) {
  console.log("jQuery has not been loaded correctly");
} else {
  console.log("jQuery has been loaded correctly");
}
