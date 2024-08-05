var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(481060),
  o = n(368666),
  c = n(871521),
  u = n(421924);
t.Z = a.memo(function(e) {
  let {
label: t,
participantCount: n,
onClick: a,
className: s,
collapsed: d,
speakers: h,
channel: p,
isStreamLive: m
  } = e;
  return (0, i.jsxs)(r.Clickable, {
onClick: a,
className: l()(u.container, s),
children: [
  null == h ? (0, i.jsx)(r.GroupIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20,
    className: u.micIcon
  }) : (0, i.jsx)(r.MicrophoneIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20,
    className: u.micIcon
  }),
  (0, i.jsxs)(r.Text, {
    color: 'header-primary',
    variant: 'text-md/semibold',
    className: u.text,
    children: [
      t,
      ' \u2014 ',
      n
    ]
  }),
  d && null != p && null != h && h.length > 0 && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(c.Z, {
        channel: p,
        speakers: h
      }),
      m && (0, i.jsx)(o.ZP, {})
    ]
  }),
  (0, i.jsx)(r.ChevronSmallDownIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20,
    className: l()(u.downIcon, {
      [u.upIcon]: d
    })
  })
]
  });
});