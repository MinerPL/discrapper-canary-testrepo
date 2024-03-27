"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("913144"),
  s = n("823411"),
  l = n("605250"),
  i = n("546463");
let r = {};

function o(e) {
  let {
    name: t,
    hash: n,
    missingData: a
  } = e;
  for (let e of (i.default.markGameReported(t), a))
    if ("icon" === e) {
      let e = r[t];
      null != e && s.default.uploadIcon(t, n, e);
      return
    } else new(0, l.default)("GameStoreIconManager").log("Could not find missing data key: ".concat(e))
}

function u(e) {
  let {
    gameName: t,
    icon: n
  } = e;
  r[t] = n
}
var d = {
  initialize() {
    a.default.subscribe("UNVERIFIED_GAME_UPDATE", o), a.default.subscribe("GAME_ICON_UPDATE", u)
  }
}