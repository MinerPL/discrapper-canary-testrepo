t.d(n, {
  Z: function() {
return Z;
  }
});
var l = t(735250);
t(470079);
var u = t(399606),
  i = t(481060),
  r = t(231757),
  a = t(397639),
  o = t(19780),
  s = t(979651),
  d = t(951206),
  c = t(446226),
  E = t(937393),
  N = t(721351),
  _ = t(981631),
  f = t(689938);

function Z(e) {
  let n = (0, u.e7)([o.Z], () => o.Z.getChannelId() === e.id),
Z = (0, c.Z)(),
I = (null == Z ? void 0 : Z.channelId) === e.id,
T = (0, a.V)(e) && !e.isPrivate(),
C = (0, a.Z)(e),
S = !(0, u.e7)([s.Z], () => s.Z.isInChannel(e.id)) && C || T,
A = (0, E.Z)();
  if (!I && 0 === A.length)
return null;
  let g = n => {
if (!n.twoWayLink || n.revoked) {
  (0, r.Z)({
    platformType: n.type,
    location: 'Console Transfer Item'
  });
  return;
}
n.type === _.ABu.XBOX ? (0, i.openModalLazy)(async () => {
  let {
    default: n
  } = await Promise.all([
    t.e('32873'),
    t.e('522')
  ]).then(t.bind(t, 200623));
  return t => (0, l.jsx)(n, {
    ...t,
    channel: e
  });
}) : (n.type === _.ABu.PLAYSTATION || n.type === _.ABu.PLAYSTATION_STAGING) && (0, i.openModalLazy)(async () => {
  let {
    default: u
  } = await t.e('638').then(t.bind(t, 543974));
  return t => (0, l.jsx)(u, {
    ...t,
    platform: n.type,
    channel: e
  });
});
  };
  return (0, l.jsx)(l.Fragment, {
children: I ? (0, l.jsx)(i.MenuItem, {
  label: f.Z.Messages.TRANSFER_VOICE_TO_DEVICE,
  id: 'handoff',
  action: () => {
    (0, d.F)(Z);
  },
  icon: (0, N.Z)(void 0),
  disabled: S
}) : A.map(e => (0, l.jsx)(i.MenuItem, {
  id: 'transfer-'.concat(e.type, '-').concat(e.id),
  label: function(e, n) {
    if (e === _.ABu.XBOX)
      return n ? f.Z.Messages.TRANSFER_VOICE_TO_XBOX : f.Z.Messages.JOIN_ON_XBOX;
    if (e === _.ABu.PLAYSTATION)
      return n ? f.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : f.Z.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
    if (e === _.ABu.PLAYSTATION_STAGING)
      return n ? f.Z.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : f.Z.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE;
  }(e.type, n),
  action: () => g(e),
  icon: (0, N.Z)(e.type),
  disabled: S
}, e.id))
  });
}