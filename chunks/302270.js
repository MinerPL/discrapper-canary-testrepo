"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("692547"),
  u = n("481060"),
  d = n("475179"),
  c = n("40851"),
  f = n("358221"),
  h = n("933557"),
  m = n("320007"),
  p = n("236091"),
  E = n("623624"),
  C = n("984370"),
  g = n("141321"),
  S = n("618158"),
  _ = n("390322"),
  T = n("616286"),
  I = n("961048"),
  A = n("430824"),
  v = n("496675"),
  N = n("976644"),
  x = n("357727"),
  M = n("158010"),
  R = n("170039"),
  L = n("502568"),
  y = n("626135"),
  O = n("792125"),
  j = n("431328"),
  P = n("501655"),
  D = n("200498"),
  b = n("146085"),
  U = n("427679"),
  F = n("592473"),
  w = n("831002"),
  k = n("903108"),
  H = n("981631"),
  B = n("474936"),
  G = n("689938"),
  V = n("802358");

function W(e) {
  let {
    inPopout: t,
    channel: n,
    toggleRequestToSpeakSidebar: s,
    showRequestToSpeakSidebar: o
  } = e, h = (0, c.useAppContext)(), E = (0, r.useStateFromStores)([f.default], () => f.default.getChatOpen(n.id)), C = (0, D.useCanModerateRequestToSpeak)(n.id), A = (0, j.useStageParticipantsCount)(n.id, P.StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY), {
    preventIdle: v,
    allowIdle: N
  } = (0, S.usePreventIdle)("popup");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.default, {
      channelId: n.id
    }, "clips-enabled-indicator"), (0, a.jsx)(u.Popout, {
      position: "bottom",
      animation: u.Popout.Animation.NONE,
      align: "right",
      renderPopout: e => (0, a.jsx)(_.default, {
        children: (0, a.jsx)(w.default, {
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
        return (0, l.createElement)(I.default, {
          ...e,
          key: "more-options",
          isActive: n,
          className: V.button,
          iconClassName: V.buttonIcon
        })
      }
    }, "more-options-popout"), !t && (0, a.jsx)(m.default, {
      className: V.button
    }, "clips"), (0, a.jsx)(g.default, {
      onOpen: v,
      onClose: N,
      className: V.button
    }, "recents"), !o && C ? (0, a.jsx)("div", {
      className: V.button,
      children: (0, a.jsx)(F.default, {
        toggleRequestToSpeakSidebar: () => {
          E && d.default.updateChatOpen(n.id, !1), s()
        },
        showRequestToSpeakSidebar: o,
        numRequestToSpeak: A
      })
    }) : null, !E && (0, a.jsx)("div", {
      className: i()(V.button, {
        [V.sidebarOpen]: o
      }),
      children: (0, a.jsx)(T.ChatButton, {
        channelId: n.id,
        showRequestToSpeakSidebar: o,
        toggleRequestToSpeakSidebar: s,
        iconClassName: V.buttonIcon
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
  } = e, p = (0, h.default)(c), g = (0, r.useStateFromStores)([U.default], () => U.default.getStageInstanceByChannel(c.id)), S = (0, j.useActualStageSpeakerCount)(c.id), _ = (0, j.useStageParticipantsCount)(c.id, P.StageChannelParticipantNamedIndex.AUDIENCE), T = (0, r.useStateFromStores)([A.default], () => A.default.getGuild(c.guild_id), [c.guild_id]), I = null !== (t = null == T ? void 0 : T.maxStageVideoChannelUsers) && void 0 !== t ? t : 0, D = (null == T ? void 0 : T.isCommunity()) ? I < H.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == T ? void 0 : T.premiumTier) !== H.BoostedGuildTiers.TIER_3 && I <= H.MAX_STAGE_VIDEO_USER_LIMIT_TIER2, F = (0, k.default)(c), w = (0, r.useStateFromStores)([v.default], () => v.default.can(b.MODERATE_STAGE_CHANNEL_PERMISSIONS, c)), Y = () => {
    d.default.updateStageVideoLimitBoostUpsellDismissed(c.id, !0), y.default.track(H.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
      guild_id: c.guild_id,
      type: B.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: w,
      action: B.BoostingUpsellAction.DISMISS
    })
  };
  l.useEffect(() => {
    F && y.default.track(H.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
      guild_id: c.guild_id,
      type: B.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
      is_moderator: w,
      listener_count: S + _
    })
  }, [F]);
  let Z = (0, a.jsxs)(L.default, {
    toolbar: (0, a.jsx)(W, {
      inPopout: s,
      toggleRequestToSpeakSidebar: f,
      showRequestToSpeakSidebar: m,
      channel: c
    }),
    onDoubleClick: C.handleDoubleClick,
    transparent: !0,
    className: i()((0, O.getThemeClass)(H.ThemeTypes.DARK), V.participants),
    children: [(0, a.jsx)(L.default.Icon, {
      icon: R.default,
      disabled: !0,
      "aria-label": G.default.Messages.STAGE_CHANNEL,
      className: V.icon,
      color: null != g ? o.default.unsafe_rawColors.GREEN_360.css : void 0
    }), (0, a.jsx)(L.default.Title, {
      className: V.channelName,
      wrapperClassName: V.channelNameWrapper,
      children: null !== (n = null == g ? void 0 : g.topic) && void 0 !== n ? n : p
    }), (0, a.jsx)(L.default.Divider, {
      className: V.divider
    }), (0, a.jsxs)(L.default.Title, {
      children: [(0, a.jsx)(x.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: V.speakerCount,
        children: G.default.Messages.SPEAKING_COUNT.format({
          count: S
        })
      }), (0, a.jsx)(M.default, {
        width: 16,
        height: 16
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: V.speakerCount,
        children: G.default.Messages.LISTENING_COUNT.format({
          count: _
        })
      })]
    })]
  });
  return F ? (0, a.jsxs)("div", {
    children: [Z, (0, a.jsxs)("div", {
      className: V.boostUpsell,
      children: [(0, a.jsx)(z, {}), (0, a.jsxs)("div", {
        className: V.text,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: D ? G.default.Messages.STAGE_FULL_MODERATOR_TITLE : G.default.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: D ? G.default.Messages.STAGE_FULL_MODERATOR_BODY : G.default.Messages.STAGE_FULL_MAX_BODY
        })]
      }), (0, a.jsx)("div", {
        className: V.buttons,
        children: D ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.Button, {
            className: V.notNowButton,
            onClick: Y,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            children: G.default.Messages.NOT_NOW
          }), (0, a.jsx)(N.default, {
            size: u.Button.Sizes.SMALL,
            onClick: () => {
              (0, E.openGuildBoostingMarketingModal)({
                guildId: c.guild_id,
                location: {
                  section: H.AnalyticsSections.STAGE_VIDEO_LIMIT
                }
              }), y.default.track(H.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                guild_id: c.guild_id,
                type: B.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                is_moderator: w,
                action: B.BoostingUpsellAction.BOOST
              })
            },
            className: V.boostButton,
            children: G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
          })]
        }) : (0, a.jsx)(u.Button, {
          className: V.notNowButton,
          onClick: Y,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.SMALL,
          children: G.default.Messages.DISMISS
        })
      })]
    })]
  }) : Z
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