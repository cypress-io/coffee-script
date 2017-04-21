var exts = require.extensions

if(exts && exts['.coffee']){
  // dont do anything if we've already required
  // coffee-script
  return
}

// else go ahead and register it
require("coffee-script/register")
