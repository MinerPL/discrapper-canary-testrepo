"use strict";
t.d(s, {
  Z: function() {
    return l
  }
}), t(47120);
var n = t(225857),
  i = t(290843);

function l(e, s, t, l) {
  let [{
    isDragging: a
  }, r, o] = (0, n.c)({
    type: s,
    item: () => ({
      index: t
    }),
    collect: e => ({
      isDragging: e.isDragging()
    })
  }), [, c] = (0, i.L)({
    accept: s,
    hover(s, n) {
      if (null == e.current) return;
      let i = s.index;
      if (i === t) return;
      let a = e.current.getBoundingClientRect(),
        r = (a.bottom - a.top) / 2,
        o = n.getClientOffset().y - a.top;
      if ((!(i < t) || !(o < r)) && (!(i > t) || !(o > r))) l(i, t), s.index = t
    }
  });
  return {
    drag: r,
    dragPreview: o,
    drop: c,
    isDragging: a
  }
}