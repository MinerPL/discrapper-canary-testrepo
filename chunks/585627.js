"use strict";
n.d(t, {
  JJ: function() {
    return o
  },
  KG: function() {
    return r
  },
  jo: function() {
    return s
  }
}), n(47120);
var i = n(260866);

function r(e, t) {
  return new Promise(n => {
    let r = new IntersectionObserver(e => {
      let t = 0,
        s = null;
      for (let {
          isIntersecting: o,
          intersectionRatio: a,
          target: l
        }
        of e) {
        if (o && 1 === a) {
          r.disconnect();
          let e = l.getAttribute(i.ie);
          if (null != e) return n(e)
        }
        a > t && (t = a, s = l.getAttribute(i.ie))
      }
      r.disconnect(), n(s)
    }, {
      root: e
    });
    for (let e of t) r.observe(e)
  })
}

function s(e, t) {
  return new Promise(n => {
    let r = new IntersectionObserver(e => {
      let t = 0,
        s = null;
      for (let o = e.length - 1; o >= 0; o--) {
        let {
          isIntersecting: a,
          intersectionRatio: l,
          target: u
        } = e[o];
        if (a && 1 === l) {
          r.disconnect();
          let e = u.getAttribute(i.ie);
          if (null != e) return n(e)
        }
        l > t && (t = l, s = u.getAttribute(i.ie))
      }
      r.disconnect(), n(s)
    }, {
      root: e
    });
    for (let e of t) r.observe(e)
  })
}

function o(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
  return new Promise(i => {
    let r = new IntersectionObserver(e => {
      let t = e[0];
      r.disconnect(), i(t.intersectionRatio >= n)
    }, {
      root: e
    });
    r.observe(t)
  })
}