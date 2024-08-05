E.d(_, {
  Z: function() {
return t;
  }
});
var s = E(735250),
  T = E(470079),
  I = E(481060),
  n = E(412899),
  A = E(231338);

function t(e) {
  var _;
  let {
guildId: E,
role: t,
className: a,
canRemove: r = !1,
onRemove: N = A.dG
  } = e, L = (0, I.useToken)(I.tokens.unsafe_rawColors.PRIMARY_300).hex(), S = null !== (_ = null == t ? void 0 : t.colorString) && void 0 !== _ ? _ : L, D = T.useMemo(() => ({
backgroundColor: ''.concat(S, '27')
  }), [S]);
  return null == t ? null : (0, s.jsx)(I.Clickable, {
children: (0, s.jsx)(n.UB, {
  className: a,
  style: D,
  role: t,
  guildId: E,
  canRemove: r,
  onRemove: N
})
  });
}