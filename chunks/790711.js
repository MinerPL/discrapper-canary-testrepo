"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(64003);

function o(e) {
  let {
    user: t,
    nickname: n
  } = e, o = null != n;
  return (0, i.jsx)(r.Avatar, {
    src: t.getAvatarURL(void 0, o ? 16 : 24),
    size: o ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
    className: o ? s.miniAvatar : s.largeAvatar,
    "aria-hidden": !0
  })
}