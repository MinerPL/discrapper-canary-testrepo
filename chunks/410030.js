"use strict";
n.d(t, {
  Fg: function() {
    return s
  },
  i6: function() {
    return o
  }
});
var i = n(780384),
  r = n(981631);

function s() {
  let {
    theme: e
  } = (0, i.TC)();
  return e
}

function o() {
  return function(e) {
    switch (e) {
      case r.BRd.DARK:
        return 0;
      case r.BRd.LIGHT:
        return 1
    }
  }(s())
}
t.ZP = s