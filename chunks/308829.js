n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(906732),
  s = n(785717),
  r = n(171368),
  o = n(689938),
  c = n(475174);

function d(e) {
  let {
user: t,
channelId: n
  } = e, {
analyticsLocations: d
  } = (0, l.ZP)(), {
trackUserProfileAction: u
  } = (0, s.KZ)();
  return (0, i.jsx)('footer', {
className: c.footer,
children: (0, i.jsx)(a.Button, {
  fullWidth: !0,
  size: a.Button.Sizes.LARGE,
  look: a.Button.Looks.BLANK,
  color: c.buttonColor,
  onClick: () => {
    u({
      action: 'PRESS_VIEW_PROFILE'
    }), (0, r.openUserProfileModal)({
      sourceAnalyticsLocations: d,
      userId: t.id,
      channelId: n
    });
  },
  children: o.Z.Messages.VIEW_FULL_PROFILE
})
  });
}