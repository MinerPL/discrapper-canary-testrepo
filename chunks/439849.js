let r;
n.d(t, {
  F: function() {
return E;
  },
  Z: function() {
return f;
  }
}), n(757143), n(653041);
var i = n(392711),
  a = n.n(i),
  o = n(579806),
  s = n(710845),
  l = n(358085),
  u = n(998502);
let c = [];

function d(e) {
  return e = e.toLowerCase(), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, '')).replace(/\\/g, '/')), e;
}

function _(e) {
  null != e && '' !== e && (!(e = d(e)).endsWith('/') && (e += '/'), c.push(e));
}

function E(e) {
  e = d(e);
  let t = !1;
  return (c.forEach(n => {
!t && e.startsWith(n) && (e = e.substr(n.length), t = !0);
  }), t) ? e = e.includes('dosbox.exe') ? e.split('/').slice(-3).join('/') : e.split('/').slice(-2).join('/') : null;
}
async function f() {
  if (null != r)
return r;
  try {
await u.ZP.ensureModule('discord_game_utils'), r = await u.ZP.requireModule('discord_game_utils');
  } catch (e) {
new s.Z('GamesActionCreators').error('could not load discord_game_utils', e);
  }
  if ((0, l.isWindows)()) {
let e = o.Z.process.env;
_(e.LOCALAPPDATA), _(e['PROGRAMFILES(X86)']), _(e.PROGRAMFILES), _(e.PROGRAMW6432), _(e.PROGRAMDATA), _('/games/'), _('/steamlibrary/steamapps/common/');
  }
  let e = o.Z.remoteApp.getPath;
  return _(await e('home')), _(await e('appData')), _(await e('desktop')), _(await e('documents')), _(await e('downloads')), (c = a().uniq(c)).sort((e, t) => t.length - e.length), r;
}