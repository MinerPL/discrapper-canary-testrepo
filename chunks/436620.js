"use strict";
n.d(t, {
  Fo: function() {
    return c
  },
  KO: function() {
    return l
  },
  U8: function() {
    return _
  },
  WS: function() {
    return d
  },
  X6: function() {
    return E
  },
  fi: function() {
    return u
  }
});
var i, r = n(264344),
  s = n.n(r);
let o = parseInt(null !== (i = s().version) && void 0 !== i ? i : "0", 10),
  a = void 0 !== s().ua && s().ua.indexOf("OculusBrowser") > -1,
  l = (() => {
    if (null == window.WebSocket) return !1;
    switch (s().name) {
      case "IE":
      case "Microsoft Edge":
        return o >= 15;
      default:
        return !0
    }
  })(),
  u = a || "Firefox" === s().name && o >= 80 || "Chrome" === s().name && o >= 37 || "Opera" === s().name && o >= 66 || "Node.js" === s().name && o >= 6 || "Electron" === s().name && o >= 1 || "Safari" === s().name && o >= 13 || "Microsoft Edge" === s().name && o >= 37,
  _ = "Chrome" === s().name || "Safari" === s().name || "Firefox" === s().name && o >= 80 || "Opera" === s().name || "Microsoft Edge" === s().name,
  d = a || "Firefox" === s().name && o >= 73 || "Safari" === s().name && o >= 13 || "Chrome" === s().name && o >= 80 || "Microsoft Edge" === s().name && o >= 80,
  c = "Chrome" === s().name && o >= 58 || "Safari" === s().name && o >= 15 || "Firefox" === s().name && o >= 108,
  E = "Chrome" === s().name && o >= 72 || "Safari" === s().name && o >= 11 || "Opera" === s().name && o >= 60 || "Microsoft Edge" === s().name && o >= 79