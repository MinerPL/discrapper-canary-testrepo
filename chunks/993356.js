"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
});
var n = i("735250");
i("470079");
var s = i("442837"),
  a = i("481060"),
  u = i("92114"),
  l = i("778123"),
  o = i("122074"),
  d = i("9156"),
  r = i("621600"),
  c = i("981631"),
  S = i("689938");

function f() {
  return [{
    setting: c.UserNotificationSettings.ALL_MESSAGES,
    label: S.default.Messages.FORM_LABEL_ALL_MESSAGES
  }, {
    setting: c.UserNotificationSettings.ONLY_MENTIONS,
    label: S.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
  }, {
    setting: c.UserNotificationSettings.NO_MESSAGES,
    label: S.default.Messages.FORM_LABEL_NOTHING
  }]
}

function E(e) {
  var t, E;
  let N = function(e) {
      let {
        suppressEveryone: t,
        suppressRoles: i,
        mobilePush: E,
        messageNotifications: N,
        notifyHighlights: _
      } = (0, s.useStateFromStoresObject)([d.default], () => ({
        suppressEveryone: d.default.isSuppressEveryoneEnabled(e.id),
        suppressRoles: d.default.isSuppressRolesEnabled(e.id),
        mobilePush: d.default.isMobilePushEnabled(e.id),
        messageNotifications: d.default.getMessageNotifications(e.id),
        notifyHighlights: d.default.getNotifyHighlights(e.id)
      }), [e.id]), g = _ === c.HighlightSettings.DISABLED, M = (0, l.default)(e.id);

      function I(t, i) {
        u.default.updateGuildNotificationSettings(e.id, t, i)
      }
      let A = (0, o.useCustomNotificationSoundGuildContextMenuItem)(e.id, !0);
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.MenuGroup, {
          children: f().map(e => {
            let {
              setting: t,
              label: i
            } = e;
            return (0, n.jsx)(a.MenuRadioItem, {
              group: "guild-notifications",
              id: "".concat(t),
              label: i,
              action: () => I({
                message_notifications: t
              }, r.NotificationLabel.notifications(t)),
              checked: t === N
            }, t)
          })
        }), null != A && (0, n.jsx)(a.MenuGroup, {
          children: A
        }), (0, n.jsxs)(a.MenuGroup, {
          children: [(0, n.jsx)(a.MenuCheckboxItem, {
            id: "suppress-everyone",
            label: S.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => I({
              suppress_everyone: !t
            }, r.NotificationLabel.suppressEveryone(!t)),
            checked: t
          }), (0, n.jsx)(a.MenuCheckboxItem, {
            id: "suppress-roles",
            label: S.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => I({
              suppress_roles: !i
            }, r.NotificationLabel.suppressRoles(!i)),
            checked: i
          }), (0, n.jsx)(a.MenuCheckboxItem, {
            id: "suppress-highlights",
            label: S.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            action: () => {
              I({
                notify_highlights: g ? c.HighlightSettings.ENABLED : c.HighlightSettings.DISABLED
              }, r.NotificationLabel.highlights(g))
            },
            checked: g
          }), M]
        }), (0, n.jsx)(a.MenuGroup, {
          children: (0, n.jsx)(a.MenuCheckboxItem, {
            id: "mobile-push",
            label: S.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
            action: () => I({
              mobile_push: !E
            }, r.NotificationLabel.mobilePush(!E)),
            checked: E
          })
        })]
      })
    }(e),
    _ = (0, s.useStateFromStores)([d.default], () => d.default.getMessageNotifications(e.id), [e.id]),
    g = null === (E = f()) || void 0 === E ? void 0 : null === (t = E.find(e => {
      let {
        setting: t
      } = e;
      return t === _
    })) || void 0 === t ? void 0 : t.label,
    M = (0, o.useCustomNotificationNewBadge)();
  return null != N ? (0, n.jsx)(a.MenuItem, {
    id: "guild-notifications",
    label: (0, n.jsxs)(n.Fragment, {
      children: [M, S.default.Messages.NOTIFICATION_SETTINGS]
    }),
    subtext: g,
    action: () => (0, a.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("99387"), i.e("5863"), i.e("82321")]).then(i.bind(i, "751212"));
      return i => (0, n.jsx)(t, {
        ...i,
        guildId: e.id
      })
    }),
    children: N
  }) : null
}