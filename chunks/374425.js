"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("477690"),
  i = n("481060"),
  r = n("100527"),
  o = n("367907"),
  u = n("906732"),
  d = n("524444"),
  c = n("836879"),
  f = n("624138"),
  E = n("453070"),
  _ = n("373228"),
  m = n("419922"),
  T = n("217588"),
  I = n("981631"),
  p = n("474936"),
  h = n("221940");
let N = (0, f.cssValueToNumber)(l.default.STICKERS_CONSTANTS_STICKER_DIMENSION),
  S = e => {
    null != e && o.default.trackWithMetadata(I.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
      type: p.PremiumUpsellTypes.STICKER_IN_MESSAGE_HOVER,
      expression_id: e.id,
      expression_name: e.name,
      is_animated: (0, _.isAnimatedSticker)(e.format_type),
      is_custom: (0, _.isCustomSticker)(e.type)
    })
  };
t.default = e => {
  let {
    renderableSticker: t,
    channel: n,
    isInteracting: l
  } = e, [o, f] = a.useState(!0), [_, I] = a.useState(String(Date.now())), [p] = (0, E.useStickerForRenderableSticker)(t, l), {
    analyticsLocations: C
  } = (0, u.default)(r.default.STICKER_MESSAGE), A = (0, s.jsxs)("span", {
    className: h.stickerName,
    children: [(0, s.jsx)(c.default, {
      className: h.stickerIcon
    }), (null != p ? p : t).name]
  });
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: C,
    children: (0, s.jsx)(i.Popout, {
      align: "center",
      animation: i.Popout.Animation.TRANSLATE,
      positionKey: _,
      onRequestClose: () => {
        f(!0)
      },
      renderPopout: e => (0, s.jsx)(T.default, {
        ...e,
        renderableSticker: t,
        channel: n,
        refreshPositionKey: () => I(String(Date.now()))
      }),
      children: e => {
        let {
          onClick: n
        } = e;
        return (0, s.jsx)(i.Tooltip, {
          ...d.EXPRESSION_TOOLTIP_PROPS,
          shouldShow: o,
          text: (0, d.renderClickableTooltipNode)(A),
          "aria-label": !1,
          onTooltipShow: () => {
            S(p)
          },
          children: e => (0, s.jsx)(i.Clickable, {
            ...e,
            className: h.clickableSticker,
            onClick: e => {
              f(!o), n(e)
            },
            tag: "span",
            children: (0, s.jsx)(m.default, {
              isInteracting: l,
              size: N,
              sticker: null != p ? p : t
            })
          })
        })
      }
    })
  })
}