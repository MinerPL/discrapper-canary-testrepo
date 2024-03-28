"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var i = s("735250");
s("470079");
var a = s("442837"),
  n = s("882485"),
  l = s("481060"),
  r = s("92114"),
  d = s("9156"),
  o = s("621600"),
  u = s("981631"),
  c = s("689938"),
  h = s("379665");

function S(e) {
  let {
    guildId: t
  } = e, s = (0, a.useStateFromStoresObject)([d.default], () => ({
    highligths: d.default.getNotifyHighlights(t),
    mobilePush: d.default.isMobilePushEnabled(t),
    suppressRoles: d.default.isSuppressRolesEnabled(t),
    suppressEveryone: d.default.isSuppressEveryoneEnabled(t),
    muteScheduledEvents: d.default.isMuteScheduledEventsEnabled(t)
  })), S = r.default.updateGuildNotificationSettings;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(N, {
      value: s.suppressEveryone,
      title: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
      onChange: e => S(t, {
        suppress_everyone: e
      }, o.NotificationLabel.suppressEveryone(e))
    }), (0, i.jsx)(N, {
      value: s.suppressRoles,
      title: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
      onChange: e => S(t, {
        suppress_roles: e
      }, o.NotificationLabel.suppressRoles(e))
    }), (0, i.jsx)(N, {
      title: (0, i.jsxs)("div", {
        className: h.advanceSettingTitle,
        children: [c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS, (0, i.jsx)(l.Tooltip, {
          text: c.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, i.jsx)(n.CircleInformationIcon, {
              width: 14,
              height: 14,
              onMouseEnter: t,
              onMouseLeave: s,
              color: l.tokens.colors.ICON_MUTED,
              className: h.settingTitleIcon
            })
          }
        })]
      }),
      value: s.highligths === u.HighlightSettings.ENABLED,
      onChange: e => S(t, {
        notify_highlights: e ? u.HighlightSettings.ENABLED : u.HighlightSettings.DISABLED
      }, o.NotificationLabel.highlights(e))
    }), (0, i.jsx)(N, {
      value: s.muteScheduledEvents,
      title: c.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
      onChange: e => S(t, {
        mute_scheduled_events: e
      }, o.NotificationLabel.mutedEvents(e))
    }), (0, i.jsx)(N, {
      value: s.mobilePush,
      title: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
      onChange: e => S(t, {
        mobile_push: e
      }, o.NotificationLabel.mobilePush(e))
    })]
  })
}

function N(e) {
  return (0, i.jsx)(l.FormSwitch, {
    hideBorder: !0,
    className: h.advanceSetting,
    value: e.value,
    onChange: e.onChange,
    note: e.subtitle,
    children: e.title
  })
}