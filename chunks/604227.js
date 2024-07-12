s.d(t, {
  Z: function() {
return E;
  }
}), s(47120), s(757143), s(653041);
var n = s(735250);
s(470079);
var a = s(525654),
  i = s.n(a),
  r = s(481060),
  o = s(579806),
  l = s(304761),
  c = s(969832),
  d = s(689938),
  _ = s(283181);

function E() {
  var e, t, s, a, E, u;
  let T = window.GLOBAL_ENV.RELEASE_CHANNEL,
I = '309467',
S = (e = '241f26fb6a739c499bd6ffa8e856ef98a363b246', e.substring(0, 7)),
N = null === o.Z || void 0 === o.Z ? void 0 : o.Z.remoteApp.getVersion(),
C = null === o.Z || void 0 === o.Z ? void 0 : null === (t = (s = o.Z.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(s),
m = null === o.Z || void 0 === o.Z ? void 0 : null === (a = (E = o.Z.remoteApp).getAppArch) || void 0 === a ? void 0 : a.call(E),
A = null === (u = l.C.getCurrentBuildOverride().overrides) || void 0 === u ? void 0 : u.discord_web,
h = function() {
  var e;
  let t = null === i() || void 0 === i() ? void 0 : null === (e = i().os) || void 0 === e ? void 0 : e.toString();
  if (null == t || null == o.Z)
    return null;
  let s = o.Z.os.release,
    [n, a, r] = s.split('.').map(e => parseInt(e, 10));
  return t.includes('Windows 10') && void 0 !== r && r >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== n && n >= 20 && (t = 'macOS '.concat(n - 9)), ''.concat(t, ' (').concat(s, ')');
}(),
g = [
  T,
  I,
  '('.concat(S, ')')
];
  return null != N && (g.push('Host '.concat(N)), null != m && g.push(m.toLowerCase()), null != C && g.push('('.concat(C, ')'))), g.push('Build Override: '.concat(null != A ? A.id : 'N/A')), null != h && g.push(h), (0, n.jsx)(c.o, {
copyValue: g.join(' '),
disableCopy: !1,
copyTooltip: d.Z.Messages.COPY_VERSION,
showCopyIcon: !1,
children: (0, n.jsxs)('div', {
  className: _.info,
  children: [
    (0, n.jsxs)(r.Text, {
      tag: 'span',
      className: _.line,
      variant: 'text-xs/normal',
      color: 'text-muted',
      children: [
        T,
        ' ',
        I,
        ' ',
        (0, n.jsxs)('span', {
          className: _.versionHash,
          children: [
            '(',
            S,
            ')'
          ]
        })
      ]
    }),
    ' ',
    null != N ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsxs)(r.Text, {
          tag: 'span',
          className: _.line,
          variant: 'text-xs/normal',
          color: 'text-muted',
          children: [
            'Host ',
            N,
            ' ',
            null != m ? (0, n.jsxs)('span', {
              className: _.appArch,
              children: [
                m.toLowerCase(),
                ' '
              ]
            }) : null,
            null != C ? (0, n.jsxs)('span', {
              children: [
                '(',
                C,
                ')'
              ]
            }) : null
          ]
        }),
        ' '
      ]
    }) : null,
    null != h ? (0, n.jsx)(r.Text, {
      tag: 'span',
      className: _.line,
      variant: 'text-xs/normal',
      color: 'text-muted',
      children: h
    }) : null
  ]
})
  });
}