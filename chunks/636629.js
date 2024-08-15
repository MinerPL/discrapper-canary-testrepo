var i = n(735250);
n(470079);
var a = n(913527),
  s = n.n(a),
  r = n(481060),
  l = n(730417),
  o = n(921944),
  c = n(689938),
  u = n(959823);
let d = (e, t) => ({
  bodyText: c.Z.Messages.DROPS_BANNER_NOTICE.format({
gameName: e.title,
endDate: s()(e.endDate, 'YYYY-MM-DD HH:mm').format('MMM Do'),
streamLengthRequirement: t
  }),
  articleUrl: e.articleUrl
});
t.Z = e => {
  let {
noticeType: t,
markAsDismissed: n,
partnerGame: a
  } = e, s = (0, l.au)(a);
  if (null == s)
return null;
  let {
bodyText: _,
articleUrl: E
  } = d(s.drop, s.config.streamLengthRequirement);
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