"use strict";
s.r(t), s.d(t, {
  GuildSettingsRolesNotice: function() {
    return x
  },
  default: function() {
    return L
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("627445"),
  i = s.n(n),
  r = s("446674"),
  o = s("851387"),
  d = s("45299"),
  u = s("454273"),
  c = s("525065"),
  E = s("449008"),
  _ = s("592407"),
  I = s("766419"),
  T = s("531493"),
  S = s("900938"),
  f = s("986654"),
  m = s("482763"),
  N = s("620296"),
  g = s("500053"),
  h = s("53948"),
  C = s("49111");

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
  i(null != s, "Guild cannot be null here");
  let d = l.useMemo(() => n.find(e => (0, u.isEveryoneRoleId)(s.id, e.id)), [n, s]);
  i(null != d, "Guild must have an everyone role");
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