"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var l = n("512722"),
  s = n.n(l),
  i = n("442837"),
  r = n("115850"),
  o = n("481060"),
  u = n("40851"),
  d = n("430824"),
  c = n("496675"),
  f = n("36113"),
  h = n("871499"),
  m = n("981631"),
  p = n("689938");

function E(e) {
  var t, l;
  let {
    applicationId: E,
    stream: C,
    channel: g,
    exitFullScreen: S,
    appContext: _,
    analyticsLocation: T,
    guildScheduledEvent: I,
    ...A
  } = e, N = (0, u.useAppContext)(), v = null == g ? void 0 : g.getGuildId(), x = (0, i.useStateFromStores)([d.default], () => null != v ? d.default.getGuild(v) : null, [v]);
  return (t = x, l = g, null != t && null != l && c.default.can(m.Permissions.CREATE_INSTANT_INVITE, l)) ? (0, a.jsx)(h.default, {
    onClick: () => {
      s()(null != x, "guild cannot be null"), s()(null != g, "channel cannot be null"), ! function(e) {
        let {
          guild: t,
          channel: l,
          streamUserId: s,
          applicationId: i,
          appContext: r,
          exitFullScreen: u,
          analyticsLocation: d,
          guildScheduledEvent: c
        } = e;
        null == u || u(), (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
          return n => (0, a.jsx)(e, {
            ...n,
            guild: t,
            channel: l,
            streamUserId: s,
            applicationId: i,
            analyticsLocation: d,
            source: l.isGuildStageVoice() ? m.InstantInviteSources.STAGE_CHANNEL : m.InstantInviteSources.STREAM_INVITE,
            guildScheduledEvent: c
          })
        }, {
          modalKey: "stream-invite-modal",
          contextKey: r === m.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
        })
      }({
        guild: x,
        channel: g,
        streamUserId: null == C ? void 0 : C.ownerId,
        applicationId: E,
        appContext: null != _ ? _ : N,
        exitFullScreen: S,
        analyticsLocation: T,
        guildScheduledEvent: I
      })
    },
    iconComponent: null != E ? f.default : r.GroupPlusIcon,
    label: null != E ? p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY : p.default.Messages.ACTIVITY_INVITE_MODAL_INVITE,
    ...A
  }) : null
}