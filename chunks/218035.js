t.d(n, {
  Z: function() {
return u;
  },
  c: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var s = t(442837),
  a = t(481060),
  _ = t(92114),
  d = t(729052),
  r = t(9156),
  l = t(621600),
  L = t(981631),
  S = t(689938);

function E(e) {
  var n, t, i;
  let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
case L.d4z.GUILD_VOICE:
  ;
  return s ? (n = e, [{
      setting: L.bL.NULL,
      label: null != n.parent_id ? S.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : S.Z.Messages.FORM_LABEL_DEFAULT
    },
    {
      setting: L.bL.ALL_MESSAGES,
      label: S.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
    },
    {
      setting: L.bL.ONLY_MENTIONS,
      label: S.Z.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
    },
    {
      setting: L.bL.NO_MESSAGES,
      label: S.Z.Messages.FORM_LABEL_NOTHING
    }
  ]) : null;
case L.d4z.GUILD_STAGE_VOICE:
  ;
  return t = e, [{
      setting: L.bL.NULL,
      label: null != t.parent_id ? S.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : S.Z.Messages.FORM_LABEL_DEFAULT
    },
    {
      setting: L.bL.ONLY_MENTIONS,
      label: S.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY
    },
    {
      setting: L.bL.NO_MESSAGES,
      label: S.Z.Messages.FORM_LABEL_NOTHING
    }
  ];
default:
  ;
  return i = e, [{
      setting: L.bL.NULL,
      label: null != i.parent_id ? S.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : S.Z.Messages.FORM_LABEL_DEFAULT
    },
    {
      setting: L.bL.ALL_MESSAGES,
      label: S.Z.Messages.FORM_LABEL_ALL_MESSAGES
    },
    {
      setting: L.bL.ONLY_MENTIONS,
      label: S.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
    },
    {
      setting: L.bL.NO_MESSAGES,
      label: S.Z.Messages.FORM_LABEL_NOTHING
    }
  ];
  }
}

function o(e) {
  let n = e.getGuildId(),
t = e.id,
o = (0, s.e7)([r.ZP], () => {
  let t = L.bL.NULL;
  return null != e.parent_id && (t = r.ZP.getChannelMessageNotifications(n, e.parent_id)), t !== L.bL.NULL ? t : r.ZP.getMessageNotifications(n);
}, [
  n,
  e.parent_id
]),
u = (0, s.e7)([r.ZP], () => r.ZP.getNewForumThreadsCreated(e)),
g = (0, s.e7)([r.ZP], () => r.ZP.getChannelOverrides(n)[t], [
  n,
  t
]),
N = null == g ? L.bL.NULL : g.message_notifications,
c = (0, d.p2)(e),
M = E(e, c);
  return null == M ? null : (0, i.jsxs)(i.Fragment, {
children: [
  e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(a.MenuCheckboxItem, {
        id: 'new-forum-threads-created',
        label: S.Z.Messages.FORUM_NEW_POSTS_CREATED,
        checked: u,
        action: () => _.Z.setForumThreadsCreated(e, !u)
      }),
      (0, i.jsx)(a.MenuSeparator, {})
    ]
  }) : null,
  M.map(s => {
    let {
      setting: d,
      label: r
    } = s;
    return (0, i.jsx)(a.MenuRadioItem, {
      group: 'channel-notifications',
      id: ''.concat(d),
      label: r,
      subtext: d === L.bL.NULL ? function(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
          case L.bL.ALL_MESSAGES:
            return n.type === L.d4z.GUILD_VOICE && t ? S.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : S.Z.Messages.FORM_LABEL_ALL_MESSAGES;
          case L.bL.ONLY_MENTIONS:
            return S.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format();
          case L.bL.NO_MESSAGES:
            return S.Z.Messages.FORM_LABEL_NOTHING;
          case L.bL.NULL:
          default:
            return;
        }
      }(o, e, c) : void 0,
      action: () => {
        var e;
        return e = d, void(null != n && _.Z.updateChannelOverrideSettings(n, t, {
          message_notifications: e
        }, l.UE.notifications(e)));
      },
      checked: d === N
    }, d);
  })
]
  });
}

function u(e) {
  var n, t;
  let _ = o(e),
l = (0, s.e7)([r.ZP], () => r.ZP.resolvedMessageNotifications(e), [e]),
u = (0, s.e7)([r.ZP], () => r.ZP.getChannelOverrides(e.guild_id)[e.id], [
  e.guild_id,
  e.id
]),
g = null == u ? L.bL.NULL : u.message_notifications,
N = (0, d.p2)(e),
c = g === L.bL.NULL && e.isGuildStageVoice() ? S.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (t = E(e, N)) || void 0 === t ? void 0 : null === (n = t.find(e => {
  let {
    setting: n
  } = e;
  return n === l;
})) || void 0 === n ? void 0 : n.label;
  return null != _ ? (0, i.jsx)(a.MenuItem, {
id: 'channel-notifications',
label: S.Z.Messages.NOTIFICATION_SETTINGS,
subtext: c,
children: _
  }) : null;
}