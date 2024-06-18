"use strict";
n.d(t, {
  B: function() {
    return o
  }
});
var i = n(399606),
  r = n(581883),
  s = n(163268);
let o = () => {
  let e = (0, i.cj)([r.Z], () => {
    var e, t;
    return null !== (t = null === (e = r.Z.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, s.l4)()
  });
  return {
    explicitContentGuilds: (0, s.tG)({
      setting: null == e ? void 0 : e.explicitContentGuilds
    }),
    explicitContentNonFriendDm: (0, s.tG)({
      setting: null == e ? void 0 : e.explicitContentNonFriendDm,
      isDm: !0
    }),
    explicitContentFriendDm: (0, s.tG)({
      setting: null == e ? void 0 : e.explicitContentFriendDm,
      isDm: !0,
      isFriend: !0
    })
  }
}