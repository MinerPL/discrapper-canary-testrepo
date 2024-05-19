"use strict";
n.r(t), n.d(t, {
  getTutorialPopoutText: function() {
    return f
  }
}), n("757143");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("115850"),
  i = n("430824"),
  r = n("914010"),
  o = n("689938"),
  u = n("344484");
let d = () => (0, a.jsx)(a.Fragment, {
    children: o.default.Messages.TIP_INSTANT_INVITE_BODY3.format({
      shareIcon: o.default.Messages.INSTANT_INVITE,
      shareIconHook: () => (0, a.jsx)(s.GroupPlusIcon, {
        className: u.icon
      }, "icon")
    })
  }),
  c = () => {
    let e = (0, l.useStateFromStores)([i.default, r.default], () => i.default.getGuild(r.default.getGuildId()), []),
      t = null == e ? void 0 : e.name;
    return (0, a.jsx)(a.Fragment, {
      children: o.default.Messages.TIP_WRITING_MESSAGES_BODY3.format({
        serverName: t
      })
    })
  },
  f = e => {
    var t, n;
    let l = {
        VOICE_CONVERSATIONS: {
          title: (0, a.jsx)("div", {
            className: u.voiceChannelsTitle,
            children: o.default.Messages.NUF_VOICE_CHANNELS_TITLE
          }),
          body: o.default.Messages.NUF_VOICE_CHANNELS_DESCRIPTION
        },
        WRITING_MESSAGES: {
          title: (0, a.jsx)("div", {
            className: u.writingMessagesTitle,
            children: o.default.Messages.TIP_WRITING_MESSAGES_TITLE3
          }),
          body: (0, a.jsx)(c, {})
        },
        ORGANIZE_BY_TOPIC: {
          title: (0, a.jsx)("div", {
            className: u.channelsTitle,
            children: o.default.Messages.NUF_CHANNELS_TITLE
          }),
          body: o.default.Messages.NUF_CHANNELS_DESCRIPTION
        },
        WHOS_ONLINE: {
          title: o.default.Messages.TIP_WHOS_ONLINE_TITLE3,
          body: o.default.Messages.TIP_WHOS_ONLINE_BODY3.format()
        },
        INSTANT_INVITE: {
          title: o.default.Messages.TIP_INSTANT_INVITE_TITLE3,
          body: (0, a.jsx)(d, {})
        },
        SERVER_SETTINGS: {
          title: o.default.Messages.TIP_SERVER_SETTINGS_TITLE3,
          body: o.default.Messages.TIP_SERVER_SETTINGS_BODY3.format()
        },
        DIRECT_MESSAGES: {
          title: o.default.Messages.TIP_DIRECT_MESSAGES_TITLE3,
          body: o.default.Messages.TIP_DIRECT_MESSAGES_BODY3.format()
        },
        CREATE_MORE_SERVERS: {
          title: o.default.Messages.TIP_CREATE_MORE_SERVERS_TITLE3,
          body: o.default.Messages.TIP_CREATE_MORE_SERVERS_BODY3.format()
        },
        CREATE_FIRST_SERVER: {
          title: o.default.Messages.TIP_CREATE_FIRST_SERVER_TITLE3,
          body: o.default.Messages.TIP_CREATE_FIRST_SERVER_BODY3.format()
        },
        FRIENDS_LIST: {
          title: o.default.Messages.TIP_FRIENDS_LIST_TITLE3,
          body: o.default.Messages.TIP_FRIENDS_LIST_BODY3.format()
        }
      },
      s = null !== (t = l[e.replace(/-/g, "_").toUpperCase()]) && void 0 !== t ? t : {};
    return {
      title: s.title,
      body: s.body,
      isLongText: null !== (n = s.isLongText) && void 0 !== n && n
    }
  }