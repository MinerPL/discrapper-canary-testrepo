n.r(t),
    n.d(t, {
        default: function () {
            return L;
        }
    }),
    n(47120);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(525654),
    u = n.n(c),
    d = n(873546),
    _ = n(213919),
    E = n(442837),
    I = n(481060),
    m = n(391650),
    T = n(313201),
    h = n(314897),
    N = n(594174),
    f = n(626135),
    C = n(361207),
    p = n(792125),
    g = n(981631),
    S = n(689938),
    A = n(348488);
((a = i || (i = {}))[(a.OSX = 0)] = 'OSX'), (a[(a.WINDOWS = 1)] = 'WINDOWS'), (a[(a.LINUX = 2)] = 'LINUX'), (a[(a.IOS = 3)] = 'IOS'), (a[(a.ANDROID = 4)] = 'ANDROID');
let R = [
        {
            getOs: () => S.Z.Messages.PLATFORM_MACOS,
            icon: A.apple,
            url: () => (0, C.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => S.Z.Messages.PLATFORM_WINDOWS,
            icon: A.windows,
            url: () => (0, C.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => S.Z.Messages.PLATFORM_LINUX,
            icon: A.linux,
            url: [
                {
                    url: () => (0, C.w4)('linux', !1, 'deb'),
                    getText: () => S.Z.Messages.DEB
                },
                {
                    url: () => (0, C.w4)('linux', !1, 'tar.gz'),
                    getText: () => S.Z.Messages.TAR_GZ
                }
            ],
            platformKey: 2
        }
    ],
    x = [
        {
            getOs: () => S.Z.Messages.PLATFORM_IOS,
            icon: A.ios,
            url: () => g.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => S.Z.Messages.PLATFORM_ANDROID,
            icon: A.android,
            url: () => g.fzT.ANDROID,
            platformKey: 4
        }
    ],
    O = (0, p.Q)(g.BRd.LIGHT),
    M = (e) => {
        let { url: t, text: n, onClick: i } = e;
        return (0, s.jsx)(I.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: A.downloadButton,
            onClick: i,
            children: n
        });
    },
    v = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: a, isActive: r, claimed: l } = e,
            { getOs: c, icon: u, url: d, platformKey: _ } = n,
            E = c(),
            m = o()(A.icon, u);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = l ? e.url() : '';
                return (0, s.jsx)(
                    M,
                    {
                        url: n,
                        onClick: () => i(E),
                        text: e.getText()
                    },
                    ''.concat(n, '-').concat(t)
                );
            });
        else {
            let e = l ? d() : void 0;
            t = (0, s.jsx)(M, {
                url: e,
                onClick: () => i(E),
                text: S.Z.Messages.DOWNLOAD
            });
        }
        return (0, s.jsx)('li', {
            className: o()(A.platform, { [A.active]: r }),
            onMouseEnter: () => a(_),
            children: (0, s.jsxs)('div', {
                className: A.contentWrapper,
                children: [
                    (0, s.jsxs)('div', {
                        className: A.iconWrap,
                        children: [(0, s.jsx)('div', { className: m }), (0, s.jsx)('div', { className: o()(A.active, m) })]
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(I.Heading, {
                                className: A.platformName,
                                variant: 'heading-lg/semibold',
                                children: E
                            }),
                            (0, s.jsx)('div', {
                                className: o()(A.downloadButtons, { [A.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function L(e) {
    let { source: t, onClose: n, transitionState: i } = e,
        a = (0, E.e7)([N.default], () => N.default.getCurrentUser()),
        l = (0, E.e7)([h.default], () => h.default.getFingerprint()),
        c = null == a || a.isClaimed(),
        [C, p] = r.useState(
            (function () {
                var e;
                switch (null === (e = u().os) || void 0 === e ? void 0 : e.family) {
                    case 'OS X':
                        return 0;
                    case 'Windows':
                        return 1;
                    case 'Ubuntu':
                    case 'Debian':
                    case 'Fedora':
                    case 'Red Hat':
                    case 'SuSE':
                    case 'Linux':
                        return 2;
                    case 'iOS':
                        return 3;
                    case 'Android':
                        return 4;
                    default:
                        return;
                }
            })()
        );
    function M(e) {
        (null != _.getToken() || null != l) &&
            f.default.track(g.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: c,
                referring_location: t,
                qr_code: !1
            }),
            !c && (n(), m.j());
    }
    function L(e) {
        p(e);
    }
    r.useEffect(() => {
        f.default.track(g.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let Z = (0, T.Dt)();
    return (0, s.jsx)(I.ModalRoot, {
        className: o()(A.downloadApps, O),
        transitionState: i,
        'aria-labelledby': Z,
        children: (0, s.jsx)('div', {
            className: A.inner,
            children: (0, s.jsxs)(I.HeadingLevel, {
                component: (0, s.jsx)(I.HiddenVisually, {
                    children: (0, s.jsx)(I.H, {
                        id: Z,
                        children: S.Z.Messages.DOWNLOAD_APP
                    })
                }),
                children: [
                    (0, s.jsx)(I.ModalCloseButton, {
                        onClick: n,
                        className: A.modalCloseButton
                    }),
                    !d.tq &&
                        (0, s.jsx)('div', {
                            className: A.platformsWrap,
                            children: (0, s.jsx)(I.HeadingLevel, {
                                component: (0, s.jsx)(I.Heading, {
                                    variant: 'heading-lg/semibold',
                                    className: A.header,
                                    children: S.Z.Messages.DOWNLOAD_DESKTOP_TITLE
                                }),
                                children: (0, s.jsx)('ul', {
                                    className: A.platforms,
                                    children: R.map((e) =>
                                        (0, s.jsx)(
                                            v,
                                            {
                                                isActive: C === e.platformKey,
                                                platform: e,
                                                onClick: M,
                                                onMouseEnter: L,
                                                claimed: c
                                            },
                                            e.platformKey
                                        )
                                    )
                                })
                            })
                        }),
                    (0, s.jsx)('div', {
                        className: A.platformsWrap,
                        children: (0, s.jsxs)(I.HeadingLevel, {
                            component: (0, s.jsx)(s.Fragment, {
                                children:
                                    !d.tq &&
                                    (0, s.jsx)(I.Heading, {
                                        variant: 'heading-lg/semibold',
                                        className: A.header,
                                        children: S.Z.Messages.DOWNLOAD_MOBILE_TITLE
                                    })
                            }),
                            children: [
                                (0, s.jsx)('ul', {
                                    className: A.platforms,
                                    children: x.map((e) =>
                                        (0, s.jsx)(
                                            v,
                                            {
                                                isActive: C === e.platformKey,
                                                platform: e,
                                                onClick: M,
                                                onMouseEnter: L,
                                                claimed: c
                                            },
                                            e.platformKey
                                        )
                                    )
                                }),
                                (0, s.jsx)(I.Text, {
                                    className: A.footer,
                                    variant: 'text-sm/normal',
                                    children: S.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
