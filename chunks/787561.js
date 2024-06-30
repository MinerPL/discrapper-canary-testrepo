n.d(t, {
    X: function () {
        return v;
    }
}), n(47120), n(653041);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(442837), o = n(544891), c = n(433517), d = n(481060), u = n(852860), _ = n(933557), E = n(655006), I = n(769654), T = n(984933), m = n(650774), N = n(430824), S = n(496675), h = n(699516), g = n(594174), C = n(434404), x = n(999382), p = n(54842), R = n(981631), f = n(731455), L = n(689938), O = n(481972), A = n(922905);
let M = 'dismissedCommunityFeaturesUpsell', v = () => {
        let e;
        let {
                guild: t,
                submitting: n,
                errors: a
            } = (0, l.cj)([x.Z], () => ({
                submitting: x.Z.isSubmitting(),
                guild: x.Z.getGuild(),
                errors: x.Z.getErrors()
            })), i = Object.keys(a), r = i.length > 0 ? i[0] : null;
        if ('rules_channel_id' === r)
            e = L.Z.Messages.GUILD_RULES_INVALID_CHANNEL;
        else
            e = null != r ? a[r] : void 0;
        return (0, s.jsx)(u.Z, {
            submitting: n,
            onReset: () => {
                if (null != t)
                    C.Z.init(t.id);
            },
            onSave: () => {
                if (null != t)
                    C.Z.saveGuild(t.id, {
                        rulesChannelId: t.rulesChannelId,
                        preferredLocale: t.preferredLocale,
                        safetyAlertsChannelId: t.safetyAlertsChannelId,
                        publicUpdatesChannelId: t.publicUpdatesChannelId,
                        description: t.description,
                        features: t.features
                    });
            },
            errorMessage: e
        });
    }, D = e => {
        let {
                discoveryEnabled: t,
                onboardingEnabled: n,
                guild: i
            } = e, [r, u] = a.useState(!0 === c.K.get(M)), _ = (0, l.e7)([m.Z], () => {
                var e;
                return null !== (e = m.Z.getMemberCount(i.id)) && void 0 !== e ? e : 0;
            }), [E, T] = a.useState(!1);
        a.useEffect(() => {
            o.tn.get(R.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(i.id)).then(e => {
                T(e.body.eligible_for_admin_server);
            }).catch(() => T(!1));
        }, []);
        let S = (0, l.e7)([N.Z], () => N.Z.getGuild('942897714956472401')), h = i.isCommunity() && _ >= 1000 && E && !(null != S);
        if (t && n && !h)
            return null;
        let g = async () => {
            try {
                let e = await o.tn.post({
                    url: R.ANM.JOIN_ADMIN_SERVER(i.id),
                    oldFormErrors: !0
                });
                C.Z.close(), (0, I.X)(e.body.id);
            } catch {
            }
        };
        return r && !h ? null : (0, s.jsxs)('div', {
            className: O.upsellContainer,
            children: [
                (0, s.jsxs)('div', {
                    className: O.upsellContent,
                    children: [
                        (0, s.jsx)('img', {
                            src: A,
                            alt: '',
                            width: 60,
                            className: O.upsellImage
                        }),
                        (0, s.jsxs)('div', {
                            children: [
                                (0, s.jsx)(d.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: O.upsellHeader,
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_HEADER
                                }),
                                (0, s.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BODY
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(d.Button, {
                    'aria-label': L.Z.Messages.CLOSE,
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.NONE,
                    className: O.upsellClose,
                    onClick: () => {
                        c.K.set(M, !0), u(!0);
                    },
                    children: (0, s.jsx)(d.CloseSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, s.jsxs)('div', {
                    className: O.upsellFooter,
                    children: [
                        h && (0, s.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            onClick: g,
                            className: O.upsellButton,
                            children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ADMIN_SERVER
                        }),
                        n ? null : (0, s.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            onClick: () => {
                                C.Z.setSection(R.pNK.ONBOARDING);
                            },
                            className: O.upsellButton,
                            children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ONBOARDING
                        }),
                        t ? null : (0, s.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            onClick: () => {
                                C.Z.setSection(R.pNK.DISCOVERY);
                            },
                            className: O.upsellButton,
                            color: d.Button.Colors.PRIMARY,
                            children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_DISCOVERY
                        }),
                        (0, s.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            onClick: () => {
                                C.Z.setSection(R.pNK.ANALYTICS);
                            },
                            className: O.upsellButton,
                            color: d.Button.Colors.PRIMARY,
                            children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_UPSELL_BUTTON_ANALYTICS
                        })
                    ]
                })
            ]
        });
    }, j = () => {
        var e;
        let t = (0, l.e7)([x.Z], () => x.Z.getGuild()), {
                canManageGuild: n,
                isGuildAdmin: i
            } = (0, l.cj)([S.Z], () => ({
                canManageGuild: S.Z.can(R.Plq.MANAGE_GUILD, t),
                isGuildAdmin: S.Z.can(R.Plq.ADMINISTRATOR, t)
            })), o = (0, l.e7)([T.ZP], () => null != t ? T.ZP.getChannels(t.id) : null), u = a.useMemo(f.jb, []), I = !0 !== c.K.get(M), {enableRaidAlerts: m} = E.l.useExperiment({
                guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : R.lds,
                location: 'c1af51_2'
            }, { autoTrackExposure: n });
        if (null == t)
            return null;
        let N = [];
        null != o && o[T.sH].forEach(e => {
            let {channel: t} = e;
            t.type === R.d4z.GUILD_TEXT && N.push({
                value: t.id,
                label: (0, _.F6)(t, g.default, h.Z, !0)
            });
        });
        let p = () => {
                C.Z.init(t.id), C.Z.open(t.id, R.pNK.MEMBER_VERIFICATION);
            }, A = () => {
                if (null == t)
                    return;
                let e = new Set(t.features);
                e.delete(R.oNc.COMMUNITY), e.delete(R.oNc.DISCOVERABLE), !t.hasFeature(R.oNc.CLAN) && e.delete(R.oNc.MEMBER_VERIFICATION_GATE_ENABLED), e.delete(R.oNc.PREVIEW_ENABLED), C.Z.updateGuild({
                    features: e,
                    rulesChannelId: null,
                    publicUpdatesChannelId: null
                });
            }, v = e => {
                C.Z.updateGuild({ rulesChannelId: e });
            }, j = e => {
                C.Z.updateGuild({ safetyAlertsChannelId: e });
            }, Z = e => {
                C.Z.updateGuild({ publicUpdatesChannelId: e });
            }, b = e => {
                C.Z.updateGuild({ preferredLocale: e });
            }, U = e => {
                C.Z.updateGuild({ description: e });
            }, G = () => {
                t.features.has(R.oNc.DISCOVERABLE) && t.features.has(R.oNc.PARTNERED) ? (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
                    ...e,
                    header: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                    confirmText: L.Z.Messages.CONFIRM,
                    cancelText: L.Z.Messages.NEVERMIND,
                    onConfirm: A,
                    children: (0, s.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: L.Z.Messages.GUILD_SETTINGS_PARTNER_AND_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
                    })
                })) : t.features.has(R.oNc.DISCOVERABLE) ? (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
                    ...e,
                    header: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                    confirmText: L.Z.Messages.CONFIRM,
                    cancelText: L.Z.Messages.NEVERMIND,
                    onConfirm: A,
                    children: (0, s.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: L.Z.Messages.GUILD_SETTINGS_DISCOVERY_DISABLE_PUBLIC_CONFIRM_TEXT
                    })
                })) : t.features.has(R.oNc.PARTNERED) ? (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
                    ...e,
                    header: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                    confirmText: L.Z.Messages.CONFIRM,
                    cancelText: L.Z.Messages.NEVERMIND,
                    onConfirm: A,
                    children: (0, s.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: L.Z.Messages.GUILD_SETTINGS_PARTNER_DISABLE_PUBLIC_CONFIRM_TEXT
                    })
                })) : t.features.has(R.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(R.oNc.CLAN) ? (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
                    ...e,
                    header: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_PUBLIC_CONFIRM_DEFAULT_TITLE,
                    confirmButtonColor: d.Button.Colors.BRAND,
                    confirmText: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION_CONFIRM,
                    cancelText: L.Z.Messages.NEVERMIND,
                    onConfirm: p,
                    children: (0, s.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_MEMBER_VERIFICATION
                    })
                })) : A();
            };
        return (0, s.jsxs)(d.FormSection, {
            title: L.Z.Messages.GUILD_SETTINGS_COMMUNITY,
            tag: d.FormTitleTags.H1,
            children: [
                I ? (0, s.jsx)(D, {
                    discoveryEnabled: t.features.has(R.oNc.DISCOVERABLE),
                    onboardingEnabled: t.features.has(R.oNc.GUILD_ONBOARDING),
                    guild: t
                }) : null,
                (0, s.jsxs)(d.FormSection, {
                    className: r()(O.twoColumnFormSection, O.firstSection),
                    children: [
                        (0, s.jsxs)('div', {
                            className: O.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: O.formTitle,
                                    children: L.Z.Messages.FORM_LABEL_DISCOVERY_RULES_CHANNEL
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: O.__invalid_formDescription,
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_RULES_CHANNEL_HELP
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: O.selectColumn,
                            children: (0, s.jsx)(d.SearchableSelect, {
                                value: t.rulesChannelId,
                                options: N,
                                onChange: v,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, s.jsx)(d.FormDivider, { className: O.divider }),
                (0, s.jsxs)(d.FormSection, {
                    className: r()(O.twoColumnFormSection, O.firstSection),
                    children: [
                        (0, s.jsxs)('div', {
                            className: O.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: O.formTitle,
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: O.__invalid_formDescription,
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: O.selectColumn,
                            children: (0, s.jsx)(d.SearchableSelect, {
                                value: t.publicUpdatesChannelId,
                                options: N,
                                onChange: Z,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, s.jsx)(d.FormDivider, { className: O.divider }),
                m && (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(d.FormSection, {
                            className: r()(O.twoColumnFormSection, O.firstSection),
                            children: [
                                (0, s.jsxs)('div', {
                                    className: O.descriptionColumn,
                                    children: [
                                        (0, s.jsx)(d.FormTitle, {
                                            className: O.formTitle,
                                            children: L.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                                        }),
                                        (0, s.jsx)(d.FormText, {
                                            type: d.FormTextTypes.DESCRIPTION,
                                            className: O.__invalid_formDescription,
                                            children: L.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_DESCRIPTION
                                        })
                                    ]
                                }),
                                (0, s.jsx)('div', {
                                    className: O.selectColumn,
                                    children: (0, s.jsx)(d.SearchableSelect, {
                                        value: t.safetyAlertsChannelId,
                                        options: N,
                                        onChange: j,
                                        isDisabled: !n
                                    })
                                })
                            ]
                        }),
                        (0, s.jsx)(d.FormDivider, { className: O.divider })
                    ]
                }),
                (0, s.jsxs)(d.FormSection, {
                    className: O.twoColumnFormSection,
                    children: [
                        (0, s.jsxs)('div', {
                            className: O.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: O.formTitle,
                                    children: L.Z.Messages.FORM_LABEL_SERVER_LANGUAGE
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: O.__invalid_formDescription,
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_LOCALE_HELP
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: O.selectColumn,
                            children: (0, s.jsx)(d.SearchableSelect, {
                                value: t.preferredLocale,
                                options: u,
                                onChange: b,
                                isDisabled: !n
                            })
                        })
                    ]
                }),
                (0, s.jsx)(d.FormDivider, { className: O.divider }),
                (() => {
                    var e;
                    if (null != t)
                        return (0, s.jsxs)(d.FormSection, {
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: O.formTitle,
                                    children: L.Z.Messages.FORM_LABEL_SERVER_DESCRIPTION
                                }),
                                (0, s.jsx)(d.FormText, {
                                    className: O.description,
                                    type: d.FormTextTypes.DESCRIPTION,
                                    children: L.Z.Messages.FORM_HELP_SERVER_DESCRIPTION
                                }),
                                (0, s.jsx)(d.TextArea, {
                                    value: null !== (e = t.description) && void 0 !== e ? e : '',
                                    placeholder: L.Z.Messages.SERVER_DESCIPTION_EMPTY,
                                    onChange: U,
                                    maxLength: 120,
                                    disabled: !n
                                })
                            ]
                        });
                })(),
                (0, s.jsx)(d.FormDivider, { className: O.divider }),
                (0, s.jsxs)(d.FormSection, {
                    className: O.twoColumnFormSection,
                    children: [
                        (0, s.jsxs)('div', {
                            className: O.descriptionColumn,
                            children: [
                                (0, s.jsx)(d.FormTitle, {
                                    className: O.formTitle,
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
                                }),
                                (0, s.jsx)(d.FormText, {
                                    type: d.FormTextTypes.DESCRIPTION,
                                    className: O.__invalid_formDescription,
                                    children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY_DESCRIPTION
                                })
                            ]
                        }),
                        (0, s.jsx)(d.Tooltip, {
                            text: i ? null : L.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
                            'aria-label': i ? void 0 : L.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
                            children: e => (0, s.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: G,
                                color: d.Button.Colors.RED,
                                disabled: !i,
                                ...e,
                                children: L.Z.Messages.GUILD_SETTINGS_COMMUNITY_DISABLE_COMMUNITY
                            })
                        })
                    ]
                })
            ]
        });
    };
t.Z = () => {
    let e = (0, l.e7)([x.Z], () => x.Z.getGuild());
    return null == e ? null : e.features.has(R.oNc.COMMUNITY) ? (0, s.jsx)(j, {}) : (0, s.jsx)(p.Z, { guild: e });
};
