n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(442837), o = n(481060), c = n(607070), d = n(605236), u = n(524444), _ = n(529815), E = n(250496), h = n(153124), I = n(810090), m = n(626135), p = n(565216), g = n(981631), T = n(921944), S = n(437738);
let C = e => {
        let {
            tagText: t,
            className: n
        } = e;
        return (0, i.jsx)(o.TextBadge, {
            className: r()(S.tag, n),
            text: t
        });
    }, N = e => {
        let {
            header: t,
            subHeader: n,
            imageSrc: s,
            tagText: a,
            wideStyle: l
        } = e;
        return (0, i.jsxs)('div', {
            className: r()(S.featureCard, { [S.wideStyle]: l }),
            children: [
                null != a ? (0, i.jsx)(C, {
                    tagText: a,
                    className: S.featureCardTag
                }) : null,
                (0, i.jsx)('img', {
                    alt: '',
                    className: r()(S.featureCardImg, { [S.wideStyle]: l }),
                    src: s
                }),
                (0, i.jsxs)('div', {
                    className: S.featureCardTextGroup,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/extrabold',
                            className: S.featureCardTextHeader,
                            children: t
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                    ]
                })
            ]
        });
    };
function f(e) {
    let {
            className: t,
            renderModalProps: n,
            heroArt: a,
            heroArtClassName: C,
            modalDismissibleContent: f,
            modalTopExtra: A,
            header: Z,
            headerClassName: L,
            subHeader: v,
            subHeaderExtra: O,
            featureCards: R,
            changeLogId: x,
            button: P
        } = e, {
            onClose: b,
            transitionState: M
        } = n, D = (0, h.Dt)(), y = R.length % 2 == 0, j = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [U, G] = s.useState(Date.now()), [w, k] = s.useState(0), [B, H] = s.useState(0), [V, F] = s.useState(!1), [Y, W] = s.useState(!0), z = s.useRef(U), K = s.useRef(w), q = s.useRef(B), Q = s.useRef(V), X = s.useRef(Y);
    function J() {
        let e = Date.now(), t = e - z.current, n = K.current, i = q.current;
        return Q.current && (k(n += t), !X.current && H(i += t)), G(e), [
            n,
            i
        ];
    }
    return s.useEffect(() => {
        z.current = U, K.current = w, q.current = B, Q.current = V, X.current = Y;
    }, [
        U,
        w,
        B,
        V,
        Y
    ]), s.useEffect(() => () => {
        if ('video' === a.type || 'embed' === a.type) {
            let [e, t] = J();
            m.default.track(g.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                change_log_id: x,
                seconds_played: Math.round(e / 1000)
            }), m.default.track(g.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                change_log_id: x,
                seconds_unmuted: Math.round(t / 1000)
            });
        }
    }, [
        x,
        a
    ]), s.useEffect(() => {
        null != f && (0, d.kk)(f);
        let e = Date.now();
        return m.default.track(g.rMx.CHANGE_LOG_OPENED, { change_log_id: x }), () => {
            m.default.track(g.rMx.CHANGE_LOG_CLOSED, {
                change_log_id: x,
                seconds_open: Math.round((Date.now() - e) / 1000)
            }), null != f && (0, d.EW)(f, { dismissAction: T.L.DISMISS });
        };
    }, [
        f,
        x
    ]), (0, i.jsxs)(o.ModalRoot, {
        className: r()(S.root, t),
        transitionState: M,
        'aria-labelledby': D,
        children: [
            (0, i.jsx)(o.ModalCloseButton, {
                className: S.closeButton,
                onClick: b
            }),
            (0, i.jsx)(p.Z, { className: S.splash }),
            null == A ? void 0 : A(),
            (0, i.jsxs)(o.ModalContent, {
                className: S.content,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'display-md',
                        className: r()(S.headerText, L),
                        children: Z
                    }),
                    'video' === a.type ? (0, i.jsx)(I.Z, {
                        className: r()(S.video, C),
                        autoPlay: !j,
                        loop: !0,
                        muted: !0,
                        controls: !0,
                        controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                        src: a.src,
                        poster: a.poster,
                        onPlay: e => {
                            m.default.track(g.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: x }), G(Date.now()), F(!0), W(e.currentTarget.muted);
                        },
                        onEnded: e => {
                            J(), W(e.currentTarget.muted), F(!1);
                        },
                        onVolumeChange: e => {
                            J(), W(e.currentTarget.muted);
                        },
                        onPause: e => {
                            J(), W(e.currentTarget.muted), F(!1);
                        },
                        disablePictureInPicture: !0
                    }) : 'embed' === a.type ? (0, i.jsx)(_.BC, {
                        className: r()(S.video, C),
                        allowFullScreen: !1,
                        href: a.href,
                        thumbnail: a.thumbnail,
                        video: a.embed,
                        provider: E.pn.YOUTUBE,
                        maxWidth: a.embed.width,
                        maxHeight: a.embed.height,
                        renderVideoComponent: u.lV,
                        renderImageComponent: u.Yi,
                        renderLinkComponent: u.iT,
                        renderForwardComponent: g.VqG,
                        onPlay: () => {
                            m.default.track(g.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: x });
                        }
                    }) : 'image' === a.type ? (0, i.jsx)('img', {
                        alt: '',
                        className: r()(S.video, C),
                        src: a.src
                    }) : null,
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-lg/extrabold',
                        className: S.bodyText,
                        children: v
                    }),
                    null == O ? void 0 : O(),
                    (0, i.jsx)('div', {
                        className: r()(S.featureCardGroup, { [S.wideStyle]: y }),
                        children: R.map((e, t) => (0, i.jsx)(N, {
                            ...e,
                            wideStyle: y
                        }, ''.concat(e.header, '_').concat(t)))
                    }),
                    P()
                ]
            })
        ]
    });
}
