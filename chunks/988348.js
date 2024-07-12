n.d(t, {
  CG: function() {
return l;
  },
  Gz: function() {
return u;
  },
  MF: function() {
return s;
  },
  NF: function() {
return o;
  }
}), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r = n(433517),
  i = n(998502);
let a = null;

function o() {
  return null == a && (a = function() {
if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder)
  return !1;
try {
  return i.ZP.requireModule('discord_zstd'), !0;
} catch (e) {
  if (e.message.includes('Cannot find'))
    return i.ZP.ensureModule('discord_zstd').catch(e => {}), !1;
  throw e;
}
  }()), a;
}

function s() {
  return 'true' === r.K.get('zstd_fast_connect');
}

function l(e) {
  e ? r.K.set('zstd_fast_connect', 'true') : r.K.set('zstd_fast_connect', 'false');
}

function u() {
  let {
createContext: e
  } = i.ZP.requireModule('discord_zstd');
  return e();
}