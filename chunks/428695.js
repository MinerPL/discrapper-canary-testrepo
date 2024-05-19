"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n("481060"),
  u = n("367907"),
  d = n("465670"),
  c = n("626135"),
  f = n("981631"),
  h = n("689938"),
  m = n("53116");
let C = (0, r.debounce)(u.default.trackWithMetadata, 500);
t.default = function(e) {
  let {
    guild: t,
    title: n,
    message: s,
    image: r,
    type: p,
    imageStyles: g,
    imageMarginX: E,
    imageMarginTop: _,
    trackingSource: S,
    undismissable: I,
    onDismissed: N,
    onClick: T,
    cta: A,
    ctaColor: L,
    centerText: v,
    className: x
  } = e;
  a.useEffect(() => {
    C(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
      notice_type: p,
      guild_id: t.id
    })
  }, [t.id, p]);
  let R = null;
  "function" == typeof A ? R = A() : null != A && (R = (0, l.jsx)(o.Button, {
    className: m.button,
    size: o.Button.Sizes.SMALL,
    onClick: () => {
      null != p && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
        source: S,
        guild_id: t.id,
        notice_type: p
      }), null == T || T()
    },
    fullWidth: !0,
    color: L,
    children: A
  }));
  let M = null;
  "function" == typeof n ? M = n() : null != n && (M = (0, l.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: i()(m.title, {
      [m.noImageTitle]: null == r
    }, {
      [m.center]: v
    }),
    children: n
  }));
  let y = null;
  "function" == typeof s ? y = s() : null != s && (y = (0, l.jsx)(o.Text, {
    className: i()({
      [m.center]: v
    }),
    variant: "text-sm/normal",
    color: "text-muted",
    children: s
  }));
  let O = null != E ? "".concat(E, "px") : "16px";
  return (0, l.jsxs)("div", {
    className: i()(m.container, x),
    children: [!0 === I ? null : (0, l.jsx)(o.Clickable, {
      onClick: () => {
        u.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
          notice_type: p
        }), null == N || N()
      },
      className: m.close,
      "aria-label": h.default.Messages.DISMISS,
      children: (0, l.jsx)(d.default, {
        className: m.closeIcon
      })
    }), null != r && (0, l.jsx)("div", {
      className: m.imageContainer,
      style: {
        marginTop: "".concat(_, "px"),
        marginLeft: O,
        marginRight: O
      },
      children: (0, l.jsx)("img", {
        className: m.image,
        style: g,
        src: r,
        alt: ""
      })
    }), (0, l.jsxs)("div", {
      className: m.message,
      children: [M, y, R]
    })]
  })
}