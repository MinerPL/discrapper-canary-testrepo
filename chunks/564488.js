n(47120);
var s = n(735250),
  a = n(470079),
  i = n(236413),
  r = n(866894),
  l = n(65912),
  o = n(572456),
  c = n(59192),
  d = n(11265),
  u = n(495892);
t.Z = a.memo(function(e) {
  let {
rule: t,
persistEdit: n = !1,
initWithEdit: _ = !1
  } = e, {
hasChanges: I,
editingRule: E,
createNewEditingRule: T,
setEditingRule: m
  } = (0, l.V)(), {
isLoading: N
  } = (0, l.w)(), [S] = a.useState(() => !(0, i.Vb)(t)), h = (null == E ? void 0 : E.id) === t.id || n, g = (0, r.U)(null == t ? void 0 : t.id), C = h && null != E ? E : t, x = a.useMemo(() => (0, o.af)(t.name), [null == t ? void 0 : t.name]), p = a.useCallback(() => {
T(t.guildId, t.triggerType);
  }, [
t.guildId,
t.triggerType,
T
  ]), R = a.useCallback(e => {
if (!N)
  m(e, !0);
  }, [
N,
m
  ]);
  a.useEffect(() => {
_ && m(t, !0);
  }, [
_,
t,
m
  ]);
  let f = a.useCallback(() => {
h ? !I && m(null) : I ? x(() => {
  m(t);
}) : m(t);
  }, [
h,
I,
x,
t,
m
  ]);
  return (0, s.jsx)(d.Z, {
renderHeader: (0, s.jsx)(u.Z, {
  rule: C,
  forceSetup: S && !h && !g,
  triggerType: t.triggerType,
  isEditMode: h,
  isDefaultRule: g,
  onChangeRule: R,
  onSetupRule: p
}),
isStuck: h && I,
isExpanded: h,
onExpand: f,
children: h && (0, s.jsx)(c.Z, {
  rule: C,
  isLoading: N,
  onChangeRule: R
})
  });
});