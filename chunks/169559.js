"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(963202);

function r(e) {
  let {
    enableClanCreation: t
  } = (0, i.C3)({
    location: e,
    includeConverted: !1
  }), {
    clanDiscoveryEnabled: n
  } = (0, i.nk)(e);
  return t || n
}