"use strict";
n.r(t), n.d(t, {
  useIsMessageInteractionForcedEphemeral: function() {
    return u
  },
  useShouldShowUserAppBetaNoticeForCommand: function() {
    return d
  }
});
var i = n("373793"),
  r = n("911969"),
  a = n("213459"),
  s = n("581364"),
  o = n("807169"),
  l = n("104793");

function u(e, t, n) {
  let r = (0, s.useIsGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
  if (null == e.interactionMetadata || r) return !1;
  let a = e.interactionMetadata.authorizing_integration_owners;
  return 1 === Object.keys(a).length && i.ApplicationIntegrationType.USER_INSTALL in a
}

function d(e, t, n) {
  var i, u, d, _;
  let c = (0, o.usePermissionContext)(t, r.ApplicationCommandType.CHAT),
    E = (0, a.useUserIndexState)(!0, !1),
    I = (0, a.useGuildIndexState)(null == t ? void 0 : t.guild_id, !1),
    T = (0, s.isGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
  if (null == e || T) return !1;
  let {
    context: f,
    userId: S,
    roleIds: h,
    isImpersonating: A
  } = c, m = null === (u = I.result) || void 0 === u ? void 0 : null === (i = u.sections[e.applicationId]) || void 0 === i ? void 0 : i.descriptor;
  if (void 0 !== m) {
    let n = (0, l.computeAllowedForChannel)(m.permissions, t, null == t ? void 0 : t.guild_id),
      i = (0, l.computeAllowedForUser)(m.permissions, f.guild_id, S, h, A);
    if ((0, l.hasAccess)(e, c, i, n, m.botId) === l.HasAccessResult.ALLOWED) return !1
  }
  let N = null === (_ = E.result) || void 0 === _ ? void 0 : null === (d = _.sections[e.applicationId]) || void 0 === d ? void 0 : d.commands;
  return null != N && e.id in N
}