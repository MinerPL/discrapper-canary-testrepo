"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var r = n("446674"),
  a = n("77078"),
  l = n("180748"),
  s = n("206230"),
  i = n("782340");

function o() {
  let {
    saturation: e,
    useReducedMotion: t,
    roleStyle: n
  } = (0, r.useStateFromStoresObject)([s.default], () => ({
    saturation: s.default.saturation,
    useReducedMotion: s.default.useReducedMotion,
    roleStyle: s.default.roleStyle
  })), o = [{
    name: i.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
    value: "username"
  }, {
    name: i.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
    value: "dot"
  }, {
    name: i.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
    value: "hidden"
  }];
  return [(0, u.jsx)(a.MenuGroup, {
    children: (0, u.jsx)(a.MenuCheckboxItem, {
      id: "reduced-motion",
      label: i.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE,
      checked: t,
      action: () => (0, l.setPrefersReducedMotion)(t ? "no-preference" : "reduce")
    })
  }, "reduced-motion"), (0, u.jsx)(a.MenuGroup, {
    children: (0, u.jsx)(a.MenuControlItem, {
      id: "input",
      label: i.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
      control: (t, n) => (0, u.jsx)(a.MenuSliderControl, {
        ...t,
        ref: n,
        value: 100 * e,
        onChange: e => (0, l.setSaturation)(e / 100),
        "aria-label": i.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
      })
    })
  }, "input"), (0, u.jsx)(a.MenuGroup, {
    children: (0, u.jsx)(a.MenuItem, {
      id: "role-colors",
      label: i.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      children: o.map(e => {
        let {
          name: t,
          value: r
        } = e;
        return (0, u.jsx)(a.MenuRadioItem, {
          id: r,
          group: "role-colors",
          checked: r === n,
          label: t,
          action: () => (0, l.setRoleStyle)(r)
        }, r)
      })
    })
  }, "role-colors")]
}