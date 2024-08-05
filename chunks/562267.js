n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(661824),
  l = n(913663),
  u = n(268350),
  c = n(419922),
  d = n(689938),
  _ = n(735210);
t.Z = i.memo(function(e) {
  var t;
  let {
channelId: n,
chatInputType: E
  } = e, [f, h] = i.useState(null), p = (0, a.e7)([l.Z], () => l.Z.getStickerPreview(n, E.drafts.type));
  return (null === (t = E.stickers) || void 0 === t ? void 0 : t.allowSending) && null != p && 0 !== p.length ? (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)('div', {
    className: _.stickerPreviews,
    children: p.map(e => (0, r.jsxs)('div', {
      className: _.stickerPreviewContainer,
      children: [
        (0, r.jsx)(s.Clickable, {
          onFocus: () => h(e.id),
          onBlur: () => h(null),
          className: _.closeButton,
          'aria-label': d.Z.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
            name: e.name
          }),
          onClick: () => (0, u.qB)(n, E.drafts.type),
          children: (0, r.jsx)('div', {
            className: _.closeIconContainer,
            children: (0, r.jsx)(s.CircleXIcon, {
              size: 'md',
              color: 'currentColor',
              className: _.closeIcon
            })
          })
        }),
        (0, r.jsx)(c.ZP, {
          isInteracting: f === e.id,
          className: _.stickerPreview,
          size: 48,
          sticker: e
        })
      ]
    }, e.id))
  }),
  (0, r.jsx)(o.Z, {
    className: _.stickerPreviewDivider
  })
]
  }) : null;
});