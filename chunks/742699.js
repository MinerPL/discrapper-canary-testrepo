o.d(n, {
  Z: function() {
return d;
  }
});
var t = o(735250);
o(470079);
var i = o(481060),
  r = o(63063),
  s = o(921869),
  c = o(514161),
  l = o(981631),
  a = o(689938),
  C = o(233820);

function u() {
  return (0, t.jsx)(c.yC, {
children: (0, t.jsx)(c.Ux, {
  text: a.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
  children: (0, t.jsx)(i.TvIcon, {
    size: 'md',
    color: 'currentColor'
  })
})
  });
}

function d(e) {
  let {
onContinue: n,
onClose: o
  } = e, i = r.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION);
  return (0, t.jsx)(s.m, {
platformType: l.ABu.CRUNCHYROLL,
headerConnect: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
body: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
learnMoreLink: i,
onClose: o,
onContinue: n,
img: (0, t.jsx)('img', {
  src: C,
  width: 234,
  height: 152,
  alt: ''
}),
valueProps: (0, t.jsx)(u, {})
  });
}