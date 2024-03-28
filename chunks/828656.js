"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var a = s("942389");

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
        o = a.getClientOffset().y - i.top;
      if (!(n < s) || !(o < r))(!(n > s) || !(o > r)) && (l(n, s), t.index = s)
    }
  });
  return {
    drag: i,
    dragPreview: r,
    drop: o,
    isDragging: n
  }
}