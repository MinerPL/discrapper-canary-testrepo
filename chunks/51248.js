n.d(t, {
  Z: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var a = n(215569),
  i = n(481060),
  r = n(852860),
  l = n(236413),
  o = n(727072),
  c = n(65912),
  d = n(689938),
  u = n(617509);

function _(e) {
  let {
guildId: t,
existingRules: n
  } = e, {
cancelEditingRule: _,
isLoading: I,
hasChanges: E,
editingRule: T,
errorMessage: m,
saveEditingRule: N
  } = (0, c.w)(), {
updateRule: S
  } = (0, o.pH)(t), h = null != T, g = h && !(0, l.Vb)(T), C = h || E || g, x = async () => {
if (!E && !g)
  return _();
null != T && !g && S(T);
let e = n.find(e => {
  let {
    id: t
  } = e;
  return t === (null == T ? void 0 : T.id);
});
try {
  let e = await N(n);
  null != e && S(e);
} catch (t) {
  null != e && S(e);
}
  }, p = d.Z.Messages.CANCEL, R = !E && h ? d.Z.Messages.GUILD_AUTOMOD_EDIT_NO_CHANGES.format({
ruleName: null == T ? void 0 : T.name
  }) : void 0;
  return null != m && (R = (0, s.jsx)(i.Text, {
variant: 'text-md/normal',
color: 'text-danger',
className: u.message,
children: m
  })), (0, s.jsx)(a.W, {
component: 'div',
className: u.saveNoticeContainer,
children: C && (0, s.jsx)(i.SlideIn, {
  children: (0, s.jsx)(r.Z, {
    submitting: I,
    disabled: I,
    onSave: x,
    onReset: _,
    onResetText: p,
    message: R
  })
})
  });
}