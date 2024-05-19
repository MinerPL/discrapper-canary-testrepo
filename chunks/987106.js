"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  u = n.n(a),
  i = n("481060"),
  o = n("239091"),
  s = n("596454"),
  r = n("911969"),
  d = n("574399"),
  c = n("441957"),
  p = n("572004"),
  m = n("49012"),
  f = n("970184"),
  S = n("280501"),
  C = n("689938"),
  v = n("580961");

function E(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return p.SUPPORTS_COPY && null != t ? (0, l.jsx)(i.Menu, {
    navId: "component-button",
    onClose: o.closeContextMenu,
    "aria-label": C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: n,
    children: (0, l.jsx)(i.MenuGroup, {
      children: (0, l.jsx)(i.MenuItem, {
        id: "copy",
        label: C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, p.copy)(t)
      })
    })
  }) : null
}

function N(e) {
  let t, n;
  let {
    label: a,
    style: p,
    disabled: C,
    emoji: N,
    url: h,
    sku_id: g
  } = e, {
    executeStateUpdate: T,
    visualState: y,
    isDisabled: I
  } = (0, f.useComponentState)(e), x = null != a && a.length > 0, O = p === r.ButtonStyle.LINK && null != h && h.length > 0, j = y === S.ActionComponentState.LOADING, L = (0, d.useLoadStoreListingDetails)(g);
  return O ? n = () => {
    (0, m.handleClick)({
      href: null != h ? h : "",
      shouldConfirm: !0
    })
  } : null != L ? (n = L, t = v.premium) : n = () => T(), (0, l.jsxs)(i.Button, {
    className: t,
    color: function(e) {
      switch (e) {
        case r.ButtonStyle.PRIMARY:
          return i.Button.Colors.BRAND;
        case r.ButtonStyle.SUCCESS:
          return i.Button.Colors.GREEN;
        case r.ButtonStyle.DESTRUCTIVE:
          return i.Button.Colors.RED;
        default:
          return i.Button.Colors.PRIMARY
      }
    }(p),
    size: i.Button.Sizes.SMALL,
    disabled: C || y === S.ActionComponentState.DISABLED || I || null != g && void 0 === L,
    onClick: n,
    onContextMenu: e => {
      O && (0, o.openContextMenu)(e, e => (0, l.jsx)(E, {
        ...e,
        url: h
      }))
    },
    role: O ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: u()(v.content, {
        [v.hidden]: j
      }),
      "aria-hidden": j,
      children: [null != N ? (0, l.jsx)(s.default, {
        className: u()({
          [v.textEmoji]: x
        }),
        src: N.src,
        emojiId: N.id,
        emojiName: N.name,
        animated: N.animated
      }) : null, x ? (0, l.jsx)("div", {
        className: v.label,
        children: a
      }) : null, O ? (0, l.jsx)(c.default, {
        className: v.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), j ? (0, l.jsx)("div", {
      className: v.loading,
      children: (0, l.jsx)(i.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}