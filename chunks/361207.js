t.d(n, {
  DW: function() {
return d;
  },
  Gn: function() {
return m;
  },
  t3: function() {
return p;
  },
  w4: function() {
return u;
  }
});
var l = t(525654),
  i = t.n(l),
  a = t(271579),
  r = t(314897),
  s = t(981631);
let o = 'linux';

function u(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
t = arguments.length > 2 ? arguments[2] : void 0;
  return ''.concat(s.fzT.DESKTOP).concat(n ? '/ptb' : '', '?platform=').concat(e).concat(null != t ? '&format='.concat(t) : '');
}

function c() {
  var e;
  let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = i().os) || void 0 === e ? void 0 : e.family;
  return null == n ? 'win' : -1 !== n.indexOf('Ubuntu') || -1 !== n.indexOf('Debian') || -1 !== n.indexOf('Fedora') || -1 !== n.indexOf('Red Hat') || -1 !== n.indexOf('SuSE') || -1 !== n.indexOf('Linux') ? o : -1 !== n.indexOf('OS X') ? 'osx' : 'win';
}

function d(e) {
  return {
win: 'Windows',
osx: 'Mac',
[o]: 'Linux'
  } [c(e)];
}

function p() {
  let e = c();
  return u(e, !1, e === o ? 'tar.gz' : null);
}

function m(e, n, t) {
  let l = null != t ? t.toString() : null;
  switch (n) {
case 'iOS':
  return (0, a.ZP)(null != l ? l : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
    utmSource: e,
    fingerprint: r.default.getFingerprint(),
    attemptId: (0, a.WS)()
  });
case 'Android':
  return (0, a.ZP)(null != l ? l : 'https://play.google.com/store/apps/details', {
    utmSource: e,
    id: 'com.discord',
    fingerprint: r.default.getFingerprint(),
    attemptId: (0, a.WS)()
  });
default:
  return null != l ? l : 'https://www.discord.com';
  }
}