"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  r = n("305961"),
  a = n("697218"),
  o = n("800762"),
  s = n("244480"),
  d = n("619395"),
  c = n("325861"),
  f = n("77445"),
  g = n("130563"),
  _ = n("782340");

function h(e) {
  var t;
  let n = (0, g.default)(),
    h = null == n ? void 0 : n.id,
    E = null == n ? void 0 : n.guild_id,
    S = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(E), [E]),
    m = (0, i.useStateFromStores)([o.default], () => null != h ? o.default.getVoiceStateForChannel(h, e.id) : null, [h, e.id]),
    v = (null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    p = (0, f.default)(),
    T = (0, i.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, h), [h, e.id]),
    M = (0, d.useCanModerateRequestToSpeak)(h);
  if (null == n || null == S || null == m || T.speaker) return null;
  let C = () => {
    v ? (0, s.audienceAckRequestToSpeak)(n, !1) : (0, s.inviteUserToStage)(n, e.id)
  };
  return M ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: v ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: C
  }) : p && v ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: C
  }) : null
}