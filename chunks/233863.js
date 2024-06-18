"use strict";
n.d(e, {
  Y: function() {
    return u
  }
});
var r = n(607190),
  i = n(527475);
let s = -1,
  a = () => "hidden" !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0,
  o = () => {
    (0, i.u)(({
      timeStamp: t
    }) => {
      s = t
    }, !0)
  },
  u = () => (s < 0 && (s = a(), o()), {
    get firstHiddenTime() {
      return s
    }
  })