var r = n(735250),
  i = n(470079),
  a = n(481060),
  o = n(372900);
t.Z = i.memo(function(e) {
  var t, n, s, l;
  let {
user: u,
size: c = a.AvatarSizes.SIZE_32,
animate: d = !1,
'aria-hidden': _ = !1,
...E
  } = e, f = i.useContext(o.Z);
  return (0, r.jsx)(a.Avatar, {
src: (t = u, n = (0, a.getAvatarSize)(c), s = d, l = f, t.getAvatarURL(l, n, s)),
size: c,
'aria-label': _ ? void 0 : u.username,
'aria-hidden': _,
...E
  });
});