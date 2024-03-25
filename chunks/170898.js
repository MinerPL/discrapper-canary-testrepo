"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("298386"),
  o = n("77078"),
  u = n("812204"),
  d = n("685665"),
  c = n("649844"),
  E = n("697218"),
  f = n("216422"),
  _ = n("994402"),
  T = n("719923"),
  I = n("167877"),
  m = n("646718"),
  N = n("782340"),
  p = n("452207");

function S(e) {
  let {
    attachmentProps: t,
    channelType: n,
    children: l
  } = e, [S, A] = a.useState(!1), C = a.useRef(null), h = E.default.getCurrentUser(), g = (0, T.isPremiumExactly)(h, m.PremiumTypes.TIER_2), M = I.NitroBrandedAttachmentExperiment.useExperiment({
    location: "PremiumAttachmentWrapper"
  }, {
    autoTrackExposure: !1
  }).enabled, {
    analyticsLocations: O
  } = (0, d.default)(u.default.CHANNEL_TEXT_AREA, u.default.MESSAGE_ATTACHMENT), R = t.map(e => e.attachment.size).sort().pop(), v = r.ChannelTypesSets.GUILD.has(n) ? 104857600 : 26214400;
  if (a.useEffect(() => () => {
      null != C.current && clearTimeout(C.current)
    }, []), null == R || R < v) return (0, s.jsx)(s.Fragment, {
    children: l
  });
  let L = t.filter(e => (0, _.isMediaAttachment)((0, _.getAttachmentKind)(e.attachment, e.inlineMedia))).length > 0,
    P = e => {
      I.NitroBrandedAttachmentExperiment.trackExposure({
        location: "PremiumAttachmentWrapper_handleMouseOver"
      }), M && (null != C.current && clearTimeout(C.current), A(!0), e && (C.current = setTimeout(() => {
        A(!1)
      }, 3e3)))
    },
    D = () => {
      M && (null != C.current && clearTimeout(C.current), C.current = setTimeout(() => {
        A(!1)
      }, 300))
    };
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)("div", {
      className: i(p.nitroBorder, {
        [p.nitroBorderHover]: S
      }),
      onFocus: () => P(!0),
      onMouseEnter: () => P(!0),
      onBlur: D,
      onMouseLeave: D,
      children: L ? l : (0, s.jsx)("div", {
        className: p.negativeTop,
        children: l
      })
    }), (0, s.jsx)("div", {
      className: p.extraNitroPill,
      onBlur: D,
      onMouseLeave: D,
      children: (0, s.jsx)(o.Tooltip, {
        text: g ? N.default.Messages.PREMIUM_ATTACHMENT_HOVER_SUBSCRIBER : N.default.Messages.PREMIUM_ATTACHMENT_HOVER_NON_SUBSCRIBER,
        position: "right",
        children: e => (0, s.jsxs)(o.Clickable, {
          ...e,
          className: i(p.nitroPill, {
            [p.nitroPillHover]: S,
            [p.nitroPillPointerCursor]: !g
          }),
          onFocus: () => P(!1),
          onMouseOver: () => P(!1),
          onClick: () => {
            !g && (0, c.default)({
              subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: O
            })
          },
          children: [(0, s.jsx)(f.default, {
            className: p.nitroWheel
          }), (0, s.jsx)(o.Text, {
            className: p.nitroText,
            variant: "text-xxs/semibold",
            children: N.default.Messages.POWERED_BY_NITRO
          })]
        })
      })
    })]
  })
}