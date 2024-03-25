"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("627445"),
  r = n.n(i),
  u = n("446674"),
  o = n("77078"),
  d = n("398604"),
  c = n("331759"),
  f = n("305961"),
  h = n("957255"),
  m = n("49111"),
  p = n("782340"),
  E = n("363768");

function g(e) {
  var t, l;
  let {
    stream: i,
    applicationId: g,
    channel: S,
    exitFullScreen: C,
    appContext: _,
    analyticsLocation: I,
    className: T,
    ...v
  } = e, x = null == S ? void 0 : S.getGuildId(), N = null == S ? void 0 : S.id, A = (0, u.useStateFromStores)([f.default], () => null != x ? f.default.getGuild(x) : null, [x]), M = (0, u.useStateFromStores)([d.default], () => d.default.getActiveEventByChannel(N), [N]);
  if (t = A, l = S, !(null != t && null != l && h.default.can(m.Permissions.CREATE_INSTANT_INVITE, l))) return null;
  let R = p.default.Messages.INSTANT_INVITE;
  return null != i ? R = p.default.Messages.INVITE_STREAM_HEADER : null != g && (R = p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      color: E.buttonColor,
      onClick: () => {
        r(null != A, "guild cannot be null"), r(null != S, "channel cannot be null"), ! function(e) {
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
            } = await n.el("310688").then(n.bind(n, "310688"));
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
          guild: A,
          channel: S,
          streamUserId: null == i ? void 0 : i.ownerId,
          applicationId: g,
          appContext: _,
          exitFullScreen: C,
          analyticsLocation: I,
          guildScheduledEvent: M
        })
      },
      className: s(T, E.textButton),
      ...v,
      children: R
    }), (0, a.jsx)(c.default, {
      channel: S,
      stream: i,
      appContext: _,
      className: s(T, E.iconButton),
      exitFullScreen: C,
      analyticsLocation: I,
      guildScheduledEvent: M
    })]
  })
}