"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("481060"),
  i = s("984370"),
  n = s("669405"),
  u = s("246364"),
  r = s("689938"),
  o = s("98539");
t.default = function(e) {
  let {
    pendingGuildJoinRequestsTotal: t,
    currentTab: s,
    onTabItemSelect: d,
    showSetupTab: c
  } = e;
  return (0, a.jsxs)(i.default, {
    className: o.__invalid_container,
    hideSearch: !0,
    toolbar: (0, a.jsx)("div", {}),
    children: [(0, a.jsx)(i.default.Icon, {
      icon: n.default,
      disabled: !0,
      "aria-label": r.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
    }), (0, a.jsx)(i.default.Title, {
      className: o.title,
      children: r.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
    }), (0, a.jsx)(i.default.Divider, {
      className: o.divider
    }), (0, a.jsxs)(l.TabBar, {
      "aria-label": r.default.Messages.FRIENDS,
      selectedItem: s,
      type: "top-pill",
      onItemSelect: d,
      className: o.__invalid_tabBar,
      children: [c ? (0, a.jsx)(l.TabBar.Item, {
        id: "REVIEW_APPLICATION",
        children: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE
      }) : null, (0, a.jsx)(l.TabBar.Item, {
        id: u.GuildJoinRequestApplicationStatuses.SUBMITTED,
        children: 0 === t ? r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({
          count: t
        })
      }), (0, a.jsx)(l.TabBar.Item, {
        id: u.GuildJoinRequestApplicationStatuses.APPROVED,
        children: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
      }), (0, a.jsx)(l.TabBar.Item, {
        id: u.GuildJoinRequestApplicationStatuses.REJECTED,
        children: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
      })]
    })]
  })
}