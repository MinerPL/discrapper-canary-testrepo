"use strict";
n.r(t), n.d(t, {
  USER_MOD_ICON_SIZE_PX: function() {
    return u
  },
  UserModInfoItem: function() {
    return d
  },
  UserModInfoItemContainer: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("554419"),
  r = n("481060"),
  o = n("681532");
let u = 16;

function d(e) {
  let {
    description: t,
    name: n,
    icon: l,
    onNavigate: d,
    className: c,
    missingNavIcon: f
  } = e;
  return (0, a.jsxs)(r.Clickable, {
    onClick: d,
    className: s()(o.modInfoItem, null != d && o.modInfoAction, c),
    children: [null != l && (0, a.jsx)("div", {
      className: s()(o.modInfoItemIcon),
      children: l
    }), null != n && (0, a.jsx)("div", {
      className: s()(o.modInfoItemName),
      children: n
    }), (0, a.jsx)("div", {
      className: s()(o.modInfoItemDescription),
      children: t
    }), null != d && (0, a.jsx)("div", {
      className: s()(o.modInfoItemActionIcon),
      children: (0, a.jsx)(i.ChevronLargeRightIcon, {
        width: u,
        height: u
      })
    }), null == d && null != f && (0, a.jsx)("div", {
      className: s()(o.modInfoItemActionIcon),
      children: f
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: s()(o.modInfoItemContainer),
    children: t
  })
}