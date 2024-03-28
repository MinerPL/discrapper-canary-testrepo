"use strict";
var n = r("851411"),
  i = r("122526"),
  o = r("909120"),
  a = r("553822");
t.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = e.getStartOffset(),
      i = e.getStartKey(),
      a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
    return o(t, n.getForward(a).length || 1)
  }, "forward");
  return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range")
}