n.d(t, {
  C: function() {
return S;
  },
  Z: function() {
return A;
  }
});
var r = n(735250);
n(470079);
var i = n(278074),
  a = n(442837),
  s = n(481060),
  o = n(230711),
  l = n(394821),
  u = n(833664),
  c = n(503438),
  d = n(579630),
  _ = n(26033),
  E = n(168308),
  f = n(547972),
  h = n(594174),
  p = n(981631),
  m = n(332325),
  I = n(689938);
let T = () => o.Z.open(p.oAB.CONNECTIONS, null),
  g = () => (0, f.Z)((0, E.Jw)() ? m.Z.MY_GAMES : m.Z.ACTIVITY_PRIVACY);

function S(e) {
  return (0, i.EQ)(e).when(_.aA, () => T).when(_.dX, () => () => g).when(_.y0, () => T).when(_.dU, () => T).otherwise(() => g);
}

function A(e) {
  let {
user: t,
activity: n,
entry: o,
onAction: _,
onClose: E
  } = e;
  if (!(0, a.e7)([h.default], () => {
  var e;
  return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
}))
return null;
  let f = function(e) {
let {
  activity: t,
  entry: n
} = e;
if (null != n)
  return S(n);
if (null != t) {
  var r;
  return r = t, (0, i.EQ)(r).when(d.Z, () => T).when(u.Z, () => g).when(c.Z, () => T).when(l.Z, () => T).otherwise(() => g);
}
return null;
  }({
activity: n,
entry: o
  });
  return null == f ? null : (0, r.jsx)(s.MenuItem, {
id: 'manage-privacy',
label: I.Z.Messages.USER_ACTIVITY_MANAGE_PRIVACY,
action: () => {
  null == _ || _({
    action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM'
  }), f(), null == E || E();
}
  });
}