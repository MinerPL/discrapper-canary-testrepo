"use strict";
l.r(t), l.d(t, {
  PermissionOverrideType: function() {
    return a
  }
});
var n, a, s = l("735250");
l("470079");
var i = l("803997"),
  r = l.n(i),
  o = l("481060"),
  d = l("263704"),
  u = l("465670"),
  c = l("377087"),
  f = l("689938"),
  m = l("318253");
(n = a || (a = {})).DENY = "DENY", n.PASSTHROUGH = "PASSTHROUGH", n.ALLOW = "ALLOW";
let I = Object.keys(a);

function T(e) {
  let {
    value: t = "PASSTHROUGH",
    onChange: l,
    labelledBy: n,
    disabled: a = !1
  } = e, i = (0, o.useRadioGroup)({
    orientation: "horizontal",
    isDisabled: a,
    labelledBy: n
  });
  return (0, s.jsx)("div", {
    className: r()(m.group, {
      [m.disabled]: a
    }),
    ...i,
    children: I.map(e => (0, s.jsx)(N, {
      type: e,
      isSelected: t === e,
      onSelect: e => {
        t !== e && !a && l(e)
      }
    }, e))
  })
}

function N(e) {
  let t, l, n, {
    type: a,
    onSelect: i,
    isSelected: I
  } = e;
  switch (a) {
    case "DENY":
      n = f.default.Messages.PERMISSION_OVERRIDE_DENY, t = u.default, l = m.deny;
      break;
    case "ALLOW":
      n = f.default.Messages.PERMISSION_OVERRIDE_ALLOW, t = d.default, l = m.allow;
      break;
    default:
      n = f.default.Messages.PERMISSION_OVERRIDE_PASSTHROUGH, t = c.default, l = m.passthrough
  }
  let T = (0, o.useRadioItem)({
    isSelected: I,
    label: n
  });
  return (0, s.jsx)(o.Clickable, {
    className: r()(m.item, l, {
      [m.selected]: I
    }),
    onClick: () => i(a),
    ...T,
    children: (0, s.jsx)(t, {
      width: 16,
      height: 16
    })
  })
}
T.Types = a, t.default = T