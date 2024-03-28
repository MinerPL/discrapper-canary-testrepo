"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("235820"),
  r = n("592125"),
  o = n("944486"),
  u = n("836946"),
  d = n("157318"),
  c = n("455199");
n("288552");
var f = n("981631"),
  E = n("689938");

function _(e) {
  let {
    closePopout: t,
    onSelect: n
  } = e, u = (0, a.useStateFromStores)([r.default, o.default], () => r.default.getChannel(o.default.getChannelId())), {
    everyoneFilter: d,
    roleFilter: _,
    guildFilter: T
  } = (0, a.useStateFromStoresObject)([c.default], () => {
    let {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    } = c.default;
    return {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    }
  });
  return (0, s.jsxs)(l.Menu, {
    navId: "mentions-filter",
    "aria-label": E.default.Messages.FILTER,
    onClose: t,
    onSelect: n,
    children: [(0, s.jsx)(l.MenuCheckboxItem, {
      id: "Everyone",
      label: E.default.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
      action: function() {
        i.default.setGuildFilter({
          everyoneFilter: !d
        })
      },
      checked: d
    }), (0, s.jsx)(l.MenuCheckboxItem, {
      id: "Roles",
      label: E.default.Messages.RECENT_MENTIONS_FILTER_ROLES,
      action: function() {
        i.default.setGuildFilter({
          roleFilter: !_
        })
      },
      checked: _
    }), null == u || u.isPrivate() ? null : (0, s.jsx)(l.MenuCheckboxItem, {
      id: "All Servers",
      label: E.default.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
      action: function() {
        i.default.setGuildFilter({
          guildFilter: T === f.RecentMentionsFilters.THIS_SERVER ? f.RecentMentionsFilters.ALL_SERVERS : f.RecentMentionsFilters.THIS_SERVER
        })
      },
      checked: T === f.RecentMentionsFilters.ALL_SERVERS
    })]
  })
}

function T() {
  return (0, s.jsx)(l.Popout, {
    align: "right",
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(_, {
        closePopout: t
      })
    },
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, s.jsx)(u.default, {
        tooltip: E.default.Messages.FILTER,
        color: u.CircleIconButtonColors.SECONDARY,
        icon: (0, s.jsx)(d.default, {}),
        onClick: t
      })
    }
  })
}