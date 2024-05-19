"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("774867"),
  i = s("481060"),
  r = s("70956"),
  o = s("497505"),
  d = s("210724"),
  u = s("78826"),
  c = s("37303"),
  S = s("134483"),
  E = s("478977"),
  T = s("456799"),
  f = s("210851"),
  _ = s("602683"),
  m = s("15033"),
  g = s("899457"),
  I = s("975266");

function h(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let N = ["svg", "png", "gif", "webp"],
  p = [...N, "jpg", "jpeg"],
  C = Array.from(new Set([...p, "gif", "mp4", "webm"]));

function A() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      streamProgressSeconds: t = 0,
      completedAt: s = null,
      enrolledAt: a = null,
      claimedAt: n = null
    } = e;
  return {
    userId: "123",
    questId: "1193992107035983872",
    enrolledAt: a,
    completedAt: s,
    claimedAt: n,
    claimedTier: null,
    lastStreamHeartbeatAt: null,
    streamProgressSeconds: t,
    dismissedQuestContent: 0,
    progress: {}
  }
}
let O = {
  id: "1193992107035983872",
  preview: !0,
  config: {
    configVersion: 1,
    expiresAt: "2030-06-01T00:00:00+00:00",
    streamDurationRequirementMinutes: 10,
    getGameLink: "https://discord.com/",
    applicationId: "123",
    applicationName: "Sky Runners",
    gameTitle: "Sky Runners",
    messages: {
      questName: "Sky Runners",
      rewardName: "Orange Buddy Jetpack",
      rewardNameWithArticle: "an Orange Buddy Jetpack",
      rewardRedemptionInstructionsByPlatform: {
        0: "This code can be used on any platform!",
        1: "Redeem your code on your Xbox.",
        2: "Redeem your code on your Playstation.",
        3: "Redeem your code on your Switch.",
        4: "Redeem your code on your PC."
      },
      gameTitle: "Sky Runners",
      gamePublisher: "Discord"
    },
    colors: {
      primary: "#B377F3",
      secondary: "#5865F2"
    },
    rewardsConfig: {
      assignmentMethod: 1,
      rewards: []
    },
    rewardCodeExpiresAt: "2030-07-01T00:00:00+00:00",
    rewardCodePlatforms: [0, 4, 2, 3, 1],
    assets: {
      rewardTile: "reward.png",
      hero: "hero.png",
      questBarHero: "quests_bar_hero.webm",
      gameTile: "game_tile.png",
      logotype: "game_logotype.png"
    },
    inGameQuestConfig: null,
    variants: [],
    supplementaryApplicationIds: new Set
  },
  userStatus: null,
  targetedContent: []
};

function x() {
  var e, t;
  let [s, l] = n.useState(O), [h, x] = n.useState(g.UserState.UNENROLLED), [R, M] = n.useState(s.config.variants), [v, L] = n.useState(!1);

  function D(e, t) {
    l({
      ...s,
      config: {
        ...s.config,
        assets: {
          ...s.config.assets,
          [e]: t
        }
      }
    })
  }

  function P(e, t) {
    l({
      ...s,
      config: {
        ...s.config,
        messages: {
          ...s.config.messages,
          [e]: t
        }
      }
    })
  }

  function j(e, t) {
    l({
      ...s,
      config: {
        ...s.config,
        colors: {
          ...s.config.colors,
          [e]: t
        }
      }
    })
  }
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: I.heading,
      children: "Quest Preview Tool"
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: I.subheading,
      children: "Messages"
    }), (0, a.jsxs)("div", {
      className: I.fields,
      children: [(0, a.jsx)(_.default, {
        title: "Quest Name",
        assetKey: "questName",
        onMessageChange: P,
        initialValue: s.config.messages.questName
      }), (0, a.jsx)(_.default, {
        title: "Game Title",
        assetKey: "gameTitle",
        onMessageChange: P,
        initialValue: s.config.messages.gameTitle
      }), (0, a.jsx)(_.default, {
        title: "Reward Name",
        assetKey: "rewardName",
        onMessageChange: P,
        initialValue: s.config.messages.rewardName
      }), (0, a.jsx)(_.default, {
        title: "Reward Name With Article",
        assetKey: "rewardNameWithArticle",
        onMessageChange: P,
        initialValue: s.config.messages.rewardNameWithArticle
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: I.subheading,
      children: "Assets"
    }), (0, a.jsxs)("div", {
      className: I.fields,
      children: [(0, a.jsx)(f.default, {
        title: "Game Tile Asset",
        assetKey: "gameTile",
        onFileChange: D,
        filters: p,
        initialValue: s.config.assets.gameTile
      }), (0, a.jsx)(f.default, {
        title: "Logotype",
        assetKey: "logotype",
        onFileChange: D,
        filters: N,
        initialValue: s.config.assets.logotype
      }), (0, a.jsx)(f.default, {
        title: "Quest Bar Hero Asset",
        assetKey: "questBarHero",
        onFileChange: D,
        filters: C,
        initialValue: s.config.assets.questBarHero
      }), (0, a.jsx)(f.default, {
        title: "Reward Tile Asset",
        assetKey: "rewardTile",
        onFileChange: D,
        filters: C,
        initialValue: s.config.assets.rewardTile
      }), (0, a.jsx)(f.default, {
        title: "Gift Inventory Hero",
        assetKey: "hero",
        onFileChange: D,
        filters: C,
        initialValue: s.config.assets.hero
      })]
    }), (0, a.jsx)("div", {
      className: I.fields,
      children: (0, a.jsx)("div", {
        className: I.fullWidthField,
        children: (0, a.jsx)(m.default, {
          onChange: function(e) {
            l({
              ...s,
              config: {
                ...s.config,
                variants: e
              }
            }), M(e)
          },
          values: R
        })
      })
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: I.subheading,
      children: "Colors & Quest States"
    }), (0, a.jsxs)("div", {
      className: I.fields,
      children: [(0, a.jsxs)("div", {
        className: I.fields,
        style: {
          marginBottom: 0
        },
        children: [(0, a.jsx)(E.default, {
          title: "Primary",
          colorKey: "primary",
          onChange: j,
          value: s.config.colors.primary
        }), (0, a.jsx)(E.default, {
          title: "Secondary",
          colorKey: "secondary",
          onChange: j,
          value: s.config.colors.secondary
        })]
      }), (0, a.jsx)(g.default, {
        onChange: function(e) {
          switch (x(e), e) {
            case g.UserState.UNENROLLED:
              l({
                ...s,
                userStatus: null
              });
              break;
            case g.UserState.ENROLLED:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString()
                })
              });
              break;
            case g.UserState.COMPLETED_25:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .25
                })
              });
              break;
            case g.UserState.COMPLETED_50:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .5
                })
              });
              break;
            case g.UserState.COMPLETED_75:
              l({
                ...s,
                userStatus: A({
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE * .75
                })
              });
              break;
            case g.UserState.COMPLETED_100:
              l({
                ...s,
                userStatus: A({
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE
                })
              });
              break;
            case g.UserState.CLAIMED:
              l({
                ...s,
                userStatus: A({
                  claimedAt: new Date().toISOString(),
                  completedAt: new Date().toISOString(),
                  enrolledAt: new Date().toISOString(),
                  streamProgressSeconds: 10 * r.default.Seconds.MINUTE
                })
              })
          }
        },
        value: h
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: I.heading,
      children: "Component Previews"
    }), (0, a.jsxs)("div", {
      className: I.componentPreviews,
      children: [(0, a.jsxs)(T.default, {
        withBorder: !0,
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Quest Bar"
        }), (0, a.jsxs)("div", {
          className: I.questBarPreviewWrapper,
          children: [(null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null && (0, a.jsx)(i.Text, {
            color: "text-secondary",
            variant: "text-sm/normal",
            children: "The Quest Bar is hidden when the user has claimed the reward."
          }), (0, a.jsx)("div", {
            className: I.questBarPreview,
            children: (0, a.jsx)(u.QuestsAssetContextProvider, {
              isPreview: !0,
              children: (0, a.jsx)(d.QuestBar, {
                quest: s
              })
            })
          })]
        })]
      }), (0, a.jsxs)(T.default, {
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Gift Inventory"
        }), (0, a.jsx)(u.QuestsAssetContextProvider, {
          isPreview: !0,
          children: (0, a.jsx)(c.QuestsCard, {
            quest: s,
            location: o.QuestContent.GIFT_INVENTORY_FOR_YOU
          })
        })]
      }), (0, a.jsxs)(T.default, {
        withBorder: !0,
        children: [(0, a.jsx)(i.FormTitle, {
          children: "Channel Call Header"
        }), (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && (0, a.jsx)(i.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
        }), (0, a.jsx)("div", {
          className: I.questBarPreviewWrapper,
          children: (0, a.jsx)(u.QuestsAssetContextProvider, {
            isPreview: !0,
            children: (0, a.jsx)("div", {
              className: I.questChannelCallHeaderPreview,
              children: (0, a.jsx)(S.default, {
                channelId: "123",
                previewQuest: s,
                isParticipatingOverride: v
              })
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: I.channelCallParticipationToggle,
        children: (0, a.jsx)(i.FormItem, {
          children: (0, a.jsx)(i.FormSwitch, {
            value: v,
            onChange: function(e) {
              L(e)
            },
            hideBorder: !0,
            children: "Is Participating:"
          })
        })
      })]
    })]
  })
}
class R extends n.Component {
  componentDidCatch(e) {
    this.setState({
      error: e
    })
  }
  render() {
    let {
      error: e,
      renderKey: t
    } = this.state;
    return null != e ? (0, a.jsxs)("div", {
      className: I.errorBoundary,
      children: [(0, a.jsx)(l.CircleExclamationPointIcon, {
        className: I.errorBoundaryIcon
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: "Something broke in the Quest preview tool :("
      }), (0, a.jsx)(i.Button, {
        color: i.ButtonColors.PRIMARY,
        onClick: this.handleResetState,
        children: "Reset"
      }), null != e.message && (0, a.jsx)(i.Card, {
        className: I.errorMessageWrapper,
        children: (0, a.jsx)("code", {
          className: I.errorMessage,
          children: e.message
        })
      })]
    }) : (0, a.jsx)(x, {}, t)
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      error: null,
      renderKey: 0
    }), h(this, "handleResetState", () => {
      this.setState(e => ({
        error: null,
        renderKey: e.renderKey + 1
      }))
    })
  }
}
t.default = R