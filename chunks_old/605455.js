"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
}), l("222007"), l("424973");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("759843"),
  o = l("446674"),
  c = l("769846"),
  d = l("77078"),
  u = l("84339"),
  v = l("244201"),
  f = l("716241"),
  h = l("939011"),
  m = l("685665"),
  I = l("442939"),
  E = l("944654"),
  x = l("42203"),
  T = l("471671"),
  C = l("145131"),
  S = l("980428"),
  p = l("599110"),
  A = l("659500"),
  g = l("159885"),
  _ = l("84460"),
  N = l("550766"),
  D = l("686569"),
  j = l("623611"),
  y = l("293564"),
  M = l("218274"),
  L = l("891209"),
  b = l("954016"),
  V = l("49111"),
  R = l("782340"),
  O = l("413432"),
  H = l("851815"),
  B = l("255293");
let F = (0, g.cssValueToNumber)(c.default.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  P = (0, g.cssValueToNumber)(c.default.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  w = (0, g.cssValueToNumber)(c.default.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH),
  Y = (0, g.cssValueToNumber)(c.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH),
  k = (0, g.cssValueToNumber)(c.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + F + (0, g.cssValueToNumber)(c.default.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function U(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: c,
    initialSelectedApplicationId: v,
    initialSlide: T = b.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: g,
    analyticsLocations: k,
    ...U
  } = e, {
    enableBigShelf: W
  } = D.ExperimentShelfToDetailPage.useExperiment({
    location: "0d4108_1"
  }, {
    autoTrackExposure: !0
  }), {
    width: z
  } = (0, E.useScreenDimensions)(), Z = a.useMemo(() => W ? Math.max(w, Math.min(z - 2 * F, Y)) : P, [z, W]), K = (0, o.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), {
    analyticsLocations: X
  } = (0, m.default)(k), [q, J] = a.useState(T), Q = (0, u.default)(q), [$, ee] = a.useState(null), [et, el] = a.useState(v), [ei, ea] = a.useState(void 0), [en] = (0, I.default)(null == et ? [] : [et]), es = a.useRef(null), er = a.useMemo(() => ({
    application_id: et,
    source_section: n.section,
    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [n.section, et]);
  a.useEffect(() => {
    if (q === b.ActivityShelfSlides.DIRECTORY && null != Q && Q !== b.ActivityShelfSlides.DIRECTORY && null != $) {
      var e;
      null === (e = es.current) || void 0 === e || e.scrollTo({
        top: $
      })
    }
  }, [$, Q, q]);
  let eo = a.useCallback(e => {
      var t;
      let {
        applicationId: l
      } = e, i = null === (t = es.current) || void 0 === t ? void 0 : t.scrollTop;
      null != i && ee(i), el(l), J(b.ActivityShelfSlides.SELECT_CHANNEL)
    }, []),
    ec = a.useCallback(e => {
      let {
        applicationId: t
      } = e;
      el(t), J(b.ActivityShelfSlides.DETAIL_PAGE)
    }, []);
  a.useEffect(() => {
    p.default.track(V.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Shelf",
      channel_id: null == t ? void 0 : t.id,
      guild_id: l
    })
  }, [t, l]), a.useEffect(() => (A.ComponentDispatch.subscribe(V.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, eo), () => {
    A.ComponentDispatch.unsubscribe(V.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, eo)
  }), [eo]), a.useEffect(() => (A.ComponentDispatch.subscribe(V.ComponentActions.SHOW_ACTIVITY_DETAILS, ec), () => {
    A.ComponentDispatch.unsubscribe(V.ComponentActions.SHOW_ACTIVITY_DETAILS, ec)
  }), [ec]), a.useEffect(() => {
    N.dismissNewActivityIndicator()
  }, []);
  let ed = () => {
      J(b.ActivityShelfSlides.DIRECTORY)
    },
    eu = a.useRef(Date.now()),
    ev = a.useRef(!1),
    ef = a.useRef([]),
    eh = a.useCallback(e => {
      null == ef.current.find(t => t === e.applicationId) && ef.current.push(e.applicationId)
    }, []);
  return a.useEffect(() => {
    let e = es.current;
    if (null != e) {
      let t = () => ev.current = !0;
      return null != e && e.addEventListener("scroll", t), () => {
        null != e && e.removeEventListener("scroll", t)
      }
    }
  }, []), a.useEffect(() => () => {
    let e = {
        activity_tiles_viewed: ef.current,
        duration_ms: Date.now() - eu.current,
        scrolled: ev.current
      },
      i = {
        channel_id: null == t ? void 0 : t.id,
        guild_id: l,
        location: (0, h.getLocation)(),
        ...(0, f.collectGuildAnalyticsMetadata)(l),
        ...(0, f.collectChannelAnalyticsMetadata)(x.default.getChannel(null == t ? void 0 : t.id)),
        ...er,
        ...e
      };
    p.default.track(V.AnalyticEvents.ACTIVITY_SHELF_CLOSE, i)
  }, [null == t ? void 0 : t.id, er, l]), (0, i.jsx)(m.AnalyticsLocationProvider, {
    value: X,
    children: (0, i.jsxs)(d.ModalRoot, {
      className: s(O.root, {
        [O.rootBigShelf]: W
      }),
      "aria-label": R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
      ...U,
      children: [(0, i.jsx)("img", {
        alt: R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: H,
        className: O.shelfTopBackground
      }), (0, i.jsx)("img", {
        alt: R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: B,
        className: O.shelfTopForeground
      }), (0, i.jsxs)(d.ModalHeader, {
        separator: !1,
        justify: C.default.Justify.BETWEEN,
        className: s(O.modalHeader, {
          [O.modalHeaderBigShelf]: W
        }),
        children: [(0, i.jsxs)("div", {
          className: O.headerTextContainer,
          children: [(() => {
            if (q === b.ActivityShelfSlides.DETAIL_PAGE) return null == en ? null : (0, i.jsxs)("div", {
              className: O.activityShelfTitle,
              children: [(0, i.jsx)(d.Heading, {
                variant: "heading-xl/extrabold",
                children: en.name
              }), (0, i.jsxs)(d.Clickable, {
                className: O.headerBackButton,
                onClick: ed,
                children: [(0, i.jsx)(S.default, {}), (0, i.jsx)(d.Text, {
                  variant: "text-sm/semibold",
                  children: R.default.Messages.BACK
                })]
              })]
            });
            return (0, i.jsx)("div", {
              className: O.activityShelfTitle,
              children: (0, i.jsx)(d.Heading, {
                variant: "heading-xl/extrabold",
                children: R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
              })
            })
          })(), (() => {
            if (q === b.ActivityShelfSlides.DIRECTORY) return (0, i.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: K ? R.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : R.default.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
            });
            return null
          })()]
        }), (0, i.jsx)(d.ModalCloseButton, {
          className: O.modalCloseButton,
          onClick: c
        })]
      }), q === b.ActivityShelfSlides.DIRECTORY && K ? (0, i.jsx)(L.DeveloperShelfControls, {}) : null, (0, i.jsx)("div", {
        className: O.modalDivider
      }), (0, i.jsxs)(d.Slides, {
        activeSlide: q,
        centered: !1,
        width: Z,
        children: [(0, i.jsx)(d.Slide, {
          id: b.ActivityShelfSlides.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, i.jsx)(G, {
            slide: q,
            children: (0, i.jsx)(y.default, {
              scrollerRef: es,
              channel: t,
              guildId: l,
              locationObject: n,
              onActivityItemVisible: eh,
              onClose: c
            })
          })
        }), (0, i.jsx)(d.Slide, {
          id: b.ActivityShelfSlides.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: et
          },
          children: (0, i.jsx)(G, {
            slide: q,
            children: (0, i.jsx)(M.default, {
              applicationId: et,
              selectedChannelId: ei,
              setSelectedChannelId: ea,
              guildId: l,
              enableSelectedTextChannelInvite: g
            })
          })
        }), (0, i.jsx)(d.Slide, {
          id: b.ActivityShelfSlides.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: er,
          children: (0, i.jsx)(G, {
            slide: q,
            children: null == et ? null : (0, i.jsx)(j.default, {
              applicationId: et,
              channelId: null == t ? void 0 : t.id,
              guildId: l,
              onActivityLaunch: c
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: O.modalDivider
      }), (0, i.jsx)(d.ModalFooter, {
        separator: !1,
        className: O.footer,
        children: (() => {
          switch (q) {
            case b.ActivityShelfSlides.DIRECTORY:
              return (0, i.jsx)(y.ActivityDirectoryFooter, {});
            case b.ActivityShelfSlides.SELECT_CHANNEL:
              return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: O.modalDivider
                }), (0, i.jsx)(d.ModalFooter, {
                  separator: !1,
                  className: O.footer,
                  children: (0, i.jsx)(M.ChannelSelectorFooter, {
                    onBack: ed,
                    onClose: c,
                    guildId: l,
                    applicationId: et,
                    locationObject: n,
                    selectedChannelId: ei,
                    enableSelectedTextChannelInvite: g
                  })
                })]
              });
            case b.ActivityShelfSlides.DETAIL_PAGE:
            case b.ActivityShelfSlides.DIRECTORY:
            default:
              return null
          }
        })()
      })]
    })
  })
}
let G = e => {
  let {
    children: t,
    slide: l
  } = e, n = (0, o.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), r = a.useContext(v.default), c = (0, o.useStateFromStores)([T.default], () => T.default.windowSize(r.windowId).height, [r.windowId]);
  return (0, i.jsx)("div", {
    className: s(O.slideContentOuterContainerSquished, {
      [O.slideContentOuterContainerSquishedWithDev]: l === b.ActivityShelfSlides.DIRECTORY && n,
      [O.slideContentOuterContainerTall]: l === b.ActivityShelfSlides.DIRECTORY && c > k,
      [O.slideContentOuterContainerTallWithDev]: l === b.ActivityShelfSlides.DIRECTORY && c > k && n,
      [O.slideContentOuterContainerNoMetaTextSquished]: l === b.ActivityShelfSlides.SELECT_CHANNEL,
      [O.slideContentOuterContainerNoMetaTextTall]: l === b.ActivityShelfSlides.SELECT_CHANNEL && c > k,
      [O.slideContentOuterContainerNoMetaTextNoFooterSquished]: l === b.ActivityShelfSlides.DETAIL_PAGE,
      [O.slideContentOuterContainerNoMetaTextNoFooterTall]: l === b.ActivityShelfSlides.DETAIL_PAGE && c > k
    }),
    children: t
  })
}