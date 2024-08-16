n.d(t, {
    Z: function () {
        return L;
    },
    i: function () {
        return j;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(77866),
    o = n(748780),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(699682),
    m = n(367907),
    p = n(812206),
    _ = n(644914),
    f = n(434404),
    E = n(330010),
    g = n(314897),
    C = n(430824),
    I = n(594174),
    x = n(259580),
    T = n(585483),
    N = n(63063),
    v = n(358085),
    S = n(709054),
    Z = n(967128),
    A = n(981631),
    M = n(231873),
    b = n(689938),
    R = n(616616);
function j(e) {
    let { className: t, iconUrl: n, icon: s, header: r, completed: o, onClick: c } = e,
        [u, m] = a.useState(!1),
        p = (0, h.Z)(o);
    return (
        a.useEffect(() => {
            null != p && o !== p && (m(!0), setTimeout(() => m(!1), 1000));
        }, [o, p]),
        (0, i.jsxs)(d.Clickable, {
            className: l()(t, R.card, { [R.completed]: o }),
            onClick: c,
            children: [
                null != s
                    ? s
                    : (0, i.jsx)('div', {
                          className: R.icon,
                          style: { backgroundImage: "url('".concat(n, "')") }
                      }),
                (0, i.jsx)(d.Text, {
                    color: 'header-primary',
                    className: l()(R.cardTextContainer, R.cardHeader),
                    variant: 'text-sm/normal',
                    children: r
                }),
                o
                    ? (0, i.jsx)(d.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(R.checkmark, { [R.animate]: u })
                      })
                    : (0, i.jsx)(x.Z, {
                          className: R.arrow,
                          direction: x.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function L(e) {
    let { channel: t } = e,
        s = (0, c.e7)([C.Z], () => (null != t ? C.Z.getGuild(t.getGuildId()) : null), [t]),
        h = null != s && S.default.extractTimestamp(s.id) < Date.now() - A._8R,
        x = (0, c.e7)([g.default], () => (null == s ? void 0 : s.ownerId) === g.default.getId(), [s]),
        { canInvite: L, canManageGuild: P, canMessage: O } = (0, _.TE)(t, s),
        y = (0, c.e7)([I.default], () => {
            var e, t;
            return (null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: D, guildMessaged: k, guildPersonalized: U } = (0, _.h_)(s),
        {
            handleInvite: w,
            handleMessage: B,
            handlePersonalize: H,
            handleDownload: G,
            handleAddApplication: V
        } = (function (e) {
            let t = a.useCallback(() => {
                    m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: M.Ft.CHANNEL_WELCOME,
                        action: M.j7.INVITE
                    }),
                        null != e &&
                            (0, d.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('66633')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        guild: e,
                                        source: A.t4x.CHANNEL_WELCOME,
                                        analyticsLocation: { section: A.jXE.CHANNEL_WELCOME_CTA }
                                    });
                            });
                }, [e]),
                s = a.useCallback(() => {
                    m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: M.Ft.CHANNEL_WELCOME,
                        action: M.j7.SEND_MESSAGE
                    }),
                        T.S.dispatch(A.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: A.lds
                        });
                }, []),
                l = a.useCallback(() => {
                    m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: M.Ft.CHANNEL_WELCOME,
                        action: M.j7.PERSONALIZE_SERVER
                    }),
                        null != e && f.Z.open(e.id, A.pNK.OVERVIEW, { section: A.jXE.CHANNEL_WELCOME_CTA });
                }, [e]),
                r = a.useCallback(() => {
                    m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: M.Ft.CHANNEL_WELCOME,
                        action: M.j7.DOWNLOAD
                    }),
                        (0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    source: A.jXE.CHANNEL_WELCOME_CTA,
                                    ...t
                                });
                        });
                }, []);
            return {
                handleInvite: t,
                handleMessage: s,
                handlePersonalize: l,
                handleDownload: r,
                handleAddApplication: a.useCallback(() => {
                    null != e &&
                        (m.ZP.trackWithMetadata(A.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: M.Ft.CHANNEL_WELCOME,
                            action: M.j7.ADD_APP
                        }),
                        (0, d.openModalLazy)(async () => {
                            let { default: t } = await n.e('77875').then(n.bind(n, 657300));
                            return (n) => {
                                var a;
                                return (0, i.jsx)(t, {
                                    guildId: null !== (a = e.id) && void 0 !== a ? a : '',
                                    ...n,
                                    analyticsType: u.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                                });
                            };
                        }));
                }, [e])
            };
        })(s),
        F = !(y || D || k || U),
        { titleAnimatedStyle: W, opacities: z } = (function (e) {
            let t = (0, r.Z)(() => new o.Z.Value(0)),
                n = (0, r.Z)(() => new o.Z.Value(0)),
                i = [];
            return (
                i.push((0, r.Z)(() => new o.Z.Value(0))),
                i.push((0, r.Z)(() => new o.Z.Value(0))),
                i.push((0, r.Z)(() => new o.Z.Value(0))),
                i.push((0, r.Z)(() => new o.Z.Value(0))),
                a.useEffect(() => {
                    o.Z.stagger(300, [
                        o.Z.parallel([
                            o.Z.timing(n, {
                                toValue: 1,
                                duration: 450
                            }),
                            o.Z.timing(t, {
                                toValue: 1,
                                duration: 450
                            })
                        ]),
                        o.Z.stagger(100, [
                            o.Z.timing(i[0], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(i[1], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(i[2], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(i[3], {
                                toValue: 1,
                                duration: 300
                            })
                        ])
                    ]).start();
                }, [n, t, i]),
                {
                    titleAnimatedStyle: e
                        ? {
                              transform: [
                                  {
                                      translateY: t.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ['-20px', '0px']
                                      })
                                  }
                              ],
                              opacity: n
                          }
                        : {},
                    opacities: i
                }
            );
        })(F),
        Y = (0, c.e7)([p.Z], () => p.Z.getGuildApplicationIds(null == s ? void 0 : s.id)).length > 0;
    if (
        (a.useEffect(() => {
            var e;
            (0, E.i)(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : A.lds);
        }, [s]),
        null == s)
    )
        return null;
    let K = [];
    !h &&
        (L &&
            K.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: R.cardWrapper,
                        style: F ? { opacity: z[K.length] } : {},
                        children: (0, i.jsx)(j, {
                            iconUrl: n(538548),
                            header: b.Z.Messages.WELCOME_CTA_INVITE_TITLE,
                            completed: D,
                            onClick: w
                        })
                    },
                    'invite'
                )
            ),
        P &&
            K.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: R.cardWrapper,
                        style: F ? { opacity: z[K.length] } : {},
                        children: (0, i.jsx)(j, {
                            iconUrl: n(753033),
                            header: b.Z.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
                            completed: U,
                            onClick: H
                        })
                    },
                    'customize'
                )
            ),
        O &&
            K.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: R.cardWrapper,
                        style: F ? { opacity: z[K.length] } : {},
                        children: (0, i.jsx)(j, {
                            iconUrl: n(15717),
                            header: b.Z.Messages.WELCOME_CTA_MESSAGE_TITLE,
                            completed: k,
                            onClick: B
                        })
                    },
                    'message'
                )
            ),
        (0, v.isWeb)() &&
            K.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: R.cardWrapper,
                        style: F ? { opacity: z[K.length] } : {},
                        children: (0, i.jsx)(j, {
                            iconUrl: n(435921),
                            header: b.Z.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
                            completed: y,
                            onClick: G
                        })
                    },
                    'download'
                )
            ),
        K.push(
            (0, i.jsx)(
                o.Z.div,
                {
                    className: R.cardWrapper,
                    style: F ? { opacity: z[K.length] } : {},
                    children: (0, i.jsx)(j, {
                        iconUrl: n(881454),
                        header: b.Z.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
                        completed: Y,
                        onClick: V
                    })
                },
                'addapp'
            )
        ));
    let q = x ? b.Z.Messages.WELCOME_CTA_SUBTITLE_OWNER : b.Z.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
    h && (q = b.Z.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
    let X = ''.concat(N.Z.getArticleURL(A.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, i.jsx)(Z.ZP, {
        channelId: t.id,
        children: (0, i.jsx)('div', {
            className: R.container,
            children: (0, i.jsxs)('div', {
                className: R.inner,
                children: [
                    (0, i.jsxs)(o.Z.div, {
                        style: W,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                className: R.titleName,
                                variant: 'heading-xxl/semibold',
                                children: b.Z.Messages.WELCOME_CTA_TITLE.format({ guildName: s.name })
                            }),
                            (0, i.jsxs)(d.Text, {
                                color: 'header-secondary',
                                className: l()({
                                    [R.subtitle]: !0,
                                    [R.noChildren]: 0 === K.length
                                }),
                                variant: 'text-sm/normal',
                                children: [q, ' ', K.length > 0 ? b.Z.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({ guideURL: X }) : null]
                            })
                        ]
                    }),
                    K
                ]
            })
        })
    });
}
