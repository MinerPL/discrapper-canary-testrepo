"use strict";
n.d(t, {
  r: function() {
    return o
  }
});
var i = n(709054);
let r = 0,
  s = new i.SnowflakeSequence;

function o() {
  let e = Date.now();
  return r !== e && (s.reset(), r = e), i.default.fromTimestampWithSequence(e, s)
}