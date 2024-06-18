"use strict";
n.d(t, {
  Z: function() {
    return R
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(442837),
  _ = n(481060),
  d = n(493683),
  c = n(37234),
  E = n(904245),
  I = n(541716),
  T = n(957730),
  h = n(592125),
  S = n(699516),
  f = n(51144),
  N = n(838440),
  A = n(981631),
  m = n(689938),
  O = n(760);

function R(e) {
  let {
    user: t,
    autoFocus: n = !1,
    className: s,
    inputClassName: a,
    onSend: R
  } = e, C = r.useRef(null), p = (0, u.e7)([S.Z], () => S.Z.isBlocked(t.id)), g = r.useCallback(e => {
    if ("Enter" === e.key) {
      e.preventDefault(), l()(null != C.current, "Keypress on Input when not mounted");
      let n = C.current.value.trim();
      return (0, N.v)({
        type: I.I.NORMAL,
        content: n,
        channel: null
      }).then(e => {
        let {
          valid: i
        } = e;
        if (!!i) d.Z.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
          let t = h.Z.getChannel(e);
          l()(null != t, "Newly created PrivateChannel is null"), E.Z.sendMessage(t.id, T.ZP.parse(t, n)), (0, c.xf)()
        }), null == R || R()
      }), !0
    }
    e.which === A.yXg.SPACE && e.stopPropagation()
  }, [t, R]), L = p ? m.Z.Messages.QUICK_DM_BLOCKED : m.Z.Messages.QUICK_DM_USER.format({
    name: f.ZP.getName(t)
  });
  return (0, i.jsx)(_.TextInput, {
    className: s,
    inputClassName: o()(a, O.input),
    inputRef: C,
    autoFocus: n,
    placeholder: L,
    "aria-label": L,
    onKeyPress: g,
    disabled: p
  })
}