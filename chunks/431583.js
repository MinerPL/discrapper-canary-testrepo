n.r(t),
    n.d(t, {
        default: function () {
            return W;
        }
    }),
    n(47120);
var s,
    a,
    r = n(735250),
    o = n(470079),
    l = n(120356),
    i = n.n(l),
    c = n(525654),
    d = n.n(c),
    u = n(873546),
    f = n(213919),
    p = n(442837),
    m = n(481060),
    x = n(391650),
    g = n(313201),
    O = n(314897),
    h = n(594174),
    v = n(626135),
    _ = n(361207),
    N = n(981631),
    w = n(689938),
    D = n(348488);
((a = s || (s = {}))[(a.OSX = 0)] = 'OSX'), (a[(a.WINDOWS = 1)] = 'WINDOWS'), (a[(a.LINUX = 2)] = 'LINUX'), (a[(a.IOS = 3)] = 'IOS'), (a[(a.ANDROID = 4)] = 'ANDROID');
let A = [
        {
            getOs: () => w.Z.Messages.PLATFORM_MACOS,
            icon: D.apple,
            url: () => (0, _.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => w.Z.Messages.PLATFORM_WINDOWS,
            icon: D.windows,
            url: () => (0, _.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => w.Z.Messages.PLATFORM_LINUX,
            icon: D.linux,
            url: [
                {
                    url: () => (0, _.w4)('linux', !1, 'deb'),
                    getText: () => w.Z.Messages.DEB
                },
                {
                    url: () => (0, _.w4)('linux', !1, 'tar.gz'),
                    getText: () => w.Z.Messages.TAR_GZ
                }
            ],
            platformKey: 2
        }
    ],
    j = [
        {
            getOs: () => w.Z.Messages.PLATFORM_IOS,
            icon: D.ios,
            url: () => N.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => w.Z.Messages.PLATFORM_ANDROID,
            icon: D.android,
            url: () => N.fzT.ANDROID,
            platformKey: 4
        }
    ],
    S = (e) => {
        let { url: t, text: n, onClick: s } = e;
        return (0, r.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: D.downloadButton,
            onClick: s,
            children: n
        });
    },
    M = (e) => {
        let t,
            { platform: n, onClick: s, onMouseEnter: a, isActive: o, claimed: l } = e,
            { getOs: c, icon: d, url: u, platformKey: f } = n,
            p = c(),
            x = i()(D.icon, d);
        if (Array.isArray(u))
            t = u.map((e, t) => {
                let n = l ? e.url() : '';
                return (0, r.jsx)(
                    S,
                    {
                        url: n,
                        onClick: () => s(p),
                        text: e.getText()
                    },
                    ''.concat(n, '-').concat(t)
                );
            });
        else {
            let e = l ? u() : void 0;
            t = (0, r.jsx)(S, {
                url: e,
                onClick: () => s(p),
                text: w.Z.Messages.DOWNLOAD
            });
        }
        return (0, r.jsx)('li', {
            className: i()(D.platform, { [D.active]: o }),
            onMouseEnter: () => a(f),
            children: (0, r.jsxs)('div', {
                className: D.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.iconWrap,
                        children: [(0, r.jsx)('div', { className: x }), (0, r.jsx)('div', { className: i()(D.active, x) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(m.Heading, {
                                className: D.platformName,
                                variant: 'heading-lg/semibold',
                                children: p
                            }),
                            (0, r.jsx)('div', {
                                className: i()(D.downloadButtons, { [D.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function W(e) {
    let { source: t, onClose: n, transitionState: s } = e,
        a = (0, p.e7)([h.default], () => h.default.getCurrentUser()),
        l = (0, p.e7)([O.default], () => O.default.getFingerprint()),
        c = null == a || a.isClaimed(),
        [_, S] = o.useState(
            (function () {
                var e;
                switch (null === (e = d().os) || void 0 === e ? void 0 : e.family) {
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
    function W(e) {
        (null != f.getToken() || null != l) &&
            v.default.track(N.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: c,
                referring_location: t,
                qr_code: !1
            }),
            !c && (n(), x.j());
    }
    function b(e) {
        S(e);
    }
    o.useEffect(() => {
        v.default.track(N.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let L = (0, g.Dt)();
    return (0, r.jsx)(m.ThemeProvider, {
        theme: N.BRd.LIGHT,
        children: (e) =>
            (0, r.jsx)(m.ModalRoot, {
                className: i()(D.downloadApps, e),
                transitionState: s,
                'aria-labelledby': L,
                children: (0, r.jsx)('div', {
                    className: D.inner,
                    children: (0, r.jsxs)(m.HeadingLevel, {
                        component: (0, r.jsx)(m.HiddenVisually, {
                            children: (0, r.jsx)(m.H, {
                                id: L,
                                children: w.Z.Messages.DOWNLOAD_APP
                            })
                        }),
                        children: [
                            (0, r.jsx)(m.ModalCloseButton, {
                                onClick: n,
                                className: D.modalCloseButton
                            }),
                            !u.tq &&
                                (0, r.jsx)('div', {
                                    className: D.platformsWrap,
                                    children: (0, r.jsx)(m.HeadingLevel, {
                                        component: (0, r.jsx)(m.Heading, {
                                            variant: 'heading-lg/semibold',
                                            className: D.header,
                                            children: w.Z.Messages.DOWNLOAD_DESKTOP_TITLE
                                        }),
                                        children: (0, r.jsx)('ul', {
                                            className: D.platforms,
                                            children: A.map((e) =>
                                                (0, r.jsx)(
                                                    M,
                                                    {
                                                        isActive: _ === e.platformKey,
                                                        platform: e,
                                                        onClick: W,
                                                        onMouseEnter: b,
                                                        claimed: c
                                                    },
                                                    e.platformKey
                                                )
                                            )
                                        })
                                    })
                                }),
                            (0, r.jsx)('div', {
                                className: D.platformsWrap,
                                children: (0, r.jsxs)(m.HeadingLevel, {
                                    component: (0, r.jsx)(r.Fragment, {
                                        children:
                                            !u.tq &&
                                            (0, r.jsx)(m.Heading, {
                                                variant: 'heading-lg/semibold',
                                                className: D.header,
                                                children: w.Z.Messages.DOWNLOAD_MOBILE_TITLE
                                            })
                                    }),
                                    children: [
                                        (0, r.jsx)('ul', {
                                            className: D.platforms,
                                            children: j.map((e) =>
                                                (0, r.jsx)(
                                                    M,
                                                    {
                                                        isActive: _ === e.platformKey,
                                                        platform: e,
                                                        onClick: W,
                                                        onMouseEnter: b,
                                                        claimed: c
                                                    },
                                                    e.platformKey
                                                )
                                            )
                                        }),
                                        (0, r.jsx)(m.Text, {
                                            className: D.footer,
                                            variant: 'text-sm/normal',
                                            children: w.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
    });
}
