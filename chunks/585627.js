n.d(t, {
  JJ: function() {
return s;
  },
  KG: function() {
return i;
  },
  jo: function() {
return a;
  }
}), n(47120);
var r = n(260866);

function i(e, t) {
  return new Promise(n => {
let i = new IntersectionObserver(e => {
  let t = 0,
    a = null;
  for (let {
      isIntersecting: s,
      intersectionRatio: o,
      target: l
    }
    of e) {
    if (s && 1 === o) {
      i.disconnect();
      let e = l.getAttribute(r.ie);
      if (null != e)
        return n(e);
    }
    o > t && (t = o, a = l.getAttribute(r.ie));
  }
  i.disconnect(), n(a);
}, {
  root: e
});
for (let e of t)
  i.observe(e);
  });
}

function a(e, t) {
  return new Promise(n => {
let i = new IntersectionObserver(e => {
  let t = 0,
    a = null;
  for (let s = e.length - 1; s >= 0; s--) {
    let {
      isIntersecting: o,
      intersectionRatio: l,
      target: u
    } = e[s];
    if (o && 1 === l) {
      i.disconnect();
      let e = u.getAttribute(r.ie);
      if (null != e)
        return n(e);
    }
    l > t && (t = l, a = u.getAttribute(r.ie));
  }
  i.disconnect(), n(a);
}, {
  root: e
});
for (let e of t)
  i.observe(e);
  });
}

function s(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
  return new Promise(r => {
let i = new IntersectionObserver(e => {
  let t = e[0];
  i.disconnect(), r(t.intersectionRatio >= n);
}, {
  root: e
});
i.observe(t);
  });
}