"use strict";
n.d(t, {
  s: function() {
    return a
  }
});
var i, r, s, o = n(579806);
class a {
  static get() {
    if (null == a.cached) {
      var e, t;
      let n = null === o.Z || void 0 === o.Z ? void 0 : null === (t = o.Z.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
      null != n && n.length > 1 && n.shift(), a.cached = null != n ? n : []
    }
    return a.cached
  }
  static contains(e) {
    return a.get().includes(e)
  }
  static isEnvVariableTrue(e) {
    var t, n;
    if (void 0 === o.Z) return !1;
    switch (null === o.Z || void 0 === o.Z ? void 0 : null === (n = o.Z.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
      case "1":
      case "true":
        return !0
    }
    return !1
  }
  static isDisallowPopupsSet() {
    return a.contains("--disallow-popups") || a.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
  }
  static isDiscordTestSet() {
    return a.isEnvVariableTrue("DISCORD_TEST")
  }
  static isDiscordGatewayPlaintextSet() {
    return !1
  }
}
s = void 0, (r = "cached") in(i = a) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s