"use strict";
n.d(t, {
  CG: function() {
    return l
  },
  Gz: function() {
    return u
  },
  MF: function() {
    return a
  },
  NF: function() {
    return o
  }
}), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(433517),
  r = n(998502);
let s = null;

function o() {
  return null == s && (s = function() {
    if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
    try {
      return r.ZP.requireModule("discord_zstd"), !0
    } catch (e) {
      if (e.message.includes("Cannot find")) return r.ZP.ensureModule("discord_zstd").catch(e => {}), !1;
      throw e
    }
  }()), s
}

function a() {
  return "true" === i.K.get("zstd_fast_connect")
}

function l(e) {
  e ? i.K.set("zstd_fast_connect", "true") : i.K.set("zstd_fast_connect", "false")
}

function u() {
  let {
    createContext: e
  } = r.ZP.requireModule("discord_zstd");
  return e()
}