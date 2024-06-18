"use strict";
var i, r;
n.r(t), n.d(t, {
  PlatformTypes: function() {
    return i
  },
  getNativePlatform: function() {
    return N
  },
  getOS: function() {
    return A
  },
  getPlatform: function() {
    return S
  },
  getPlatformName: function() {
    return f
  },
  isAndroid: function() {
    return T
  },
  isAndroidChrome: function() {
    return E
  },
  isAndroidWeb: function() {
    return I
  },
  isDesktop: function() {
    return d
  },
  isIOS: function() {
    return h
  },
  isLinux: function() {
    return _
  },
  isMac: function() {
    return u
  },
  isPlatformEmbedded: function() {
    return o
  },
  isWeb: function() {
    return c
  },
  isWindows: function() {
    return l
  }
}), (r = i || (i = {})).WINDOWS = "WINDOWS", r.OSX = "OSX", r.LINUX = "LINUX", r.WEB = "WEB";
let s = window.DiscordNative,
  o = null != s,
  a = null != s ? s.process.platform : "";

function l() {
  return /^win/.test(a)
}

function u() {
  return "darwin" === a
}

function _() {
  return "linux" === a
}

function d() {
  return l() || u() || _()
}

function c() {
  return "WEB" === S()
}

function E() {
  return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
}

function I() {
  var e;
  return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null
}

function T() {
  return "android" === a
}

function h() {
  return "ios" === a
}

function S() {
  return l() ? "WINDOWS" : u() ? "OSX" : _() ? "LINUX" : "WEB"
}

function f() {
  return a
}

function N() {
  switch (a) {
    case "ios":
    case "android":
      return a;
    default:
      return "web"
  }
}

function A() {
  let {
    userAgent: e
  } = window.navigator;
  if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
  if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
  if (/Android/.test(e)) return "android";
  else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
  else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
  else if (/Linux/i.test(e)) return "linux"
}