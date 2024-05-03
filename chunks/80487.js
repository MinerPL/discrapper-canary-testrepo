"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("481060"),
  i = s("984370"),
  n = s("669405"),
  r = s("246364"),
  u = s("689938"),
  d = s("846777");
t.default = function(e) {
  let {
    pendingGuildJoinRequestsTotal: t,
    currentTab: s,
    onTabItemSelect: o,
    showSetupTab: c
  } = e;
  return (0, a.jsxs)(i.default, {
    className: d.__invalid_container,
    hideSearch: !0,
    toolbar: (0, a.jsx)("div", {}),
    children: [(0, a.jsx)(i.default.Icon, {
      icon: n.default,
      disabled: !0,
      "aria-label": u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
    }), (0, a.jsx)(i.default.Title, {
      className: d.title,
      children: u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
    }), (0, a.jsx)(i.default.Divider, {
      className: d.divider
    }), (0, a.jsxs)(l.TabBar, {
      "aria-label": u.default.Messages.FRIENDS,
      selectedItem: s,
      type: "top-pill",
      onItemSelect: o,
      className: d.__invalid_tabBar,
      children: [c ? (0, a.jsx)(l.TabBar.Item, {
        id: "REVIEW_APPLICATION",
        children: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE
      }) : null, (0, a.jsx)(l.TabBar.Item, {
        id: r.GuildJoinRequestApplicationStatuses.SUBMITTED,
        children: 0 === t ? u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({
          count: t
        })
      }), (0, a.jsx)(l.TabBar.Item, {
        id: r.GuildJoinRequestApplicationStatuses.APPROVED,
        children: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
      }), (0, a.jsx)(l.TabBar.Item, {
        id: r.GuildJoinRequestApplicationStatuses.REJECTED,
        children: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
      })]
    })]
  })
}