n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(824203),
  r = n(981631),
  l = n(689938),
  o = n(327455);

function c(e) {
  var t;
  let n, {
  message: c,
  onDeleteMessage: d,
  children: u
} = e,
_ = null === (t = c.interactionMetadata) || void 0 === t ? void 0 : t.ephemerality_reason,
E = () => d(c, !0);
  if (null != _) {
let e = (0, s.in)(_);
n = (0, i.jsx)('div', {
  className: o.userAppsBetaContent,
  children: l.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_WITH_REASON.format({
    handleDelete: E,
    reason: e
  })
});
  } else
n = c.type === r.uaV.STAGE_RAISE_HAND ? l.Z.Messages.STAGE_SYSTEM_MESSAGE_MODERATOR_VISIBILITY_MESSAGE.format({
  handleDelete: E
}) : l.Z.Messages.ONLY_YOU_CAN_SEE_AND_DELETE_THESE.format({
  count: 1,
  countMessages: 1,
  handleDelete: E
});
  return (0, i.jsxs)('div', {
className: o.ephemeralMessage,
onClick: e => e.stopPropagation(),
children: [
  (0, i.jsx)(a.EyeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: o.icon
  }),
  n,
  u
]
  });
}