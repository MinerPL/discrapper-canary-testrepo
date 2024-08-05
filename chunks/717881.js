n.d(t, {
  P: function() {
return P;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(620662),
  c = n(841784),
  d = n(387903),
  _ = n(850827),
  E = n(812206),
  f = n(202458),
  h = n(220779),
  p = n(142550),
  m = n(954017),
  I = n(314091),
  T = n(159244),
  g = n(574176),
  S = n(952164),
  A = n(199902),
  N = n(592125),
  v = n(430824),
  O = n(496675),
  R = n(979651),
  C = n(626135),
  y = n(153066),
  D = n(981631),
  L = n(689938),
  b = n(434544);

function M(e) {
  let {
type: t,
source: n,
activity: i,
applicationStream: a,
user: s,
guildId: o,
channelId: u,
onAction: d,
isEmbedded: E = (0, c.Z)(i),
actionColor: f
  } = e;
  return (0, r.jsx)(_.Z, {
className: (0, y.l)(b, 'actions', t),
type: t,
source: n,
activity: i,
applicationStream: a,
user: s,
guildId: o,
look: l.Button.Looks.FILLED,
color: null != f ? f : l.Button.Colors.PRIMARY,
channelId: u,
onAction: d,
isEmbedded: E
  });
}
let P = d.Z.Types;
t.Z = function(e) {
  let {
activity: t,
user: n,
useStoreStream: a = !0,
showActions: l = !0,
hideHeader: c = !1,
showChannelDetails: _ = !1,
analyticsParams: y,
...P
  } = e, U = (0, o.e7)([
R.Z,
N.Z
  ], () => {
var e;
return N.Z.getChannel(null === (e = R.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
  }), {
enableHangStatus: w
  } = g.n.useExperiment({
guildId: null == U ? void 0 : U.guild_id,
location: 'UserActivityContainer'
  }, {
autoTrackExposure: !1
  }), x = (0, o.e7)([A.Z], () => a ? A.Z.getAnyStreamForUser(n.id) : null), G = w && O.Z.can(D.Plq.CONNECT, U), k = (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS && G ? U : null, B = (0, o.e7)([
v.Z,
R.Z,
N.Z
  ], () => {
var e, r;
return (0, u.Z)(t, D.xjy.EMBEDDED) ? v.Z.getGuild(null === (e = N.Z.getChannel(null === (r = R.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === r ? void 0 : r.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != k ? v.Z.getGuild(k.getGuildId()) : null;
  }), F = (0, o.e7)([v.Z], () => null != x ? v.Z.getGuild(x.guildId) : null), V = (0, o.e7)([E.Z], () => {
if (null != t)
  return null != t.application_id ? E.Z.getApplication(t.application_id) : E.Z.getApplicationByName(t.name);
return null;
  }), H = (0, f.Z)(), Z = (0, T.Z)(n), Y = H && null != t && Z;
  return (i.useEffect(() => {
(null == t ? void 0 : t.type) === D.IIU.HANG_STATUS && G && C.default.track(D.rMx.VIEW_HANG_STATUS, {
  source: 'UserProfilePopout',
  guild_id: null == k ? void 0 : k.guild_id,
  channel_id: null == k ? void 0 : k.id
});
  }, [
null == t ? void 0 : t.type,
G,
k
  ]), (null == t ? void 0 : t.type) !== D.IIU.HANG_STATUS || G) ? (0, r.jsx)(d.Z, {
...P,
activity: t,
user: n,
application: V,
hideHeader: c,
activityGuild: null != B ? B : F,
showReactions: Y,
showChannelDetails: _,
channel: _ ? U : void 0,
renderActions: l ? () => (0, r.jsxs)('div', {
  className: s()(Y && b.actionsWrapper),
  children: [
    (0, r.jsx)(M, {
      ...P,
      applicationStream: x,
      activity: t,
      user: n
    }),
    Y && (0, r.jsx)(h.ZP, {
      showReact: !0,
      showReply: !0,
      popoutProps: {
        replyHeaderText: L.Z.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({
          activity: t.name
        }),
        replyPlaceholder: L.Z.Messages.TEXTAREA_PLACEHOLDER.format({
          channel: '@'.concat(n.globalName)
        })
      },
      onInteraction: e => {
        let {
          interactionType: r,
          emoji: i,
          reply: a
        } = e;
        C.default.track(D.rMx.ACTIVITY_REACTOR_INTERACTED, {
          application_id: t.application_id,
          interaction_type: r,
          ...y
        }), r === p.L.ReactSubmit && null != i && (0, m.sendReactionToActivity)({
          reaction: i,
          user: n,
          activity: t,
          application: V,
          altText: (0, I.xC)(n, t),
          stream: x
        }), r === p.L.ReplySubmit && null != a && (0, m.sendReplyToActivity)({
          reply: a,
          user: n,
          activity: t,
          application: V,
          altText: (0, I.xC)(n, t),
          stream: x
        });
      }
    })
  ]
}) : null,
onOpenSpotifyTrack: S.aG,
onOpenSpotifyArtist: S.d$,
onOpenSpotifyAlbum: S.Z5
  }) : null;
};