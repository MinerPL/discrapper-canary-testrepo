"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("442837"),
  u = n("553795"),
  a = n("823379"),
  i = n("981631");

function r() {
  return (0, l.useStateFromStoresArray)([u.default], () => [u.default.getAccount(null, i.PlatformTypes.XBOX), u.default.getAccount(null, i.PlatformTypes.PLAYSTATION), u.default.getAccount(null, i.PlatformTypes.PLAYSTATION_STAGING)].filter(a.isNotNullish))
}