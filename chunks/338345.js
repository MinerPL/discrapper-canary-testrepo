s.d(t, {
  Z: function() {
return C;
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(442837),
  o = s(481060),
  l = s(223245),
  c = s(230711),
  d = s(921801),
  _ = s(246946),
  E = s(358085),
  u = s(726985),
  T = s(981631),
  I = s(689938),
  S = s(824868),
  N = s(549856);

function C() {
  let {
enabled: e,
autoToggle: t,
hideInstantInvites: a,
hidePersonalInformation: C,
disableSounds: m,
disableNotifications: A,
enableContentProtection: g
  } = (0, r.cj)([_.Z], () => ({
..._.Z.getSettings()
  })), h = (e, t) => {
l.Z.update({
  [e]: t
});
  };
  return (0, n.jsxs)(o.FormSection, {
className: S.container,
tag: o.FormTitleTags.H1,
title: I.Z.Messages.STREAMER_MODE,
children: [
  (0, n.jsx)(d.F, {
    setting: u.s6.STREAMER_MODE_INTEGRATIONS,
    children: (0, n.jsx)(o.FormNotice, {
      className: N.marginBottom40,
      iconClassName: S.noticeIcon,
      type: o.FormNoticeTypes.PRIMARY,
      imageData: {
        src: s(560264),
        width: 184,
        height: 110,
        position: o.FormNoticeImagePositions.RIGHT
      },
      title: I.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
      body: I.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_BODY.format({
        streamkitURL: T.EYA.STREAMKIT
      })
    })
  }),
  (0, n.jsxs)(d.F, {
    setting: u.s6.STREAMER_MODE_ENABLE,
    children: [
      (0, n.jsx)(o.FormSwitch, {
        value: e,
        onChange: e => h('enabled', e),
        note: I.Z.Messages.ENABLE_STREAMER_MODE_DESCRIPTION.format({
          onClick: () => {
            c.Z.setSection(T.oAB.KEYBINDS);
          }
        }),
        children: I.Z.Messages.ENABLE_STREAMER_MODE_LABEL
      }),
      (() => {
        if (E.isPlatformEmbedded)
          return (0, n.jsx)(o.FormSwitch, {
            value: t,
            onChange: e => h('autoToggle', e),
            note: I.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_DESCRIPTION,
            children: I.Z.Messages.AUTO_TOGGLE_STREAMER_MODE_LABEL
          });
      })()
    ]
  }),
  (0, n.jsxs)('div', {
    children: [
      (0, n.jsx)(o.FormTitle, {
        className: i()(N.marginTop40, N.marginBottom8, S.sectionLabel),
        children: I.Z.Messages.OPTIONS
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
        children: (0, n.jsx)(o.FormSwitch, {
          value: C,
          onChange: e => h('hidePersonalInformation', e),
          note: I.Z.Messages.HIDE_PERSONAL_INFORMATION_DESCRIPTION,
          children: I.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL
        })
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
        children: (0, n.jsx)(o.FormSwitch, {
          value: a,
          onChange: e => h('hideInstantInvites', e),
          note: I.Z.Messages.HIDE_INSTANT_INVITES_DESCRIPTION,
          children: I.Z.Messages.HIDE_INSTANT_INVITES_LABEL
        })
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.STREAMER_MODE_DISABLE_SOUNDS,
        children: (0, n.jsx)(o.FormSwitch, {
          value: m,
          onChange: e => h('disableSounds', e),
          note: I.Z.Messages.DISABLE_SOUNDS_DESCRIPTION,
          children: I.Z.Messages.DISABLE_SOUNDS_LABEL
        })
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
        children: (0, n.jsx)(o.FormSwitch, {
          value: A,
          onChange: e => h('disableNotifications', e),
          note: I.Z.Messages.DISABLE_NOTIFICATIONS_DESCRIPTION,
          children: I.Z.Messages.DISABLE_NOTIFICATIONS_LABEL
        })
      }),
      (0, n.jsx)(d.F, {
        setting: u.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
        children: (0, n.jsx)(o.FormSwitch, {
          value: g,
          onChange: e => h('enableContentProtection', e),
          note: I.Z.Messages.HIDE_WINDOW_FROM_STREAM_DESCRIPTION,
          children: I.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL
        })
      })
    ]
  })
]
  });
}