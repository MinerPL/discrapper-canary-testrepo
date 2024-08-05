s.d(t, {
  _: function() {
return l;
  }
}), s(47120);
var n = s(470079),
  a = s(392711),
  i = s.n(a),
  r = s(442837),
  o = s(651941);

function l(e) {
  let t = (0, r.e7)([o.Z], () => o.Z.getUserVerifiedKeys(e));
  return n.useMemo(() => i()(t).entries().map(e => {
let [t, s] = e;
return {
  verifiedKey: t,
  timestamp: s
};
  }).sortBy(e => -1 * e.timestamp).value(), [t]);
}