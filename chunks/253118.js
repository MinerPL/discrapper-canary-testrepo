n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(904245),
  r = n(702346),
  l = n(739566),
  o = n(689938);

function c(e) {
  let {
message: t,
usernameHook: c,
onClickPins: d,
compact: u
  } = e, _ = (0, l.ZP)(t), E = _.nick, I = c(_), m = () => {
if (null == t.messageReference)
  return;
let {
  channel_id: e,
  message_id: n
} = t.messageReference;
s.Z.jumpToMessage({
  channelId: e,
  messageId: n,
  flash: !0
});
  }, T = (0, a.useRedesignIconContext)().enabled ? {
iconNode: (0, i.jsx)(a.PinIcon, {
  size: 'sm',
  color: 'currentColor'
})
  } : {
icon: n(879066)
  };
  return (0, i.jsx)(r.Z, {
...T,
timestamp: t.timestamp,
compact: u,
children: null != t.messageReference ? null == d ? o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_WITH_MESSAGE_HOOK.format({
  usernameHook: I,
  username: E,
  messageOnClick: m
}) : o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_WITH_MESSAGE.format({
  usernameHook: I,
  username: E,
  pinsActionOnClick: d,
  messageOnClick: m
}) : null == d ? o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_HOOK.format({
  usernameHook: I,
  username: E
}) : o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE.format({
  usernameHook: I,
  username: E,
  pinsActionOnClick: d
})
  });
}