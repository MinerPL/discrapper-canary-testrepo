"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("924826"),
  r = n("442837"),
  o = n("481060"),
  u = n("129861"),
  d = n("700582"),
  c = n("158776"),
  f = n("285952"),
  h = n("51144"),
  m = n("137788");

function p(e) {
  let {
    user: t,
    row: n,
    hideDiscriminator: l,
    comparator: p,
    selected: E,
    checked: C,
    onClick: g,
    onMouseEnter: S,
    "aria-setsize": _,
    "aria-posinset": T
  } = e, I = (0, r.useStateFromStores)([c.default], () => c.default.getStatus(t.id)), A = (0, i.useListItem)(String(t.id));
  return (0, a.jsx)(o.Clickable, {
    id: "user-row-".concat(n),
    className: m.friendWrapper,
    onClick: () => {
      null != g && g(t.id)
    },
    onMouseEnter: () => {
      null != S && S(n)
    },
    ...A,
    role: "option",
    "aria-selected": C,
    "aria-setsize": _,
    "aria-posinset": T,
    children: (0, a.jsxs)(f.default, {
      align: f.default.Align.CENTER,
      className: s()(m.friend, {
        [m.friendSelected]: E
      }),
      children: [(0, a.jsx)(d.default, {
        user: t,
        status: I,
        className: m.avatar
      }), (0, a.jsxs)(f.default, {
        className: m.match,
        align: f.default.Align.BASELINE,
        children: [(0, a.jsx)(o.Text, {
          tag: "strong",
          className: m.nickname,
          "aria-hidden": !0,
          variant: "text-md/medium",
          children: null != p && p === t.tag ? h.default.getName(t) : null != p && "" !== p ? p : h.default.getName(t)
        }), (0, a.jsx)(u.default, {
          user: t,
          hideDiscriminator: l,
          className: m.discordTag,
          usernameClass: m.__invalid_weightMedium,
          discriminatorClass: m.__invalid_weightMedium,
          forceUsername: !0
        })]
      }), (0, a.jsx)(o.Checkbox, {
        displayOnly: !0,
        size: 22,
        value: C,
        className: m.checkbox
      })]
    })
  })
}