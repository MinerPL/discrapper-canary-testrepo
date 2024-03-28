"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("367907"),
  u = s("605436"),
  c = s("228643"),
  E = s("496675"),
  _ = s("626135"),
  I = s("823379"),
  T = s("243730"),
  S = s("946724"),
  f = s("999382"),
  m = s("130341"),
  N = s("981975"),
  g = s("660962"),
  h = s("442182"),
  C = s("322816"),
  R = s("266665"),
  x = s("203377"),
  L = s("981631"),
  O = s("631896");

function A(e) {
  let t, {
      editRoleId: s,
      setEditRoleId: n,
      selectedSection: A,
      setSelectedSection: p
    } = e,
    M = (0, r.useStateFromStores)([S.default], () => S.default.guild, []);
  i()(null != M, "guildId cannot be null here");
  let {
    role: D,
    permissionSearchQuery: v
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    role: S.default.getRole(s),
    permissionSearchQuery: S.default.getPermissionSearchQuery()
  }), [s]);
  l.useEffect(() => {
    null == D && n(null)
  }, [D, n]);
  let j = (0, r.useStateFromStores)([E.default], () => E.default.getHighestRole(M), [M]),
    G = (0, r.useStateFromStores)([E.default], () => !E.default.isRoleHigher(M, j, D)),
    U = l.useRef(null),
    P = (0, r.useStateFromStores)([f.default], () => f.default.getProps().integrations);
  if (l.useEffect(() => {
      var e, t;
      let a = (0, m.getSectionAnalyticsName)(A),
        l = null !== (t = null === (e = T.default.getRoleMemberCount(M.id)) || void 0 === e ? void 0 : e[s]) && void 0 !== t ? t : 0;
      _.default.track(L.AnalyticEvents.ROLE_PAGE_VIEWED, {
        tab_opened: a,
        is_everyone: (0, u.isEveryoneRoleId)(M.id, s),
        role_id: s,
        role_mentionable: null == D ? void 0 : D.mentionable,
        role_hoist: null == D ? void 0 : D.hoist,
        role_permissions: null == D ? void 0 : D.permissions.toString(),
        role_num_members: l,
        ...(0, d.collectGuildAnalyticsMetadata)(M.id)
      })
    }, [A, M.id, null == D ? void 0 : D.id]), l.useEffect(() => {
      (null == D ? void 0 : D.id) != null && (0, c.fetchRoleConnectionsConfiguration)(M.id, D.id)
    }, [M.id, null == D ? void 0 : D.id]), null == D) return null;
  switch (A) {
    case x.GuildSettingsRoleEditSections.DISPLAY:
      t = (0, a.jsx)(g.default, {
        guild: M,
        role: D,
        locked: G,
        highestRole: j,
        setSelectedSection: p
      });
      break;
    case x.GuildSettingsRoleEditSections.PERMISSIONS:
      t = (0, a.jsx)(C.default, {
        guild: M,
        role: D,
        locked: G,
        setSelectedSection: p,
        initialSearchQuery: v
      });
      break;
    case x.GuildSettingsRoleEditSections.VERIFICATIONS:
      t = (0, a.jsx)(N.default, {
        guild: M,
        role: D,
        locked: G,
        setSelectedSection: p,
        integrations: null != P ? P : void 0
      });
      break;
    case x.GuildSettingsRoleEditSections.MEMBERS:
      t = (0, a.jsx)(h.default, {
        guild: M,
        role: D,
        locked: G,
        setSelectedSection: p
      });
      break;
    default:
      (0, I.assertNever)(A)
  }
  return (0, a.jsxs)(o.FormSection, {
    className: O.page,
    children: [(0, a.jsx)(R.default, {
      guild: M,
      currentRoleId: s,
      setCurrentRoleId: n,
      setSelectedSection: p
    }), (0, a.jsx)("div", {
      className: O.contentContainer,
      ref: U,
      children: (0, a.jsx)(o.FocusRingScope, {
        containerRef: U,
        children: t
      })
    })]
  })
}