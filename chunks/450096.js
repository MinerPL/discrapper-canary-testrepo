n.d(t, {
  L: function() {
return o;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(470079),
  i = n(772848);
let a = new Worker(new URL(n.p + n.u('77459'), n.b));

function o(e, t, n) {
  let o = n && 1 === t && null != e,
[s, l] = r.useState(void 0);
  return r.useEffect(() => {
let t = !1;
if (o) {
  var n;
  (n = e, new Promise(e => {
    let t = (0, i.Z)(),
      r = n => {
        let {
          data: {
            id: i,
            png: o
          }
        } = n;
        t === i && (e(o), a.removeEventListener('message', r));
      };
    a.addEventListener('message', r), a.postMessage({
      id: t,
      placeholderData: n
    });
  })).then(e => {
    if (!t)
      l(e);
  });
}
return () => {
  t = !0;
};
  }, [
e,
o
  ]), s;
}