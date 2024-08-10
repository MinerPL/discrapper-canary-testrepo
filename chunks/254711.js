n.d(t, {
  Kh: function() {
return w;
  },
  Tm: function() {
return b;
  }
}), n(47120), n(411104);
var r = n(512722),
  i = n.n(r),
  a = n(913527),
  s = n.n(a),
  o = n(106351),
  l = n(969812),
  u = n(493683),
  c = n(749210),
  d = n(904245),
  _ = n(911969),
  E = n(386696),
  f = n(957730),
  h = n(968437),
  p = n(928477),
  m = n(665906),
  I = n(695346),
  T = n(592125),
  g = n(496675),
  S = n(594174),
  A = n(70956),
  N = n(51144),
  v = n(895924),
  O = n(689079),
  R = n(981631),
  C = n(590433),
  y = n(689938);
let D = n(227419).Z,
  L = (e, t) => {
var n;
return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value;
  },
  b = {
[O.bi.BUILT_IN]: {
  id: O.bi.BUILT_IN,
  type: v.Qi.BUILT_IN,
  get name() {
    return y.Z.Messages.COMMAND_SECTION_BUILT_IN_NAME;
  }
},
[O.bi.FRECENCY]: {
  id: O.bi.FRECENCY,
  type: v.Qi.BUILT_IN,
  get name() {
    return y.Z.Messages.FREQUENTLY_USED;
  }
}
  },
  M = [
...D,
{
  id: '-1',
  name: 'shrug',
  displayName: 'shrug',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN_TEXT,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_SHRUG_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_SHRUG_DESCRIPTION;
  },
  options: [{
    name: 'message',
    displayName: 'message',
    type: _.jw.STRING,
    get description() {
      return y.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION;
    },
    get displayDescription() {
      return y.Z.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION;
    }
  }],
  execute: e => {
    var t;
    let n = null !== (t = L(e, 'message')) && void 0 !== t ? t : '';
    return {
      content: ''.concat(n, ' \xAF\\_(ツ)_/\xAF').trim()
    };
  }
},
{
  id: '-2',
  name: 'tableflip',
  displayName: 'tableflip',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN_TEXT,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_TABLEFLIP_DESCRIPTION;
  },
  options: [{
    name: 'message',
    displayName: 'message',
    type: _.jw.STRING,
    get description() {
      return y.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION;
    },
    get displayDescription() {
      return y.Z.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION;
    }
  }],
  execute: e => {
    var t;
    let n = null !== (t = L(e, 'message')) && void 0 !== t ? t : '';
    return {
      content: ''.concat(n, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim()
    };
  }
},
{
  id: '-3',
  name: 'unflip',
  displayName: 'unflip',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN_TEXT,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION;
  },
  options: [{
    name: 'message',
    displayName: 'message',
    type: _.jw.STRING,
    get description() {
      return y.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION;
    },
    get displayDescription() {
      return y.Z.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION;
    }
  }],
  execute: e => {
    var t;
    let n = null !== (t = L(e, 'message')) && void 0 !== t ? t : '';
    return {
      content: ''.concat(n, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim()
    };
  }
},
{
  id: '-4',
  name: 'tts',
  displayName: 'tts',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN_TEXT,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_TTS_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_TTS_DESCRIPTION;
  },
  options: [{
    name: 'message',
    displayName: 'message',
    type: _.jw.STRING,
    get description() {
      return y.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION;
    },
    get displayDescription() {
      return y.Z.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION;
    },
    required: !0
  }],
  predicate: e => {
    let {
      channel: t
    } = e;
    return !t.isPrivate() && I.OW.getSetting() && g.Z.can(R.Plq.SEND_TTS_MESSAGES, t);
  },
  execute: e => {
    var t;
    return {
      content: null !== (t = L(e, 'message')) && void 0 !== t ? t : '',
      tts: !0
    };
  }
},
{
  id: '-5',
  name: 'me',
  displayName: 'me',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN_TEXT,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_ME_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_ME_DESCRIPTION;
  },
  options: [{
    name: 'message',
    displayName: 'message',
    type: _.jw.STRING,
    get description() {
      return y.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION;
    },
    get displayDescription() {
      return y.Z.Messages.COMMAND_ME_MESSAGE_DESCRIPTION;
    },
    required: !0
  }],
  execute: e => {
    var t;
    let n = null !== (t = L(e, 'message')) && void 0 !== t ? t : '';
    return {
      content: '_'.concat(n, '_')
    };
  }
},
{
  id: '-6',
  name: 'spoiler',
  displayName: 'spoiler',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN_TEXT,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_SPOILER_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_SPOILER_DESCRIPTION;
  },
  options: [{
    name: 'message',
    displayName: 'message',
    type: _.jw.STRING,
    get description() {
      return y.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION;
    },
    get displayDescription() {
      return y.Z.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION;
    },
    required: !0
  }],
  execute: e => {
    var t;
    let n = null !== (t = L(e, 'message')) && void 0 !== t ? t : '';
    return {
      content: (0, R.XmY)(n).trim()
    };
  }
},
{
  id: '-7',
  name: 'nick',
  displayName: 'nick',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_NICK_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_NICK_DESCRIPTION;
  },
  options: [{
    name: 'new_nick',
    displayName: 'new_nick',
    type: _.jw.STRING,
    get description() {
      return y.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION;
    },
    get displayDescription() {
      return y.Z.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION;
    }
  }],
  predicate: e => {
    let {
      channel: t
    } = e;
    return !t.isPrivate() && (g.Z.can(R.Plq.CHANGE_NICKNAME, t) || g.Z.can(R.Plq.MANAGE_NICKNAMES, t));
  },
  execute: (e, t) => {
    var n;
    let {
      guild: r,
      channel: i
    } = t;
    if (null == r)
      return;
    let a = null !== (n = L(e, 'new_nick')) && void 0 !== n ? n : '';
    l.Z.changeNickname(r.id, i.id, R.ME, a || '');
  }
},
{
  id: '-10',
  name: 'thread',
  displayName: 'thread',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_THREAD_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_THREAD_DESCRIPTION;
  },
  options: [{
      name: 'name',
      displayName: 'name',
      type: _.jw.STRING,
      get description() {
        return y.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_THREAD_NAME_DESCRIPTION;
      },
      required: !0
    },
    {
      name: 'message',
      displayName: 'message',
      type: _.jw.STRING,
      get description() {
        return y.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION;
      },
      required: !0
    }
  ],
  predicate: e => {
    let {
      channel: t
    } = e;
    return (0, m.ki)(t);
  },
  execute: async (e, t) => {
    var n, r;
    let {
      channel: i
    } = t, a = null !== (n = L(e, 'name')) && void 0 !== n ? n : '', s = null !== (r = L(e, 'message')) && void 0 !== r ? r : '', l = await (0, p.gK)(i, a, o.d.PUBLIC_THREAD, (0, h.WD)(i, null), 'Slash Command');
    d.Z.sendMessage(l.id, f.ZP.parse(l, s));
  }
},
{
  id: '-11',
  name: 'kick',
  displayName: 'kick',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_KICK_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_KICK_DESCRIPTION;
  },
  options: [{
      name: 'user',
      displayName: 'user',
      type: _.jw.USER,
      get description() {
        return y.Z.Messages.COMMAND_KICK_USER_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_KICK_USER_DESCRIPTION;
      },
      required: !0
    },
    {
      name: 'reason',
      displayName: 'reason',
      type: _.jw.STRING,
      get description() {
        return y.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_KICK_REASON_DESCRIPTION;
      },
      required: !1
    }
  ],
  predicate: e => {
    let {
      guild: t
    } = e;
    return g.Z.can(R.Plq.KICK_MEMBERS, t);
  },
  execute: (e, t) => {
    var n;
    let {
      guild: r,
      channel: i
    } = t;
    if (null == r)
      return;
    let a = null !== (n = L(e, 'user')) && void 0 !== n ? n : '';
    if (!g.Z.canManageUser(R.Plq.KICK_MEMBERS, a, r)) {
      d.Z.sendBotMessage(i.id, y.Z.Messages.COMMAND_KICK_UNABLE);
      return;
    }
    (async () => {
      var t;
      let n = S.default.getUser(a);
      if (null == n)
        throw Error();
      await c.Z.kickUser(r.id, a, null !== (t = L(e, 'reason')) && void 0 !== t ? t : ''), d.Z.sendBotMessage(i.id, y.Z.Messages.COMMAND_KICK_CONFIRMATION.format({
        user: N.ZP.getUserTag(n)
      }));
    })().catch(() => {
      d.Z.sendBotMessage(i.id, y.Z.Messages.COMMAND_KICK_ERROR);
    });
  }
},
{
  id: '-12',
  name: 'ban',
  displayName: 'ban',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_BAN_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_BAN_DESCRIPTION;
  },
  options: [{
      name: 'user',
      displayName: 'user',
      type: _.jw.USER,
      get description() {
        return y.Z.Messages.COMMAND_BAN_USER_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_BAN_USER_DESCRIPTION;
      },
      required: !0
    },
    {
      name: 'delete_messages',
      displayName: 'delete_messages',
      type: _.jw.INTEGER,
      get description() {
        return y.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION;
      },
      required: !0,
      get choices() {
        return [{
            name: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
            displayName: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
            value: 0
          },
          {
            name: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
            displayName: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
            value: A.Z.Seconds.HOUR
          },
          {
            name: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
            displayName: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
            value: 6 * A.Z.Seconds.HOUR
          },
          {
            name: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
            displayName: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
            value: 12 * A.Z.Seconds.HOUR
          },
          {
            name: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
            displayName: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
            value: A.Z.Seconds.DAY
          },
          {
            name: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
            displayName: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
            value: 3 * A.Z.Seconds.DAY
          },
          {
            name: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
            displayName: y.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
            value: 7 * A.Z.Seconds.DAY
          }
        ];
      }
    },
    {
      name: 'reason',
      displayName: 'reason',
      type: _.jw.STRING,
      get description() {
        return y.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_BAN_REASON_DESCRIPTION;
      },
      required: !1
    }
  ],
  predicate: e => {
    let {
      guild: t
    } = e;
    return g.Z.can(R.Plq.BAN_MEMBERS, t);
  },
  execute: (e, t) => {
    var n;
    let {
      guild: r,
      channel: i
    } = t;
    if (null == r)
      return;
    let a = null !== (n = L(e, 'user')) && void 0 !== n ? n : '';
    if (!g.Z.canManageUser(R.Plq.BAN_MEMBERS, a, r)) {
      d.Z.sendBotMessage(i.id, y.Z.Messages.COMMAND_BAN_UNABLE);
      return;
    }
    (async () => {
      var t, n;
      if ('' === a)
        throw Error();
      let s = null !== (t = L(e, 'delete_messages')) && void 0 !== t ? t : 0,
        o = null !== (n = L(e, 'reason')) && void 0 !== n ? n : '',
        l = S.default.getUser(a);
      await c.Z.banUser(r.id, a, s, o), d.Z.sendBotMessage(i.id, y.Z.Messages.COMMAND_BAN_CONFIRMATION.format({
        user: null != l ? N.ZP.getUserTag(l) : a
      }));
    })().catch(() => {
      d.Z.sendBotMessage(i.id, y.Z.Messages.COMMAND_BAN_ERROR);
    });
  }
},
{
  id: '-13',
  name: 'timeout',
  displayName: 'timeout',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_TIMEOUT_DESCRIPTION;
  },
  options: [{
      name: 'user',
      displayName: 'user',
      type: _.jw.USER,
      get description() {
        return y.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION;
      },
      required: !0
    },
    {
      name: 'duration',
      displayName: 'duration',
      type: _.jw.STRING,
      get description() {
        return y.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION;
      },
      required: !0,
      get choices() {
        return (0, C.tr)().map(e => ({
          ...e,
          name: e.label,
          displayName: e.label
        }));
      }
    },
    {
      name: 'reason',
      displayName: 'reason',
      type: _.jw.STRING,
      get description() {
        return y.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION;
      },
      required: !1
    }
  ],
  predicate: e => {
    let {
      guild: t
    } = e;
    return g.Z.can(R.Plq.MODERATE_MEMBERS, t);
  },
  execute: (e, t) => {
    let {
      guild: n,
      channel: r
    } = t;
    if (null == n)
      return;
    let i = L(e, 'user');
    if (!(0, E.F)(n.id, i)) {
      d.Z.sendBotMessage(r.id, y.Z.Messages.COMMAND_TIMEOUT_UNABLE);
      return;
    }
    (async () => {
      var t, a;
      let o = null !== (t = L(e, 'duration')) && void 0 !== t ? t : '',
        l = null !== (a = L(e, 'reason')) && void 0 !== a ? a : '',
        u = S.default.getUser(i);
      if (null == u)
        throw Error();
      await c.Z.setCommunicationDisabledUntil({
        guildId: n.id,
        userId: i,
        communicationDisabledUntilTimestamp: s()().add(o, 's').toISOString(),
        duration: o,
        reason: l
      }), d.Z.sendBotMessage(r.id, y.Z.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
        user: N.ZP.getUserTag(u),
        duration: o
      }));
    })().catch(() => {
      d.Z.sendBotMessage(r.id, y.Z.Messages.COMMAND_TIMEOUT_ERROR);
    });
  }
},
{
  id: '-14',
  name: 'msg',
  displayName: 'msg',
  type: _.yU.CHAT,
  inputType: v.iw.BUILT_IN,
  applicationId: O.bi.BUILT_IN,
  get description() {
    return y.Z.Messages.COMMAND_MSG_DESCRIPTION;
  },
  get displayDescription() {
    return y.Z.Messages.COMMAND_MSG_DESCRIPTION;
  },
  options: [{
      name: 'user',
      displayName: 'user',
      type: _.jw.USER,
      get description() {
        return y.Z.Messages.COMMAND_MSG_USER_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_MSG_USER_DESCRIPTION;
      },
      required: !0
    },
    {
      name: 'message',
      displayName: 'message',
      type: _.jw.STRING,
      get description() {
        return y.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION;
      },
      get displayDescription() {
        return y.Z.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION;
      },
      required: !0,
      get maxLength() {
        var P;
        return (null === (P = S.default.getCurrentUser()) || void 0 === P ? void 0 : P.premiumType) ? R.en1 : R.J6R;
      }
    }
  ],
  execute: (e, t) => {
    var n;
    let {
      channel: r
    } = t, a = L(e, 'user'), s = null !== (n = L(e, 'message')) && void 0 !== n ? n : '';
    (async () => {
      await u.Z.openPrivateChannel(a).then(e => {
        let t = T.Z.getChannel(e);
        i()(null != t, 'Newly created PrivateChannel is null'), d.Z.sendMessage(t.id, f.ZP.parse(t, s));
      });
    })().catch(() => {
      d.Z.sendBotMessage(r.id, y.Z.Messages.COMMAND_MSG_ERROR);
    });
  }
}
  ],
  U = M.filter(e => [
'gif',
'tenor',
'tts',
'me',
'tableflip',
'unflip',
'shrug',
'spoiler',
'nick'
  ].includes(e.name)),
  w = (e, t, n) => {
let r = t ? M : U;
return r = r.filter(t => e.includes(t.type) && (!n || t.inputType === v.iw.BUILT_IN_TEXT || t.inputType === v.iw.BUILT_IN_INTEGRATION));
  };