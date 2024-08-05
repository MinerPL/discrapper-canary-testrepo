n(47120);
var i = n(735250),
  s = n(470079),
  a = n(477690),
  r = n(481060),
  l = n(100527),
  o = n(367907),
  c = n(906732),
  u = n(524444),
  d = n(624138),
  _ = n(453070),
  E = n(373228),
  I = n(419922),
  m = n(217588),
  T = n(981631),
  h = n(474936),
  N = n(467481);
let C = (0, d.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
  f = e => {
if (null != e)
  o.ZP.trackWithMetadata(T.rMx.EXPRESSION_TOOLTIP_VIEWED, {
    type: h.cd.STICKER_IN_MESSAGE_HOVER,
    expression_id: e.id,
    expression_name: e.name,
    is_animated: (0, E.aQ)(e.format_type),
    is_custom: (0, E.z)(e.type)
  });
  };
t.Z = e => {
  let {
renderableSticker: t,
channel: n,
isInteracting: a
  } = e, [o, d] = s.useState(!0), [E, T] = s.useState(String(Date.now())), [h] = (0, _.XW)(t, a), {
analyticsLocations: p
  } = (0, c.ZP)(l.Z.STICKER_MESSAGE), g = (0, i.jsxs)('span', {
className: N.stickerName,
children: [
  (0, i.jsx)(r.StickerSmallIcon, {
    size: 'xs',
    color: 'currentColor',
    className: N.stickerIcon
  }),
  (null != h ? h : t).name
]
  });
  return (0, i.jsx)(c.Gt, {
value: p,
children: (0, i.jsx)(r.Popout, {
  align: 'center',
  animation: r.Popout.Animation.TRANSLATE,
  positionKey: E,
  onRequestClose: () => {
    d(!0);
  },
  renderPopout: e => (0, i.jsx)(m.Z, {
    ...e,
    renderableSticker: t,
    channel: n,
    refreshPositionKey: () => T(String(Date.now()))
  }),
  children: e => {
    let {
      onClick: n
    } = e;
    return (0, i.jsx)(r.Tooltip, {
      ...u.b_,
      shouldShow: o,
      text: (0, u.Y)(g),
      'aria-label': !1,
      onTooltipShow: () => {
        f(h);
      },
      children: e => (0, i.jsx)(r.Clickable, {
        ...e,
        className: N.clickableSticker,
        onClick: e => {
          d(!o), n(e);
        },
        tag: 'span',
        children: (0, i.jsx)(I.ZP, {
          isInteracting: a,
          size: C,
          sticker: null != h ? h : t
        })
      })
    });
  }
})
  });
};