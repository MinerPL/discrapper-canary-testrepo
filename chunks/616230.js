t.d(n, {
    Z: function () {
        return E;
    }
}), t(47120);
var a = t(735250), r = t(470079), i = t(120356), s = t.n(i), o = t(442837), l = t(481060), c = t(11265), d = t(863249), u = t(944163), m = t(246364), f = t(571728), C = t(755340), _ = t(449226), h = t(689938), x = t(609191), g = t(294251);
function p(e) {
    let {
            guild: n,
            isExpanded: i,
            emptyFormFields: s,
            hasTermsField: o
        } = e, c = n.hasVerificationGate(), [u, m] = r.useState(c), f = e => {
            e.preventDefault(), e.stopPropagation();
        }, C = async e => {
            try {
                m(e), await d.Z.enableVerificationForm(n.id, e);
            } catch {
                m(u);
            }
        }, p = e => {
            e && s ? (0, l.openModalLazy)(async () => {
                let {ConfirmModal: n} = await Promise.resolve().then(t.bind(t, 481060));
                return t => (0, a.jsx)(n, {
                    ...t,
                    header: h.Z.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
                    cancelText: h.Z.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
                    confirmText: h.Z.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
                    onConfirm: () => C(e),
                    children: (0, a.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: h.Z.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
                    })
                });
            }) : C(e);
        }, T = () => {
            (0, l.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    t.e('80026'),
                    t.e('36869')
                ]).then(t.bind(t, 645264));
                return t => (0, a.jsx)(e, {
                    ...t,
                    guildId: n.id,
                    isPreview: !0
                });
            });
        };
    return (0, a.jsxs)('div', {
        className: x.itemWrapper,
        children: [
            (0, a.jsxs)('div', {
                className: x.itemContent,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
                    }),
                    (i || s && !u) && (0, a.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
                    }),
                    !i && (0, a.jsx)('div', {
                        className: g.pillRow,
                        children: o && (0, a.jsxs)(l.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/medium',
                            className: x.valuePill,
                            children: [
                                (0, a.jsx)(l.BookCheckIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16
                                }),
                                h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL
                            ]
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: g.previewAndEnable,
                children: i || u || !s ? (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(l.Clickable, {
                            onMouseDown: f,
                            onMouseUp: f,
                            onClick: e => {
                                f(e), T();
                            },
                            children: (0, a.jsx)(l.Tooltip, {
                                tooltipContentClassName: g.__invalid_tooltip,
                                text: h.Z.Messages.PREVIEW,
                                children: e => (0, a.jsx)(l.EyeIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: g.previewIcon,
                                    ...e
                                })
                            })
                        }),
                        (0, a.jsx)(_.Z, {
                            checked: u,
                            onChange: () => p(!u)
                        })
                    ]
                }) : (0, a.jsx)(l.Button, {
                    size: l.Button.Sizes.SMALL,
                    children: h.Z.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
                })
            })
        ]
    });
}
async function T(e, n) {
    await d.Z.updateVerificationForm(e, n);
}
async function I(e, n) {
    await d.Z.updateVerificationFormDescription(e, n);
}
function E(e) {
    var n, t, i;
    let {
            guild: l,
            isClanContext: _ = !1,
            onFieldsSave: h,
            onDescriptionSave: E,
            verificationForm: b
        } = e, [N, v] = r.useState(_), y = r.useRef(!1), S = r.useCallback(() => {
            y.current = !0;
        }, []), A = null !== (n = (0, f.A)({ guildId: l.id })) && void 0 !== n ? n : 0, M = (0, o.e7)([u.Z], () => null != b ? b : u.Z.get(l.id)), j = null !== (t = null == M ? void 0 : M.formFields) && void 0 !== t ? t : [];
    r.useEffect(() => {
        d.Z.fetchVerificationForm(l.id);
    }, [l.id]);
    let R = null != M, L = !_;
    return (0, a.jsx)(c.Z, {
        renderHeader: L ? (0, a.jsx)(p, {
            guild: l,
            isExpanded: N,
            emptyFormFields: (null == j ? void 0 : j.length) == null || (null == j ? void 0 : j.length) === 0,
            hasTermsField: null == j ? void 0 : j.some(e => e.field_type === m.QJ.TERMS)
        }) : null,
        isExpanded: N,
        onExpand: () => v(!N),
        disableAnimation: _,
        disableBackground: !L,
        children: (0, a.jsx)('div', {
            className: s()(x.itemBodyContainer, {
                [x.noPadding]: !L,
                [g.rulesScreeningItemsNoBorder]: !L
            }),
            children: R && (0, a.jsx)(C.Z, {
                guild: l,
                submittedGuildJoinRequestsCount: A,
                formFields: j,
                onFormFieldUpdate: S,
                hideVerificationLevelField: !0,
                isClanContext: _,
                onFieldsSave: null != h ? h : T,
                onDescriptionSave: null != E ? E : I,
                formDescription: null !== (i = null == M ? void 0 : M.description) && void 0 !== i ? i : ''
            })
        })
    });
}
