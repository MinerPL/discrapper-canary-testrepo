s.d(t, {
  Z: function() {
return u;
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  o = s(654904),
  l = s(993413),
  c = s(486324),
  d = s(689938),
  _ = s(49613);
let E = [{
  name: 'gif',
  extensions: ['gif']
}];

function u(e) {
  let {
showRemoveAvatarButton: t,
errors: s,
onAvatarChange: a,
sectionTitle: u,
changeAvatarButtonText: T,
guildId: I,
className: S,
disabled: N = !1,
isTryItOutFlow: C = !1,
forcedDivider: m,
withHighlight: A = !1
  } = e, g = A ? r.ShinyButton : r.Button;
  return (0, n.jsx)(l.Z, {
className: S,
title: u,
errors: s,
disabled: N,
forcedDivider: m,
children: (0, n.jsxs)('div', {
  className: _.buttonsContainer,
  children: [
    (0, n.jsx)(g, {
      className: i()({
        [_.buttonHighlighted]: A
      }),
      size: r.Button.Sizes.SMALL,
      onClick: () => (0, o.$r)(c.pC.AVATAR, I, C, C ? E : void 0),
      children: null != T ? T : d.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
    }),
    t && (0, n.jsx)(r.Button, {
      className: _.removeButton,
      color: r.Button.Colors.PRIMARY,
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.SMALL,
      onClick: () => a(null),
      children: null != I ? d.Z.Messages.USER_SETTINGS_RESET_AVATAR : d.Z.Messages.USER_SETTINGS_REMOVE_AVATAR
    })
  ]
})
  });
}