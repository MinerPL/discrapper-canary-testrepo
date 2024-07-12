n.d(t, {
  Z: function() {
return N;
  }
}), n(789020), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(904245),
  r = n(257559),
  o = n(541716),
  c = n(893718),
  d = n(314897),
  u = n(323873),
  h = n(430824),
  p = n(496675),
  m = n(585483),
  _ = n(630388),
  f = n(838440),
  E = n(930282),
  C = n(955384),
  g = n(981631),
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
  } = n, m = t.getGuildId(), f = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]), E = t.type === g.d4z.GUILD_ANNOUNCEMENT, T = null != f && f.hasFeature(g.oNc.NEWS), N = E && T, {
editingMessage: S,
editingTextValue: Z,
editingRichValue: A
  } = (0, l.cj)([u.Z], () => ({
editingMessage: u.Z.getEditingMessage(o),
editingTextValue: u.Z.getEditingTextValue(o),
editingRichValue: u.Z.getEditingRichValue(o)
  }), [o]), M = (0, l.e7)([d.default], () => d.default.getId()), b = a.useCallback((e, n, i) => {
let {
  content: a
} = i, l = p.Z.can(g.Plq.MANAGE_MESSAGES, t), o = null != S && null != S.author ? S.author.id : null;
return N && (o === M || l) && null != S && (0, _.yE)(S.flags, g.iLy.CROSSPOSTED) ? r.Z.confirmEdit(e, n, a) : s.Z.editMessage(e, n, {
  content: a
}), Promise.resolve();
  }, [
S,
N,
M,
t
  ]), R = a.useCallback(e => (0, a.createElement)(v, {
...e,
className: I.channelTextArea,
key: c
  }), [c]);
  return null != Z && null != A ? (0, i.jsx)(C.Z, {
ref: void 0,
channel: t,
message: n,
textValue: Z,
richValue: A,
onCancel: s.Z.endEditMessage,
onChange: s.Z.updateEditMessage,
onConfirmDelete: r.Z.confirmDelete,
saveMessage: b,
validateEdit: x,
children: R
  }) : null;
}

function v(e) {
  let {
textValue: t,
richValue: n,
message: l,
channel: s,
onChange: r,
onSubmit: d,
onKeyDown: u
  } = e, [h, p] = a.useState(!0), _ = a.useCallback(() => p(!0), []), f = a.useCallback(() => p(!1), []);
  return a.useEffect(() => (m.S.subscribe(g.CkL.TEXTAREA_FOCUS, _), m.S.subscribe(g.CkL.TEXTAREA_BLUR, f), () => {
m.S.unsubscribe(g.CkL.TEXTAREA_FOCUS, _), m.S.unsubscribe(g.CkL.TEXTAREA_BLUR, f);
  }), [
_,
f
  ]), (0, i.jsx)(c.Z, {
className: I.channelTextArea,
textValue: t,
richValue: n,
channel: s,
type: o.I.EDIT,
onChange: r,
onSubmit: e => {
  let {
    value: t
  } = e;
  return d(t);
},
onKeyDown: u,
focused: h,
onFocus: _,
onBlur: f
  }, l.id);
}

function N(e, t, n) {
  let {
message: a,
channel: l
  } = e;
  return n ? (0, i.jsx)(T, {
channel: l,
message: a
  }) : (0, i.jsx)(E.ZP, {
message: a,
content: t
  });
}