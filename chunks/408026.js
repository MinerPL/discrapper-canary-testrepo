"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("224706"),
  l = n("710845"),
  i = n("77498");
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
    } else new l.default("GameStoreIconManager").log("Could not find missing data key: ".concat(e))
}

function u(e) {
  let {
    gameName: t,
    icon: n
  } = e;
  r[t] = n
}
t.default = {
  initialize() {
    a.default.subscribe("UNVERIFIED_GAME_UPDATE", o), a.default.subscribe("GAME_ICON_UPDATE", u)
  }
}