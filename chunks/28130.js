a.r(n),
    a.d(n, {
        default: function () {
            return P;
        }
    }),
    a(47120);
var i = a(735250),
    o = a(470079),
    t = a(442837),
    l = a(481060),
    s = a(100527),
    r = a(906732),
    c = a(807582),
    d = a(813197),
    f = a(81245),
    u = a(530329),
    p = a(430824),
    x = a(914010),
    _ = a(594174),
    m = a(451478),
    g = a(626135),
    C = a(74538),
    b = a(621961),
    I = a(884858),
    h = a(981631),
    N = a(486324),
    j = a(869783),
    v = a(689938),
    E = a(802542);
let T = [
    {
        gif: a(495682),
        png: a(458060)
    },
    {
        gif: a(842786),
        png: a(460790)
    },
    {
        gif: a(578831),
        png: a(642193)
    },
    {
        gif: a(145908),
        png: a(690695)
    }
];
function M(e) {
    let { shouldAnimate: n = !0 } = e,
        [a, t] = o.useState(!1);
    return (0, i.jsx)('div', {
        className: E.gifGrid,
        onMouseMove: () => t(!0),
        onMouseLeave: () => t(!1),
        children: T.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: E.gif,
                    style: { backgroundImage: 'url('.concat(n || a ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function A(e) {
    let { guildFeature: n, guild: a } = e;
    return null == n || null == a
        ? null
        : (0, i.jsx)('div', {
              className: E.pillWrapper,
              children: (0, i.jsx)(c.Z, {
                  guildFeature: n,
                  guild: a,
                  hideTooltip: !0
              })
          });
}
function O(e) {
    let { uploadType: n, guild: a } = e;
    return (0, i.jsxs)('div', {
        className: E.optionBoxText,
        children: [
            (0, i.jsx)(A, {
                guild: a,
                guildFeature: (0, b.C)(n, { isGIF: !0 })
            }),
            (0, i.jsxs)('div', {
                className: E.optionBoxDescription,
                children: [
                    (0, b.K)(n) &&
                        (0, i.jsx)(l.TooltipContainer, {
                            className: E.nitroWheelFlairContainer,
                            text: v.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, i.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: E.nitroWheelFlair
                            })
                        }),
                    v.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                ]
            })
        ]
    });
}
function L(e) {
    let { title: n, uploadType: a, guild: o } = e;
    return (0, i.jsxs)('div', {
        className: E.optionBoxText,
        children: [
            (0, i.jsx)(A, {
                guildFeature: (0, b.C)(a, { isGIF: !1 }),
                guild: o
            }),
            (0, i.jsxs)('div', {
                className: E.optionBoxDescription,
                children: [
                    a === N.pC.BANNER &&
                        (0, i.jsx)(l.TooltipContainer, {
                            className: E.nitroWheelFlairContainer,
                            text: v.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, i.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: E.nitroWheelFlair
                            })
                        }),
                    n
                ]
            })
        ]
    });
}
function P(e) {
    let { transitionState: n, onClose: c, onComplete: b, uploadType: T, maxFileSizeBytes: A, showUpsellHeader: P, filters: Z, analyticsLocation: k, analyticsLocations: y = [], modalSubTitle: F, imageSpecifications: R, modalTitle: U = v.Z.Messages.SELECT_IMAGE_MODAL_TITLE, uploadOptionTitle: B = v.Z.Messages.UPLOAD_IMAGE } = e,
        D = (0, t.e7)([m.Z], () => m.Z.isFocused()),
        S = (0, t.e7)([_.default], () => _.default.getCurrentUser()),
        G = (0, t.e7)([x.Z], () => x.Z.getGuildId()),
        w = (0, t.e7)([p.Z], () => p.Z.getGuild(G)),
        { reducedMotion: W } = o.useContext(l.AccessibilityPreferencesContext),
        H = (0, l.useModalContext)(),
        z = !C.ZP.canUseAnimatedAvatar(S) && T === N.pC.AVATAR,
        { analyticsLocations: K } = (0, r.ZP)(y, s.Z.SELECT_IMAGE_MODAL);
    function V(e, n) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c(), b(e, n, a);
    }
    o.useEffect(() => {
        z &&
            g.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: K
            }),
            g.default.track(h.rMx.OPEN_MODAL, {
                type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: k
            });
    }, [z, k, K]);
    let X = T === N.pC.AVATAR || T === N.pC.BANNER,
        q = (0, f.Mu)('SelectImageModal', !X);
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: n,
        size: l.ModalSize.SMALL,
        children: [
            (0, i.jsxs)(l.ModalHeader, {
                className: E.modalHeader,
                separator: !1,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H1,
                                className: E.modalTitle,
                                children: U
                            }),
                            null != F
                                ? (0, i.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: F
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(l.ModalCloseButton, {
                        onClick: c,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(l.ModalContent, {
                className: E.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.imagePickerContainer,
                        children: [
                            (0, i.jsxs)(l.Clickable, {
                                className: E.optionBox,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: E.contentCircle,
                                        children: (0, i.jsx)(l.ImagePlusIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: E.uploadIcon
                                        })
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, i.jsx)(L, {
                                            title: B,
                                            uploadType: T,
                                            guild: w
                                        })
                                    }),
                                    (0, i.jsx)(d.ZP, {
                                        onChange: function (e, n) {
                                            if (n.type === j.m.MP4) return V(e, n);
                                            (0, l.openModalLazy)(
                                                async () => {
                                                    let { default: o } = await Promise.all([a.e('48017'), a.e('61694')]).then(a.bind(a, 850085));
                                                    return (a) =>
                                                        (0, i.jsx)(o, {
                                                            imgURI: e,
                                                            file: n,
                                                            onCrop: V,
                                                            uploadType: T,
                                                            showUpsellHeader: P,
                                                            allowSkip: !0,
                                                            analyticsPage: null == k ? void 0 : k.page,
                                                            ...a
                                                        });
                                                },
                                                { contextKey: H }
                                            );
                                        },
                                        maxFileSizeBytes: A,
                                        onFileSizeError: function () {
                                            c(), (0, I.Z)(A);
                                        },
                                        filters: Z
                                    })
                                ]
                            }),
                            (0, i.jsxs)(l.Clickable, {
                                className: E.optionBox,
                                onClick: function () {
                                    (0, l.openModalLazy)(
                                        async () => {
                                            let { default: e } = await a.e('72891').then(a.bind(a, 195297));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    uploadType: T,
                                                    onComplete: (e, n) => V(e, n, !0),
                                                    showUpsellHeader: P,
                                                    analyticsPage: null == k ? void 0 : k.page,
                                                    ...n
                                                });
                                        },
                                        { contextKey: H }
                                    );
                                },
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: E.contentCircle,
                                        children: [
                                            (0, i.jsx)(M, { shouldAnimate: D && !W.enabled }),
                                            (0, i.jsx)('div', {
                                                className: E.gifIconContainer,
                                                children: (0, i.jsx)(l.GifIcon, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: E.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, i.jsx)(O, {
                                            uploadType: T,
                                            guild: w
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != R
                        ? (0, i.jsx)(l.Text, {
                              className: E.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: R
                          })
                        : null,
                    P &&
                        q &&
                        (0, i.jsx)(u.Z, {
                            uploadType: T,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: E.nitroUpsell
                        })
                ]
            })
        ]
    });
}
