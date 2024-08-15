n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(481060),
  r = n(871118),
  o = n(689938),
  c = n(149050);

function u(e) {
  let {
stream: t,
isSmall: n,
selected: a,
isSelfStream: u
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(r.Z, {
    className: s()(c.absoluteFill, c.streamPreviewOpacity),
    stream: t,
    noText: !0
  }),
  !a && (0, i.jsxs)('div', {
    className: s()(c.content, c.streamUnavailable, {
      [c.small]: n
    }),
    children: [
      (0, i.jsx)(l.Text, {
        className: c.streamUnavailableText,
        color: 'always-white',
        variant: n ? 'text-sm/semibold' : 'text-md/semibold',
        children: u ? o.Z.Messages.CONSOLE_STREAMING : o.Z.Messages.CONSOLE_STREAM_UNAVAILABLE
      }),
      (0, i.jsx)(l.TooltipContainer, {
        text: u ? o.Z.Messages.CONSOLE_STREAMING_TOOLTIP : o.Z.Messages.CONSOLE_STREAM_UNAVAILABLE_TOOLTIP,
        className: c.darkCircle,
        children: (0, i.jsx)('div', {
          children: (0, i.jsx)(l.ScreenSlashIcon, {
            size: 'md',
            color: 'currentColor',
            className: c.stopStreamIcon,
            colorClass: c.stopStreamForeground
          })
        })
      })
    ]
  })
]
  });
}