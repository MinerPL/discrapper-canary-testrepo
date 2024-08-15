var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(481060),
  o = n(442837),
  c = n(792125),
  d = n(547280),
  u = n(678513),
  _ = n(981631),
  E = n(689938),
  h = n(299353);
let m = (0, c.Q)(_.BRd.DARK);
t.Z = function(e) {
  let {
guild: t
  } = e, s = (0, o.e7)([u.Z], () => u.Z.getActiveGuildSignUp(t.id)), c = a.useCallback(() => {
null != s && (0, l.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('22862'),
    n.e('78938')
  ]).then(n.bind(n, 646202));
  return n => (0, i.jsx)(e, {
    ...n,
    target: s,
    guildId: t.id
  });
});
  }, [
s,
t.id
  ]), I = a.useCallback(() => {
null != s && (0, d.b)(s.key, s.dismissibleContent);
  }, [s]);
  if (null == s)
return null;
  let g = 'url('.concat(s.backgroundAssetUrl, ') black top / cover no-repeat');
  return (0, i.jsx)(l.ThemeContextProvider, {
theme: _.BRd.DARK,
children: (0, i.jsx)('div', {
  className: r()(h.container, m),
  children: (0, i.jsxs)('div', {
    className: h.card,
    style: {
      background: g
    },
    children: [
      (0, i.jsxs)('div', {
        className: h.eyebrow,
        children: [
          (0, i.jsx)(l.EnvelopeIcon, {
            size: 'xxs',
            color: 'currentColor'
          }),
          (0, i.jsx)(l.Text, {
            variant: 'text-xs/semibold',
            color: 'none',
            children: E.Z.Messages.SIGNUP_NOTICE_EYEBROW
          })
        ]
      }),
      (0, i.jsx)(l.Heading, {
        variant: 'heading-sm/medium',
        children: s.noticeHeader
      }),
      (0, i.jsx)(l.Button, {
        className: h.button,
        color: 'none',
        onClick: c,
        children: (0, i.jsx)(l.Text, {
          variant: 'text-sm/medium',
          color: 'none',
          children: E.Z.Messages.SIGNUP_NOTICE_CTA
        })
      }),
      (0, i.jsx)('div', {
        className: h.dismiss,
        children: (0, i.jsx)(l.Clickable, {
          onClick: I,
          children: (0, i.jsx)(l.XSmallIcon, {
            size: 'xs',
            color: 'currentColor'
          })
        })
      })
    ]
  })
})
  });
};