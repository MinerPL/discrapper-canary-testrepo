"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("512722"),
  r = n.n(i),
  o = n("442837"),
  u = n("481060"),
  d = n("924301"),
  c = n("786915"),
  f = n("430824"),
  h = n("496675"),
  m = n("981631"),
  p = n("689938"),
  E = n("246394");

function C(e) {
  var t, l;
  let {
    stream: i,
    applicationId: C,
    channel: g,
    exitFullScreen: S,
    appContext: _,
    analyticsLocation: T,
    className: I,
    ...A
  } = e, v = null == g ? void 0 : g.getGuildId(), N = null == g ? void 0 : g.id, x = (0, o.useStateFromStores)([f.default], () => null != v ? f.default.getGuild(v) : null, [v]), M = (0, o.useStateFromStores)([d.default], () => d.default.getActiveEventByChannel(N), [N]);
  if (t = x, l = g, !(null != t && null != l && h.default.can(m.Permissions.CREATE_INSTANT_INVITE, l))) return null;
  let R = p.default.Messages.INSTANT_INVITE;
  return null != i ? R = p.default.Messages.INVITE_STREAM_HEADER : null != C && (R = p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Button, {
      size: u.Button.Sizes.SMALL,
      color: E.buttonColor,
      onClick: () => {
        r()(null != x, "guild cannot be null"), r()(null != g, "channel cannot be null"), ! function(e) {
          let {
            guild: t,
            channel: l,
            streamUserId: s,
            applicationId: i,
            appContext: r,
            exitFullScreen: o,
            analyticsLocation: d,
            guildScheduledEvent: c
          } = e;
          null == o || o(), (0, u.openModalLazy)(async () => {
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
            contextKey: r === m.AppContext.POPOUT ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
          })
        }({
          guild: x,
          channel: g,
          streamUserId: null == i ? void 0 : i.ownerId,
          applicationId: C,
          appContext: _,
          exitFullScreen: S,
          analyticsLocation: T,
          guildScheduledEvent: M
        })
      },
      className: s()(I, E.textButton),
      ...A,
      children: R
    }), (0, a.jsx)(c.default, {
      channel: g,
      stream: i,
      appContext: _,
      className: s()(I, E.iconButton),
      exitFullScreen: S,
      analyticsLocation: T,
      guildScheduledEvent: M
    })]
  })
}