var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(528963),
  o = n(143740),
  c = n(727218),
  d = n(212342),
  u = n(689938),
  _ = n(782944);
t.Z = e => {
  let {
channelId: t,
messageId: n
  } = e, E = (0, s.e7)([d.Z], () => d.Z.shouldShowBump(n), [n]), I = a.useCallback(() => {
l.Z.dismissPublishBump(n), (0, o.Z)(t, n);
  }, [
t,
n
  ]), m = a.useCallback(() => {
l.Z.dismissPublishBump(n);
  }, [n]), T = a.useCallback(() => {
l.Z.permanentlyHidePublishBump(t);
  }, [t]);
  return E ? (0, i.jsxs)('div', {
className: _.container,
children: [
  (0, i.jsxs)('div', {
    className: _.bumpBox,
    children: [
      (0, i.jsx)(r.AnnouncementsIcon, {
        size: 'xs',
        color: 'currentColor',
        className: _.icon
      }),
      (0, i.jsx)(c.Z, {
        className: _.tagline,
        size: c.Z.Sizes.SIZE_14,
        children: u.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP
      }),
      (0, i.jsx)(r.Button, {
        color: r.Button.Colors.LINK,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.MIN,
        className: _.publish,
        onClick: I,
        children: u.Z.Messages.NEWS_CHANNEL_PUBLISH
      }),
      (0, i.jsx)(r.Clickable, {
        onClick: m,
        children: (0, i.jsx)(r.CircleXIcon, {
          size: 'xs',
          color: 'currentColor',
          className: _.closeIcon
        })
      })
    ]
  }),
  (0, i.jsx)(r.Text, {
    color: 'text-muted',
    className: _.hidePermanently,
    variant: 'text-sm/normal',
    children: (0, i.jsx)(r.Clickable, {
      onClick: T,
      children: u.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
    })
  })
]
  }) : null;
};