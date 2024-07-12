t.d(n, {
  DW: function() {
return u;
  },
  Gn: function() {
return p;
  },
  t3: function() {
return f;
  },
  w4: function() {
return c;
  }
});
var a = t(525654),
  s = t.n(a),
  o = t(271579),
  r = t(314897),
  l = t(981631);
let i = 'linux';

function c(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
t = arguments.length > 2 ? arguments[2] : void 0;
  return ''.concat(l.fzT.DESKTOP).concat(n ? '/ptb' : '', '?platform=').concat(e).concat(null != t ? '&format='.concat(t) : '');
}

function d() {
  var e;
  let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s().os) || void 0 === e ? void 0 : e.family;
  return null == n ? 'win' : -1 !== n.indexOf('Ubuntu') || -1 !== n.indexOf('Debian') || -1 !== n.indexOf('Fedora') || -1 !== n.indexOf('Red Hat') || -1 !== n.indexOf('SuSE') || -1 !== n.indexOf('Linux') ? i : -1 !== n.indexOf('OS X') ? 'osx' : 'win';
}

function u(e) {
  return {
win: 'Windows',
osx: 'Mac',
[i]: 'Linux'
  } [d(e)];
}

function f() {
  let e = d();
  return c(e, !1, e === i ? 'tar.gz' : null);
}

function p(e, n, t) {
  let a = null != t ? t.toString() : null;
  switch (n) {
case 'iOS':
  return (0, o.ZP)(null != a ? a : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
    utmSource: e,
    fingerprint: r.default.getFingerprint(),
    attemptId: (0, o.WS)()
  });
case 'Android':
  return (0, o.ZP)(null != a ? a : 'https://play.google.com/store/apps/details', {
    utmSource: e,
    id: 'com.discord',
    fingerprint: r.default.getFingerprint(),
    attemptId: (0, o.WS)()
  });
default:
  return null != a ? a : 'https://www.discord.com';
  }
}