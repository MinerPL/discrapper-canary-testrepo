n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(330711),
  o = n(442837),
  c = n(481060),
  d = n(607070),
  u = n(605236),
  _ = n(524444),
  h = n(529815),
  E = n(250496),
  I = n(153124),
  m = n(810090),
  g = n(626135),
  p = n(565216),
  T = n(981631),
  S = n(921944),
  C = n(757601);
let f = e => {
let {
  tagText: t,
  className: n
} = e;
return (0, i.jsx)(c.TextBadge, {
  className: r()(C.tag, n),
  text: t
});
  },
  N = e => {
let {
  header: t,
  subHeader: n,
  imageSrc: s,
  tagText: a,
  wideStyle: l
} = e;
return (0, i.jsxs)('div', {
  className: r()(C.featureCard, {
    [C.wideStyle]: l
  }),
  children: [
    null != a ? (0, i.jsx)(f, {
      tagText: a,
      className: C.featureCardTag
    }) : null,
    (0, i.jsx)('img', {
      alt: '',
      className: r()(C.featureCardImg, {
        [C.wideStyle]: l
      }),
      src: s
    }),
    (0, i.jsxs)('div', {
      className: C.featureCardTextGroup,
      children: [
        (0, i.jsx)(c.Heading, {
          variant: 'heading-md/extrabold',
          className: C.featureCardTextHeader,
          children: t
        }),
        (0, i.jsx)(c.Text, {
          variant: 'text-sm/normal',
          children: n
        })
      ]
    })
  ]
});
  };

function A(e) {
  let {
className: t,
renderModalProps: n,
heroArt: a,
heroArtClassName: f,
modalDismissibleContent: A,
modalTopExtra: Z,
header: L,
headerClassName: v,
subHeader: O,
subHeaderExtra: R,
featureCards: x,
changeLogId: b,
button: P,
body: M
  } = e, {
onClose: D,
transitionState: y
  } = n, j = (0, I.Dt)(), U = x.length % 2 == 0, G = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [k, w] = s.useState(Date.now()), [B, H] = s.useState(0), [V, F] = s.useState(0), [Y, W] = s.useState(!1), [z, K] = s.useState(!0), q = s.useRef(k), Q = s.useRef(B), X = s.useRef(V), J = s.useRef(Y), $ = s.useRef(z);

  function ee() {
let e = Date.now(),
  t = e - q.current,
  n = Q.current,
  i = X.current;
return J.current && (H(n += t), !$.current && F(i += t)), w(e), [
  n,
  i
];
  }
  return s.useEffect(() => {
q.current = k, Q.current = B, X.current = V, J.current = Y, $.current = z;
  }, [
k,
B,
V,
Y,
z
  ]), s.useEffect(() => () => {
if ('video' === a.type || 'embed' === a.type) {
  let [e, t] = ee();
  g.default.track(T.rMx.CHANGE_LOG_VIDEO_PLAYED, {
    change_log_id: b,
    seconds_played: Math.round(e / 1000)
  }), g.default.track(T.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
    change_log_id: b,
    seconds_unmuted: Math.round(t / 1000)
  });
}
  }, [
b,
a
  ]), s.useEffect(() => {
null != A && (0, u.kk)(A);
let e = Date.now();
return g.default.track(T.rMx.CHANGE_LOG_OPENED, {
  change_log_id: b
}), () => {
  g.default.track(T.rMx.CHANGE_LOG_CLOSED, {
    change_log_id: b,
    seconds_open: Math.round((Date.now() - e) / 1000)
  }), null != A && (0, u.EW)(A, {
    dismissAction: S.L.DISMISS
  });
};
  }, [
A,
b
  ]), (0, i.jsxs)(c.ModalRoot, {
className: r()(C.root, t),
transitionState: y,
'aria-labelledby': j,
children: [
  (0, i.jsx)(c.ModalCloseButton, {
    className: C.closeButton,
    onClick: D
  }),
  (0, i.jsx)(p.Z, {
    className: C.splash
  }),
  null == Z ? void 0 : Z(),
  (0, i.jsxs)(c.ModalContent, {
    className: C.content,
    children: [
      (0, i.jsx)(c.Heading, {
        variant: 'display-md',
        className: r()(C.headerText, v),
        children: L
      }),
      (() => {
        if ('video' === a.type) {
          var e;
          return (0, i.jsx)(m.Z, {
            className: r()(C.video, f),
            autoPlay: !G,
            loop: !0,
            muted: !0,
            controls: !0,
            controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
            src: a.src,
            poster: a.poster,
            onPlay: e => {
              g.default.track(T.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                change_log_id: b
              }), w(Date.now()), W(!0), K(e.currentTarget.muted);
            },
            onEnded: e => {
              ee(), K(e.currentTarget.muted), W(!1);
            },
            onVolumeChange: e => {
              ee(), K(e.currentTarget.muted);
            },
            onPause: e => {
              ee(), K(e.currentTarget.muted), W(!1);
            },
            disablePictureInPicture: !0,
            children: null === (e = a.subtitles) || void 0 === e ? void 0 : e.map(e => {
              let t = l.Z.getLanguages().find(t => t.code === e.locale);
              return null == t ? null : (0, i.jsx)('track', {
                label: t.englishName,
                kind: 'subtitles',
                srcLang: t.code,
                src: e.src,
                default: e.isDefault
              }, e.locale);
            })
          });
        }
        return 'embed' === a.type ? (0, i.jsx)(h.BC, {
          className: r()(C.video, f),
          allowFullScreen: !1,
          href: a.href,
          thumbnail: a.thumbnail,
          video: a.embed,
          provider: E.pn.YOUTUBE,
          maxWidth: a.embed.width,
          maxHeight: a.embed.height,
          renderVideoComponent: _.lV,
          renderImageComponent: _.Yi,
          renderLinkComponent: _.iT,
          renderForwardComponent: T.VqG,
          onPlay: () => {
            g.default.track(T.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: b
            });
          }
        }) : 'image' === a.type ? (0, i.jsx)('img', {
          alt: '',
          className: r()(C.video, f),
          src: a.src
        }) : null;
      })(),
      (0, i.jsxs)(c.Heading, {
        variant: 'heading-lg/semibold',
        className: C.subHeader,
        children: [
          O,
          null == R ? void 0 : R()
        ]
      }),
      null != M && (0, i.jsx)(c.Heading, {
        variant: 'heading-md/medium',
        className: C.bodyText,
        children: M
      }),
      (0, i.jsx)('div', {
        className: r()(C.featureCardGroup, {
          [C.wideStyle]: U
        }),
        children: x.map((e, t) => (0, i.jsx)(N, {
          ...e,
          wideStyle: U
        }, ''.concat(e.header, '_').concat(t)))
      }),
      P()
    ]
  })
]
  });
}