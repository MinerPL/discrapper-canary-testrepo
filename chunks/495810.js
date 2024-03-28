"use strict";
a.r(e), a.d(e, {
  default: function() {
    return L7
  }
}), a("47120"), a("757143"), a("653041");
var t, C, s, l, i = a("735250"),
  n = a("470079"),
  r = a("803997"),
  H = a.n(r),
  V = a("723592"),
  d = a("613828"),
  c = a("990547"),
  o = a("442837"),
  M = a("477690"),
  u = a("481060"),
  E = a("150063"),
  _ = a("393238"),
  I = a("110924"),
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
  P = a("626135"),
  k = a("823379"),
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
  Lt = a("778569"),
  LC = a("840000"),
  Ls = a("537789"),
  Ll = a("841547"),
  Li = a("239298"),
  Ln = a("513202"),
  Lr = a("701488"),
  LH = a("981631"),
  LV = a("689938"),
  Ld = a("648005"),
  Lc = a("131454"),
  Lo = a("372065"),
  LM = a("376226"),
  Lu = a("785930"),
  LE = a("143824"),
  L_ = a("848366"),
  LI = a("392381"),
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
  Lv = "".concat(LH.Routes.ACTIVITIES, "#").concat(LS),
  Lj = "https://support.discord.com/hc/en-us/articles/13771635451415-Share-Nitro-Trials-with-a-Friend-FAQ",
  LR = "https://discord.gg/discord-townhall",
  Lb = "https://discordmerch.com/dxcprod";

function LB() {
  var L, e;
  let {
    width: a,
    ref: t
  } = (0, _.default)(), C = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), s = (0, o.useStateFromStores)([U.default], () => U.default.isAcknowledged(Lr.WhatsNewSection.FREE)), [l, r] = n.useState(!1), [c, M] = n.useState(!1), [I, T] = n.useState(!1), h = (0, d.useHistory)(), D = (0, d.useLocation)(), N = (0, o.useStateFromStores)([p.default], () => p.default.getState().theme), [A] = n.useState((0, $.getActivitiesWhatsNewCount)(U.default) > 0), {
    analyticsLocations: g
  } = (0, m.default)([...null !== (e = null == D ? void 0 : null === (L = D.state) || void 0 === L ? void 0 : L.analyticsLocations) && void 0 !== e ? e : [], f.default.ACTIVITIES_PAGE]), x = n.useRef(new Date);
  return n.useEffect(() => {
    setTimeout(() => {
      !s && G.markSectionAcknowledged(Lr.WhatsNewSection.FREE)
    }, 500)
  }, [s]), n.useEffect(() => {
    !s && (setTimeout(() => {
      r(!0)
    }, 1300), setTimeout(() => {
      M(!0)
    }, 1500), setTimeout(() => {
      T(!0)
    }, 1700))
  }, [s]), n.useEffect(() => ((0, E.setHomeLink)(LH.Routes.ACTIVITIES), A && !g.includes(f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT) && h.replace(LH.Routes.ACTIVITIES, {
    analyticsLocations: [...g, f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT]
  }), () => {
    let L = x.current,
      e = Math.ceil((new Date().getTime() - L.getTime()) / 1e3);
    P.default.track(LH.AnalyticEvents.ROUTE_UNMOUNT, {
      route: "/activities",
      page_view_duration_s: e
    })
  }), [g, h, A]), (0, i.jsx)(m.AnalyticsLocationProvider, {
    value: g,
    children: (0, i.jsxs)("div", {
      className: Ld.outerContainer,
      children: [(0, i.jsxs)(B.default, {
        children: [(0, i.jsx)(j.default, {
          className: H()(Ld.activitiesBirthdayIcon, {
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
              className: H()(Ld.heroFlipperInner, {
                [Ld.heroFlipped]: s || C
              }),
              children: [(0, i.jsx)("img", {
                src: "light" === N ? Lc : Lo,
                className: H()(Ld.hero),
                alt: LV.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
              }), (0, i.jsx)("div", {
                className: H()(Ld.heroFlipperBack, {
                  [Ld.heroFlipperBackLightMode]: "light" === N
                }),
                children: (0, i.jsx)(LO, {
                  containerRef: t,
                  width: a
                })
              })]
            }), !C && l ? (0, i.jsx)("div", {
              className: Ld.heroConfetti01Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LW
              })
            }) : null, !C && c ? (0, i.jsx)("div", {
              className: Ld.heroConfetti02Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LW
              })
            }) : null, !C && I ? (0, i.jsx)("div", {
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
            controls: C
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
  } = L, t = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion);
  return (0, i.jsxs)("div", {
    className: Ld.freeForeverContainer,
    ref: a,
    children: [(0, i.jsx)("div", {
      className: Ld.freeForeverLeft,
      children: (0, i.jsxs)("div", {
        className: Ld.freeForeverText,
        children: [(0, i.jsx)(R.default, {
          className: H()(Ld.freeForeverLogo, {
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
        controls: t
      })
    }) : null]
  })
}

function Lw() {
  return (0, i.jsxs)("div", {
    className: Ld.birthdayExplanationWrapper,
    children: [(0, i.jsx)("div", {
      className: Ld.birthdayBalloonsContainer,
      children: (0, i.jsx)(LC.Balloons, {
        className: H()(Ld.birthdayExplanationBalloonsLeft, Ld.balloon)
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
      children: (0, i.jsx)(LC.Balloons, {
        className: H()(Ld.birthdayExplanationBalloonsRight, Ld.balloon),
        flipX: !0
      })
    })]
  })
}
let LP = "whats-new",
  Lk = (0, W.cssValueToNumber)(M.default.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH),
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
    enabled: t
  } = z.ExperimentBirthdayActivitiesPokerTile.useExperiment({
    location: "d72ecf_5"
  }), C = n.useMemo(() => {
    let C = [];
    return C.push({
      id: Lr.WhatsNewSection.DISCORD_TURNS_8,
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
    }), C.push({
      id: Lr.WhatsNewSection.GDM_ACTIVITIES,
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
      cardImgUrl: L_,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: L
    }), C.push({
      id: Lr.WhatsNewSection.PUTT_PARTY,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_DESCRIPTION
      }),
      imgUrl: Lx,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_IMG_ALT,
      link: LH.Routes.ACTIVITY_DETAILS(Lr.PUTT_PARTY_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: LI,
      revealDate: new Date("May 22, 2023 17:00:00"),
      enabled: a
    }), C.push({
      id: Lr.WhatsNewSection.JAMSPACE,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_DESCRIPTION
      }),
      imgUrl: Lp,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_IMG_ALT,
      link: LH.Routes.ACTIVITY_DETAILS(Lr.JAM_SPACE_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: LT,
      revealDate: new Date("May 30, 2023 17:00:00"),
      enabled: e
    }), C.push({
      id: Lr.WhatsNewSection.POKER,
      title: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Ld.whatsNewDescription,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_DESCRIPTION
      }),
      imgUrl: Lg,
      imgAlt: LV.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_IMG_ALT,
      link: LH.Routes.ACTIVITY_DETAILS(Lr.POKER_NIGHT_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: LZ,
      revealDate: new Date("June 5, 2023 17:00:00"),
      enabled: t
    }), C
  }, [L, e, t, a]);
  return C.length <= 0 ? null : (0, i.jsx)("div", {
    className: Ld.whatsNew,
    children: (0, i.jsx)(D.default, {
      tileMargin: Ly,
      headerId: LP,
      tileWidth: Lk,
      header: LV.default.Messages.WHATS_NEW,
      headerContainerClassName: Ld.tileScrollerHeader,
      scrollContainerClassName: Ld.tileScrollerContainer,
      children: (0, i.jsx)("ul", {
        "aria-labelledby": LP,
        className: Ld.whatsNewItemsContainer,
        children: C.map(L => (0, i.jsx)(LG, {
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
    title: t,
    content: C,
    link: s,
    isAppLink: l,
    id: r,
    cardImgUrl: d,
    revealDate: c,
    enabled: M
  } = L, E = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), _ = (0, o.useStateFromStores)([A.default], () => A.default.locale), {
    analyticsLocations: T
  } = (0, m.default)(f.default.ACTIVITIES_PAGE_WHATS_NEW_TILE), [h, D] = n.useState(!1), N = (0, I.default)(h), p = (0, o.useStateFromStores)([U.default], () => {
    if (!M) return 0;
    let L = U.default.isOpened(r);
    return r === Lr.WhatsNewSection.JAMSPACE ? L || U.default.isOpened(Lr.WhatsNewSection.JAMSPACE_OLD) ? 2 : 1 : L ? 2 : 1
  }, [M, r]);
  n.useEffect(() => {
    M && G.markSectionAcknowledged(r)
  }, [M, r]);
  let g = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/semibold",
      className: Ld.whatsNewDate,
      children: new Intl.DateTimeFormat(_, {
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
        children: t
      }), C]
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
          D(!0), G.markSectionOpened(r), P.default.track(LH.AnalyticEvents.ACTIVITIES_WHATS_NEW_OPENED, {
            section_id: r
          }), setTimeout(() => {
            D(!1)
          }, 500)
        },
        onCardContentClick: () => {
          P.default.track(LH.AnalyticEvents.ACTIVITIES_WHATS_NEW_CLICKED, {
            section_id: r
          })
        }
      }), (0, i.jsxs)("div", {
        className: H()(Ld.flipCardInner, {
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
                    revealDate: new Intl.DateTimeFormat(_).format(c)
                  })
                });
              case 1:
                return (0, i.jsx)(u.Text, {
                  variant: "text-sm/semibold",
                  className: Ld.flipCardText,
                  children: LV.default.Messages.EMBEDDED_ACTIVITIES_REVEAL_THIS_WEEKS_DROP.format({
                    revealDate: new Intl.DateTimeFormat(_).format(c)
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
    isAppLink: t,
    onOpen: C,
    onCardContentClick: s
  } = L, {
    analyticsLocations: l
  } = (0, m.default)(), n = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion);
  switch (e) {
    case 0:
      return (0, i.jsx)("div", {
        className: H()(Ld.clickableContainer, Ld.noPointer, {
          [Ld.clickableContainerReducedMotion]: n
        })
      });
    case 1:
      return (0, i.jsx)(u.Clickable, {
        "aria-label": LV.default.Messages.EMBEDDED_ACTIVITIES_OPEN_BIRTHDAY_SURPRISE,
        className: H()(Ld.clickableContainer, {
          [Ld.clickableContainerReducedMotion]: n
        }),
        onClick: C
      });
    case 2:
      if (null == a) return (0, i.jsx)("div", {
        className: H()(Ld.clickableContainer, Ld.noPointer, {
          [Ld.clickableContainerReducedMotion]: n
        })
      });
      if (t) return (0, i.jsx)(Li.ClickableLink, {
        className: H()(Ld.clickableContainer, {
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
        className: H()(Ld.clickableContainer, {
          [Ld.clickableContainerReducedMotion]: n
        }),
        onClick: s
      });
    default:
      return null
  }
}(s = t || (t = {}))[s.LOCKED = 0] = "LOCKED", s[s.UNLOCKED = 1] = "UNLOCKED", s[s.OPENED = 2] = "OPENED";
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
      t = a.map(L => N.default.getApplication(L.application_id)).filter(k.isNotNullish);
    return S.default.getFlattenedGuildIds().forEach(C => {
      K.default.getEmbeddedActivitiesForGuild(C).forEach(C => {
        let s = g.default.getChannel(C.channelId);
        if (null == s || C.userIds.has(e.id)) return;
        let l = (0, q.default)({
            activityConfigs: a,
            applicationId: C.applicationId,
            applications: t
          }),
          i = Array.from(C.userIds).map(L => v.default.getUser(L)).filter(k.isNotNullish);
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
              users: t
            } = L;
            return (0, i.jsx)(LQ, {
              activityItem: e,
              channel: a,
              users: t
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
    users: t
  } = L, C = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), {
    imageBackground: s,
    onActivityItemSelected: l
  } = (0, La.default)({
    activityItem: e,
    channel: a,
    guildId: a.guild_id,
    locationObject: {},
    embeddedActivitiesManager: Ln.default,
    backgroundResolution: 512
  }), n = y.default.getName(a.guild_id, a.id, null == t ? void 0 : t[0]);
  n = (0, W.truncateText)(n, 25);
  let r = (0, o.useStateFromStores)([x.default], () => {
    var L;
    return null === (L = x.default.getGuild(a.guild_id)) || void 0 === L ? void 0 : L.name
  });
  return (0, i.jsxs)(u.Clickable, {
    onClick: l,
    className: H()((0, F.getThemeClass)(LH.ThemeTypes.DARK), Ld.happeningNowCard, {
      [Ld.happeningNowCardReducedMotion]: C
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
        users: t,
        max: 4,
        className: Ld.happeningNowAvatars
      }), (0, i.jsx)(u.Text, {
        className: Ld.happeningNowAvatarNames,
        variant: "text-xs/normal",
        children: t.length > 1 ? LV.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
          username: n,
          count: t.length - 1
        }) : LV.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
          username: n
        })
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/medium",
        className: H()(Ld.happeningNowJoin, {
          [Ld.happeningNowJoinReducedMotion]: C
        }),
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }), null != r ? (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        className: Ld.happeningNowChannelAndGuildName,
        children: LV.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
          channelName: (0, W.truncateText)(a.name, 25),
          serverName: (0, W.truncateText)(r, 25)
        })
      }) : null]
    })]
  })
}

function Lq() {
  let L = (0, LL.default)({
    guildId: null
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
    analyticsLocations: t
  } = (0, m.default)(), C = (0, Lt.default)({
    applicationId: a.application.id,
    size: 512
  }), s = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), l = (null === (e = a.application.embeddedActivityConfig) || void 0 === e ? void 0 : e.activity_preview_video_asset_id) != null ? (0, Le.default)(a.application.id, a.application.embeddedActivityConfig.activity_preview_video_asset_id) : null, r = (0, o.useStateFromStoresArray)([K.default, v.default], () => K.default.getUsersHavePlayedByApp(a.application.id).filter(L => {
    var e;
    return (null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) !== L
  }).map(L => v.default.getUser(L)).filter(k.isNotNullish), [a.application.id]), V = null != r[0] ? (0, W.truncateText)(y.default.getName(null, null, r[0]), 25) : null, d = null;
  null != V && r.length > 1 ? d = LV.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN_AND_MORE.format({
    username1: V,
    extras: r.length - 1
  }) : null != V && (d = LV.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN.format({
    username1: V
  }));
  let [c, M] = n.useState(!1), [E, _] = n.useState(c);
  n.useEffect(() => {
    c && _(!0)
  }, [c]);
  let I = () => M(!0),
    T = () => M(!1),
    f = null == a.application.maxParticipants || -1 === a.application.maxParticipants ? LV.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : LV.default.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
      count: a.application.maxParticipants
    });
  return (0, i.jsxs)(Li.ClickableLink, {
    to: {
      pathname: LH.Routes.ACTIVITY_DETAILS(a.application.id),
      state: {
        analyticsLocations: t
      }
    },
    className: H()(Ld.activityCard, {
      [Ld.activityCardReducedMotion]: s
    }),
    onMouseEnter: I,
    onFocus: I,
    onMouseLeave: T,
    onBlur: T,
    children: [(0, i.jsxs)("div", {
      className: Ld.activityCardImageContainer,
      children: [(0, i.jsx)("img", {
        src: C.url,
        alt: a.application.name,
        className: Ld.activityCardImage
      }), !s && null != l && E ? (0, i.jsx)("div", {
        className: H()(Ld.video, {
          [Ld.videoFadeOut]: !c
        }),
        onAnimationEnd: () => c ? null : _(!1),
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
          children: f
        })]
      }), r.length > 0 ? (0, i.jsx)("div", {
        className: Ld.activityCardSocialProofContainer,
        children: (0, i.jsxs)("div", {
          className: Ld.activityCardUsersHavePlayedContainer,
          children: [(0, i.jsx)(O.default, {
            users: r,
            guildId: void 0,
            max: 4
          }), null != d ? (0, i.jsx)(u.Text, {
            variant: "text-sm/medium",
            className: Ld.activityCardUsersHavePlayedText,
            children: d
          }) : null]
        })
      }) : (0, i.jsx)(i.Fragment, {
        children: a.application.tags.length > 0 ? (0, i.jsx)("div", {
          className: Ld.activityCardTagContainer,
          children: a.application.tags.slice(0, 3).map(L => (0, i.jsx)("div", {
            className: Ld.activityCardTag,
            children: (0, i.jsx)(u.Text, {
              variant: "text-xs/semibold",
              children: L
            })
          }, L))
        }) : null
      }), (0, i.jsxs)("div", {
        className: H()(Ld.activityCardHoverHint, {
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
        onClick: () => P.default.track(LH.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
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
          P.default.track(LH.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
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
          P.default.track(LH.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
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
}(l = C || (C = {})).SHARE_NITRO = "share_nitro", l.DISXCORE_MERCH = "disxcore_merch", l.TOWN_HALL = "town_hall"