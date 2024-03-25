"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var s = i("37983");
i("884691");
var n = i("507497"),
  l = i("193867"),
  r = i("75015");

function o(e) {
  let {
    type: t,
    analyticsPage: i,
    analyticsSection: o,
    isGIF: a,
    banner: u
  } = e;
  return [r.UploadTypes.BANNER, r.UploadTypes.AVATAR].includes(t) && a ? (0, s.jsx)(l.default, {
    analyticsSection: o,
    type: t
  }) : t === r.UploadTypes.GUILD_BANNER ? (0, s.jsx)(n.default, {
    analyticsSection: o,
    analyticsPage: i,
    isGIF: a,
    banner: u
  }) : null
}