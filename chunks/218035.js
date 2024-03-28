"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  },
  useChannelNotificationRadioItems: function() {
    return g
  }
});
var i = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  l = n("92114"),
  u = n("729052"),
  o = n("9156"),
  d = n("621600"),
  r = n("981631"),
  S = n("689938");

function _(e) {
  var t, n, i;
  let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case r.ChannelTypes.GUILD_VOICE:
      ;
      return a ? (t = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != t.parent_id ? S.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : S.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ALL_MESSAGES,
        label: S.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: S.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: S.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case r.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return n = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != n.parent_id ? S.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : S.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: S.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: S.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return i = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != i.parent_id ? S.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : S.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ALL_MESSAGES,
        label: S.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: S.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: S.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function g(e) {
  let t = e.getGuildId(),
    n = e.id,
    g = (0, a.useStateFromStores)([o.default], () => {
      let n = r.UserNotificationSettings.NULL;
      return null != e.parent_id && (n = o.default.getChannelMessageNotifications(t, e.parent_id)), n !== r.UserNotificationSettings.NULL ? n : o.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    c = (0, a.useStateFromStores)([o.default], () => o.default.getNewForumThreadsCreated(e)),
    f = (0, a.useStateFromStores)([o.default], () => o.default.getChannelOverrides(t)[n], [t, n]),
    N = null == f ? r.UserNotificationSettings.NULL : f.message_notifications,
    E = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
    M = _(e, E);
  return null == M ? null : (0, i.jsxs)(i.Fragment, {
    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: S.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: c,
        action: () => l.default.setForumThreadsCreated(e, !c)
      }), (0, i.jsx)(s.MenuSeparator, {})]
    }) : null, M.map(a => {
      let {
        setting: u,
        label: o
      } = a;
      return (0, i.jsx)(s.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(u),
        label: o,
        subtext: u === r.UserNotificationSettings.NULL ? function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case r.UserNotificationSettings.ALL_MESSAGES:
              return t.type === r.ChannelTypes.GUILD_VOICE && n ? S.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : S.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case r.UserNotificationSettings.ONLY_MENTIONS:
              return S.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case r.UserNotificationSettings.NO_MESSAGES:
              return S.default.Messages.FORM_LABEL_NOTHING;
            case r.UserNotificationSettings.NULL:
            default:
              return
          }
        }(g, e, E) : void 0,
        action: () => {
          var e;
          return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
            message_notifications: e
          }, d.NotificationLabel.notifications(e)))
        },
        checked: u === N
      }, u)
    })]
  })
}

function c(e) {
  var t, n;
  let l = g(e),
    d = (0, a.useStateFromStores)([o.default], () => o.default.resolvedMessageNotifications(e), [e]),
    c = (0, a.useStateFromStores)([o.default], () => o.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    f = null == c ? r.UserNotificationSettings.NULL : c.message_notifications,
    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
    E = f === r.UserNotificationSettings.NULL && e.isGuildStageVoice() ? S.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = _(e, N)) || void 0 === n ? void 0 : null === (t = n.find(e => {
      let {
        setting: t
      } = e;
      return t === d
    })) || void 0 === t ? void 0 : t.label;
  return null != l ? (0, i.jsx)(s.MenuItem, {
    id: "channel-notifications",
    label: S.default.Messages.NOTIFICATION_SETTINGS,
    subtext: E,
    children: l
  }) : null
}