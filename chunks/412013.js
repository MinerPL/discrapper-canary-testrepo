"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("77078"),
  s = n("581583"),
  o = n("843455");

function u(e) {
  var t;
  let {
    guildId: n,
    role: u,
    className: a
  } = e, c = (0, r.useToken)(r.tokens.unsafe_rawColors.PRIMARY_300).hex(), d = null !== (t = null == u ? void 0 : u.colorString) && void 0 !== t ? t : c, f = i.useMemo(() => ({
    backgroundColor: "".concat(d, "27")
  }), [d]);
  return null == u ? null : (0, l.jsx)(s.MemberRole, {
    className: a,
    style: f,
    role: u,
    guildId: n,
    canRemove: !1,
    onRemove: o.NOOP
  })
}