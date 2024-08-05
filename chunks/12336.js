
function r(e) {
  let t;
  let n = new Set(),
r = (e, r) => {
  let i = 'function' == typeof e ? e(t) : e;
  if (i !== t) {
    let e = t;
    t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e));
  }
},
i = () => t,
a = (e, r = i, a = Object.is) => {
  console.warn('[DEPRECATED] Please use `subscribeWithSelector` middleware');
  let s = r(t);

  function o() {
    let n = r(t);
    if (!a(s, n)) {
      let t = s;
      e(s = n, t);
    }
  }
  return n.add(o), () => n.delete(o);
},
s = {
  setState: r,
  getState: i,
  subscribe: (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
  destroy: () => n.clear()
};
  return t = e(r, i, s), s;
}
n.d(t, {
  Z: function() {
return r;
  }
});