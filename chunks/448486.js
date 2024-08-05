n.d(t, {
  _: function() {
return u;
  }
});
var l = n(470079),
  a = n(442837),
  i = n(594174),
  s = n(823379),
  r = n(51144),
  o = n(689938);

function u(e) {
  let t = (0, a.Wu)([i.default], () => e.recipients.map(e => i.default.getUser(e)).filter(s.lm).map(e => r.ZP.getName(e)));
  return l.useMemo(() => '' === e.name ? null : function(e) {
if (0 === e.length)
  return null;
if (1 === e.length)
  return o.Z.Messages.USER_SUMMARY_ONE.format({
    first: e[0]
  });
if (2 === e.length)
  return o.Z.Messages.USER_SUMMARY_TWO.format({
    first: e[0],
    second: e[1]
  });
if (3 === e.length)
  return o.Z.Messages.USER_SUMMARY_THREE.format({
    first: e[0],
    second: e[1],
    third: e[2]
  });
let t = e.length - 3;
return o.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
  first: e[0],
  second: e[1],
  third: e[2],
  count: t
});
  }(t), [
e,
t
  ]);
}