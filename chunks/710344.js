t.d(n, {
  Z: function() {
return a;
  }
}), t(47120);
var i = t(470079);

function a(e, n) {
  let [t, a] = i.useState(null), s = i.useCallback(e => {
a(e);
  }, []), l = i.useCallback(() => {
a(null);
  }, []), o = i.useCallback(i => {
l();
let a = e.find(e => {
    let {
      id: n
    } = e;
    return t === n;
  }),
  s = e.find(e => {
    let {
      id: n
    } = e;
    return i === n;
  });
if (null == a || null == s || a === s)
  return;
let o = [...e],
  r = o.indexOf(a),
  d = o.indexOf(s),
  c = d - r > 0 ? 1 : 0;
o.splice(r, 1), d = o.indexOf(s), o.splice(d + c, 0, a), n(o);
  }, [
e,
t,
l,
n
  ]);
  return {
draggingId: t,
handleDragStart: s,
handleDragReset: l,
handleDragComplete: o
  };
}