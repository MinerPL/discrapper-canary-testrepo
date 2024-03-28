"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  u = n("481060"),
  o = n("239091"),
  i = n("596454"),
  r = n("911969"),
  d = n("441957"),
  c = n("572004"),
  m = n("49012"),
  p = n("970184"),
  f = n("280501"),
  E = n("689938"),
  C = n("698349"),
  S = n("858049");

function T(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return c.SUPPORTS_COPY && null != t ? (0, l.jsx)(u.Menu, {
    navId: "component-button",
    onClose: o.closeContextMenu,
    "aria-label": E.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: n,
    children: (0, l.jsx)(u.MenuGroup, {
      children: (0, l.jsx)(u.MenuItem, {
        id: "copy",
        label: E.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, c.copy)(t)
      })
    })
  }) : null
}

function v(e) {
  let t;
  let {
    label: n,
    style: a,
    disabled: c,
    emoji: E,
    url: v
  } = e, {
    executeStateUpdate: N,
    visualState: h,
    isDisabled: _
  } = (0, p.useComponentState)(e), I = null != n && n.length > 0, g = a === r.ButtonStyle.LINK && null != v && v.length > 0, O = h === f.ActionComponentState.LOADING;
  return t = g ? () => {
    (0, m.handleClick)({
      href: null != v ? v : "",
      shouldConfirm: !0
    })
  } : () => N(), (0, l.jsxs)(u.Button, {
    className: C.component,
    color: function(e) {
      switch (e) {
        case r.ButtonStyle.PRIMARY:
          return u.Button.Colors.BRAND;
        case r.ButtonStyle.SUCCESS:
          return u.Button.Colors.GREEN;
        case r.ButtonStyle.DESTRUCTIVE:
          return u.Button.Colors.RED;
        default:
          return u.Button.Colors.PRIMARY
      }
    }(a),
    size: u.Button.Sizes.SMALL,
    disabled: c || h === f.ActionComponentState.DISABLED || _,
    onClick: t,
    onContextMenu: e => {
      g && (0, o.openContextMenu)(e, e => (0, l.jsx)(T, {
        ...e,
        url: v
      }))
    },
    role: g ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: s()(S.content, {
        [S.hidden]: O
      }),
      "aria-hidden": O,
      children: [null != E ? (0, l.jsx)(i.default, {
        className: s()({
          [S.textEmoji]: I
        }),
        src: E.src,
        emojiId: E.id,
        emojiName: E.name,
        animated: E.animated
      }) : null, I ? (0, l.jsx)("div", {
        className: S.label,
        children: n
      }) : null, g ? (0, l.jsx)(d.default, {
        className: S.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), O ? (0, l.jsx)("div", {
      className: S.loading,
      children: (0, l.jsx)(u.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}