"use strict";
A.r(t), A.d(t, {
  default: function() {
    return h
  }
});
var a = A("735250");
A("470079");
var l = A("512722"),
  s = A.n(l),
  n = A("866442"),
  r = A("481060"),
  i = A("703685"),
  o = A("682864"),
  d = A("153124"),
  u = A("214623"),
  c = A("981631"),
  f = A("689938"),
  g = A("417554");
let C = (0, d.uid)();

function h(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: A
  } = e, {
    name: l,
    color: d
  } = t, h = e => A(t => (s()(null != t, "newRoleParams should be defined"), {
    ...t,
    color: e
  }));
  return (0, a.jsxs)("div", {
    className: g.roleInputContainer,
    children: [(0, a.jsx)(r.TextInput, {
      autoFocus: !0,
      value: l,
      onChange: e => A(t => (s()(null != t, "newRoleParams should be defined"), {
        ...t,
        name: e
      })),
      id: C,
      placeholder: f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
      maxLength: c.ROLE_NAME_MAX_LENGTH,
      inputClassName: g.input
    }), (0, a.jsxs)("div", {
      className: g.roleColorContainer,
      children: [(0, a.jsx)(r.HiddenVisually, {
        children: f.default.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
          color: (0, n.int2hex)(d)
        })
      }), (0, a.jsx)("div", {
        className: g.roleColorPreview,
        style: {
          backgroundColor: (0, n.int2hex)(d)
        }
      }), (0, a.jsx)(o.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsx)(r.Popout, {
        renderPopout: e => (0, a.jsx)(i.CustomColorPicker, {
          ...e,
          value: d,
          onChange: h
        }),
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          tag: "span",
          "aria-label": f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
          className: g.dropperIconContainer,
          children: (0, a.jsx)(u.default, {
            width: 16,
            height: 16,
            className: g.dropperIcon
          })
        })
      })]
    })]
  })
}