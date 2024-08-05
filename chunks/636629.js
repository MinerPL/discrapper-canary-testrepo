var i = n(735250);
n(470079);
var s = n(913527),
  a = n.n(s),
  r = n(481060),
  l = n(730417),
  o = n(921944),
  c = n(689938),
  u = n(478752);
let d = (e, t) => ({
  bodyText: c.Z.Messages.DROPS_BANNER_NOTICE.format({
gameName: e.title,
endDate: a()(e.endDate, 'YYYY-MM-DD HH:mm').format('MMM Do'),
streamLengthRequirement: t
  }),
  articleUrl: e.articleUrl
});
t.Z = e => {
  let {
noticeType: t,
markAsDismissed: n,
partnerGame: s
  } = e, a = (0, l.au)(s);
  if (null == a)
return null;
  let {
bodyText: _,
articleUrl: E
  } = d(a.drop, a.config.streamLengthRequirement);
  return (0, i.jsxs)(r.Notice, {
className: u.colorGuildBlue,
children: [
  _,
  (0, i.jsx)(r.NoticeButtonAnchor, {
    href: E,
    target: '_blank',
    onClick: () => {
      n(o.L.PRIMARY);
    },
    children: c.Z.Messages.LEARN_MORE
  }),
  (0, i.jsx)(r.NoticeCloseButton, {
    onClick: () => {
      n(o.L.DISMISS);
    },
    noticeType: t
  })
]
  });
};