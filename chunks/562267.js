"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(913663),
  l = n(268350),
  u = n(419922),
  _ = n(696202),
  d = n(132338),
  c = n(689938),
  E = n(342743);
t.Z = r.memo(function(e) {
  var t;
  let {
    channelId: n,
    chatInputType: I
  } = e, [T, h] = r.useState(null), S = (0, s.e7)([a.Z], () => a.Z.getStickerPreview(n, I.drafts.type));
  return (null === (t = I.stickers) || void 0 === t ? void 0 : t.allowSending) && null != S && 0 !== S.length ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: E.stickerPreviews,
      children: S.map(e => (0, i.jsxs)("div", {
        className: E.stickerPreviewContainer,
        children: [(0, i.jsx)(o.Clickable, {
          onFocus: () => h(e.id),
          onBlur: () => h(null),
          className: E.closeButton,
          "aria-label": c.Z.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
            name: e.name
          }),
          onClick: () => (0, l.qB)(n, I.drafts.type),
          children: (0, i.jsx)("div", {
            className: E.closeIconContainer,
            children: (0, i.jsx)(_.Z, {
              className: E.closeIcon
            })
          })
        }), (0, i.jsx)(u.ZP, {
          isInteracting: T === e.id,
          className: E.stickerPreview,
          size: 48,
          sticker: e
        })]
      }, e.id))
    }), (0, i.jsx)(d.Z, {
      className: E.stickerPreviewDivider
    })]
  }) : null
})