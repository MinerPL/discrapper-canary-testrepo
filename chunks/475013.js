"use strict";
t.d(s, {
  Z: function() {
    return O
  },
  _: function() {
    return L
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(442837),
  o = t(749210),
  c = t(852860),
  d = t(605436),
  u = t(650774),
  E = t(823379),
  _ = t(434404),
  I = t(764260),
  T = t(946724),
  N = t(999382),
  m = t(130341),
  S = t(853813),
  h = t(163249),
  g = t(150689),
  x = t(203377),
  C = t(981631);

function R(e) {
  _.Z.selectRole(e)
}
let L = () => {
  let {
    guild: e
  } = (0, r.cj)([N.Z], () => N.Z.getProps()), s = (0, r.e7)([T.Z], () => T.Z.formState), t = (0, r.e7)([T.Z], () => T.Z.errorMessage);
  return (0, n.jsx)(c.Z, {
    errorMessage: t,
    onSave: () => {
      if (null == e) return;
      let {
        id: s
      } = e, t = T.Z.editedRoleIds.map(e => T.Z.getRole(e)).filter(E.lm), n = T.Z.getSortDeltas(), i = null, l = null;
      T.Z.hasRoleConfigurationChanges && (l = T.Z.editedRoleIdsForConfigurations, i = T.Z.getEditedRoleConnectionConfigurationsMap()), (0, I.Gf)(s, t, n, l, i)
    },
    submitting: s === C.QZA.SUBMITTING,
    onReset: I.S1
  })
};

function O(e) {
  let {
    refToScroller: s
  } = e, {
    guild: t,
    roles: l
  } = (0, r.cj)([T.Z], () => ({
    guild: T.Z.guild,
    roles: T.Z.roles
  }), []);
  a()(null != t, "Guild cannot be null here");
  let c = i.useMemo(() => l.find(e => (0, d.pM)(t.id, e.id)), [l, t]);
  a()(null != c, "Guild must have an everyone role");
  let E = i.useMemo(() => l.filter(e => !(0, d.pM)(t.id, e.id)), [l, t]),
    _ = (0, r.e7)([N.Z], () => N.Z.getSelectedRoleId()),
    [I, C] = i.useState(E.length > 0);
  i.useEffect(() => {
    C(I || E.length > 0)
  }, [I, E.length]), i.useEffect(() => {
    let e = u.Z.getMemberCount(t.id);
    null != e && e <= m.cm && o.Z.requestMembers(t.id, "", 0, !1)
  }, []);
  let [L, O] = i.useState(x.ZI.DISPLAY);
  return (i.useEffect(() => {
    null == _ && O(x.ZI.DISPLAY)
  }, [_]), null != _) ? (0, n.jsx)(S.Z, {
    editRoleId: _,
    setEditRoleId: R,
    selectedSection: L,
    setSelectedSection: O
  }) : I ? (0, n.jsx)(g.Z, {
    setEditRoleId: R,
    guild: t,
    everyoneRole: c,
    otherRoles: E,
    setSelectedSection: O,
    refToScroller: s
  }) : (0, n.jsx)(h.Z, {
    guild: t,
    everyoneRole: c,
    setEditRoleId: R
  })
}