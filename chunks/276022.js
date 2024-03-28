"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("653041");
var l = n("735250"),
  i = n("470079"),
  a = n("442837"),
  d = n("481060"),
  u = n("139387"),
  s = n("230711"),
  r = n("213459"),
  o = n("434404"),
  c = n("430824"),
  p = n("496675"),
  E = n("981631"),
  f = n("689938");

function I(e) {
  let {
    user: t,
    guildId: n,
    channel: I,
    context: S
  } = e, M = c.default.getGuild(n), _ = (0, a.useStateFromStores)([p.default], () => null != M ? p.default.can(E.Permissions.MANAGE_GUILD, M) : null), A = (0, r.useContextIndexState)(I, !0, !0), N = (0, r.useUserIndexState)(!0, !0), {
    isUserApp: T,
    isGuildApp: v
  } = i.useMemo(() => {
    var e, n, l, i;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let a = Object.values(null !== (l = null === (e = A.result) || void 0 === e ? void 0 : e.sections) && void 0 !== l ? l : {}),
      d = Object.values(null !== (i = null === (n = N.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
    return {
      isGuildApp: a.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: d.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [A, N, null == t ? void 0 : t.id]), b = i.useCallback(() => {
    (null == M ? void 0 : M.id) != null && (o.default.open(M.id, E.GuildSettingsSections.INTEGRATIONS), u.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == M ? void 0 : M.id]), h = i.useCallback(() => {
    s.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
  }, []), O = S === E.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !_ || O || !v && !T) return null;
  let m = [];
  return v && m.push((0, l.jsx)(d.MenuItem, {
    id: "manage-integration",
    label: f.default.Messages.MANAGE_INTEGRATION,
    action: b
  }, "manage-integration")), T && m.push((0, l.jsx)(d.MenuItem, {
    id: "manage-authorized-app",
    label: f.default.Messages.MANAGE_AUTHORIZED_APP,
    action: h
  }, "manage-authorized-app")), m
}