"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("442837"),
  i = s("518738"),
  u = s("786761"),
  A = s("3148"),
  l = s("753206"),
  I = s("594174"),
  r = s("5192"),
  o = s("792125"),
  L = s("981631"),
  d = s("689938"),
  N = s("857179");

function S(e) {
  var t;
  let {
    guildId: s,
    role: a,
    theme: S,
    content: g = d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: D
  } = e, c = (0, T.useStateFromStores)([I.default], () => I.default.getCurrentUser()), G = r.default.useName(s, null, c), O = (0, i.getRoleIconProps)(a), U = _.useMemo(() => (0, u.createMessageRecord)({
    ...(0, A.default)({
      channelId: "0",
      content: g,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: c
    }),
    state: L.MessageStates.SENT,
    id: "0"
  }), [c, g]), C = {
    nick: G,
    colorString: null !== (t = a.colorString) && void 0 !== t ? t : void 0
  };
  return (0, E.jsx)("div", {
    className: n()((0, o.getThemeClass)(S), N.container, D),
    children: (0, E.jsx)(l.default, {
      hideTimestamp: !0,
      author: C,
      roleIcon: O,
      message: U,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}