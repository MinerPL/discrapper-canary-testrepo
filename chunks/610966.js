"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("866442"),
  l = s("692547"),
  i = s("481060"),
  r = s("220082"),
  o = s("193528"),
  d = s("993413"),
  u = s("689938");

function c(e) {
  var t;
  let {
    user: s,
    savedUserColor: c,
    pendingColor: S,
    setPendingAccentColor: E
  } = e, T = s.getAvatarURL(null, 80), _ = (0, i.useToken)(l.default.unsafe_rawColors.PRIMARY_530).hex(), f = (0, r.useAvatarColors)(T, _, !1), m = (0, n.hex2int)(f[0]);
  return (0, a.jsx)(d.default, {
    title: u.default.Messages.USER_SETTINGS_BANNER_COLOR_TITLE,
    children: (0, a.jsx)(o.default, {
      onChange: e => E(e),
      color: null !== (t = null != S ? S : c) && void 0 !== t ? t : m,
      suggestedColors: f,
      showEyeDropper: !0
    })
  })
}