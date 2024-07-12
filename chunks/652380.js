s(47120), s(627341);
var n = s(735250),
  a = s(470079),
  i = s(278074),
  r = s(481060),
  o = s(70956),
  l = s(497505),
  c = s(210724),
  d = s(130653),
  _ = s(78826),
  E = s(37303),
  u = s(134483),
  T = s(478977),
  I = s(456799),
  S = s(210851),
  N = s(602683),
  C = s(916028),
  m = s(15033),
  A = s(899457),
  h = s(452693);

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let O = [
'svg',
'png',
'gif',
'webp'
  ],
  p = [
...O,
'jpg',
'jpeg'
  ],
  R = Array.from(new Set([
...p,
'gif',
'mp4',
'webm'
  ]));

function x() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
{
  streamProgressSeconds: t = 0,
  completedAt: s = null,
  enrolledAt: n = null,
  claimedAt: a = null
} = e;
  return {
userId: '123',
questId: '1193992107035983872',
enrolledAt: n,
completedAt: s,
claimedAt: a,
claimedTier: null,
lastStreamHeartbeatAt: null,
streamProgressSeconds: t,
dismissedQuestContent: 0,
progress: {}
  };
}
let M = {
  id: '1193992107035983872',
  preview: !0,
  config: {
configVersion: 1,
expiresAt: '2030-06-01T00:00:00+00:00',
streamDurationRequirementMinutes: 10,
getGameLink: 'https://discord.com/',
applicationId: '123',
applicationName: 'Sky Runners',
gameTitle: 'Sky Runners',
messages: {
  questName: 'Sky Runners',
  rewardName: 'Orange Buddy Jetpack',
  rewardNameWithArticle: 'an Orange Buddy Jetpack',
  rewardRedemptionInstructionsByPlatform: {
    0: 'This code can be used on any platform!',
    1: 'Redeem your code on your Xbox.',
    2: 'Redeem your code on your Playstation.',
    3: 'Redeem your code on your Switch.',
    4: 'Redeem your code on your PC.'
  },
  gameTitle: 'Sky Runners',
  gamePublisher: 'Discord'
},
colors: {
  primary: '#B377F3',
  secondary: '#5865F2'
},
rewardsConfig: {
  assignmentMethod: 1,
  rewards: []
},
rewardCodeExpiresAt: '2030-07-01T00:00:00+00:00',
rewardCodePlatforms: [
  0,
  4,
  2,
  3,
  1
],
assets: {
  rewardTile: 'reward.png',
  hero: 'hero.png',
  questBarHero: 'quests_bar_hero.webm',
  gameTile: 'game_tile.png',
  logotype: 'game_logotype.png'
},
inGameQuestConfig: null,
variants: [],
supplementaryApplicationIds: []
  },
  userStatus: null,
  targetedContent: []
};

function D() {
  var e, t, s;
  let [g, D] = a.useState(M), [f, P] = a.useState(A.a.UNENROLLED), [L, Z] = a.useState([]), [b, v] = a.useState(!1), [j, B] = a.useState(null);
  let U = (s = g.config, (0, i.EQ)(s).with({
configVersion: 1
  }, e => ({
name: e.messages.rewardName,
nameWithArticle: e.messages.rewardNameWithArticle,
redemptionInstructionsByPlatform: e.messages.rewardRedemptionInstructionsByPlatform,
rewardTile: e.assets.rewardTile
  })).with({
configVersion: 2
  }, e => {
let t = e.rewardsConfig.rewards[0];
return {
  ...t.messages,
  rewardTile: t.asset
};
  }).exhaustive());
  a.useEffect(() => {
var e;
Z((e = g.config, (0, i.EQ)(e).with({
  configVersion: 1
}, e => e.variants).with({
  configVersion: 2
}, e => e.features).exhaustive()));
  }, [g]);

  function G(e, t) {
var s, n;
if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e)
  D({
    ...g,
    config: (s = g.config, n = {
      [e]: t
    }, (0, i.EQ)(s).with({
      configVersion: 1
    }, e => ({
      ...e,
      assets: {
        ...e.assets,
        ...n
      }
    })).with({
      configVersion: 2
    }, e => ({
      ...e,
      assets: {
        ...e.assets,
        ...n
      }
    })).exhaustive())
  });
  }

  function F(e, t) {
var s, n;
if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e)
  D({
    ...g,
    config: (s = g.config, n = {
      [e]: t
    }, (0, i.EQ)(s).with({
      configVersion: 1
    }, e => ({
      ...e,
      messages: {
        ...e.messages,
        ...n
      }
    })).with({
      configVersion: 2
    }, e => ({
      ...e,
      messages: {
        ...e.messages,
        ...n
      }
    })).exhaustive())
  });
  }

  function y(e, t) {
var s, n;
if ('rewardName' === e || 'rewardNameWithArticle' === e)
  D({
    ...g,
    config: (s = g.config, n = {
      [e]: t
    }, (0, i.EQ)(s).with({
      configVersion: 1
    }, e => ({
      ...e,
      messages: {
        ...e.messages,
        ...n
      }
    })).with({
      configVersion: 2
    }, e => ({
      ...e,
      rewardsConfig: {
        ...e.rewardsConfig,
        rewards: e.rewardsConfig.rewards.map((e, t) => 0 === t ? {
          ...e,
          messages: {
            ...e.messages,
            ...n
          }
        } : e)
      }
    })).exhaustive())
  });
  }

  function V(e, t) {
D({
  ...g,
  config: {
    ...g.config,
    colors: {
      ...g.config.colors,
      [e]: t
    }
  }
});
  }
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsx)(r.Heading, {
    variant: 'heading-lg/bold',
    className: h.heading,
    children: 'Quest Preview Tool'
  }),
  (0, n.jsx)('div', {
    className: h.fields,
    children: (0, n.jsx)(C.Z, {
      onSelect: function(e) {
        if (B(e), null != e)
          D(e);
      },
      quest: j
    })
  }),
  (0, n.jsx)(r.Heading, {
    variant: 'heading-md/semibold',
    className: h.subheading,
    children: 'Messages'
  }),
  (0, n.jsxs)('div', {
    className: h.fields,
    children: [
      (0, n.jsx)(N.Z, {
        title: 'Quest Name',
        assetKey: 'questName',
        onMessageChange: F,
        initialValue: g.config.messages.questName
      }),
      (0, n.jsx)(N.Z, {
        title: 'Game Title',
        assetKey: 'gameTitle',
        onMessageChange: F,
        initialValue: g.config.messages.gameTitle
      }),
      (0, n.jsx)(N.Z, {
        title: 'Reward Name',
        assetKey: 'rewardName',
        onMessageChange: y,
        initialValue: U.name
      }),
      (0, n.jsx)(N.Z, {
        title: 'Reward Name With Article',
        assetKey: 'rewardNameWithArticle',
        onMessageChange: y,
        initialValue: U.nameWithArticle
      })
    ]
  }),
  (0, n.jsx)(r.Heading, {
    variant: 'heading-md/semibold',
    className: h.subheading,
    children: 'Assets'
  }),
  (0, n.jsxs)('div', {
    className: h.fields,
    children: [
      (0, n.jsx)(S.Z, {
        title: 'Game Tile Asset',
        assetKey: 'gameTile',
        onFileChange: G,
        filters: p,
        initialValue: g.config.assets.gameTile
      }),
      (0, n.jsx)(S.Z, {
        title: 'Logotype',
        assetKey: 'logotype',
        onFileChange: G,
        filters: O,
        initialValue: g.config.assets.logotype
      }),
      (0, n.jsx)(S.Z, {
        title: 'Quest Bar Hero Asset',
        assetKey: 'questBarHero',
        onFileChange: G,
        filters: R,
        initialValue: g.config.assets.questBarHero
      }),
      (0, n.jsx)(S.Z, {
        title: 'Reward Tile Asset',
        assetKey: 'rewardTile',
        onFileChange: function(e, t) {
          var s, n;
          if ('rewardTile' === e)
            D({
              ...g,
              config: (s = g.config, n = {
                [e]: t
              }, (0, i.EQ)(s).with({
                configVersion: 1
              }, e => ({
                ...e,
                assets: {
                  ...e.assets,
                  ...n
                }
              })).with({
                configVersion: 2
              }, e => ({
                ...e,
                assets: {
                  ...e.assets,
                  ...n
                },
                rewardsConfig: {
                  ...e.rewardsConfig,
                  rewards: e.rewardsConfig.rewards.map((e, t) => 0 === t ? {
                    ...e,
                    asset: n.rewardTile
                  } : e)
                }
              })).exhaustive())
            });
        },
        filters: R,
        initialValue: U.rewardTile
      }),
      (0, n.jsx)(S.Z, {
        title: 'Gift Inventory Hero',
        assetKey: 'hero',
        onFileChange: G,
        filters: R,
        initialValue: g.config.assets.hero
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: h.fields,
    children: (0, n.jsx)('div', {
      className: h.fullWidthField,
      children: (0, n.jsx)(m.Z, {
        onChange: function(e) {
          var t, s;
          D({
            ...g,
            config: (t = g.config, s = e, (0, i.EQ)(t).with({
              configVersion: 1
            }, e => ({
              ...e,
              variants: s
            })).with({
              configVersion: 2
            }, e => ({
              ...e,
              features: s
            })).exhaustive())
          }), Z(e);
        },
        values: L
      })
    })
  }),
  (0, n.jsx)(r.Heading, {
    variant: 'heading-md/semibold',
    className: h.subheading,
    children: 'Colors & Quest States'
  }),
  (0, n.jsxs)('div', {
    className: h.fields,
    children: [
      (0, n.jsxs)('div', {
        className: h.fields,
        style: {
          marginBottom: 0
        },
        children: [
          (0, n.jsx)(T.Z, {
            title: 'Primary',
            colorKey: 'primary',
            onChange: V,
            value: g.config.colors.primary
          }),
          (0, n.jsx)(T.Z, {
            title: 'Secondary',
            colorKey: 'secondary',
            onChange: V,
            value: g.config.colors.secondary
          })
        ]
      }),
      (0, n.jsx)(A.Z, {
        onChange: function(e) {
          switch (P(e), e) {
            case A.a.UNENROLLED:
              D({
                ...g,
                userStatus: null
              });
              break;
            case A.a.ENROLLED:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case A.a.COMPLETED_25:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE * 0.25
                })
              });
              break;
            case A.a.COMPLETED_50:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE * 0.5
                })
              });
              break;
            case A.a.COMPLETED_75:
              D({
                ...g,
                userStatus: x({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE * 0.75
                })
              });
              break;
            case A.a.COMPLETED_100:
              D({
                ...g,
                userStatus: x({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE
                })
              });
              break;
            case A.a.CLAIMED:
              D({
                ...g,
                userStatus: x({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * o.Z.Seconds.MINUTE
                })
              });
          }
        },
        value: f
      })
    ]
  }),
  (0, n.jsx)(r.Heading, {
    variant: 'heading-lg/bold',
    className: h.heading,
    children: 'Component Previews'
  }),
  (0, n.jsxs)('div', {
    className: h.componentPreviews,
    children: [
      (0, n.jsxs)(I.Z, {
        withBorder: !0,
        children: [
          (0, n.jsx)(r.FormTitle, {
            children: 'Quest Bar'
          }),
          (0, n.jsxs)('div', {
            className: h.questBarPreviewWrapper,
            children: [
              (null === (e = g.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, n.jsx)(r.Text, {
                color: 'text-secondary',
                variant: 'text-sm/normal',
                children: 'The Quest Bar is hidden when the user has claimed the reward.'
              }),
              (0, n.jsx)('div', {
                className: h.questBarPreview,
                children: (0, n.jsx)(_.p, {
                  isPreview: !0,
                  source: 'preview',
                  questId: '0',
                  children: (0, n.jsx)(d.Z, {
                    children: (0, n.jsx)(c.P, {
                      quest: g
                    })
                  })
                })
              })
            ]
          })
        ]
      }),
      (0, n.jsxs)(I.Z, {
        children: [
          (0, n.jsx)(r.FormTitle, {
            children: 'Gift Inventory'
          }),
          (0, n.jsx)(_.p, {
            isPreview: !0,
            source: 'preview',
            questId: '0',
            children: (0, n.jsx)(E.Z, {
              quest: g,
              location: l.jn.GIFT_INVENTORY_FOR_YOU
            })
          })
        ]
      }),
      (0, n.jsxs)(I.Z, {
        withBorder: !0,
        children: [
          (0, n.jsx)(r.FormTitle, {
            children: 'Channel Call Header'
          }),
          (null === (t = g.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && (0, n.jsx)(r.Text, {
            color: 'text-secondary',
            variant: 'text-sm/normal',
            children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
          }),
          (0, n.jsx)('div', {
            className: h.questBarPreviewWrapper,
            children: (0, n.jsx)(_.p, {
              isPreview: !0,
              source: 'preview',
              questId: '0',
              children: (0, n.jsx)('div', {
                className: h.questChannelCallHeaderPreview,
                children: (0, n.jsx)(u.Z, {
                  channelId: '123',
                  previewQuest: g,
                  isParticipatingOverride: b
                })
              })
            })
          })
        ]
      }),
      (0, n.jsx)('div', {
        className: h.channelCallParticipationToggle,
        children: (0, n.jsx)(r.FormItem, {
          children: (0, n.jsx)(r.FormSwitch, {
            value: b,
            onChange: function(e) {
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
class f extends a.Component {
  componentDidCatch(e) {
this.setState({
  error: e
});
  }
  render() {
let {
  error: e,
  renderKey: t
} = this.state;
return null != e ? (0, n.jsxs)('div', {
  className: h.errorBoundary,
  children: [
    (0, n.jsx)(r.CircleExclamationPointIcon, {
      className: h.errorBoundaryIcon
    }),
    (0, n.jsx)(r.Heading, {
      variant: 'heading-lg/semibold',
      children: 'Something broke in the Quest preview tool :('
    }),
    (0, n.jsx)(r.Button, {
      color: r.ButtonColors.PRIMARY,
      onClick: this.handleResetState,
      children: 'Reset'
    }),
    null != e.message && (0, n.jsx)(r.Card, {
      className: h.errorMessageWrapper,
      children: (0, n.jsx)('code', {
        className: h.errorMessage,
        children: e.message
      })
    })
  ]
}) : (0, n.jsx)(D, {}, t);
  }
  constructor(...e) {
super(...e), g(this, 'state', {
  error: null,
  renderKey: 0
}), g(this, 'handleResetState', () => {
  this.setState(e => ({
    error: null,
    renderKey: e.renderKey + 1
  }));
});
  }
}
t.Z = f;