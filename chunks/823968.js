"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("482402"),
  l = s("335710"),
  r = s("77078"),
  i = s("339792"),
  o = s("867965"),
  u = s("782340"),
  d = s("517178");

function c(e) {
  let {
    channel: t,
    closePopout: s
  } = e, {
    sortOrder: c,
    layoutType: m
  } = (0, i.useForumChannelStore)(t.id), h = (0, i.useForumChannelStoreApi)(), f = t.isMediaChannel(), g = e => {
    (0, o.trackForumSortOrderUpdated)({
      guildId: t.guild_id,
      channelId: t.id,
      sortOrder: e
    }), h.getState().setSortOrder(t.id, e), s()
  }, x = e => {
    (0, o.trackForumLayoutUpdated)({
      guildId: t.guild_id,
      channelId: t.id,
      forumLayout: e
    }), h.getState().setLayoutType(t.id, e), s()
  };
  return (0, a.jsx)("div", {
    className: d.container,
    children: (0, a.jsxs)(r.Menu, {
      navId: "sort-and-view",
      "aria-label": f ? u.default.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : u.default.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
      hideScroller: !0,
      onClose: s,
      onSelect: s,
      children: [(0, a.jsxs)(r.MenuGroup, {
        label: u.default.Messages.FORUM_CHANNEL_SORT_BY,
        children: [(0, a.jsx)(r.MenuRadioItem, {
          id: "sort-by-recent-activity",
          group: "sort-by",
          label: u.default.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
          action: () => g(l.ThreadSortOrder.LATEST_ACTIVITY),
          checked: c === l.ThreadSortOrder.LATEST_ACTIVITY
        }), (0, a.jsx)(r.MenuRadioItem, {
          id: "sort-by-date-posted",
          group: "sort-by",
          label: u.default.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
          action: () => g(l.ThreadSortOrder.CREATION_DATE),
          checked: c === l.ThreadSortOrder.CREATION_DATE
        })]
      }), !t.isMediaChannel() && (0, a.jsxs)(r.MenuGroup, {
        label: u.default.Messages.FORUM_CHANNEL_VIEW_AS,
        children: [(0, a.jsx)(r.MenuRadioItem, {
          id: "view-as-list",
          group: "view-as",
          label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
          action: () => x(n.ForumLayout.LIST),
          checked: m === n.ForumLayout.LIST
        }), (0, a.jsx)(r.MenuRadioItem, {
          id: "view-as-grid",
          group: "view-as",
          label: u.default.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
          action: () => x(n.ForumLayout.GRID),
          checked: m === n.ForumLayout.GRID
        })]
      }), (0, a.jsx)(r.MenuGroup, {
        children: (0, a.jsx)(r.MenuItem, {
          id: "reset-all",
          className: d.clearText,
          label: (0, a.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: u.default.Messages.FORUM_CHANNEL_RESET_ALL
          }),
          action: () => {
            g(t.getDefaultSortOrder()), x(t.getDefaultLayout())
          }
        })
      })]
    })
  })
}