t.d(n, {
  Z: function() {
return o;
  }
}), t(724458), t(47120), t(653041);
var i = t(470079),
  l = t(442837),
  a = t(924301),
  r = t(765305);

function o(e, n) {
  let t = (0, l.Wu)([a.ZP], () => Object.values(a.ZP.getUsersForGuildEvent(e, null)), [e]),
o = (0, l.Wu)([a.ZP], () => Object.values(a.ZP.getUsersForGuildEvent(e, n)), [
  e,
  n
]);
  return (0, i.useMemo)(() => {
let e = o.reduce((e, n) => (e[n.user_id] = n, e), {}),
  n = t.filter(n => {
    let t = e[n.user_id];
    return null == t || t.response === r.gv.INTERESTED;
  }),
  i = o.filter(e => e.response === r.gv.INTERESTED),
  l = new Set(),
  a = [],
  c = e => {
    !l.has(e.user_id) && (a.push(e), l.add(e.user_id));
  };
return n.forEach(c), i.forEach(c), a;
  }, [
t,
o
  ]);
}