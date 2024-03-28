"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("735250");
n("470079");
var l = n("512722"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("40851"),
  u = n("358221"),
  d = n("431368"),
  c = n("167675"),
  f = n("418469"),
  h = n("673539"),
  m = n("218035"),
  p = n("775666"),
  E = n("423589"),
  C = n("592125"),
  g = n("496675"),
  S = n("881824"),
  _ = n("146085"),
  T = n("427679"),
  I = n("354459"),
  A = n("689938");

function v(e) {
  let {
    channelId: t,
    closePopout: n,
    appContext: l,
    onSelect: v
  } = e, N = (0, i.useStateFromStores)([u.default], () => u.default.getSelectedParticipant(t)), x = (null == N ? void 0 : N.type) === I.ParticipantTypes.STREAM ? N.stream : null, M = (0, h.default)(t);
  return (0, a.jsxs)(r.Menu, {
    navId: "stage-channel-call-overflow-popout",
    onClose: n,
    "aria-label": A.default.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
    onSelect: v,
    children: [function(e) {
      let t = (0, i.useStateFromStores)([C.default], () => C.default.getChannel(e), [e]),
        n = (0, i.useStateFromStores)([g.default], () => g.default.can(_.MODERATE_STAGE_CHANNEL_PERMISSIONS, t)),
        l = (0, i.useStateFromStores)([T.default], () => T.default.getStageInstanceByChannel(e), [e]),
        s = (0, o.useAppContext)(),
        u = () => null != t && (0, S.openStageChannelSettings)(t, s);
      return (null == t ? void 0 : t.isGuildStageVoice()) && n ? null != l ? (0, a.jsx)(r.MenuItem, {
        id: "edit-stage",
        label: A.default.Messages.EDIT_STAGE_SUBTITLE,
        action: u
      }) : (0, a.jsx)(r.MenuItem, {
        id: "start-stage",
        label: A.default.Messages.STAGE_CHANNEL_START_TITLE,
        action: u
      }) : null
    }(t), function(e) {
      let t = (0, i.useStateFromStores)([C.default], () => C.default.getChannel(e), [e]);
      s()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
      let n = (0, E.useShouldUseNewNotificationSystem)("StageChannelCallOverflowMenu"),
        a = (0, p.default)(t),
        l = (0, m.default)(t);
      return n ? a : l
    }(t), (0, c.default)(), (0, d.default)(t), M, (0, f.default)(x, l)]
  })
}