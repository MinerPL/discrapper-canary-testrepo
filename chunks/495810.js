"use strict";
a.r(e), a.d(e, {
  default: function() {
    return L7
  }
}), a("47120"), a("757143"), a("653041");
var C, t, s, l, i = a("735250"),
  n = a("470079"),
  H = a("120356"),
  r = a.n(H),
  V = a("723592"),
  d = a("613828"),
  c = a("990547"),
  o = a("442837"),
  M = a("477690"),
  u = a("481060"),
  E = a("150063"),
  I = a("393238"),
  _ = a("110924"),
  T = a("315263"),
  Z = a("607070"),
  f = a("100527"),
  m = a("906732"),
  h = a("213609"),
  D = a("216547"),
  N = a("812206"),
  A = a("706454"),
  p = a("210887"),
  g = a("592125"),
  x = a("430824"),
  S = a("771845"),
  v = a("594174"),
  j = a("517802"),
  R = a("471731"),
  b = a("692437"),
  B = a("502568"),
  O = a("602623"),
  w = a("810090"),
  k = a("626135"),
  P = a("823379"),
  y = a("5192"),
  W = a("624138"),
  F = a("792125"),
  G = a("712092"),
  U = a("507885"),
  Y = a("566620"),
  K = a("317381"),
  X = a("379146"),
  J = a("273003"),
  z = a("754332"),
  Q = a("140863"),
  q = a("969345"),
  $ = a("257968"),
  LL = a("127255"),
  Le = a("361213"),
  La = a("542094"),
  LC = a("778569"),
  Lt = a("840000"),
  Ls = a("537789"),
  Ll = a("841547"),
  Li = a("239298"),
  Ln = a("513202"),
  LH = a("701488"),
  Lr = a("981631"),
  LV = a("689938"),
  Ld = a("315623"),
  Lc = a("131454"),
  Lo = a("372065"),
  LM = a("376226"),
  Lu = a("785930"),
  LE = a("143824"),
  LI = a("848366"),
  L_ = a("392381"),
  LT = a("176890"),
  LZ = a("997074"),
  Lf = a("901924"),
  Lm = a("448096"),
  Lh = a("286557"),
  LD = a("358176"),
  LN = a("610924"),
  LA = a("326822"),
  Lp = a("797956"),
  Lg = a("612852"),
  Lx = a("369827");
let LS = "celebrate-with-us",
  Lv = "".concat(Lr.Routes.ACTIVITIES, "#").concat(LS),
  Lj = "https://support.discord.com/hc/en-us/articles/13771635451415-Share-Nitro-Trials-with-a-Friend-FAQ",
  LR = "https://discord.gg/discord-townhall",
  Lb = "https://discordmerch.com/dxcprod";

function LB() {
  var L, e;
  let {
    width: a,
    ref: C
  } = (0, I.default)(), t = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), s = (0, o.useStateFromStores)([U.default], () => U.default.isAcknowledged(LH.WhatsNewSection.FREE)), [l, H] = n.useState(!1), [c, M] = n.useState(!1), [_, T] = n.useState(!1), h = (0, d.useHistory)(), D = (0, d.useLocation)(), N = (0, o.useStateFromStores)([p.default], () => p.default.getState().theme), [A] = n.useState((0, $.getActivitiesWhatsNewCount)(U.default) > 0), {
    analyticsLocations: g
  } = (0, m.default)([...null !== (e = null == D ? void 0 : null === (L = D.state) || void 0 === L ? void 0 : L.analyticsLocations) && void 0 !== e ? e : [], f.default.ACTIVITIES_PAGE]), x = n.useRef(new Date);
  return n.useEffect(() => {
    setTimeout(() => {
      !s && G.markSectionAcknowledged(LH.WhatsNewSection.FREE)
    }, 500)
  }, [s]), n.useEffect(() => {
    !s && (setTimeout(() => {
      H(!0)
    }, 1300), setTimeout(() => {
      M(!0)
    }, 1500), setTimeout(() => {
      T(!0)
    }, 1700))
  }, [s]), n.useEffect(() => ((0, E.setHomeLink)(Lr.Routes.ACTIVITIES), A && !g.includes(f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT) && h.replace(Lr.Routes.ACTIVITIES, {
    analyticsLocations: [...g, f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT]
  }), () => {
    let L = x.current,
      e = Math.ceil((new Date().getTime() - L.getTime()) / 1e3);
    k.default.track(Lr.AnalyticEvents.ROUTE_UNMOUNT, {
      route: "/activities",
      page_view_duration_s: e
    })
  }), [g, h, A]), (0, i.jsx)(m.AnalyticsLocationProvider, {
    value: g,
    children: (0, i.jsxs)("div", {
      className: Ld.outerContainer,
      children: [(0, i.jsxs)(B.default, {
        children: [(0, i.jsx)(j.default, {
          className: r()(Ld.activitiesBirthdayIcon, {
            [Ld.activitiesBirthdayIconLight]: "light" === N
          })
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE
        })]
      }), (0, i.jsx)(u.Scroller, {
        className: Ld.scroller,
        children: (0, i.jsxs)("div", {
          className: Ld.innerContainer,
          children: [(0, i.jsxs)("div", {
            className: Ld.heroFlipper,
            children: [(0, i.jsxs)("div", {
              className: r()(Ld.heroFlipperInner, {
                [Ld.heroFlipped]: s || t
              }),
              children: [(0, i.jsx)("img", {
                src: "light" === N ? Lc : Lo,
                className: r()(Ld.hero),
                alt: LV.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
              }), (0, i.jsx)("div", {
                className: r()(Ld.heroFlipperBack, {
                  [Ld.heroFlipperBackLightMode]: "light" === N
                }),
                children: (0, i.jsx)(LO, {
                  containerRef: C,
                  width: a
                })
              })]
            }), !t && l ? (0, i.jsx)("div", {
              className: Ld.heroConfetti01Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LW
              })
            }) : null, !t && c ? (0, i.jsx)("div", {
              className: Ld.heroConfetti02Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LW
              })
            }) : null, !t && _ ? (0, i.jsx)("div", {
              className: Ld.heroConfetti03Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LW
              })
            }) : null]
          }), null != a && a < 660 ? (0, i.jsx)(w.default, {
            autoPlay: !0,
            muted: !0,
            src: LM,
            loop: !0,
            className: Ld.freeForeverBreakpointVideo,
            controls: t
          }) : null, (0, i.jsx)(Lw, {}), (0, i.jsx)(LF, {}), (0, i.jsx)(Lz, {}), (0, i.jsx)(Lq, {}), (0, i.jsx)(L6, {}), (0, i.jsx)(L4, {})]
        })
      })]
    })
  })
}

function LO(L) {
  let {
    width: e,
    containerRef: a
  } = L, C = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion);
  return (0, i.jsxs)("div", {
    className: Ld.freeForeverContainer,
    ref: a,
    children: [(0, i.jsx)("div", {
      className: Ld.freeForeverLeft,
      children: (0, i.jsxs)("div", {
        className: Ld.freeForeverText,
        children: [(0, i.jsx)(R.default, {
          className: r()(Ld.freeForeverLogo, {
            [Ld.freeForeverLogoMedium]: null != e && e < 1e3,
            [Ld.freeForeverLogoSmall]: null != e && e < 480
          })
        }), (0, i.jsx)(u.Heading, {
          variant: null == e || e < 480 ? "heading-sm/bold" : e < 1e3 ? "display-sm" : "display-md",
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_TITLE
        }), (0, i.jsx)(u.Text, {
          variant: null == e || e < 480 ? "text-sm/medium" : e < 1e3 ? "text-md/medium" : "text-lg/medium",
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_DESCRIPTION
        })]
      })
    }), null != e && e > 660 ? (0, i.jsx)("div", {
      className: Ld.freeForeverRight,
      children: (0, i.jsx)(w.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        src: LM,
        poster: Lu,
        className: Ld.freeForeverVideo,
        controls: C
      })
    }) : null]
  })
}

function Lw() {
  return (0, i.jsxs)("div", {
    className: Ld.birthdayExplanationWrapper,
    children: [(0, i.jsx)("div", {
      className: Ld.birthdayBalloonsContainer,
      children: (0, i.jsx)(Lt.Balloons, {
        className: r()(Ld.birthdayExplanationBalloonsLeft, Ld.balloon)
      })
    }), (0, i.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: Ld.birthdayExplanationText,
      children: LV.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_HERO_TEXT_WITH_2_LINKS.format({
        linkToBdayBlogPost: "https://dis.gd/birthday",
        linkToSurprises: L => (0, i.jsxs)(u.Anchor, {
          href: Lv,
          children: [L, (0, i.jsx)("img", {
            src: Lm,
            className: Ld.birthdayExplanationNitroIcon,
            alt: LV.default.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
          })]
        })
      })
    }), (0, i.jsx)("div", {
      className: Ld.birthdayBalloonsContainer,
      children: (0, i.jsx)(Lt.Balloons, {
        className: r()(Ld.birthdayExplanationBalloonsRight, Ld.balloon),
        flipX: !0
      })
    })]
  })
}
let Lk = "whats-new",
  LP = (0, W.cssValueToNumber)(M.default.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH),
  Ly = (0, W.cssValueToNumber)(M.default.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN),
  LW = [u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_BLUE.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_GREEN.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PINK.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PURPLE.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_YELLOW.css];

function LF() {
  let {
    enabled: L
  } = X.ExperimentBirthdayActivitiesGdmTile.useExperiment({
    location: "d72ecf_2"
  }), {
    enabled: e
  } = J.ExperimentBirthdayActivitiesJamspaceTile.useExperiment({
    location: "d72ecf_3"
  }), {
    enabled: a
  } = Q.ExperimentBirthdayActivitiesPuttPartyTile.useExperiment({
    location: "d72ecf_4"
  }), {
    enabled: C
  } = z.ExperimentBirthdayActivitiesPokerTile.useExperiment({
    location: "d72ecf_5"
  }), t = n.useMemo(() => {
    let t = [];
    return t.push({
      id: LH.WhatsNewSection.DISCORD_TURNS_8,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_DESCRIPTION
      }),
      imgUrl: LA,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_IMG_ALT,
      link: void 0,
      isAppLink: !1,
      cardImgUrl: LE,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: !0
    }), t.push({
      id: LH.WhatsNewSection.GDM_ACTIVITIES,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_DESCRIPTION
      }),
      imgUrl: LN,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_IMG_ALT,
      link: "https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord#h_01GSX5FCYNMF5PCGKNNA6XFW29",
      isAppLink: !1,
      cardImgUrl: LI,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: L
    }), t.push({
      id: LH.WhatsNewSection.PUTT_PARTY,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_DESCRIPTION
      }),
      imgUrl: Lx,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_IMG_ALT,
      link: Lr.Routes.ACTIVITY_DETAILS(LH.PUTT_PARTY_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: L_,
      revealDate: new Date("May 22, 2023 17:00:00"),
      enabled: a
    }), t.push({
      id: LH.WhatsNewSection.JAMSPACE,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_DESCRIPTION
      }),
      imgUrl: Lp,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_IMG_ALT,
      link: Lr.Routes.ACTIVITY_DETAILS(LH.JAM_SPACE_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: LT,
      revealDate: new Date("May 30, 2023 17:00:00"),
      enabled: e
    }), t.push({
      id: LH.WhatsNewSection.POKER,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_DESCRIPTION
      }),
      imgUrl: Lg,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_IMG_ALT,
      link: Lr.Routes.ACTIVITY_DETAILS(LH.POKER_NIGHT_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: LZ,
      revealDate: new Date("June 5, 2023 17:00:00"),
      enabled: C
    }), t
  }, [L, e, C, a]);
  return t.length <= 0 ? null : (0, i.jsx)("div", {
    className: Ld.whatsNew,
    children: (0, i.jsx)(D.default, {
      tileMargin: Ly,
      headerId: Lk,
      tileWidth: LP,
      header: LV.default.Messages.WHATS_NEW,
      headerContainerClassName: Ld.tileScrollerHeader,
      scrollContainerClassName: Ld.tileScrollerContainer,
      children: (0, i.jsx)("ul", {
        "aria-labelledby": Lk,
        className: Ld.whatsNewItemsContainer,
        children: t.map(L => (0, i.jsx)(LG, {
          ...L
        }, L.id))
      })
    })
  })
}

function LG(L) {
  let {
    imgUrl: e,
    imgAlt: a,
    title: C,
    content: t,
    link: s,
    isAppLink: l,
    id: H,
    cardImgUrl: d,
    revealDate: c,
    enabled: M
  } = L, E = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), I = (0, o.useStateFromStores)([A.default], () => A.default.locale), {
    analyticsLocations: T
  } = (0, m.default)(f.default.ACTIVITIES_PAGE_WHATS_NEW_TILE), [h, D] = n.useState(!1), N = (0, _.default)(h), p = (0, o.useStateFromStores)([U.default], () => {
    if (!M) return 0;
    let L = U.default.isOpened(H);
    return H === LH.WhatsNewSection.JAMSPACE ? L || U.default.isOpened(LH.WhatsNewSection.JAMSPACE_OLD) ? 2 : 1 : L ? 2 : 1
  }, [M, H]);
  n.useEffect(() => {
    M && G.markSectionAcknowledged(H)
  }, [M, H]);
  let g = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/semibold",
      className: Ld.whatsNewDate,
      children: new Intl.DateTimeFormat(I, {
        dateStyle: "long"
      }).format(c)
    }), (0, i.jsxs)("div", {
      className: Ld.whatsNewImageContainer,
      children: [(0, i.jsx)("img", {
        src: e,
        className: Ld.whatsNewImage,
        alt: a
      }), (0, i.jsx)(u.Text, {
        variant: "eyebrow",
        className: Ld.newTag,
        children: LV.default.Messages.NEW
      })]
    }), (0, i.jsxs)("div", {
      className: Ld.whatsNewTextArea,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-md/bold",
        className: Ld.whatsNewDetailsHeader,
        children: C
      }), t]
    })]
  });
  return (0, i.jsx)(m.AnalyticsLocationProvider, {
    value: T,
    children: (0, i.jsxs)("div", {
      className: Ld.flipCardOuter,
      children: [E || 2 !== p || h || !N ? null : (0, i.jsx)("div", {
        className: Ld.flipCardConfetti,
        children: (0, i.jsx)(V.default, {
          colors: LW
        })
      }), (0, i.jsx)(LU, {
        openState: p,
        link: s,
        isAppLink: l,
        onOpen: () => {
          D(!0), G.markSectionOpened(H), k.default.track(Lr.AnalyticEvents.ACTIVITIES_WHATS_NEW_OPENED, {
            section_id: H
          }), setTimeout(() => {
            D(!1)
          }, 500)
        },
        onCardContentClick: () => {
          k.default.track(Lr.AnalyticEvents.ACTIVITIES_WHATS_NEW_CLICKED, {
            section_id: H
          })
        }
      }), (0, i.jsxs)("div", {
        className: r()(Ld.flipCardInner, {
          [Ld.flipCardInnerFlipped]: 2 === p,
          [Ld.flipCardOpening]: h && !E,
          [Ld.flipCardInnerReducedMotion]: E
        }),
        children: [(0, i.jsx)("div", {
          className: Ld.flipCardOpened,
          children: (() => {
            switch (p) {
              case 0:
              case 1:
                return (0, i.jsx)(u.Text, {
                  variant: "text-md/medium",
                  children: "( ͡\xb0 ͜ʖ ͡\xb0) https://discord.com/careers"
                });
              case 2:
                return (0, i.jsx)("div", {
                  className: Ld.whatsNewItemContainer,
                  children: g
                });
              default:
                return null
            }
          })()
        }), (0, i.jsxs)("div", {
          className: Ld.flipCardClosed,
          children: [(0, i.jsx)("img", {
            src: d,
            className: Ld.flipCardClosedImg,
            alt: LV.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_CARD_ALT
          }), (() => {
            switch (p) {
              case 0:
                return (0, i.jsx)(u.Text, {
                  variant: "text-sm/semibold",
                  className: Ld.flipCardClosedText,
                  children: LV.default.Messages.EMBEDDED_ACTIVITIES_CLICK_TO_REVEAL_DATE.format({
                    revealDate: new Intl.DateTimeFormat(I).format(c)
                  })
                });
              case 1:
                return (0, i.jsx)(u.Text, {
                  variant: "text-sm/semibold",
                  className: Ld.flipCardText,
                  children: LV.default.Messages.EMBEDDED_ACTIVITIES_REVEAL_THIS_WEEKS_DROP.format({
                    revealDate: new Intl.DateTimeFormat(I).format(c)
                  })
                });
              default:
                return null
            }
          })()]
        })]
      })]
    })
  })
}

function LU(L) {
  let {
    openState: e,
    link: a,
    isAppLink: C,
    onOpen: t,
    onCardContentClick: s
  } = L, {
    analyticsLocations: l
  } = (0, m.default)(), n = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion);
  switch (e) {
    case 0:
      return (0, i.jsx)("div", {
        className: r()(Ld.clickableContainer, Ld.noPointer, {
          [Ld.clickableContainerReducedMotion]: n
        })
      });
    case 1:
      return (0, i.jsx)(u.Clickable, {
        "aria-label": LV.default.Messages.EMBEDDED_ACTIVITIES_OPEN_BIRTHDAY_SURPRISE,
        className: r()(Ld.clickableContainer, {
          [Ld.clickableContainerReducedMotion]: n
        }),
        onClick: t
      });
    case 2:
      if (null == a) return (0, i.jsx)("div", {
        className: r()(Ld.clickableContainer, Ld.noPointer, {
          [Ld.clickableContainerReducedMotion]: n
        })
      });
      if (C) return (0, i.jsx)(Li.ClickableLink, {
        className: r()(Ld.clickableContainer, {
          [Ld.clickableContainerReducedMotion]: n
        }),
        onClick: s,
        to: {
          pathname: a,
          state: {
            analyticsLocations: l
          }
        }
      });
      return (0, i.jsx)(u.Clickable, {
        tag: "a",
        href: a,
        target: "_blank",
        className: r()(Ld.clickableContainer, {
          [Ld.clickableContainerReducedMotion]: n
        }),
        onClick: s
      });
    default:
      return null
  }
}(s = C || (C = {}))[s.LOCKED = 0] = "LOCKED", s[s.UNLOCKED = 1] = "UNLOCKED", s[s.OPENED = 2] = "OPENED";
let LY = "happening-now",
  LK = (0, W.cssValueToNumber)(M.default.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH),
  LX = (0, W.cssValueToNumber)(M.default.ACTIVITIES_HOME_HAPPENING_NOW_GAP);

function LJ(L, e) {
  if (L.length !== e.length) return !1;
  for (let a = 0; a < L.length; a++)
    if (L[a].activityItem.application.id !== e[a].activityItem.application.id || L[a].channel.id !== e[a].channel.id || L[a].users.length !== e[a].users.length) return !1;
  return !0
}

function Lz() {
  let {
    analyticsLocations: L
  } = (0, m.default)(f.default.ACTIVITIES_HAPPENING_NOW), e = (0, o.useStateFromStores)([K.default, N.default, g.default, v.default, S.default], () => {
    let L = [],
      e = v.default.getCurrentUser();
    if (null == e) return L;
    let a = K.default.getShelfActivities(null),
      C = a.map(L => N.default.getApplication(L.application_id)).filter(P.isNotNullish);
    return S.default.getFlattenedGuildIds().forEach(t => {
      K.default.getEmbeddedActivitiesForGuild(t).forEach(t => {
        let s = g.default.getChannel(t.channelId);
        if (null == s || t.userIds.has(e.id)) return;
        let l = (0, q.default)({
            activityConfigs: a,
            applicationId: t.applicationId,
            applications: C
          }),
          i = Array.from(t.userIds).map(L => v.default.getUser(L)).filter(P.isNotNullish);
        null != l && L.push({
          activityItem: l,
          channel: s,
          users: i
        })
      })
    }), L
  }, [], LJ);
  return ((0, h.default)({
    type: c.ImpressionTypes.PANE,
    name: c.ImpressionNames.ACTIVITIES_HAPPENING_NOW,
    properties: {
      n_activities: e.length
    }
  }, {
    trackOnInitialLoad: !0
  }), e.length <= 0) ? null : (0, i.jsx)(m.AnalyticsLocationProvider, {
    value: L,
    children: (0, i.jsx)("div", {
      className: Ld.happeningNowContainer,
      children: (0, i.jsx)(D.default, {
        tileMargin: LX,
        headerId: LY,
        tileWidth: LK,
        header: LV.default.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_TITLE,
        subHeader: LV.default.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_DESCRIPTION,
        headerContainerClassName: Ld.tileScrollerHeader,
        scrollContainerClassName: Ld.tileScrollerContainer,
        children: (0, i.jsx)("ul", {
          "aria-labelledby": LY,
          className: Ld.whatsNewItemsContainer,
          children: e.map(L => {
            let {
              activityItem: e,
              channel: a,
              users: C
            } = L;
            return (0, i.jsx)(LQ, {
              activityItem: e,
              channel: a,
              users: C
            }, "".concat(a.id).concat(e.application.id))
          })
        })
      })
    })
  })
}

function LQ(L) {
  let {
    activityItem: e,
    channel: a,
    users: C
  } = L, t = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), {
    imageBackground: s,
    onActivityItemSelected: l
  } = (0, La.default)({
    activityItem: e,
    channel: a,
    guildId: a.guild_id,
    locationObject: {},
    embeddedActivitiesManager: Ln.default,
    backgroundResolution: 512
  }), n = y.default.getName(a.guild_id, a.id, null == C ? void 0 : C[0]);
  n = (0, W.truncateText)(n, 25);
  let H = (0, o.useStateFromStores)([x.default], () => {
    var L;
    return null === (L = x.default.getGuild(a.guild_id)) || void 0 === L ? void 0 : L.name
  });
  return (0, i.jsxs)(u.Clickable, {
    onClick: l,
    className: r()((0, F.getThemeClass)(Lr.ThemeTypes.DARK), Ld.happeningNowCard, {
      [Ld.happeningNowCardReducedMotion]: t
    }),
    children: [(0, i.jsx)("img", {
      src: s.url,
      alt: e.application.name,
      className: Ld.happeningNowCardImg
    }), (0, i.jsxs)("div", {
      className: Ld.happeningNowCardForeground,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/bold",
        children: e.application.name
      }), (0, i.jsx)(O.default, {
        guildId: a.guild_id,
        users: C,
        max: 4,
        className: Ld.happeningNowAvatars
      }), (0, i.jsx)(u.Text, {
        className: Ld.happeningNowAvatarNames,
        variant: "text-xs/normal",
        children: C.length > 1 ? LV.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
          username: n,
          count: C.length - 1
        }) : LV.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
          username: n
        })
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/medium",
        className: r()(Ld.happeningNowJoin, {
          [Ld.happeningNowJoinReducedMotion]: t
        }),
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }), null != H ? (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        className: Ld.happeningNowChannelAndGuildName,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
          channelName: (0, W.truncateText)(a.name, 25),
          serverName: (0, W.truncateText)(H, 25)
        })
      }) : null]
    })]
  })
}

function Lq() {
  let L = (0, LL.default)({
    guildId: null,
    channel: void 0
  });
  return n.useEffect(() => {
    (0, Y.fetchShelf)({
      guildId: null
    })
  }, []), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: Ld.activityGridHeader,
      children: (0, i.jsxs)("div", {
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          className: Ld.activityGridSubheader,
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES_SUBHEADER
        })]
      })
    }), (0, i.jsx)("div", {
      className: Ld.activityGrid,
      children: L.map(L => (0, i.jsx)(L$, {
        activityItem: L
      }, L.application.id))
    })]
  })
}

function L$(L) {
  var e;
  let {
    activityItem: a
  } = L, {
    analyticsLocations: C
  } = (0, m.default)(), t = (0, LC.default)({
    applicationId: a.application.id,
    size: 512
  }), s = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), l = (null === (e = a.application.embeddedActivityConfig) || void 0 === e ? void 0 : e.activity_preview_video_asset_id) != null ? (0, Le.default)(a.application.id, a.application.embeddedActivityConfig.activity_preview_video_asset_id) : null, [H, V] = n.useState(!1), [d, c] = n.useState(H);
  n.useEffect(() => {
    H && c(!0)
  }, [H]);
  let M = () => V(!0),
    E = () => V(!1),
    I = null == a.application.maxParticipants || -1 === a.application.maxParticipants ? LV.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : LV.default.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
      count: a.application.maxParticipants
    });
  return (0, i.jsxs)(Li.ClickableLink, {
    to: {
      pathname: Lr.Routes.ACTIVITY_DETAILS(a.application.id),
      state: {
        analyticsLocations: C
      }
    },
    className: r()(Ld.activityCard, {
      [Ld.activityCardReducedMotion]: s
    }),
    onMouseEnter: M,
    onFocus: M,
    onMouseLeave: E,
    onBlur: E,
    children: [(0, i.jsxs)("div", {
      className: Ld.activityCardImageContainer,
      children: [(0, i.jsx)("img", {
        src: t.url,
        alt: a.application.name,
        className: Ld.activityCardImage
      }), !s && null != l && d ? (0, i.jsx)("div", {
        className: r()(Ld.video, {
          [Ld.videoFadeOut]: !H
        }),
        onAnimationEnd: () => H ? null : c(!1),
        children: (0, i.jsx)(w.default, {
          className: Ld.video,
          src: l,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: Ld.activityCardDetails,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-xl/extrabold",
          children: a.application.name
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: Ld.activityCardParticipants,
          children: I
        })]
      }), a.application.tags.length > 0 ? (0, i.jsx)("div", {
        className: Ld.activityCardTagContainer,
        children: a.application.tags.slice(0, 3).map(L => (0, i.jsx)("div", {
          className: Ld.activityCardTag,
          children: (0, i.jsx)(u.Text, {
            variant: "text-xs/semibold",
            children: L
          })
        }, L))
      }) : null, (0, i.jsxs)("div", {
        className: r()(Ld.activityCardHoverHint, {
          [Ld.activityCardHoverHintReducedMotion]: s
        }),
        children: [(0, i.jsx)(u.Text, {
          variant: "text-sm/semibold",
          children: LV.default.Messages.LEARN_MORE
        }), (0, i.jsx)(b.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  })
}

function L6() {
  return (0, i.jsxs)("div", {
    className: Ld.celebrateContainer,
    id: LS,
    children: [(0, i.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      children: LV.default.Messages.EMBEDDED_ACTIVITIES_HOW_YOU_CAN_CELEBRATE_WITH_US
    }), (0, i.jsxs)("div", {
      className: Ld.celebrateCardGrid,
      children: [(0, i.jsxs)(u.Clickable, {
        tag: "a",
        href: Lj,
        target: "_blank",
        className: Ld.celebrateCardContainer,
        onClick: () => k.default.track(Lr.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
          section: "share_nitro"
        }),
        children: [(0, i.jsx)("img", {
          src: Lm,
          className: Ld.celebrateNitroIcon,
          alt: LV.default.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: Ld.celebrateCardHeader,
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_SHARE_THE_GIFT_OF_NITRO
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: Ld.celebrateCardSubheader,
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_SHARE_THREE_TRIALS.format({
            nitroLink: Lj
          })
        }), (0, i.jsx)("div", {
          className: Ld.celebrateCardFiller
        }), (0, i.jsx)("img", {
          className: Ld.celebrateCardImage,
          src: Lh,
          alt: LV.default.Messages.EMBEDDED_ACTIVITIES_SHARE_NITRO_TRIAL_ALT
        })]
      }), (0, i.jsxs)(u.Clickable, {
        tag: "a",
        href: Lb,
        target: "_blank",
        className: Ld.celebrateCardContainer,
        onClick: () => {
          k.default.track(Lr.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "disxcore_merch"
          })
        },
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: Ld.celebrateCardHeader,
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_EXCLUSIVE_BIRTHDAY_MERCH
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: Ld.celebrateCardSubheader,
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_VISIT_OUR_MERCH_STORE.format({
            merchStoreLink: Lb
          })
        }), (0, i.jsx)("div", {
          className: Ld.celebrateCardFiller
        }), (0, i.jsx)("img", {
          className: Ld.celebrateCardImage,
          src: Lf,
          alt: LV.default.Messages.EMBEDDED_ACTIVITIES_MERCH_STORE_ALT
        })]
      }), (0, i.jsxs)(u.Clickable, {
        tag: "a",
        href: LR,
        target: "_blank",
        className: Ld.celebrateCardContainer,
        onClick: L => {
          var e;
          k.default.track(Lr.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "town_hall"
          }), null === (e = (0, T.default)(LR)) || void 0 === e || e(L)
        },
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: Ld.celebrateCardHeader,
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_TITLE
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: Ld.celebrateCardSubheader,
          children: LV.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_DESCRIPTION.format({
            clickHandler: (0, T.default)(LR)
          })
        }), (0, i.jsx)("div", {
          className: Ld.celebrateCardFiller
        }), (0, i.jsx)("img", {
          className: Ld.celebrateCardImage,
          src: LD,
          alt: LV.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_IMG_ALT
        })]
      })]
    })]
  })
}

function L4() {
  return (0, i.jsx)("div", {
    className: Ld.kitBashContainer,
    children: (0, i.jsx)(Ll.BirthdayKitBash, {})
  })
}

function L7() {
  return (0, i.jsx)(Ls.BirthdayActivitiesRouteGuard, {
    children: (0, i.jsx)(LB, {})
  })
}(l = t || (t = {})).SHARE_NITRO = "share_nitro", l.DISXCORE_MERCH = "disxcore_merch", l.TOWN_HALL = "town_hall"