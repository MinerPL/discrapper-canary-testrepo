n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(543882),
  d = n(592125),
  u = n(496675),
  h = n(981631),
  p = n(689938),
  m = n(249134);

function _(e) {
  let {
isLoading: t,
noText: n,
previewText: a,
className: l
  } = e;
  return (0, i.jsx)('div', {
className: s()(m.emptyPreviewContainer, l),
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
noText: l = !1
  } = e, o = (0, r.e7)([d.Z], () => d.Z.getBasicChannel(t.channelId)), f = (0, r.e7)([u.Z], () => null != o && u.Z.canBasicChannel(h.S7T.CONNECT, o)), {
url: E,
isLoading: C
  } = (0, r.cj)([c.Z], () => ({
url: f ? c.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
isLoading: f && c.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
  })), g = a.useRef(C ? null : E);
  a.useEffect(() => {
!C && (g.current = E);
  }, [
E,
C
  ]);
  let I = null == E || C ? g.current : E;
  return null == I ? (0, i.jsx)(_, {
className: n,
isLoading: C,
noText: l,
previewText: f ? void 0 : p.Z.Messages.STREAM_NO_PERMISSION_CTA
  }) : (0, i.jsx)('div', {
className: s()(n, m.root),
children: (0, i.jsx)('img', {
  src: I,
  alt: '',
  className: m.image
})
  });
}