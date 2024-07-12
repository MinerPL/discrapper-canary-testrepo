var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(392711),
  o = n(481060),
  c = n(367907),
  u = n(626135),
  d = n(981631),
  h = n(689938),
  p = n(366846);
let _ = (0, s.debounce)(c.ZP.trackWithMetadata, 500);
t.Z = function(e) {
  let {
guild: t,
title: n,
message: r,
image: s,
type: f,
imageStyles: m,
imageMarginX: g,
imageMarginTop: C,
trackingSource: I,
undismissable: E,
onDismissed: N,
onClick: x,
cta: S,
ctaColor: v,
centerText: Z,
className: T
  } = e;
  l.useEffect(() => {
_(d.rMx.CHANNEL_NOTICE_VIEWED, {
  notice_type: f,
  guild_id: t.id
});
  }, [
t.id,
f
  ]);
  let L = null;
  'function' == typeof S ? L = S() : null != S && (L = (0, i.jsx)(o.Button, {
className: p.button,
size: o.Button.Sizes.SMALL,
onClick: () => {
  null != f && u.default.track(d.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
    source: I,
    guild_id: t.id,
    notice_type: f
  }), null == x || x();
},
fullWidth: !0,
color: v,
children: S
  }));
  let A = null;
  'function' == typeof n ? A = n() : null != n && (A = (0, i.jsx)(o.Text, {
variant: 'text-md/medium',
color: 'header-primary',
className: a()(p.title, {
  [p.noImageTitle]: null == s
}, {
  [p.center]: Z
}),
children: n
  }));
  let b = null;
  'function' == typeof r ? b = r() : null != r && (b = (0, i.jsx)(o.Text, {
className: a()({
  [p.center]: Z
}),
variant: 'text-sm/normal',
color: 'text-muted',
children: r
  }));
  let M = null != g ? ''.concat(g, 'px') : '16px';
  return (0, i.jsxs)('div', {
className: a()(p.container, T),
children: [
  !0 === E ? null : (0, i.jsx)(o.Clickable, {
    onClick: () => {
      c.ZP.trackWithMetadata(d.rMx.CHANNEL_NOTICE_CLOSED, {
        notice_type: f
      }), null == N || N();
    },
    className: p.close,
    'aria-label': h.Z.Messages.DISMISS,
    children: (0, i.jsx)(o.CloseSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: p.closeIcon
    })
  }),
  null != s && (0, i.jsx)('div', {
    className: p.imageContainer,
    style: {
      marginTop: ''.concat(C, 'px'),
      marginLeft: M,
      marginRight: M
    },
    children: (0, i.jsx)('img', {
      className: p.image,
      style: m,
      src: s,
      alt: ''
    })
  }),
  (0, i.jsxs)('div', {
    className: p.message,
    children: [
      A,
      b,
      L
    ]
  })
]
  });
};