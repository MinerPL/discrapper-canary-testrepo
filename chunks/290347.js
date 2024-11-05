a.d(t, {
    Z: function () {
        return j;
    }
}),
    a(47120),
    a(411104),
    a(315314),
    a(610138),
    a(216116),
    a(78328),
    a(815648);
var r = a(200651),
    n = a(192379),
    s = a(120356),
    o = a.n(s),
    l = a(442837),
    c = a(481060),
    d = a(607070),
    i = a(446411),
    u = a(468846),
    f = a(313201),
    h = a(70097),
    g = a(605236),
    m = a(524444),
    _ = a(626135),
    p = a(960048),
    x = a(565216),
    b = a(981631),
    C = a(921944),
    N = a(388032),
    E = a(29861);
let y = [],
    T = (e) => {
        let { tagText: t, className: a } = e;
        return (0, r.jsx)(c.TextBadge, {
            className: o()(E.tag, a),
            text: t
        });
    },
    v = (e) => {
        let { header: t, subHeader: a, imageSrc: n, tagText: s, wideStyle: l } = e;
        return (0, r.jsxs)('div', {
            className: o()(E.featureCard, { [E.wideStyle]: l }),
            children: [
                null != s
                    ? (0, r.jsx)(T, {
                          tagText: s,
                          className: E.featureCardTag
                      })
                    : null,
                (0, r.jsx)('img', {
                    alt: '',
                    className: o()(E.featureCardImg, { [E.wideStyle]: l }),
                    src: n
                }),
                (0, r.jsxs)('div', {
                    className: E.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-md/extrabold',
                            className: E.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: a
                        })
                    ]
                })
            ]
        });
    };
function j(e) {
    let { className: t, renderModalProps: a, heroArt: s, heroArtClassName: T, modalDismissibleContent: j, modalTopExtra: A, header: w, headerClassName: M, subHeader: H, subHeaderExtra: S, featureCards: L, changeLogId: O, button: G, body: B } = e,
        { onClose: I, transitionState: R } = a,
        k = (0, f.Dt)(),
        D = L.length % 2 == 0,
        U = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [Z, P] = n.useState(Date.now()),
        [V, W] = n.useState(0),
        [z, Y] = n.useState(0),
        [q, K] = n.useState(!1),
        [F, Q] = n.useState(!0),
        J = n.useRef(Z),
        X = n.useRef(V),
        $ = n.useRef(z),
        ee = n.useRef(q),
        et = n.useRef(F),
        [ea, er] = n.useState(y),
        en = n.useRef(!1);
    function es() {
        let e = Date.now(),
            t = e - J.current,
            a = X.current,
            r = $.current;
        return ee.current && (W((a += t)), !et.current && Y((r += t))), P(e), [a, r];
    }
    return (
        n.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ('video' !== s.type || null == s.subtitles) return;
                    let t =
                        null === (e = s.subtitles) || void 0 === e
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error('Failed to fetch the subtitle file '.concat(e.src));
                                  let a = await t.text(),
                                      r = new Blob([a], { type: 'text/vtt' }),
                                      n = URL.createObjectURL(r);
                                  return {
                                      ...e,
                                      src: n
                                  };
                              });
                    er(await Promise.all(t));
                } catch (e) {
                    p.Z.captureException(e), er(y);
                }
            };
            !0 !== en.current && e(), (en.current = !0);
        }, [s, ea]),
        n.useEffect(
            () => () => {
                null != ea &&
                    ea.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ea]
        ),
        n.useEffect(() => {
            (J.current = Z), (X.current = V), ($.current = z), (ee.current = q), (et.current = F);
        }, [Z, V, z, q, F]),
        n.useEffect(
            () => () => {
                if ('video' === s.type || 'embed' === s.type) {
                    let [e, t] = es();
                    _.default.track(b.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: O,
                        seconds_played: Math.round(e / 1000)
                    }),
                        _.default.track(b.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: O,
                            seconds_unmuted: Math.round(t / 1000)
                        });
                }
            },
            [O, s.type]
        ),
        n.useEffect(() => {
            null != j && (0, g.kk)(j);
            let e = Date.now();
            return (
                _.default.track(b.rMx.CHANGE_LOG_OPENED, { change_log_id: O }),
                () => {
                    _.default.track(b.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: O,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != j && (0, g.EW)(j, { dismissAction: C.L.DISMISS });
                }
            );
        }, [j, O]),
        (0, r.jsxs)(c.ModalRoot, {
            className: o()(E.root, t),
            transitionState: R,
            'aria-labelledby': k,
            children: [
                (0, r.jsx)(c.ModalCloseButton, {
                    className: E.closeButton,
                    onClick: I
                }),
                (0, r.jsx)(x.Z, { className: E.splash }),
                null == A ? void 0 : A(),
                (0, r.jsxs)(c.ModalContent, {
                    className: E.content,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'display-md',
                            className: o()(E.headerText, M),
                            children: w
                        }),
                        'video' === s.type
                            ? (0, r.jsx)(h.Z, {
                                  className: o()(E.video, T),
                                  autoPlay: !U,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: s.src,
                                  poster: s.poster,
                                  onPlay: (e) => {
                                      _.default.track(b.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: O }), P(Date.now()), K(!0), Q(e.currentTarget.muted);
                                  },
                                  onEnded: (e) => {
                                      es(), Q(e.currentTarget.muted), K(!1);
                                  },
                                  onVolumeChange: (e) => {
                                      es(), Q(e.currentTarget.muted);
                                  },
                                  onPause: (e) => {
                                      es(), Q(e.currentTarget.muted), K(!1);
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == ea
                                          ? void 0
                                          : ea.map((e) => {
                                                let t = (0, N.getLanguages)().find((t) => t.code === e.locale);
                                                return null == t
                                                    ? null
                                                    : (0, r.jsx)(
                                                          'track',
                                                          {
                                                              label: t.englishName,
                                                              kind: 'captions',
                                                              srcLang: t.code,
                                                              src: e.src,
                                                              default: e.isDefault
                                                          },
                                                          e.locale
                                                      );
                                            })
                              })
                            : 'embed' === s.type
                              ? (0, r.jsx)(i.BC, {
                                    className: o()(E.video, T),
                                    allowFullScreen: !1,
                                    href: s.href,
                                    thumbnail: s.thumbnail,
                                    video: s.embed,
                                    provider: u.pn.YOUTUBE,
                                    maxWidth: s.embed.width,
                                    maxHeight: s.embed.height,
                                    renderVideoComponent: m.lV,
                                    renderImageComponent: m.Yi,
                                    renderLinkComponent: m.iT,
                                    onPlay: () => {
                                        _.default.track(b.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: O });
                                    }
                                })
                              : 'image' === s.type
                                ? (0, r.jsx)('img', {
                                      alt: '',
                                      className: o()(E.video, T),
                                      src: s.src
                                  })
                                : null,
                        (0, r.jsxs)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            className: E.subHeader,
                            children: [H, null == S ? void 0 : S()]
                        }),
                        null != B &&
                            (0, r.jsx)(c.Heading, {
                                variant: 'heading-md/medium',
                                className: E.bodyText,
                                children: B
                            }),
                        (0, r.jsx)('div', {
                            className: o()(E.featureCardGroup, { [E.wideStyle]: D }),
                            children: L.map((e, t) =>
                                (0, r.jsx)(
                                    v,
                                    {
                                        ...e,
                                        wideStyle: D
                                    },
                                    ''.concat(e.header, '_').concat(t)
                                )
                            )
                        }),
                        G()
                    ]
                })
            ]
        })
    );
}
