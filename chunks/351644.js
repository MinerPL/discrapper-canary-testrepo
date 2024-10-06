t.d(n, {
    Z: function () {
        return H;
    }
}),
    t(653041),
    t(47120);
var i = t(735250),
    a = t(470079),
    s = t(120356),
    l = t.n(s),
    r = t(658722),
    o = t.n(r),
    c = t(442837),
    d = t(780384),
    u = t(481060),
    I = t(37234),
    m = t(410030),
    _ = t(726542),
    N = t(132871),
    E = t(147890),
    T = t(835473),
    h = t(231757),
    g = t(600164),
    p = t(685929),
    f = t(163400),
    x = t(553795),
    C = t(496675),
    O = t(626135),
    S = t(768581),
    A = t(63063),
    R = t(709054),
    b = t(51144),
    Z = t(327934),
    v = t(585835),
    M = t(997787),
    L = t(981631),
    j = t(689938),
    D = t(560551),
    P = t(509399),
    B = t(790904),
    y = t(609182);
function G(e, n) {
    return n.includes(e);
}
function k(e) {
    let { query: n, setQuery: t } = e,
        s = a.useCallback(
            (e) => {
                t(e);
            },
            [t]
        );
    return (0, i.jsx)('div', {
        className: D.searchContainer,
        children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: n,
            onChange: s,
            onClear: () => t(''),
            placeholder: j.Z.Messages.INTEGRATIONS_SEARCH,
            'aria-label': j.Z.Messages.INTEGRATIONS_SEARCH
        })
    });
}
function H(e) {
    var n, t, s, r, H, w, U, W;
    let { guild: F, channel: V, applicationIntegrations: K, builtInIntegrations: Y, customWebhooks: z, followedChannelWebhooks: q, isLoading: X, canCreateWebhook: J, onManageBuiltIn: Q, onManageCustomWebhooks: $, onManageFollowedChannels: ee, onManageApplication: en, onManageChannelsSyncing: et } = e,
        ei = (0, m.ZP)(),
        [ea, es] = a.useState(''),
        { isFetchingConnections: el, accounts: er } = (0, c.cj)(
            [x.Z],
            () => ({
                isFetchingConnections: x.Z.isFetching(),
                accounts: x.Z.getAccounts()
            }),
            []
        ),
        { canManageWebhooks: eo, canManageGuild: ec } = (0, c.cj)(
            [C.Z],
            () => ({
                canManageWebhooks: (null != F && C.Z.can(L.Plq.MANAGE_WEBHOOKS, F)) || (null != V && C.Z.can(L.Plq.MANAGE_WEBHOOKS, V)),
                canManageGuild: null != F && null == V && C.Z.can(L.Plq.MANAGE_GUILD, F)
            }),
            [F, V]
        ),
        ed = (0, p.Y)(V),
        eu = (0, T.q)(null == V ? void 0 : null === (n = V.linkedLobby) || void 0 === n ? void 0 : n.application_id),
        eI = (0, f.F)(null == F ? void 0 : F.id),
        {
            availableTwitchIntegrations: em,
            availableYoutubeIntegrations: e_,
            guildTwitchIntegrations: eN,
            guildYoutubeIntegrations: eE
        } = a.useMemo(() => {
            var e, n, t, i, a, s, l, r;
            return {
                availableTwitchIntegrations: null !== (a = null === (e = Y.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                availableYoutubeIntegrations: null !== (s = null === (n = Y.youtube) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0,
                guildTwitchIntegrations: null !== (l = null === (t = Y.twitch) || void 0 === t ? void 0 : t.filter((e) => e.enabled).length) && void 0 !== l ? l : 0,
                guildYoutubeIntegrations: null !== (r = null === (i = Y.youtube) || void 0 === i ? void 0 : i.filter((e) => e.enabled).length) && void 0 !== r ? r : 0
            };
        }, [Y.twitch, Y.youtube]),
        { showTwitchCard: eT, showYoutubeCard: eh } = a.useMemo(() => {
            if (el || !ec)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == F ? void 0 : F.hasFeature(L.oNc.COMMUNITY),
                n = er.filter((e) => e.type === L.ABu.TWITCH).length > 0,
                t = er.filter((e) => e.type === L.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: em > 0 || (!n && e),
                showYoutubeCard: e_ > 0 || (!t && e)
            };
        }, [el, ec, F, er, em, e_]),
        eg = Object.values(K).length,
        ep = a.useMemo(() => {
            let e = eg > 100 ? G : o();
            return Object.values(K).filter((n) => {
                var t, i, a;
                let { application: s } = n;
                return (t = s), (i = ea), (a = e), !!('' === (i = i.trim().toLowerCase()) || t.id === i || a(i, t.name.toLowerCase()) || (null != t.bot && a(i, t.bot.username.toLowerCase()))) || !1;
            });
        }, [K, eg, ea]),
        ef = (0, c.e7)(
            [M.Z],
            () => {
                if (null != F) return ep.find((e) => M.Z.canShowOverviewTooltip(F.id, e.integration.id));
            },
            [ep, F]
        ),
        ex = a.useMemo(() => (void 0 !== ef ? [ef, ...ep.filter((e) => e.integration.id !== ef.integration.id)] : ep), [ep, ef]),
        eC = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        [eO, eS] = a.useState(!1),
        eA = a.useRef(0),
        eR = () => {
            eS(!0),
                clearTimeout(eA.current),
                (eA.current = setTimeout(() => {
                    eS(!1);
                }, 200));
        };
    a.useEffect(() => (window.addEventListener('scroll', eR, !0), () => window.removeEventListener('scroll', eR)));
    let eb = ex.map((e) => {
            let n = !eC && e.integration.id === (null == ef ? void 0 : ef.integration.id);
            return (function (e, n, t, a, s) {
                var l;
                let { application: r, integration: o } = n,
                    c = [];
                return (
                    null != o.user
                        ? c.push({
                              icon: u.ClockIcon,
                              text: j.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                                  timestamp: R.default.extractTimestamp(o.id),
                                  user: b.ZP.getUserTag(o.user)
                              })
                          })
                        : c.push({
                              icon: u.ClockIcon,
                              text: j.Z.Messages.INTEGRATION_ADDED_DATE.format({ timestamp: R.default.extractTimestamp(o.id) })
                          }),
                    (0, i.jsx)(
                        v.Z,
                        {
                            name: r.name,
                            imageSrc: null !== (l = r.getIconURL(48)) && void 0 !== l ? l : S.pK['0'],
                            integration: n,
                            buttonText: j.Z.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                            hasNextSection: !0,
                            onButtonClick: () => {
                                t(r.id),
                                    O.default.track(L.rMx.APP_MANAGE_CTA_CLICKED, {
                                        application_id: r.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? C.Z.can(L.Plq.ADMINISTRATOR, e) : void 0
                                    });
                            },
                            details: c,
                            guildId: null == e ? void 0 : e.id,
                            isScrolling: a,
                            canShowMigrationTooltip: s
                        },
                        'integration-'.concat(o.id)
                    )
                );
            })(F, e, en, eO, n);
        }),
        eZ = (0, i.jsx)('div', { className: D.footerImage });
    0 === eb.length &&
        ec &&
        ((eb = (function (e, n, t) {
            let a = (0, d.wj)(e) ? B : y,
                s = (0, i.jsxs)(g.Z, {
                    direction: g.Z.Direction.VERTICAL,
                    align: g.Z.Align.CENTER,
                    className: D.emptyStateWrapper,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: a,
                            className: D.emptyStateSearchImage
                        }),
                        (0, i.jsx)(u.Card, {
                            editable: !0,
                            className: D.emptyStateCard,
                            children: (0, i.jsx)(u.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: j.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH
                            })
                        })
                    ]
                }),
                l = (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: D.emptyStateCard,
                    children: (0, i.jsxs)('div', {
                        className: D.emptyStateText,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: P,
                                className: D.emptyStateImage
                            }),
                            (0, i.jsx)(u.Heading, {
                                color: 'header-secondary',
                                variant: 'heading-xl/bold',
                                children: j.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
                            }),
                            (0, i.jsx)(u.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: j.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
                                    handleGoToAppDirectory: () => {
                                        (0, E.goToAppDirectory)({
                                            guildId: t,
                                            entrypoint: { name: N.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS }
                                        }),
                                            (0, I.xf)();
                                    }
                                })
                            })
                        ]
                    })
                });
            return n > 0 ? s : l;
        })(ei, eg, null == F ? void 0 : F.id)),
        (eZ = null));
    let ev = A.Z.getArticleURL(L.BhN.INTEGRATIONS),
        eM = null != V ? j.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : j.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
        eL = [];
    if (eo) {
        let e, n;
        if (
            (eL.push(
                ((t = z.length),
                (s = J),
                (r = $),
                t > 0 ? (n = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })) : (e = j.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON),
                (0, i.jsx)(
                    v.Z,
                    {
                        name: j.Z.Messages.INTEGRATIONS_WEBHOOKS,
                        icon: u.WebhookIcon,
                        buttonText: e,
                        buttonDisabled: !s,
                        trailing: n,
                        onButtonClick: r,
                        hasNextSection: t > 0,
                        details: [{ text: j.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({ count: t }) }]
                    },
                    'webhooks'
                ))
            ),
            (null == V ? void 0 : V.type) !== L.d4z.GUILD_VOICE && ((null == V ? void 0 : V.type) == null || !L.TPd.GUILD_THREADS_ONLY.has(V.type)))
        ) {
            let e, n, t;
            eL.push(
                ((H = q.length),
                (w = ee),
                H > 0 ? ((t = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (n = w)) : ((e = j.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON), (n = () => open(A.Z.getArticleURL(L.BhN.CHANNEL_FOLLOWING)))),
                (0, i.jsx)(
                    v.Z,
                    {
                        name: j.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                        icon: u.ChannelsFollowedIcon,
                        buttonText: e,
                        onButtonClick: n,
                        trailing: t,
                        hasNextSection: H > 0,
                        details: [{ text: j.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({ count: H }) }]
                    },
                    'channels-followed'
                ))
            );
        }
    }
    if (null == V && eI.length > 0) {
        eL.push(
            ((U = eI.length),
            (W = et),
            (0, i.jsx)(
                v.Z,
                {
                    name: j.Z.Messages.INTEGRATIONS_LINKED_LOBBY_CHANNELS_SYNCING,
                    icon: u.RefreshIcon,
                    trailing: (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' }),
                    onButtonClick: W,
                    hasNextSection: !0,
                    details: [{ text: j.Z.Messages.INTEGRATIONS_LINKED_NUM_CHANNELS_SYNCING.format({ count: U }) }]
                },
                'channels-syncing'
            ))
        );
    }
    eT &&
        eL.push(
            (function (e, n, t) {
                let a, s, l, r;
                let o = _.Z.get(L.ABu.TWITCH);
                return (
                    e > 0
                        ? ((r = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (s = j.Z.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({ count: n })), (l = () => t(L.ABu.TWITCH)))
                        : ((a = j.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON),
                          (s = j.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY),
                          (l = () =>
                              (0, h.Z)({
                                  platformType: L.ABu.TWITCH,
                                  location: 'Integration Settings'
                              }))),
                    (0, i.jsx)(
                        v.Z,
                        {
                            name: j.Z.Messages.INTEGRATIONS_TWITCH,
                            icon: o.icon.whiteSVG,
                            iconBackgroundColor: o.color,
                            iconClassName: D.platformIcon,
                            buttonText: a,
                            onButtonClick: l,
                            trailing: r,
                            hasNextSection: e > 0,
                            details: [{ text: s }]
                        },
                        'integrations-twitch'
                    )
                );
            })(em, eN, Q)
        ),
        eh &&
            eL.push(
                (function (e, n, t) {
                    let a, s, l, r;
                    let o = _.Z.get(L.ABu.YOUTUBE);
                    return (
                        e > 0
                            ? ((r = (0, i.jsx)(u.ChevronLargeRightIcon, { size: 'xs' })), (s = j.Z.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({ count: n })), (l = () => t(L.ABu.YOUTUBE)))
                            : ((a = j.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON),
                              (s = j.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY),
                              (l = () =>
                                  (0, h.Z)({
                                      platformType: L.ABu.YOUTUBE,
                                      location: 'Integration Settings'
                                  }))),
                        (0, i.jsx)(
                            v.Z,
                            {
                                name: j.Z.Messages.INTEGRATIONS_YOUTUBE,
                                icon: o.icon.whiteSVG,
                                iconBackgroundColor: o.color,
                                iconClassName: D.platformIcon,
                                buttonText: a,
                                onButtonClick: l,
                                trailing: r,
                                hasNextSection: e > 0,
                                details: [{ text: s }]
                            },
                            'integrations-youtube'
                        )
                    );
                })(e_, eE, Q)
            );
    let ej = null != V && ed && null != eu;
    return (0, i.jsxs)(u.FormSection, {
        className: l()(null != eZ ? D.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: eM.format({ helpdeskArticle: ev })
            }),
            (0, i.jsx)(u.FormDivider, { className: D.divider }),
            X || el || null == F
                ? (0, i.jsx)(u.Spinner, {
                      className: D.__invalid_spinner,
                      type: u.Spinner.Type.SPINNING_CIRCLE
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eL,
                          ej &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eL.length > 0 ? (0, i.jsx)(u.FormDivider, { className: D.divider }) : null,
                                      (0, i.jsx)(u.Heading, {
                                          variant: 'heading-md/semibold',
                                          className: D.sectionHeader,
                                          children: j.Z.Messages.INTEGRATIONS_LINKED_LOBBY_SECTION_TITLE
                                      }),
                                      (0, i.jsx)(Z.I, {
                                          channel: V,
                                          application: eu,
                                          showApplicationImage: !0,
                                          name: eu.name,
                                          hasNextSection: !0,
                                          iconClassName: D.linkedLobbyIcon,
                                          trailing: (0, i.jsx)(u.PencilIcon, { size: 'xs' })
                                      })
                                  ]
                              }),
                          ec
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eL.length > 0 || ej ? (0, i.jsx)(u.FormDivider, { className: D.divider }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: D.sectionHeader,
                                            children: j.Z.Messages.INTEGRATIONS_APPLICATION_SECTION
                                        }),
                                        eg > 4
                                            ? (0, i.jsx)(k, {
                                                  query: ea,
                                                  setQuery: es
                                              })
                                            : null,
                                        eb
                                    ]
                                })
                              : null,
                          eZ
                      ]
                  })
        ]
    });
}
