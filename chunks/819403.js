"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("735250");
l("470079");
var n = l("442837"),
  u = l("481060"),
  d = l("430824"),
  s = l("594174"),
  r = l("979651"),
  i = l("471253"),
  o = l("200498"),
  f = l("88751"),
  c = l("267980"),
  m = l("623633"),
  M = l("689938");

function E(e) {
  var t;
  let l = (0, m.default)(),
    E = null == l ? void 0 : l.id,
    S = null == l ? void 0 : l.guild_id,
    _ = (0, n.useStateFromStores)([d.default], () => d.default.getGuild(S), [S]),
    g = (0, n.useStateFromStores)([r.default], () => null != E ? r.default.getVoiceStateForChannel(E, e.id) : null, [E, e.id]),
    I = (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    C = (0, c.default)(),
    R = (0, n.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, E), [E, e.id]),
    N = (0, o.useCanModerateRequestToSpeak)(E);
  if (null == l || null == _ || null == g || R.speaker) return null;
  let A = () => {
    I ? (0, i.audienceAckRequestToSpeak)(l, !1) : (0, i.inviteUserToStage)(l, e.id)
  };
  return N ? (0, a.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: I ? M.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: A
  }) : C && I ? (0, a.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: M.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: A
  }) : null
}