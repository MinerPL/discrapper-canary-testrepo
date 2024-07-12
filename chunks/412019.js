a.d(n, {
  O: function() {
return d;
  }
});
var i = a(735250);
a(470079);
var t = a(481060),
  l = a(447003),
  s = a(687352),
  r = a(409216),
  o = a(823379),
  c = a(619915),
  u = a(954822);

function d(e) {
  let {
channel: n,
users: a
  } = e, d = (0, c.ZP)(n);
  return (0, i.jsxs)('div', {
className: u.channelInfo,
children: [
  (0, l.Z)(n) ? (0, i.jsx)(t.VoiceLockIcon, {
    size: 'md',
    color: 'currentColor',
    className: u.speakerIcon
  }) : (0, i.jsx)(t.VoiceNormalIcon, {
    size: 'md',
    color: 'currentColor',
    className: u.speakerIcon
  }),
  (0, i.jsx)('div', {
    className: u.channelName,
    children: n.name
  }),
  d.length > 0 ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)('div', {
        className: u.divider
      }),
      (0, i.jsx)(s.Z, {
        embeddedApps: d,
        className: u.channelItemActivities
      }),
      (0, i.jsx)('div', {
        className: u.channelActivitiesText,
        children: d.map(e => {
          var n;
          return null === (n = e.application) || void 0 === n ? void 0 : n.name;
        }).filter(o.lm).join(', ')
      })
    ]
  }) : null,
  (0, i.jsx)('div', {
    className: u.voiceUserContainer,
    children: (0, i.jsx)(r.Z, {
      users: a,
      max: 4
    })
  })
]
  });
}