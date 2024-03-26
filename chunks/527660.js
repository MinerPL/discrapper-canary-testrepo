"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var s = n("446674"),
  a = n("77078"),
  l = n("519705"),
  u = n("503950"),
  o = n("282109"),
  d = n("34676"),
  r = n("49111"),
  c = n("782340");

function f() {
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
  let S = function(e) {
      let {
        suppressEveryone: t,
        suppressRoles: n,
        mobilePush: E,
        messageNotifications: S,
        notifyHighlights: _
      } = (0, s.useStateFromStoresObject)([o.default], () => ({
        suppressEveryone: o.default.isSuppressEveryoneEnabled(e.id),
        suppressRoles: o.default.isSuppressRolesEnabled(e.id),
        mobilePush: o.default.isMobilePushEnabled(e.id),
        messageNotifications: o.default.getMessageNotifications(e.id),
        notifyHighlights: o.default.getNotifyHighlights(e.id)
      }), [e.id]), g = _ === r.HighlightSettings.DISABLED, M = (0, u.default)(e.id);

      function N(t, n) {
        l.default.updateGuildNotificationSettings(e.id, t, n)
      }
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.MenuGroup, {
          children: f().map(e => {
            let {
              setting: t,
              label: n
            } = e;
            return (0, i.jsx)(a.MenuRadioItem, {
              group: "guild-notifications",
              id: "".concat(t),
              label: n,
              action: () => N({
                message_notifications: t
              }, d.NotificationLabel.notifications(t)),
              checked: t === S
            }, t)
          })
        }), (0, i.jsxs)(a.MenuGroup, {
          children: [(0, i.jsx)(a.MenuCheckboxItem, {
            id: "suppress-everyone",
            label: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => N({
              suppress_everyone: !t
            }, d.NotificationLabel.suppressEveryone(!t)),
            checked: t
          }), (0, i.jsx)(a.MenuCheckboxItem, {
            id: "suppress-roles",
            label: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => N({
              suppress_roles: !n
            }, d.NotificationLabel.suppressRoles(!n)),
            checked: n
          }), (0, i.jsx)(a.MenuCheckboxItem, {
            id: "suppress-highlights",
            label: c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            action: () => {
              N({
                notify_highlights: g ? r.HighlightSettings.ENABLED : r.HighlightSettings.DISABLED
              }, d.NotificationLabel.highlights(g))
            },
            checked: g
          }), M]
        }), (0, i.jsx)(a.MenuGroup, {
          children: (0, i.jsx)(a.MenuCheckboxItem, {
            id: "mobile-push",
            label: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
            action: () => N({
              mobile_push: !E
            }, d.NotificationLabel.mobilePush(!E)),
            checked: E
          })
        })]
      })
    }(e),
    _ = (0, s.useStateFromStores)([o.default], () => o.default.getMessageNotifications(e.id), [e.id]),
    g = null === (E = f()) || void 0 === E ? void 0 : null === (t = E.find(e => {
      let {
        setting: t
      } = e;
      return t === _
    })) || void 0 === t ? void 0 : t.label;
  return null != S ? (0, i.jsx)(a.MenuItem, {
    id: "guild-notifications",
    label: c.default.Messages.NOTIFICATION_SETTINGS,
    subtext: g,
    action: () => (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("747593").then(n.bind(n, "747593"));
      return n => (0, i.jsx)(t, {
        ...n,
        guildId: e.id
      })
    }),
    children: S
  }) : null
}