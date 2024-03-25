"use strict";
n.r(t), n.d(t, {
  useChannelNotificationRadioItems: function() {
    return E
  },
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("519705"),
  s = n("721281"),
  o = n("282109"),
  r = n("34676"),
  d = n("49111"),
  c = n("782340");

function f(e) {
  var t, n, a;
  let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case d.ChannelTypes.GUILD_VOICE:
      ;
      return i ? (t = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case d.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return n = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return a = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != a.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function E(e) {
  let t = e.getGuildId(),
    n = e.id,
    E = (0, i.useStateFromStores)([o.default], () => {
      let n = d.UserNotificationSettings.NULL;
      return null != e.parent_id && (n = o.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : o.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    _ = (0, i.useStateFromStores)([o.default], () => o.default.getNewForumThreadsCreated(e)),
    S = (0, i.useStateFromStores)([o.default], () => o.default.getChannelOverrides(t)[n], [t, n]),
    N = null == S ? d.UserNotificationSettings.NULL : S.message_notifications,
    T = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
    g = f(e, T);
  return null == g ? null : (0, a.jsxs)(a.Fragment, {
    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: _,
        action: () => u.default.setForumThreadsCreated(e, !_)
      }), (0, a.jsx)(l.MenuSeparator, {})]
    }) : null, g.map(i => {
      let {
        setting: s,
        label: o
      } = i;
      return (0, a.jsx)(l.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(s),
        label: o,
        subtext: s === d.UserNotificationSettings.NULL ? function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case d.UserNotificationSettings.ALL_MESSAGES:
              return t.type === d.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case d.UserNotificationSettings.ONLY_MENTIONS:
              return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case d.UserNotificationSettings.NO_MESSAGES:
              return c.default.Messages.FORM_LABEL_NOTHING;
            case d.UserNotificationSettings.NULL:
            default:
              return
          }
        }(E, e, T) : void 0,
        action: () => {
          var e;
          return e = s, void(null != t && u.default.updateChannelOverrideSettings(t, n, {
            message_notifications: e
          }, r.NotificationLabel.notifications(e)))
        },
        checked: s === N
      }, s)
    })]
  })
}

function _(e) {
  var t, n;
  let u = E(e),
    r = (0, i.useStateFromStores)([o.default], () => o.default.resolvedMessageNotifications(e), [e]),
    _ = (0, i.useStateFromStores)([o.default], () => o.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    S = null == _ ? d.UserNotificationSettings.NULL : _.message_notifications,
    N = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
    T = S === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, N)) || void 0 === n ? void 0 : null === (t = n.find(e => {
      let {
        setting: t
      } = e;
      return t === r
    })) || void 0 === t ? void 0 : t.label;
  return null != u ? (0, a.jsx)(l.MenuItem, {
    id: "channel-notifications",
    label: c.default.Messages.NOTIFICATION_SETTINGS,
    subtext: T,
    children: u
  }) : null
}