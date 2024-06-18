"use strict";
n.d(t, {
  G8: function() {
    return o
  },
  N6: function() {
    return s
  },
  vp: function() {
    return a
  }
});
var i = n(77498),
  r = n(358085);

function s(e) {
  var t;
  return ((t = (t = e).toLowerCase()).endsWith("/") && (t = t.slice(0, -1)), t).split("/").slice(-2).join("/")
}

function o(e) {
  var t, n;
  if (null == e) return {
    gameName: void 0,
    gameId: void 0,
    exe: void 0,
    distributor: void 0
  };
  let r = i.Z.getGameByName(e.name),
    o = "exePath" in e ? e.exePath : e.exe;
  return {
    gameName: null !== (t = e.name) && void 0 !== t ? t : void 0,
    gameId: null == r ? void 0 : r.id,
    exe: null != o ? s(o) : void 0,
    distributor: null !== (n = e.distributor) && void 0 !== n ? n : void 0
  }
}

function a(e, t) {
  if (null == e || null == t) return !1;
  let n = s(e),
    i = (0, r.getPlatformName)();
  return t.some(e => e.os === i && (null == n ? void 0 : n.endsWith(e.name)))
}