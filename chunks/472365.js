n.d(t, {
    Z: function () {
        return U;
    }
}), n(411104);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(399606), o = n(481060), c = n(588705), u = n(100527), d = n(906732), h = n(388905), p = n(792766), _ = n(451603), f = n(885714), m = n(973616), g = n(594174), C = n(285952), I = n(672752), E = n(153124), N = n(855981), x = n(55543), S = n(626135), Z = n(768581), v = n(358085), T = n(998502), L = n(379164), A = n(590965), b = n(981631), M = n(474936), R = n(689938), y = n(71044), O = n(331651);
function P() {
    let {
        analyticsLocations: e,
        sourceAnalyticsLocations: t
    } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return l.useEffect(() => {
        S.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
            type: M.cd.GUILD_CAP_INLINE_INVITE_MODAL,
            location: { page: b.ZY5.NATIVE_INVITE_MODAL },
            location_stack: t
        });
    }, [t]), (0, i.jsxs)(o.Clickable, {
        onClick: () => (0, f.Z)({
            analyticsSource: { page: b.Sbl.EXTERNAL_INVITE_LINK_MODAL },
            analyticsLocation: {
                page: b.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                section: b.jXE.GUILD_CAP_UPSELL_MODAL
            },
            analyticsLocations: e
        }),
        className: y.experimentUpsellError,
        children: [
            (0, i.jsx)(o.NitroWheelIcon, {
                size: 'md',
                className: y.experimentUpsellIcon,
                color: I.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)('span', {
                className: y.experimentUpsellText,
                children: R.Z.Messages.GUILD_CAP_UPSELL_TOOLTIP
            }),
            (0, i.jsx)('span', {
                className: y.experimentGetNitro,
                children: R.Z.Messages.GUILD_CAP_UPSELL_GET_NITRO
            })
        ]
    });
}
function j(e) {
    let {className: t} = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: a()(y.iconContainer, t),
        children: [
            (0, i.jsx)(N.Z, { className: y.iconSparklePlus }),
            (0, i.jsx)(o.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: y.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(x.Z, { className: y.iconSparkleStar })
        ]
    });
}
function D(e) {
    let {transitionState: t} = e, n = (0, E.Dt)(), {analyticsLocations: l} = (0, d.ZP)(u.Z.INVITE_MODAL);
    return (0, i.jsx)(d.Gt, {
        value: l,
        children: (0, i.jsx)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            'aria-labelledby': n,
            transitionState: t,
            children: (0, i.jsxs)(o.ModalContent, {
                className: y.errorContent,
                children: [
                    (0, i.jsx)(j, { className: y.errorImage }),
                    (0, i.jsx)(o.Heading, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: R.Z.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
                    }),
                    (0, i.jsx)('div', {
                        className: y.errorBody,
                        children: R.Z.Messages.INVITE_MODAL_ERROR_INVALID_BODY
                    }),
                    (0, i.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => L.Z.close(),
                        color: h.zx.Colors.BRAND,
                        children: R.Z.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT
                    })
                ]
            })
        })
    });
}
function U(e) {
    let t, n, {transitionState: r} = e;
    (0, s.e7)([g.default], () => {
        var e;
        return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let {
        invite: f,
        error: I,
        submitting: N
    } = (0, s.cj)([A.Z], () => A.Z.getProps());
    l.useEffect(() => {
        !__OVERLAY__ && v.isPlatformEmbedded && ((0, v.isWindows)() ? T.ZP.minimize() : T.ZP.restore(), T.ZP.focus());
    }, []);
    let x = (0, E.Dt)(), {analyticsLocations: S} = (0, d.ZP)(u.Z.INVITE_MODAL);
    if (null == f)
        return null;
    if (f.state === b.r2o.EXPIRED || f.state === b.r2o.BANNED || f.state === b.r2o.ERROR)
        return (0, i.jsx)(D, { transitionState: r });
    if (null == f.channel)
        return null;
    function M() {
        null != f && L.Z.acceptInvite(f);
    }
    let {
            guild: j,
            channel: U,
            inviter: G,
            target_application: w
        } = f, k = null != j, B = null != f.stage_instance, V = null == f.guild && null == f.channel && null != f.inviter;
    if (null != w)
        t = null == j ? void 0 : j.name, n = m.Z.createFromServer(w).getCoverImageURL(1024);
    else if (null != j)
        t = j.name, n = Z.ZP.getGuildSplashURL({
            id: j.id,
            splash: j.splash
        });
    else if ((null == (t = U.name) || '' === t) && null != G && (t = G.username), null == t)
        throw Error('no name for group DM invite');
    let H = (0, _.yU)(), F = B ? R.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : R.Z.Messages.INVITE_MODAL_BUTTON.format({ guildName: t });
    return V && (F = R.Z.Messages.ACCEPT_INVITE_MODAL_BUTTON), (0, i.jsx)(d.Gt, {
        value: S,
        children: (0, i.jsxs)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            'aria-labelledby': x,
            transitionState: r,
            className: y.container,
            children: [
                (0, i.jsx)('div', {
                    className: y.contentWrapper,
                    children: (0, i.jsx)(o.Scroller, {
                        className: y.scroller,
                        children: (0, i.jsxs)(C.Z, {
                            className: y.inviteContent,
                            direction: C.Z.Direction.VERTICAL,
                            justify: C.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)('div', {
                                    id: x,
                                    className: O.marginBottom20,
                                    children: (0, i.jsx)(c.Z, {
                                        invite: f,
                                        disableUser: k,
                                        error: I
                                    })
                                }),
                                B && null != j ? (0, i.jsx)('div', {
                                    className: a()(O.marginBottom20, y.stage),
                                    children: (0, i.jsx)(p.Z, {
                                        isCard: !0,
                                        stageInstance: f.stage_instance,
                                        guild: j
                                    })
                                }) : null,
                                (0, i.jsxs)('div', {
                                    children: [
                                        H ? (0, i.jsx)(P, {}) : null,
                                        null == w ? (0, i.jsx)(o.Tooltip, {
                                            text: H ? R.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION : null,
                                            position: 'bottom',
                                            children: e => {
                                                let {
                                                    onMouseEnter: t,
                                                    onMouseLeave: n
                                                } = e;
                                                return (0, i.jsx)(h.zx, {
                                                    size: h.zx.Sizes.LARGE,
                                                    onClick: M,
                                                    submitting: N,
                                                    disabled: H,
                                                    color: B ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
                                                    onMouseEnter: t,
                                                    onMouseLeave: n,
                                                    children: H ? R.Z.Messages.GUILD_CAP_INVITE_MODAL_BUTTON : F
                                                });
                                            }
                                        }) : (0, i.jsxs)('div', {
                                            className: y.buttonGroup,
                                            children: [
                                                (0, i.jsx)(h.zx, {
                                                    size: h.zx.Sizes.LARGE,
                                                    onClick: M,
                                                    submitting: N,
                                                    children: R.Z.Messages.PLAY
                                                }),
                                                (0, i.jsx)(h.zx, {
                                                    color: h.zx.Colors.PRIMARY,
                                                    size: h.zx.Sizes.LARGE,
                                                    onClick: M,
                                                    submitting: N,
                                                    children: R.Z.Messages.SPECTATE
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            justify: C.Z.Justify.CENTER,
                                            className: O.marginTop8,
                                            children: (0, i.jsx)(h.zx, {
                                                look: h.zx.Looks.LINK,
                                                className: y.noThanksButton,
                                                onClick: function () {
                                                    L.Z.close();
                                                },
                                                color: h.zx.Colors.TRANSPARENT,
                                                children: R.Z.Messages.INIVTE_MODAL_NO_THANKS
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                null != n && (0, i.jsx)('div', {
                    className: y.inviteSplash,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                })
            ]
        })
    });
}
