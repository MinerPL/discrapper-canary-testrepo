var t = n(735250);
n(470079);
var i = n(780384),
  r = n(481060),
  l = n(410030),
  a = n(204197),
  o = n(51144),
  C = n(105759),
  d = n(898969),
  u = n(703614),
  c = n(182294),
  _ = n(689938),
  p = n(906884);
s.Z = () => {
  let e = (0, C.Z)(),
{
  avatarSrc: s,
  eventHandlers: n
} = (0, a.Z)({
  user: e,
  size: c.EF.SIZE_32,
  animateOnHover: !0
}),
x = (0, l.Fg)(),
L = (0, i.ap)(x),
h = o.ZP.getName(e),
f = L ? d.Z : u.Z;
  return null == e ? null : (0, t.jsxs)('div', {
className: p.attributionBannerContainer,
children: [
  (0, t.jsx)('div', {
    className: p.avatarContainer,
    children: (0, t.jsx)(r.Avatar, {
      src: s,
      'aria-label': e.username,
      size: c.EF.SIZE_32,
      ...n
    })
  }),
  (0, t.jsx)(r.Text, {
    variant: 'text-xs/bold',
    className: p.bannerHeader,
    children: _.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
      userName: h
    })
  }),
  (0, t.jsx)(f, {
    className: p.bannerIcon
  })
]
  });
};