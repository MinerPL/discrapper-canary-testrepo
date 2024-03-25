"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n("77078"),
  u = n("716241"),
  d = n("945330"),
  c = n("599110"),
  f = n("49111"),
  E = n("782340"),
  h = n("231663");
let _ = (0, r.debounce)(u.default.trackWithMetadata, 500);
var C = function(e) {
  let {
    guild: t,
    title: n,
    message: l,
    image: r,
    type: C,
    imageStyles: S,
    imageMarginX: I,
    imageMarginTop: m,
    trackingSource: p,
    undismissable: T,
    onDismissed: g,
    onClick: A,
    cta: N,
    ctaColor: R,
    centerText: O
  } = e;
  s.useEffect(() => {
    _(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: C,
      guild_id: t.id
    })
  }, [t.id, C]);
  let v = null;
  "function" == typeof N ? v = N() : null != N && (v = (0, a.jsx)(o.Button, {
    className: h.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != C && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        source: p,
        guild_id: t.id,
        notice_type: C
      }), null == A || A()
    },
    fullWidth: !0,
    color: R,
    children: N
  }));
  let L = null;
  "function" == typeof n ? L = n() : null != n && (L = (0, a.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: i(h.title, {
      [h.noImageTitle]: null == r
    }, {
      [h.center]: O
    }),
    children: n
  }));
  let M = null != I ? "".concat(I, "px") : "16px";
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [!0 === T ? null : (0, a.jsx)(o.Clickable, {
      onClick: () => {
        u.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
          notice_type: C
        }), null == g || g()
      },
      className: h.close,
      "aria-label": E.default.Messages.DISMISS,
      children: (0, a.jsx)(d.default, {
        className: h.closeIcon
      })
    }), null != r && (0, a.jsx)("div", {
      className: h.imageContainer,
      style: {
        marginTop: "".concat(m, "px"),
        marginLeft: M,
        marginRight: M
      },
      children: (0, a.jsx)("img", {
        className: h.image,
        style: S,
        src: r,
        alt: ""
      })
    }), (0, a.jsxs)("div", {
      className: h.message,
      children: [L, (0, a.jsx)(o.Text, {
        className: i({
          [h.center]: O
        }),
        variant: "text-sm/normal",
        color: "text-muted",
        children: l
      }), v]
    })]
  })
}