var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(278297),
  l = n(138599),
  u = n(689938),
  c = n(14162);
t.Z = e => {
  let {
onPlay: t,
externalURL: n,
className: i,
renderLinkComponent: d,
inactive: _,
messageId: E,
channelId: f
  } = e;
  return (0, r.jsx)(o.G.Consumer, {
children: e => (0, r.jsxs)('div', {
  className: a()(i, c.wrapper, {
    [c.disableInteractions]: e.disableInteractions
  }),
  children: [
    _ && null == t ? (0, r.jsx)('div', {
      className: c.iconWrapper,
      children: (0, r.jsx)(s.PlayIcon, {
        size: 'xs',
        color: 'currentColor',
        className: c.iconPlay
      })
    }) : null,
    null != t ? (0, r.jsx)(s.Clickable, {
      onClick: t,
      className: a()(c.iconWrapperActive),
      tabIndex: _ ? -1 : 0,
      'aria-label': u.Z.Messages.PLAY,
      children: (0, r.jsx)(s.PlayIcon, {
        size: 'xs',
        color: 'currentColor',
        className: c.iconPlay
      })
    }) : null,
    null != n ? d({
      href: n,
      target: '_blank',
      rel: 'noreferrer noopener',
      className: c.iconWrapperActive,
      children: (0, r.jsx)(l.Z, {
        'aria-label': u.Z.Messages.OPEN_LINK,
        className: null != t ? c.iconExternalMargins : c.iconExternal
      }),
      messageId: E,
      channelId: f
    }) : null
  ]
})
  });
};