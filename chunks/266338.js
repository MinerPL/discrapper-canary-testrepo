n.d(t, {
  UC: function() {
return l;
  },
  YP: function() {
return o;
  },
  c: function() {
return s;
  }
}), n(47120);
let r = new WeakMap(),
  i = new WeakMap();

function a(e, t) {
  e.forEach(e => {
var n;
let r = null === (n = i.get(t)) || void 0 === n ? void 0 : n.get(e.target);
null != r && r.call(null, e);
  });
}

function s(e) {
  let t = r.get(e);
  return null == t && (t = new IntersectionObserver(a, e), r.set(e, t), i.set(t, new WeakMap())), t;
}

function o(e, t, n) {
  var r;
  let a = null !== (r = i.get(e)) && void 0 !== r ? r : new WeakMap();
  !a.has(t) && e.observe(t), a.set(t, n), i.set(e, a);
}

function l(e, t) {
  var n;
  let r = null !== (n = i.get(e)) && void 0 !== n ? n : new WeakMap();
  r.has(t) && (r.delete(t), e.unobserve(t), i.set(e, r));
}