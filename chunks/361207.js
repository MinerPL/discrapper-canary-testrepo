"use strict";
n.r(t), n.d(t, {
  getCurrentPlatformDownloadURL: function() {
    return f
  },
  getMobileDownloadLink: function() {
    return m
  },
  getPlatformReadableName: function() {
    return d
  },
  makeDesktopDownloadURL: function() {
    return u
  }
});
var a = n("525654"),
  s = n.n(a),
  l = n("271579"),
  i = n("314897"),
  r = n("981631");
let o = "linux";

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
}

function c() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s().os) || void 0 === e ? void 0 : e.family;
  return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
}

function d(e) {
  return ({
    win: "Windows",
    osx: "Mac",
    [o]: "Linux"
  })[c(e)]
}

function f() {
  let e = c();
  return u(e, !1, e === o ? "tar.gz" : null)
}

function m(e, t, n) {
  let a = null != n ? n.toString() : null;
  switch (t) {
    case "iOS":
      return (0, l.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: i.default.getFingerprint(),
        attemptId: (0, l.generateAttemptId)()
      });
    case "Android":
      return (0, l.default)(null != a ? a : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: i.default.getFingerprint(),
        attemptId: (0, l.generateAttemptId)()
      });
    default:
      return null != a ? a : "https://www.discord.com"
  }
}