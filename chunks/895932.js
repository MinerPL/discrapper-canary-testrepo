"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var s = a("735250");
a("470079");
var n = a("313361"),
  l = a("683860"),
  r = a("481060"),
  i = a("109434"),
  o = a("228392"),
  d = a("689938"),
  u = a("254830");

function c(e) {
  let {
    channel: t,
    closePopout: a
  } = e, {
    sortOrder: c,
    layoutType: m
  } = (0, i.useForumChannelStore)(t.id), h = (0, i.useForumChannelStoreApi)(), f = t.isMediaChannel(), g = e => {
    (0, o.trackForumSortOrderUpdated)({
      guildId: t.guild_id,
      channelId: t.id,
      sortOrder: e
    }), h.getState().setSortOrder(t.id, e), a()
  }, x = e => {
    (0, o.trackForumLayoutUpdated)({
      guildId: t.guild_id,
      channelId: t.id,
      forumLayout: e
    }), h.getState().setLayoutType(t.id, e), a()
  };
  return (0, s.jsx)("div", {
    className: u.container,
    children: (0, s.jsxs)(r.Menu, {
      navId: "sort-and-view",
      "aria-label": f ? d.default.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : d.default.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
      hideScroller: !0,
      onClose: a,
      onSelect: a,
      children: [(0, s.jsxs)(r.MenuGroup, {
        label: d.default.Messages.FORUM_CHANNEL_SORT_BY,
        children: [(0, s.jsx)(r.MenuRadioItem, {
          id: "sort-by-recent-activity",
          group: "sort-by",
          label: d.default.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
          action: () => g(l.ThreadSortOrder.LATEST_ACTIVITY),
          checked: c === l.ThreadSortOrder.LATEST_ACTIVITY
        }), (0, s.jsx)(r.MenuRadioItem, {
          id: "sort-by-date-posted",
          group: "sort-by",
          label: d.default.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
          action: () => g(l.ThreadSortOrder.CREATION_DATE),
          checked: c === l.ThreadSortOrder.CREATION_DATE
        })]
      }), !t.isMediaChannel() && (0, s.jsxs)(r.MenuGroup, {
        label: d.default.Messages.FORUM_CHANNEL_VIEW_AS,
        children: [(0, s.jsx)(r.MenuRadioItem, {
          id: "view-as-list",
          group: "view-as",
          label: d.default.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
          action: () => x(n.ForumLayout.LIST),
          checked: m === n.ForumLayout.LIST
        }), (0, s.jsx)(r.MenuRadioItem, {
          id: "view-as-grid",
          group: "view-as",
          label: d.default.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
          action: () => x(n.ForumLayout.GRID),
          checked: m === n.ForumLayout.GRID
        })]
      }), (0, s.jsx)(r.MenuGroup, {
        children: (0, s.jsx)(r.MenuItem, {
          id: "reset-all",
          className: u.clearText,
          label: (0, s.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: d.default.Messages.FORUM_CHANNEL_RESET_ALL
          }),
          action: () => {
            g(t.getDefaultSortOrder()), x(t.getDefaultLayout())
          }
        })
      })]
    })
  })
}