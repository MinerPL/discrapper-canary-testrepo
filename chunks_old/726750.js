"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  i = n("305961"),
  d = n("697218"),
  s = n("800762"),
  o = n("244480"),
  r = n("619395"),
  c = n("325861"),
  f = n("77445"),
  E = n("130563"),
  _ = n("782340");

function S(e) {
  var t;
  let n = (0, E.default)(),
    S = null == n ? void 0 : n.id,
    T = null == n ? void 0 : n.guild_id,
    g = (0, u.useStateFromStores)([i.default], () => i.default.getGuild(T), [T]),
    p = (0, u.useStateFromStores)([s.default], () => null != S ? s.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
    M = (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    A = (0, f.default)(),
    v = (0, u.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, S), [S, e.id]),
    I = (0, r.useCanModerateRequestToSpeak)(S);
  if (null == n || null == g || null == p || v.speaker) return null;
  let m = () => {
    M ? (0, o.audienceAckRequestToSpeak)(n, !1) : (0, o.inviteUserToStage)(n, e.id)
  };
  return I ? (0, l.jsx)(a.MenuItem, {
    id: "invite-speaker",
    label: M ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: m
  }) : A && M ? (0, l.jsx)(a.MenuItem, {
    id: "invite-speaker",
    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: m
  }) : null
}