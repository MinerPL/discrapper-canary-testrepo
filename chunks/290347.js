"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  r = a("120356"),
  l = a.n(r),
  d = a("442837"),
  o = a("481060"),
  i = a("607070"),
  u = a("605236"),
  c = a("524444"),
  _ = a("529815"),
  E = a("250496"),
  m = a("153124"),
  f = a("26290"),
  M = a("810090"),
  A = a("626135"),
  I = a("565216"),
  R = a("981631"),
  g = a("921944"),
  p = a("143869");
let O = e => {
    let {
      tagText: t,
      className: a
    } = e;
    return (0, s.jsx)(f.TextBadge, {
      className: l()(p.tag, a),
      text: t
    })
  },
  T = e => {
    let {
      header: t,
      subHeader: a,
      imageSrc: n,
      tagText: r,
      wideStyle: d
    } = e;
    return (0, s.jsxs)("div", {
      className: l()(p.featureCard, {
        [p.wideStyle]: d
      }),
      children: [null != r ? (0, s.jsx)(O, {
        tagText: r,
        className: p.featureCardTag
      }) : null, (0, s.jsx)("img", {
        alt: "",
        className: l()(p.featureCardImg, {
          [p.wideStyle]: d
        }),
        src: n
      }), (0, s.jsxs)("div", {
        className: p.featureCardTextGroup,
        children: [(0, s.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          className: p.featureCardTextHeader,
          children: t
        }), (0, s.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: a
        })]
      })]
    })
  };

function h(e) {
  let {
    className: t,
    renderModalProps: a,
    heroArt: r,
    heroArtClassName: f,
    modalDismissibleContent: O,
    modalTopExtra: h,
    header: L,
    headerClassName: C,
    subHeader: N,
    subHeaderExtra: P,
    featureCards: x,
    changeLogId: D,
    button: b
  } = e, {
    onClose: y,
    transitionState: S
  } = a, v = (0, m.useUID)(), j = x.length % 2 == 0, H = (0, d.useStateFromStores)([i.default], () => i.default.useReducedMotion), [U, F] = n.useState(Date.now()), [k, G] = n.useState(0), [w, B] = n.useState(0), [V, K] = n.useState(!1), [Y, W] = n.useState(!0), z = n.useRef(U), q = n.useRef(k), Z = n.useRef(w), J = n.useRef(V), Q = n.useRef(Y);

  function X() {
    let e = Date.now(),
      t = e - z.current,
      a = q.current,
      s = Z.current;
    return J.current && (G(a += t), !Q.current && B(s += t)), F(e), [a, s]
  }
  return n.useEffect(() => {
    z.current = U, q.current = k, Z.current = w, J.current = V, Q.current = Y
  }, [U, k, w, V, Y]), n.useEffect(() => () => {
    if ("video" === r.type || "embed" === r.type) {
      let [e, t] = X();
      A.default.track(R.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: D,
        seconds_played: Math.round(e / 1e3)
      }), A.default.track(R.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: D,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [D, r]), n.useEffect(() => {
    null != O && (0, u.requestMarkDismissibleContentAsShown)(O);
    let e = Date.now();
    return A.default.track(R.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: D
    }), () => {
      A.default.track(R.AnalyticEvents.CHANGE_LOG_CLOSED, {
        change_log_id: D,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != O && (0, u.markDismissibleContentAsDismissed)(O, {
        dismissAction: g.ContentDismissActionType.DISMISS
      })
    }
  }, [O, D]), (0, s.jsxs)(o.ModalRoot, {
    className: l()(p.root, t),
    transitionState: S,
    "aria-labelledby": v,
    children: [(0, s.jsx)(o.ModalCloseButton, {
      className: p.closeButton,
      onClick: y
    }), (0, s.jsx)(I.default, {
      className: p.splash
    }), null == h ? void 0 : h(), (0, s.jsxs)(o.ModalContent, {
      className: p.content,
      children: [(0, s.jsx)(o.Heading, {
        variant: "display-md",
        className: l()(p.headerText, C),
        children: L
      }), "video" === r.type ? (0, s.jsx)(M.default, {
        className: l()(p.video, f),
        autoPlay: !H,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: r.src,
        poster: r.poster,
        onPlay: e => {
          A.default.track(R.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: D
          }), F(Date.now()), K(!0), W(e.currentTarget.muted)
        },
        onEnded: e => {
          X(), W(e.currentTarget.muted), K(!1)
        },
        onVolumeChange: e => {
          X(), W(e.currentTarget.muted)
        },
        onPause: e => {
          X(), W(e.currentTarget.muted), K(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === r.type ? (0, s.jsx)(_.EmbedVideo, {
        className: l()(p.video, f),
        allowFullScreen: !1,
        href: r.href,
        thumbnail: r.thumbnail,
        video: r.embed,
        provider: E.SupportedEmbedIFrame.YOUTUBE,
        maxWidth: r.embed.width,
        maxHeight: r.embed.height,
        renderVideoComponent: c.renderVideoComponent,
        renderImageComponent: c.renderImageComponent,
        renderLinkComponent: c.renderMaskedLinkComponent,
        onPlay: () => {
          A.default.track(R.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: D
          })
        }
      }) : "image" === r.type ? (0, s.jsx)("img", {
        alt: "",
        className: l()(p.video, f),
        src: r.src
      }) : null, (0, s.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        className: p.bodyText,
        children: N
      }), null == P ? void 0 : P(), (0, s.jsx)("div", {
        className: l()(p.featureCardGroup, {
          [p.wideStyle]: j
        }),
        children: x.map((e, t) => (0, s.jsx)(T, {
          ...e,
          wideStyle: j
        }, "".concat(e.header, "_").concat(t)))
      }), b()]
    })]
  })
}