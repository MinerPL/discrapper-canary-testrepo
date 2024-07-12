n.d(t, {
  Z: function() {
return d;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  r = n(204197),
  i = n(182294),
  l = n(689938),
  o = n(183598),
  c = n(144343);

function d(e) {
  var t;
  let {
referrer: n
  } = e, {
avatarSrc: d,
eventHandlers: _
  } = (0, r.Z)({
user: n,
size: i.EF.SIZE_32,
animateOnHover: !0
  });
  return (0, s.jsx)('div', {
className: o.attributionBannerContainer,
children: (0, s.jsxs)('div', {
  className: o.attributionBannerContent,
  children: [
    (0, s.jsx)('div', {
      className: o.iconContainer,
      children: (0, s.jsx)(a.Avatar, {
        className: o.icon,
        src: d,
        'aria-label': n.username,
        size: i.EF.SIZE_32,
        ..._
      })
    }),
    (0, s.jsx)(a.Heading, {
      variant: 'heading-lg/medium',
      className: o.textContainer,
      children: l.Z.Messages.REFERRAL_PROGRAM_SUBSCRIBER_HOMER_BANNER.format({
        username: null != (t = n).globalName ? t.globalName : t.username
      })
    }),
    (0, s.jsx)('img', {
      src: c,
      alt: '',
      className: o.attributionIcon
    })
  ]
})
  });
}