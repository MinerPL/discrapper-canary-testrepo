n.d(t, {
  Z: function() {
return N;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  l = n.n(a),
  s = n(442837),
  r = n(481060),
  o = n(40851),
  c = n(358221),
  d = n(431368),
  u = n(167675),
  h = n(418469),
  p = n(673539),
  m = n(218035),
  _ = n(775666),
  f = n(423589),
  E = n(592125),
  C = n(496675),
  g = n(881824),
  I = n(146085),
  x = n(427679),
  T = n(354459),
  v = n(689938);

function N(e) {
  let {
channelId: t,
closePopout: n,
appContext: a,
onSelect: N
  } = e, S = (0, s.e7)([c.Z], () => c.Z.getSelectedParticipant(t)), Z = (null == S ? void 0 : S.type) === T.fO.STREAM ? S.stream : null, A = (0, p.Z)(t);
  return (0, i.jsxs)(r.Menu, {
navId: 'stage-channel-call-overflow-popout',
onClose: n,
'aria-label': v.Z.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
onSelect: N,
children: [
  function(e) {
    let t = (0, s.e7)([E.Z], () => E.Z.getChannel(e), [e]),
      n = (0, s.e7)([C.Z], () => C.Z.can(I.yP, t)),
      a = (0, s.e7)([x.Z], () => x.Z.getStageInstanceByChannel(e), [e]),
      l = (0, o.bp)(),
      c = () => null != t && (0, g.T)(t, l);
    return (null == t ? void 0 : t.isGuildStageVoice()) && n ? null != a ? (0, i.jsx)(r.MenuItem, {
      id: 'edit-stage',
      label: v.Z.Messages.EDIT_STAGE_SUBTITLE,
      action: c
    }) : (0, i.jsx)(r.MenuItem, {
      id: 'start-stage',
      label: v.Z.Messages.STAGE_CHANNEL_START_TITLE,
      action: c
    }) : null;
  }(t),
  function(e) {
    let t = (0, s.e7)([E.Z], () => E.Z.getChannel(e), [e]);
    l()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
    let n = (0, f.Mn)('StageChannelCallOverflowMenu'),
      i = (0, _.ZP)(t),
      a = (0, m.Z)(t);
    return n ? i : a;
  }(t),
  (0, u.Z)(),
  (0, d.Z)(t),
  A,
  (0, h.Z)(Z, a)
]
  });
}