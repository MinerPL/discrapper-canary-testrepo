"use strict";
l.r(t), l.d(t, {
  default: function() {
    return eN
  }
}), l("610138"), l("216116"), l("78328"), l("815648"), l("47120"), l("315314"), l("789020"), l("653041");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("525654"),
  c = l.n(r),
  o = l("302454"),
  d = l.n(o),
  u = l("873546"),
  p = l("149765"),
  _ = l("468194"),
  m = l("442837"),
  f = l("692547"),
  h = l("477690"),
  C = l("481060"),
  g = l("995648"),
  I = l("445986"),
  A = l("9807"),
  E = l("911969"),
  v = l("330726"),
  x = l("782568"),
  R = l("607070"),
  T = l("581364"),
  N = l("395661"),
  P = l("970321"),
  y = l("220082"),
  j = l("252618"),
  S = l("299206"),
  O = l("422559"),
  L = l("270144"),
  D = l("864843"),
  M = l("703656"),
  b = l("588822"),
  k = l("706454"),
  Y = l("314897"),
  H = l("451478"),
  G = l("729035"),
  F = l("86813"),
  w = l("826026"),
  U = l("808268"),
  B = l("626135"),
  V = l("768581"),
  W = l("572004"),
  K = l("823379"),
  z = l("900849"),
  Z = l("674588"),
  q = l("264043"),
  X = l("303383"),
  J = l("887706"),
  Q = l("738130"),
  $ = l("4461"),
  ee = l("34674"),
  et = l("576958"),
  el = l("924489"),
  ei = l("125909"),
  ea = l("409425"),
  en = l("132871"),
  es = l("147890"),
  er = l("491576"),
  ec = l("95650"),
  eo = l("940064"),
  ed = l("626004"),
  eu = l("939893"),
  ep = l("430913"),
  e_ = l("606183"),
  em = l("272242"),
  ef = l("981631"),
  eh = l("689938"),
  eC = l("922989"),
  eg = l("902294");
let eI = d().parserFor(eu.default),
  eA = d().reactFor(d().ruleOutput(eu.default, "react")),
  eE = (0, _.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  ev = "redirect_to_support_server",
  ex = "start_application_install",
  eR = e => "".concat(location.protocol, "//").concat(location.host).concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eT = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function eN(e) {
  var t, n, r, o, d;
  let _, {
      applicationId: f,
      initialSection: h
    } = e,
    E = (0, en.useApplicationDirectoryHistory)(e => e.guildId),
    R = (0, J.default)(),
    y = a.useRef(f),
    F = a.useRef(!1),
    w = (0, m.useStateFromStores)([X.default], () => X.default.getFetchState({
      applicationId: f,
      guildId: E
    }) === X.FetchState.FETCHING),
    eu = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: eT,
      similarLoadId: eN
    } = (0, m.useStateFromStoresObject)([X.default], () => {
      let e = {
          applicationId: f,
          guildId: E
        },
        t = X.default.getSimilarApplications(e);
      return null == t ? t = X.default.getSimilarApplications(eu.current) : eu.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    ej = a.useMemo(() => null == eT ? void 0 : eT.slice(0, 3), [eT]),
    eO = (0, m.useStateFromStores)([q.default], () => q.default.getApplicationFetchState(f)),
    [eL, eD] = a.useState(void 0),
    [eM, eb] = a.useState(null != h ? h : em.ApplicationDirectoryProfileSections.GENERAL),
    ek = (0, m.useStateFromStores)([H.default], () => H.default.isFocused()),
    eY = (0, m.useStateFromStores)([k.default], () => k.default.locale),
    eH = a.useRef(f),
    eG = (0, m.useStateFromStores)([q.default], () => {
      let e = q.default.getApplication(f);
      return null == e ? e = q.default.getApplication(eH.current) : eH.current = f, e
    }),
    eF = (0, er.default)({
      application: eG
    }),
    ew = (0, m.useStateFromStores)([Y.default], () => Y.default.getSessionId());
  (0, j.usePageTitle)({
    location: null == eG ? void 0 : eG.name
  });
  let eU = a.useCallback(async () => {
    try {
      var e;
      let t = null == eG ? void 0 : null === (e = eG.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eG ? void 0 : eG.id) != null && B.default.track(ef.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eG.id,
          guild_id: t
        });
        let e = {
          page: ef.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, z.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eG]);
  a.useEffect(() => {
    if (null == eG) return;
    let e = new URL(location.href);
    if (R && null != ew && "true" === e.searchParams.get(ev)) {
      e.searchParams.delete(ev);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), eU()
    }
  }, [R, eU, ew, eG]);
  let eB = a.useCallback(() => {
    var e;
    null != (null == eG ? void 0 : null === (e = eG.guild) || void 0 === e ? void 0 : e.id) && (R ? eU() : (0, ee.redirectToLogin)({
      [ev]: "true"
    }))
  }, [eG, R, eU]);
  a.useEffect(() => {
    null != f && (eM === em.ApplicationDirectoryProfileSections.GENERAL ? (0, es.replaceAppDirectoryURLWith)("".concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(f)).concat(location.search)) : (0, es.replaceAppDirectoryURLWith)("".concat(ef.Routes.APPLICATION_DIRECTORY_PROFILE(f, eM.toLowerCase())).concat(location.search)))
  }, [f, eM]), a.useEffect(() => {
    null != f && Z.getApplication(f)
  }, [f]), a.useEffect(() => {
    if ((null == eG ? void 0 : eG.directory_entry) != null) {
      let e = eG.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eD(t.map(e => (0, T.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eD(void 0)
    }
  }, [eG]), a.useEffect(() => {
    null != f && y.current !== f && (eb(em.ApplicationDirectoryProfileSections.GENERAL), y.current = void 0)
  }, [f]);
  let eV = V.default.getApplicationIconURL({
      id: null !== (r = null == eG ? void 0 : eG.id) && void 0 !== r ? r : "-1",
      icon: null == eG ? void 0 : eG.icon,
      size: eE
    }),
    eW = (0, S.default)({
      id: null !== (o = null == eG ? void 0 : eG.id) && void 0 !== o ? o : "",
      label: eh.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eK,
      install: ez
    } = (0, $.useInstallApplication)(eG, E),
    eZ = null === (t = (0, en.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eG ? void 0 : eG.id) != null && B.default.track(ef.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eZ,
      application_id: eG.id,
      guild_id: E,
      shown_mutual_guilds_count: eF.length
    })
  }, [null == eG ? void 0 : eG.id, E, eF]);
  let eq = a.useMemo(() => {
      var e;
      let t = null == eG ? void 0 : null === (e = eG.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return O.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eG ? void 0 : null === (n = eG.install_params) || void 0 === n ? void 0 : n.permissions]),
    eX = a.useCallback(e => {
      eb(e), F.current = !0, (null == eG ? void 0 : eG.id) != null && B.default.track(ef.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eG.id,
        guild_id: E,
        tab_name: e
      })
    }, [null == eG ? void 0 : eG.id, E]),
    eJ = a.useMemo(() => {
      var e, t, l;
      return null !== (l = (null !== (t = null == eG ? void 0 : null === (e = eG.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eP).filter(K.isNotNullish)) && void 0 !== l ? l : []
    }, [eG]),
    eQ = a.useCallback((e, t) => {
      if (e.type === ef.CarouselMediaTypes.IMG) {
        let t = eJ.filter(e => e.type === ef.CarouselMediaTypes.IMG),
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
          } = await Promise.all([l.e("99387"), l.e("41814")]).then(l.bind(l, "895023"));
          return t => {
            let {
              ...l
            } = t;
            return (0, i.jsx)(e, {
              ...l,
              items: n,
              startingIndex: a,
              modalCarouselItemClassName: eC.appSlide
            })
          }
        })
      }
    }, [eJ]),
    e$ = a.useCallback(e => {
      (null == eG ? void 0 : eG.id) != null && B.default.track(ef.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eG.id,
        guild_id: E
      }), (0, es.goToCategory)({
        categoryId: e.id
      })
    }, [eG, E]);
  a.useEffect(() => {
    null != f && Z.getSimilarApplications({
      applicationId: f,
      guildId: E
    })
  }, [f, E]);
  let e0 = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      (null == eG ? void 0 : eG.id) != null && B.default.track(ef.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eG.id,
        suggested_application_id: t.id,
        load_id: eN,
        guild_id: E,
        shown_mutual_guilds_count: l.length
      }), (0, es.goToApplication)({
        applicationId: t.id
      })
    }, [null == eG ? void 0 : eG.id, eN, E]),
    e1 = a.useCallback(() => {
      null != eG && (0, x.default)(function(e, t) {
        let l = "https://".concat(ef.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
      }(eY, eG))
    }, [eY, eG]),
    e7 = a.useCallback(e => (0, i.jsxs)(C.Menu, {
      navId: "application-directory-profile",
      "aria-label": eh.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(C.MenuGroup, {
        children: (0, i.jsx)(C.MenuItem, {
          id: "report",
          label: eh.default.Messages.REPORT_APP,
          color: "danger",
          action: e1
        })
      }), null != eW ? (0, i.jsx)(C.MenuGroup, {
        children: eW
      }) : null]
    }), [eW, e1]),
    [e4, e3] = (0, v.default)(!1, 1e3),
    e8 = a.useCallback(() => {
      null != eG && (B.default.track(ef.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eG.id,
        guild_id: E
      }), (0, W.copy)(eR(eG.id)), e3(!0))
    }, [eG, e3, E]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (R && "true" === e.searchParams.get(ex)) {
      e.searchParams.delete(ex);
      let t = e.pathname + e.search;
      (0, M.replaceWith)(t), ez("product_page")
    }
  }, [R, ez]);
  let e6 = a.useCallback(() => {
      null != eG && (R ? ez("product_page") : (B.default.track(ef.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: f,
        guild_id: E,
        auth_type: null != eG.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, ee.redirectToLogin)({
        [ex]: "true"
      })))
    }, [eG, R, ez, f, E]),
    {
      applicationSubscriptionListingsShown: e5
    } = (0, L.default)({
      applicationId: null == eG ? void 0 : eG.id,
      groupListingId: null == eG ? void 0 : eG.primary_sku_id,
      guildId: E
    }),
    e9 = (null == eG ? void 0 : eG.id) === "936929561302675456",
    [e2, te] = a.useState(!1),
    [tt, tl] = a.useState(!1),
    [ti, ta] = a.useState(!0),
    tn = e => {
      null != e && te(e.scrollHeight > e.clientHeight)
    },
    ts = null != eq && eq.length > 0,
    tr = (null == eG ? void 0 : eG.flags) != null,
    {
      enabled: tc
    } = N.appStorefrontExperiment.useExperiment({
      location: "ApplicationDirectoryProfile"
    }),
    to = (0, P.useAppStorefrontAvailable)(null !== (d = null == eG ? void 0 : eG.id) && void 0 !== d ? d : ""),
    td = tc && to,
    tu = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (eM) {
        case em.ApplicationDirectoryProfileSections.GENERAL: {
          var l, a;
          let n = null == eG ? void 0 : null === (l = eG.directory_entry) || void 0 === l ? void 0 : l.detailed_description;
          null != n && n.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eC.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: tn,
              className: s()({
                [eC.descriptionClamp]: !tt,
                [eC.descriptionClampSafari]: !tt && "Safari" === c().name
              }),
              children: (0, i.jsx)(G.default, {
                className: eC.detailedDescription,
                parser: eI,
                output: eA,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e2 || tt) && (0, i.jsx)(ey, {
              isViewAll: tt,
              onToggle: () => {
                tl(e => !e)
              }
            })]
          })), t = !1) : (null == eG ? void 0 : null === (a = eG.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eC.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eG.directory_entry.short_description
            })]
          })) : (null == eG ? void 0 : eG.description) != null && e.push((0, i.jsx)(b.default, {
            className: eC.description,
            userBio: eG.description
          })), null != eL && eL.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eC.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(eo.default, {
              className: eC.commandList,
              commands: eL
            })]
          })), t = !0);
          break
        }
        case em.ApplicationDirectoryProfileSections.IMAGES: {
          let t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: eC.errorImage,
              src: eg,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(C.Heading, {
              variant: "heading-xl/semibold",
              children: eh.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eJ.forEach((e, t) => {
            null != eG ? e.alt = eh.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: eJ.length,
              name: eG.name
            }) : e.alt = eh.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, i.jsx)(A.default, {
            className: eC.carousel,
            themedPagination: !0,
            items: eJ,
            autoplayInterval: 8e3,
            paused: !ek,
            videoAutoPlay: !0,
            onCurrentItemClick: eQ,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: l
              } = e;
              null != l && null != eG && B.default.track(ef.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eG.id,
                load_time_ms: l,
                src: t
              })
            }
          }));
          break
        }
        case em.ApplicationDirectoryProfileSections.PREMIUM:
          e5 && (null == eG ? void 0 : eG.primary_sku_id) != null && e.push((0, i.jsx)(D.default, {
            applicationId: eG.id,
            applicationPrimarySkuId: null == eG ? void 0 : eG.primary_sku_id,
            analyticsLocation: ef.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case em.ApplicationDirectoryProfileSections.PRIVACY:
          ts && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eC.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(g.default, {
              className: eC.commandList,
              grantedPermissions: eq,
              grantedPermissionsHeader: eh.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tr && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eC.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(ed.default, {
              application: eG
            })]
          }));
          break;
        default:
          (0, K.assertNever)(eM)
      }
      return ta(t), e.map((e, t) => (0, i.jsx)("div", {
        className: eC.section,
        children: e
      }, t))
    }, [eG, e5, eJ, eL, eq, eQ, ek, eM, tt, e2, ts, tr]),
    tp = a.useMemo(() => {
      let e = y.current === f && !F.current,
        t = [{
          sectionName: em.ApplicationDirectoryProfileSections.GENERAL,
          sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
        }];
      return eJ.length > 0 && (t.push({
        sectionName: em.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), e && h === em.ApplicationDirectoryProfileSections.IMAGES && eb(h)), e5 && !td && (t.push({
        sectionName: em.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), e && h === em.ApplicationDirectoryProfileSections.PREMIUM && eb(h)), (ts || tr) && (t.push({
        sectionName: em.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e && h === em.ApplicationDirectoryProfileSections.PRIVACY && eb(h)), t
    }, [eJ.length, e5, ts, tr, h, f, td]);
  return _ = null == eG ? null == eO || eO === q.FetchState.FETCHING ? (0, i.jsx)(ei.default, {
    loading: eO === q.FetchState.FETCHING
  }) : (0, i.jsx)("div", {
    className: eC.__invalid_page,
    children: (0, i.jsxs)("div", {
      className: eC.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: eC.emptyImage,
        src: eg,
        alt: ""
      }), (0, i.jsx)(C.Heading, {
        variant: "heading-xl/semibold",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(ei.default, {
    loading: eO === q.FetchState.FETCHING,
    children: [(0, i.jsx)(eS, {
      app: eG,
      iconSrc: eV
    }), (0, i.jsxs)("div", {
      className: eC.__invalid_page,
      children: [(0, i.jsxs)("div", {
        className: eC.header,
        children: [(0, i.jsxs)("div", {
          className: eC.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: eC.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eV,
            width: eE,
            height: eE
          }), (0, i.jsx)(el.default, {
            application: eG,
            mutualGuilds: eF,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: eC.headerContent,
          children: [(0, i.jsxs)("div", {
            className: eC.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: eC.headerNameAndIcon,
              children: [(0, i.jsx)(C.Heading, {
                className: eC.name,
                variant: "heading-xxl/semibold",
                children: eG.name
              }), e5 && (0, i.jsx)(C.Tooltip, {
                tooltipClassName: eC.premiumIconTooltip,
                text: eh.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: eh.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eC.premiumIcon,
                  src: l("744050")
                })
              }), e9 && (0, i.jsx)(ea.default, {
                className: eC.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: eC.buttons,
              children: [td && (0, i.jsx)(ec.ApplicationDirectoryStoreBtn, {
                appId: eG.id,
                guildId: null != E ? E : void 0
              }), (0, i.jsx)(C.Button, {
                onClick: e8,
                color: C.Button.Colors.PRIMARY,
                children: e4 ? eh.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eh.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(C.Button, {
                color: C.Button.Colors.BRAND,
                onClick: e6,
                disabled: !eK,
                children: eh.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, i.jsx)(C.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e7(t)
                },
                position: "left",
                align: "top",
                animation: C.Popout.Animation.NONE,
                children: e => (0, i.jsx)(C.Clickable, {
                  className: eC.overflow,
                  ...e,
                  children: (0, i.jsx)(U.default, {
                    width: 20,
                    height: 20,
                    className: eC.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(e_.default, {
            activeSection: eM,
            setSection: eX,
            shownSections: tp
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: eC.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: eC.content,
          children: [tu, null != ej && ej.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [ti && (0, i.jsx)("div", {
              className: eC.separator
            }), (0, i.jsxs)("div", {
              className: eC.section,
              children: [(0, i.jsx)(C.Heading, {
                className: eC.relatedHeader,
                variant: "eyebrow",
                children: eh.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(ei.default, {
                loading: w,
                children: (0, i.jsx)(et.default, {
                  applications: ej,
                  onViewOne: e0
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(ep.default, {
          className: eC.sidebar,
          application: eG,
          guildId: E,
          onViewCategory: e$,
          onClickGuildWidget: eB
        })]
      })]
    })]
  }), (0, i.jsx)(Q.default, {
    children: _
  })
}

function eP(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: ef.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let i = eT(e.url);
      if (null != i) return {
        type: ef.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let ey = e => {
    let t, {
      onToggle: l,
      isViewAll: a
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: eC.showMoreButtonText,
        variant: "eyebrow",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(w.default, {
        className: eC.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: eC.showMoreButtonText,
        variant: "eyebrow",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(F.default, {
        className: eC.showMoreButtonIcon
      })]
    }), (0, i.jsx)(ej, {
      children: (0, i.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        color: C.Button.Colors.TRANSPARENT,
        size: C.Button.Sizes.NONE,
        className: eC.showMoreButton,
        innerClassName: eC.showMoreButtonInner,
        onClick: l,
        children: t
      })
    })
  },
  ej = e => {
    let {
      className: t,
      contentClassName: l,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: s()([eC.dividerContainer, t]),
      children: [(0, i.jsx)("div", {
        className: eC.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(eC.contentDivider, l),
          children: a
        }), (0, i.jsx)("div", {
          className: eC.divider
        })]
      }) : null]
    })
  };

function eS(e) {
  let {
    app: t,
    iconSrc: l
  } = e, n = (0, y.default)(l, f.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, m.useStateFromStores)([R.default], () => R.default.useReducedMotion), c = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, V.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, V.getUserBannerURL)({
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
    className: eC.headerBanner
  })
}