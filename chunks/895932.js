n.d(t, {
  Z: function() {
return u;
  }
});
var a = n(735250);
n(470079);
var s = n(313361),
  r = n(683860),
  l = n(481060),
  i = n(109434),
  o = n(228392),
  c = n(689938),
  d = n(148369);

function u(e) {
  let {
channel: t,
closePopout: n
  } = e, {
sortOrder: u,
layoutType: m
  } = (0, i.H)(t.id), h = (0, i.v)(), _ = t.isMediaChannel(), g = e => {
(0, o.KR)({
  guildId: t.guild_id,
  channelId: t.id,
  sortOrder: e
}), h.getState().setSortOrder(t.id, e), n();
  }, x = e => {
(0, o.Do)({
  guildId: t.guild_id,
  channelId: t.id,
  forumLayout: e
}), h.getState().setLayoutType(t.id, e), n();
  };
  return (0, a.jsx)('div', {
className: d.container,
children: (0, a.jsxs)(l.Menu, {
  navId: 'sort-and-view',
  'aria-label': _ ? c.Z.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : c.Z.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
  hideScroller: !0,
  onClose: n,
  onSelect: n,
  children: [
    (0, a.jsxs)(l.MenuGroup, {
      label: c.Z.Messages.FORUM_CHANNEL_SORT_BY,
      children: [
        (0, a.jsx)(l.MenuRadioItem, {
          id: 'sort-by-recent-activity',
          group: 'sort-by',
          label: c.Z.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
          action: () => g(r.z.LATEST_ACTIVITY),
          checked: u === r.z.LATEST_ACTIVITY
        }),
        (0, a.jsx)(l.MenuRadioItem, {
          id: 'sort-by-date-posted',
          group: 'sort-by',
          label: c.Z.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
          action: () => g(r.z.CREATION_DATE),
          checked: u === r.z.CREATION_DATE
        })
      ]
    }),
    !t.isMediaChannel() && (0, a.jsxs)(l.MenuGroup, {
      label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS,
      children: [
        (0, a.jsx)(l.MenuRadioItem, {
          id: 'view-as-list',
          group: 'view-as',
          label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
          action: () => x(s.X.LIST),
          checked: m === s.X.LIST
        }),
        (0, a.jsx)(l.MenuRadioItem, {
          id: 'view-as-grid',
          group: 'view-as',
          label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
          action: () => x(s.X.GRID),
          checked: m === s.X.GRID
        })
      ]
    }),
    (0, a.jsx)(l.MenuGroup, {
      children: (0, a.jsx)(l.MenuItem, {
        id: 'reset-all',
        className: d.clearText,
        label: (0, a.jsx)(l.Text, {
          variant: 'text-sm/medium',
          color: 'none',
          children: c.Z.Messages.FORUM_CHANNEL_RESET_ALL
        }),
        action: () => {
          g(t.getDefaultSortOrder()), x(t.getDefaultLayout());
        }
      })
    })
  ]
})
  });
}