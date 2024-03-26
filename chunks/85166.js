"use strict";
t.r(n), t.d(n, {
  default: function() {
    return _
  }
});
var i = t("37983");
t("884691");
var l = t("446674"),
  u = t("77078"),
  r = t("42203"),
  a = t("305961"),
  o = t("957255"),
  d = t("697218"),
  s = t("244480"),
  c = t("325861"),
  f = t("49111"),
  E = t("782340");

function _(e, n, t) {
  var _;
  let m = r.default.getChannel(t),
    M = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(n), [n]),
    T = (0, l.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, t), [t, e.id]),
    h = (null === (_ = d.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
    C = (0, l.useStateFromStores)([o.default], () => null != t && o.default.canWithPartialContext(f.Permissions.MUTE_MEMBERS, {
      channelId: t
    }), [t]);
  return null != m && null != M && (C || h) && T.speaker ? (0, i.jsx)(u.MenuItem, {
    id: "audience",
    label: h ? E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      h ? (0, s.moveSelfToAudience)(m) : (0, s.moveUserToAudience)(e, m)
    }
  }) : null
}