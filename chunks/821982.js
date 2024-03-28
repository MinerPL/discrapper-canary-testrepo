"use strict";
n.r(t);
var a = n("768581"),
  s = n("1585");
t.default = (e, t, n) => (0, a.getAvatarDecorationURL)({
  avatarDecoration: {
    asset: e
  },
  size: (0, s.getDecorationSizeForAvatarSize)(t),
  canAnimate: n
})