t.d(n, {
  Z: function() {
return f;
  }
});
var l = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  o = t(454585),
  s = t(937889),
  c = t(970184),
  u = t(870456),
  d = t(100684),
  m = t(153521);

function f(e) {
  let {
content: n,
className: t
  } = e, i = function(e) {
let n = (0, c.CJ)();
return (0, r.useMemo)(() => {
  let t;
  return null === n ? null : (t = null != n.message ? (0, s.rs)(n.message, u.u) : (0, s.p6)({
    channelId: n.channelId,
    renderOptions: u.u
  }), o.Z.parse(e, !0, t));
}, [
  e,
  n
]);
  }(n);
  return (0, l.jsx)('div', {
className: a()([
  t,
  m.markup,
  d.markdownContainer
]),
children: i
  });
}