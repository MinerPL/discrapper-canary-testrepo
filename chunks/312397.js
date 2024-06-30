n.d(t, {
    O: function () {
        return em;
    },
    Z: function () {
        return eS;
    }
}), n(47120), n(733860);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(512722), o = n.n(l), c = n(392711), d = n.n(c), u = n(442837), _ = n(692547), E = n(780384), I = n(481060), T = n(852860), m = n(902840), N = n(410030), S = n(100527), h = n(367907), g = n(906732), C = n(740504), x = n(933557), p = n(471445), R = n(890477), f = n(688465), L = n(807582), O = n(48217), A = n(26323), M = n(35125), v = n(536442), D = n(142497), j = n(884858), Z = n(516129), b = n(813197), U = n(208567), G = n(592125), P = n(324067), B = n(650774), y = n(496675), F = n(699516), k = n(594174), w = n(285952), H = n(709586), V = n(768581), Y = n(630388), W = n(823379), z = n(63063), K = n(434404), q = n(999382), X = n(203377), Q = n(981631), J = n(30513), $ = n(486324), ee = n(200299), et = n(689938), en = n(985096), es = n(935653), ea = n(449874);
function ei(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let er = 'NO_AFK_CHANNEL', el = 'NO_SYSTEM_CHANNEL', eo = ''.concat(60), ec = ''.concat(300), ed = ''.concat(900), eu = ''.concat(1800), e_ = ''.concat(3600);
function eE(e) {
    return eI(e[0]);
}
function eI(e) {
    if (null == e)
        return;
    let {
            label: t,
            channel: n,
            category: a
        } = e, i = (0, p.KS)(n), r = null != a ? (0, x.F6)(a, k.default, F.Z) : null;
    return (0, s.jsx)(I.IconSelectOption, {
        title: t,
        icon: i,
        subtitle: r
    });
}
function eT(e) {
    return {
        value: e.id,
        label: (0, x.F6)(e, k.default, F.Z),
        channel: e,
        category: G.Z.getChannel(e.parent_id)
    };
}
let em = () => {
    let {
            guild: e,
            originalGuild: t,
            submitting: n,
            errors: i
        } = (0, u.cj)([q.Z], () => q.Z.getProps()), r = a.useMemo(() => (0, X.LG)(i), [i]), l = a.useCallback(() => {
            if (null == e)
                return;
            let n = {
                name: e.name,
                icon: e.icon,
                splash: e.splash,
                afkChannelId: e.afkChannelId,
                afkTimeout: e.afkTimeout,
                systemChannelId: e.systemChannelId,
                safetyAlertsChannelId: e.safetyAlertsChannelId,
                verificationLevel: e.verificationLevel,
                defaultMessageNotifications: e.defaultMessageNotifications,
                explicitContentFilter: e.explicitContentFilter,
                description: e.description,
                banner: e.banner,
                systemChannelFlags: e.systemChannelFlags,
                publicUpdatesChannelId: e.publicUpdatesChannelId,
                premiumProgressBarEnabled: e.premiumProgressBarEnabled,
                homeHeader: e.homeHeader,
                clan: e.clan
            };
            !(0, W.OL)(new Set(e.features), new Set(t.features)) && (n.features = e.features), K.Z.saveGuild(e.id, n);
        }, [
            e,
            t
        ]), o = a.useCallback(() => {
            if (null != e)
                K.Z.init(e.id);
        }, [e]);
    return (0, s.jsx)(T.Z, {
        submitting: n,
        errorMessage: r,
        onSave: l,
        onReset: o
    });
};
class eN extends a.PureComponent {
    componentDidMount() {
        if (this.props.subsection === Q.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === Q.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === Q.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        K.Z.updateGuild({ name: e });
    }
    handleAFKChannelChange(e) {
        e === er && (e = null), K.Z.updateGuild({ afkChannelId: e });
    }
    handleAFKTimeoutChange(e) {
        K.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
    }
    handleSystemChannelChange(e) {
        e === el && (e = null), K.Z.updateGuild({ systemChannelId: e });
    }
    handleDefaultMessageNotificationsChange(e) {
        let {value: t} = e;
        K.Z.updateGuild({ defaultMessageNotifications: t });
    }
    handleSplashChange(e) {
        K.Z.updateGuild({ splash: e });
    }
    handleSystemChannelFlagsChange(e, t) {
        let {guild: n} = this.props, s = (0, Y.mB)(n.systemChannelFlags, e, t);
        K.Z.updateGuild({ systemChannelFlags: s });
    }
    handlePremiumProgressBarEnabledChange(e) {
        K.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        K.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let {
            guild: e,
            errors: t,
            canManageGuild: n
        } = this.props;
        return (0, s.jsxs)(w.Z, {
            className: r()(en.__invalid_baseSection),
            children: [
                (0, s.jsxs)(w.Z, {
                    basis: '50%',
                    justify: w.Z.Justify.BETWEEN,
                    children: [
                        (0, s.jsxs)(w.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, s.jsx)(U.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: et.Z.Messages.CHANGE_ICON,
                                    makeURL: t => V.ZP.getGuildIconURL({
                                        id: e.id,
                                        icon: t,
                                        canAnimate: !0,
                                        size: 100
                                    }),
                                    className: r()({
                                        [en.avatarUploader]: n,
                                        [en.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: r()(en.avatarUploaderInner, { [en.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon ? (0, s.jsx)('div', {
                                    className: en.iconError,
                                    children: t.icon
                                }) : null
                            ]
                        }),
                        (0, s.jsxs)(w.Z, {
                            direction: w.Z.Direction.VERTICAL,
                            align: w.Z.Align.START,
                            style: { maxWidth: 180 },
                            children: [
                                (0, s.jsx)(I.FormText, {
                                    type: I.FormTextTypes.DESCRIPTION,
                                    className: en.marginBottom8,
                                    children: et.Z.Messages.GUILD_SETTINGS_ICON_RECOMMEND
                                }),
                                (0, s.jsxs)(I.Button, {
                                    look: I.ButtonLooks.OUTLINED,
                                    color: I.ButtonColors.PRIMARY,
                                    disabled: !n,
                                    className: en.marginTop8,
                                    onClick: this.handleUploadImage,
                                    children: [
                                        et.Z.Messages.UPLOAD_IMAGE,
                                        (0, s.jsx)(b.ZP, {
                                            ref: this._imageInputRef,
                                            onChange: this.handleOpenImageCroppingModal,
                                            disabled: !n
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(w.Z.Child, {
                    basis: '50%',
                    children: (0, s.jsx)(I.FormItem, {
                        title: et.Z.Messages.FORM_LABEL_SERVER_NAME,
                        className: en.marginBottom20,
                        children: (0, s.jsx)(I.TextInput, {
                            type: 'text',
                            disabled: !n,
                            value: e.name,
                            maxLength: 100,
                            onChange: this.handleNameChange,
                            error: t.name
                        })
                    })
                })
            ]
        });
    }
    renderAFKSection() {
        var e;
        let {
                guild: t,
                canManageGuild: n,
                channels: a
            } = this.props, i = null != t.afkTimeout ? ''.concat(t.afkTimeout) : null, r = null !== (e = t.afkChannelId) && void 0 !== e ? e : er, l = [
                {
                    value: eo,
                    label: et.Z.Messages.DURATION_MINUTES.format({ minutes: 1 })
                },
                {
                    value: ec,
                    label: et.Z.Messages.DURATION_MINUTES.format({ minutes: 5 })
                },
                {
                    value: ed,
                    label: et.Z.Messages.DURATION_MINUTES.format({ minutes: 15 })
                },
                {
                    value: eu,
                    label: et.Z.Messages.DURATION_MINUTES.format({ minutes: 30 })
                },
                {
                    value: e_,
                    label: et.Z.Messages.DURATION_HOURS.format({ hours: 1 })
                }
            ], o = d()(a).filter(e => {
                let {channel: t} = e;
                return t.type === Q.d4z.GUILD_VOICE;
            }).map(e => {
                let {channel: t} = e;
                return eT(t);
            }).value();
        return o.unshift({
            value: er,
            label: et.Z.Messages.NO_AFK_CHANNEL
        }), (0, s.jsxs)(I.FormSection, {
            className: en.divider,
            children: [
                (0, s.jsxs)(w.Z, {
                    children: [
                        (0, s.jsx)(w.Z.Child, {
                            basis: '50%',
                            children: (0, s.jsx)(I.FormItem, {
                                title: et.Z.Messages.FORM_LABEL_AFK_CHANNEL,
                                children: (0, s.jsx)(I.SingleSelect, {
                                    value: r,
                                    options: o,
                                    onChange: this.handleAFKChannelChange,
                                    isDisabled: !n,
                                    renderOptionLabel: eI,
                                    renderOptionValue: eE
                                })
                            })
                        }),
                        (0, s.jsx)(w.Z.Child, {
                            basis: '50%',
                            children: (0, s.jsx)(I.FormItem, {
                                title: et.Z.Messages.FORM_LABEL_AFK_TIMEOUT,
                                children: (0, s.jsx)(I.SingleSelect, {
                                    value: i,
                                    options: l,
                                    isDisabled: r === er || !n,
                                    onChange: this.handleAFKTimeoutChange
                                })
                            })
                        })
                    ]
                }),
                (0, s.jsx)(I.FormText, {
                    className: en.marginTop8,
                    type: I.FormTextTypes.DESCRIPTION,
                    children: et.Z.Messages.FORM_HELP_AFK_CHANNEL
                })
            ]
        });
    }
    renderJoinNotificationSection() {
        var e;
        let {
                guild: t,
                channels: n,
                canManageGuild: a,
                eligibleForDeadchatPrompt: i
            } = this.props, l = null !== (e = t.systemChannelId) && void 0 !== e ? e : el, o = d()(n).filter(e => {
                let {channel: t} = e;
                return t.type === Q.d4z.GUILD_TEXT;
            }).map(e => {
                let {channel: t} = e;
                return eT(t);
            }).value();
        o.unshift({
            value: el,
            label: et.Z.Messages.NO_SYSTEM_CHANNEL
        });
        let c = (0, M.eI)(t), u = c || (0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS), _ = c || (0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        return (0, s.jsxs)(I.FormSection, {
            className: en.divider,
            children: [
                (0, s.jsx)(I.FormTitle, { children: et.Z.Messages.FORM_LABEL_SYSTEM_CHANNEL }),
                (0, s.jsx)(I.SingleSelect, {
                    value: l,
                    options: o,
                    isDisabled: !a,
                    onChange: this.handleSystemChannelChange,
                    renderOptionLabel: eI,
                    renderOptionValue: eE
                }),
                (0, s.jsx)(I.FormText, {
                    className: en.marginTop8,
                    type: I.FormTextTypes.DESCRIPTION,
                    children: et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL
                }),
                (0, s.jsx)(I.FormSwitch, {
                    className: en.marginTop20,
                    onChange: this.handleShowJoinsChange,
                    value: !(0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !a || l === el,
                    children: et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGES
                }),
                (0, s.jsx)(I.FormSwitch, {
                    className: r()(en.__invalid_marginReset, en.marginTop20),
                    onChange: this.handleShowJoinRepliesChange,
                    value: !(0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !a || l === el,
                    children: et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGE_REPLIES
                }),
                (0, s.jsx)(I.FormSwitch, {
                    className: r()(en.__invalid_marginReset, en.marginTop20),
                    onChange: this.handleShowSubscriptionsChange,
                    value: !(0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                    hideBorder: !0,
                    disabled: !a || l === el,
                    children: et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTION_MESSAGES
                }),
                (0, s.jsx)(I.FormSwitch, {
                    className: r()(en.__invalid_marginReset, en.marginTop20),
                    onChange: this.handleShowGuildRemindersChange,
                    value: !(0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !a || l === el,
                    children: et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_GUILD_REMINDERS
                }),
                u && (0, s.jsx)(I.FormSwitch, {
                    className: r()(en.__invalid_marginReset, en.marginTop20),
                    onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
                    value: !(0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !a || l === el,
                    children: et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGES
                }),
                _ && (0, s.jsx)(I.FormSwitch, {
                    className: r()(en.__invalid_marginReset, en.marginTop20),
                    onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
                    value: !(0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !a || l === el,
                    children: et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGE_REPLIES
                }),
                i && (0, s.jsx)(I.FormSwitch, {
                    className: r()(en.__invalid_marginReset, en.marginTop20),
                    onChange: this.handleShowDeadchatPromptMessageChange,
                    value: !(0, Y.yE)(t.systemChannelFlags, Q.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                    hideBorder: !0,
                    disabled: !a || l === el,
                    children: (0, s.jsxs)('div', {
                        className: en.flexRow,
                        children: [
                            et.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_DEADCHAT_PROMPT_MESSAGE,
                            (0, s.jsx)(f.Z, {})
                        ]
                    })
                })
            ]
        });
    }
    renderNotificationSection() {
        let {
                guild: e,
                canManageGuild: t,
                guildMemberCount: n
            } = this.props, a = [
                {
                    name: et.Z.Messages.FORM_LABEL_ALL_MESSAGES,
                    value: Q.bL.ALL_MESSAGES,
                    desc: null != n && n >= Q.qWG ? et.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATIONS_LARGE_GUILD_NOTIFY_ALL : null
                },
                {
                    name: et.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                    value: Q.bL.ONLY_MENTIONS
                }
            ];
        return (0, s.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, s.jsxs)(I.FormSection, {
                className: en.divider,
                children: [
                    (0, s.jsx)(I.FormTitle, { children: et.Z.Messages.FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS }),
                    (0, s.jsx)(I.FormText, {
                        type: I.FormTextTypes.DESCRIPTION,
                        className: en.marginBottom20,
                        children: et.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO
                    }),
                    (0, s.jsx)(I.FormText, {
                        type: I.FormTextTypes.DESCRIPTION,
                        className: en.marginBottom20,
                        children: et.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_TIP
                    }),
                    (0, s.jsx)(I.RadioGroup, {
                        options: a,
                        value: e.defaultMessageNotifications,
                        disabled: !t,
                        onChange: this.handleDefaultMessageNotificationsChange
                    })
                ]
            })
        });
    }
    renderSummariesSection() {
        let {
            guild: e,
            canManageGuild: t
        } = this.props;
        return (0, m.Jc)(e, !1) ? (0, s.jsx)('div', {
            children: (0, s.jsx)(I.FormSection, {
                className: en.divider,
                children: (0, s.jsx)(I.FormSwitch, {
                    className: r()(en.marginTop8, en.marginBottom8),
                    onChange: this.handleConversationSummariesToggle,
                    value: e.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER),
                    hideBorder: !0,
                    note: et.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({ helpdeskArticle: z.Z.getArticleURL(Q.BhN.CONVERSATION_SUMMARIES) }),
                    disabled: !t,
                    children: (0, s.jsxs)('div', {
                        className: en.badgedItem,
                        children: [
                            et.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE,
                            (0, s.jsx)(I.TextBadge, {
                                text: et.Z.Messages.BETA,
                                color: _.Z.unsafe_rawColors.BRAND_500.css,
                                className: en.__invalid_betaTag
                            })
                        ]
                    })
                })
            })
        }) : null;
    }
    renderServerInviteBGSection() {
        let {
                guild: e,
                canManageGuild: t
            } = this.props, n = e.hasFeature(Q.oNc.INVITE_SPLASH), a = t && n, i = (0, s.jsx)(Z.Z, {
                image: e.splash,
                makeURL: t => null != t ? V.ZP.getGuildSplashURL({
                    id: e.id,
                    splash: t
                }) : null,
                disabled: !a,
                onChange: this.handleSplashChange,
                hint: et.Z.Messages.CHANGE_SPLASH,
                enabled: a,
                maxFileSizeBytes: ee.B,
                onFileSizeError: () => (0, j.Z)(ee.B)
            });
        return (0, s.jsx)('div', {
            ref: this._inviteSectionRef,
            children: (0, s.jsx)(I.FormSection, {
                className: en.divider,
                children: (0, s.jsxs)(w.Z, {
                    basis: '50%',
                    direction: w.Z.Direction.HORIZONTAL,
                    align: w.Z.Justify.START,
                    children: [
                        (0, s.jsxs)(w.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, s.jsxs)(I.FormTitle, {
                                    className: en.flexFormTitle,
                                    children: [
                                        (0, s.jsx)('div', { children: et.Z.Messages.GUILD_SETTINGS_SERVER_INVITE_BACKGROUND }),
                                        (0, s.jsx)(L.Z, {
                                            guild: e,
                                            guildFeature: Q.oNc.INVITE_SPLASH,
                                            className: en.guildFeatureAvailabilityIndicator,
                                            onClick: this.handleInviteSplashUpsellIndicator
                                        })
                                    ]
                                }),
                                (0, s.jsx)(I.FormText, {
                                    type: I.FormTextTypes.DESCRIPTION,
                                    className: en.marginBottom8,
                                    children: et.Z.Messages.GUILD_SETTINGS_SPLASH_DESCRIPTION
                                }),
                                (0, s.jsx)(I.FormText, {
                                    type: I.FormTextTypes.DESCRIPTION,
                                    children: et.Z.Messages.GUILD_SETTINGS_SPLASH_RECOMMEND.format({ articleURL: z.Z.getArticleURL(Q.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                n ? (0, s.jsxs)(I.Button, {
                                    disabled: !a,
                                    color: I.ButtonColors.BRAND,
                                    className: en.marginTop16,
                                    children: [
                                        et.Z.Messages.UPLOAD_BACKGROUND,
                                        (0, s.jsx)(b.ZP, {
                                            disabled: !a,
                                            onChange: this.handleSplashChange,
                                            maxFileSizeBytes: ee.B,
                                            onFileSizeError: () => (0, j.Z)(ee.B)
                                        })
                                    ]
                                }) : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)
                            ]
                        }),
                        (0, s.jsx)(w.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: n ? i : (0, s.jsx)(I.Clickable, {
                                'aria-hidden': !0,
                                tabIndex: -1,
                                className: en.upsell,
                                onClick: this.handleInviteSplashUpsellUpload,
                                children: i
                            })
                        })
                    ]
                })
            })
        });
    }
    renderBanner() {
        let {
                guild: e,
                canManageGuild: t,
                analyticsLocations: n
            } = this.props, a = e.hasFeature(Q.oNc.BANNER), i = e.hasFeature(Q.oNc.ANIMATED_BANNER), r = a && t, l = (0, s.jsx)(Z.Z, {
                image: e.banner,
                makeURL: t => null != t ? V.ZP.getGuildBannerURL({
                    id: e.id,
                    banner: t
                }, i) : null,
                disabled: !r,
                onChange: this.handleBannerChange,
                hint: et.Z.Messages.CHANGE_SPLASH,
                onOpenImageSelectModal: () => eh($.pC.GUILD_BANNER, ee.B, this.handleBannerChange, !0, {
                    page: Q.ZY5.GUILD_SETTINGS,
                    section: Q.jXE.GUILD_BANNER
                }, n),
                enabled: r
            }), o = (0, s.jsx)(I.Button, {
                disabled: !r,
                color: I.Button.Colors.BRAND,
                className: en.marginTop16,
                onClick: () => eh($.pC.GUILD_BANNER, ee.B, this.handleBannerChange, !0, {
                    page: Q.ZY5.GUILD_SETTINGS,
                    section: Q.jXE.GUILD_BANNER
                }, n),
                children: et.Z.Messages.UPLOAD_BACKGROUND
            });
        return (0, s.jsx)(I.FormSection, {
            className: en.divider,
            children: (0, s.jsxs)(w.Z, {
                basis: '50%',
                direction: w.Z.Direction.HORIZONTAL,
                align: w.Z.Justify.START,
                children: [
                    (0, s.jsxs)(w.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, s.jsxs)(I.FormTitle, {
                                className: en.flexFormTitle,
                                children: [
                                    (0, s.jsx)('div', { children: et.Z.Messages.FORM_LABEL_SERVER_BANNER }),
                                    (0, s.jsx)(L.Z, {
                                        guild: e,
                                        guildFeature: Q.oNc.BANNER,
                                        className: en.guildFeatureAvailabilityIndicator,
                                        onClick: this.handleBannerUpsellIndicator
                                    })
                                ]
                            }),
                            (0, s.jsx)(I.FormText, {
                                type: I.FormTextTypes.DESCRIPTION,
                                className: en.marginBottom8,
                                children: et.Z.Messages.FORM_HELP_SERVER_BANNER
                            }),
                            (0, s.jsx)(I.FormText, {
                                type: I.FormTextTypes.DESCRIPTION,
                                children: et.Z.Messages.GUILD_SETTINGS_BANNER_RECOMMEND.format({ articleURL: z.Z.getArticleURL(Q.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            a ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)
                        ]
                    }),
                    (0, s.jsx)(w.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: a ? l : (0, s.jsx)(I.Clickable, {
                            'aria-hidden': !0,
                            tabIndex: -1,
                            className: en.upsell,
                            onClick: this.handleBannerUpsellUpload,
                            children: l
                        })
                    })
                ]
            })
        });
    }
    renderProgressBar() {
        let {
            guild: e,
            canManageGuild: t,
            theme: n
        } = this.props;
        return (0, s.jsx)(I.FormSection, {
            children: (0, s.jsxs)(w.Z, {
                align: w.Z.Align.START,
                children: [
                    (0, s.jsxs)(w.Z, {
                        basis: '50%',
                        direction: w.Z.Direction.VERTICAL,
                        align: w.Z.Align.STRETCH,
                        children: [
                            (0, s.jsx)(I.FormSwitch, {
                                className: r()(en.marginTop8, en.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: et.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_TITLE
                            }),
                            (0, s.jsx)(I.FormText, {
                                type: I.FormTextTypes.DESCRIPTION,
                                className: en.marginBottom8,
                                children: et.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_DESCRIPTION
                            })
                        ]
                    }),
                    (0, s.jsx)(w.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, s.jsx)('img', {
                            alt: et.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_IMG_ALT,
                            src: (0, E.ap)(n) ? ea : es,
                            className: en.progressBarImage
                        })
                    })
                ]
            })
        });
    }
    renderDisplaySection() {
        return (0, s.jsx)('div', {
            ref: this._displaySectionRef,
            children: (0, s.jsxs)(I.FormSection, {
                title: et.Z.Messages.DISPLAY,
                tag: I.FormTitleTags.H1,
                className: en.divider,
                children: [
                    this.renderProgressBar(),
                    this.renderBanner(),
                    this.renderServerInviteBGSection()
                ]
            })
        });
    }
    render() {
        return (0, s.jsxs)(I.FormSection, {
            title: et.Z.Messages.SERVER_OVERVIEW,
            tag: I.FormTitleTags.H1,
            children: [
                this.renderBaseSettings(),
                this.renderSummariesSection(),
                this.renderAFKSection(),
                this.renderJoinNotificationSection(),
                this.renderNotificationSection(),
                this.renderDisplaySection()
            ]
        });
    }
    constructor(...e) {
        super(...e), ei(this, '_imageInputRef', a.createRef()), ei(this, '_displaySectionRef', a.createRef()), ei(this, '_inviteSectionRef', a.createRef()), ei(this, '_notificationSectionRef', a.createRef()), ei(this, 'handleIconChange', e => {
            K.Z.updateGuild({ icon: e });
        }), ei(this, 'handleOpenImageCroppingModal', (e, t) => {
            (0, I.openModalLazy)(async () => {
                let {default: a} = await n.e('22872').then(n.bind(n, 850085));
                return n => (0, s.jsx)(a, {
                    onCrop: this.handleIconChange,
                    imgURI: e,
                    file: t,
                    ...n
                });
            });
        }), ei(this, 'handleUploadImage', e => {
            var t;
            e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue());
        }), ei(this, 'handleShowJoinsChange', e => this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e)), ei(this, 'handleShowSubscriptionsChange', e => this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e)), ei(this, 'handleShowGuildRemindersChange', e => {
            this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e);
        }), ei(this, 'handleShowJoinRepliesChange', e => this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e)), ei(this, 'handleShowGuildRoleSubscriptionPurchaseMessages', e => {
            this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e);
        }), ei(this, 'handleShowDeadchatPromptMessageChange', e => {
            this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e);
        }), ei(this, 'handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange', e => {
            this.handleSystemChannelFlagsChange(Q.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e);
        }), ei(this, 'handleHomeHeaderChange', (e, t) => {
            if (null == e || void 0 === t) {
                K.Z.updateGuild({ homeHeader: null });
                return;
            }
            (0, I.openModalLazy)(async () => {
                let {default: a} = await n.e('22872').then(n.bind(n, 850085));
                return n => (0, s.jsx)(a, {
                    imgURI: e,
                    file: t,
                    onCrop: e => K.Z.updateGuild({ homeHeader: e }),
                    uploadType: $.pC.HOME_HEADER,
                    ...n
                });
            });
        }), ei(this, 'handleBannerChange', (e, t) => {
            let {
                    guild: n,
                    analyticsLocations: s
                } = this.props, a = null == t ? void 0 : t.type, i = {
                    page: Q.ZY5.GUILD_SETTINGS,
                    section: Q.jXE.ANIMATED_GUILD_BANNER_UPSELL,
                    object: 'temp'
                };
            if (null != a && null != e) {
                if ('image/gif' !== a || n.hasFeature(Q.oNc.ANIMATED_BANNER)) {
                    if (!n.hasFeature(Q.oNc.BANNER)) {
                        i.object = Q.qAy.IMAGE_CROPPING_MODAL, (0, O.c)({
                            guild: n,
                            analyticsLocations: s,
                            analyticsLocation: i,
                            banner: e,
                            isGIF: !1
                        });
                        return;
                    }
                } else {
                    i.object = Q.qAy.GIF_CROPPING_MODAL, (0, O.c)({
                        guild: n,
                        analyticsLocations: s,
                        analyticsLocation: i,
                        banner: e,
                        isGIF: !0
                    });
                    return;
                }
            }
            K.Z.updateGuild({ banner: e });
        }), ei(this, 'handleShowModalUpsell', (e, t, n, s) => {
            e.preventDefault(), e.stopPropagation();
            let {
                guild: a,
                analyticsLocations: i
            } = this.props;
            (0, h.yw)(Q.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                location: {
                    section: t,
                    object: Q.qAy.LEARN_MORE
                },
                guild_id: null == a ? void 0 : a.id,
                location_stack: i
            }), (0, A.Z)({
                analyticsLocations: i,
                analyticsSourceLocation: {
                    section: t,
                    object: n,
                    page: Q.ZY5.GUILD_SETTINGS
                },
                guild: a,
                perks: s
            });
        }), ei(this, 'handleInviteSplashUpsellIndicator', e => {
            this.handleShowModalUpsell(e, Q.jXE.GUILD_INVITE_BACKGROUND, Q.qAy.BADGE, (0, J.o9)());
        }), ei(this, 'handleInviteSplashUpsellButton', e => {
            this.handleShowModalUpsell(e, Q.jXE.GUILD_INVITE_BACKGROUND, Q.qAy.BUTTON_CTA, (0, J.o9)());
        }), ei(this, 'handleInviteSplashUpsellUpload', e => {
            this.handleShowModalUpsell(e, Q.jXE.GUILD_INVITE_BACKGROUND, Q.qAy.UPLOAD_IMAGE, (0, J.o9)());
        }), ei(this, 'handleBannerUpsellIndicator', e => {
            this.handleShowModalUpsell(e, Q.jXE.GUILD_BANNER, Q.qAy.BADGE, (0, J.XO)());
        }), ei(this, 'handleBannerUpsellButton', e => {
            this.handleShowModalUpsell(e, Q.jXE.GUILD_BANNER, Q.qAy.BUTTON_CTA, (0, J.XO)());
        }), ei(this, 'handleBannerUpsellUpload', e => {
            this.handleShowModalUpsell(e, Q.jXE.GUILD_BANNER, Q.qAy.UPLOAD_IMAGE, (0, J.XO)());
        }), ei(this, 'handleConversationSummariesToggle', e => {
            let {guild: t} = this.props, n = new Set(t.features);
            e ? n.add(Q.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(Q.oNc.SUMMARIES_ENABLED_BY_USER), K.Z.updateGuild({ features: n });
        }), ei(this, 'uploadBGUpsellButton', e => (0, s.jsxs)(I.ShinyButton, {
            color: I.Button.Colors.GREEN,
            className: r()(en.marginTop16),
            innerClassName: en.upsellButton,
            onClick: e,
            children: [
                (0, s.jsx)(H.Z, {
                    height: 16,
                    width: 16,
                    className: en.premiumUpsellBadge
                }),
                ' ',
                et.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
            ]
        }));
    }
}
function eS() {
    var e;
    let {
            guild: t,
            errors: n,
            submitting: i,
            subsection: r
        } = (0, u.cj)([q.Z], () => q.Z.getProps()), l = (0, N.ZP)(), {analyticsLocations: c} = (0, g.ZP)(S.Z.OVERVIEW);
    a.useEffect(() => {
        (0, D.Kw)(v.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let d = (0, u.e7)([P.Z], () => P.Z.getCategories(null == t ? void 0 : t.id)), _ = a.useMemo(() => (0, C.Z)(d._categories, d), [d]), {
            canManageGuild: E,
            isGuildAdmin: I
        } = (0, u.cj)([y.Z], () => ({
            canManageGuild: y.Z.can(Q.Plq.MANAGE_GUILD, t),
            isGuildAdmin: y.Z.can(Q.Plq.ADMINISTRATOR, t)
        })), T = (0, u.e7)([B.Z], () => B.Z.getMemberCount(null == t ? void 0 : t.id)), m = (0, u.e7)([k.default], () => k.default.getCurrentUser());
    o()(null != m, 'GuildSettingsOverview: currentUser cannot be undefined');
    let {enableDeadchat: h} = R.Z.useExperiment({
        guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : Q.lds,
        location: 'guild_settings'
    }, {
        disable: null == t,
        autoTrackExposure: !0
    });
    return null == t ? null : (0, s.jsx)(g.Gt, {
        value: c,
        children: (0, s.jsx)(eN, {
            channels: _,
            canManageGuild: E,
            isGuildAdmin: I,
            subsection: r,
            guild: t,
            errors: n,
            submitting: i,
            currentUser: m,
            guildMemberCount: T,
            theme: l,
            analyticsLocations: c,
            eligibleForDeadchatPrompt: h
        })
    });
}
function eh(e, t, a) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], r = arguments.length > 4 ? arguments[4] : void 0, l = arguments.length > 5 ? arguments[5] : void 0;
    (0, I.openModalLazy)(async () => {
        let {default: o} = await n.e('89289').then(n.bind(n, 28130));
        return n => (0, s.jsx)(o, {
            maxFileSizeBytes: t,
            onComplete: a,
            uploadType: e,
            showUpsellHeader: i,
            analyticsLocation: r,
            analyticsLocations: l,
            ...n
        });
    });
}
