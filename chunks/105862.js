t.d(n, {
  Z: function() {
return h;
  }
});
var i = t(735250),
  l = t(470079),
  a = t(780384),
  r = t(481060),
  s = t(410030),
  o = t(782568),
  c = t(63063),
  u = t(827498),
  d = t(888617),
  m = t(981631),
  p = t(689938),
  _ = t(720123),
  E = t(983008),
  A = t(478408);

function h() {
  let e = (0, s.ZP)(),
n = (0, a.ap)(e) ? A : E,
t = l.useCallback(() => {
  (0, o.Z)(c.Z.getArticleURL(m.BhN.LAUNCHING_APPS_WITH_SHAPES_BUTTON));
}, []),
{
  trackSectionImpressionRef: h
} = (0, d.Z)({
  sectionName: u.L3.NEW_TO_APPS,
  numItems: 1,
  numVisibleItems: 1
});
  return (0, i.jsxs)('div', {
ref: e => h.current = e,
className: _.container,
children: [
  (0, i.jsx)('img', {
    className: _.image,
    src: n,
    alt: '',
    'aria-hidden': !0
  }),
  (0, i.jsxs)('div', {
    className: _.body,
    children: [
      (0, i.jsx)(r.Heading, {
        variant: 'heading-lg/bold',
        color: 'header-primary',
        children: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-xs/normal',
        color: 'text-normal',
        children: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
      })
    ]
  }),
  (0, i.jsx)(r.Button, {
    size: r.Button.Sizes.MEDIUM,
    'aria-label': p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE_ARIA_LABEL.format({
      sectionTitle: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
      sectionBody: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
    }),
    onClick: t,
    children: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE
  })
]
  });
}