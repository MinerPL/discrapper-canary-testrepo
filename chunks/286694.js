"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var a = n("442837"),
  u = n("481060"),
  l = n("592125"),
  d = n("430824"),
  r = n("496675"),
  s = n("594174"),
  o = n("471253"),
  c = n("88751"),
  E = n("981631"),
  f = n("689938");

function T(e, t, n) {
  var T;
  let _ = l.default.getChannel(n),
    I = (0, a.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]),
    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, n), [n, e.id]),
    p = (null === (T = s.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) === e.id,
    N = (0, a.useStateFromStores)([r.default], () => null != n && r.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != _ && null != I && (N || p) && S.speaker ? (0, i.jsx)(u.MenuItem, {
    id: "audience",
    label: p ? f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      p ? (0, o.moveSelfToAudience)(_) : (0, o.moveUserToAudience)(e, _)
    }
  }) : null
}