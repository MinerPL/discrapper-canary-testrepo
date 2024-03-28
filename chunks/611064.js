"use strict";
n.r(t), n.d(t, {
  isContentGroup: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("531057"),
  r = n("465270"),
  o = n("865824"),
  u = n("481060"),
  d = n("239091"),
  c = n("151827"),
  f = n("485267"),
  h = n("146282"),
  m = n("703180"),
  p = n("809017"),
  E = n("981631"),
  C = n("689938"),
  g = n("970978"),
  S = n("652985");

function _(e) {
  return (null == e ? void 0 : e.id) === p.MEMBER_LIST_CONTENT_GROUP_ID
}
t.default = l.memo(function(e) {
  let t, {
      title: p,
      onToggleExpand: _,
      expanded: T,
      expandedCount: I
    } = e,
    A = (0, s.useStateFromStores)([h.default], () => h.default.hidden),
    v = l.useCallback(e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          MemberListContentSettingsMenu: e
        } = await Promise.resolve().then(n.bind(n, "703180"));
        return () => (0, a.jsx)(e, {
          closePopout: d.closeContextMenu
        })
      })
    }, []);
  return (0, a.jsxs)(c.default, {
    className: S.membersGroup,
    children: [(0, a.jsx)(u.HiddenVisually, {
      children: C.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: p,
        count: I
      })
    }), (0, a.jsxs)(u.Clickable, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return A ? (0, f.toggleMemberListContentFeedHidden)() : I > 3 ? _() : (0, E.NOOP)()
      },
      onContextMenu: v,
      tag: "span",
      "aria-hidden": !0,
      className: g.headerContainer,
      children: [(0, a.jsxs)("div", {
        className: g.header,
        children: [(0, a.jsxs)("span", {
          children: [p, " — ", I]
        }), (0, a.jsx)(m.default, {})]
      }), I <= 3 && !A ? null : (t = A ? (0, a.jsx)(o.ChevronSmallUpIcon, {
        className: g.toggleExpandIcon
      }) : T ? (0, a.jsx)(i.ChevronSmallDownIcon, {
        className: g.toggleExpandIcon
      }) : (0, a.jsx)(r.ChevronSmallRightIcon, {
        className: g.toggleExpandIcon
      }), (0, a.jsx)(u.FocusRing, {
        children: (0, a.jsx)("div", {
          tabIndex: 0,
          className: g.toggleExpandIcon,
          children: t
        })
      }))]
    })]
  })
})