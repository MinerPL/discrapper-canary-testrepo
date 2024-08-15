n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var s = n(481060),
  i = n(78675),
  l = n(654904),
  a = n(486324),
  o = n(228168),
  c = n(689938),
  d = n(360247);

function u(e) {
  let {
user: t,
displayProfile: n,
guildId: u,
canUsePremiumCustomization: f,
pendingBanner: m,
hasProfileEffect: E,
isTryItOutFlow: p,
disabledInputs: _,
onUpsellClick: h
  } = e, g = f || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1, I = g ? s.PencilIcon : s.NitroWheelIcon;
  return (0, r.jsx)(i.Z, {
user: t,
displayProfile: n,
guildId: u,
profileType: o.y0.BITE_SIZE,
pendingBanner: m,
hasProfileEffect: E,
canUsePremiumCustomization: f,
children: !_ && (0, r.jsxs)(s.Clickable, {
  onClick: () => {
    if (!g) {
      null == h || h();
      return;
    }
    (0, l.$r)(a.pC.BANNER, u, p);
  },
  className: d.clickable,
  children: [
    (0, r.jsx)(I, {
      size: 'xs',
      color: 'white'
    }),
    (0, r.jsx)(s.Heading, {
      variant: 'text-sm/medium',
      color: 'always-white',
      children: g ? c.Z.Messages.CHANGE_BANNER : c.Z.Messages.USER_SETTINGS_UNLOCK_BANNER
    })
  ]
})
  });
}