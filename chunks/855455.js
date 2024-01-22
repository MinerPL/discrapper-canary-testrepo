"use strict";
s.r(t), s.d(t, {
  MOSAIC_MIN_INDEX: function() {
    return r
  },
  MOSAIC_MAX_INDEX: function() {
    return i
  },
  MOSAIC_MAX_IMAGE_COUNT: function() {
    return o
  },
  useImageContainerStyles: function() {
    return m
  },
  useImageDimensionStyles: function() {
    return f
  }
});
var a = s("884691"),
  n = s("693566"),
  l = s.n(n);
let r = 0,
  i = 4,
  o = 4,
  u = "absolute",
  d = (e, t, s, a) => {
    if (0 === s) return [];
    if (1 === s) return [{
      width: e,
      height: t,
      top: 0,
      left: 0,
      position: u
    }];
    if (2 === s) {
      let s = Math.ceil((e - a) / 2);
      return [{
        top: 0,
        left: 0,
        position: u,
        width: s,
        height: t
      }, {
        top: 0,
        left: s + a,
        position: u,
        width: s,
        height: t
      }]
    }
    if (3 === s) {
      let s = Math.ceil((e - a) / 2),
        n = Math.ceil((t - a) / 2);
      return [{
        top: 0,
        left: 0,
        position: u,
        width: s,
        height: t
      }, {
        top: 0,
        left: s + a,
        position: u,
        width: s,
        height: n
      }, {
        top: n + a,
        left: s + a,
        position: u,
        width: s,
        height: n
      }]
    } else {
      let s = Math.ceil((e - a) / 2),
        n = Math.ceil((t - a) / 2);
      return [{
        top: 0,
        left: 0,
        position: u,
        width: s,
        height: n
      }, {
        top: n + a,
        left: 0,
        position: u,
        width: s,
        height: n
      }, {
        top: 0,
        left: s + a,
        position: u,
        width: s,
        height: n
      }, {
        top: n + a,
        left: s + a,
        position: u,
        width: s,
        height: n
      }]
    }
  },
  c = new l({
    max: 100
  });

function m(e) {
  let {
    numAttachments: t,
    containerWidth: s,
    containerHeight: n
  } = e;
  return a.useMemo(() => (function(e) {
    var t, s, a;
    let {
      numAttachments: n,
      containerWidth: l,
      containerHeight: r
    } = e;
    let i = (t = n, s = l, a = r, "".concat(t, "-").concat(s, "-").concat(a)),
      o = c.get(i);
    if (null != o) return o;
    {
      let e = d(l, r, n, 4);
      return c.set(i, e), e
    }
  })({
    numAttachments: t,
    containerWidth: s,
    containerHeight: n
  }), [t, s, n])
}

function h(e) {
  return e.map((t, s) => ({
    minWidth: 2 * e[s].width,
    minHeight: 2 * e[s].height,
    maxWidth: 2 * e[s].width,
    maxHeight: 2 * e[s].height
  }))
}

function f(e) {
  let {
    imageContainerStyles: t,
    containerWidth: s,
    containerHeight: n
  } = e, l = a.useRef(h(t)), r = a.useRef(s), i = a.useRef(n), o = s > r.current + 100, u = n > i.current + 100;
  return (o || u) && (l.current = h(t)), l.current
}