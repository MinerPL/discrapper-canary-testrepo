"use strict";
n.r(t), n.d(t, {
  BasicChannelRow: function() {
    return f
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("924826"),
  r = n("589440"),
  o = n("481060"),
  u = n("74153"),
  d = n("809164"),
  c = n("784545");

function f(e) {
  var t;
  let {
    id: n,
    className: a,
    innerClassName: f,
    renderIcon: h,
    text: p,
    selected: m,
    trailing: C,
    showUnread: g = !1,
    ...E
  } = e, _ = (0, i.useListItem)(n), S = null !== (t = (0, r.getNodeText)(p)) && void 0 !== t ? t : "";
  return (0, l.jsx)("li", {
    children: (0, l.jsxs)(o.ClickableContainer, {
      ...E,
      buttonProps: {
        ..._,
        id: n,
        role: "button"
      },
      tag: "div",
      "aria-label": S,
      focusProps: {
        offset: {
          top: 1,
          bottom: 1,
          right: 4
        }
      },
      onContextMenu: null != E.onContextMenu ? E.onContextMenu : e => {
        e.stopPropagation()
      },
      className: s()(d.containerDefault, c.wrapper, {
        [c.modeSelected]: m
      }, a),
      children: [g ? (0, l.jsx)("div", {
        className: s()(c.unread, c.unreadImportant)
      }) : null, (0, l.jsx)("div", {
        className: s()([c.link, c.basicChannelRowLink, f]),
        children: (0, l.jsxs)("div", {
          className: u.content,
          children: [(0, l.jsx)("div", {
            className: c.iconContainer,
            children: h(c.icon)
          }), (0, l.jsx)("div", {
            className: c.name,
            "aria-hidden": !0,
            children: p
          }), C]
        })
      })]
    })
  })
}