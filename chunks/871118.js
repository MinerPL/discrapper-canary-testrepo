n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(543882),
  u = n(592125),
  d = n(496675),
  h = n(981631),
  p = n(689938),
  m = n(249134);

function _(e) {
  let {
isLoading: t,
noText: n,
previewText: a,
className: s
  } = e;
  return (0, i.jsx)('div', {
className: l()(m.emptyPreviewContainer, s),
children: t ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)('div', {
      className: m.emptyPreviewImage
    }),
    n ? null : (0, i.jsx)(o.Text, {
      variant: 'text-sm/normal',
      color: 'none',
      className: m.emptyPreviewText,
      children: null != a ? a : p.Z.Messages.STREAM_NO_PREVIEW
    })
  ]
})
  });
}

function f(e) {
  let {
stream: t,
className: n,
noText: s = !1
  } = e, o = (0, r.e7)([u.Z], () => u.Z.getBasicChannel(t.channelId)), f = (0, r.e7)([d.Z], () => null != o && d.Z.canBasicChannel(h.S7T.CONNECT, o)), {
url: E,
isLoading: g
  } = (0, r.cj)([c.Z], () => ({
url: f ? c.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
isLoading: f && c.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
  })), C = a.useRef(g ? null : E);
  a.useEffect(() => {
!g && (C.current = E);
  }, [
E,
g
  ]);
  let I = null == E || g ? C.current : E;
  return null == I ? (0, i.jsx)(_, {
className: n,
isLoading: g,
noText: s,
previewText: f ? void 0 : p.Z.Messages.STREAM_NO_PERMISSION_CTA
  }) : (0, i.jsx)('div', {
className: l()(n, m.root),
children: (0, i.jsx)('img', {
  src: I,
  alt: '',
  className: m.image
})
  });
}