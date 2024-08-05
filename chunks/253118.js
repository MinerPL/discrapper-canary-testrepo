n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(904245),
  r = n(702346),
  l = n(739566),
  o = n(689938);

function c(e) {
  let {
message: t,
usernameHook: c,
onClickPins: u,
compact: d
  } = e, _ = (0, l.ZP)(t), E = _.nick, I = c(_), m = () => {
if (null == t.messageReference)
  return;
let {
  channel_id: e,
  message_id: n
} = t.messageReference;
a.Z.jumpToMessage({
  channelId: e,
  messageId: n,
  flash: !0
});
  }, T = (0, s.useRedesignIconContext)().enabled ? {
iconNode: (0, i.jsx)(s.PinIcon, {
  size: 'sm',
  color: 'currentColor'
})
  } : {
icon: n(879066)
  };
  return (0, i.jsx)(r.Z, {
...T,
timestamp: t.timestamp,
compact: d,
children: null != t.messageReference ? null == u ? o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_WITH_MESSAGE_HOOK.format({
  usernameHook: I,
  username: E,
  messageOnClick: m
}) : o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_WITH_MESSAGE.format({
  usernameHook: I,
  username: E,
  pinsActionOnClick: u,
  messageOnClick: m
}) : null == u ? o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_HOOK.format({
  usernameHook: I,
  username: E
}) : o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE.format({
  usernameHook: I,
  username: E,
  pinsActionOnClick: u
})
  });
}