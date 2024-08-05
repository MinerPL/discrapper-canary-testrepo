n.d(t, {
  Z: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var o = n(481060),
  r = n(442837),
  a = n(594174),
  i = n(51144),
  c = n(473092),
  E = n(955708),
  N = n(850165),
  u = n(689938),
  T = n(927838),
  I = n(282668);

function _(e) {
  let {
senderId: t,
trackAnalyticsEvent: n,
onNavigate: _
  } = e, l = (0, r.e7)([a.default], () => {
let e = a.default.getUser(t);
return i.ZP.getName(e);
  });
  return (0, s.jsx)(N.Z, {
header: u.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_HEADER,
description: u.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKEOVER_DESCRIPTION.format({
  username: l
}),
heroImageSrc: I,
heroImageAlt: u.Z.Messages.INAPPROPRIATE_CONVERSATION_WUMPUS_EXCLAMATION_ALT,
children: (0, s.jsxs)('div', {
  className: T.buttonContainer,
  children: [
    (0, s.jsx)(o.Button, {
      color: o.Button.Colors.BRAND,
      size: o.Button.Sizes.LARGE,
      className: T.button,
      onClick: () => {
        _(E.InappropriateConversationModalSlideKeys.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION);
      },
      children: u.Z.Messages.INAPPROPRIATE_CONVERSATION_TAKE_ACTION
    }),
    (0, s.jsx)(o.Button, {
      color: o.Button.Colors.PRIMARY,
      size: o.Button.Sizes.LARGE,
      className: T.button,
      onClick: () => {
        _(E.InappropriateConversationModalSlideKeys.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS);
      },
      children: u.Z.Messages.INAPPROPRIATE_CONVERSATION_READ_SAFETY_TIPS
    })
  ]
})
  });
}