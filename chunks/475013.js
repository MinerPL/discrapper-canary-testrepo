"use strict";
s.r(t), s.d(t, {
  GuildSettingsRolesNotice: function() {
    return x
  },
  default: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("442837"),
  o = s("749210"),
  d = s("852860"),
  u = s("605436"),
  c = s("650774"),
  E = s("823379"),
  _ = s("434404"),
  I = s("764260"),
  T = s("946724"),
  S = s("999382"),
  f = s("130341"),
  m = s("853813"),
  N = s("163249"),
  g = s("150689"),
  h = s("203377"),
  C = s("981631");

function R(e) {
  _.default.selectRole(e)
}
let x = () => {
  let {
    guild: e
  } = (0, r.useStateFromStoresObject)([S.default], () => S.default.getProps()), t = (0, r.useStateFromStores)([T.default], () => T.default.formState), s = (0, r.useStateFromStores)([T.default], () => T.default.errorMessage);
  return (0, a.jsx)(d.default, {
    errorMessage: s,
    onSave: () => {
      if (null == e) return;
      let {
        id: t
      } = e, s = T.default.editedRoleIds.map(e => T.default.getRole(e)).filter(E.isNotNullish), a = T.default.getSortDeltas(), l = null, n = null;
      T.default.hasRoleConfigurationChanges && (n = T.default.editedRoleIdsForConfigurations, l = T.default.getEditedRoleConnectionConfigurationsMap()), (0, I.saveRoleSettings)(t, s, a, n, l)
    },
    submitting: t === C.FormStates.SUBMITTING,
    onReset: I.init
  })
};

function L(e) {
  let {
    refToScroller: t
  } = e, {
    guild: s,
    roles: n
  } = (0, r.useStateFromStoresObject)([T.default], () => ({
    guild: T.default.guild,
    roles: T.default.roles
  }), []);
  i()(null != s, "Guild cannot be null here");
  let d = l.useMemo(() => n.find(e => (0, u.isEveryoneRoleId)(s.id, e.id)), [n, s]);
  i()(null != d, "Guild must have an everyone role");
  let E = l.useMemo(() => n.filter(e => !(0, u.isEveryoneRoleId)(s.id, e.id)), [n, s]),
    _ = (0, r.useStateFromStores)([S.default], () => S.default.getSelectedRoleId()),
    [I, C] = l.useState(E.length > 0);
  l.useEffect(() => {
    C(I || E.length > 0)
  }, [I, E.length]), l.useEffect(() => {
    let e = c.default.getMemberCount(s.id);
    null != e && e <= f.MAX_PREFETCH_MEMBER_COUNT && o.default.requestMembers(s.id, "", 0, !1)
  }, []);
  let [x, L] = l.useState(h.GuildSettingsRoleEditSections.DISPLAY);
  return (l.useEffect(() => {
    null == _ && L(h.GuildSettingsRoleEditSections.DISPLAY)
  }, [_]), null != _) ? (0, a.jsx)(m.default, {
    editRoleId: _,
    setEditRoleId: R,
    selectedSection: x,
    setSelectedSection: L
  }) : I ? (0, a.jsx)(g.default, {
    setEditRoleId: R,
    guild: s,
    everyoneRole: d,
    otherRoles: E,
    setSelectedSection: L,
    refToScroller: t
  }) : (0, a.jsx)(N.default, {
    guild: s,
    everyoneRole: d,
    setEditRoleId: R
  })
}