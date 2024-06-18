"use strict";
n.d(t, {
  $x: function() {
    return i
  },
  GV: function() {
    return r
  },
  S$: function() {
    return g
  },
  Vn: function() {
    return o
  },
  tu: function() {
    return h
  }
});
var s = n(470079),
  l = n(31775),
  a = n.n(l);
let i = 0,
  r = 4,
  o = 4,
  c = "absolute",
  d = (e, t, n, s) => {
    if (0 === n) return [];
    if (1 === n) return [{
      width: e,
      height: t,
      top: 0,
      left: 0,
      position: c
    }];
    if (2 === n) {
      let n = Math.ceil((e - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: c,
        width: n,
        height: t
      }, {
        top: 0,
        left: n + s,
        position: c,
        width: n,
        height: t
      }]
    }
    if (3 === n) {
      let n = Math.ceil((e - s) / 2),
        l = Math.ceil((t - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: c,
        width: n,
        height: t
      }, {
        top: 0,
        left: n + s,
        position: c,
        width: n,
        height: l
      }, {
        top: l + s,
        left: n + s,
        position: c,
        width: n,
        height: l
      }]
    } else {
      let n = Math.ceil((e - s) / 2),
        l = Math.ceil((t - s) / 2);
      return [{
        top: 0,
        left: 0,
        position: c,
        width: n,
        height: l
      }, {
        top: l + s,
        left: 0,
        position: c,
        width: n,
        height: l
      }, {
        top: 0,
        left: n + s,
        position: c,
        width: n,
        height: l
      }, {
        top: l + s,
        left: n + s,
        position: c,
        width: n,
        height: l
      }]
    }
  },
  u = new(a())({
    max: 100
  });

function h(e) {
  let {
    numAttachments: t,
    containerWidth: n,
    containerHeight: l
  } = e;
  return s.useMemo(() => (function(e) {
    var t, n, s;
    let {
      numAttachments: l,
      containerWidth: a,
      containerHeight: i
    } = e;
    let r = (t = l, n = a, s = i, "".concat(t, "-").concat(n, "-").concat(s)),
      o = u.get(r);
    if (null != o) return o;
    {
      let e = d(a, i, l, 4);
      return u.set(r, e), e
    }
  })({
    numAttachments: t,
    containerWidth: n,
    containerHeight: l
  }), [t, n, l])
}

function m(e) {
  return e.map((t, n) => ({
    minWidth: 2 * e[n].width,
    minHeight: 2 * e[n].height,
    maxWidth: 2 * e[n].width,
    maxHeight: 2 * e[n].height
  }))
}

function g(e) {
  let {
    imageContainerStyles: t,
    containerWidth: n,
    containerHeight: l
  } = e, a = s.useRef(m(t)), i = s.useRef(n), r = s.useRef(l), o = n > i.current + 100, c = l > r.current + 100;
  return (o || c) && (a.current = m(t)), a.current
}