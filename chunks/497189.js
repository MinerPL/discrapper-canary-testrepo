"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
  o = n("143927"),
  u = n("903788"),
  d = n("625483"),
  c = n("388469"),
  f = n("442837"),
  E = n("484957"),
  h = n("481060"),
  _ = n("749210"),
  C = n("607070"),
  m = n("100527"),
  S = n("931240"),
  p = n("970606"),
  g = n("963202"),
  I = n("650461"),
  T = n("353093"),
  A = n("603839"),
  N = n("430824"),
  v = n("725568"),
  R = n("231467"),
  O = n("207796"),
  L = n("316553"),
  M = n("273254"),
  y = n("559469"),
  P = n("308083"),
  x = n("689938"),
  D = n("18712"),
  b = n("345480"),
  U = n("236613");
let j = {
  mass: 1,
  tension: 600,
  friction: 60
};

function G(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(r.animated.div, {
    className: D.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: D.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: U,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: D.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: b,
        alt: ""
      })
    })]
  })
}

function k(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: D.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: D.upsellIcon
    }), (0, a.jsx)(h.Text, {
      className: D.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function w(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: l,
    onButtonClick: r,
    buttonText: f,
    hasCompletedUpsell: _
  } = e, C = (0, O.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, o.default), m = (0, O.useClanDiscoveryUIStore)(e => e.started, o.default), S = s.useMemo(() => l.map(e => ({
    value: e.id,
    label: e.name
  })), [l]), {
    enableApplication: p
  } = (0, g.useClanPrePilotApplicationExperiment)("discovery"), I = s.useCallback(() => {
    (0, O.setClanDiscoveryMode)(O.ClanDiscoveryMode.DISCOVERY)
  }, []), T = s.useCallback(() => {
    (0, O.setClanDiscoveryMode)(O.ClanDiscoveryMode.GET_STARTED), C(O.ClanDiscoveryUserScreens.USER_ONBOARDING)
  }, [C]), A = !m && p, N = l.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [_ ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.Heading, {
        className: D.upsellTitle,
        variant: "heading-xxl/semibold",
        children: x.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
      }), (0, a.jsx)(h.Heading, {
        className: D.upsellSubtitle,
        variant: "heading-md/medium",
        color: "header-secondary",
        children: x.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(h.Heading, {
        className: D.upsellTitle,
        variant: "heading-xxl/semibold",
        children: [x.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), x.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
      }), (0, a.jsxs)("div", {
        className: D.upsellDetails,
        children: [(0, a.jsx)(k, {
          icon: d.CompassIcon,
          text: x.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
        }), (0, a.jsx)(k, {
          icon: u.CircleCheckIcon,
          text: x.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
        }), (0, a.jsx)(k, {
          icon: c.GroupIcon,
          text: x.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: D.upsellButton,
      children: [N && (0, a.jsx)(h.SearchableSelect, {
        className: D.upsellSelect,
        value: t,
        options: S,
        onChange: n
      }), !_ && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.FILLED,
        size: h.ButtonSizes.LARGE,
        color: h.ButtonColors.BRAND,
        className: i()(D.reserveButton, {
          [D.buttonWithSelect]: N
        }),
        onClick: r,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: f
        })
      }), N && A && (0, a.jsx)("div", {
        className: D.spacer,
        children: "\xb7"
      }), A && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.OUTLINED,
        color: h.ButtonColors.PRIMARY,
        className: D.browseButton,
        onClick: T,
        children: x.default.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
      })]
    }), m && (0, a.jsx)("div", {
      className: D.upsellStaticHeader,
      children: (0, a.jsx)("div", {
        className: D.upsellBackButton,
        children: (0, a.jsx)(h.Clickable, {
          onClick: I,
          "aria-label": x.default.Messages.BACK,
          children: (0, a.jsx)(E.ArrowLargeLeftIcon, {})
        })
      })
    })]
  })
}
t.default = s.memo(function(e) {
  let {
    eligibleGuilds: t,
    eligibleGuildsIncludingConverted: n,
    selectedGame: l
  } = e, i = 0 === t.length, [o, u] = s.useState(() => {
    let e = new Set(I.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return i ? n[0].id : t[0].id
  });
  s.useEffect(() => {
    !i && (0, p.trackClanAdminInviteViewed)({
      guildId: o,
      location: m.default.CLAN_DISCOVERY
    })
  }, [i, o]);
  let d = (0, f.useStateFromStores)([N.default], () => N.default.getGuild(o)),
    c = (0, f.useStateFromStores)([I.default], () => null != o ? I.default.getStateForGuild(o).progress : null),
    E = (0, L.useDiscoveryGameApplicationId)({
      selectedGame: l
    }),
    {
      defaultGameId: b
    } = (0, g.useClanPrepilotExperimentForGuild)({
      guild: d,
      location: "ClanDiscoveryAdminUpsell",
      includeConverted: !1
    });
  s.useEffect(() => {
    let e = b === P.VALORANT_ID ? O.ClanDiscoveryGame.VALORANT : b === P.GENSHIN_ID ? O.ClanDiscoveryGame.GENSHIN : void 0;
    null != e && E !== b && O.useClanDiscoveryUIStore.getState().setGame(e)
  }, [b, E]);
  let U = s.useCallback(() => {
      !i && ((0, p.trackClanAdminInviteClicked)({
        guildId: o,
        location: m.default.CLAN_DISCOVERY
      }), (0, v.openFullScreenLayer)(e => {
        let {
          closeLayer: t
        } = e;
        return (0, a.jsx)(A.default, {
          onClose: t,
          guildId: o
        })
      }, {
        layerKey: P.CLAN_SETUP_MODAL_LAYER_KEY
      }))
    }, [i, o]),
    k = (0, f.useStateFromStores)([C.default], () => C.default.useReducedMotion),
    B = (0, M.useFakeDiscoveryClanForGuild)({
      guild: d,
      selectedGame: l
    }),
    F = (0, y.useFakeDiscoveryUpsellClans)(E),
    [H, V] = s.useState(!0),
    Y = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      delay: 400,
      config: {
        duration: 0
      }
    }),
    W = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(324px, -56px) rotate(8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 400
    }),
    K = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(176px, -24px) rotate(4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 350
    }),
    z = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-176px, -24px) rotate(-4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 350
    }),
    q = (0, r.useSpring)({
      from: k ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-324px, -56px) rotate(-8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 400
    }),
    Q = (0, r.useSpring)({
      from: k ? {
        transform: "scale(1)",
        opacity: 0
      } : {
        transform: "scale(0.9)",
        opacity: 0
      },
      to: {
        transform: "scale(1)",
        opacity: 1
      },
      config: j,
      delay: 200
    }),
    Z = (0, r.useSpring)({
      from: k ? {
        transform: "translateY(0px)"
      } : {
        transform: "translateY(240px)"
      },
      to: {
        transform: "translateY(0px)"
      },
      config: j,
      delay: 250,
      onRest: () => V(!1)
    }),
    X = s.useMemo(() => null == c ? x.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : x.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [c]),
    J = s.useCallback(async () => {
      await (0, S.joinWumpusFeedbackSquad)(o), _.default.transitionToGuildSync("936317138904440892")
    }, [o]),
    $ = s.useCallback(e => (0, a.jsx)(h.Clickable, {
      tag: "span",
      className: D.joinWFSLink,
      onClick: J,
      "aria-label": x.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
      children: (0, a.jsx)(h.Text, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-brand",
        children: e
      })
    }), [J]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: D.cardsContainer,
      children: [(0, a.jsx)(r.animated.div, {
        className: D.clanCardOuterContainer,
        style: {
          ...W,
          ...Y
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: F[0],
          className: D.clanCardOuterLeft
        })
      }), (0, a.jsx)(r.animated.div, {
        className: D.clanCardInnerContainer,
        style: {
          ...K,
          ...Y
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: F[1],
          className: D.clanCardInnerLeft
        })
      }), null != B && (0, a.jsx)(r.animated.div, {
        className: D.clanEnvelope,
        style: Q,
        children: (0, a.jsx)(G, {
          children: (0, a.jsx)("div", {
            className: D.clanCardCenterContainer,
            style: {
              overflow: H ? "hidden" : "visible"
            },
            children: (0, a.jsx)(r.animated.div, {
              style: Z,
              children: (0, a.jsx)(R.ClanDiscoveryCardView, {
                clan: B,
                className: D.clanCardCenter,
                bannerUrl: (0, T.getClanBannerUrl)(F[4].id, F[4].bannerHash)
              })
            })
          })
        })
      }), (0, a.jsx)(r.animated.div, {
        className: D.clanCardInnerContainer,
        style: {
          ...z,
          ...Y
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: F[2],
          className: D.clanCardInnerRight
        })
      }), (0, a.jsx)(r.animated.div, {
        className: D.clanCardOuterContainer,
        style: {
          ...q,
          ...Y
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: F[3],
          className: D.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: D.upsellCtaContainer,
      children: (0, a.jsx)(w, {
        selectedGuildId: o,
        setSelectedGuildId: u,
        eligibleGuilds: t,
        onButtonClick: U,
        buttonText: X,
        hasCompletedUpsell: i
      })
    }), (0, a.jsx)("div", {
      className: D.joinWFSContainer,
      children: (0, a.jsx)("div", {
        className: D.joinWFS,
        children: (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
            wfsHook: $
          })
        })
      })
    })]
  })
})