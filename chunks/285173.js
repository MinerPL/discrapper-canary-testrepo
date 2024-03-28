"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var E = s("735250"),
  _ = s("470079"),
  a = s("481060"),
  n = s("412899"),
  T = s("231338");

function i(e) {
  var t;
  let {
    guildId: s,
    role: i,
    className: u,
    canRemove: A = !1,
    onRemove: l = T.NOOP
  } = e, I = (0, a.useToken)(a.tokens.unsafe_rawColors.PRIMARY_300).hex(), r = null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : I, o = _.useMemo(() => ({
    backgroundColor: "".concat(r, "27")
  }), [r]);
  return null == i ? null : (0, E.jsx)(a.Clickable, {
    children: (0, E.jsx)(n.MemberRole, {
      className: u,
      style: o,
      role: i,
      guildId: s,
      canRemove: A,
      onRemove: l
    })
  })
}