n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(655922),
  a = n(420660),
  s = n(652853),
  o = n(475413),
  l = n(228168),
  u = n(689938);

function c(e) {
  let {
activity: t,
onClick: n
  } = e, {
profileType: c
  } = (0, s.z)(), d = (0, i.Z)(t);
  return (0, a.Z)(t) && null != d ? (0, r.jsx)(o.tG, {
text: u.Z.Messages.WATCH,
themeColor: c === l.y0.FULL_SIZE ? 'secondary' : 'primary',
fullWidth: !0,
onClick: e => (null == n || n(e), window.open(d))
  }) : null;
}