n(47120);
var t = n(735250),
    a = n(470079),
    l = n(442837),
    r = n(481060),
    i = n(970606),
    o = n(616230),
    c = n(650774),
    d = n(430824),
    u = n(496675),
    I = n(693546),
    E = n(246364),
    _ = n(98493),
    T = n(985159),
    m = n(328977),
    R = n(412222),
    M = n(223312),
    N = n(571728),
    C = n(572940),
    x = n(80487),
    h = n(146463),
    A = n(981631),
    b = n(689938),
    S = n(412449);
function j(e) {
    let { guild: s } = e;
    return (0, t.jsxs)('div', {
        className: S.setupHeader,
        children: [
            (0, t.jsxs)('div', {
                className: S.previewContainer,
                children: [
                    (0, t.jsx)(r.Heading, {
                        variant: 'heading-lg/bold',
                        children: b.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
                    }),
                    (0, t.jsxs)(r.Button, {
                        color: r.Button.Colors.TRANSPARENT,
                        onClick: () => {
                            (0, r.openModalLazy)(async () => {
                                let { default: e } = await n.e('52657').then(n.bind(n, 645264));
                                return (n) =>
                                    (0, t.jsx)(e, {
                                        ...n,
                                        guildId: s.id,
                                        isPreview: !0
                                    });
                            });
                        },
                        size: r.ButtonSizes.SMALL,
                        'aria-label': b.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
                        innerClassName: S.previewButton,
                        children: [
                            (0, t.jsx)(r.EyeIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            b.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION
                        ]
                    })
                ]
            }),
            (0, t.jsx)(r.Text, {
                className: S.description,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: b.Z.Messages.CLAN_APPLICATION_SETUP_HEADER.format({ guildName: s.name })
            })
        ]
    });
}
function P(e) {
    var s, n;
    let { guildId: P, isSidebarOpen: p } = e,
        g = a.useRef(null),
        [v, f] = a.useState((0, T.z)({ guildId: P })),
        Z = (0, R.C)({ guildId: P }),
        O = (0, m.L)({ guildId: P }),
        B = null !== (s = (0, N.A)({ guildId: P })) && void 0 !== s ? s : 0,
        { guildJoinRequests: L } = (0, M.j)({
            guildId: P,
            applicationStatus: 'REVIEW_APPLICATION' === v ? E.wB.SUBMITTED : v,
            sortOrder: Z
        }),
        D = (0, l.e7)([d.Z], () => d.Z.getGuild(P), [P]),
        G = (0, l.e7)([c.Z], () => c.Z.getMemberCount(P)),
        w = null != D && (null != G ? G : 0) >= D.maxMembers,
        { fetchNextPage: U } = (0, _.m)({
            guildId: P,
            guildJoinRequests: L
        }),
        V = (0, l.e7)([u.Z], () => u.Z.can(A.Plq.KICK_MEMBERS, D)),
        y = a.useRef(!1);
    !y.current && ((y.current = !0), U(Z, 'REVIEW_APPLICATION' === v ? E.wB.SUBMITTED : v)),
        a.useEffect(() => {
            !V && f('REVIEW_APPLICATION');
        }, [V]);
    let F = a.useRef(!1);
    a.useEffect(() => {
        F.current = !0;
    }, [Z, v]),
        a.useEffect(() => {
            if (F.current && 0 !== L.length && 'REVIEW_APPLICATION' !== v) {
                var e;
                (F.current = !1), I.Z.setSelectedGuildJoinRequest(P, L[0]), null === (e = g.current) || void 0 === e || e.scrollToTop();
            }
        }, [P, L, O, v]);
    let k = a.useCallback(
            async (e) => {
                if ('REVIEW_APPLICATION' !== v) Z !== e && (I.Z.setSelectedSortOrder(P, e), await U(e, v));
            },
            [v, Z, P, U]
        ),
        J = a.useCallback(
            async (e) => {
                if (v !== e) {
                    if (
                        (f(e),
                        (0, i.Q2)({
                            guildId: P,
                            source: A.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                            tab: e
                        }),
                        I.Z.setSelectedGuildJoinRequest(P, null),
                        'REVIEW_APPLICATION' !== e)
                    )
                        I.Z.setSelectedApplicationTab(P, e), await U(Z, e);
                }
            },
            [v, Z, P, U]
        ),
        q = a.useCallback(async () => {
            var e;
            if ('REVIEW_APPLICATION' === v) return;
            let s = null === (e = g.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != s) s.scrollHeight - s.scrollTop - s.offsetHeight < 200 && (await U(Z, v));
        }, [v, Z, U]),
        W = null !== (n = null == D ? void 0 : D.hasFeature(A.oNc.CLAN)) && void 0 !== n && n;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(x.Z, {
                currentTab: v,
                onTabItemSelect: J,
                pendingGuildJoinRequestsTotal: B,
                showSetupTab: W,
                canActionJoinRequests: V,
                isSidebarOpen: p
            }),
            (0, t.jsx)('div', {
                className: S.content,
                children:
                    'REVIEW_APPLICATION' === v
                        ? null != D
                            ? (0, t.jsx)(r.ScrollerThin, {
                                  children: (0, t.jsxs)('div', {
                                      className: S.scrollerContent,
                                      children: [
                                          (0, t.jsx)(j, { guild: D }),
                                          (0, t.jsx)(o.Z, {
                                              guild: D,
                                              isClanContext: !0
                                          })
                                      ]
                                  })
                              })
                            : null
                        : (0, t.jsxs)(t.Fragment, {
                              children: [
                                  V &&
                                      w &&
                                      (0, t.jsx)(r.HelpMessage, {
                                          messageType: r.HelpMessageTypes.WARNING,
                                          textVariant: 'text-sm/medium',
                                          className: S.headerWarning,
                                          children: b.Z.Messages.CLAN_MAX_MEMBER_LIMIT_WARNING.format({ count: null == D ? void 0 : D.maxMembers })
                                      }),
                                  (0, t.jsx)('div', {
                                      className: S.listControls,
                                      children: (0, t.jsx)(C.Z, {
                                          className: S.sortSelect,
                                          sortOrder: Z,
                                          onSortChange: k
                                      })
                                  }),
                                  (0, t.jsx)(r.Text, {
                                      className: S.description,
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: b.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
                                  }),
                                  (0, t.jsx)(h.Z, {
                                      applicationStatus: v,
                                      guildJoinRequests: L,
                                      guildId: P,
                                      onScroll: q,
                                      listRef: g,
                                      atMaxMemberCapacity: w
                                  })
                              ]
                          })
            })
        ]
    });
}
s.Z = a.memo(function (e) {
    let { guildId: s, isSidebarOpen: n } = e;
    return (0, t.jsx)(P, {
        guildId: s,
        isSidebarOpen: n
    });
});
