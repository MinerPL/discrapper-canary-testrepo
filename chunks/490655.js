t(47120), t(653041);
var i = t(735250),
    a = t(470079),
    s = t(392711),
    l = t.n(s),
    r = t(442837),
    o = t(481060),
    c = t(139387),
    d = t(503089),
    u = t(231757),
    I = t(600164),
    m = t(106976),
    _ = t(488915),
    N = t(984933),
    E = t(496675),
    T = t(585483),
    h = t(63063),
    g = t(919196),
    p = t(731072),
    f = t(494118),
    x = t(491500),
    C = t(351644),
    O = t(720764),
    S = t(981631),
    A = t(689938),
    R = t(194639);
function b(e, n) {
    switch (e) {
        case S.b4C.APPLICATION:
            var t;
            return null !== (t = null == n ? void 0 : n.application.name) && void 0 !== t ? t : '';
        case S.b4C.OVERVIEW:
            return A.Z.Messages.INTEGRATIONS_OVERVIEW;
        case S.b4C.CHANNEL_FOLLOWING:
            return A.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
        case S.b4C.TWITCH:
            return A.Z.Messages.INTEGRATIONS_TWITCH;
        case S.b4C.WEBHOOKS:
            return A.Z.Messages.INTEGRATIONS_WEBHOOKS;
        case S.b4C.YOUTUBE:
            return A.Z.Messages.INTEGRATIONS_YOUTUBE;
        case S.b4C.CHANNELS_SYNCING:
            return A.Z.Messages.INTEGRATIONS_LINKED_LOBBY_CHANNELS_SYNCING;
        default:
            return '';
    }
}
n.Z = a.memo(function (e) {
    let { section: n, sectionId: t, guild: s, channel: Z, integrations: v, editedIntegration: M, webhooks: L, editedWebhook: j, isFetching: D, refToScroller: P, errors: B, hasChanges: y } = e,
        G = (0, r.e7)([N.ZP], () => (null != s ? N.ZP.getDefaultChannel(s.id) : null)),
        k = (0, r.cj)([N.ZP], () => N.ZP.getChannels(null == s ? void 0 : s.id)),
        H = (0, r.cj)([E.Z], () =>
            l().keyBy(
                k.SELECTABLE.map((e) => e.channel).filter((e) => E.Z.can(S.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        w = (0, r.cj)([E.Z], () =>
            l().keyBy(
                k.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && E.Z.can(S.Plq.MANAGE_WEBHOOKS, e)),
                'id'
            )
        ),
        U = null != Z ? Z : G,
        W = n === S.b4C.APPLICATION ? t : null,
        [F, V] = a.useState(d.$x),
        K = a.useCallback(
            () =>
                y()
                    ? (T.S.dispatch(S.CkL.SHAKE_APP, {
                          duration: 300,
                          intensity: F
                      }),
                      V(Math.min(F + d.d7, d.w6)),
                      T.S.dispatch(S.CkL.EMPHASIZE_NOTICE),
                      !1)
                    : (V(d.$x), !0),
            [y, F]
        ),
        Y = a.useCallback((e) => !!K() && (c.Z.setSection(e), !0), [K]),
        {
            applicationIntegrations: z,
            applicationBotIds: q,
            builtInIntegrations: X,
            customWebhooks: J,
            followedChannelWebhooks: Q
        } = a.useMemo(() => {
            let e = {},
                n = {},
                t = {},
                i = [],
                a = [];
            if (null != v)
                for (let i of v)
                    if ('discord' === i.type) {
                        if (null != i.application) {
                            var s;
                            (e[i.application.id] = {
                                application: i.application,
                                integration: i,
                                webhooks: []
                            }),
                                (null === (s = i.application.bot) || void 0 === s ? void 0 : s.id) !== void 0 && (n[i.application.bot.id] = i.application.id);
                        }
                    } else !(i.type in t) && (t[i.type] = []), t[i.type].push(i);
            for (let n of L) {
                if (n.channel_id in H || n.channel_id in w) null != n.application_id && n.application_id in e ? e[n.application_id].webhooks.push(n) : n.type === S.ylB.CHANNEL_FOLLOWER ? a.push(n) : i.push(n);
            }
            return {
                applicationIntegrations: e,
                applicationBotIds: n,
                builtInIntegrations: t,
                customWebhooks: i,
                followedChannelWebhooks: a
            };
        }, [v, H, w, L]);
    a.useEffect(() => {
        if (!D)
            switch (n) {
                case S.b4C.TWITCH:
                    null == X[S.ABu.TWITCH] && c.Z.setSection(S.b4C.OVERVIEW);
                    break;
                case S.b4C.YOUTUBE:
                    null == X[S.ABu.YOUTUBE] && c.Z.setSection(S.b4C.OVERVIEW);
                    break;
                case S.b4C.APPLICATION:
                    (null == W || !(W in q || W in z)) && c.Z.setSection(S.b4C.OVERVIEW);
            }
    }, [z, q, X, W, n, D]),
        a.useEffect(() => {
            if ((null == s ? void 0 : s.id) != null) _.Z.getEntitlementsForGuildFetchState(s.id) === _.M.NOT_FETCHED && m.i1(s.id);
        }, [null == s ? void 0 : s.id]);
    let $ = null;
    switch (n) {
        case S.b4C.TWITCH:
            null != X[S.ABu.TWITCH] &&
                ($ = (0, i.jsx)(p.Z, {
                    guild: s,
                    integrations: X[S.ABu.TWITCH],
                    editedIntegration: M,
                    labelText: A.Z.Messages.INTEGRATIONS_TWITCH,
                    platformType: S.ABu.TWITCH,
                    descriptionText: A.Z.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
                    helpText: A.Z.Messages.INTEGRATIONS_TWITCH_HELP.format({
                        connectAction: () =>
                            (0, u.Z)({
                                platformType: S.ABu.TWITCH,
                                location: 'Integration Settings'
                            }),
                        helpdeskArticle: h.Z.getArticleURL(S.BhN.TWITCH_INTEGRATION)
                    }),
                    canNavigate: K
                }));
            break;
        case S.b4C.YOUTUBE:
            null != X[S.ABu.YOUTUBE] &&
                ($ = (0, i.jsx)(p.Z, {
                    guild: s,
                    integrations: X[S.ABu.YOUTUBE],
                    editedIntegration: M,
                    labelText: A.Z.Messages.INTEGRATIONS_YOUTUBE,
                    platformType: S.ABu.YOUTUBE,
                    descriptionText: A.Z.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
                    helpText: A.Z.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
                        connectAction: () => (0, u.Z)({ platformType: S.ABu.YOUTUBE }),
                        helpdeskArticle: h.Z.getArticleURL(S.BhN.YOUTUBE_INTEGRATION)
                    }),
                    canNavigate: K
                }));
            break;
        case S.b4C.APPLICATION:
            var ee;
            let en = null != W ? (null !== (ee = z[q[W]]) && void 0 !== ee ? ee : z[W]) : null;
            null != en &&
                ($ = (0, i.jsx)(g.Z, {
                    guild: s,
                    applicationIntegration: en,
                    editedWebhook: j,
                    selectableWebhookChannels: H,
                    errors: B,
                    canNavigate: K
                }));
            break;
        case S.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(f.Z, {
                followedChannelWebhooks: Q,
                editedWebhook: j,
                selectableWebhookChannels: H,
                canNavigate: K,
                errors: B
            });
            break;
        case S.b4C.WEBHOOKS:
            $ = (0, i.jsx)(O.Z, {
                guild: s,
                channel: Z,
                customWebhooks: J,
                editedWebhook: j,
                selectableWebhookChannels: {
                    ...H,
                    ...w
                },
                canNavigate: K,
                refToScroller: P,
                errors: B
            });
            break;
        case S.b4C.CHANNELS_SYNCING:
            $ = (0, i.jsx)(x.Z, { guild: s });
            break;
        default:
            $ = (0, i.jsx)(C.Z, {
                guild: s,
                channel: Z,
                applicationIntegrations: z,
                builtInIntegrations: X,
                customWebhooks: J,
                followedChannelWebhooks: Q,
                isLoading: D || null == s,
                canCreateWebhook: null != U,
                onManageCustomWebhooks: () => {
                    c.Z.setSection(S.b4C.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    c.Z.setSection(S.b4C.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    c.Z.setSection(S.b4C.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case S.ABu.TWITCH:
                            c.Z.setSection(S.b4C.TWITCH);
                            break;
                        case S.ABu.YOUTUBE:
                            c.Z.setSection(S.b4C.YOUTUBE);
                    }
                },
                onManageChannelsSyncing: () => {
                    c.Z.setSection(S.b4C.CHANNELS_SYNCING);
                }
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.Z, {
                align: I.Z.Align.CENTER,
                className: R.breadcrumbs,
                children:
                    n === S.b4C.OVERVIEW
                        ? (0, i.jsx)(o.FormTitle, {
                              tag: 'h1',
                              children: b(S.b4C.OVERVIEW)
                          })
                        : (0, i.jsx)(o.Breadcrumbs, {
                              activeId: n.toString(),
                              breadcrumbs: [S.b4C.OVERVIEW, n].map((e) => ({
                                  id: e.toString(),
                                  label: b(e, z[W])
                              })),
                              onBreadcrumbClick: (e) => {
                                  if (n !== parseInt(e.id)) Y(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, n) =>
                                  (0, i.jsx)(o.FormTitle, {
                                      tag: 'h1',
                                      className: n ? R.breadcrumbActive : R.breadcrumbInactive,
                                      children: e.label
                                  })
                          })
            }),
            $
        ]
    });
});
