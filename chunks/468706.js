n.d(t, {
  e: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(240872),
  r = n(923500),
  l = n(163268),
  o = n(774863),
  c = n(689938);

function d(e, t) {
  if ((0, l.aP)({
  action: l.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
  messageId: t,
  channelId: e
}), !o.Z.canSubmitFpReport(t)) {
s.Z.show({
  title: c.Z.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
  body: c.Z.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
  confirmText: c.Z.Messages.OKAY
}), r.Z.disableFalsePositiveButton(e, t);
return;
  }
  (0, a.openModalLazy)(async () => {
let {
  default: a
} = await n(773276);
return n => (0, i.jsx)(a, {
  channelId: e,
  messageId: t,
  ...n
});
  });
}