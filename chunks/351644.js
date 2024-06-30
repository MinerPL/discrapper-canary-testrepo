t.d(n, {
    Z: function () {
        return B;
    }
}), t(653041), t(47120);
var i = t(735250), a = t(470079), s = t(120356), l = t.n(s), o = t(658722), r = t.n(o), c = t(442837), d = t(780384), u = t(481060), I = t(37234), m = t(410030), _ = t(726542), N = t(132871), E = t(147890), T = t(231757), h = t(553795), p = t(496675), g = t(285952), C = t(626135), f = t(768581), x = t(63063), O = t(709054), S = t(51144), A = t(585835), R = t(997787), b = t(981631), Z = t(689938), v = t(753927), M = t(509399), L = t(790904), j = t(609182);
function D(e, n) {
    return n.includes(e);
}
function P(e) {
    let {
            query: n,
            setQuery: t
        } = e, s = a.useCallback(e => {
            t(e);
        }, [t]);
    return (0, i.jsx)('div', {
        className: v.searchContainer,
        children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: n,
            onChange: s,
            onClear: () => t(''),
            placeholder: Z.Z.Messages.INTEGRATIONS_SEARCH,
            'aria-label': Z.Z.Messages.INTEGRATIONS_SEARCH
        })
    });
}
function B(e) {
    let {
            guild: n,
            channel: t,
            applicationIntegrations: s,
            builtInIntegrations: o,
            customWebhooks: B,
            followedChannelWebhooks: y,
            isLoading: G,
            canCreateWebhook: k,
            onManageBuiltIn: U,
            onManageCustomWebhooks: H,
            onManageFollowedChannels: w,
            onManageApplication: W
        } = e, F = (0, m.ZP)(), [V, K] = a.useState(''), {
            isFetchingConnections: Y,
            accounts: z
        } = (0, c.cj)([h.Z], () => ({
            isFetchingConnections: h.Z.isFetching(),
            accounts: h.Z.getAccounts()
        }), []), {
            canManageWebhooks: q,
            canManageGuild: J
        } = (0, c.cj)([p.Z], () => ({
            canManageWebhooks: null != n && p.Z.can(b.Plq.MANAGE_WEBHOOKS, n) || null != t && p.Z.can(b.Plq.MANAGE_WEBHOOKS, t),
            canManageGuild: null != n && null == t && p.Z.can(b.Plq.MANAGE_GUILD, n)
        }), [
            n,
            t
        ]), {
            availableTwitchIntegrations: X,
            availableYoutubeIntegrations: Q,
            guildTwitchIntegrations: $,
            guildYoutubeIntegrations: ee
        } = a.useMemo(() => {
            var e, n, t, i, a, s, l, r;
            return {
                availableTwitchIntegrations: null !== (a = null === (e = o.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                availableYoutubeIntegrations: null !== (s = null === (n = o.youtube) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0,
                guildTwitchIntegrations: null !== (l = null === (t = o.twitch) || void 0 === t ? void 0 : t.filter(e => e.enabled).length) && void 0 !== l ? l : 0,
                guildYoutubeIntegrations: null !== (r = null === (i = o.youtube) || void 0 === i ? void 0 : i.filter(e => e.enabled).length) && void 0 !== r ? r : 0
            };
        }, [
            o.twitch,
            o.youtube
        ]), {
            showTwitchCard: en,
            showYoutubeCard: et
        } = a.useMemo(() => {
            if (Y || !J)
                return {
                    showTwitchCard: !1,
                    showYoutubeCard: !1
                };
            let e = null == n ? void 0 : n.hasFeature(b.oNc.COMMUNITY), t = z.filter(e => e.type === b.ABu.TWITCH).length > 0, i = z.filter(e => e.type === b.ABu.YOUTUBE).length > 0;
            return {
                showTwitchCard: X > 0 || !t && e,
                showYoutubeCard: Q > 0 || !i && e
            };
        }, [
            Y,
            J,
            n,
            z,
            X,
            Q
        ]), ei = Object.values(s).length, ea = a.useMemo(() => {
            let e = ei > 100 ? D : r();
            return Object.values(s).filter(n => {
                var t, i, a;
                let {application: s} = n;
                return t = s, i = V, a = e, !!('' === (i = i.trim().toLowerCase()) || t.id === i || a(i, t.name.toLowerCase()) || null != t.bot && a(i, t.bot.username.toLowerCase())) || !1;
            });
        }, [
            s,
            ei,
            V
        ]), es = (0, c.e7)([R.Z], () => {
            if (null != n)
                return ea.find(e => R.Z.canShowOverviewTooltip(n.id, e.integration.id));
        }, [
            ea,
            n
        ]), el = a.useMemo(() => void 0 !== es ? [
            es,
            ...ea.filter(e => e.integration.id !== es.integration.id)
        ] : ea, [
            ea,
            es
        ]), eo = (0, u.useModalsStore)(u.hasAnyModalOpenSelector), [er, ec] = a.useState(!1), ed = a.useRef(0), eu = () => {
            ec(!0), clearTimeout(ed.current), ed.current = setTimeout(() => {
                ec(!1);
            }, 200);
        };
    a.useEffect(() => (window.addEventListener('scroll', eu, !0), () => window.removeEventListener('scroll', eu)));
    let eI = el.map(e => {
            let t = !eo && e.integration.id === (null == es ? void 0 : es.integration.id);
            return function (e, n, t, a, s) {
                var l;
                let {
                        application: o,
                        integration: r
                    } = n, c = [];
                return null != r.user ? c.push({
                    icon: u.ClockIcon,
                    text: Z.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                        timestamp: O.default.extractTimestamp(r.id),
                        user: S.ZP.getUserTag(r.user)
                    })
                }) : c.push({
                    icon: u.ClockIcon,
                    text: Z.Z.Messages.INTEGRATION_ADDED_DATE.format({ timestamp: O.default.extractTimestamp(r.id) })
                }), (0, i.jsx)(A.Z, {
                    name: o.name,
                    imageSrc: null !== (l = o.getIconURL(48)) && void 0 !== l ? l : f.pK['0'],
                    integration: n,
                    buttonText: Z.Z.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                    hasNextSection: !0,
                    onButtonClick: () => {
                        t(o.id), C.default.track(b.rMx.APP_MANAGE_CTA_CLICKED, {
                            application_id: o.id,
                            guild_id: null == e ? void 0 : e.id,
                            is_admin: null != e ? p.Z.can(b.Plq.ADMINISTRATOR, e) : void 0
                        });
                    },
                    details: c,
                    guildId: null == e ? void 0 : e.id,
                    isScrolling: a,
                    canShowMigrationTooltip: s
                }, 'integration-'.concat(r.id));
            }(n, e, W, er, t);
        }), em = (0, i.jsx)('div', { className: v.footerImage });
    0 === eI.length && J && (eI = function (e, n, t) {
        let a = (0, d.wj)(e) ? L : j, s = (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                align: g.Z.Align.CENTER,
                className: v.emptyStateWrapper,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        src: a,
                        className: v.emptyStateSearchImage
                    }),
                    (0, i.jsx)(u.Card, {
                        editable: !0,
                        className: v.emptyStateCard,
                        children: (0, i.jsx)(u.Text, {
                            color: 'text-muted',
                            variant: 'text-sm/normal',
                            children: Z.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH
                        })
                    })
                ]
            }), l = (0, i.jsx)(u.Card, {
                editable: !0,
                className: v.emptyStateCard,
                children: (0, i.jsxs)('div', {
                    className: v.emptyStateText,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: M,
                            className: v.emptyStateImage
                        }),
                        (0, i.jsx)(u.Heading, {
                            color: 'header-secondary',
                            variant: 'heading-xl/bold',
                            children: Z.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
                        }),
                        (0, i.jsx)(u.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: Z.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
                                handleGoToAppDirectory: () => {
                                    (0, E.goToAppDirectory)({
                                        guildId: t,
                                        entrypoint: { name: N.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS }
                                    }), (0, I.xf)();
                                }
                            })
                        })
                    ]
                })
            });
        return n > 0 ? s : l;
    }(F, ei, null == n ? void 0 : n.id), em = null);
    let e_ = x.Z.getArticleURL(b.BhN.INTEGRATIONS), eN = null != t ? Z.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : Z.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD, eE = [];
    if (q) {
        var eT, eh, ep, eg, eC;
        let e;
        if (eE.push((eT = B.length, eh = k, ep = H, e = eT > 0 ? Z.Z.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : Z.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON, (0, i.jsx)(A.Z, {
                name: Z.Z.Messages.INTEGRATIONS_WEBHOOKS,
                icon: u.WebhookIcon,
                buttonText: e,
                buttonDisabled: !eh,
                onButtonClick: ep,
                hasNextSection: eT > 0,
                details: [{ text: Z.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({ count: eT }) }]
            }, 'webhooks'))), (null == t ? void 0 : t.type) !== b.d4z.GUILD_VOICE && ((null == t ? void 0 : t.type) == null || !b.TPd.GUILD_THREADS_ONLY.has(t.type))) {
            ;
            let e, n;
            eE.push((eg = y.length, eC = w, eg > 0 ? (e = Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON, n = eC) : (e = Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON, n = () => open(x.Z.getArticleURL(b.BhN.CHANNEL_FOLLOWING))), (0, i.jsx)(A.Z, {
                name: Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                icon: u.ChannelsFollowedIcon,
                buttonText: e,
                onButtonClick: n,
                hasNextSection: eg > 0,
                details: [{ text: Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({ count: eg }) }]
            }, 'channels-followed')));
        }
    }
    return en && eE.push(function (e, n, t) {
        let a, s, l;
        let o = _.Z.get(b.ABu.TWITCH);
        return e > 0 ? (a = Z.Z.Messages.INTEGRATIONS_TWITCH_BUTTON, s = Z.Z.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({ count: n }), l = () => t(b.ABu.TWITCH)) : (a = Z.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON, s = Z.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY, l = () => (0, T.Z)({
            platformType: b.ABu.TWITCH,
            location: 'Integration Settings'
        })), (0, i.jsx)(A.Z, {
            name: Z.Z.Messages.INTEGRATIONS_TWITCH,
            icon: o.icon.whiteSVG,
            iconBackgroundColor: o.color,
            iconClassName: v.platformIcon,
            buttonText: a,
            onButtonClick: l,
            hasNextSection: e > 0,
            details: [{ text: s }]
        }, 'integrations-twitch');
    }(X, $, U)), et && eE.push(function (e, n, t) {
        let a, s, l;
        let o = _.Z.get(b.ABu.YOUTUBE);
        return e > 0 ? (a = Z.Z.Messages.INTEGRATIONS_YOUTUBE_BUTTON, s = Z.Z.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({ count: n }), l = () => t(b.ABu.YOUTUBE)) : (a = Z.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON, s = Z.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY, l = () => (0, T.Z)({
            platformType: b.ABu.YOUTUBE,
            location: 'Integration Settings'
        })), (0, i.jsx)(A.Z, {
            name: Z.Z.Messages.INTEGRATIONS_YOUTUBE,
            icon: o.icon.whiteSVG,
            iconBackgroundColor: o.color,
            iconClassName: v.platformIcon,
            buttonText: a,
            onButtonClick: l,
            hasNextSection: e > 0,
            details: [{ text: s }]
        }, 'integrations-youtube');
    }(Q, ee, U)), (0, i.jsxs)(u.FormSection, {
        className: l()(null != em ? v.footerPlaceholder : null),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: eN.format({ helpdeskArticle: e_ })
            }),
            (0, i.jsx)(u.FormDivider, { className: v.divider }),
            G || Y || null == n ? (0, i.jsx)(u.Spinner, {
                className: v.__invalid_spinner,
                type: u.Spinner.Type.SPINNING_CIRCLE
            }) : (0, i.jsxs)(i.Fragment, {
                children: [
                    eE,
                    J ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            eE.length > 0 ? (0, i.jsx)(u.FormDivider, { className: v.divider }) : null,
                            (0, i.jsx)(u.Heading, {
                                variant: 'heading-md/semibold',
                                className: v.sectionHeader,
                                children: Z.Z.Messages.INTEGRATIONS_APPLICATION_SECTION
                            }),
                            ei > 4 ? (0, i.jsx)(P, {
                                query: V,
                                setQuery: K
                            }) : null,
                            eI
                        ]
                    }) : null,
                    em
                ]
            })
        ]
    });
}
