"use strict";
t.r(n), t.d(n, {
  default: function() {
    return _
  }
});
var i = t("37983");
t("884691");
var u = t("446674"),
  l = t("77078"),
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
    M = (0, u.useStateFromStores)([a.default], () => a.default.getGuild(n), [n]),
    h = (0, u.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, t), [t, e.id]),
    T = (null === (_ = d.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
    S = (0, u.useStateFromStores)([o.default], () => null != t && o.default.canWithPartialContext(f.Permissions.MUTE_MEMBERS, {
      channelId: t
    }), [t]);
  return null != m && null != M && (S || T) && h.speaker ? (0, i.jsx)(l.MenuItem, {
    id: "audience",
    label: T ? E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      T ? (0, s.moveSelfToAudience)(m) : (0, s.moveUserToAudience)(e, m)
    }
  }) : null
}