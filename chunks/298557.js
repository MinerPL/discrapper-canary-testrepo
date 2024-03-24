"use strict";
l.r(t), l.d(t, {
  default: function() {
    return ex
  }
}), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("511434"), l("702976"), l("424973");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("597755"),
  c = l.n(r),
  o = l("404828"),
  d = l.n(o),
  u = l("394846"),
  m = l("316693"),
  p = l("617258"),
  _ = l("446674"),
  f = l("669491"),
  h = l("769846"),
  C = l("77078"),
  g = l("549825"),
  I = l("590177"),
  A = l("180612"),
  E = l("798609"),
  v = l("612039"),
  x = l("545158"),
  R = l("206230"),
  T = l("389153"),
  N = l("462274"),
  P = l("69927"),
  y = l("861370"),
  j = l("978970"),
  O = l("991254"),
  S = l("766366"),
  L = l("393414"),
  D = l("485422"),
  M = l("915639"),
  b = l("271938"),
  Y = l("471671"),
  k = l("9074"),
  H = l("837899"),
  G = l("425190"),
  F = l("433487"),
  w = l("599110"),
  U = l("315102"),
  B = l("306160"),
  V = l("449008"),
  W = l("794818"),
  K = l("721698"),
  z = l("349503"),
  Z = l("388647"),
  q = l("598981"),
  X = l("136110"),
  J = l("146691"),
  Q = l("682777"),
  $ = l("726902"),
  ee = l("998944"),
  et = l("915267"),
  el = l("331793"),
  ei = l("412707"),
  ea = l("646186"),
  en = l("721908"),
  es = l("178350"),
  er = l("608129"),
  ec = l("149462"),
  eo = l("370570"),
  ed = l("137246"),
  eu = l("750947"),
  em = l("49111"),
  ep = l("782340"),
  e_ = l("954212"),
  ef = l("103104");
let eh = d.parserFor(ec.default),
  eC = d.reactFor(d.ruleOutput(ec.default, "react")),
  eg = (0, p.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eI = "redirect_to_support_server",
  eA = "start_application_install",
  eE = e => "".concat(location.protocol, "//").concat(location.host).concat(em.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  ev = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function ex(e) {
  var t, n, r, o;
  let d, {
      applicationId: p,
      initialSection: f
    } = e,
    h = (0, ei.useApplicationDirectoryHistory)(e => e.guildId),
    E = (0, q.default)(),
    R = a.useRef(p),
    N = a.useRef(!1),
    H = (0, _.useStateFromStores)([Z.default], () => Z.default.getFetchState({
      applicationId: p,
      guildId: h
    }) === Z.FetchState.FETCHING),
    G = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: ec,
      similarLoadId: ev
    } = (0, _.useStateFromStoresObject)([Z.default], () => {
      let e = {
          applicationId: p,
          guildId: h
        },
        t = Z.default.getSimilarApplications(e);
      return null == t ? t = Z.default.getSimilarApplications(G.current) : G.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    ex = a.useMemo(() => null == ec ? void 0 : ec.slice(0, 3), [ec]),
    eN = (0, _.useStateFromStores)([z.default], () => z.default.getApplicationFetchState(p)),
    [ey, ej] = a.useState(void 0),
    [eO, eS] = a.useState(null != f ? f : eu.ApplicationDirectoryProfileSections.GENERAL),
    eL = (0, _.useStateFromStores)([Y.default], () => Y.default.isFocused()),
    eD = (0, _.useStateFromStores)([M.default], () => M.default.locale),
    eM = a.useRef(p),
    eb = (0, _.useStateFromStores)([z.default], () => {
      let e = z.default.getApplication(p);
      return null == e ? e = z.default.getApplication(eM.current) : eM.current = p, e
    }),
    eY = (0, en.default)({
      application: eb
    }),
    ek = (0, _.useStateFromStores)([b.default], () => b.default.getSessionId());
  (0, P.usePageTitle)({
    location: null == eb ? void 0 : eb.name
  });
  let eH = a.useCallback(async () => {
    try {
      var e;
      let t = null == eb ? void 0 : null === (e = eb.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eb ? void 0 : eb.id) != null && w.default.track(em.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eb.id,
          guild_id: t
        });
        let e = {
          page: em.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, W.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eb]);
  a.useEffect(() => {
    if (null == eb) return;
    let e = new URL(location.href);
    if (E && null != ek && "true" === e.searchParams.get(eI)) {
      e.searchParams.delete(eI);
      let t = e.pathname + e.search;
      (0, L.replaceWith)(t), eH()
    }
  }, [E, eH, ek, eb]);
  let eG = a.useCallback(() => {
    var e;
    let t = null == eb ? void 0 : null === (e = eb.guild) || void 0 === e ? void 0 : e.id;
    null != t && (E ? eH() : (0, Q.redirectToLogin)({
      [eI]: "true"
    }))
  }, [eb, E, eH]);
  a.useEffect(() => {
    null != p && (eO === eu.ApplicationDirectoryProfileSections.GENERAL ? (0, ea.replaceAppDirectoryURLWith)("".concat(em.Routes.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search)) : (0, ea.replaceAppDirectoryURLWith)("".concat(em.Routes.APPLICATION_DIRECTORY_PROFILE(p, eO.toLowerCase())).concat(location.search)))
  }, [p, eO]), a.useEffect(() => {
    null != p && K.getApplication(p)
  }, [p]), a.useEffect(() => {
    if ((null == eb ? void 0 : eb.directory_entry) != null) {
      let e = eb.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      if (null != t) {
        let e = t.map(e => (0, T.buildCommand)({
          rootCommand: e,
          command: e,
          applicationId: e.application_id
        }));
        ej(e)
      } else ej(void 0)
    }
  }, [eb]), a.useEffect(() => {
    null != p && R.current !== p && (eS(eu.ApplicationDirectoryProfileSections.GENERAL), R.current = void 0)
  }, [p]);
  let eF = U.default.getApplicationIconURL({
      id: null !== (r = null == eb ? void 0 : eb.id) && void 0 !== r ? r : "-1",
      icon: null == eb ? void 0 : eb.icon,
      size: eg
    }),
    ew = (0, y.default)({
      id: null !== (o = null == eb ? void 0 : eb.id) && void 0 !== o ? o : "",
      label: ep.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eU,
      install: eB
    } = (0, J.useInstallApplication)(eb, h),
    eV = null === (t = (0, ei.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eb ? void 0 : eb.id) != null && w.default.track(em.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eV,
      application_id: eb.id,
      guild_id: h,
      shown_mutual_guilds_count: eY.length
    })
  }, [null == eb ? void 0 : eb.id, h, eY]);
  let eW = a.useMemo(() => {
      var e;
      let t = null == eb ? void 0 : null === (e = eb.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return j.OrderedPermissions.filter(e => m.has(m.deserialize(t), e))
    }, [null == eb ? void 0 : null === (n = eb.install_params) || void 0 === n ? void 0 : n.permissions]),
    eK = a.useCallback(e => {
      eS(e), N.current = !0, (null == eb ? void 0 : eb.id) != null && w.default.track(em.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eb.id,
        guild_id: h,
        tab_name: e
      })
    }, [null == eb ? void 0 : eb.id, h]),
    ez = a.useMemo(() => {
      var e, t, l;
      return null !== (l = (null !== (t = null == eb ? void 0 : null === (e = eb.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eR).filter(V.isNotNullish)) && void 0 !== l ? l : []
    }, [eb]),
    eZ = a.useCallback((e, t) => {
      if (e.type === em.CarouselMediaTypes.IMG) {
        let t = ez.filter(e => e.type === em.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, I.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, C.openModalLazy)(async () => {
          let {
            default: e
          } = await l.el("100814").then(l.bind(l, "100814"));
          return t => {
            let {
              ...l
            } = t;
            return (0, i.jsx)(e, {
              ...l,
              items: n,
              startingIndex: a,
              modalCarouselItemClassName: e_.appSlide
            })
          }
        })
      }
    }, [ez]),
    eq = a.useCallback(e => {
      (null == eb ? void 0 : eb.id) != null && w.default.track(em.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eb.id,
        guild_id: h
      }), (0, ea.goToCategory)({
        categoryId: e.id
      })
    }, [eb, h]);
  a.useEffect(() => {
    null != p && K.getSimilarApplications({
      applicationId: p,
      guildId: h
    })
  }, [p, h]);
  let eX = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      (null == eb ? void 0 : eb.id) != null && w.default.track(em.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eb.id,
        suggested_application_id: t.id,
        load_id: ev,
        guild_id: h,
        shown_mutual_guilds_count: l.length
      }), (0, ea.goToApplication)({
        applicationId: t.id
      })
    }, [null == eb ? void 0 : eb.id, ev, h]),
    eJ = a.useCallback(() => {
      null != eb && (0, x.default)(function(e, t) {
        let l = "https://".concat(em.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
      }(eD, eb))
    }, [eD, eb]),
    eQ = a.useCallback(e => (0, i.jsxs)(C.Menu, {
      navId: "application-directory-profile",
      "aria-label": ep.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(C.MenuGroup, {
        children: (0, i.jsx)(C.MenuItem, {
          id: "report",
          label: ep.default.Messages.REPORT_APP,
          color: "danger",
          action: eJ
        })
      }), null != ew ? (0, i.jsx)(C.MenuGroup, {
        children: ew
      }) : null]
    }), [ew, eJ]),
    [e$, e0] = (0, v.default)(!1, 1e3),
    e1 = a.useCallback(() => {
      null != eb && (w.default.track(em.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eb.id,
        guild_id: h
      }), (0, B.copy)(eE(eb.id)), e0(!0))
    }, [eb, e0, h]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (E && "true" === e.searchParams.get(eA)) {
      e.searchParams.delete(eA);
      let t = e.pathname + e.search;
      (0, L.replaceWith)(t), eB("product_page")
    }
  }, [E, eB]);
  let e7 = a.useCallback(() => {
      null != eb && (E ? eB("product_page") : (w.default.track(em.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: p,
        guild_id: h,
        auth_type: null != eb.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, Q.redirectToLogin)({
        [eA]: "true"
      })))
    }, [eb, E, eB, p, h]),
    {
      applicationSubscriptionListingsShown: e4
    } = (0, O.default)({
      applicationId: null == eb ? void 0 : eb.id,
      groupListingId: null == eb ? void 0 : eb.primary_sku_id,
      guildId: h
    }),
    e8 = (null == eb ? void 0 : eb.id) === "936929561302675456",
    [e9, e3] = a.useState(!1),
    [e6, e2] = a.useState(!1),
    [e5, te] = a.useState(!0),
    tt = e => {
      null != e && e3(e.scrollHeight > e.clientHeight)
    },
    tl = null != eW && eW.length > 0,
    ti = (null == eb ? void 0 : eb.flags) != null,
    ta = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (eO) {
        case eu.ApplicationDirectoryProfileSections.GENERAL: {
          var l, a;
          let n = null == eb ? void 0 : null === (l = eb.directory_entry) || void 0 === l ? void 0 : l.detailed_description;
          null != n && n.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: e_.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: tt,
              className: s({
                [e_.descriptionClamp]: !e6,
                [e_.descriptionClampSafari]: !e6 && "Safari" === c.name
              }),
              children: (0, i.jsx)(k.default, {
                className: e_.detailedDescription,
                parser: eh,
                output: eC,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e9 || e6) && (0, i.jsx)(eT, {
              isViewAll: e6,
              onToggle: () => {
                e2(e => !e)
              }
            })]
          })), t = !1) : (null == eb ? void 0 : null === (a = eb.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: e_.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eb.directory_entry.short_description
            })]
          })) : (null == eb ? void 0 : eb.description) != null && e.push((0, i.jsx)(D.default, {
            className: e_.description,
            userBio: eb.description
          })), null != ey && ey.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: e_.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(es.default, {
              className: e_.commandList,
              commands: ey
            })]
          })), t = !0);
          break
        }
        case eu.ApplicationDirectoryProfileSections.IMAGES: {
          let t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: e_.errorImage,
              src: ef,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(C.Heading, {
              variant: "heading-xl/semibold",
              children: ep.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          ez.forEach((e, t) => {
            null != eb ? e.alt = ep.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: ez.length,
              name: eb.name
            }) : e.alt = ep.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, i.jsx)(A.default, {
            className: e_.carousel,
            themedPagination: !0,
            items: ez,
            autoplayInterval: 8e3,
            paused: !eL,
            videoAutoPlay: !0,
            onCurrentItemClick: eZ,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: l
              } = e;
              null != l && null != eb && w.default.track(em.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eb.id,
                load_time_ms: l,
                src: t
              })
            }
          }));
          break
        }
        case eu.ApplicationDirectoryProfileSections.PREMIUM:
          e4 && (null == eb ? void 0 : eb.primary_sku_id) != null && e.push((0, i.jsx)(S.default, {
            applicationId: eb.id,
            applicationPrimarySkuId: null == eb ? void 0 : eb.primary_sku_id,
            analyticsLocation: em.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case eu.ApplicationDirectoryProfileSections.PRIVACY:
          tl && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: e_.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(g.default, {
              className: e_.commandList,
              grantedPermissions: eW,
              grantedPermissionsHeader: ep.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), ti && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: e_.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(er.default, {
              application: eb
            })]
          }))
      }
      return te(t), e.map((e, t) => (0, i.jsx)("div", {
        className: e_.section,
        children: e
      }, t))
    }, [eb, e4, ez, ey, eW, eZ, eL, eO, e6, e9, tl, ti]),
    tn = a.useMemo(() => {
      let e = R.current === p,
        t = e && !N.current,
        l = [{
          sectionName: eu.ApplicationDirectoryProfileSections.GENERAL,
          sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
        }];
      return ez.length > 0 && (l.push({
        sectionName: eu.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), t && f === eu.ApplicationDirectoryProfileSections.IMAGES && eS(f)), e4 && (l.push({
        sectionName: eu.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), t && f === eu.ApplicationDirectoryProfileSections.PREMIUM && eS(f)), (tl || ti) && (l.push({
        sectionName: eu.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), t && f === eu.ApplicationDirectoryProfileSections.PRIVACY && eS(f)), l
    }, [ez.length, e4, tl, ti, f, p]);
  return d = null == eb ? null == eN || eN === z.FetchState.FETCHING ? (0, i.jsx)(et.default, {
    loading: eN === z.FetchState.FETCHING
  }) : (0, i.jsx)("div", {
    className: e_.page,
    children: (0, i.jsxs)("div", {
      className: e_.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: e_.emptyImage,
        src: ef,
        alt: ""
      }), (0, i.jsx)(C.Heading, {
        variant: "heading-xl/semibold",
        children: ep.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(et.default, {
    loading: eN === z.FetchState.FETCHING,
    children: [(0, i.jsx)(eP, {
      app: eb,
      iconSrc: eF
    }), (0, i.jsxs)("div", {
      className: e_.page,
      children: [(0, i.jsxs)("div", {
        className: e_.header,
        children: [(0, i.jsxs)("div", {
          className: e_.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: e_.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eF,
            width: eg,
            height: eg
          }), (0, i.jsx)(ee.default, {
            application: eb,
            mutualGuilds: eY,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: e_.headerContent,
          children: [(0, i.jsxs)("div", {
            className: e_.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: e_.headerNameAndIcon,
              children: [(0, i.jsx)(C.Heading, {
                className: e_.name,
                variant: "heading-xxl/semibold",
                children: eb.name
              }), e4 && (0, i.jsx)(C.Tooltip, {
                tooltipClassName: e_.premiumIconTooltip,
                text: ep.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: ep.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: e_.premiumIcon,
                  src: l("92640")
                })
              }), e8 && (0, i.jsx)(el.default, {
                className: e_.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: s(e_.buttons),
              children: [(0, i.jsx)(C.Button, {
                onClick: e1,
                color: C.Button.Colors.PRIMARY,
                children: e$ ? ep.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : ep.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(C.Button, {
                color: C.Button.Colors.BRAND,
                onClick: e7,
                disabled: !eU,
                children: ep.default.Messages.APP_DIRECTORY_PROFILE_ADD_BUTTON
              }), (0, i.jsx)(C.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return eQ(t)
                },
                position: "left",
                align: "top",
                animation: C.Popout.Animation.NONE,
                children: e => (0, i.jsx)(C.Clickable, {
                  className: e_.overflow,
                  ...e,
                  children: (0, i.jsx)(F.default, {
                    width: 20,
                    height: 20,
                    className: e_.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(ed.default, {
            activeSection: eO,
            setSection: eK,
            shownSections: tn
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: e_.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: e_.content,
          children: [ta, null != ex && ex.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [e5 && (0, i.jsx)("div", {
              className: e_.separator
            }), (0, i.jsxs)("div", {
              className: e_.section,
              children: [(0, i.jsx)(C.Heading, {
                className: e_.relatedHeader,
                variant: "eyebrow",
                children: ep.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(et.default, {
                loading: H,
                children: (0, i.jsx)($.default, {
                  applications: ex,
                  onViewOne: eX
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(eo.default, {
          className: e_.sidebar,
          application: eb,
          guildId: h,
          onViewCategory: eq,
          onClickGuildWidget: eG
        })]
      })]
    })]
  }), (0, i.jsx)(X.default, {
    children: d
  })
}

function eR(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: em.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let i = ev(e.url);
      if (null != i) return {
        type: em.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eT = e => {
    let t, {
      onToggle: l,
      isViewAll: a
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: e_.showMoreButtonText,
        variant: "eyebrow",
        children: ep.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(G.default, {
        className: e_.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: e_.showMoreButtonText,
        variant: "eyebrow",
        children: ep.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(H.default, {
        className: e_.showMoreButtonIcon
      })]
    }), (0, i.jsx)(eN, {
      children: (0, i.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        color: C.Button.Colors.TRANSPARENT,
        size: C.Button.Sizes.NONE,
        className: e_.showMoreButton,
        innerClassName: e_.showMoreButtonInner,
        onClick: l,
        children: t
      })
    })
  },
  eN = e => {
    let {
      className: t,
      contentClassName: l,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: s([e_.dividerContainer, t]),
      children: [(0, i.jsx)("div", {
        className: e_.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s(e_.contentDivider, l),
          children: a
        }), (0, i.jsx)("div", {
          className: e_.divider
        })]
      }) : null]
    })
  };

function eP(e) {
  let {
    app: t,
    iconSrc: l
  } = e, n = (0, N.default)(l, f.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, _.useStateFromStores)([R.default], () => R.default.useReducedMotion), c = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, U.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, U.getUserBannerURL)({
          id: s.id,
          banner: s.banner,
          size: 1024,
          canAnimate: !0
        });
        null != t && (e["--custom-background-animated"] = "url(".concat(t))
      }
    }
    return e
  }, [n, s, r]);
  return (0, i.jsx)("div", {
    style: c,
    className: e_.headerBanner
  })
}