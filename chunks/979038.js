n.d(t, {
  Z: function() {
return I;
  }
});
var r = n(735250);
n(470079);
var i = n(620662),
  a = n(841784),
  s = n(834353),
  o = n(802856),
  l = n(420660),
  u = n(374129),
  c = n(639351),
  d = n(103479),
  _ = n(191764),
  E = n(238607),
  f = n(414402),
  h = n(934393),
  p = n(715547),
  m = n(981631);

function I(e) {
  let {
user: t,
currentUser: n,
activity: I,
onAction: T,
onClose: g
  } = e;
  return (0, o.Z)(I) ? (0, r.jsx)(h.Z, {
platformType: m.ABu.XBOX,
icon: () => (0, r.jsx)(c.Z, {}),
onClick: T
  }) : (0, s.Z)(I) ? (0, r.jsx)(h.Z, {
platformType: m.ABu.PLAYSTATION,
icon: () => (0, r.jsx)(u.Z, {}),
onClick: T
  }) : (0, l.Z)(I) ? (0, r.jsx)(p.Z, {
activity: I,
onClick: T
  }) : (0, i.Z)(I, m.xjy.JOIN) || (0, a.Z)(I) ? (0, r.jsx)(E.Z, {
user: t,
currentUser: n,
activity: I,
onClick: T,
onClose: g
  }) : (null == I ? void 0 : I.type) === m.IIU.HANG_STATUS ? (0, r.jsx)(_.Z, {
user: t,
activity: I,
onClick: T,
onClose: g
  }) : (null == I ? void 0 : I.buttons) != null && (null == I ? void 0 : I.buttons.length) >= 1 ? (0, r.jsx)(d.Z, {
user: t,
activity: I,
onClick: T
  }) : (0, i.Z)(I, m.xjy.INSTANCE) ? (0, r.jsx)(f.Z, {
user: t,
activity: I,
onClick: T
  }) : null;
}