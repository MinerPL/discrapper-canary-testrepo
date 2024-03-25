"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("424973");
var a = n("37983"),
  i = n("884691"),
  l = n("446674"),
  s = n("77078"),
  u = n("713841"),
  r = n("79112"),
  d = n("988721"),
  o = n("592407"),
  c = n("305961"),
  f = n("957255"),
  E = n("49111"),
  m = n("782340");

function M(e) {
  let {
    user: t,
    guildId: n,
    channel: M,
    context: g
  } = e, p = c.default.getGuild(n), S = (0, l.useStateFromStores)([f.default], () => null != p ? f.default.can(E.Permissions.MANAGE_GUILD, p) : null), I = (0, d.useContextIndexState)(M, !0, !0), v = (0, d.useUserIndexState)(!0, !0), {
    isUserApp: h,
    isGuildApp: A
  } = i.useMemo(() => {
    var e, n, a, i;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let l = Object.values(null !== (a = null === (e = I.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
      s = Object.values(null !== (i = null === (n = v.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
    return {
      isGuildApp: l.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: s.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [I, v, null == t ? void 0 : t.id]), _ = i.useCallback(() => {
    (null == p ? void 0 : p.id) != null && (o.default.open(p.id, E.GuildSettingsSections.INTEGRATIONS), u.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == p ? void 0 : p.id]), T = i.useCallback(() => {
    r.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
  }, []), C = g === E.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !S || C || !A && !h) return null;
  let R = [];
  return A && R.push((0, a.jsx)(s.MenuItem, {
    id: "manage-integration",
    label: m.default.Messages.MANAGE_INTEGRATION,
    action: _
  }, "manage-integration")), h && R.push((0, a.jsx)(s.MenuItem, {
    id: "manage-authorized-app",
    label: m.default.Messages.MANAGE_AUTHORIZED_APP,
    action: T
  }, "manage-authorized-app")), R
}