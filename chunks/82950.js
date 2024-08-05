var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(481060),
  o = n(367907),
  c = n(626135),
  d = n(986332),
  u = n(428695),
  _ = n(981631),
  h = n(689938),
  E = n(247397);
let I = r().debounce(o.ZP.trackWithMetadata, 500),
  m = e => {
let {
  guild: t,
  title: n,
  message: s,
  image: r,
  type: d,
  imageMarginX: u,
  imageMarginTop: m,
  trackingSource: g,
  undismissable: p,
  onDismissed: T,
  onClick: S,
  cta: f,
  ctaColor: C
} = e;
a.useEffect(() => {
  I(_.rMx.CHANNEL_NOTICE_VIEWED, {
    notice_type: d,
    guild_id: t.id
  });
}, [
  t.id,
  d
]);
let N = null;
'function' == typeof f ? N = f() : null != f && (N = (0, i.jsx)(l.Button, {
  className: E.btn,
  size: l.Button.Sizes.SMALL,
  onClick: () => {
    null != d && c.default.track(_.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
      source: g,
      guild_id: t.id,
      notice_type: d
    }), null == S || S();
  },
  fullWidth: !0,
  color: C,
  children: f
}));
let A = null != u ? ''.concat(u, 'px') : '16px';
return (0, i.jsxs)('div', {
  className: E.channelNotice,
  children: [
    !0 === p ? null : (0, i.jsx)(l.Clickable, {
      onClick: () => {
        o.ZP.trackWithMetadata(_.rMx.CHANNEL_NOTICE_CLOSED, {
          notice_type: d
        }), null == T || T();
      },
      className: E.close,
      'aria-label': h.Z.Messages.DISMISS,
      children: (0, i.jsx)(l.CloseSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: E.closeIcon
      })
    }),
    (0, i.jsx)('div', {
      className: E.imageContainer,
      style: {
        marginTop: ''.concat(m, 'px'),
        marginLeft: A,
        marginRight: A
      },
      children: (0, i.jsx)('img', {
        className: E.image,
        src: r,
        alt: ''
      })
    }),
    (0, i.jsxs)('div', {
      className: E.message,
      children: [
        null != n ? (0, i.jsx)(l.Heading, {
          variant: 'heading-md/semibold',
          className: E.title,
          children: n
        }) : null,
        (0, i.jsx)(l.Text, {
          variant: 'text-sm/normal',
          children: s
        }),
        N
      ]
    })
  ]
});
  };
t.Z = function(e) {
  let {
showRedesignedChannelNotice: t
  } = (0, d.o)(!0);
  return t ? (0, i.jsx)(u.Z, {
...e
  }) : (0, i.jsx)(m, {
...e
  });
};