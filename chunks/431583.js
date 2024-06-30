t.r(n), t.d(n, {
    default: function () {
        return L;
    }
}), t(47120);
var a, s, o = t(735250), r = t(470079), l = t(120356), i = t.n(l), c = t(525654), d = t.n(c), u = t(873546), f = t(213919), p = t(442837), m = t(481060), x = t(391650), g = t(314897), O = t(594174), h = t(153124), v = t(626135), _ = t(361207), N = t(792125), w = t(981631), D = t(689938), A = t(101934);
(s = a || (a = {}))[s.OSX = 0] = 'OSX', s[s.WINDOWS = 1] = 'WINDOWS', s[s.LINUX = 2] = 'LINUX', s[s.IOS = 3] = 'IOS', s[s.ANDROID = 4] = 'ANDROID';
let j = [
        {
            getOs: () => D.Z.Messages.PLATFORM_MACOS,
            icon: A.apple,
            url: () => (0, _.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => D.Z.Messages.PLATFORM_WINDOWS,
            icon: A.windows,
            url: () => (0, _.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => D.Z.Messages.PLATFORM_LINUX,
            icon: A.linux,
            url: [
                {
                    url: () => (0, _.w4)('linux', !1, 'deb'),
                    getText: () => D.Z.Messages.DEB
                },
                {
                    url: () => (0, _.w4)('linux', !1, 'tar.gz'),
                    getText: () => D.Z.Messages.TAR_GZ
                }
            ],
            platformKey: 2
        }
    ], S = [
        {
            getOs: () => D.Z.Messages.PLATFORM_IOS,
            icon: A.ios,
            url: () => w.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => D.Z.Messages.PLATFORM_ANDROID,
            icon: A.android,
            url: () => w.fzT.ANDROID,
            platformKey: 4
        }
    ], M = (0, N.Q)(w.BRd.LIGHT), W = e => {
        let {
            url: n,
            text: t,
            onClick: a
        } = e;
        return (0, o.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: n,
            className: A.downloadButton,
            onClick: a,
            children: t
        });
    }, b = e => {
        let n, {
                platform: t,
                onClick: a,
                onMouseEnter: s,
                isActive: r,
                claimed: l
            } = e, {
                getOs: c,
                icon: d,
                url: u,
                platformKey: f
            } = t, p = c(), x = i()(A.icon, d);
        if (Array.isArray(u))
            n = u.map((e, n) => {
                let t = l ? e.url() : '';
                return (0, o.jsx)(W, {
                    url: t,
                    onClick: () => a(p),
                    text: e.getText()
                }, ''.concat(t, '-').concat(n));
            });
        else {
            let e = l ? u() : void 0;
            n = (0, o.jsx)(W, {
                url: e,
                onClick: () => a(p),
                text: D.Z.Messages.DOWNLOAD
            });
        }
        return (0, o.jsx)('li', {
            className: i()(A.platform, { [A.active]: r }),
            onMouseEnter: () => s(f),
            children: (0, o.jsxs)('div', {
                className: A.contentWrapper,
                children: [
                    (0, o.jsxs)('div', {
                        className: A.iconWrap,
                        children: [
                            (0, o.jsx)('div', { className: x }),
                            (0, o.jsx)('div', { className: i()(A.active, x) })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        children: [
                            (0, o.jsx)(m.Heading, {
                                className: A.platformName,
                                variant: 'heading-lg/semibold',
                                children: p
                            }),
                            (0, o.jsx)('div', {
                                className: i()(A.downloadButtons, { [A.list]: Array.isArray(n) }),
                                children: n
                            })
                        ]
                    })
                ]
            })
        });
    };
function L(e) {
    let {
            source: n,
            onClose: t,
            transitionState: a
        } = e, s = (0, p.e7)([O.default], () => O.default.getCurrentUser()), l = (0, p.e7)([g.default], () => g.default.getFingerprint()), c = null == s || s.isClaimed(), [_, N] = r.useState(function () {
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
        }());
    function W(e) {
        (null != f.getToken() || null != l) && v.default.track(w.rMx.DOWNLOAD_APP, {
            platform: e,
            ptb: !1,
            released: !0,
            has_e_mail: c,
            referring_location: n,
            qr_code: !1
        }), !c && (t(), x.j());
    }
    function L(e) {
        N(e);
    }
    r.useEffect(() => {
        v.default.track(w.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: n }
        });
    }, [n]);
    let T = (0, h.Dt)();
    return (0, o.jsx)(m.ModalRoot, {
        className: i()(A.downloadApps, M),
        transitionState: a,
        'aria-labelledby': T,
        children: (0, o.jsx)('div', {
            className: A.inner,
            children: (0, o.jsxs)(m.HeadingLevel, {
                component: (0, o.jsx)(m.HiddenVisually, {
                    children: (0, o.jsx)(m.H, {
                        id: T,
                        children: D.Z.Messages.DOWNLOAD_APP
                    })
                }),
                children: [
                    (0, o.jsx)(m.ModalCloseButton, {
                        onClick: t,
                        className: A.modalCloseButton
                    }),
                    !u.tq && (0, o.jsx)('div', {
                        className: A.platformsWrap,
                        children: (0, o.jsx)(m.HeadingLevel, {
                            component: (0, o.jsx)(m.Heading, {
                                variant: 'heading-lg/semibold',
                                className: A.header,
                                children: D.Z.Messages.DOWNLOAD_DESKTOP_TITLE
                            }),
                            children: (0, o.jsx)('ul', {
                                className: A.platforms,
                                children: j.map(e => (0, o.jsx)(b, {
                                    isActive: _ === e.platformKey,
                                    platform: e,
                                    onClick: W,
                                    onMouseEnter: L,
                                    claimed: c
                                }, e.platformKey))
                            })
                        })
                    }),
                    (0, o.jsx)('div', {
                        className: A.platformsWrap,
                        children: (0, o.jsxs)(m.HeadingLevel, {
                            component: (0, o.jsx)(o.Fragment, {
                                children: !u.tq && (0, o.jsx)(m.Heading, {
                                    variant: 'heading-lg/semibold',
                                    className: A.header,
                                    children: D.Z.Messages.DOWNLOAD_MOBILE_TITLE
                                })
                            }),
                            children: [
                                (0, o.jsx)('ul', {
                                    className: A.platforms,
                                    children: S.map(e => (0, o.jsx)(b, {
                                        isActive: _ === e.platformKey,
                                        platform: e,
                                        onClick: W,
                                        onMouseEnter: L,
                                        claimed: c
                                    }, e.platformKey))
                                }),
                                (0, o.jsx)(m.Text, {
                                    className: A.footer,
                                    variant: 'text-sm/normal',
                                    children: D.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
