"use strict";
l.r(t);
var a = l("735250"),
  i = l("470079"),
  n = l("481060"),
  s = l("372900");
t.default = i.memo(function(e) {
  var t, l, r, o;
  let {
    user: u,
    size: d = n.AvatarSizes.SIZE_32,
    animate: c = !1,
    "aria-hidden": m = !1,
    ...f
  } = e, _ = i.useContext(s.default);
  return (0, a.jsx)(n.Avatar, {
    src: (t = u, l = (0, n.getAvatarSize)(d), r = c, o = _, t.getAvatarURL(o, l, r)),
    size: d,
    "aria-label": m ? void 0 : u.username,
    "aria-hidden": m,
    ...f
  })
})