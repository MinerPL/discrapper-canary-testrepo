"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  o = l.n(n),
  i = l("913527"),
  r = l.n(i),
  d = l("399606"),
  u = l("481060"),
  C = l("964309"),
  c = l("740900"),
  m = l("241559"),
  E = l("893966"),
  f = l("527379"),
  _ = l("689938"),
  M = l("256194"),
  h = l("427300");

function T(e) {
  let {
    guild: t,
    onSubmit: n
  } = e, i = (0, d.useStateFromStores)([E.default], () => E.default.getMembersCountByGuildId(t.id, c.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER), [t.id]), T = (0, d.useStateFromStores)([E.default], () => {
    let e = E.default.getNewMemberTimestamp(t.id);
    return r()(e).format("h:mm A")
  }, [t.id]), S = (0, d.useStateFromStores)([E.default], () => E.default.hasDefaultSearchStateByGuildId(t.id), [t.id]), x = s.useCallback(() => {
    (0, f.refreshMemberSafetyTimestamp)(t.id), null == n || n()
  }, [t.id, n]), A = s.useCallback(() => {
    S ? x() : (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await l.e("24478").then(l.bind(l, "319481"));
      return t => (0, a.jsx)(e, {
        ...t,
        onConfirm: x
      })
    })
  }, [x, S]), p = new Intl.NumberFormat(_.default.getLocale()).format(i), L = (0, m.useCanAccessInviteCodeFeature)(t.id), g = (0, m.useCanAccessBulkBanningFeature)(t.id), H = s.useMemo(() => 1 + (L ? 1 : 0) + (g ? 1 : 0), [L, g]);
  return 0 === i ? null : (0, a.jsxs)("tr", {
    className: o()(h.newMembersNotice),
    onClick: A,
    children: [(0, a.jsx)("td", {
      colSpan: 3,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: _.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
          count: p,
          date: T
        })
      })
    }), (0, a.jsx)("td", {
      colSpan: H
    }), (0, a.jsx)("td", {
      colSpan: 2,
      children: (0, a.jsx)("div", {
        className: o()(M.actionCell),
        children: (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.TRANSPARENT,
          look: u.Button.Looks.LINK,
          className: o()(h.memberNoticeActionButton),
          children: (0, a.jsxs)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: o()(h.memberNoticeAction),
            children: [(0, a.jsx)("div", {
              children: _.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION
            }), (0, a.jsx)(C.default, {
              width: 20,
              height: 20,
              className: o()(h.memberNoticeActionIcon)
            })]
          })
        })
      })
    })]
  })
}