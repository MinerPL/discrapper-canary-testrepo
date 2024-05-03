"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Y
  }
}), l("47120"), l("653041");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("990547"),
  d = l("442837"),
  o = l("477690"),
  c = l("481060"),
  u = l("110924"),
  v = l("40851"),
  f = l("367907"),
  h = l("565384"),
  I = l("906732"),
  m = l("835473"),
  E = l("592125"),
  C = l("451478"),
  T = l("285952"),
  x = l("292937"),
  S = l("626135"),
  p = l("585483"),
  A = l("624138"),
  _ = l("115130"),
  g = l("566620"),
  N = l("421"),
  j = l("895395"),
  y = l("49978"),
  D = l("427996"),
  M = l("701488"),
  L = l("981631"),
  V = l("689938"),
  R = l("228983"),
  O = l("361205"),
  b = l("812320");
let H = (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  F = (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  B = (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + H + (0, A.cssValueToNumber)(o.default.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function Y(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: o,
    initialSelectedApplicationId: v,
    initialSlide: C = M.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: A,
    analyticsLocations: H,
    ...B
  } = e, Y = (0, d.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), {
    analyticsLocations: k
  } = (0, I.default)(H), [P, G] = a.useState(C), U = (0, u.default)(P), [Z, W] = a.useState(null), [z, q] = a.useState(v), [J, K] = a.useState(void 0), [X] = (0, m.default)(null == z ? [] : [z]), Q = a.useRef(null), $ = a.useMemo(() => ({
    application_id: z,
    source_section: n.section,
    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [n.section, z]);
  a.useEffect(() => {
    if (P === M.ActivityShelfSlides.DIRECTORY && null != U && U !== M.ActivityShelfSlides.DIRECTORY && null != Z) {
      var e;
      null === (e = Q.current) || void 0 === e || e.scrollTo({
        top: Z
      })
    }
  }, [Z, U, P]);
  let ee = a.useCallback(e => {
      var t;
      let {
        applicationId: l
      } = e, i = null === (t = Q.current) || void 0 === t ? void 0 : t.scrollTop;
      null != i && W(i), q(l), G(M.ActivityShelfSlides.SELECT_CHANNEL)
    }, []),
    et = a.useCallback(e => {
      let {
        applicationId: t
      } = e;
      q(t), G(M.ActivityShelfSlides.DETAIL_PAGE)
    }, []);
  a.useEffect(() => {
    S.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Shelf",
      channel_id: null == t ? void 0 : t.id,
      guild_id: l
    })
  }, [t, l]), a.useEffect(() => (p.ComponentDispatch.subscribe(L.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee), () => {
    p.ComponentDispatch.unsubscribe(L.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee)
  }), [ee]), a.useEffect(() => (p.ComponentDispatch.subscribe(L.ComponentActions.SHOW_ACTIVITY_DETAILS, et), () => {
    p.ComponentDispatch.unsubscribe(L.ComponentActions.SHOW_ACTIVITY_DETAILS, et)
  }), [et]), a.useEffect(() => {
    g.dismissNewActivityIndicator()
  }, []);
  let el = () => {
      G(M.ActivityShelfSlides.DIRECTORY)
    },
    ei = a.useRef(Date.now()),
    ea = a.useRef(!1),
    en = a.useRef([]),
    es = a.useCallback(e => {
      null == en.current.find(t => t === e.applicationId) && en.current.push(e.applicationId)
    }, []);
  return a.useEffect(() => {
    let e = Q.current;
    if (null != e) {
      let t = () => ea.current = !0;
      return null != e && e.addEventListener("scroll", t), () => {
        null != e && e.removeEventListener("scroll", t)
      }
    }
  }, []), a.useEffect(() => () => {
    let e = {
        activity_tiles_viewed: en.current,
        duration_ms: Date.now() - ei.current,
        scrolled: ea.current
      },
      i = {
        channel_id: null == t ? void 0 : t.id,
        guild_id: l,
        location: (0, h.getLocation)(),
        ...(0, f.collectGuildAnalyticsMetadata)(l),
        ...(0, f.collectChannelAnalyticsMetadata)(E.default.getChannel(null == t ? void 0 : t.id)),
        ...$,
        ...e
      };
    S.default.track(L.AnalyticEvents.ACTIVITY_SHELF_CLOSE, i)
  }, [null == t ? void 0 : t.id, $, l]), (0, i.jsx)(I.AnalyticsLocationProvider, {
    value: k,
    children: (0, i.jsxs)(c.ModalRoot, {
      className: s()(R.root),
      "aria-label": V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
      ...B,
      children: [(0, i.jsx)("img", {
        alt: V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: O,
        className: R.shelfTopBackground
      }), (0, i.jsx)("img", {
        alt: V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: b,
        className: R.shelfTopForeground
      }), (0, i.jsxs)(c.ModalHeader, {
        separator: !1,
        justify: T.default.Justify.BETWEEN,
        className: s()(R.modalHeader),
        children: [(0, i.jsxs)("div", {
          className: R.headerTextContainer,
          children: [(() => {
            if (P === M.ActivityShelfSlides.DETAIL_PAGE) return null == X ? null : (0, i.jsxs)("div", {
              className: R.activityShelfTitle,
              children: [(0, i.jsx)(c.Heading, {
                variant: "heading-xl/extrabold",
                children: X.name
              }), (0, i.jsxs)(c.Clickable, {
                className: R.headerBackButton,
                onClick: el,
                children: [(0, i.jsx)(x.default, {}), (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  children: V.default.Messages.BACK
                })]
              })]
            });
            return (0, i.jsx)("div", {
              className: R.activityShelfTitle,
              children: (0, i.jsx)(c.Heading, {
                variant: "heading-xl/extrabold",
                children: V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
              })
            })
          })(), (() => {
            if (P === M.ActivityShelfSlides.DIRECTORY) return (0, i.jsx)(c.Text, {
              variant: "text-sm/normal",
              children: Y ? V.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : V.default.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
            });
            return null
          })()]
        }), (0, i.jsx)(c.ModalCloseButton, {
          className: R.modalCloseButton,
          onClick: o
        })]
      }), P === M.ActivityShelfSlides.DIRECTORY && Y ? (0, i.jsx)(D.DeveloperShelfControls, {}) : null, (0, i.jsx)("div", {
        className: R.modalDivider
      }), (0, i.jsxs)(c.Slides, {
        activeSlide: P,
        centered: !1,
        width: F,
        children: [(0, i.jsx)(c.Slide, {
          id: M.ActivityShelfSlides.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, i.jsx)(w, {
            slide: P,
            children: (0, i.jsx)(j.default, {
              scrollerRef: Q,
              channel: t,
              guildId: l,
              locationObject: n,
              onActivityItemVisible: es,
              onClose: o
            })
          })
        }), (0, i.jsx)(c.Slide, {
          id: M.ActivityShelfSlides.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: z
          },
          children: (0, i.jsx)(w, {
            slide: P,
            children: (0, i.jsx)(y.default, {
              applicationId: z,
              selectedChannelId: J,
              setSelectedChannelId: K,
              guildId: l,
              enableSelectedTextChannelInvite: A
            })
          })
        }), (0, i.jsx)(c.Slide, {
          id: M.ActivityShelfSlides.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: $,
          children: (0, i.jsx)(w, {
            slide: P,
            children: null == z ? null : (0, i.jsx)(N.default, {
              applicationId: z,
              channelId: null == t ? void 0 : t.id,
              guildId: l,
              onActivityLaunch: o
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: R.modalDivider
      }), (0, i.jsx)(c.ModalFooter, {
        separator: !1,
        className: R.footer,
        children: (() => {
          switch (P) {
            case M.ActivityShelfSlides.DIRECTORY:
              return (0, i.jsx)(j.ActivityDirectoryFooter, {});
            case M.ActivityShelfSlides.SELECT_CHANNEL:
              return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: R.modalDivider
                }), (0, i.jsx)(c.ModalFooter, {
                  separator: !1,
                  className: R.footer,
                  children: (0, i.jsx)(y.ChannelSelectorFooter, {
                    onBack: el,
                    onClose: o,
                    guildId: l,
                    applicationId: z,
                    locationObject: n,
                    selectedChannelId: J,
                    enableSelectedTextChannelInvite: A
                  })
                })]
              });
            case M.ActivityShelfSlides.DETAIL_PAGE:
            case M.ActivityShelfSlides.DIRECTORY:
            default:
              return null
          }
        })()
      })]
    })
  })
}
let w = e => {
  let {
    children: t,
    slide: l
  } = e, n = (0, d.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), r = a.useContext(v.default), o = (0, d.useStateFromStores)([C.default], () => C.default.windowSize(r.windowId).height, [r.windowId]);
  return (0, i.jsx)("div", {
    className: s()(R.slideContentOuterContainerSquished, {
      [R.slideContentOuterContainerSquishedWithDev]: l === M.ActivityShelfSlides.DIRECTORY && n,
      [R.slideContentOuterContainerTall]: l === M.ActivityShelfSlides.DIRECTORY && o > B,
      [R.slideContentOuterContainerTallWithDev]: l === M.ActivityShelfSlides.DIRECTORY && o > B && n,
      [R.slideContentOuterContainerNoMetaTextSquished]: l === M.ActivityShelfSlides.SELECT_CHANNEL,
      [R.slideContentOuterContainerNoMetaTextTall]: l === M.ActivityShelfSlides.SELECT_CHANNEL && o > B,
      [R.slideContentOuterContainerNoMetaTextNoFooterSquished]: l === M.ActivityShelfSlides.DETAIL_PAGE,
      [R.slideContentOuterContainerNoMetaTextNoFooterTall]: l === M.ActivityShelfSlides.DETAIL_PAGE && o > B
    }),
    children: t
  })
}