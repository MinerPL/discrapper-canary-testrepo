n.d(t, {
  Z: function() {
return _;
  }
});
var a = n(735250),
  s = n(470079),
  r = n(481060),
  l = n(665906),
  i = n(499033),
  o = n(585483),
  c = n(456269),
  d = n(228392),
  u = n(981631),
  m = n(689938),
  h = n(826507);

function _(e) {
  let {
channelName: t,
guildId: _,
tagFilter: g,
channel: x
  } = e, C = (0, c.r_)(x), f = (0, l.cD)(x), p = x.isMediaChannel(), T = s.useCallback(() => {
(0, d.qz)(), (0, r.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('18417').then(n.bind(n, 740696));
  return t => (0, a.jsx)(e, {
    ...t,
    guildId: _
  });
});
  }, [_]), I = g.size > 0, E = f || C, N = !I && C && !p, b = s.useCallback(() => N ? T() : f ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)(), [
T,
N,
f
  ]);
  return (0, a.jsxs)('div', {
className: h.container,
children: [
  (0, a.jsxs)('div', {
    className: h.iconContainer,
    children: [
      (0, a.jsx)('div', {
        className: h.icon,
        children: (0, a.jsx)(r.ChatIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 30,
          height: 30
        })
      }),
      (0, a.jsx)(i.Z, {
        className: h.stars
      })
    ]
  }),
  (0, a.jsx)(r.Heading, {
    className: h.header,
    variant: 'heading-md/semibold',
    children: I ? m.Z.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
      numTags: g.size
    }) : m.Z.Messages.FORUM_EMPTY_STATE_TITLE
  }),
  (0, a.jsx)(r.Text, {
    color: 'header-secondary',
    variant: 'text-sm/normal',
    children: I ? m.Z.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
      numTags: g.size
    }) : m.Z.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
      channelName: t
    })
  }),
  E && (0, a.jsxs)(r.Button, {
    look: r.Button.Looks.BLANK,
    size: r.Button.Sizes.MIN,
    color: r.Button.Colors.GREEN,
    onClick: b,
    className: h.cta,
    innerClassName: h.button,
    children: [
      N ? m.Z.Messages.FORUM_EMPTY_STATE_CTA : m.Z.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA,
      (0, a.jsx)(r.ChevronSmallRightIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 12
      })
    ]
  })
]
  });
}