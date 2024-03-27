"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var a = l("37983"),
  s = l("884691"),
  n = l("414456"),
  o = l.n(n),
  i = l("866227"),
  r = l.n(i),
  d = l("65597"),
  u = l("77078"),
  C = l("781896"),
  c = l("493910"),
  m = l("466818"),
  E = l("178406"),
  f = l("645266"),
  M = l("782340"),
  h = l("615319"),
  _ = l("420434");

function T(e) {
  let {
    guild: t,
    onSubmit: n
  } = e, i = (0, d.useStateFromStores)([E.default], () => E.default.getMembersCountByGuildId(t.id, c.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER), [t.id]), T = (0, d.useStateFromStores)([E.default], () => {
    let e = E.default.getNewMemberTimestamp(t.id);
    return r(e).format("h:mm A")
  }, [t.id]), S = (0, d.useStateFromStores)([E.default], () => E.default.hasDefaultSearchStateByGuildId(t.id), [t.id]), x = s.useCallback(() => {
    (0, f.refreshMemberSafetyTimestamp)(t.id), null == n || n()
  }, [t.id, n]), A = s.useCallback(() => {
    S ? x() : (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("756912").then(l.bind(l, "756912"));
      return t => (0, a.jsx)(e, {
        ...t,
        onConfirm: x
      })
    })
  }, [x, S]), p = new Intl.NumberFormat(M.default.getLocale()).format(i), L = (0, m.useCanAccessInviteCodeFeature)(t.id), H = (0, m.useCanAccessBulkBanningFeature)(t.id), N = s.useMemo(() => 1 + (L ? 1 : 0) + (H ? 1 : 0), [L, H]);
  return 0 === i ? null : (0, a.jsxs)("tr", {
    className: o(_.newMembersNotice),
    onClick: A,
    children: [(0, a.jsx)("td", {
      colSpan: 3,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: M.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
          count: p,
          date: T
        })
      })
    }), (0, a.jsx)("td", {
      colSpan: N
    }), (0, a.jsx)("td", {
      colSpan: 2,
      children: (0, a.jsx)("div", {
        className: o(h.actionCell),
        children: (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.TRANSPARENT,
          look: u.Button.Looks.LINK,
          className: o(_.memberNoticeActionButton),
          children: (0, a.jsxs)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: o(_.memberNoticeAction),
            children: [(0, a.jsx)("div", {
              children: M.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION
            }), (0, a.jsx)(C.default, {
              width: 20,
              height: 20,
              className: o(_.memberNoticeActionIcon)
            })]
          })
        })
      })
    })]
  })
}