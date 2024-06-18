"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(236413),
  a = t(866894),
  r = t(65912),
  o = t(572456),
  c = t(59192),
  d = t(11265),
  u = t(495892);
s.Z = i.memo(function(e) {
  let {
    rule: s,
    persistEdit: t = !1,
    initWithEdit: E = !1
  } = e, {
    hasChanges: _,
    editingRule: I,
    createNewEditingRule: T,
    setEditingRule: N
  } = (0, r.V)(), {
    isLoading: m
  } = (0, r.w)(), [S] = i.useState(() => !(0, l.Vb)(s)), h = (null == I ? void 0 : I.id) === s.id || t, g = (0, a.U)(null == s ? void 0 : s.id), x = h && null != I ? I : s, C = i.useMemo(() => (0, o.af)(s.name), [null == s ? void 0 : s.name]), R = i.useCallback(() => {
    T(s.guildId, s.triggerType)
  }, [s.guildId, s.triggerType, T]), L = i.useCallback(e => {
    if (!m) N(e, !0)
  }, [m, N]);
  i.useEffect(() => {
    E && N(s, !0)
  }, [E, s, N]);
  let O = i.useCallback(() => {
    h ? !_ && N(null) : _ ? C(() => {
      N(s)
    }) : N(s)
  }, [h, _, C, s, N]);
  return (0, n.jsx)(d.Z, {
    renderHeader: (0, n.jsx)(u.Z, {
      rule: x,
      forceSetup: S && !h && !g,
      triggerType: s.triggerType,
      isEditMode: h,
      isDefaultRule: g,
      onChangeRule: L,
      onSetupRule: R
    }),
    isStuck: h && _,
    isExpanded: h,
    onExpand: O,
    children: h && (0, n.jsx)(c.Z, {
      rule: x,
      isLoading: m,
      onChangeRule: L
    })
  })
})