n.d(t, {
  Z: function() {
return v;
  }
}), n(789020), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(904245),
  r = n(257559),
  o = n(541716),
  c = n(893718),
  u = n(314897),
  d = n(323873),
  h = n(430824),
  p = n(496675),
  m = n(585483),
  _ = n(630388),
  f = n(838440),
  E = n(930282),
  g = n(955384),
  C = n(981631),
  I = n(848509);

function x(e) {
  let {
value: t,
channel: n
  } = e;
  return (0, f.v)({
type: o.I.EDIT,
content: t,
channel: n,
restrictMentions: !1,
respectCooldown: !1
  });
}

function T(e) {
  let {
channel: t,
message: n
  } = e, {
id: o
  } = t, {
id: c
  } = n, m = t.getGuildId(), f = (0, s.e7)([h.Z], () => h.Z.getGuild(m), [m]), E = t.type === C.d4z.GUILD_ANNOUNCEMENT, T = null != f && f.hasFeature(C.oNc.NEWS), v = E && T, {
editingMessage: S,
editingTextValue: Z,
editingRichValue: A
  } = (0, s.cj)([d.Z], () => ({
editingMessage: d.Z.getEditingMessage(o),
editingTextValue: d.Z.getEditingTextValue(o),
editingRichValue: d.Z.getEditingRichValue(o)
  }), [o]), M = (0, s.e7)([u.default], () => u.default.getId()), b = a.useCallback((e, n, i) => {
let {
  content: a
} = i, s = p.Z.can(C.Plq.MANAGE_MESSAGES, t), o = null != S && null != S.author ? S.author.id : null;
return v && (o === M || s) && null != S && (0, _.yE)(S.flags, C.iLy.CROSSPOSTED) ? r.Z.confirmEdit(e, n, a) : l.Z.editMessage(e, n, {
  content: a
}), Promise.resolve();
  }, [
S,
v,
M,
t
  ]), R = a.useCallback(e => (0, a.createElement)(N, {
...e,
className: I.channelTextArea,
key: c
  }), [c]);
  return null != Z && null != A ? (0, i.jsx)(g.Z, {
ref: void 0,
channel: t,
message: n,
textValue: Z,
richValue: A,
onCancel: l.Z.endEditMessage,
onChange: l.Z.updateEditMessage,
onConfirmDelete: r.Z.confirmDelete,
saveMessage: b,
validateEdit: x,
children: R
  }) : null;
}

function N(e) {
  let {
textValue: t,
richValue: n,
message: s,
channel: l,
onChange: r,
onSubmit: u,
onKeyDown: d
  } = e, [h, p] = a.useState(!0), _ = a.useCallback(() => p(!0), []), f = a.useCallback(() => p(!1), []);
  return a.useEffect(() => (m.S.subscribe(C.CkL.TEXTAREA_FOCUS, _), m.S.subscribe(C.CkL.TEXTAREA_BLUR, f), () => {
m.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, _), m.S.unsubscribe(C.CkL.TEXTAREA_BLUR, f);
  }), [
_,
f
  ]), (0, i.jsx)(c.Z, {
className: I.channelTextArea,
textValue: t,
richValue: n,
channel: l,
type: o.I.EDIT,
onChange: r,
onSubmit: e => {
  let {
    value: t
  } = e;
  return u(t);
},
onKeyDown: d,
focused: h,
onFocus: _,
onBlur: f
  }, s.id);
}

function v(e, t, n) {
  let {
message: a,
channel: s
  } = e;
  return n ? (0, i.jsx)(T, {
channel: s,
message: a
  }) : (0, i.jsx)(E.ZP, {
message: a,
content: t
  });
}