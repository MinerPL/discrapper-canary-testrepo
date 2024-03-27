"use strict";
E.r(t), E.d(t, {
  default: function() {
    return S
  }
});
var _ = E("37983"),
  s = E("884691"),
  T = E("414456"),
  a = E.n(T),
  n = E("446674"),
  A = E("405645"),
  u = E("692038"),
  I = E("815297"),
  i = E("291655"),
  l = E("697218"),
  L = E("387111"),
  o = E("439932"),
  r = E("49111"),
  d = E("782340"),
  N = E("250351");

function S(e) {
  var t;
  let {
    guildId: E,
    role: T,
    theme: S,
    content: g = d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: D
  } = e, G = (0, n.useStateFromStores)([l.default], () => l.default.getCurrentUser()), O = L.default.useName(E, null, G), c = (0, A.getRoleIconProps)(T), U = s.useMemo(() => (0, u.createMessageRecord)({
    ...(0, I.default)({
      channelId: "0",
      content: g,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: G
    }),
    state: r.MessageStates.SENT,
    id: "0"
  }), [G, g]), C = {
    nick: O,
    colorString: null !== (t = T.colorString) && void 0 !== t ? t : void 0
  };
  return (0, _.jsx)("div", {
    className: a((0, o.getThemeClass)(S), N.container, D),
    children: (0, _.jsx)(i.default, {
      hideTimestamp: !0,
      author: C,
      roleIcon: c,
      message: U,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}