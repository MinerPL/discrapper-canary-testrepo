"use strict";
n.d(t, {
  P: function() {
    return U
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(620662),
  _ = n(841784),
  d = n(850827),
  c = n(812206),
  E = n(202458),
  I = n(220779),
  T = n(142550),
  h = n(954017),
  S = n(314091),
  f = n(159244),
  N = n(574176),
  A = n(952164),
  m = n(199902),
  O = n(592125),
  R = n(430824),
  C = n(496675),
  p = n(979651),
  g = n(543595),
  L = n(626135),
  v = n(153066),
  D = n(981631),
  M = n(689938),
  P = n(119025);

function y(e) {
  let {
    type: t,
    source: n,
    activity: r,
    applicationStream: s,
    user: o,
    guildId: a,
    channelId: u,
    onAction: c,
    isEmbedded: E = (0, _.Z)(r),
    actionColor: I
  } = e;
  return (0, i.jsx)(d.Z, {
    className: (0, v.l)(P, "actions", t),
    type: t,
    source: n,
    activity: r,
    applicationStream: s,
    user: o,
    guildId: a,
    look: l.Button.Looks.FILLED,
    color: null != I ? I : l.Button.Colors.PRIMARY,
    channelId: u,
    onAction: c,
    isEmbedded: E
  })
}
let U = g.Z.Types;
t.Z = function(e) {
  let {
    activity: t,
    user: n,
    useStoreStream: s = !0,
    showActions: l = !0,
    hideHeader: _ = !1,
    showChannelDetails: d = !1,
    analyticsParams: v,
    ...U
  } = e, b = (0, a.e7)([p.Z, O.Z], () => {
    var e;
    return O.Z.getChannel(null === (e = p.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
  }), {
    enableHangStatus: G
  } = N.n.useExperiment({
    guildId: null == b ? void 0 : b.guild_id,
    location: "UserActivityContainer"
  }, {
    autoTrackExposure: !1
  }), w = (0, a.e7)([m.Z], () => s ? m.Z.getAnyStreamForUser(n.id) : null), k = G && C.Z.can(D.Plq.CONNECT, b), B = (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS && k ? b : null, x = (0, a.e7)([R.Z, p.Z, O.Z], () => {
    var e, i;
    return (0, u.Z)(t, D.xjy.EMBEDDED) ? R.Z.getGuild(null === (e = O.Z.getChannel(null === (i = p.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != B ? R.Z.getGuild(B.getGuildId()) : null
  }), V = (0, a.e7)([R.Z], () => null != w ? R.Z.getGuild(w.guildId) : null), Z = (0, a.e7)([c.Z], () => {
    if (null != t) return null != t.application_id ? c.Z.getApplication(t.application_id) : c.Z.getApplicationByName(t.name);
    return null
  }), H = (0, E.Z)(), F = (0, f.Z)(n), Y = H && null != t && F;
  return (r.useEffect(() => {
    (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS && k && L.default.track(D.rMx.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == B ? void 0 : B.guild_id,
      channel_id: null == B ? void 0 : B.id
    })
  }, [null == t ? void 0 : t.type, k, B]), (null == t ? void 0 : t.type) !== D.IIU.HANG_STATUS || k) ? (0, i.jsx)(g.Z, {
    ...U,
    activity: t,
    user: n,
    application: Z,
    hideHeader: _,
    activityGuild: null != x ? x : V,
    showReactions: Y,
    showChannelDetails: d,
    channel: d ? b : void 0,
    renderActions: l ? () => (0, i.jsxs)("div", {
      className: o()(Y && P.actionsWrapper),
      children: [(0, i.jsx)(y, {
        ...U,
        applicationStream: w,
        activity: t,
        user: n
      }), Y && (0, i.jsx)(I.ZP, {
        showReact: !0,
        showReply: !0,
        replyHeaderText: M.Z.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({
          activity: t.name
        }),
        replyPlaceholder: M.Z.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: "@".concat(n.globalName)
        }),
        onInteraction: e => {
          let {
            interactionType: i,
            emoji: r,
            reply: s
          } = e;
          L.default.track(D.rMx.ACTIVITY_REACTOR_INTERACTED, {
            application_id: t.application_id,
            interaction_type: i,
            ...v
          }), i === T.L.ReactSubmit && null != r && (0, h.sendReactionToActivity)({
            reaction: r,
            user: n,
            activity: t,
            application: Z,
            altText: (0, S.xC)(n, t),
            stream: w
          }), i === T.L.ReplySubmit && null != s && (0, h.sendReplyToActivity)({
            reply: s,
            user: n,
            activity: t,
            application: Z,
            altText: (0, S.xC)(n, t),
            stream: w
          })
        }
      })]
    }) : null,
    onOpenSpotifyTrack: A.aG,
    onOpenSpotifyArtist: A.d$,
    onOpenSpotifyAlbum: A.Z5
  }) : null
}