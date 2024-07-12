n.d(t, {
  k: function() {
return h;
  }
}), n(757143);
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(430824),
  r = n(914010),
  o = n(689938),
  c = n(591574);
let d = () => (0, i.jsx)(i.Fragment, {
children: o.Z.Messages.TIP_INSTANT_INVITE_BODY3.format({
  shareIcon: o.Z.Messages.INSTANT_INVITE,
  shareIconHook: () => (0, i.jsx)(l.GroupPlusIcon, {
    className: c.icon
  }, 'icon')
})
  }),
  u = () => {
let e = (0, a.e7)([
    s.Z,
    r.Z
  ], () => s.Z.getGuild(r.Z.getGuildId()), []),
  t = null == e ? void 0 : e.name;
return (0, i.jsx)(i.Fragment, {
  children: o.Z.Messages.TIP_WRITING_MESSAGES_BODY3.format({
    serverName: t
  })
});
  },
  h = e => {
var t, n;
let a = {
    VOICE_CONVERSATIONS: {
      title: (0, i.jsx)('div', {
        className: c.voiceChannelsTitle,
        children: o.Z.Messages.NUF_VOICE_CHANNELS_TITLE
      }),
      body: o.Z.Messages.NUF_VOICE_CHANNELS_DESCRIPTION
    },
    WRITING_MESSAGES: {
      title: (0, i.jsx)('div', {
        className: c.writingMessagesTitle,
        children: o.Z.Messages.TIP_WRITING_MESSAGES_TITLE3
      }),
      body: (0, i.jsx)(u, {})
    },
    ORGANIZE_BY_TOPIC: {
      title: (0, i.jsx)('div', {
        className: c.channelsTitle,
        children: o.Z.Messages.NUF_CHANNELS_TITLE
      }),
      body: o.Z.Messages.NUF_CHANNELS_DESCRIPTION
    },
    WHOS_ONLINE: {
      title: o.Z.Messages.TIP_WHOS_ONLINE_TITLE3,
      body: o.Z.Messages.TIP_WHOS_ONLINE_BODY3.format()
    },
    INSTANT_INVITE: {
      title: o.Z.Messages.TIP_INSTANT_INVITE_TITLE3,
      body: (0, i.jsx)(d, {})
    },
    SERVER_SETTINGS: {
      title: o.Z.Messages.TIP_SERVER_SETTINGS_TITLE3,
      body: o.Z.Messages.TIP_SERVER_SETTINGS_BODY3.format()
    },
    DIRECT_MESSAGES: {
      title: o.Z.Messages.TIP_DIRECT_MESSAGES_TITLE3,
      body: o.Z.Messages.TIP_DIRECT_MESSAGES_BODY3.format()
    },
    CREATE_MORE_SERVERS: {
      title: o.Z.Messages.TIP_CREATE_MORE_SERVERS_TITLE3,
      body: o.Z.Messages.TIP_CREATE_MORE_SERVERS_BODY3.format()
    },
    CREATE_FIRST_SERVER: {
      title: o.Z.Messages.TIP_CREATE_FIRST_SERVER_TITLE3,
      body: o.Z.Messages.TIP_CREATE_FIRST_SERVER_BODY3.format()
    },
    FRIENDS_LIST: {
      title: o.Z.Messages.TIP_FRIENDS_LIST_TITLE3,
      body: o.Z.Messages.TIP_FRIENDS_LIST_BODY3.format()
    }
  },
  l = null !== (t = a[e.replace(/-/g, '_').toUpperCase()]) && void 0 !== t ? t : {};
return {
  title: l.title,
  body: l.body,
  isLongText: null !== (n = l.isLongText) && void 0 !== n && n
};
  };