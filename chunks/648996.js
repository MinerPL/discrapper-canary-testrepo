n.d(t, {
  Z: function() {
return N;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(512722),
  l = n.n(o),
  u = n(442837),
  c = n(481060),
  d = n(493683),
  _ = n(37234),
  E = n(904245),
  f = n(541716),
  h = n(957730),
  p = n(592125),
  m = n(699516),
  I = n(51144),
  T = n(838440),
  g = n(981631),
  S = n(689938),
  A = n(578837);

function N(e) {
  let {
user: t,
autoFocus: n = !1,
className: a,
inputClassName: o,
onSend: N
  } = e, v = i.useRef(null), O = (0, u.e7)([m.Z], () => m.Z.isBlocked(t.id)), R = i.useCallback(e => {
if ('Enter' === e.key) {
  e.preventDefault(), l()(null != v.current, 'Keypress on Input when not mounted');
  let n = v.current.value.trim();
  return (0, T.v)({
    type: f.I.NORMAL,
    content: n,
    channel: null
  }).then(e => {
    let {
      valid: r
    } = e;
    if (!!r)
      d.Z.openPrivateChannel(t.id, !1, !1, 'Quick Message Input').then(e => {
        let t = p.Z.getChannel(e);
        l()(null != t, 'Newly created PrivateChannel is null'), E.Z.sendMessage(t.id, h.ZP.parse(t, n)), (0, _.xf)();
      }), null == N || N();
  }), !0;
}
e.which === g.yXg.SPACE && e.stopPropagation();
  }, [
t,
N
  ]), C = O ? S.Z.Messages.QUICK_DM_BLOCKED : S.Z.Messages.QUICK_DM_USER.format({
name: I.ZP.getName(t)
  });
  return (0, r.jsx)(c.TextInput, {
className: a,
inputClassName: s()(o, A.input),
inputRef: v,
autoFocus: n,
placeholder: C,
'aria-label': C,
onKeyPress: R,
disabled: O
  });
}