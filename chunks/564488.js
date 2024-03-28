"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("236413"),
  i = s("866894"),
  r = s("65912"),
  o = s("572456"),
  d = s("59192"),
  u = s("11265"),
  c = s("495892");
t.default = l.memo(function(e) {
  let {
    rule: t,
    persistEdit: s = !1,
    initWithEdit: E = !1
  } = e, {
    hasChanges: _,
    editingRule: I,
    createNewEditingRule: T,
    setEditingRule: S
  } = (0, r.useAutomodEditingRuleState)(), {
    isLoading: f
  } = (0, r.useAutomodEditingRuleActions)(), [m] = l.useState(() => !(0, n.isBackendPersistedRule)(t)), N = (null == I ? void 0 : I.id) === t.id || s, g = (0, i.isDefaultRuleId)(null == t ? void 0 : t.id), h = N && null != I ? I : t, C = l.useMemo(() => (0, o.createOnPreventNavigation)(t.name), [null == t ? void 0 : t.name]), R = l.useCallback(() => {
    T(t.guildId, t.triggerType)
  }, [t.guildId, t.triggerType, T]), x = l.useCallback(e => {
    !f && S(e, !0)
  }, [f, S]);
  l.useEffect(() => {
    E && S(t, !0)
  }, [E, t, S]);
  let L = l.useCallback(() => {
    N ? !_ && S(null) : _ ? C(() => {
      S(t)
    }) : S(t)
  }, [N, _, C, t, S]);
  return (0, a.jsx)(u.default, {
    renderHeader: (0, a.jsx)(c.default, {
      rule: h,
      forceSetup: m && !N && !g,
      triggerType: t.triggerType,
      isEditMode: N,
      isDefaultRule: g,
      onChangeRule: x,
      onSetupRule: R
    }),
    isStuck: N && _,
    isExpanded: N,
    onExpand: L,
    children: N && (0, a.jsx)(d.default, {
      rule: h,
      isLoading: f,
      onChangeRule: x
    })
  })
})