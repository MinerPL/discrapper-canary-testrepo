n.d(t, {
    O: function () {
        return eN;
    },
    Z: function () {
        return eh;
    }
}),
    n(47120),
    n(733860);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(512722),
    o = n.n(l),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    _ = n(692547),
    I = n(780384),
    E = n(481060),
    T = n(852860),
    m = n(902840),
    N = n(410030),
    S = n(100527),
    h = n(367907),
    g = n(906732),
    C = n(740504),
    x = n(933557),
    p = n(471445),
    R = n(890477),
    f = n(34586),
    L = n(600164),
    O = n(688465),
    A = n(807582),
    M = n(48217),
    D = n(26323),
    v = n(35125),
    j = n(536442),
    Z = n(142497),
    b = n(884858),
    U = n(516129),
    G = n(813197),
    P = n(208567),
    B = n(592125),
    y = n(324067),
    F = n(650774),
    k = n(496675),
    w = n(699516),
    H = n(594174),
    V = n(709586),
    Y = n(768581),
    W = n(630388),
    z = n(823379),
    K = n(63063),
    q = n(434404),
    X = n(999382),
    Q = n(203377),
    J = n(981631),
    $ = n(30513),
    ee = n(486324),
    et = n(200299),
    en = n(689938),
    es = n(655517),
    ea = n(935653),
    ei = n(449874);
function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let el = 'NO_AFK_CHANNEL',
    eo = 'NO_SYSTEM_CHANNEL',
    ec = ''.concat(60),
    ed = ''.concat(300),
    eu = ''.concat(900),
    e_ = ''.concat(1800),
    eI = ''.concat(3600);
function eE(e) {
    return eT(e[0]);
}
function eT(e) {
    if (null == e) return;
    let { label: t, channel: n, category: a } = e,
        i = (0, p.KS)(n),
        r = null != a ? (0, x.F6)(a, H.default, w.Z) : null;
    return (0, s.jsx)(E.IconSelectOption, {
        title: t,
        icon: i,
        subtitle: r
    });
}
function em(e) {
    return {
        value: e.id,
        label: (0, x.F6)(e, H.default, w.Z),
        channel: e,
        category: B.Z.getChannel(e.parent_id)
    };
}
let eN = () => {
    let { guild: e, originalGuild: t, submitting: n, errors: i } = (0, u.cj)([X.Z], () => X.Z.getProps()),
        r = a.useMemo(() => (0, Q.LG)(i), [i]),
        l = a.useCallback(() => {
            if (null == e) return;
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
            !(0, z.OL)(new Set(e.features), new Set(t.features)) && (n.features = e.features), q.Z.saveGuild(e.id, n);
        }, [e, t]),
        o = a.useCallback(() => {
            if (null != e) q.Z.init(e.id);
        }, [e]);
    return (0, s.jsx)(T.Z, {
        submitting: n,
        errorMessage: r,
        onSave: l,
        onReset: o
    });
};
class eS extends a.PureComponent {
    componentDidMount() {
        if (this.props.subsection === J.KsC.DISPLAY && null != this._displaySectionRef.current) {
            let e = this._displaySectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === J.KsC.INVITE && null != this._inviteSectionRef.current) {
            let e = this._inviteSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        } else if (this.props.subsection === J.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
            let e = this._notificationSectionRef.current;
            setTimeout(() => e.scrollIntoView(), 0);
        }
    }
    handleNameChange(e) {
        q.Z.updateGuild({ name: e });
    }
    handleAFKChannelChange(e) {
        e === el && (e = null), q.Z.updateGuild({ afkChannelId: e });
    }
    handleAFKTimeoutChange(e) {
        q.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
    }
    handleSystemChannelChange(e) {
        e === eo && (e = null), q.Z.updateGuild({ systemChannelId: e });
    }
    handleDefaultMessageNotificationsChange(e) {
        let { value: t } = e;
        q.Z.updateGuild({ defaultMessageNotifications: t });
    }
    handleSplashChange(e) {
        q.Z.updateGuild({ splash: e });
    }
    handleSystemChannelFlagsChange(e, t) {
        let { guild: n } = this.props,
            s = (0, W.mB)(n.systemChannelFlags, e, t);
        q.Z.updateGuild({ systemChannelFlags: s });
    }
    handlePremiumProgressBarEnabledChange(e) {
        q.Z.updateGuild({ premiumProgressBarEnabled: e });
    }
    handleChangeDescription(e) {
        q.Z.updateGuild({ description: e });
    }
    renderBaseSettings() {
        let { guild: e, errors: t, canManageGuild: n } = this.props;
        return (0, s.jsxs)(L.Z, {
            className: r()(es.__invalid_baseSection),
            children: [
                (0, s.jsxs)(L.Z, {
                    basis: '50%',
                    justify: L.Z.Justify.BETWEEN,
                    children: [
                        (0, s.jsxs)(L.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, s.jsx)(P.Z, {
                                    showIcon: !0,
                                    name: e.name,
                                    image: e.icon,
                                    onChange: this.handleIconChange,
                                    disabled: !n,
                                    hint: en.Z.Messages.CHANGE_ICON,
                                    makeURL: (t) =>
                                        Y.ZP.getGuildIconURL({
                                            id: e.id,
                                            icon: t,
                                            canAnimate: !0,
                                            size: 100
                                        }),
                                    className: r()({
                                        [es.avatarUploader]: n,
                                        [es.avatarUploaderDisabled]: !n
                                    }),
                                    imageClassName: r()(es.avatarUploaderInner, { [es.avatarUploaderInnerEmpty]: null == e.icon })
                                }),
                                null != t.icon
                                    ? (0, s.jsx)('div', {
                                          className: es.iconError,
                                          children: t.icon
                                      })
                                    : null
                            ]
                        }),
                        (0, s.jsxs)(L.Z, {
                            direction: L.Z.Direction.VERTICAL,
                            align: L.Z.Align.START,
                            style: { maxWidth: 180 },
                            children: [
                                (0, s.jsx)(E.FormText, {
                                    type: E.FormTextTypes.DESCRIPTION,
                                    className: es.marginBottom8,
                                    children: en.Z.Messages.GUILD_SETTINGS_ICON_RECOMMEND
                                }),
                                (0, s.jsxs)(E.Button, {
                                    look: E.ButtonLooks.OUTLINED,
                                    color: E.ButtonColors.PRIMARY,
                                    disabled: !n,
                                    className: es.marginTop8,
                                    onClick: this.handleUploadImage,
                                    children: [
                                        en.Z.Messages.UPLOAD_IMAGE,
                                        (0, s.jsx)(G.ZP, {
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
                (0, s.jsx)(L.Z.Child, {
                    basis: '50%',
                    children: (0, s.jsx)(E.FormItem, {
                        title: en.Z.Messages.FORM_LABEL_SERVER_NAME,
                        className: es.marginBottom20,
                        children: (0, s.jsx)(E.TextInput, {
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
        let { guild: t, canManageGuild: n, channels: a } = this.props,
            i = null != t.afkTimeout ? ''.concat(t.afkTimeout) : null,
            r = null !== (e = t.afkChannelId) && void 0 !== e ? e : el,
            l = [
                {
                    value: ec,
                    label: en.Z.Messages.DURATION_MINUTES.format({ minutes: 1 })
                },
                {
                    value: ed,
                    label: en.Z.Messages.DURATION_MINUTES.format({ minutes: 5 })
                },
                {
                    value: eu,
                    label: en.Z.Messages.DURATION_MINUTES.format({ minutes: 15 })
                },
                {
                    value: e_,
                    label: en.Z.Messages.DURATION_MINUTES.format({ minutes: 30 })
                },
                {
                    value: eI,
                    label: en.Z.Messages.DURATION_HOURS.format({ hours: 1 })
                }
            ],
            o = d()(a)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === J.d4z.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return em(t);
                })
                .value();
        return (
            o.unshift({
                value: el,
                label: en.Z.Messages.NO_AFK_CHANNEL
            }),
            (0, s.jsxs)(E.FormSection, {
                className: es.divider,
                children: [
                    (0, s.jsxs)(L.Z, {
                        children: [
                            (0, s.jsx)(L.Z.Child, {
                                basis: '50%',
                                children: (0, s.jsx)(E.FormItem, {
                                    title: en.Z.Messages.FORM_LABEL_AFK_CHANNEL,
                                    children: (0, s.jsx)(E.SingleSelect, {
                                        value: r,
                                        options: o,
                                        onChange: this.handleAFKChannelChange,
                                        isDisabled: !n,
                                        renderOptionLabel: eT,
                                        renderOptionValue: eE
                                    })
                                })
                            }),
                            (0, s.jsx)(L.Z.Child, {
                                basis: '50%',
                                children: (0, s.jsx)(E.FormItem, {
                                    title: en.Z.Messages.FORM_LABEL_AFK_TIMEOUT,
                                    children: (0, s.jsx)(E.SingleSelect, {
                                        value: i,
                                        options: l,
                                        isDisabled: r === el || !n,
                                        onChange: this.handleAFKTimeoutChange
                                    })
                                })
                            })
                        ]
                    }),
                    (0, s.jsx)(E.FormText, {
                        className: es.marginTop8,
                        type: E.FormTextTypes.DESCRIPTION,
                        children: en.Z.Messages.FORM_HELP_AFK_CHANNEL
                    })
                ]
            })
        );
    }
    renderJoinNotificationSection() {
        var e;
        let { guild: t, channels: n, canManageGuild: a, eligibleForDeadchatPrompt: i } = this.props,
            l = null !== (e = t.systemChannelId) && void 0 !== e ? e : eo,
            o = d()(n)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === J.d4z.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return em(t);
                })
                .value();
        o.unshift({
            value: eo,
            label: en.Z.Messages.NO_SYSTEM_CHANNEL
        });
        let c = (0, v.eI)(t),
            u = c || (0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
            _ = c || (0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        return (0, s.jsxs)(E.FormSection, {
            className: es.divider,
            children: [
                (0, s.jsx)(E.FormTitle, { children: en.Z.Messages.FORM_LABEL_SYSTEM_CHANNEL }),
                (0, s.jsx)(E.SingleSelect, {
                    value: l,
                    options: o,
                    isDisabled: !a,
                    onChange: this.handleSystemChannelChange,
                    renderOptionLabel: eT,
                    renderOptionValue: eE
                }),
                (0, s.jsx)(E.FormText, {
                    className: es.marginTop8,
                    type: E.FormTextTypes.DESCRIPTION,
                    children: en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL
                }),
                (0, s.jsx)(E.FormSwitch, {
                    className: es.marginTop20,
                    onChange: this.handleShowJoinsChange,
                    value: !(0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_JOIN_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !a || l === eo,
                    children: en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGES
                }),
                (0, s.jsx)(E.FormSwitch, {
                    className: r()(es.__invalid_marginReset, es.marginTop20),
                    onChange: this.handleShowJoinRepliesChange,
                    value: !(0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
                    hideBorder: !0,
                    disabled: !a || l === eo,
                    children: en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGE_REPLIES
                }),
                (0, s.jsx)(E.FormSwitch, {
                    className: r()(es.__invalid_marginReset, es.marginTop20),
                    onChange: this.handleShowSubscriptionsChange,
                    value: !(0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
                    hideBorder: !0,
                    disabled: !a || l === eo,
                    children: en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTION_MESSAGES
                }),
                (0, s.jsx)(E.FormSwitch, {
                    className: r()(es.__invalid_marginReset, es.marginTop20),
                    onChange: this.handleShowGuildRemindersChange,
                    value: !(0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
                    hideBorder: !0,
                    disabled: !a || l === eo,
                    children: en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_GUILD_REMINDERS
                }),
                u &&
                    (0, s.jsx)(E.FormSwitch, {
                        className: r()(es.__invalid_marginReset, es.marginTop20),
                        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
                        value: !(0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
                        hideBorder: !0,
                        disabled: !a || l === eo,
                        children: en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGES
                    }),
                _ &&
                    (0, s.jsx)(E.FormSwitch, {
                        className: r()(es.__invalid_marginReset, es.marginTop20),
                        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
                        value: !(0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
                        hideBorder: !0,
                        disabled: !a || l === eo,
                        children: en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGE_REPLIES
                    }),
                i &&
                    (0, s.jsx)(E.FormSwitch, {
                        className: r()(es.__invalid_marginReset, es.marginTop20),
                        onChange: this.handleShowDeadchatPromptMessageChange,
                        value: !(0, W.yE)(t.systemChannelFlags, J.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
                        hideBorder: !0,
                        disabled: !a || l === eo,
                        children: (0, s.jsxs)('div', {
                            className: es.flexRow,
                            children: [en.Z.Messages.FORM_HELP_SYSTEM_CHANNEL_DEADCHAT_PROMPT_MESSAGE, (0, s.jsx)(O.Z, {})]
                        })
                    })
            ]
        });
    }
    renderNotificationSection() {
        let { guild: e, canManageGuild: t, guildMemberCount: n } = this.props,
            a = [
                {
                    name: en.Z.Messages.FORM_LABEL_ALL_MESSAGES,
                    value: J.bL.ALL_MESSAGES,
                    desc: null != n && n >= J.qWG ? en.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATIONS_LARGE_GUILD_NOTIFY_ALL : null
                },
                {
                    name: en.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                    value: J.bL.ONLY_MENTIONS
                }
            ];
        return (0, s.jsx)('div', {
            ref: this._notificationSectionRef,
            children: (0, s.jsxs)(E.FormSection, {
                className: es.divider,
                children: [
                    (0, s.jsx)(E.FormTitle, { children: en.Z.Messages.FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS }),
                    (0, s.jsx)(E.FormText, {
                        type: E.FormTextTypes.DESCRIPTION,
                        className: es.marginBottom20,
                        children: en.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO
                    }),
                    (0, s.jsx)(E.FormText, {
                        type: E.FormTextTypes.DESCRIPTION,
                        className: es.marginBottom20,
                        children: en.Z.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_TIP
                    }),
                    (0, s.jsx)(E.RadioGroup, {
                        options: a,
                        value: e.defaultMessageNotifications,
                        disabled: !t,
                        onChange: this.handleDefaultMessageNotificationsChange
                    })
                ]
            })
        });
    }
    renderActivityFeedSection() {
        let { canManageGuild: e, isInventoryFeedEnabled: t } = this.props;
        return void 0 === t
            ? null
            : (0, s.jsx)('div', {
                  ref: this._notificationSectionRef,
                  children: (0, s.jsxs)(E.FormSection, {
                      className: es.divider,
                      children: [
                          (0, s.jsx)(E.FormTitle, { children: en.Z.Messages.FORM_LABEL_ACTIVITY_FEED }),
                          (0, s.jsx)(E.FormSwitch, {
                              className: es.marginBottom0,
                              onChange: this.handleShowActivityFeedToggle,
                              value: t,
                              hideBorder: !0,
                              note: en.Z.Messages.FORM_HELP_ACTIVITY_FEED,
                              disabled: !e,
                              children: en.Z.Messages.FORM_ACTIVITY_FEED_TOGGLE
                          })
                      ]
                  })
              });
    }
    renderSummariesSection() {
        let { guild: e, canManageGuild: t } = this.props;
        return (0, m.Jc)(e, !1)
            ? (0, s.jsx)('div', {
                  children: (0, s.jsx)(E.FormSection, {
                      className: es.divider,
                      children: (0, s.jsx)(E.FormSwitch, {
                          className: r()(es.marginTop8, es.marginBottom8),
                          onChange: this.handleConversationSummariesToggle,
                          value: e.hasFeature(J.oNc.SUMMARIES_ENABLED_BY_USER),
                          hideBorder: !0,
                          note: en.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({ helpdeskArticle: K.Z.getArticleURL(J.BhN.CONVERSATION_SUMMARIES) }),
                          disabled: !t,
                          children: (0, s.jsxs)('div', {
                              className: es.badgedItem,
                              children: [
                                  en.Z.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE,
                                  (0, s.jsx)(E.TextBadge, {
                                      text: en.Z.Messages.BETA,
                                      color: _.Z.unsafe_rawColors.BRAND_500.css,
                                      className: es.__invalid_betaTag
                                  })
                              ]
                          })
                      })
                  })
              })
            : null;
    }
    renderServerInviteBGSection() {
        let { guild: e, canManageGuild: t } = this.props,
            n = e.hasFeature(J.oNc.INVITE_SPLASH),
            a = t && n,
            i = (0, s.jsx)(U.Z, {
                image: e.splash,
                makeURL: (t) =>
                    null != t
                        ? Y.ZP.getGuildSplashURL({
                              id: e.id,
                              splash: t
                          })
                        : null,
                disabled: !a,
                onChange: this.handleSplashChange,
                hint: en.Z.Messages.CHANGE_SPLASH,
                enabled: a,
                maxFileSizeBytes: et.B,
                onFileSizeError: () => (0, b.Z)(et.B)
            });
        return (0, s.jsx)('div', {
            ref: this._inviteSectionRef,
            children: (0, s.jsx)(E.FormSection, {
                className: es.divider,
                children: (0, s.jsxs)(L.Z, {
                    basis: '50%',
                    direction: L.Z.Direction.HORIZONTAL,
                    align: L.Z.Justify.START,
                    children: [
                        (0, s.jsxs)(L.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: [
                                (0, s.jsxs)(E.FormTitle, {
                                    className: es.flexFormTitle,
                                    children: [
                                        (0, s.jsx)('div', { children: en.Z.Messages.GUILD_SETTINGS_SERVER_INVITE_BACKGROUND }),
                                        (0, s.jsx)(A.Z, {
                                            guild: e,
                                            guildFeature: J.oNc.INVITE_SPLASH,
                                            className: es.guildFeatureAvailabilityIndicator,
                                            onClick: this.handleInviteSplashUpsellIndicator
                                        })
                                    ]
                                }),
                                (0, s.jsx)(E.FormText, {
                                    type: E.FormTextTypes.DESCRIPTION,
                                    className: es.marginBottom8,
                                    children: en.Z.Messages.GUILD_SETTINGS_SPLASH_DESCRIPTION
                                }),
                                (0, s.jsx)(E.FormText, {
                                    type: E.FormTextTypes.DESCRIPTION,
                                    children: en.Z.Messages.GUILD_SETTINGS_SPLASH_RECOMMEND.format({ articleURL: K.Z.getArticleURL(J.BhN.GUILD_INVITE_SPLASH) })
                                }),
                                n
                                    ? (0, s.jsxs)(E.Button, {
                                          disabled: !a,
                                          color: E.ButtonColors.BRAND,
                                          className: es.marginTop16,
                                          children: [
                                              en.Z.Messages.UPLOAD_BACKGROUND,
                                              (0, s.jsx)(G.ZP, {
                                                  disabled: !a,
                                                  onChange: this.handleSplashChange,
                                                  maxFileSizeBytes: et.B,
                                                  onFileSizeError: () => (0, b.Z)(et.B)
                                              })
                                          ]
                                      })
                                    : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)
                            ]
                        }),
                        (0, s.jsx)(L.Z.Child, {
                            wrap: !0,
                            basis: '50%',
                            children: n
                                ? i
                                : (0, s.jsx)(E.Clickable, {
                                      'aria-hidden': !0,
                                      tabIndex: -1,
                                      className: es.upsell,
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
        let { guild: e, canManageGuild: t, analyticsLocations: n } = this.props,
            a = e.hasFeature(J.oNc.BANNER),
            i = e.hasFeature(J.oNc.ANIMATED_BANNER),
            r = a && t,
            l = (0, s.jsx)(U.Z, {
                image: e.banner,
                makeURL: (t) =>
                    null != t
                        ? Y.ZP.getGuildBannerURL(
                              {
                                  id: e.id,
                                  banner: t
                              },
                              i
                          )
                        : null,
                disabled: !r,
                onChange: this.handleBannerChange,
                hint: en.Z.Messages.CHANGE_SPLASH,
                onOpenImageSelectModal: () =>
                    eg(
                        ee.pC.GUILD_BANNER,
                        et.B,
                        this.handleBannerChange,
                        !0,
                        {
                            page: J.ZY5.GUILD_SETTINGS,
                            section: J.jXE.GUILD_BANNER
                        },
                        n
                    ),
                enabled: r
            }),
            o = (0, s.jsx)(E.Button, {
                disabled: !r,
                color: E.Button.Colors.BRAND,
                className: es.marginTop16,
                onClick: () =>
                    eg(
                        ee.pC.GUILD_BANNER,
                        et.B,
                        this.handleBannerChange,
                        !0,
                        {
                            page: J.ZY5.GUILD_SETTINGS,
                            section: J.jXE.GUILD_BANNER
                        },
                        n
                    ),
                children: en.Z.Messages.UPLOAD_BACKGROUND
            });
        return (0, s.jsx)(E.FormSection, {
            className: es.divider,
            children: (0, s.jsxs)(L.Z, {
                basis: '50%',
                direction: L.Z.Direction.HORIZONTAL,
                align: L.Z.Justify.START,
                children: [
                    (0, s.jsxs)(L.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: [
                            (0, s.jsxs)(E.FormTitle, {
                                className: es.flexFormTitle,
                                children: [
                                    (0, s.jsx)('div', { children: en.Z.Messages.FORM_LABEL_SERVER_BANNER }),
                                    (0, s.jsx)(A.Z, {
                                        guild: e,
                                        guildFeature: J.oNc.BANNER,
                                        className: es.guildFeatureAvailabilityIndicator,
                                        onClick: this.handleBannerUpsellIndicator
                                    })
                                ]
                            }),
                            (0, s.jsx)(E.FormText, {
                                type: E.FormTextTypes.DESCRIPTION,
                                className: es.marginBottom8,
                                children: en.Z.Messages.FORM_HELP_SERVER_BANNER
                            }),
                            (0, s.jsx)(E.FormText, {
                                type: E.FormTextTypes.DESCRIPTION,
                                children: en.Z.Messages.GUILD_SETTINGS_BANNER_RECOMMEND.format({ articleURL: K.Z.getArticleURL(J.BhN.GUILD_BANNER_SPLASH) })
                            }),
                            a ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)
                        ]
                    }),
                    (0, s.jsx)(L.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: a
                            ? l
                            : (0, s.jsx)(E.Clickable, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  className: es.upsell,
                                  onClick: this.handleBannerUpsellUpload,
                                  children: l
                              })
                    })
                ]
            })
        });
    }
    renderProgressBar() {
        let { guild: e, canManageGuild: t, theme: n } = this.props;
        return (0, s.jsx)(E.FormSection, {
            children: (0, s.jsxs)(L.Z, {
                align: L.Z.Align.START,
                children: [
                    (0, s.jsxs)(L.Z, {
                        basis: '50%',
                        direction: L.Z.Direction.VERTICAL,
                        align: L.Z.Align.STRETCH,
                        children: [
                            (0, s.jsx)(E.FormSwitch, {
                                className: r()(es.marginTop8, es.marginBottom8),
                                onChange: this.handlePremiumProgressBarEnabledChange,
                                value: e.premiumProgressBarEnabled,
                                hideBorder: !0,
                                disabled: !t,
                                children: en.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_TITLE
                            }),
                            (0, s.jsx)(E.FormText, {
                                type: E.FormTextTypes.DESCRIPTION,
                                className: es.marginBottom8,
                                children: en.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_DESCRIPTION
                            })
                        ]
                    }),
                    (0, s.jsx)(L.Z.Child, {
                        wrap: !0,
                        basis: '50%',
                        children: (0, s.jsx)('img', {
                            alt: en.Z.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_IMG_ALT,
                            src: (0, I.ap)(n) ? ei : ea,
                            className: es.progressBarImage
                        })
                    })
                ]
            })
        });
    }
    renderDisplaySection() {
        return (0, s.jsx)('div', {
            ref: this._displaySectionRef,
            children: (0, s.jsxs)(E.FormSection, {
                title: en.Z.Messages.DISPLAY,
                tag: E.FormTitleTags.H1,
                className: es.divider,
                children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
            })
        });
    }
    render() {
        return (0, s.jsxs)(E.FormSection, {
            title: en.Z.Messages.SERVER_OVERVIEW,
            tag: E.FormTitleTags.H1,
            children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection()]
        });
    }
    constructor(...e) {
        super(...e),
            er(this, '_imageInputRef', a.createRef()),
            er(this, '_displaySectionRef', a.createRef()),
            er(this, '_inviteSectionRef', a.createRef()),
            er(this, '_notificationSectionRef', a.createRef()),
            er(this, 'handleIconChange', (e) => {
                q.Z.updateGuild({ icon: e });
            }),
            er(this, 'handleOpenImageCroppingModal', (e, t) => {
                (0, E.openModalLazy)(async () => {
                    let { default: a } = await Promise.all([n.e('70687'), n.e('48017'), n.e('4792')]).then(n.bind(n, 850085));
                    return (n) =>
                        (0, s.jsx)(a, {
                            onCrop: this.handleIconChange,
                            imgURI: e,
                            file: t,
                            ...n
                        });
                });
            }),
            er(this, 'handleUploadImage', (e) => {
                var t;
                e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue());
            }),
            er(this, 'handleShowJoinsChange', (e) => this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_JOIN_NOTIFICATIONS, !e)),
            er(this, 'handleShowSubscriptionsChange', (e) => this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e)),
            er(this, 'handleShowGuildRemindersChange', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e);
            }),
            er(this, 'handleShowJoinRepliesChange', (e) => this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e)),
            er(this, 'handleShowGuildRoleSubscriptionPurchaseMessages', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e);
            }),
            er(this, 'handleShowDeadchatPromptMessageChange', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e);
            }),
            er(this, 'handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange', (e) => {
                this.handleSystemChannelFlagsChange(J.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e);
            }),
            er(this, 'handleHomeHeaderChange', (e, t) => {
                if (null == e || void 0 === t) {
                    q.Z.updateGuild({ homeHeader: null });
                    return;
                }
                (0, E.openModalLazy)(async () => {
                    let { default: a } = await Promise.all([n.e('70687'), n.e('48017'), n.e('4792')]).then(n.bind(n, 850085));
                    return (n) =>
                        (0, s.jsx)(a, {
                            imgURI: e,
                            file: t,
                            onCrop: (e) => q.Z.updateGuild({ homeHeader: e }),
                            uploadType: ee.pC.HOME_HEADER,
                            ...n
                        });
                });
            }),
            er(this, 'handleBannerChange', (e, t) => {
                let { guild: n, analyticsLocations: s } = this.props,
                    a = null == t ? void 0 : t.type,
                    i = {
                        page: J.ZY5.GUILD_SETTINGS,
                        section: J.jXE.ANIMATED_GUILD_BANNER_UPSELL,
                        object: 'temp'
                    };
                if (null != a && null != e) {
                    if ('image/gif' !== a || n.hasFeature(J.oNc.ANIMATED_BANNER)) {
                        if (!n.hasFeature(J.oNc.BANNER)) {
                            (i.object = J.qAy.IMAGE_CROPPING_MODAL),
                                (0, M.c)({
                                    guild: n,
                                    analyticsLocations: s,
                                    analyticsLocation: i,
                                    banner: e,
                                    isGIF: !1
                                });
                            return;
                        }
                    } else {
                        (i.object = J.qAy.GIF_CROPPING_MODAL),
                            (0, M.c)({
                                guild: n,
                                analyticsLocations: s,
                                analyticsLocation: i,
                                banner: e,
                                isGIF: !0
                            });
                        return;
                    }
                }
                q.Z.updateGuild({ banner: e });
            }),
            er(this, 'handleShowModalUpsell', (e, t, n, s) => {
                e.preventDefault(), e.stopPropagation();
                let { guild: a, analyticsLocations: i } = this.props;
                (0, h.yw)(J.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        section: t,
                        object: J.qAy.LEARN_MORE
                    },
                    guild_id: null == a ? void 0 : a.id,
                    location_stack: i
                }),
                    (0, D.Z)({
                        analyticsLocations: i,
                        analyticsSourceLocation: {
                            section: t,
                            object: n,
                            page: J.ZY5.GUILD_SETTINGS
                        },
                        guild: a,
                        perks: s
                    });
            }),
            er(this, 'handleInviteSplashUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_INVITE_BACKGROUND, J.qAy.BADGE, (0, $.o9)());
            }),
            er(this, 'handleInviteSplashUpsellButton', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_INVITE_BACKGROUND, J.qAy.BUTTON_CTA, (0, $.o9)());
            }),
            er(this, 'handleInviteSplashUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_INVITE_BACKGROUND, J.qAy.UPLOAD_IMAGE, (0, $.o9)());
            }),
            er(this, 'handleBannerUpsellIndicator', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_BANNER, J.qAy.BADGE, (0, $.XO)());
            }),
            er(this, 'handleBannerUpsellButton', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_BANNER, J.qAy.BUTTON_CTA, (0, $.XO)());
            }),
            er(this, 'handleBannerUpsellUpload', (e) => {
                this.handleShowModalUpsell(e, J.jXE.GUILD_BANNER, J.qAy.UPLOAD_IMAGE, (0, $.XO)());
            }),
            er(this, 'handleConversationSummariesToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? n.add(J.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(J.oNc.SUMMARIES_ENABLED_BY_USER), q.Z.updateGuild({ features: n });
            }),
            er(this, 'handleShowActivityFeedToggle', (e) => {
                let { guild: t } = this.props,
                    n = new Set(t.features);
                e ? (n.add(J.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(J.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(J.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(J.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), q.Z.updateGuild({ features: n });
            }),
            er(this, 'uploadBGUpsellButton', (e) =>
                (0, s.jsxs)(E.ShinyButton, {
                    color: E.Button.Colors.GREEN,
                    className: r()(es.marginTop16),
                    innerClassName: es.upsellButton,
                    onClick: e,
                    children: [
                        (0, s.jsx)(V.Z, {
                            height: 16,
                            width: 16,
                            className: es.premiumUpsellBadge
                        }),
                        ' ',
                        en.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
                    ]
                })
            );
    }
}
function eh() {
    var e;
    let { guild: t, errors: n, submitting: i, subsection: r } = (0, u.cj)([X.Z], () => X.Z.getProps()),
        l = (0, N.ZP)(),
        { analyticsLocations: c } = (0, g.ZP)(S.Z.OVERVIEW);
    a.useEffect(() => {
        (0, Z.Kw)(j.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL);
    }, []);
    let d = (0, u.e7)([y.Z], () => y.Z.getCategories(null == t ? void 0 : t.id)),
        _ = a.useMemo(() => (0, C.Z)(d._categories, d), [d]),
        { canManageGuild: I, isGuildAdmin: E } = (0, u.cj)([k.Z], () => ({
            canManageGuild: k.Z.can(J.Plq.MANAGE_GUILD, t),
            isGuildAdmin: k.Z.can(J.Plq.ADMINISTRATOR, t)
        })),
        T = (0, u.e7)([F.Z], () => F.Z.getMemberCount(null == t ? void 0 : t.id)),
        m = (0, f.E)(t),
        h = (0, u.e7)([H.default], () => H.default.getCurrentUser());
    o()(null != h, 'GuildSettingsOverview: currentUser cannot be undefined');
    let { enableDeadchat: x } = R.Z.useExperiment(
        {
            guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : J.lds,
            location: 'guild_settings'
        },
        {
            disable: null == t,
            autoTrackExposure: !0
        }
    );
    return null == t
        ? null
        : (0, s.jsx)(g.Gt, {
              value: c,
              children: (0, s.jsx)(eS, {
                  channels: _,
                  canManageGuild: I,
                  isGuildAdmin: E,
                  subsection: r,
                  guild: t,
                  errors: n,
                  submitting: i,
                  currentUser: h,
                  guildMemberCount: T,
                  isInventoryFeedEnabled: m,
                  theme: l,
                  analyticsLocations: c,
                  eligibleForDeadchatPrompt: x
              })
          });
}
function eg(e, t, a) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        r = arguments.length > 4 ? arguments[4] : void 0,
        l = arguments.length > 5 ? arguments[5] : void 0;
    (0, E.openModalLazy)(async () => {
        let { default: o } = await Promise.all([n.e('70687'), n.e('19142')]).then(n.bind(n, 28130));
        return (n) =>
            (0, s.jsx)(o, {
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
