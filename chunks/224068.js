i.d(t, {
  Z: function() {
return u;
  }
}), i(627341);
var n = i(735250);
i(470079);
var s = i(120356),
  a = i.n(s),
  l = i(278074),
  r = i(979554),
  o = i(481060),
  c = i(689938),
  d = i(847485);

function u(e) {
  var t;
  let {
product: i,
isDarkText: s = !1
  } = e;
  let u = (t = i.type, (0, l.EQ)(t).with(r.Z.AVATAR_DECORATION, () => c.Z.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.Z.PROFILE_EFFECT, () => c.Z.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === u ? null : (0, n.jsx)(o.Text, {
variant: 'text-xxs/normal',
className: a()([
  d.container,
  s ? d.darkText : d.lightText
]),
children: u
  });
}