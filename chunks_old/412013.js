"use strict";
E.r(t), E.d(t, {
  default: function() {
    return A
  }
});
var _ = E("37983"),
  s = E("884691"),
  T = E("77078"),
  a = E("581583"),
  n = E("843455");

function A(e) {
  var t;
  let {
    guildId: E,
    role: A,
    className: u,
    canRemove: I = !1,
    onRemove: i = n.NOOP
  } = e, l = (0, T.useToken)(T.tokens.unsafe_rawColors.PRIMARY_300).hex(), L = null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : l, o = s.useMemo(() => ({
    backgroundColor: "".concat(L, "27")
  }), [L]);
  return null == A ? null : (0, _.jsx)(T.Clickable, {
    children: (0, _.jsx)(a.MemberRole, {
      className: u,
      style: o,
      role: A,
      guildId: E,
      canRemove: I,
      onRemove: i
    })
  })
}