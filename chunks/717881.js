"use strict";
n.r(t), n.d(t, {
  UserActivityTypes: function() {
    return U
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("481060"),
  u = n("620662"),
  d = n("841784"),
  _ = n("850827"),
  c = n("812206"),
  E = n("202458"),
  I = n("220779"),
  T = n("142550"),
  f = n("954017"),
  S = n("314091"),
  h = n("159244"),
  A = n("574176"),
  m = n("952164"),
  N = n("199902"),
  p = n("592125"),
  O = n("430824"),
  C = n("496675"),
  R = n("979651"),
  g = n("543595"),
  L = n("626135"),
  v = n("153066"),
  D = n("981631"),
  M = n("689938"),
  y = n("119025");

function P(e) {
  let {
    type: t,
    source: n,
    activity: r,
    applicationStream: a,
    user: s,
    guildId: o,
    channelId: u,
    onAction: c,
    isEmbedded: E = (0, d.default)(r),
    actionColor: I
  } = e;
  return (0, i.jsx)(_.default, {
    className: (0, v.getClass)(y, "actions", t),
    type: t,
    source: n,
    activity: r,
    applicationStream: a,
    user: s,
    guildId: o,
    look: l.Button.Looks.FILLED,
    color: null != I ? I : l.Button.Colors.PRIMARY,
    channelId: u,
    onAction: c,
    isEmbedded: E
  })
}
let U = g.default.Types;
t.default = function(e) {
  let {
    activity: t,
    user: n,
    useStoreStream: a = !0,
    showActions: l = !0,
    hideHeader: d = !1,
    showChannelDetails: _ = !1,
    analyticsParams: v,
    ...U
  } = e, b = (0, o.useStateFromStores)([R.default, p.default], () => {
    var e;
    return p.default.getChannel(null === (e = R.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: G
  } = A.HangStatusExperiment.useExperiment({
    guildId: null == b ? void 0 : b.guild_id,
    location: "UserActivityContainer"
  }, {
    autoTrackExposure: !1
  }), w = (0, o.useStateFromStores)([N.default], () => a ? N.default.getAnyStreamForUser(n.id) : null), k = G && C.default.can(D.Permissions.CONNECT, b), B = (null == t ? void 0 : t.type) === D.ActivityTypes.HANG_STATUS && k ? b : null, V = (0, o.useStateFromStores)([O.default, R.default, p.default], () => {
    var e, i;
    return (0, u.default)(t, D.ActivityFlags.EMBEDDED) ? O.default.getGuild(null === (e = p.default.getChannel(null === (i = R.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != B ? O.default.getGuild(B.getGuildId()) : null
  }), x = (0, o.useStateFromStores)([O.default], () => null != w ? O.default.getGuild(w.guildId) : null), F = (0, o.useStateFromStores)([c.default], () => {
    if (null != t) return null != t.application_id ? c.default.getApplication(t.application_id) : c.default.getApplicationByName(t.name);
    return null
  }), H = (0, E.default)(), Y = (0, h.default)(n), j = H && null != t && Y;
  return (r.useEffect(() => {
    (null == t ? void 0 : t.type) === D.ActivityTypes.HANG_STATUS && k && L.default.track(D.AnalyticEvents.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == B ? void 0 : B.guild_id,
      channel_id: null == B ? void 0 : B.id
    })
  }, [null == t ? void 0 : t.type, k, B]), (null == t ? void 0 : t.type) !== D.ActivityTypes.HANG_STATUS || k) ? (0, i.jsx)(g.default, {
    ...U,
    activity: t,
    user: n,
    application: F,
    hideHeader: d,
    activityGuild: null != V ? V : x,
    showReactions: j,
    showChannelDetails: _,
    channel: _ ? b : void 0,
    renderActions: l ? () => (0, i.jsxs)("div", {
      className: s()(j && y.actionsWrapper),
      children: [(0, i.jsx)(P, {
        ...U,
        applicationStream: w,
        activity: t,
        user: n
      }), j && (0, i.jsx)(I.default, {
        showReact: !0,
        showReply: !0,
        replyHeaderText: M.default.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({
          activity: t.name
        }),
        replyPlaceholder: M.default.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: "@".concat(n.globalName)
        }),
        onInteraction: e => {
          let {
            interactionType: i,
            emoji: r,
            reply: a
          } = e;
          L.default.track(D.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
            application_id: t.application_id,
            interaction_type: i,
            ...v
          }), i === T.AtomicReactorInteractionTypes.ReactSubmit && null != r && (0, f.sendReactionToActivity)({
            reaction: r,
            user: n,
            activity: t,
            application: F,
            altText: (0, S.getActivityAltText)(n, t),
            stream: w
          }), i === T.AtomicReactorInteractionTypes.ReplySubmit && null != a && (0, f.sendReplyToActivity)({
            reply: a,
            user: n,
            activity: t,
            application: F,
            altText: (0, S.getActivityAltText)(n, t),
            stream: w
          })
        }
      })]
    }) : null,
    onOpenSpotifyTrack: m.openTrack,
    onOpenSpotifyArtist: m.openArtist,
    onOpenSpotifyAlbum: m.openAlbum
  }) : null
}