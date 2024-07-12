n.d(t, {
  dt: function() {
return p;
  },
  eo: function() {
return _;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(884338),
  a = n(934415),
  s = n(540126),
  o = n(700026),
  c = n(301342),
  u = n(327530),
  d = n(222625);
let h = l.memo(function(e) {
  let {
guildChannels: t,
guildChannelsVersion: n
  } = e, r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [
t,
n
  ]);
  return null == r ? null : (0, i.jsx)(c.Qo, {
category: r
  });
});

function p(e) {
  let {
sectionIndex: t,
guildChannels: n,
voiceStates: i,
selectedChannelId: l,
selectedVoiceChannelId: r,
optInEnabled: a
  } = e;
  if (t === n.voiceChannelsSectionNumber)
return 44;
  let {
hasDivider: c,
canHaveVoiceSummary: d
  } = (0, o.ie)(n, a, t), h = c ? u.QP : 0;
  if (!d || t === s.zm)
return h;
  let p = n.getNamedCategoryFromSection(t);
  return null == p ? h : (0, o.V5)({
category: p,
selectedChannelId: l,
selectedVoiceChannelId: r,
voiceStates: i
  }) ? u.Vf + h : h;
}

function _(e, t, n) {
  if (e === t.voiceChannelsSectionNumber)
return 'voice-channels-button';
  let {
hasDivider: i,
canHaveVoiceSummary: l
  } = (0, o.ie)(t, n, e);
  return 'section-footer-'.concat(e).concat(i ? '-divider' : '').concat(l ? '-voice-summary' : '');
}
t.ZP = l.memo(function(e) {
  let {
sectionIndex: t,
guildChannels: n,
guildChannelsVersion: c,
voiceStates: u,
guildId: p,
selectedChannelId: _,
selectedVoiceChannelId: f,
optInEnabled: m
  } = e, {
hasDivider: g,
canHaveVoiceSummary: C
  } = l.useMemo(() => (0, o.ie)(n, m, t), [
n,
m,
t,
c
  ]), I = l.useMemo(() => t === s.zm ? null : n.getCategoryFromSection(t), [
n,
t,
c
  ]), E = l.useMemo(() => null != I && I.isCollapsed ? (0, a.c4)({
channels: I.getChannelRecords(),
selectedChannelId: _,
selectedVoiceChannelId: f,
voiceStates: u
  }) : [], [
I,
_,
f,
u
  ]);
  if (t === n.voiceChannelsSectionNumber)
return (0, i.jsx)(h, {
  guildChannels: n,
  guildChannelsVersion: c
});
  let N = g ? (0, i.jsx)('div', {
className: d.sectionDivider
  }) : null;
  return C && 0 !== E.length ? (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    className: d.voiceUserSummary,
    children: (0, i.jsx)(r.Z, {
      renderIcon: !0,
      users: E,
      max: 8,
      showUserPopout: !0,
      guildId: p
    })
  }),
  N
]
  }) : N;
});