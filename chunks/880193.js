n.d(t, {
    Z: function () {
        return C;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(442837), r = n(481060), l = n(345861), o = n(208567), c = n(153124), d = n(937615), u = n(289393), _ = n(723047), E = n(727843), I = n(290348), T = n(927954), m = n(783454), N = n(981631), S = n(689938), h = n(849456), g = n(371515);
function C(e) {
    let {priceTiers: t} = e, {editStateId: n} = (0, E.N)(), C = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getSubscriptionListing(n)) || void 0 === e ? void 0 : e.image_asset;
        }), [x, p] = I._T(n), [R, f] = I.mR(n), [L, O] = I.PK(n), [A, M] = I.d9(n, 1024), {
            imageCTA: v,
            imageAriaLabel: D,
            setFilename: j
        } = (0, T.Z)(C), Z = a.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.map(e => ({
                value: e,
                label: (0, d.T4)(e, N.pKx.USD)
            }))) && void 0 !== e ? e : [];
        }, [t]);
    function b(e, t) {
        null != t && j(t.name), M(e);
    }
    let U = (0, _.mY)(), G = (0, c.Dt)(), P = (0, c.Dt)(), B = (0, c.Dt)();
    return (0, s.jsxs)(m.Z, {
        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BASIC_INFO_SECTION_TITLE,
        intiallyExpanded: !0,
        children: [
            (0, s.jsxs)('div', {
                className: g.formSplit,
                children: [
                    (0, s.jsx)('div', {
                        className: g.formSplitHalf,
                        children: (0, s.jsx)(r.FormSection, {
                            title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_TITLE,
                            titleId: G,
                            disabled: U,
                            children: (0, s.jsx)(r.TextInput, {
                                placeholder: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_NAME_PLACEHOLDER,
                                value: x,
                                inputClassName: h.formInput,
                                onChange: p,
                                'aria-labelledby': G,
                                disabled: U
                            })
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: g.formSplitHalf,
                        children: (0, s.jsx)(r.FormSection, {
                            title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_TITLE,
                            titleId: P,
                            disabled: U,
                            children: (0, s.jsx)(r.SingleSelect, {
                                options: Z,
                                className: h.formInput,
                                isDisabled: U || null == t,
                                placeholder: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_PRICE_PLACEHOLDER,
                                value: R,
                                onChange: f,
                                maxVisibleItems: 5,
                                look: r.SelectLooks.CUSTOM,
                                'aria-labelledby': P
                            })
                        })
                    })
                ]
            }),
            (0, s.jsx)(r.Spacer, { size: 24 }),
            (0, s.jsx)(r.FormSection, {
                title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_TITLE,
                titleId: B,
                disabled: U,
                children: (0, s.jsx)(r.TextArea, {
                    placeholder: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DESCRIPTION_PLACEHOLDER,
                    value: L,
                    rows: 2,
                    autosize: !0,
                    className: h.formInput,
                    onChange: O,
                    'aria-labelledby': B,
                    disabled: U
                })
            }),
            (0, s.jsx)(r.Spacer, { size: 24 }),
            (0, s.jsxs)('div', {
                className: g.iconSection,
                children: [
                    (0, s.jsxs)(r.FormSection, {
                        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_TITLE,
                        className: g.iconSectionDescription,
                        disabled: U,
                        children: [
                            (0, s.jsx)(r.FormText, {
                                type: r.FormText.Types.DESCRIPTION,
                                className: h.formDescription,
                                disabled: U,
                                children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SYMBOL_DESCRIPTION
                            }),
                            (0, s.jsx)(l.Z, {
                                onChange: b,
                                buttonCTA: v,
                                'aria-label': D,
                                disabled: U,
                                look: r.Button.Looks.OUTLINED,
                                color: r.Button.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, s.jsx)(o.Z, {
                        image: A,
                        hint: v,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: g.iconUploader,
                        imageClassName: g.tierSymbolUploaderInner,
                        onChange: b,
                        'aria-label': D,
                        disabled: U
                    })
                ]
            })
        ]
    });
}
