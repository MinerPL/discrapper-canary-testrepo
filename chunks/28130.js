i.r(n),
    i.d(n, {
        default: function () {
            return k;
        }
    }),
    i(47120);
var a = i(735250),
    o = i(470079),
    t = i(442837),
    l = i(481060),
    s = i(100527),
    c = i(906732),
    r = i(807582),
    d = i(813197),
    f = i(81245),
    u = i(530329),
    p = i(430824),
    x = i(914010),
    _ = i(594174),
    m = i(451478),
    g = i(626135),
    C = i(74538),
    b = i(621961),
    h = i(884858),
    I = i(981631),
    N = i(486324),
    j = i(869783),
    v = i(689938),
    E = i(403661);
let M = [
    {
        gif: i(495682),
        png: i(458060)
    },
    {
        gif: i(842786),
        png: i(460790)
    },
    {
        gif: i(578831),
        png: i(642193)
    },
    {
        gif: i(145908),
        png: i(690695)
    }
];
function A(e) {
    let { shouldAnimate: n = !0 } = e,
        [i, t] = o.useState(!1);
    return (0, a.jsx)('div', {
        className: E.gifGrid,
        onMouseMove: () => t(!0),
        onMouseLeave: () => t(!1),
        children: M.map((e) =>
            (0, a.jsx)(
                'div',
                {
                    className: E.gif,
                    style: { backgroundImage: 'url('.concat(n || i ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function T(e) {
    let { guildFeature: n, guild: i } = e;
    return null == n || null == i
        ? null
        : (0, a.jsx)('div', {
              className: E.pillWrapper,
              children: (0, a.jsx)(r.Z, {
                  guildFeature: n,
                  guild: i,
                  hideTooltip: !0
              })
          });
}
function L(e) {
    let { uploadType: n, guild: i } = e;
    return (0, a.jsxs)('div', {
        className: E.optionBoxText,
        children: [
            (0, a.jsx)(T, {
                guild: i,
                guildFeature: (0, b.C)(n, { isGIF: !0 })
            }),
            (0, a.jsxs)('div', {
                className: E.optionBoxDescription,
                children: [
                    (0, b.K)(n) &&
                        (0, a.jsx)(l.TooltipContainer, {
                            className: E.nitroWheelFlairContainer,
                            text: v.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, a.jsx)(l.NitroWheelIcon, {
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
function O(e) {
    let { title: n, uploadType: i, guild: o } = e;
    return (0, a.jsxs)('div', {
        className: E.optionBoxText,
        children: [
            (0, a.jsx)(T, {
                guildFeature: (0, b.C)(i, { isGIF: !1 }),
                guild: o
            }),
            (0, a.jsx)('div', {
                className: E.optionBoxDescription,
                children: n
            })
        ]
    });
}
function k(e) {
    let { transitionState: n, onClose: r, onComplete: b, uploadType: M, maxFileSizeBytes: T, showUpsellHeader: k, filters: y, analyticsLocation: P, analyticsLocations: Z = [], modalSubTitle: F, imageSpecifications: U, modalTitle: R = v.Z.Messages.SELECT_IMAGE_MODAL_TITLE, uploadOptionTitle: D = v.Z.Messages.UPLOAD_IMAGE } = e,
        B = (0, t.e7)([m.Z], () => m.Z.isFocused()),
        S = (0, t.e7)([_.default], () => _.default.getCurrentUser()),
        G = (0, t.e7)([x.Z], () => x.Z.getGuildId()),
        w = (0, t.e7)([p.Z], () => p.Z.getGuild(G)),
        { reducedMotion: H } = o.useContext(l.AccessibilityPreferencesContext),
        W = (0, l.useModalContext)(),
        z = !C.ZP.canUseAnimatedAvatar(S) && M === N.pC.AVATAR,
        { analyticsLocations: K } = (0, c.ZP)(Z, s.Z.SELECT_IMAGE_MODAL);
    function V(e, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        r(), b(e, n, i);
    }
    o.useEffect(() => {
        z &&
            g.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: K
            }),
            g.default.track(I.rMx.OPEN_MODAL, {
                type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: P
            });
    }, [z, P, K]);
    let X = M === N.pC.AVATAR || M === N.pC.BANNER,
        q = (0, f.Mu)('SelectImageModal', !X);
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: n,
        size: l.ModalSize.SMALL,
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                className: E.modalHeader,
                separator: !1,
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H1,
                                className: E.modalTitle,
                                children: R
                            }),
                            null != F
                                ? (0, a.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: F
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(l.ModalCloseButton, {
                        onClick: r,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: E.modalContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: E.imagePickerContainer,
                        children: [
                            (0, a.jsxs)(l.Clickable, {
                                className: E.optionBox,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: E.contentCircle,
                                        children: (0, a.jsx)(l.ImagePlusIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: E.uploadIcon
                                        })
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, a.jsx)(O, {
                                            title: D,
                                            uploadType: M,
                                            guild: w
                                        })
                                    }),
                                    (0, a.jsx)(d.ZP, {
                                        onChange: function (e, n) {
                                            if (n.type === j.m.MP4) return V(e, n);
                                            (0, l.openModalLazy)(
                                                async () => {
                                                    let { default: o } = await Promise.all([i.e('48017'), i.e('29625')]).then(i.bind(i, 850085));
                                                    return (i) =>
                                                        (0, a.jsx)(o, {
                                                            imgURI: e,
                                                            file: n,
                                                            onCrop: V,
                                                            uploadType: M,
                                                            showUpsellHeader: k,
                                                            allowSkip: !0,
                                                            analyticsPage: null == P ? void 0 : P.page,
                                                            ...i
                                                        });
                                                },
                                                { contextKey: W }
                                            );
                                        },
                                        maxFileSizeBytes: T,
                                        onFileSizeError: function () {
                                            r(), (0, h.Z)(T);
                                        },
                                        filters: y
                                    })
                                ]
                            }),
                            (0, a.jsxs)(l.Clickable, {
                                className: E.optionBox,
                                onClick: function () {
                                    (0, l.openModalLazy)(
                                        async () => {
                                            let { default: e } = await i.e('72891').then(i.bind(i, 195297));
                                            return (n) =>
                                                (0, a.jsx)(e, {
                                                    uploadType: M,
                                                    onComplete: (e, n) => V(e, n, !0),
                                                    showUpsellHeader: k,
                                                    analyticsPage: null == P ? void 0 : P.page,
                                                    ...n
                                                });
                                        },
                                        { contextKey: W }
                                    );
                                },
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: E.contentCircle,
                                        children: [
                                            (0, a.jsx)(A, { shouldAnimate: B && !H.enabled }),
                                            (0, a.jsx)('div', {
                                                className: E.gifIconContainer,
                                                children: (0, a.jsx)(l.GifIcon, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: E.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, a.jsx)(L, {
                                            uploadType: M,
                                            guild: w
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != U
                        ? (0, a.jsx)(l.Text, {
                              className: E.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: U
                          })
                        : null,
                    k &&
                        q &&
                        (0, a.jsx)(u.Z, {
                            uploadType: M,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: E.nitroUpsell,
                            onSecondaryClick: r
                        })
                ]
            })
        ]
    });
}
