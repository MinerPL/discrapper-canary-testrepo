"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("669491"),
  o = n("77078"),
  d = n("255397"),
  c = n("244201"),
  f = n("191145"),
  h = n("679653"),
  m = n("76813"),
  p = n("992207"),
  E = n("95039"),
  g = n("539938"),
  S = n("311197"),
  C = n("550410"),
  _ = n("124824"),
  I = n("640553"),
  T = n("104815"),
  v = n("305961"),
  x = n("957255"),
  N = n("181114"),
  A = n("849467"),
  M = n("155207"),
  R = n("228427"),
  j = n("664336"),
  L = n("599110"),
  y = n("439932"),
  O = n("567469"),
  P = n("998716"),
  D = n("619395"),
  b = n("923510"),
  U = n("834052"),
  w = n("506466"),
  F = n("199811"),
  V = n("96151"),
  k = n("49111"),
  H = n("646718"),
  B = n("782340"),
  G = n("225243");

function W(e) {
  let {
    inPopout: t,
    channel: n,
    toggleRequestToSpeakSidebar: s,
    showRequestToSpeakSidebar: u
  } = e, h = (0, c.useAppContext)(), E = (0, r.useStateFromStores)([f.default], () => f.default.getChatOpen(n.id)), g = (0, D.useCanModerateRequestToSpeak)(n.id), v = (0, O.useStageParticipantsCount)(n.id, P.StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY), {
    preventIdle: x,
    allowIdle: N
  } = (0, C.usePreventIdle)("popup");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.default, {
      channelId: n.id
    }, "clips-enabled-indicator"), (0, a.jsx)(o.Popout, {
      position: "bottom",
      animation: o.Popout.Animation.NONE,
      align: "right",
      renderPopout: e => (0, a.jsx)(_.default, {
        children: (0, a.jsx)(F.default, {
          ...e,
          channelId: n.id,
          appContext: h
        })
      }),
      autoInvert: !1,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, l.createElement)(T.default, {
          ...e,
          key: "more-options",
          isActive: n,
          className: G.button,
          iconClassName: G.buttonIcon
        })
      }
    }, "more-options-popout"), !t && (0, a.jsx)(m.default, {
      className: G.button
    }, "clips"), (0, a.jsx)(S.default, {
      onOpen: x,
      onClose: N,
      className: G.button
    }, "recents"), !u && g ? (0, a.jsx)("div", {
      className: G.button,
      children: (0, a.jsx)(w.default, {
        toggleRequestToSpeakSidebar: () => {
          E && d.default.updateChatOpen(n.id, !1), s()
        },
        showRequestToSpeakSidebar: u,
        numRequestToSpeak: v
      })
    }) : null, !E && (0, a.jsx)("div", {
      className: i(G.button, {
        [G.sidebarOpen]: u
      }),
      children: (0, a.jsx)(I.ChatButton, {
        channelId: n.id,
        showRequestToSpeakSidebar: u,
        toggleRequestToSpeakSidebar: s,
        iconClassName: G.buttonIcon
      })
    })]
  })
}

function Y(e) {
  var t, n;
  let {
    inPopout: s,
    channel: c,
    toggleRequestToSpeakSidebar: f,
    showRequestToSpeakSidebar: m
  } = e, p = (0, h.default)(c), S = (0, r.useStateFromStores)([U.default], () => U.default.getStageInstanceByChannel(c.id)), C = (0, O.useActualStageSpeakerCount)(c.id), _ = (0, O.useStageParticipantsCount)(c.id, P.StageChannelParticipantNamedIndex.AUDIENCE), I = (0, r.useStateFromStores)([v.default], () => v.default.getGuild(c.guild_id), [c.guild_id]), T = null !== (t = null == I ? void 0 : I.maxStageVideoChannelUsers) && void 0 !== t ? t : 0, D = (null == I ? void 0 : I.isCommunity()) ? T < k.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == I ? void 0 : I.premiumTier) !== k.BoostedGuildTiers.TIER_3 && T <= k.MAX_STAGE_VIDEO_USER_LIMIT_TIER2, w = (0, V.default)(c), F = (0, r.useStateFromStores)([x.default], () => x.default.can(b.MODERATE_STAGE_CHANNEL_PERMISSIONS, c)), Y = () => {
    d.default.updateStageVideoLimitBoostUpsellDismissed(c.id, !0), L.default.track(k.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
      guild_id: c.guild_id,
      type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: F,
      action: H.BoostingUpsellAction.DISMISS
    })
  };
  l.useEffect(() => {
    w && L.default.track(k.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
      guild_id: c.guild_id,
      type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: F,
      listener_count: C + _
    })
  }, [w]);
  let K = (0, a.jsxs)(j.default, {
    toolbar: (0, a.jsx)(W, {
      inPopout: s,
      toggleRequestToSpeakSidebar: f,
      showRequestToSpeakSidebar: m,
      channel: c
    }),
    onDoubleClick: g.handleDoubleClick,
    transparent: !0,
    className: i((0, y.getThemeClass)(k.ThemeTypes.DARK), G.participants),
    children: [(0, a.jsx)(j.default.Icon, {
      icon: R.default,
      disabled: !0,
      "aria-label": B.default.Messages.STAGE_CHANNEL,
      className: G.icon,
      color: null != S ? u.default.unsafe_rawColors.GREEN_360.css : void 0
    }), (0, a.jsx)(j.default.Title, {
      className: G.channelName,
      wrapperClassName: G.channelNameWrapper,
      children: null !== (n = null == S ? void 0 : S.topic) && void 0 !== n ? n : p
    }), (0, a.jsx)(j.default.Divider, {
      className: G.divider
    }), (0, a.jsxs)(j.default.Title, {
      children: [(0, a.jsx)(A.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: G.speakerCount,
        children: B.default.Messages.SPEAKING_COUNT.format({
          count: C
        })
      }), (0, a.jsx)(M.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: G.speakerCount,
        children: B.default.Messages.LISTENING_COUNT.format({
          count: _
        })
      })]
    })]
  });
  return w ? (0, a.jsxs)("div", {
    children: [K, (0, a.jsxs)("div", {
      className: G.boostUpsell,
      children: [(0, a.jsx)(z, {}), (0, a.jsxs)("div", {
        className: G.text,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: D ? B.default.Messages.STAGE_FULL_MODERATOR_TITLE : B.default.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: D ? B.default.Messages.STAGE_FULL_MODERATOR_BODY : B.default.Messages.STAGE_FULL_MAX_BODY
        })]
      }), (0, a.jsx)("div", {
        className: G.buttons,
        children: D ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.Button, {
            className: G.notNowButton,
            onClick: Y,
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.SMALL,
            children: B.default.Messages.NOT_NOW
          }), (0, a.jsx)(N.default, {
            size: o.Button.Sizes.SMALL,
            onClick: () => {
              (0, E.openGuildBoostingMarketingModal)({
                guildId: c.guild_id,
                location: {
                  section: k.AnalyticsSections.STAGE_VIDEO_LIMIT
                }
              }), L.default.track(k.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                guild_id: c.guild_id,
                type: H.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                is_moderator: F,
                action: H.BoostingUpsellAction.BOOST
              })
            },
            className: G.boostButton,
            children: B.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
          })]
        }) : (0, a.jsx)(o.Button, {
          className: G.notNowButton,
          onClick: Y,
          look: o.Button.Looks.BLANK,
          size: o.Button.Sizes.SMALL,
          children: B.default.Messages.DISMISS
        })
      })]
    })]
  }) : K
}

function z() {
  return (0, a.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    children: [(0, a.jsxs)("g", {
      clipPath: "url(#clip0_595_59940)",
      children: [(0, a.jsx)("path", {
        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
        fill: "url(#paint0_linear_595_59940)"
      }), (0, a.jsx)("path", {
        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
        fill: "white"
      }), (0, a.jsx)("path", {
        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
        fill: "white"
      })]
    }), (0, a.jsxs)("defs", {
      children: [(0, a.jsxs)("linearGradient", {
        id: "paint0_linear_595_59940",
        x1: "2.4046e-06",
        y1: "35.2166",
        x2: "35.7182",
        y2: "-1.45185",
        gradientUnits: "userSpaceOnUse",
        children: [(0, a.jsx)("stop", {
          stopColor: "#3E70DD"
        }), (0, a.jsx)("stop", {
          offset: "1",
          stopColor: "#B377F3"
        })]
      }), (0, a.jsx)("clipPath", {
        id: "clip0_595_59940",
        children: (0, a.jsx)("rect", {
          width: "36",
          height: "36",
          fill: "white"
        })
      })]
    })]
  })
}