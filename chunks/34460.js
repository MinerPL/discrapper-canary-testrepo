a.r(t),
    a.d(t, {
        default: function () {
            return v;
        }
    }),
    a(47120);
var n = a(735250),
    s = a(470079),
    l = a(120356),
    i = a.n(l),
    r = a(990547),
    c = a(399606),
    o = a(780384),
    d = a(481060),
    _ = a(935369),
    m = a(367907),
    T = a(213609),
    x = a(44315),
    I = a(210887),
    E = a(626135),
    u = a(923726),
    h = a(570849),
    R = a(853439),
    C = a(303737),
    p = a(587431),
    L = a(862239),
    N = a(847004),
    g = a(981631),
    S = a(689938),
    j = a(159774);
function O(e) {
    let { name: t, imageUrl: a, selected: s, onTap: l } = e;
    return (0, n.jsxs)(d.Clickable, {
        onClick: l,
        className: j.templateCard,
        children: [
            (0, n.jsx)('img', {
                src: a,
                alt: '',
                className: j.templateCardImage
            }),
            (0, n.jsxs)('div', {
                className: j.templateNameRow,
                children: [
                    (0, n.jsx)(d.Heading, {
                        variant: 'heading-md/normal',
                        className: i()({ [j.unselectedTemplateName]: !s }),
                        children: t
                    }),
                    s &&
                        (0, n.jsx)(d.CircleCheckIcon, {
                            size: 'md',
                            secondaryColor: (0, x.Lq)(g.Ilk.WHITE_500),
                            color: (0, x.Lq)(g.Ilk.BRAND_500)
                        })
                ]
            })
        ]
    });
}
function f(e) {
    let { loading: t, error: a, templates: s, selectedTemplateIndex: l, handleTapTemplate: i } = e,
        r = (0, c.e7)([I.Z], () => I.Z.theme);
    return t
        ? (0, n.jsx)(d.Spinner, {})
        : null != a
          ? (0, n.jsx)(p.Z, { children: a.message })
          : null == s || 0 === s.length
            ? null
            : (0, n.jsx)('div', {
                  className: j.templateCardList,
                  children: s.map((e, t) =>
                      (0, n.jsx)(
                          O,
                          {
                              imageUrl: t === l ? e.category_image : (0, o.ap)(r) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === l,
                              onTap: () => i(t)
                          },
                          t
                      )
                  )
              });
}
function B(e) {
    var t, a;
    let { guildId: l, templates: i, selectedTemplateIndex: r, priceTiers: c, showPriceReselection: o, setShowPriceReselection: d, handleCreateTierFromTemplate: _ } = e,
        m = (0, C.g4)(l, c, null != i ? (null === (a = i[r]) || void 0 === a ? void 0 : null === (t = a.listings[0]) || void 0 === t ? void 0 : t.price_tier) : void 0),
        T = null != m && m.length > 0,
        x = s.useCallback(
            (e) => {
                T ? d(!0) : _(e);
            },
            [_, T, d]
        );
    return null == i || 0 === i.length
        ? null
        : o && T
          ? (0, n.jsx)(N.Z, {
                selectedTemplate: i[r],
                handleSelectTemplate: _,
                newPricesToPick: m
            })
          : (0, n.jsx)(L.Z, {
                selectedTemplate: i[r],
                handleSelectTemplate: x
            });
}
function v(e) {
    let { transitionState: t, onClose: a, guildId: l, addNewEditStateFromTemplate: i, addNewEditStateFromScratch: o, priceTiers: x } = e,
        I = (0, c.e7)([R.Z], () => R.Z.getTemplates(l)),
        [C, { loading: p, error: L }] = (0, _.Z)(h.u),
        N = s.useRef('voluntarily_exit');
    s.useEffect(() => {
        (null == I || 0 === I.length) && C(l);
    }, [C, l, I]),
        s.useEffect(() => {
            t === d.ModalTransitionState.EXITING &&
                E.default.track(g.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: N.current,
                    ...(0, m.hH)(l)
                });
        }, [t, l, N]);
    let [O, v] = s.useState(0),
        [M, A] = s.useState(!1),
        D = s.useCallback(
            (e) => {
                (N.current = 'template_selected'), (0, h.l)(e, l), i(e), a();
            },
            [l, i, a]
        ),
        U = s.useCallback(() => {
            M ? A(!1) : a();
        }, [M, a]),
        b = (0, u.yi)(l);
    return (
        (0, T.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: l }
        }),
        (0, n.jsxs)(d.ModalRoot, {
            transitionState: t,
            size: d.ModalSize.DYNAMIC,
            className: j.modalRoot,
            children: [
                (0, n.jsx)(d.Clickable, {
                    onClick: U,
                    className: j.closeButton,
                    children: (0, n.jsx)(d.XSmallIcon, {
                        size: 'xxs',
                        color: 'currentColor'
                    })
                }),
                (0, n.jsxs)(d.ModalContent, {
                    className: j.modalContent,
                    children: [
                        (0, n.jsxs)('div', {
                            className: j.templatesContainer,
                            children: [
                                M &&
                                    (0, n.jsx)(d.Clickable, {
                                        className: j.blackoutOverlay,
                                        onClick: () => {
                                            M && A(!1);
                                        },
                                        'aria-label': 'overlay'
                                    }),
                                (0, n.jsxs)(d.ScrollerThin, {
                                    className: j.templatesContainerBody,
                                    children: [
                                        (0, n.jsx)(d.Heading, {
                                            variant: 'heading-xl/semibold',
                                            children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_HEADER
                                        }),
                                        (0, n.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            className: j.modalBodyText,
                                            children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_BODY
                                        }),
                                        b &&
                                            (0, n.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                className: j.creatorPortalText,
                                                children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATOR_PORTAL_LINK.format({ creatorPortalUrl: 'https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons' })
                                            }),
                                        (0, n.jsx)('div', {
                                            className: j.templatesContentContainer,
                                            children: (0, n.jsx)(f, {
                                                loading: p,
                                                error: L,
                                                templates: I,
                                                selectedTemplateIndex: O,
                                                handleTapTemplate: (e) => {
                                                    v(e);
                                                }
                                            })
                                        })
                                    ]
                                }),
                                (0, n.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_PROMPT
                                }),
                                (0, n.jsxs)(d.Button, {
                                    size: d.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        (N.current = 'create_from_scratch'), o(), a();
                                    },
                                    look: d.Button.Looks.OUTLINED,
                                    color: d.Button.Colors.PRIMARY,
                                    className: j.createFromStratchButton,
                                    innerClassName: j.createFromStratchButtonInner,
                                    children: [
                                        (0, n.jsx)(d.PencilIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 14,
                                            height: 14,
                                            className: j.editIcon
                                        }),
                                        S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_BUTTON
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)(B, {
                            guildId: l,
                            templates: I,
                            selectedTemplateIndex: O,
                            priceTiers: x,
                            showPriceReselection: M,
                            setShowPriceReselection: A,
                            handleCreateTierFromTemplate: D
                        })
                    ]
                })
            ]
        })
    );
}
