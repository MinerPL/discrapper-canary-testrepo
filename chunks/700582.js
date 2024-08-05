var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(372900);
t.Z = i.memo(function(e) {
  var t, n, o, l;
  let {
user: u,
size: c = a.AvatarSizes.SIZE_32,
animate: d = !1,
'aria-hidden': _ = !1,
...E
  } = e, f = i.useContext(s.Z);
  return (0, r.jsx)(a.Avatar, {
src: (t = u, n = (0, a.getAvatarSize)(c), o = d, l = f, t.getAvatarURL(l, n, o)),
size: c,
'aria-label': _ ? void 0 : u.username,
'aria-hidden': _,
...E
  });
});