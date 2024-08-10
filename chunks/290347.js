a.d(t, {
  Z: function() {
return T;
  }
}), a(47120), a(411104), a(315314), a(610138), a(216116), a(78328), a(815648);
var r = a(735250),
  n = a(470079),
  s = a(120356),
  o = a.n(s),
  l = a(330711),
  c = a(442837),
  d = a(481060),
  u = a(607070),
  i = a(446411),
  _ = a(468846),
  f = a(313201),
  h = a(70097),
  g = a(605236),
  m = a(524444),
  N = a(626135),
  E = a(960048),
  p = a(565216),
  C = a(981631),
  O = a(921944),
  x = a(757601);
let A = [],
  M = e => {
let {
  tagText: t,
  className: a
} = e;
return (0, r.jsx)(d.TextBadge, {
  className: o()(x.tag, a),
  text: t
});
  },
  b = e => {
let {
  header: t,
  subHeader: a,
  imageSrc: n,
  tagText: s,
  wideStyle: l
} = e;
return (0, r.jsxs)('div', {
  className: o()(x.featureCard, {
    [x.wideStyle]: l
  }),
  children: [
    null != s ? (0, r.jsx)(M, {
      tagText: s,
      className: x.featureCardTag
    }) : null,
    (0, r.jsx)('img', {
      alt: '',
      className: o()(x.featureCardImg, {
        [x.wideStyle]: l
      }),
      src: n
    }),
    (0, r.jsxs)('div', {
      className: x.featureCardTextGroup,
      children: [
        (0, r.jsx)(d.Heading, {
          variant: 'heading-md/extrabold',
          className: x.featureCardTextHeader,
          children: t
        }),
        (0, r.jsx)(d.Text, {
          variant: 'text-sm/normal',
          children: a
        })
      ]
    })
  ]
});
  };

function T(e) {
  let {
className: t,
renderModalProps: a,
heroArt: s,
heroArtClassName: M,
modalDismissibleContent: T,
modalTopExtra: D,
header: y,
headerClassName: R,
subHeader: v,
subHeaderExtra: B,
featureCards: L,
changeLogId: G,
button: S,
body: H
  } = e, {
onClose: w,
transitionState: j
  } = a, I = (0, f.Dt)(), U = L.length % 2 == 0, Z = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), [k, P] = n.useState(Date.now()), [V, Y] = n.useState(0), [z, F] = n.useState(0), [W, q] = n.useState(!1), [K, X] = n.useState(!0), Q = n.useRef(k), J = n.useRef(V), $ = n.useRef(z), ee = n.useRef(W), et = n.useRef(K), [ea, er] = n.useState(A), en = n.useRef(!1);

  function es() {
let e = Date.now(),
  t = e - Q.current,
  a = J.current,
  r = $.current;
return ee.current && (Y(a += t), !et.current && F(r += t)), P(e), [
  a,
  r
];
  }
  return n.useEffect(() => {
let e = async () => {
  try {
    var e;
    if ('video' !== s.type || null == s.subtitles)
      return;
    let t = null === (e = s.subtitles) || void 0 === e ? void 0 : e.map(async e => {
      let t = await fetch(e.src);
      if (!t.ok)
        throw Error('Failed to fetch the subtitle file '.concat(e.src));
      let a = await t.text(),
        r = new Blob([a], {
          type: 'text/vtt'
        }),
        n = URL.createObjectURL(r);
      return {
        ...e,
        src: n
      };
    });
    er(await Promise.all(t));
  } catch (e) {
    E.Z.captureException(e), er(A);
  }
};
!0 !== en.current && e(), en.current = !0;
  }, [
s,
ea
  ]), n.useEffect(() => () => {
null != ea && ea.forEach(e => {
  URL.revokeObjectURL(e.src);
});
  }, [ea]), n.useEffect(() => {
Q.current = k, J.current = V, $.current = z, ee.current = W, et.current = K;
  }, [
k,
V,
z,
W,
K
  ]), n.useEffect(() => () => {
if ('video' === s.type || 'embed' === s.type) {
  let [e, t] = es();
  N.default.track(C.rMx.CHANGE_LOG_VIDEO_PLAYED, {
    change_log_id: G,
    seconds_played: Math.round(e / 1000)
  }), N.default.track(C.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
    change_log_id: G,
    seconds_unmuted: Math.round(t / 1000)
  });
}
  }, [
G,
s.type
  ]), n.useEffect(() => {
null != T && (0, g.kk)(T);
let e = Date.now();
return N.default.track(C.rMx.CHANGE_LOG_OPENED, {
  change_log_id: G
}), () => {
  N.default.track(C.rMx.CHANGE_LOG_CLOSED, {
    change_log_id: G,
    seconds_open: Math.round((Date.now() - e) / 1000)
  }), null != T && (0, g.EW)(T, {
    dismissAction: O.L.DISMISS
  });
};
  }, [
T,
G
  ]), (0, r.jsxs)(d.ModalRoot, {
className: o()(x.root, t),
transitionState: j,
'aria-labelledby': I,
children: [
  (0, r.jsx)(d.ModalCloseButton, {
    className: x.closeButton,
    onClick: w
  }),
  (0, r.jsx)(p.Z, {
    className: x.splash
  }),
  null == D ? void 0 : D(),
  (0, r.jsxs)(d.ModalContent, {
    className: x.content,
    children: [
      (0, r.jsx)(d.Heading, {
        variant: 'display-md',
        className: o()(x.headerText, R),
        children: y
      }),
      'video' === s.type ? (0, r.jsx)(h.Z, {
        className: o()(x.video, M),
        autoPlay: !Z,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
        src: s.src,
        poster: s.poster,
        onPlay: e => {
          N.default.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: G
          }), P(Date.now()), q(!0), X(e.currentTarget.muted);
        },
        onEnded: e => {
          es(), X(e.currentTarget.muted), q(!1);
        },
        onVolumeChange: e => {
          es(), X(e.currentTarget.muted);
        },
        onPause: e => {
          es(), X(e.currentTarget.muted), q(!1);
        },
        disablePictureInPicture: !0,
        children: null == ea ? void 0 : ea.map(e => {
          let t = l.Z.getLanguages().find(t => t.code === e.locale);
          return null == t ? null : (0, r.jsx)('track', {
            label: t.englishName,
            kind: 'captions',
            srcLang: t.code,
            src: e.src,
            default: e.isDefault
          }, e.locale);
        })
      }) : 'embed' === s.type ? (0, r.jsx)(i.BC, {
        className: o()(x.video, M),
        allowFullScreen: !1,
        href: s.href,
        thumbnail: s.thumbnail,
        video: s.embed,
        provider: _.pn.YOUTUBE,
        maxWidth: s.embed.width,
        maxHeight: s.embed.height,
        renderVideoComponent: m.lV,
        renderImageComponent: m.Yi,
        renderLinkComponent: m.iT,
        renderForwardComponent: C.VqG,
        onPlay: () => {
          N.default.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: G
          });
        }
      }) : 'image' === s.type ? (0, r.jsx)('img', {
        alt: '',
        className: o()(x.video, M),
        src: s.src
      }) : null,
      (0, r.jsxs)(d.Heading, {
        variant: 'heading-lg/semibold',
        className: x.subHeader,
        children: [
          v,
          null == B ? void 0 : B()
        ]
      }),
      null != H && (0, r.jsx)(d.Heading, {
        variant: 'heading-md/medium',
        className: x.bodyText,
        children: H
      }),
      (0, r.jsx)('div', {
        className: o()(x.featureCardGroup, {
          [x.wideStyle]: U
        }),
        children: L.map((e, t) => (0, r.jsx)(b, {
          ...e,
          wideStyle: U
        }, ''.concat(e.header, '_').concat(t)))
      }),
      S()
    ]
  })
]
  });
}