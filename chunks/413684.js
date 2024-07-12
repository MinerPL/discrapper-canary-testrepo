t.d(s, {
  Z: function() {
return h;
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(92114),
  r = t(9156),
  o = t(621600),
  d = t(981631),
  c = t(689938),
  u = t(223173);

function h(e) {
  let {
guildId: s
  } = e, t = (0, i.cj)([r.ZP], () => ({
highligths: r.ZP.getNotifyHighlights(s),
mobilePush: r.ZP.isMobilePushEnabled(s),
suppressRoles: r.ZP.isSuppressRolesEnabled(s),
suppressEveryone: r.ZP.isSuppressEveryoneEnabled(s),
muteScheduledEvents: r.ZP.isMuteScheduledEventsEnabled(s)
  })), h = a.Z.updateGuildNotificationSettings;
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsx)(N, {
    value: t.suppressEveryone,
    title: c.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
    onChange: e => h(s, {
      suppress_everyone: e
    }, o.UE.suppressEveryone(e))
  }),
  (0, n.jsx)(N, {
    value: t.suppressRoles,
    title: c.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
    onChange: e => h(s, {
      suppress_roles: e
    }, o.UE.suppressRoles(e))
  }),
  (0, n.jsx)(N, {
    title: (0, n.jsxs)('div', {
      className: u.advanceSettingTitle,
      children: [
        c.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
        (0, n.jsx)(l.Tooltip, {
          text: c.Z.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: t
            } = e;
            return (0, n.jsx)(l.CircleInformationIcon, {
              size: 'custom',
              width: 14,
              height: 14,
              onMouseEnter: s,
              onMouseLeave: t,
              color: l.tokens.colors.ICON_MUTED,
              className: u.settingTitleIcon
            });
          }
        })
      ]
    }),
    value: t.highligths === d.gLR.ENABLED,
    onChange: e => h(s, {
      notify_highlights: e ? d.gLR.ENABLED : d.gLR.DISABLED
    }, o.UE.highlights(e))
  }),
  (0, n.jsx)(N, {
    value: t.muteScheduledEvents,
    title: c.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
    onChange: e => h(s, {
      mute_scheduled_events: e
    }, o.UE.mutedEvents(e))
  }),
  (0, n.jsx)(N, {
    value: t.mobilePush,
    title: c.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
    onChange: e => h(s, {
      mobile_push: e
    }, o.UE.mobilePush(e))
  })
]
  });
}

function N(e) {
  return (0, n.jsx)(l.FormSwitch, {
hideBorder: !0,
className: u.advanceSetting,
value: e.value,
onChange: e.onChange,
note: e.subtitle,
children: e.title
  });
}