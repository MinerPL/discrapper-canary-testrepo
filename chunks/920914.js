t(47120), t(653041), t(773603);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(704215),
    c = t(692547),
    d = t(780384),
    _ = t(481060),
    u = t(570140),
    E = t(457330),
    T = t(497321),
    S = t(23551),
    I = t(468026),
    N = t(410030),
    m = t(726542),
    C = t(122021),
    A = t(275759),
    g = t(231757),
    h = t(888496),
    O = t(605236),
    p = t(565138),
    R = t(297700),
    x = t(553795),
    f = t(430824),
    M = t(771845),
    D = t(246946),
    P = t(626135),
    L = t(63063),
    b = t(706454),
    Z = t(349728),
    v = t(494620),
    j = t(205266),
    B = t(216153),
    U = t(981631),
    G = t(856651),
    F = t(921944),
    y = t(689938),
    V = t(886185),
    Y = t(224499);
let w = (e) => {
    var s, t;
    let a,
        { integration: i } = e,
        {
            isJoining: r,
            joinErrorMessage: l,
            showJoinErrorMessage: c
        } = (0, o.cj)(
            [x.Z],
            () => ({
                isJoining: x.Z.isJoining(i.id),
                joinErrorMessage: '' === x.Z.joinErrorMessage(i.id) ? y.Z.Messages.ERROR : x.Z.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== x.Z.joinErrorMessage(i.id)
            }),
            [i.id]
        ),
        d = null != (0, o.e7)([f.Z], () => f.Z.getGuild(i.guild.id), [i.guild.id]);
    return (
        !d &&
            (a = (0, n.jsx)(_.Button, {
                size: _.ButtonSizes.SMALL,
                onClick: function () {
                    E.Z.joinServer(i.id, () => {});
                },
                disabled: r,
                children: (0, n.jsx)('span', { children: r ? y.Z.Messages.JOINING_GUILD : y.Z.Messages.JOIN_GUILD })
            })),
        (0, n.jsxs)('div', {
            className: V.integrationWrapper,
            children: [
                (0, n.jsxs)('div', {
                    className: V.integration,
                    children: [
                        (0, n.jsx)(p.Z, {
                            size: p.Z.Sizes.SMALL,
                            guild: i.guild,
                            className: V.guildIcon
                        }),
                        (0, n.jsxs)('div', {
                            className: V.integrationInner,
                            children: [
                                (0, n.jsx)(_.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: i.guild.toString()
                                }),
                                (0, n.jsx)(_.Anchor, {
                                    href: null === (t = m.Z.get(i.type)) || void 0 === t ? void 0 : null === (s = t.getPlatformUserUrl) || void 0 === s ? void 0 : s.call(t, i.account),
                                    children: (0, n.jsx)(_.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: i.account.name
                                    })
                                })
                            ]
                        }),
                        a
                    ]
                }),
                c &&
                    (0, n.jsx)(_.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        className: V.integrationError,
                        children: l
                    })
            ]
        })
    );
};
function k(e) {
    var s, t, i;
    let r,
        o,
        l,
        { onDisconnect: u, account: T, theme: S, locale: N } = e,
        [O, p] = a.useState(T.friendSync),
        [x, f] = a.useState(T.visibility),
        [M, D] = a.useState(T.metadataVisibility),
        [P, b] = a.useState(T.showActivity),
        [F, Y] = a.useState(null),
        [k, H] = a.useState(null),
        [W, K] = a.useState(!1),
        [z, Q] = a.useState([]),
        X = (0, C.rR)(T.type),
        q = m.Z.get(X);
    a.useEffect(() => {
        p(T.friendSync), f(T.visibility), D(T.metadataVisibility), b(T.showActivity);
    }, [T]),
        a.useEffect(() => {
            if (!1 !== T.verified) null != F && (f(F), E.Z.setVisibility(T.type, T.id, F), Y(null)), null != k && (D(k), E.Z.setMetadataVisibility(T.type, T.id, k), H(null));
        }, [T]);
    function J() {
        (0, g.Z)({
            platformType: T.type,
            location: 'User Settings'
        });
    }
    function $() {
        let e = m.Z.get(T.type),
            s = y.Z.Messages.DISCONNECT_ACCOUNT_BODY;
        (0, Z.Z)(T) &&
            (s = (0, n.jsxs)(n.Fragment, {
                children: [
                    s,
                    (0, n.jsx)(v.Z, {
                        className: V.infoBox,
                        children: y.Z.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({ platformName: e.name })
                    })
                ]
            })),
            (0, _.openModal)((t) =>
                (0, n.jsx)(I.default, {
                    title: y.Z.Messages.DISCONNECT_ACCOUNT_TITLE.format({ name: e.name }),
                    body: s,
                    confirmText: y.Z.Messages.DISCONNECT_ACCOUNT,
                    cancelText: y.Z.Messages.CANCEL,
                    onConfirm: u,
                    ...t
                })
            );
    }
    function ee(e) {
        let { verified: s } = T,
            t = e ? 1 : 0;
        if (e && !s) {
            Y(t),
                (0, g.Z)({
                    platformType: T.type,
                    location: 'User Settings'
                });
            return;
        }
        f(t), E.Z.setVisibility(T.type, T.id, t);
    }
    function es(e) {
        let { verified: s } = T,
            t = e ? 1 : 0;
        if (e && !s) {
            H(t),
                (0, g.Z)({
                    platformType: T.type,
                    location: 'User Settings'
                });
            return;
        }
        D(t), E.Z.setMetadataVisibility(T.type, T.id, t);
    }
    function et(e) {
        p(e), E.Z.setFriendSync(T.type, T.id, e);
    }
    function en(e) {
        b(e), E.Z.setShowActivity(T.type, T.id, e);
    }
    return (0, n.jsxs)('div', {
        className: V.connection,
        children: [
            (function (e) {
                var s;
                let t = m.Z.get(e.type),
                    a = m.Z.get(X),
                    i = '1' === (null !== (s = e.metadata) && void 0 !== s ? s : {})[G.PC.TWITTER_VERIFIED],
                    r = null;
                return (
                    t.type === U.ABu.TWITTER &&
                        i &&
                        (r = (0, n.jsx)(_.Tooltip, {
                            text: y.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER,
                            children: (e) =>
                                (0, n.jsx)(R.Z, {
                                    ...e,
                                    color: c.Z.unsafe_rawColors.TWITTER.css,
                                    children: (0, n.jsx)(_.CheckmarkSmallIcon, {
                                        size: 'xs',
                                        color: c.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                })
                        })),
                    (0, n.jsxs)('div', {
                        className: V.connectionHeader,
                        children: [
                            (0, n.jsx)('img', {
                                alt: a.name,
                                className: V.connectionIcon,
                                src: (0, d.wj)(S) ? a.icon.darkSVG : a.icon.lightSVG
                            }),
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: V.connectionAccountLabelContainer,
                                        children: [
                                            (0, n.jsx)(_.Text, {
                                                color: 'header-primary',
                                                variant: 'text-md/semibold',
                                                className: V.connectionAccountValue,
                                                children: e.name
                                            }),
                                            null != r &&
                                                (0, n.jsx)('div', {
                                                    className: V.connectionAccountLabelVerified,
                                                    children: r
                                                })
                                        ]
                                    }),
                                    (0, n.jsx)(_.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: V.connectionAccountLabel,
                                        children: a.name
                                    })
                                ]
                            }),
                            (0, n.jsx)(_.Clickable, {
                                className: V.connectionDelete,
                                onClick: $,
                                'aria-label': y.Z.Messages.SERVICE_CONNECTIONS_DISCONNECT,
                                focusProps: {
                                    offset: {
                                        top: -4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                children: (0, n.jsx)(_.XSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        ]
                    })
                );
            })(T),
            (s = T).twoWayLink
                ? null
                : s.type === U.ABu.XBOX
                  ? (0, n.jsx)('div', {
                        className: V.upsellWrapper,
                        children: (0, n.jsx)(B.Y, {})
                    })
                  : s.type === U.ABu.PLAYSTATION
                    ? (0, n.jsx)('div', {
                          className: V.upsellWrapper,
                          children: (0, n.jsx)(j.t, {})
                      })
                    : null,
            (function (e) {
                var s;
                let t = null !== (s = e.metadata) && void 0 !== s ? s : {},
                    a = null,
                    i = (0, A.FI)(t[G.PC.CREATED_AT], N);
                switch (e.type) {
                    case U.ABu.REDDIT:
                        a = (0, h.oP)(t, V.metadataItem);
                        break;
                    case U.ABu.STEAM:
                        a = (0, h.Dq)(t, V.metadataItem);
                        break;
                    case U.ABu.TWITTER:
                        a = (0, h.rJ)(t, V.metadataItem);
                        break;
                    case U.ABu.EBAY:
                        a = (0, h.ul)(t, V.metadataItem);
                        break;
                    case U.ABu.PAYPAL:
                        a = (0, h.li)(t, V.metadataItem);
                        break;
                    case U.ABu.TIKTOK:
                        a = (0, h.hf)(t, V.metadataItem);
                }
                null !== i &&
                    (null == a && (a = []),
                    null == a ||
                        a.push(
                            (0, n.jsx)(
                                _.Text,
                                {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    className: V.connectedAccountVanityMetadataCreatedAt,
                                    children: y.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: i })
                                },
                                'member-since'
                            )
                        ));
                let r = z.includes(e.id),
                    o = y.Z.Messages.REFRESH;
                if (null == a || 0 === a.length) {
                    if (!0 !== m.Z.get(e.type).hasMetadata) return null;
                    (a = [
                        (0, n.jsx)(
                            _.TextBadge,
                            {
                                className: V.connectionMetadataUpsellTag,
                                text: y.Z.Messages.NEW
                            },
                            'badge'
                        ),
                        (0, n.jsx)(
                            _.Text,
                            {
                                variant: 'text-xs/normal',
                                className: V.connectionMetadataUpsellDescription,
                                children: y.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({ helpdeskUrl: L.Z.getArticleURL(U.BhN.CONNECTION_DETAILS) })
                            },
                            'label'
                        )
                    ]),
                        (o = y.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS);
                }
                return (
                    r && (o = y.Z.Messages.DONE),
                    a.push(
                        (0, n.jsx)(
                            _.Button,
                            {
                                className: V.metadataRefreshButton,
                                color: r ? _.Button.Colors.GREEN : _.Button.Colors.BRAND,
                                size: _.Button.Sizes.SMALL,
                                submitting: W,
                                disabled: r,
                                'aria-label': y.Z.Messages.CONNECTIONS_OPEN_LINK,
                                onClick: r
                                    ? void 0
                                    : () => {
                                          K(!0),
                                              E.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      z.push(e.id), Q(z), K(!1);
                                                  }, 2000);
                                              });
                                      },
                                children: o
                            },
                            'refresh-button'
                        )
                    ),
                    (0, n.jsx)('div', {
                        className: V.metadataContainer,
                        children: a
                    })
                );
            })(T),
            ((t = q),
            U.BFP.has(T.type) &&
                (r = (0, n.jsx)(_.FormSwitch, {
                    className: V.connectionOptionSwitch,
                    hideBorder: !0,
                    value: O,
                    onChange: et,
                    children: (0, n.jsx)(_.Text, {
                        variant: 'text-sm/semibold',
                        children: y.Z.Messages.SYNC_FRIENDS
                    })
                })),
            U.vbS.has(T.type) &&
                (o = (0, n.jsx)(_.FormSwitch, {
                    className: V.connectionOptionSwitch,
                    hideBorder: !0,
                    value: P,
                    onChange: en,
                    children: (0, n.jsx)(_.Text, {
                        variant: 'text-sm/semibold',
                        children: y.Z.Messages.DISPLAY_ACTIVITY.format({ platform: t.name })
                    })
                })),
            (null === (i = m.Z.get(T.type)) || void 0 === i ? void 0 : i.hasMetadata) === !0 &&
                (l = (0, n.jsx)(_.FormSwitch, {
                    className: V.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === M,
                    onChange: es,
                    disabled: 1 !== x || null == T.metadata,
                    children: (0, n.jsx)(_.Text, {
                        variant: 'text-sm/semibold',
                        children: y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
                    })
                })),
            (0, n.jsx)('div', {
                className: V.connectionOptionsWrapper,
                children: (0, n.jsxs)('div', {
                    className: V.connectionOptions,
                    children: [
                        (0, n.jsx)(_.FormSwitch, {
                            className: V.connectionOptionSwitch,
                            hideBorder: !0,
                            value: 1 === x,
                            onChange: ee,
                            children: (0, n.jsx)(_.Text, {
                                variant: 'text-sm/semibold',
                                children: y.Z.Messages.DISPLAY_ON_PROFILE
                            })
                        }),
                        l,
                        o,
                        r
                    ]
                })
            })),
            (function () {
                if (T.revoked || T.integrations.length > 0) return (0, n.jsx)(_.FormDivider, { className: V.connectedAccountSeparator });
            })(),
            T.revoked
                ? (0, n.jsx)(_.FormItem, {
                      className: V.integrationsWrapper,
                      children: (0, n.jsx)(_.FormText, {
                          className: V.integrationRevoked,
                          children: y.Z.Messages.CONNECTED_ACCOUNT_REVOKED.format({ onReconnect: J })
                      })
                  })
                : T.integrations.length > 0
                  ? (0, n.jsxs)(_.FormItem, {
                        className: V.integrationsWrapper,
                        children: [
                            (0, n.jsx)(_.FormTitle, {
                                tag: _.FormTitleTags.H5,
                                children: (0, n.jsx)(_.Text, {
                                    variant: 'text-xs/semibold',
                                    children: y.Z.Messages.SUB_ENABLED_SERVERS
                                })
                            }),
                            (0, n.jsx)('div', { children: T.integrations.map((e) => (0, n.jsx)(w, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function H() {
    return (
        a.useEffect(
            () => () => {
                (0, O.EW)(l.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: F.L.AUTO });
            },
            []
        ),
        (0, n.jsxs)('div', {
            className: V.connectContainer,
            children: [
                (0, n.jsx)(_.Heading, {
                    variant: 'heading-md/bold',
                    color: 'interactive-active',
                    className: V.connectHeader,
                    children: y.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
                }),
                (0, n.jsx)(_.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: y.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({ privacyPolicyUrl: U.EYA.PRIVACY })
                }),
                (0, n.jsx)(K, {})
            ]
        })
    );
}
function W(e) {
    let s = m.Z.get(e);
    (0, g.Z)({ platformType: s.type }),
        P.default.track(U.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: s.type
        });
}
function K() {
    function e() {
        u.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: W
        });
    }
    let s = (0, C.fq)(),
        t = (0, _.useRedesignIconContext)().enabled ? 24 : 18;
    return (0, n.jsxs)('div', {
        className: V.connectionsContainer,
        children: [
            s.slice(0, 10).map((e) =>
                (0, n.jsx)(
                    S.Z,
                    {
                        type: e.type,
                        className: V.__invalid_accountButton,
                        innerClassName: V.accountButtonInner
                    },
                    e.type
                )
            ),
            (0, n.jsx)(_.Tooltip, {
                text: y.Z.Messages.CONNECTIONS_VIEW_MORE,
                children: (s) => {
                    let { onMouseEnter: a, onMouseLeave: i } = s;
                    return (0, n.jsx)('div', {
                        className: r()(V.accountAddWrapper, V.__invalid_accountButton),
                        children: (0, n.jsx)(_.FocusRing, {
                            children: (0, n.jsx)('button', {
                                onMouseEnter: a,
                                onMouseLeave: i,
                                className: r()(V.accountAddInner, V.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': y.Z.Messages.ADD_NEW_CONNECTION,
                                children: (0, n.jsx)(_.ChevronSmallRightIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: t,
                                    width: t,
                                    'aria-label': y.Z.Messages.CONNECTIONS_VIEW_MORE
                                })
                            })
                        })
                    });
                }
            })
        ]
    });
}
function z(e) {
    let s,
        { fetching: a, accounts: i, theme: r, locale: o } = e;
    return (
        (s = a
            ? (0, n.jsx)(_.Spinner, {
                  className: Y.marginTop20,
                  type: _.Spinner.Type.SPINNING_CIRCLE
              })
            : 0 === i.length
              ? (0, n.jsxs)(_.EmptyState, {
                    className: Y.marginTop40,
                    theme: r,
                    children: [
                        (0, n.jsx)(_.EmptyStateImage, {
                            darkSrc: t(703152),
                            lightSrc: t(548617),
                            width: 230,
                            height: 220
                        }),
                        (0, n.jsx)(_.EmptyStateText, {
                            note: y.Z.Messages.CONNECTED_ACCOUNTS_NONE,
                            children: y.Z.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
                        })
                    ]
                })
              : i
                    .filter((e) => m.Z.isSupported(e.type))
                    .map((e, s) =>
                        (0, n.jsx)(
                            k,
                            {
                                theme: r,
                                account: e,
                                locale: o,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: s, id: t } = e;
                                        E.Z.disconnect(s, t);
                                    })(e)
                            },
                            s
                        )
                    )),
        (0, n.jsx)(_.FormItem, {
            className: V.connectionList,
            children: s
        })
    );
}
s.Z = () => {
    let e = (0, o.e7)([D.Z], () => D.Z.hidePersonalInformation),
        s = (0, o.e7)([x.Z], () => x.Z.isFetching()),
        t = (0, o.e7)([x.Z], () => x.Z.getAccounts()),
        i = (0, N.ZP)();
    (0, o.e7)([M.ZP], () => M.ZP.getFlattenedGuildIds());
    let r = (0, o.e7)([b.default], () => b.default.locale);
    return (a.useEffect(() => {
        E.Z.fetch();
    }, []),
    e)
        ? (0, n.jsx)(T.Z, {})
        : (0, n.jsxs)(_.FormSection, {
              className: V.__invalid_connections,
              tag: _.FormTitleTags.H1,
              title: y.Z.Messages.CONNECTIONS,
              children: [
                  (0, n.jsx)(H, {}),
                  (0, n.jsx)(z, {
                      fetching: s,
                      accounts: t,
                      theme: i,
                      locale: r
                  })
              ]
          });
};
