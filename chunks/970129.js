"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  },
  useLockTooltip: function() {
    return u
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("496675"),
  o = s("630641"),
  d = s("689938");

function u(e, t, s) {
  let a = (0, n.useStateFromStores)([r.default], () => !r.default.isRoleHigher(e, t, s), [e, t, s]);
  return l.useMemo(() => a && s.id === (null == t ? void 0 : t.id), [a, s, t]) ? d.default.Messages.HELP_ROLE_LOCKED_MINE : a ? d.default.Messages.HELP_ROLE_LOCKED : null
}

function c(e) {
  let {
    className: t,
    tooltipText: s,
    width: l = 16,
    height: n = 16
  } = e;
  return (0, a.jsx)(i.Tooltip, {
    text: s,
    children: e => (0, a.jsx)("div", {
      className: t,
      ...e,
      children: (0, a.jsx)(o.default, {
        width: l,
        height: n
      })
    })
  })
}