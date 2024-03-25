"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("222007");
var a = s("476042");

function l(e, t, s, l) {
  let [{
    isDragging: n
  }, i, r] = (0, a.useDrag)({
    type: t,
    item: () => ({
      index: s
    }),
    collect: e => ({
      isDragging: e.isDragging()
    })
  }), [, o] = (0, a.useDrop)({
    accept: t,
    hover(t, a) {
      if (null == e.current) return;
      let n = t.index;
      if (n === s) return;
      let i = e.current.getBoundingClientRect(),
        r = (i.bottom - i.top) / 2,
        o = a.getClientOffset(),
        d = o.y - i.top;
      if (!(n < s) || !(d < r))(!(n > s) || !(d > r)) && (l(n, s), t.index = s)
    }
  });
  return {
    drag: i,
    dragPreview: r,
    drop: o,
    isDragging: n
  }
}