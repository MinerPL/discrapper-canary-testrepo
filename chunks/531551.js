"use strict";
n.r(t), n("411104");
var a = n("570140"),
  s = n("51025"),
  l = n("314897"),
  i = n("804739");

function r() {
  if (!(0, i.isSupportedPlatform)()) return;
  let e = l.default.getToken(),
    t = l.default.getId();
  if (null == e) throw Error("missing user token");
  s.init(e, t)
}

function o() {
  s.destroy()
}
t.default = {
  init() {
    a.default.subscribe("CONNECTION_OPEN", r), a.default.subscribe("LOGOUT", o)
  }
}