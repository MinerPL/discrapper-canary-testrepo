"use strict";
t.d(s, {
  T: function() {
    return d
  },
  Z: function() {
    return u
  }
});
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(496675),
  o = t(630641),
  c = t(689938);

function d(e, s, t) {
  let n = (0, l.e7)([r.Z], () => !r.Z.isRoleHigher(e, s, t), [e, s, t]);
  return i.useMemo(() => n && t.id === (null == s ? void 0 : s.id), [n, t, s]) ? c.Z.Messages.HELP_ROLE_LOCKED_MINE : n ? c.Z.Messages.HELP_ROLE_LOCKED : null
}

function u(e) {
  let {
    className: s,
    tooltipText: t,
    width: i = 16,
    height: l = 16
  } = e;
  return (0, n.jsx)(a.Tooltip, {
    text: t,
    children: e => (0, n.jsx)("div", {
      className: s,
      ...e,
      children: (0, n.jsx)(o.Z, {
        width: i,
        height: l
      })
    })
  })
}