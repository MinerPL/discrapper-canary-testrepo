"use strict";
n.d(t, {
  a: function() {
    return r
  },
  w: function() {
    return s
  }
});
var i = n(231338);

function r(e) {
  return e === i.BR.LIGHT
}

function s(e) {
  switch (e) {
    case i.BR.DARK:
    case i.BR.MIDNIGHT:
    case i.BR.DARKER:
      return !0;
    default:
      return !1
  }
}