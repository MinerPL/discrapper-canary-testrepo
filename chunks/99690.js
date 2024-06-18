"use strict";
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(372900);
t.Z = r.memo(function(e) {
  var t, n, a, l;
  let {
    user: u,
    size: _ = s.AvatarSizes.SIZE_32,
    animate: d = !1,
    "aria-hidden": c = !1,
    ...E
  } = e, I = r.useContext(o.Z);
  return (0, i.jsx)(s.Avatar, {
    src: (t = u, n = (0, s.getAvatarSize)(_), a = d, l = I, t.getAvatarURL(l, n, a)),
    size: _,
    "aria-label": c ? void 0 : u.username,
    "aria-hidden": c,
    ...E
  })
})