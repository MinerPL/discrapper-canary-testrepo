"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var l = i("735250");
i("470079");
var a = i("180781"),
  s = i("321867"),
  n = i("486324");

function o(e) {
  let {
    type: t,
    analyticsPage: i,
    analyticsSection: o,
    isGIF: r,
    banner: u
  } = e;
  return [n.UploadTypes.BANNER, n.UploadTypes.AVATAR].includes(t) && r ? (0, l.jsx)(s.default, {
    analyticsSection: o,
    type: t
  }) : t === n.UploadTypes.GUILD_BANNER ? (0, l.jsx)(a.default, {
    analyticsSection: o,
    analyticsPage: i,
    isGIF: r,
    banner: u
  }) : null
}