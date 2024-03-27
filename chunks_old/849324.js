"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("974667"),
  r = n("446674"),
  u = n("77078"),
  o = n("145079"),
  d = n("87657"),
  c = n("824563"),
  f = n("145131"),
  h = n("158998"),
  m = n("855780");

function p(e) {
  let {
    user: t,
    row: n,
    hideDiscriminator: l,
    comparator: p,
    selected: E,
    checked: g,
    onClick: S,
    onMouseEnter: C,
    "aria-setsize": _,
    "aria-posinset": I
  } = e, T = (0, r.useStateFromStores)([c.default], () => c.default.getStatus(t.id)), v = (0, i.useListItem)(String(t.id));
  return (0, a.jsx)(u.Clickable, {
    id: "user-row-".concat(n),
    className: m.friendWrapper,
    onClick: () => {
      null != S && S(t.id)
    },
    onMouseEnter: () => {
      null != C && C(n)
    },
    ...v,
    role: "option",
    "aria-selected": g,
    "aria-setsize": _,
    "aria-posinset": I,
    children: (0, a.jsxs)(f.default, {
      align: f.default.Align.CENTER,
      className: s(m.friend, {
        [m.friendSelected]: E
      }),
      children: [(0, a.jsx)(d.default, {
        user: t,
        status: T,
        className: m.avatar
      }), (0, a.jsxs)(f.default, {
        className: m.match,
        align: f.default.Align.BASELINE,
        children: [(0, a.jsx)(u.Text, {
          tag: "strong",
          className: m.nickname,
          "aria-hidden": !0,
          variant: "text-md/medium",
          children: null != p && p === t.tag ? h.default.getName(t) : null != p && "" !== p ? p : h.default.getName(t)
        }), (0, a.jsx)(o.default, {
          user: t,
          hideDiscriminator: l,
          className: m.discordTag,
          usernameClass: m.weightMedium,
          discriminatorClass: m.weightMedium,
          forceUsername: !0
        })]
      }), (0, a.jsx)(u.Checkbox, {
        displayOnly: !0,
        size: 22,
        value: g,
        className: m.checkbox
      })]
    })
  })
}