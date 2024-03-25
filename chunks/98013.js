"use strict";
n.r(t), n.d(t, {
  makeDesktopDownloadURL: function() {
    return r
  },
  getPlatformReadableName: function() {
    return c
  },
  getCurrentPlatformDownloadURL: function() {
    return h
  },
  getMobileDownloadLink: function() {
    return m
  }
});
var i = n("597755"),
  s = n.n(i),
  l = n("815157"),
  a = n("271938"),
  u = n("49111");
let d = "linux";

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(u.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
}

function o() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
  return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? d : -1 !== t.indexOf("OS X") ? "osx" : "win"
}

function c(e) {
  return ({
    win: "Windows",
    osx: "Mac",
    [d]: "Linux"
  })[o(e)]
}

function h() {
  let e = o();
  return r(e, !1, e === d ? "tar.gz" : null)
}

function m(e, t, n) {
  let i = null != n ? n.toString() : null;
  switch (t) {
    case "iOS":
      return (0, l.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: a.default.getFingerprint(),
        attemptId: (0, l.generateAttemptId)()
      });
    case "Android":
      return (0, l.default)(null != i ? i : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: a.default.getFingerprint(),
        attemptId: (0, l.generateAttemptId)()
      });
    default:
      return null != i ? i : "https://www.discord.com"
  }
}