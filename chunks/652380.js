t(47120), t(627341);
var n = t(735250),
    a = t(470079),
    i = t(278074),
    r = t(754700),
    o = t(887003),
    l = t(742635),
    c = t(458708),
    d = t(481060),
    _ = t(70956),
    E = t(497505),
    u = t(210724),
    I = t(130653),
    T = t(78826),
    S = t(37303),
    N = t(134483),
    C = t(478977),
    m = t(456799),
    A = t(210851),
    O = t(602683),
    g = t(916028),
    h = t(15033),
    p = t(899457),
    R = t(673105);
function x(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let M = ['svg', 'png', 'gif', 'webp'],
    f = [...M, 'jpg', 'jpeg'],
    D = Array.from(new Set([...f, 'gif', 'mp4', 'webm']));
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: s = 0, completedAt: t = null, enrolledAt: n = null, claimedAt: a = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: n,
        completedAt: t,
        claimedAt: a,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: s,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let L = '1193992107035983872',
    b = {
        id: L,
        preview: !0,
        config: {
            id: L,
            configVersion: 2,
            startsAt: '2024-01-01T00:00:00+00:00',
            expiresAt: '2030-01-01T00:00:00+00:00',
            application: {
                link: 'https://discord.com/',
                id: '123',
                name: 'Sky Runners'
            },
            messages: {
                questName: 'Sky Runners',
                gameTitle: 'Sky Runners',
                gamePublisher: 'Discord'
            },
            colors: {
                primary: '#B377F3',
                secondary: '#5865F2'
            },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: '',
                        asset: 'reward.png',
                        type: o.w.REWARD_CODE,
                        messages: {
                            name: 'Orange Buddy Jetpack',
                            nameWithArticle: 'an Orange Buddy Jetpack',
                            redemptionInstructionsByPlatform: {
                                0: 'This code can be used on any platform!',
                                1: 'Redeem your code on your Xbox.',
                                2: 'Redeem your code on your Playstation.',
                                3: 'Redeem your code on your Switch.',
                                4: 'Redeem your code on your PC.'
                            }
                        }
                    }
                ],
                rewardsExpireAt: '2030-01-01T00:00:00+00:00',
                platforms: [0, 4, 2, 3, 1]
            },
            assets: {
                hero: 'hero.png',
                questBarHero: 'quests_bar_hero.webm',
                gameTile: 'game_tile.png',
                logotype: 'game_logotype.png'
            },
            taskConfig: {
                type: l.L.FIRST_PARTY,
                joinOperator: c.r.AND,
                tasks: {
                    [r.X.PLAY_ON_DESKTOP]: {
                        eventName: r.X.PLAY_ON_DESKTOP,
                        target: 300,
                        externalIds: []
                    }
                }
            },
            features: []
        },
        userStatus: null,
        targetedContent: []
    };
function Z() {
    var e, s, t;
    let [r, o] = a.useState(b),
        [l, c] = a.useState(p.a.UNENROLLED),
        [x, L] = a.useState([]),
        [Z, v] = a.useState(!1),
        [j, B] = a.useState(null);
    let U =
        ((t = r.config),
        (0, i.EQ)(t)
            .with({ configVersion: 2 }, (e) => {
                let s = e.rewardsConfig.rewards[0];
                return {
                    ...s.messages,
                    rewardTile: s.asset
                };
            })
            .exhaustive());
    a.useEffect(() => {
        var e;
        L(
            ((e = r.config),
            (0, i.EQ)(e)
                .with({ configVersion: 2 }, (e) => e.features)
                .exhaustive())
        );
    }, [r]);
    function G(e, s) {
        var t, n;
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e)
            o({
                ...r,
                config:
                    ((t = r.config),
                    (n = { [e]: s }),
                    (0, i.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            assets: {
                                ...e.assets,
                                ...n
                            }
                        }))
                        .exhaustive())
            });
    }
    function F(e, s) {
        var t, n;
        if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e)
            o({
                ...r,
                config:
                    ((t = r.config),
                    (n = { [e]: s }),
                    (0, i.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            messages: {
                                ...e.messages,
                                ...n
                            }
                        }))
                        .exhaustive())
            });
    }
    function y(e, s) {
        var t, n;
        if ('rewardName' === e || 'rewardNameWithArticle' === e)
            o({
                ...r,
                config:
                    ((t = r.config),
                    (n = { [e]: s }),
                    (0, i.EQ)(t)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, s) =>
                                    0 === s
                                        ? {
                                              ...e,
                                              messages: {
                                                  ...e.messages,
                                                  ...n
                                              }
                                          }
                                        : e
                                )
                            }
                        }))
                        .exhaustive())
            });
    }
    function V(e, s) {
        o({
            ...r,
            config: {
                ...r.config,
                colors: {
                    ...r.config.colors,
                    [e]: s
                }
            }
        });
    }
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Quest Preview Tool'
            }),
            (0, n.jsx)('div', {
                className: R.fields,
                children: (0, n.jsx)(g.Z, {
                    onSelect: function (e) {
                        if ((B(e), null != e)) o(e);
                    },
                    quest: j
                })
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Messages'
            }),
            (0, n.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, n.jsx)(O.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: F,
                        initialValue: r.config.messages.questName
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: F,
                        initialValue: r.config.messages.gameTitle
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Reward Name',
                        assetKey: 'rewardName',
                        onMessageChange: y,
                        initialValue: U.name
                    }),
                    (0, n.jsx)(O.Z, {
                        title: 'Reward Name With Article',
                        assetKey: 'rewardNameWithArticle',
                        onMessageChange: y,
                        initialValue: U.nameWithArticle
                    })
                ]
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Assets'
            }),
            (0, n.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, n.jsx)(A.Z, {
                        title: 'Game Tile Asset',
                        assetKey: 'gameTile',
                        onFileChange: G,
                        filters: f,
                        initialValue: r.config.assets.gameTile
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: G,
                        filters: M,
                        initialValue: r.config.assets.logotype
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Quest Bar Hero Asset',
                        assetKey: 'questBarHero',
                        onFileChange: G,
                        filters: D,
                        initialValue: r.config.assets.questBarHero
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Reward Tile Asset',
                        assetKey: 'rewardTile',
                        onFileChange: function (e, s) {
                            var t, n;
                            if ('rewardTile' === e)
                                o({
                                    ...r,
                                    config:
                                        ((t = r.config),
                                        (n = { [e]: s }),
                                        (0, i.EQ)(t)
                                            .with({ configVersion: 2 }, (e) => ({
                                                ...e,
                                                assets: {
                                                    ...e.assets,
                                                    ...n
                                                },
                                                rewardsConfig: {
                                                    ...e.rewardsConfig,
                                                    rewards: e.rewardsConfig.rewards.map((e, s) =>
                                                        0 === s
                                                            ? {
                                                                  ...e,
                                                                  asset: n.rewardTile
                                                              }
                                                            : e
                                                    )
                                                }
                                            }))
                                            .exhaustive())
                                });
                        },
                        filters: D,
                        initialValue: U.rewardTile
                    }),
                    (0, n.jsx)(A.Z, {
                        title: 'Gift Inventory Hero',
                        assetKey: 'hero',
                        onFileChange: G,
                        filters: D,
                        initialValue: r.config.assets.hero
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: R.fields,
                children: (0, n.jsx)('div', {
                    className: R.fullWidthField,
                    children: (0, n.jsx)(h.Z, {
                        onChange: function (e) {
                            var s, t;
                            o({
                                ...r,
                                config:
                                    ((s = r.config),
                                    (t = e),
                                    (0, i.EQ)(s)
                                        .with({ configVersion: 2 }, (e) => ({
                                            ...e,
                                            features: t
                                        }))
                                        .exhaustive())
                            }),
                                L(e);
                        },
                        values: x
                    })
                })
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Colors & Quest States'
            }),
            (0, n.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, n.jsxs)('div', {
                        className: R.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, n.jsx)(C.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: V,
                                value: r.config.colors.primary
                            }),
                            (0, n.jsx)(C.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: V,
                                value: r.config.colors.secondary
                            })
                        ]
                    }),
                    (0, n.jsx)(p.Z, {
                        onChange: function (e) {
                            switch ((c(e), e)) {
                                case p.a.UNENROLLED:
                                    o({
                                        ...r,
                                        userStatus: null
                                    });
                                    break;
                                case p.a.ENROLLED:
                                    o({
                                        ...r,
                                        userStatus: P({ enrolledAt: new Date().toISOString() })
                                    });
                                    break;
                                case p.a.COMPLETED_25:
                                    o({
                                        ...r,
                                        userStatus: P({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.25
                                        })
                                    });
                                    break;
                                case p.a.COMPLETED_50:
                                    o({
                                        ...r,
                                        userStatus: P({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.5
                                        })
                                    });
                                    break;
                                case p.a.COMPLETED_75:
                                    o({
                                        ...r,
                                        userStatus: P({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE * 0.75
                                        })
                                    });
                                    break;
                                case p.a.COMPLETED_100:
                                    o({
                                        ...r,
                                        userStatus: P({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                                    break;
                                case p.a.CLAIMED:
                                    o({
                                        ...r,
                                        userStatus: P({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 10 * _.Z.Seconds.MINUTE
                                        })
                                    });
                            }
                        },
                        value: l
                    })
                ]
            }),
            (0, n.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Component Previews'
            }),
            (0, n.jsxs)('div', {
                className: R.componentPreviews,
                children: [
                    (0, n.jsxs)(m.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Quest Bar' }),
                            (0, n.jsxs)('div', {
                                className: R.questBarPreviewWrapper,
                                children: [
                                    (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null &&
                                        (0, n.jsx)(d.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, n.jsx)('div', {
                                        className: R.questBarPreview,
                                        children: (0, n.jsx)(T.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, n.jsx)(I.Z, { children: (0, n.jsx)(u.P, { quest: r }) })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(m.Z, {
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Gift Inventory' }),
                            (0, n.jsx)(T.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, n.jsx)(S.Z, {
                                    quest: r,
                                    location: E.jn.GIFT_INVENTORY_FOR_YOU
                                })
                            })
                        ]
                    }),
                    (0, n.jsxs)(m.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(d.FormTitle, { children: 'Channel Call Header' }),
                            (null === (s = r.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null &&
                                (0, n.jsx)(d.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, n.jsx)('div', {
                                className: R.questBarPreviewWrapper,
                                children: (0, n.jsx)(T.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, n.jsx)('div', {
                                        className: R.questChannelCallHeaderPreview,
                                        children: (0, n.jsx)(N.Z, {
                                            channelId: '123',
                                            previewQuest: r,
                                            isParticipatingOverride: Z
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: R.channelCallParticipationToggle,
                        children: (0, n.jsx)(d.FormItem, {
                            children: (0, n.jsx)(d.FormSwitch, {
                                value: Z,
                                onChange: function (e) {
                                    v(e);
                                },
                                hideBorder: !0,
                                children: 'Is Participating:'
                            })
                        })
                    })
                ]
            })
        ]
    });
}
class v extends a.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: s } = this.state;
        return null != e
            ? (0, n.jsxs)('div', {
                  className: R.errorBoundary,
                  children: [
                      (0, n.jsx)(d.CircleWarningIcon, { className: R.errorBoundaryIcon }),
                      (0, n.jsx)(d.Heading, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, n.jsx)(d.Button, {
                          color: d.ButtonColors.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, n.jsx)(d.Card, {
                              className: R.errorMessageWrapper,
                              children: (0, n.jsx)('code', {
                                  className: R.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, n.jsx)(Z, {}, s);
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', {
                error: null,
                renderKey: 0
            }),
            x(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
s.Z = v;
