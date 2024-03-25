"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  r = n("390236"),
  i = l.memo(function(e) {
    var t, n, i, o;
    let {
      user: u,
      size: d = s.AvatarSizes.SIZE_32,
      animate: c = !1,
      "aria-hidden": m = !1,
      ...f
    } = e, h = l.useContext(r.default);
    return (0, a.jsx)(s.Avatar, {
      src: (t = u, n = (0, s.getAvatarSize)(d), i = c, o = h, t.getAvatarURL(o, n, i)),
      size: d,
      "aria-label": m ? void 0 : u.username,
      "aria-hidden": m,
      ...f
    })
  })