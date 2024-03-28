"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
});
var s = i("735250");
i("470079");
var n = i("442837"),
  a = i("481060"),
  l = i("92114"),
  u = i("778123"),
  o = i("9156"),
  d = i("621600"),
  r = i("981631"),
  c = i("689938");

function S() {
  return [{
    setting: r.UserNotificationSettings.ALL_MESSAGES,
    label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
  }, {
    setting: r.UserNotificationSettings.ONLY_MENTIONS,
    label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
  }, {
    setting: r.UserNotificationSettings.NO_MESSAGES,
    label: c.default.Messages.FORM_LABEL_NOTHING
  }]
}

function E(e) {
  var t, E;
  let f = function(e) {
      let {
        suppressEveryone: t,
        suppressRoles: i,
        mobilePush: E,
        messageNotifications: f,
        notifyHighlights: g
      } = (0, n.useStateFromStoresObject)([o.default], () => ({
        suppressEveryone: o.default.isSuppressEveryoneEnabled(e.id),
        suppressRoles: o.default.isSuppressRolesEnabled(e.id),
        mobilePush: o.default.isMobilePushEnabled(e.id),
        messageNotifications: o.default.getMessageNotifications(e.id),
        notifyHighlights: o.default.getNotifyHighlights(e.id)
      }), [e.id]), _ = g === r.HighlightSettings.DISABLED, N = (0, u.default)(e.id);

      function M(t, i) {
        l.default.updateGuildNotificationSettings(e.id, t, i)
      }
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(a.MenuGroup, {
          children: S().map(e => {
            let {
              setting: t,
              label: i
            } = e;
            return (0, s.jsx)(a.MenuRadioItem, {
              group: "guild-notifications",
              id: "".concat(t),
              label: i,
              action: () => M({
                message_notifications: t
              }, d.NotificationLabel.notifications(t)),
              checked: t === f
            }, t)
          })
        }), (0, s.jsxs)(a.MenuGroup, {
          children: [(0, s.jsx)(a.MenuCheckboxItem, {
            id: "suppress-everyone",
            label: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => M({
              suppress_everyone: !t
            }, d.NotificationLabel.suppressEveryone(!t)),
            checked: t
          }), (0, s.jsx)(a.MenuCheckboxItem, {
            id: "suppress-roles",
            label: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => M({
              suppress_roles: !i
            }, d.NotificationLabel.suppressRoles(!i)),
            checked: i
          }), (0, s.jsx)(a.MenuCheckboxItem, {
            id: "suppress-highlights",
            label: c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            action: () => {
              M({
                notify_highlights: _ ? r.HighlightSettings.ENABLED : r.HighlightSettings.DISABLED
              }, d.NotificationLabel.highlights(_))
            },
            checked: _
          }), N]
        }), (0, s.jsx)(a.MenuGroup, {
          children: (0, s.jsx)(a.MenuCheckboxItem, {
            id: "mobile-push",
            label: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
            action: () => M({
              mobile_push: !E
            }, d.NotificationLabel.mobilePush(!E)),
            checked: E
          })
        })]
      })
    }(e),
    g = (0, n.useStateFromStores)([o.default], () => o.default.getMessageNotifications(e.id), [e.id]),
    _ = null === (E = S()) || void 0 === E ? void 0 : null === (t = E.find(e => {
      let {
        setting: t
      } = e;
      return t === g
    })) || void 0 === t ? void 0 : t.label;
  return null != f ? (0, s.jsx)(a.MenuItem, {
    id: "guild-notifications",
    label: c.default.Messages.NOTIFICATION_SETTINGS,
    subtext: _,
    action: () => (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("99387"), i.e("5863")]).then(i.bind(i, "751212"));
      return i => (0, s.jsx)(t, {
        ...i,
        guildId: e.id
      })
    }),
    children: f
  }) : null
}