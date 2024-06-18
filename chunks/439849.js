"use strict";
let i;
n.d(t, {
  F: function() {
    return E
  },
  Z: function() {
    return I
  }
}), n(757143), n(653041);
var r = n(392711),
  s = n.n(r),
  o = n(579806),
  a = n(710845),
  l = n(358085),
  u = n(998502);
let _ = [];

function d(e) {
  return e = e.toLowerCase(), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e
}

function c(e) {
  null != e && "" !== e && (!(e = d(e)).endsWith("/") && (e += "/"), _.push(e))
}

function E(e) {
  e = d(e);
  let t = !1;
  return (_.forEach(n => {
    !t && e.startsWith(n) && (e = e.substr(n.length), t = !0)
  }), t) ? e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/") : null
}
async function I() {
  if (null != i) return i;
  try {
    await u.ZP.ensureModule("discord_game_utils"), i = await u.ZP.requireModule("discord_game_utils")
  } catch (e) {
    new a.Z("GamesActionCreators").error("could not load discord_game_utils", e)
  }
  if ((0, l.isWindows)()) {
    let e = o.Z.process.env;
    c(e.LOCALAPPDATA), c(e["PROGRAMFILES(X86)"]), c(e.PROGRAMFILES), c(e.PROGRAMW6432), c(e.PROGRAMDATA), c("/games/"), c("/steamlibrary/steamapps/common/")
  }
  let e = o.Z.remoteApp.getPath;
  return c(await e("home")), c(await e("appData")), c(await e("desktop")), c(await e("documents")), c(await e("downloads")), (_ = s().uniq(_)).sort((e, t) => t.length - e.length), i
}