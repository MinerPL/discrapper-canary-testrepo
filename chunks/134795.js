s.d(t, {
  Z: function() {
return E;
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
  _ = s(607058);

function E(e) {
  let {
showRemoveBannerButton: t,
errors: s,
onBannerChange: a,
guildId: E,
className: u,
disabled: T = !1,
showPremiumIcon: I = !0,
isTryItOutFlow: S = !1,
forcedDivider: N,
withHighlight: C = !1
  } = e, m = C ? r.ShinyButton : r.Button;
  return (0, n.jsx)(l.Z, {
className: u,
title: d.Z.Messages.USER_SETTINGS_PROFILE_BANNER,
showPremiumIcon: I,
errors: s,
disabled: T,
forcedDivider: N,
children: (0, n.jsxs)('div', {
  className: _.buttonsContainer,
  children: [
    (0, n.jsx)(m, {
      className: i()({
        [_.buttonHighlighted]: C
      }),
      size: r.Button.Sizes.SMALL,
      onClick: () => (0, o.$r)(c.pC.BANNER, E, S, void 0),
      children: d.Z.Messages.CHANGE_BANNER
    }),
    t && (0, n.jsx)(r.Button, {
      className: _.removeButton,
      color: r.Button.Colors.PRIMARY,
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.SMALL,
      onClick: () => a(null),
      children: null != E ? d.Z.Messages.USER_SETTINGS_RESET_BANNER : d.Z.Messages.USER_SETTINGS_REMOVE_BANNER
    })
  ]
})
  });
}