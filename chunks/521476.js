n.d(t, {
  h: function() {
return h;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(100527),
  s = n(906732),
  r = n(545594),
  o = n(295474),
  c = n(981631),
  d = n(689938),
  u = n(629762);

function h(e) {
  var t, n;
  let {
guild: h
  } = e, {
analyticsLocations: p
  } = (0, s.ZP)(l.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [m, _] = (0, o.ww)({
guildId: null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : c.lds,
analyticsLocations: p,
openWithoutBackstack: !0
  }), f = _ ? d.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_DESCRIPTION : d.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_NO_PERMS_DESCRIPTION, E = _ ? d.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : d.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (0, i.jsx)('div', {
children: (0, i.jsx)(r.i, {
  bannerIcon: (0, i.jsx)(a.ChatXIcon, {
    size: 'lg',
    color: 'currentColor',
    className: u.bannerIcon
  }),
  bannerHeader: d.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
    guildName: null !== (n = null == h ? void 0 : h.name) && void 0 !== n ? n : ''
  }),
  bannerSubtext: f,
  containerStyles: u.bannerContainer,
  headerStyles: u.bannerHeader,
  children: (0, i.jsx)(a.Button, {
    onClick: () => {
      m();
    },
    size: a.Button.Sizes.SMALL,
    children: E
  })
})
  });
}