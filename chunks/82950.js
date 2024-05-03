"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("481060"),
  o = n("367907"),
  u = n("465670"),
  d = n("626135"),
  c = n("986332"),
  f = n("428695"),
  E = n("981631"),
  h = n("689938"),
  _ = n("85488");
let C = i().debounce(o.default.trackWithMetadata, 500),
  S = e => {
    let {
      guild: t,
      title: n,
      message: l,
      image: i,
      type: c,
      imageMarginX: f,
      imageMarginTop: S,
      trackingSource: m,
      undismissable: p,
      onDismissed: I,
      onClick: T,
      cta: g,
      ctaColor: A
    } = e;
    s.useEffect(() => {
      C(E.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
        notice_type: c,
        guild_id: t.id
      })
    }, [t.id, c]);
    let N = null;
    "function" == typeof g ? N = g() : null != g && (N = (0, a.jsx)(r.Button, {
      className: _.btn,
      size: r.Button.Sizes.SMALL,
      onClick: () => {
        null != c && d.default.track(E.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
          source: m,
          guild_id: t.id,
          notice_type: c
        }), null == T || T()
      },
      fullWidth: !0,
      color: A,
      children: g
    }));
    let v = null != f ? "".concat(f, "px") : "16px";
    return (0, a.jsxs)("div", {
      className: _.channelNotice,
      children: [!0 === p ? null : (0, a.jsx)(r.Clickable, {
        onClick: () => {
          o.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
            notice_type: c
          }), null == I || I()
        },
        className: _.close,
        "aria-label": h.default.Messages.DISMISS,
        children: (0, a.jsx)(u.default, {
          className: _.closeIcon
        })
      }), (0, a.jsx)("div", {
        className: _.imageContainer,
        style: {
          marginTop: "".concat(S, "px"),
          marginLeft: v,
          marginRight: v
        },
        children: (0, a.jsx)("img", {
          className: _.image,
          src: i,
          alt: ""
        })
      }), (0, a.jsxs)("div", {
        className: _.message,
        children: [null != n ? (0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: _.title,
          children: n
        }) : null, (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: l
        }), N]
      })]
    })
  };
t.default = function(e) {
  let {
    showRedesignedChannelNotice: t
  } = (0, c.useChannelNoticeRedesignExperiment)(!0);
  return t ? (0, a.jsx)(f.default, {
    ...e
  }) : (0, a.jsx)(S, {
    ...e
  })
}