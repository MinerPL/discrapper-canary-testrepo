"use strict";
t.r(n), t.d(n, {
  default: function() {
    return v
  }
});
var l = t("735250");
t("470079");
var a = t("120356"),
  r = t.n(a),
  u = t("481060"),
  s = t("239091"),
  o = t("596454"),
  i = t("911969"),
  d = t("441957"),
  c = t("572004"),
  m = t("49012"),
  p = t("970184"),
  f = t("280501"),
  C = t("689938"),
  S = t("363886");

function E(e) {
  let {
    url: n,
    onSelect: t
  } = e;
  return c.SUPPORTS_COPY && null != n ? (0, l.jsx)(u.Menu, {
    navId: "component-button",
    onClose: s.closeContextMenu,
    "aria-label": C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: t,
    children: (0, l.jsx)(u.MenuGroup, {
      children: (0, l.jsx)(u.MenuItem, {
        id: "copy",
        label: C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, c.copy)(n)
      })
    })
  }) : null
}

function v(e) {
  let n;
  let {
    label: t,
    style: a,
    disabled: c,
    emoji: C,
    url: v
  } = e, {
    executeStateUpdate: N,
    visualState: h,
    isDisabled: T
  } = (0, p.useComponentState)(e), g = null != t && t.length > 0, x = a === i.ButtonStyle.LINK && null != v && v.length > 0, y = h === f.ActionComponentState.LOADING;
  return n = x ? () => {
    (0, m.handleClick)({
      href: null != v ? v : "",
      shouldConfirm: !0
    })
  } : () => N(), (0, l.jsxs)(u.Button, {
    color: function(e) {
      switch (e) {
        case i.ButtonStyle.PRIMARY:
          return u.Button.Colors.BRAND;
        case i.ButtonStyle.SUCCESS:
          return u.Button.Colors.GREEN;
        case i.ButtonStyle.DESTRUCTIVE:
          return u.Button.Colors.RED;
        default:
          return u.Button.Colors.PRIMARY
      }
    }(a),
    size: u.Button.Sizes.SMALL,
    disabled: c || h === f.ActionComponentState.DISABLED || T,
    onClick: n,
    onContextMenu: e => {
      x && (0, s.openContextMenu)(e, e => (0, l.jsx)(E, {
        ...e,
        url: v
      }))
    },
    role: x ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: r()(S.content, {
        [S.hidden]: y
      }),
      "aria-hidden": y,
      children: [null != C ? (0, l.jsx)(o.default, {
        className: r()({
          [S.textEmoji]: g
        }),
        src: C.src,
        emojiId: C.id,
        emojiName: C.name,
        animated: C.animated
      }) : null, g ? (0, l.jsx)("div", {
        className: S.label,
        children: t
      }) : null, x ? (0, l.jsx)(d.default, {
        className: S.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), y ? (0, l.jsx)("div", {
      className: S.loading,
      children: (0, l.jsx)(u.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}