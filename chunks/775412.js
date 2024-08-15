n.d(t, {
  _O: function() {
return s;
  },
  rT: function() {
return o;
  }
});
var r = n(442837),
  i = n(594174),
  a = n(78839);
n(474936);
let s = () => {
  let e = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription());
  return (null == e ? void 0 : e.trialId) != null;
};

function o() {
  let e = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
t = (0, r.e7)([i.default], () => i.default.getCurrentUser());
  return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null;
}