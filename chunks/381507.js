var i = n(735250);
n(470079);
var r = n(780384),
  o = n(481060),
  a = n(410030),
  s = n(204197),
  l = n(51144),
  d = n(105759),
  c = n(898969),
  C = n(703614),
  u = n(182294),
  _ = n(689938),
  p = n(906884);
t.Z = () => {
  let e = (0, d.Z)(),
{
  avatarSrc: t,
  eventHandlers: n
} = (0, s.Z)({
  user: e,
  size: u.EF.SIZE_32,
  animateOnHover: !0
}),
f = (0, a.Fg)(),
x = (0, r.ap)(f),
h = l.ZP.getName(e),
b = x ? c.Z : C.Z;
  return null == e ? null : (0, i.jsxs)('div', {
className: p.attributionBannerContainer,
children: [
  (0, i.jsx)('div', {
    className: p.avatarContainer,
    children: (0, i.jsx)(o.Avatar, {
      src: t,
      'aria-label': e.username,
      size: u.EF.SIZE_32,
      ...n
    })
  }),
  (0, i.jsx)(o.Text, {
    variant: 'text-xs/bold',
    className: p.bannerHeader,
    children: _.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
      userName: h
    })
  }),
  (0, i.jsx)(b, {
    className: p.bannerIcon
  })
]
  });
};