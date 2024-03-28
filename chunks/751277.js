"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("735250");
n("470079");
var a = n("266067"),
  s = n("442837"),
  i = n("601964"),
  r = n("701190"),
  o = n("206017"),
  u = n("836040"),
  d = n("603592"),
  c = n("981631"),
  f = n("689938");

function h(e) {
  var t;
  let {
    isOnHubVerificationRoute: n
  } = e, h = (0, a.matchPath)(null !== (t = window.location.pathname) && void 0 !== t ? t : "", {
    path: c.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode")
  }), C = (0, s.useStateFromStores)([r.default], () => {
    if (null == h) return null;
    let {
      inviteCode: e
    } = h.params;
    return null != e ? r.default.getInvite(e) : null
  }), p = (null == C ? void 0 : C.guild) != null ? new i.default(null == C ? void 0 : C.guild) : null;
  return n ? null != p && null != C ? (0, l.jsx)(u.default, {
    guild: p,
    invite: C
  }) : (0, l.jsx)(d.default, {
    tooltip: f.default.Messages.HUB_DISCORD_HUBS,
    id: "guild-hub-button",
    icon: o.default
  }) : null
}