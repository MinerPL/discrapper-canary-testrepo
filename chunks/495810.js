"use strict";
t.r(L), t.d(L, {
  default: function() {
    return e7
  }
}), t("47120"), t("757143"), t("653041");
var a, C, s, i, l = t("735250"),
  n = t("470079"),
  r = t("120356"),
  H = t.n(r),
  d = t("716"),
  V = t("613828"),
  c = t("990547"),
  o = t("442837"),
  M = t("477690"),
  u = t("481060"),
  E = t("150063"),
  I = t("393238"),
  _ = t("110924"),
  Z = t("315263"),
  T = t("607070"),
  f = t("100527"),
  h = t("906732"),
  m = t("213609"),
  p = t("216547"),
  D = t("812206"),
  x = t("706454"),
  N = t("210887"),
  g = t("592125"),
  A = t("430824"),
  S = t("771845"),
  v = t("594174"),
  j = t("517802"),
  R = t("471731"),
  b = t("692437"),
  w = t("502568"),
  O = t("602623"),
  B = t("810090"),
  k = t("626135"),
  P = t("823379"),
  W = t("5192"),
  y = t("624138"),
  F = t("792125"),
  G = t("712092"),
  U = t("507885"),
  Y = t("566620"),
  K = t("317381"),
  X = t("379146"),
  J = t("273003"),
  z = t("754332"),
  Q = t("140863"),
  q = t("969345"),
  $ = t("257968"),
  ee = t("127255"),
  eL = t("361213"),
  et = t("542094"),
  ea = t("778569"),
  eC = t("840000"),
  es = t("537789"),
  ei = t("841547"),
  el = t("239298"),
  en = t("513202"),
  er = t("701488"),
  eH = t("981631"),
  ed = t("689938"),
  eV = t("813897"),
  ec = t("131454"),
  eo = t("372065"),
  eM = t("376226"),
  eu = t("785930"),
  eE = t("143824"),
  eI = t("848366"),
  e_ = t("392381"),
  eZ = t("176890"),
  eT = t("997074"),
  ef = t("901924"),
  eh = t("448096"),
  em = t("286557"),
  ep = t("358176"),
  eD = t("610924"),
  ex = t("326822"),
  eN = t("797956"),
  eg = t("612852"),
  eA = t("369827");
let eS = "celebrate-with-us",
  ev = "".concat(eH.Routes.ACTIVITIES, "#").concat(eS),
  ej = "https://support.discord.com/hc/en-us/articles/13771635451415-Share-Nitro-Trials-with-a-Friend-FAQ",
  eR = "https://discord.gg/discord-townhall",
  eb = "https://discordmerch.com/dxcprod";

function ew() {
  var e, L;
  let {
    width: t,
    ref: a
  } = (0, I.default)(), C = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion), s = (0, o.useStateFromStores)([U.default], () => U.default.isAcknowledged(er.WhatsNewSection.FREE)), [i, r] = n.useState(!1), [c, M] = n.useState(!1), [_, Z] = n.useState(!1), m = (0, V.useHistory)(), p = (0, V.useLocation)(), D = (0, o.useStateFromStores)([N.default], () => N.default.getState().theme), [x] = n.useState((0, $.getActivitiesWhatsNewCount)(U.default) > 0), {
    analyticsLocations: g
  } = (0, h.default)([...null !== (L = null == p ? void 0 : null === (e = p.state) || void 0 === e ? void 0 : e.analyticsLocations) && void 0 !== L ? L : [], f.default.ACTIVITIES_PAGE]), A = n.useRef(new Date);
  return n.useEffect(() => {
    setTimeout(() => {
      !s && G.markSectionAcknowledged(er.WhatsNewSection.FREE)
    }, 500)
  }, [s]), n.useEffect(() => {
    !s && (setTimeout(() => {
      r(!0)
    }, 1300), setTimeout(() => {
      M(!0)
    }, 1500), setTimeout(() => {
      Z(!0)
    }, 1700))
  }, [s]), n.useEffect(() => ((0, E.setHomeLink)(eH.Routes.ACTIVITIES), x && !g.includes(f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT) && m.replace(eH.Routes.ACTIVITIES, {
    analyticsLocations: [...g, f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT]
  }), () => {
    let e = A.current,
      L = Math.ceil((new Date().getTime() - e.getTime()) / 1e3);
    k.default.track(eH.AnalyticEvents.ROUTE_UNMOUNT, {
      route: "/activities",
      page_view_duration_s: L
    })
  }), [g, m, x]), (0, l.jsx)(h.AnalyticsLocationProvider, {
    value: g,
    children: (0, l.jsxs)("div", {
      className: eV.outerContainer,
      children: [(0, l.jsxs)(w.default, {
        children: [(0, l.jsx)(j.default, {
          className: H()(eV.activitiesBirthdayIcon, {
            [eV.activitiesBirthdayIconLight]: "light" === D
          })
        }), (0, l.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE
        })]
      }), (0, l.jsx)(u.Scroller, {
        className: eV.scroller,
        children: (0, l.jsxs)("div", {
          className: eV.innerContainer,
          children: [(0, l.jsxs)("div", {
            className: eV.heroFlipper,
            children: [(0, l.jsxs)("div", {
              className: H()(eV.heroFlipperInner, {
                [eV.heroFlipped]: s || C
              }),
              children: [(0, l.jsx)("img", {
                src: "light" === D ? ec : eo,
                className: H()(eV.hero),
                alt: ed.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
              }), (0, l.jsx)("div", {
                className: H()(eV.heroFlipperBack, {
                  [eV.heroFlipperBackLightMode]: "light" === D
                }),
                children: (0, l.jsx)(eO, {
                  containerRef: a,
                  width: t
                })
              })]
            }), !C && i ? (0, l.jsx)("div", {
              className: eV.heroConfetti01Wrapper,
              children: (0, l.jsx)(d.default, {
                colors: ey
              })
            }) : null, !C && c ? (0, l.jsx)("div", {
              className: eV.heroConfetti02Wrapper,
              children: (0, l.jsx)(d.default, {
                colors: ey
              })
            }) : null, !C && _ ? (0, l.jsx)("div", {
              className: eV.heroConfetti03Wrapper,
              children: (0, l.jsx)(d.default, {
                colors: ey
              })
            }) : null]
          }), null != t && t < 660 ? (0, l.jsx)(B.default, {
            autoPlay: !0,
            muted: !0,
            src: eM,
            loop: !0,
            className: eV.freeForeverBreakpointVideo,
            controls: C
          }) : null, (0, l.jsx)(eB, {}), (0, l.jsx)(eF, {}), (0, l.jsx)(ez, {}), (0, l.jsx)(eq, {}), (0, l.jsx)(e6, {}), (0, l.jsx)(e4, {})]
        })
      })]
    })
  })
}

function eO(e) {
  let {
    width: L,
    containerRef: t
  } = e, a = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion);
  return (0, l.jsxs)("div", {
    className: eV.freeForeverContainer,
    ref: t,
    children: [(0, l.jsx)("div", {
      className: eV.freeForeverLeft,
      children: (0, l.jsxs)("div", {
        className: eV.freeForeverText,
        children: [(0, l.jsx)(R.default, {
          className: H()(eV.freeForeverLogo, {
            [eV.freeForeverLogoMedium]: null != L && L < 1e3,
            [eV.freeForeverLogoSmall]: null != L && L < 480
          })
        }), (0, l.jsx)(u.Heading, {
          variant: null == L || L < 480 ? "heading-sm/bold" : L < 1e3 ? "display-sm" : "display-md",
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_TITLE
        }), (0, l.jsx)(u.Text, {
          variant: null == L || L < 480 ? "text-sm/medium" : L < 1e3 ? "text-md/medium" : "text-lg/medium",
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_DESCRIPTION
        })]
      })
    }), null != L && L > 660 ? (0, l.jsx)("div", {
      className: eV.freeForeverRight,
      children: (0, l.jsx)(B.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        src: eM,
        poster: eu,
        className: eV.freeForeverVideo,
        controls: a
      })
    }) : null]
  })
}

function eB() {
  return (0, l.jsxs)("div", {
    className: eV.birthdayExplanationWrapper,
    children: [(0, l.jsx)("div", {
      className: eV.birthdayBalloonsContainer,
      children: (0, l.jsx)(eC.Balloons, {
        className: H()(eV.birthdayExplanationBalloonsLeft, eV.balloon)
      })
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: eV.birthdayExplanationText,
      children: ed.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_HERO_TEXT_WITH_2_LINKS.format({
        linkToBdayBlogPost: "https://dis.gd/birthday",
        linkToSurprises: e => (0, l.jsxs)(u.Anchor, {
          href: ev,
          children: [e, (0, l.jsx)("img", {
            src: eh,
            className: eV.birthdayExplanationNitroIcon,
            alt: ed.default.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
          })]
        })
      })
    }), (0, l.jsx)("div", {
      className: eV.birthdayBalloonsContainer,
      children: (0, l.jsx)(eC.Balloons, {
        className: H()(eV.birthdayExplanationBalloonsRight, eV.balloon),
        flipX: !0
      })
    })]
  })
}
let ek = "whats-new",
  eP = (0, y.cssValueToNumber)(M.default.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH),
  eW = (0, y.cssValueToNumber)(M.default.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN),
  ey = [u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_BLUE.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_GREEN.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PINK.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PURPLE.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_YELLOW.css];

function eF() {
  let {
    enabled: e
  } = X.ExperimentBirthdayActivitiesGdmTile.useExperiment({
    location: "d72ecf_2"
  }), {
    enabled: L
  } = J.ExperimentBirthdayActivitiesJamspaceTile.useExperiment({
    location: "d72ecf_3"
  }), {
    enabled: t
  } = Q.ExperimentBirthdayActivitiesPuttPartyTile.useExperiment({
    location: "d72ecf_4"
  }), {
    enabled: a
  } = z.ExperimentBirthdayActivitiesPokerTile.useExperiment({
    location: "d72ecf_5"
  }), C = n.useMemo(() => {
    let C = [];
    return C.push({
      id: er.WhatsNewSection.DISCORD_TURNS_8,
      title: ed.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_TITLE,
      content: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: eV.whatsNewDescription,
        children: ed.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_DESCRIPTION
      }),
      imgUrl: ex,
      imgAlt: ed.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_IMG_ALT,
      link: void 0,
      isAppLink: !1,
      cardImgUrl: eE,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: !0
    }), C.push({
      id: er.WhatsNewSection.GDM_ACTIVITIES,
      title: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_TITLE,
      content: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: eV.whatsNewDescription,
        children: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_DESCRIPTION
      }),
      imgUrl: eD,
      imgAlt: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_IMG_ALT,
      link: "https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord#h_01GSX5FCYNMF5PCGKNNA6XFW29",
      isAppLink: !1,
      cardImgUrl: eI,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: e
    }), C.push({
      id: er.WhatsNewSection.PUTT_PARTY,
      title: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_TITLE,
      content: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: eV.whatsNewDescription,
        children: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_DESCRIPTION
      }),
      imgUrl: eA,
      imgAlt: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_IMG_ALT,
      link: eH.Routes.ACTIVITY_DETAILS(er.PUTT_PARTY_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: e_,
      revealDate: new Date("May 22, 2023 17:00:00"),
      enabled: t
    }), C.push({
      id: er.WhatsNewSection.JAMSPACE,
      title: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_TITLE,
      content: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: eV.whatsNewDescription,
        children: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_DESCRIPTION
      }),
      imgUrl: eN,
      imgAlt: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_IMG_ALT,
      link: eH.Routes.ACTIVITY_DETAILS(er.JAM_SPACE_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: eZ,
      revealDate: new Date("May 30, 2023 17:00:00"),
      enabled: L
    }), C.push({
      id: er.WhatsNewSection.POKER,
      title: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_TITLE,
      content: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: eV.whatsNewDescription,
        children: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_DESCRIPTION
      }),
      imgUrl: eg,
      imgAlt: ed.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_IMG_ALT,
      link: eH.Routes.ACTIVITY_DETAILS(er.POKER_NIGHT_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: eT,
      revealDate: new Date("June 5, 2023 17:00:00"),
      enabled: a
    }), C
  }, [e, L, a, t]);
  return C.length <= 0 ? null : (0, l.jsx)("div", {
    className: eV.whatsNew,
    children: (0, l.jsx)(p.default, {
      tileMargin: eW,
      headerId: ek,
      tileWidth: eP,
      header: ed.default.Messages.WHATS_NEW,
      headerContainerClassName: eV.tileScrollerHeader,
      scrollContainerClassName: eV.tileScrollerContainer,
      children: (0, l.jsx)("ul", {
        "aria-labelledby": ek,
        className: eV.whatsNewItemsContainer,
        children: C.map(e => (0, l.jsx)(eG, {
          ...e
        }, e.id))
      })
    })
  })
}

function eG(e) {
  let {
    imgUrl: L,
    imgAlt: t,
    title: a,
    content: C,
    link: s,
    isAppLink: i,
    id: r,
    cardImgUrl: V,
    revealDate: c,
    enabled: M
  } = e, E = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion), I = (0, o.useStateFromStores)([x.default], () => x.default.locale), {
    analyticsLocations: Z
  } = (0, h.default)(f.default.ACTIVITIES_PAGE_WHATS_NEW_TILE), [m, p] = n.useState(!1), D = (0, _.default)(m), N = (0, o.useStateFromStores)([U.default], () => {
    if (!M) return 0;
    let e = U.default.isOpened(r);
    return r === er.WhatsNewSection.JAMSPACE ? e || U.default.isOpened(er.WhatsNewSection.JAMSPACE_OLD) ? 2 : 1 : e ? 2 : 1
  }, [M, r]);
  n.useEffect(() => {
    M && G.markSectionAcknowledged(r)
  }, [M, r]);
  let g = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Text, {
      variant: "text-sm/semibold",
      className: eV.whatsNewDate,
      children: new Intl.DateTimeFormat(I, {
        dateStyle: "long"
      }).format(c)
    }), (0, l.jsxs)("div", {
      className: eV.whatsNewImageContainer,
      children: [(0, l.jsx)("img", {
        src: L,
        className: eV.whatsNewImage,
        alt: t
      }), (0, l.jsx)(u.Text, {
        variant: "eyebrow",
        className: eV.newTag,
        children: ed.default.Messages.NEW
      })]
    }), (0, l.jsxs)("div", {
      className: eV.whatsNewTextArea,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-md/bold",
        className: eV.whatsNewDetailsHeader,
        children: a
      }), C]
    })]
  });
  return (0, l.jsx)(h.AnalyticsLocationProvider, {
    value: Z,
    children: (0, l.jsxs)("div", {
      className: eV.flipCardOuter,
      children: [E || 2 !== N || m || !D ? null : (0, l.jsx)("div", {
        className: eV.flipCardConfetti,
        children: (0, l.jsx)(d.default, {
          colors: ey
        })
      }), (0, l.jsx)(eU, {
        openState: N,
        link: s,
        isAppLink: i,
        onOpen: () => {
          p(!0), G.markSectionOpened(r), k.default.track(eH.AnalyticEvents.ACTIVITIES_WHATS_NEW_OPENED, {
            section_id: r
          }), setTimeout(() => {
            p(!1)
          }, 500)
        },
        onCardContentClick: () => {
          k.default.track(eH.AnalyticEvents.ACTIVITIES_WHATS_NEW_CLICKED, {
            section_id: r
          })
        }
      }), (0, l.jsxs)("div", {
        className: H()(eV.flipCardInner, {
          [eV.flipCardInnerFlipped]: 2 === N,
          [eV.flipCardOpening]: m && !E,
          [eV.flipCardInnerReducedMotion]: E
        }),
        children: [(0, l.jsx)("div", {
          className: eV.flipCardOpened,
          children: (() => {
            switch (N) {
              case 0:
              case 1:
                return (0, l.jsx)(u.Text, {
                  variant: "text-md/medium",
                  children: "( ͡\xb0 ͜ʖ ͡\xb0) https://discord.com/careers"
                });
              case 2:
                return (0, l.jsx)("div", {
                  className: eV.whatsNewItemContainer,
                  children: g
                });
              default:
                return null
            }
          })()
        }), (0, l.jsxs)("div", {
          className: eV.flipCardClosed,
          children: [(0, l.jsx)("img", {
            src: V,
            className: eV.flipCardClosedImg,
            alt: ed.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_CARD_ALT
          }), (() => {
            switch (N) {
              case 0:
                return (0, l.jsx)(u.Text, {
                  variant: "text-sm/semibold",
                  className: eV.flipCardClosedText,
                  children: ed.default.Messages.EMBEDDED_ACTIVITIES_CLICK_TO_REVEAL_DATE.format({
                    revealDate: new Intl.DateTimeFormat(I).format(c)
                  })
                });
              case 1:
                return (0, l.jsx)(u.Text, {
                  variant: "text-sm/semibold",
                  className: eV.flipCardText,
                  children: ed.default.Messages.EMBEDDED_ACTIVITIES_REVEAL_THIS_WEEKS_DROP.format({
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

function eU(e) {
  let {
    openState: L,
    link: t,
    isAppLink: a,
    onOpen: C,
    onCardContentClick: s
  } = e, {
    analyticsLocations: i
  } = (0, h.default)(), n = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion);
  switch (L) {
    case 0:
      return (0, l.jsx)("div", {
        className: H()(eV.clickableContainer, eV.noPointer, {
          [eV.clickableContainerReducedMotion]: n
        })
      });
    case 1:
      return (0, l.jsx)(u.Clickable, {
        "aria-label": ed.default.Messages.EMBEDDED_ACTIVITIES_OPEN_BIRTHDAY_SURPRISE,
        className: H()(eV.clickableContainer, {
          [eV.clickableContainerReducedMotion]: n
        }),
        onClick: C
      });
    case 2:
      if (null == t) return (0, l.jsx)("div", {
        className: H()(eV.clickableContainer, eV.noPointer, {
          [eV.clickableContainerReducedMotion]: n
        })
      });
      if (a) return (0, l.jsx)(el.ClickableLink, {
        className: H()(eV.clickableContainer, {
          [eV.clickableContainerReducedMotion]: n
        }),
        onClick: s,
        to: {
          pathname: t,
          state: {
            analyticsLocations: i
          }
        }
      });
      return (0, l.jsx)(u.Clickable, {
        tag: "a",
        href: t,
        target: "_blank",
        className: H()(eV.clickableContainer, {
          [eV.clickableContainerReducedMotion]: n
        }),
        onClick: s
      });
    default:
      return null
  }
}(s = a || (a = {}))[s.LOCKED = 0] = "LOCKED", s[s.UNLOCKED = 1] = "UNLOCKED", s[s.OPENED = 2] = "OPENED";
let eY = "happening-now",
  eK = (0, y.cssValueToNumber)(M.default.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH),
  eX = (0, y.cssValueToNumber)(M.default.ACTIVITIES_HOME_HAPPENING_NOW_GAP);

function eJ(e, L) {
  if (e.length !== L.length) return !1;
  for (let t = 0; t < e.length; t++)
    if (e[t].activityItem.application.id !== L[t].activityItem.application.id || e[t].channel.id !== L[t].channel.id || e[t].users.length !== L[t].users.length) return !1;
  return !0
}

function ez() {
  let {
    analyticsLocations: e
  } = (0, h.default)(f.default.ACTIVITIES_HAPPENING_NOW), L = (0, o.useStateFromStores)([K.default, D.default, g.default, v.default, S.default], () => {
    let e = [],
      L = v.default.getCurrentUser();
    if (null == L) return e;
    let t = K.default.getShelfActivities(null),
      a = t.map(e => D.default.getApplication(e.application_id)).filter(P.isNotNullish);
    return S.default.getFlattenedGuildIds().forEach(C => {
      K.default.getEmbeddedActivitiesForGuild(C).forEach(C => {
        let s = g.default.getChannel(C.channelId);
        if (null == s || C.userIds.has(L.id)) return;
        let i = (0, q.default)({
            activityConfigs: t,
            applicationId: C.applicationId,
            applications: a
          }),
          l = Array.from(C.userIds).map(e => v.default.getUser(e)).filter(P.isNotNullish);
        null != i && e.push({
          activityItem: i,
          channel: s,
          users: l
        })
      })
    }), e
  }, [], eJ);
  return ((0, m.default)({
    type: c.ImpressionTypes.PANE,
    name: c.ImpressionNames.ACTIVITIES_HAPPENING_NOW,
    properties: {
      n_activities: L.length
    }
  }, {
    trackOnInitialLoad: !0
  }), L.length <= 0) ? null : (0, l.jsx)(h.AnalyticsLocationProvider, {
    value: e,
    children: (0, l.jsx)("div", {
      className: eV.happeningNowContainer,
      children: (0, l.jsx)(p.default, {
        tileMargin: eX,
        headerId: eY,
        tileWidth: eK,
        header: ed.default.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_TITLE,
        subHeader: ed.default.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_DESCRIPTION,
        headerContainerClassName: eV.tileScrollerHeader,
        scrollContainerClassName: eV.tileScrollerContainer,
        children: (0, l.jsx)("ul", {
          "aria-labelledby": eY,
          className: eV.whatsNewItemsContainer,
          children: L.map(e => {
            let {
              activityItem: L,
              channel: t,
              users: a
            } = e;
            return (0, l.jsx)(eQ, {
              activityItem: L,
              channel: t,
              users: a
            }, "".concat(t.id).concat(L.application.id))
          })
        })
      })
    })
  })
}

function eQ(e) {
  let {
    activityItem: L,
    channel: t,
    users: a
  } = e, C = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion), {
    imageBackground: s,
    onActivityItemSelected: i
  } = (0, et.default)({
    activityItem: L,
    channel: t,
    guildId: t.guild_id,
    locationObject: {},
    embeddedActivitiesManager: en.default,
    backgroundResolution: 512
  }), n = W.default.getName(t.guild_id, t.id, null == a ? void 0 : a[0]);
  n = (0, y.truncateText)(n, 25);
  let r = (0, o.useStateFromStores)([A.default], () => {
    var e;
    return null === (e = A.default.getGuild(t.guild_id)) || void 0 === e ? void 0 : e.name
  });
  return (0, l.jsxs)(u.Clickable, {
    onClick: i,
    className: H()((0, F.getThemeClass)(eH.ThemeTypes.DARK), eV.happeningNowCard, {
      [eV.happeningNowCardReducedMotion]: C
    }),
    children: [(0, l.jsx)("img", {
      src: s.url,
      alt: L.application.name,
      className: eV.happeningNowCardImg
    }), (0, l.jsxs)("div", {
      className: eV.happeningNowCardForeground,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-lg/bold",
        children: L.application.name
      }), (0, l.jsx)(O.default, {
        guildId: t.guild_id,
        users: a,
        max: 4,
        className: eV.happeningNowAvatars
      }), (0, l.jsx)(u.Text, {
        className: eV.happeningNowAvatarNames,
        variant: "text-xs/normal",
        children: a.length > 1 ? ed.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
          username: n,
          count: a.length - 1
        }) : ed.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
          username: n
        })
      }), (0, l.jsx)(u.Text, {
        variant: "text-md/medium",
        className: H()(eV.happeningNowJoin, {
          [eV.happeningNowJoinReducedMotion]: C
        }),
        children: ed.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }), null != r ? (0, l.jsx)(u.Text, {
        variant: "text-xs/medium",
        className: eV.happeningNowChannelAndGuildName,
        children: ed.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
          channelName: (0, y.truncateText)(t.name, 25),
          serverName: (0, y.truncateText)(r, 25)
        })
      }) : null]
    })]
  })
}

function eq() {
  let e = (0, ee.default)({
    guildId: null,
    channel: void 0
  });
  return n.useEffect(() => {
    (0, Y.fetchShelf)({
      guildId: null
    })
  }, []), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: eV.activityGridHeader,
      children: (0, l.jsxs)("div", {
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          className: eV.activityGridSubheader,
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES_SUBHEADER
        })]
      })
    }), (0, l.jsx)("div", {
      className: eV.activityGrid,
      children: e.map(e => (0, l.jsx)(e$, {
        activityItem: e
      }, e.application.id))
    })]
  })
}

function e$(e) {
  var L;
  let {
    activityItem: t
  } = e, {
    analyticsLocations: a
  } = (0, h.default)(), C = (0, ea.default)({
    applicationId: t.application.id,
    size: 512
  }), s = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion), i = (null === (L = t.application.embeddedActivityConfig) || void 0 === L ? void 0 : L.activity_preview_video_asset_id) != null ? (0, eL.default)(t.application.id, t.application.embeddedActivityConfig.activity_preview_video_asset_id) : null, [r, d] = n.useState(!1), [V, c] = n.useState(r);
  n.useEffect(() => {
    r && c(!0)
  }, [r]);
  let M = () => d(!0),
    E = () => d(!1),
    I = null == t.application.maxParticipants || -1 === t.application.maxParticipants ? ed.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : ed.default.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
      count: t.application.maxParticipants
    });
  return (0, l.jsxs)(el.ClickableLink, {
    to: {
      pathname: eH.Routes.ACTIVITY_DETAILS(t.application.id),
      state: {
        analyticsLocations: a
      }
    },
    className: H()(eV.activityCard, {
      [eV.activityCardReducedMotion]: s
    }),
    onMouseEnter: M,
    onFocus: M,
    onMouseLeave: E,
    onBlur: E,
    children: [(0, l.jsxs)("div", {
      className: eV.activityCardImageContainer,
      children: [(0, l.jsx)("img", {
        src: C.url,
        alt: t.application.name,
        className: eV.activityCardImage
      }), !s && null != i && V ? (0, l.jsx)("div", {
        className: H()(eV.video, {
          [eV.videoFadeOut]: !r
        }),
        onAnimationEnd: () => r ? null : c(!1),
        children: (0, l.jsx)(B.default, {
          className: eV.video,
          src: i,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null]
    }), (0, l.jsxs)("div", {
      className: eV.activityCardDetails,
      children: [(0, l.jsxs)("div", {
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-xl/extrabold",
          children: t.application.name
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: eV.activityCardParticipants,
          children: I
        })]
      }), t.application.tags.length > 0 ? (0, l.jsx)("div", {
        className: eV.activityCardTagContainer,
        children: t.application.tags.slice(0, 3).map(e => (0, l.jsx)("div", {
          className: eV.activityCardTag,
          children: (0, l.jsx)(u.Text, {
            variant: "text-xs/semibold",
            children: e
          })
        }, e))
      }) : null, (0, l.jsxs)("div", {
        className: H()(eV.activityCardHoverHint, {
          [eV.activityCardHoverHintReducedMotion]: s
        }),
        children: [(0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          children: ed.default.Messages.LEARN_MORE
        }), (0, l.jsx)(b.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  })
}

function e6() {
  return (0, l.jsxs)("div", {
    className: eV.celebrateContainer,
    id: eS,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      children: ed.default.Messages.EMBEDDED_ACTIVITIES_HOW_YOU_CAN_CELEBRATE_WITH_US
    }), (0, l.jsxs)("div", {
      className: eV.celebrateCardGrid,
      children: [(0, l.jsxs)(u.Clickable, {
        tag: "a",
        href: ej,
        target: "_blank",
        className: eV.celebrateCardContainer,
        onClick: () => k.default.track(eH.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
          section: "share_nitro"
        }),
        children: [(0, l.jsx)("img", {
          src: eh,
          className: eV.celebrateNitroIcon,
          alt: ed.default.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
        }), (0, l.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: eV.celebrateCardHeader,
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_SHARE_THE_GIFT_OF_NITRO
        }), (0, l.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: eV.celebrateCardSubheader,
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_SHARE_THREE_TRIALS.format({
            nitroLink: ej
          })
        }), (0, l.jsx)("div", {
          className: eV.celebrateCardFiller
        }), (0, l.jsx)("img", {
          className: eV.celebrateCardImage,
          src: em,
          alt: ed.default.Messages.EMBEDDED_ACTIVITIES_SHARE_NITRO_TRIAL_ALT
        })]
      }), (0, l.jsxs)(u.Clickable, {
        tag: "a",
        href: eb,
        target: "_blank",
        className: eV.celebrateCardContainer,
        onClick: () => {
          k.default.track(eH.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "disxcore_merch"
          })
        },
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: eV.celebrateCardHeader,
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_EXCLUSIVE_BIRTHDAY_MERCH
        }), (0, l.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: eV.celebrateCardSubheader,
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_VISIT_OUR_MERCH_STORE.format({
            merchStoreLink: eb
          })
        }), (0, l.jsx)("div", {
          className: eV.celebrateCardFiller
        }), (0, l.jsx)("img", {
          className: eV.celebrateCardImage,
          src: ef,
          alt: ed.default.Messages.EMBEDDED_ACTIVITIES_MERCH_STORE_ALT
        })]
      }), (0, l.jsxs)(u.Clickable, {
        tag: "a",
        href: eR,
        target: "_blank",
        className: eV.celebrateCardContainer,
        onClick: e => {
          var L;
          k.default.track(eH.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "town_hall"
          }), null === (L = (0, Z.default)(eR)) || void 0 === L || L(e)
        },
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: eV.celebrateCardHeader,
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_TITLE
        }), (0, l.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: eV.celebrateCardSubheader,
          children: ed.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_DESCRIPTION.format({
            clickHandler: (0, Z.default)(eR)
          })
        }), (0, l.jsx)("div", {
          className: eV.celebrateCardFiller
        }), (0, l.jsx)("img", {
          className: eV.celebrateCardImage,
          src: ep,
          alt: ed.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_IMG_ALT
        })]
      })]
    })]
  })
}

function e4() {
  return (0, l.jsx)("div", {
    className: eV.kitBashContainer,
    children: (0, l.jsx)(ei.BirthdayKitBash, {})
  })
}

function e7() {
  return (0, l.jsx)(es.BirthdayActivitiesRouteGuard, {
    children: (0, l.jsx)(ew, {})
  })
}(i = C || (C = {})).SHARE_NITRO = "share_nitro", i.DISXCORE_MERCH = "disxcore_merch", i.TOWN_HALL = "town_hall"