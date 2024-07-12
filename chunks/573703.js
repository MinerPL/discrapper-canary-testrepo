o.d(e, {
  Z: function() {
return d;
  }
});
var t = o(735250);
o(470079);
var r = o(481060),
  i = o(63063),
  c = o(376340),
  s = o(981631),
  l = o(689938),
  a = o(80069),
  C = o(38920);

function u() {
  return (0, t.jsx)('div', {
className: a.__invalid_getCrunchyrollApp,
children: (0, t.jsx)('div', {
  className: a.__invalid_getCrunchyrollAppBody,
  children: (0, t.jsx)(r.Text, {
    variant: 'text-sm/medium',
    color: 'header-secondary',
    children: (0, t.jsx)(r.Anchor, {
      href: i.Z.getArticleURL(s.BhN.CRUNCHYROLL_CONNECTION),
      children: l.Z.Messages.LEARN_MORE
    })
  })
})
  });
}

function d(n) {
  let {
onClose: e
  } = n;
  return (0, t.jsx)(c.L, {
img: (0, t.jsx)('img', {
  src: C,
  width: '224',
  height: '104',
  alt: ''
}),
title: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
body: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
content: (0, t.jsx)(u, {}),
onClose: e
  });
}