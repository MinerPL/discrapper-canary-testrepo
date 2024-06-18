"use strict";
n.d(t, {
  J: function() {
    return s
  },
  Z: function() {
    return o
  }
});
var i = n(470079),
  r = n(149203);

function s(e) {
  let {
    topEmojis: t,
    newlyAddedEmojis: n,
    rowSize: i = r.N6
  } = e, s = t.slice(0, i - n.length);
  return {
    visibleTopEmojis: s,
    visibleNewlyAddedEmojis: n,
    allEmojis: s.concat(n)
  }
}

function o(e) {
  return i.useMemo(() => s(e), [e])
}