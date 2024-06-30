n.d(t, {
    Z: function () {
        return b;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(512722), o = n.n(l), c = n(392711), d = n.n(c), u = n(77866), _ = n(215569), E = n(477690), I = n(481060), T = n(852860), m = n(393238), N = n(345861), S = n(208567), h = n(153124), g = n(73346), C = n(624138), x = n(584825), p = n(723047), R = n(927954), f = n(164000), L = n(587431), O = n(293810), A = n(333866), M = n(689938), v = n(857669);
let D = (0, C.Mg)(E.Z.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function j() {
    return [
        {
            name: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_NAME,
            desc: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_SOME_CHANNELS_DESCRIPTION,
            value: O.e3.SOME_CHANNELS,
            icon: I.TextIcon
        },
        {
            name: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_NAME,
            desc: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DESCRIPTION,
            value: O.e3.ALL_CHANNELS,
            icon: I.KeyIcon
        }
    ];
}
function Z(e) {
    let {
            value: t,
            'aria-labelledby': n,
            onChange: i,
            disabled: l = !1
        } = e, {
            ref: o,
            width: c
        } = (0, m.Z)(), d = (0, u.Z)(j), _ = a.useMemo(() => d.map(e => ({
            ...e,
            icon: function () {
                let {icon: t} = e;
                return (0, s.jsx)('div', {
                    className: v.formatRadioIconWrapper,
                    children: (0, s.jsx)(t, { className: v.formatRadioIcon })
                });
            },
            radioBarClassName: v.formatOptionRadioBar,
            radioItemIconClassName: v.formatOptionRadioItemIcon
        })), [d]), E = null != c && c >= 400;
    return (0, s.jsx)('div', {
        ref: o,
        children: (0, s.jsx)(I.RadioGroup, {
            options: _,
            value: t,
            orientation: E ? 'horizontal' : 'vertical',
            size: I.RadioGroup.Sizes.NONE,
            className: r()({ [v.radioGroupHorizontal]: E }),
            radioItemClassName: v.formatOptionRadioItem,
            onChange: e => {
                let {value: t} = e;
                return i(t);
            },
            'aria-labelledby': n,
            disabled: l
        })
    });
}
function b(e) {
    var t;
    let {
            guild: n,
            isGuildProducts: i = !1
        } = e, {format: r} = (0, f.Z)(n.id), l = (0, x.YB)(n.id), c = a.useCallback(() => {
            var e;
            return (null == l ? void 0 : null === (e = l.cover_image_asset) || void 0 === e ? void 0 : e.application_id) == null ? null : (0, g._W)(l.cover_image_asset.application_id, l.cover_image_asset, D);
        }, [l]), [u, E] = a.useState(r), [m, C] = a.useState(null !== (t = null == l ? void 0 : l.description) && void 0 !== t ? t : ''), [j, b] = a.useState(c), [U, G] = a.useState(null == l ? void 0 : l.store_page_guild_products_default_sort), [P, B] = a.useState(null == l ? void 0 : l.server_shop_tab_order), {
            loading: y,
            error: F,
            updateSubscriptionsSettings: k
        } = (0, x.QV)(), {
            imageCTA: w,
            imageAriaLabel: H,
            setFilename: V
        } = (0, R.Z)(null == l ? void 0 : l.cover_image_asset), Y = (0, h.Dt)(), W = (0, h.Dt)(), z = (0, h.Dt)();
    function K(e, t) {
        o()(null != e, 'Null value not allowed'), null != t && V(t.name), b(e);
    }
    let q = a.useMemo(() => {
            var e;
            return null != m && m !== (null !== (e = null == l ? void 0 : l.description) && void 0 !== e ? e : '') || (null == j ? void 0 : j.startsWith('data:')) === !0 || u !== r || (null == l ? void 0 : l.store_page_guild_products_default_sort) !== U || (null == l ? void 0 : l.server_shop_tab_order) !== P;
        }, [
            j,
            r,
            m,
            l,
            u,
            U,
            P
        ]), X = null != m && '' !== m && null != j;
    a.useEffect(() => {
        var e;
        (null == l ? void 0 : null === (e = l.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null && b((0, g._W)(l.cover_image_asset.application_id, l.cover_image_asset, D));
    }, [null == l ? void 0 : l.cover_image_asset]);
    let Q = (0, p.mY)(), J = a.useMemo(() => A.kL.map(e => ({
            label: (0, A.eJ)(e),
            value: e
        })), []), $ = a.useMemo(() => [
            {
                label: M.Z.Messages.GUILD_PRODUCTS_TITLE,
                value: A.a3.PRODUCTS_FIRST
            },
            {
                label: M.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
                value: A.a3.SUBS_FIRST
            }
        ], []);
    return (0, s.jsxs)('div', {
        className: v.container,
        children: [
            null != F && (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(L.Z, { children: F.getAnyErrorMessage() }),
                    (0, s.jsx)(I.Spacer, { size: 16 })
                ]
            }),
            i ? null : (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsxs)(I.FormSection, {
                        title: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_TITLE,
                        titleId: Y,
                        disabled: Q,
                        children: [
                            (0, s.jsx)(I.FormText, {
                                type: I.FormText.Types.DESCRIPTION,
                                className: v.formDescription,
                                disabled: Q,
                                children: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_DESCRIPTION
                            }),
                            (0, s.jsx)(Z, {
                                value: u,
                                onChange: e => {
                                    r !== e && e === O.e3.ALL_CHANNELS && (0, I.openModal)(e => (0, s.jsx)(I.ConfirmModal, {
                                        ...e,
                                        header: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TITLE,
                                        confirmText: M.Z.Messages.GOT_IT,
                                        confirmButtonColor: I.Button.Colors.BRAND,
                                        children: (0, s.jsx)(I.Text, {
                                            variant: 'text-md/normal',
                                            children: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_FORMAT_ALL_CHANNELS_DIALOG_TEXT
                                        })
                                    })), E(e);
                                },
                                'aria-labelledby': Y,
                                disabled: Q
                            })
                        ]
                    }),
                    (0, s.jsx)(I.FormDivider, { className: v.divider })
                ]
            }),
            (0, s.jsx)(I.FormSection, {
                title: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_TITLE,
                titleId: W,
                disabled: Q,
                children: (0, s.jsx)(I.TextArea, {
                    placeholder: i ? M.Z.Messages.GUILD_PRODUCT_SETUP_INFO_DESCRIPTION_PLACEHOLDER : M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_DESCRIPTION_PLACEHOLDER,
                    maxLength: 1500,
                    value: m,
                    rows: 2,
                    autosize: !0,
                    onChange: C,
                    'aria-labelledby': W,
                    disabled: Q
                })
            }),
            (0, s.jsx)(I.FormDivider, { className: v.divider }),
            (0, s.jsxs)(I.FormSection, {
                title: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_TITLE,
                disabled: Q,
                children: [
                    (0, s.jsx)(I.FormText, {
                        type: I.FormText.Types.DESCRIPTION,
                        className: v.formDescription,
                        disabled: Q,
                        children: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_DESCRIPTION
                    }),
                    (0, s.jsx)(S.Z, {
                        image: j,
                        hint: w,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: v.coverImageUploader,
                        iconWrapperClassName: v.coverImageUploaderIconWrapper,
                        imageClassName: v.coverImageUploaderInner,
                        iconClassName: v.coverImageUploaderIcon,
                        onChange: K,
                        'aria-label': H,
                        disabled: Q
                    }),
                    (0, s.jsx)(I.Spacer, { size: 16 }),
                    (0, s.jsx)(N.Z, {
                        onChange: K,
                        buttonCTA: w,
                        'aria-label': H,
                        disabled: Q,
                        look: I.Button.Looks.OUTLINED,
                        color: I.Button.Colors.PRIMARY
                    })
                ]
            }),
            i ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(I.FormDivider, { className: v.divider }),
                    (0, s.jsxs)(I.FormSection, {
                        title: M.Z.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_TITLE,
                        titleId: z,
                        disabled: Q,
                        children: [
                            (0, s.jsx)(I.FormText, {
                                type: I.FormText.Types.DESCRIPTION,
                                className: v.formDescription,
                                disabled: Q,
                                children: M.Z.Messages.CREATOR_MONETIZATION_SETTINGS_GUILD_PRODUCT_SORT_OPTION_DESCRIPTION
                            }),
                            (0, s.jsx)(I.SingleSelect, {
                                value: U,
                                placeholder: M.Z.Messages.SELECT,
                                options: J,
                                onChange: e => G(e)
                            })
                        ]
                    })
                ]
            }) : null,
            $.length > 0 && (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(I.FormDivider, { className: v.divider }),
                    (0, s.jsxs)(I.FormSection, {
                        title: M.Z.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_TITLE,
                        titleId: z,
                        disabled: Q,
                        children: [
                            (0, s.jsx)(I.FormText, {
                                type: I.FormText.Types.DESCRIPTION,
                                className: v.formDescription,
                                disabled: Q,
                                children: M.Z.Messages.CREATOR_MONETIZATION_SETTINGS_SERVER_SHOP_DEFAULT_TAB_OPTION_DESCRIPTION
                            }),
                            (0, s.jsx)(I.SingleSelect, {
                                value: P,
                                placeholder: M.Z.Messages.SELECT,
                                options: $,
                                onChange: e => B(e)
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)(_.W, {
                component: 'div',
                className: v.contentRegion,
                children: q && (0, s.jsx)(I.SlideIn, {
                    children: (0, s.jsx)(T.Z, {
                        submitting: y,
                        disabled: !X,
                        onReset: () => {
                            var e;
                            E(r), C(null !== (e = null == l ? void 0 : l.description) && void 0 !== e ? e : ''), b(c), G(null == l ? void 0 : l.store_page_guild_products_default_sort), B(null == l ? void 0 : l.server_shop_tab_order);
                        },
                        onSave: () => {
                            o()(null != l, 'Settings must be defined');
                            let e = {};
                            m !== l.description && (e.description = m), null != j && j.startsWith('data:') && (e.cover_image = j), u !== r && (e.full_server_gate = u === O.e3.ALL_CHANNELS), U !== l.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = U), P !== l.server_shop_tab_order && (e.server_shop_tab_order = P), !d().isEmpty(e) && k(n.id, e);
                        },
                        saveButtonTooltip: X ? void 0 : M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_FULL_OUT_ALL_INFO
                    })
                })
            })
        ]
    });
}
