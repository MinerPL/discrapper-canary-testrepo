"use strict";
n.r(t), n.d(t, {
  isContentGroup: function() {
    return _
  },
  default: function() {
    return I
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("384737"),
  r = n("748802"),
  u = n("260792"),
  o = n("77078"),
  d = n("272030"),
  c = n("826684"),
  f = n("650509"),
  h = n("265596"),
  m = n("17"),
  p = n("447313"),
  E = n("49111"),
  g = n("782340"),
  S = n("611800"),
  C = n("559571");

function _(e) {
  return (null == e ? void 0 : e.id) === p.MEMBER_LIST_CONTENT_GROUP_ID
}
var I = l.memo(function(e) {
  let t, {
      title: p,
      onToggleExpand: _,
      expanded: I,
      expandedCount: T
    } = e,
    v = (0, s.useStateFromStores)([h.default], () => h.default.hidden),
    x = l.useCallback(e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          MemberListContentSettingsMenu: e
        } = await n.el("17").then(n.bind(n, "17"));
        return () => (0, a.jsx)(e, {
          closePopout: d.closeContextMenu
        })
      })
    }, []);
  return (0, a.jsxs)(c.default, {
    className: C.membersGroup,
    children: [(0, a.jsx)(o.HiddenVisually, {
      children: g.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: p,
        count: T
      })
    }), (0, a.jsxs)(o.Clickable, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return v ? (0, f.toggleMemberListContentFeedHidden)() : T > 3 ? _() : (0, E.NOOP)()
      },
      onContextMenu: x,
      tag: "span",
      "aria-hidden": !0,
      className: S.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: S.header,
        children: [(0, a.jsxs)("span", {
          children: [p, " — ", T]
        }), (0, a.jsx)(m.default, {})]
      }), T <= 3 && !v ? null : (t = v ? (0, a.jsx)(u.ChevronSmallUpIcon, {
        className: S.toggleExpandIcon
      }) : I ? (0, a.jsx)(i.ChevronSmallDownIcon, {
        className: S.toggleExpandIcon
      }) : (0, a.jsx)(r.ChevronSmallRightIcon, {
        className: S.toggleExpandIcon
      }), (0, a.jsx)(o.FocusRing, {
        children: (0, a.jsx)("div", {
          tabIndex: 0,
          className: S.toggleExpandIcon,
          children: t
        })
      }))]
    })]
  })
})