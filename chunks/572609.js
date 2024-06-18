"use strict";
var e = r(24033);
t.exports = function() {
  var t = e(this),
    n = "";
  return t.hasIndices && (n += "d"), t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.unicodeSets && (n += "v"), t.sticky && (n += "y"), n
}