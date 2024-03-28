"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("607070"),
  d = n("605236"),
  c = n("524444"),
  f = n("529815"),
  E = n("250496"),
  h = n("153124"),
  _ = n("26290"),
  C = n("810090"),
  m = n("626135"),
  S = n("565216"),
  I = n("981631"),
  p = n("921944"),
  T = n("816277");
let g = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, a.jsx)(_.TextBadge, {
      className: i()(T.tag, n),
      text: t
    })
  },
  A = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: s,
      tagText: l,
      wideStyle: r
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(T.featureCard, {
        [T.wideStyle]: r
      }),
      children: [null != l ? (0, a.jsx)(g, {
        tagText: l,
        className: T.featureCardTag
      }) : null, (0, a.jsx)("img", {
        alt: "",
        className: i()(T.featureCardImg, {
          [T.wideStyle]: r
        }),
        src: s
      }), (0, a.jsxs)("div", {
        className: T.featureCardTextGroup,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          className: T.featureCardTextHeader,
          children: t
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: n
        })]
      })]
    })
  };

function N(e) {
  let {
    className: t,
    renderModalProps: n,
    heroArt: l,
    heroArtClassName: _,
    modalDismissibleContent: g,
    modalTopExtra: N,
    header: v,
    headerClassName: O,
    subHeader: R,
    subHeaderExtra: L,
    featureCards: P,
    changeLogId: M,
    button: y
  } = e, {
    onClose: D,
    transitionState: b
  } = n, x = (0, h.useUID)(), U = P.length % 2 == 0, j = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), [G, w] = s.useState(Date.now()), [k, F] = s.useState(0), [B, H] = s.useState(0), [V, Y] = s.useState(!1), [W, K] = s.useState(!0), z = s.useRef(G), q = s.useRef(k), Q = s.useRef(B), Z = s.useRef(V), X = s.useRef(W);

  function J() {
    let e = Date.now(),
      t = e - z.current,
      n = q.current,
      a = Q.current;
    return Z.current && (F(n += t), !X.current && H(a += t)), w(e), [n, a]
  }
  return s.useEffect(() => {
    z.current = G, q.current = k, Q.current = B, Z.current = V, X.current = W
  }, [G, k, B, V, W]), s.useEffect(() => () => {
    let [e, t] = J();
    m.default.track(I.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
      change_log_id: M,
      seconds_played: Math.round(e / 1e3)
    }), m.default.track(I.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
      change_log_id: M,
      seconds_unmuted: Math.round(t / 1e3)
    })
  }, [M]), s.useEffect(() => {
    null != g && (0, d.requestMarkDismissibleContentAsShown)(g);
    let e = Date.now();
    return m.default.track(I.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: M
    }), () => {
      m.default.track(I.AnalyticEvents.CHANGE_LOG_CLOSED, {
        change_log_id: M,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != g && (0, d.markDismissibleContentAsDismissed)(g, {
        dismissAction: p.ContentDismissActionType.DISMISS
      })
    }
  }, [g, M]), (0, a.jsxs)(o.ModalRoot, {
    className: i()(T.root, t),
    transitionState: b,
    "aria-labelledby": x,
    children: [(0, a.jsx)(o.ModalCloseButton, {
      className: T.closeButton,
      onClick: D
    }), (0, a.jsx)(S.default, {
      className: T.splash
    }), null == N ? void 0 : N(), (0, a.jsxs)(o.ModalContent, {
      className: T.content,
      children: [(0, a.jsx)(o.Heading, {
        variant: "display-md",
        className: i()(T.headerText, O),
        children: v
      }), "video" === l.type ? (0, a.jsx)(C.default, {
        className: i()(T.video, _),
        autoPlay: !j,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: l.src,
        poster: l.poster,
        onPlay: e => {
          m.default.track(I.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: M
          }), w(Date.now()), Y(!0), K(e.currentTarget.muted)
        },
        onEnded: e => {
          J(), K(e.currentTarget.muted), Y(!1)
        },
        onVolumeChange: e => {
          J(), K(e.currentTarget.muted)
        },
        onPause: e => {
          J(), K(e.currentTarget.muted), Y(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === l.type ? (0, a.jsx)(f.EmbedVideo, {
        className: i()(T.video, _),
        allowFullScreen: !1,
        href: l.href,
        thumbnail: l.thumbnail,
        video: l.embed,
        provider: E.SupportedEmbedIFrame.YOUTUBE,
        maxWidth: l.embed.width,
        maxHeight: l.embed.height,
        renderVideoComponent: c.renderVideoComponent,
        renderImageComponent: c.renderImageComponent,
        renderLinkComponent: c.renderMaskedLinkComponent,
        onPlay: () => {
          m.default.track(I.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: M
          })
        }
      }) : "image" === l.type ? (0, a.jsx)("img", {
        alt: "",
        className: i()(T.video, _),
        src: l.src
      }) : null, (0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        className: T.bodyText,
        children: R
      }), null == L ? void 0 : L(), (0, a.jsx)("div", {
        className: i()(T.featureCardGroup, {
          [T.wideStyle]: U
        }),
        children: P.map((e, t) => (0, a.jsx)(A, {
          ...e,
          wideStyle: U
        }, "".concat(e.header, "_").concat(t)))
      }), y()]
    })]
  })
}