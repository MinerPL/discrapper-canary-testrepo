"use strict";
l.r(t), l.d(t, {
  default: function() {
    return eT
  }
}), l("610138"), l("216116"), l("78328"), l("815648"), l("47120"), l("315314"), l("789020"), l("653041");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
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
  P = l("220082"),
  y = l("252618"),
  j = l("299206"),
  S = l("422559"),
  O = l("270144"),
  L = l("864843"),
  D = l("703656"),
  M = l("588822"),
  b = l("706454"),
  k = l("314897"),
  Y = l("451478"),
  H = l("729035"),
  G = l("86813"),
  F = l("826026"),
  w = l("808268"),
  U = l("626135"),
  B = l("768581"),
  V = l("572004"),
  W = l("823379"),
  K = l("900849"),
  z = l("674588"),
  Z = l("264043"),
  q = l("303383"),
  X = l("887706"),
  J = l("738130"),
  Q = l("4461"),
  $ = l("34674"),
  ee = l("576958"),
  et = l("924489"),
  el = l("125909"),
  ei = l("409425"),
  ea = l("132871"),
  en = l("147890"),
  es = l("491576"),
  er = l("95650"),
  ec = l("940064"),
  eo = l("626004"),
  ed = l("939893"),
  eu = l("430913"),
  ep = l("606183"),
  e_ = l("272242"),
  em = l("981631"),
  ef = l("689938"),
  eh = l("74869"),
  eC = l("902294");
let eg = d().parserFor(ed.default),
  eI = d().reactFor(d().ruleOutput(ed.default, "react")),
  eA = (0, _.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eE = "redirect_to_support_server",
  ev = "start_application_install",
  ex = e => "".concat(location.protocol, "//").concat(location.host).concat(em.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eR = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function eT(e) {
  var t, n, r, o;
  let d, {
      applicationId: _,
      initialSection: f
    } = e,
    h = (0, ea.useApplicationDirectoryHistory)(e => e.guildId),
    E = (0, X.default)(),
    R = a.useRef(_),
    P = a.useRef(!1),
    G = (0, m.useStateFromStores)([q.default], () => q.default.getFetchState({
      applicationId: _,
      guildId: h
    }) === q.FetchState.FETCHING),
    F = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: ed,
      similarLoadId: eR
    } = (0, m.useStateFromStoresObject)([q.default], () => {
      let e = {
          applicationId: _,
          guildId: h
        },
        t = q.default.getSimilarApplications(e);
      return null == t ? t = q.default.getSimilarApplications(F.current) : F.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    eT = a.useMemo(() => null == ed ? void 0 : ed.slice(0, 3), [ed]),
    ey = (0, m.useStateFromStores)([Z.default], () => Z.default.getApplicationFetchState(_)),
    [eS, eO] = a.useState(void 0),
    [eL, eD] = a.useState(null != f ? f : e_.ApplicationDirectoryProfileSections.GENERAL),
    eM = (0, m.useStateFromStores)([Y.default], () => Y.default.isFocused()),
    eb = (0, m.useStateFromStores)([b.default], () => b.default.locale),
    ek = a.useRef(_),
    eY = (0, m.useStateFromStores)([Z.default], () => {
      let e = Z.default.getApplication(_);
      return null == e ? e = Z.default.getApplication(ek.current) : ek.current = _, e
    }),
    eH = (0, es.default)({
      application: eY
    }),
    eG = (0, m.useStateFromStores)([k.default], () => k.default.getSessionId());
  (0, y.usePageTitle)({
    location: null == eY ? void 0 : eY.name
  });
  let eF = a.useCallback(async () => {
    try {
      var e;
      let t = null == eY ? void 0 : null === (e = eY.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eY ? void 0 : eY.id) != null && U.default.track(em.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eY.id,
          guild_id: t
        });
        let e = {
          page: em.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, K.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eY]);
  a.useEffect(() => {
    if (null == eY) return;
    let e = new URL(location.href);
    if (E && null != eG && "true" === e.searchParams.get(eE)) {
      e.searchParams.delete(eE);
      let t = e.pathname + e.search;
      (0, D.replaceWith)(t), eF()
    }
  }, [E, eF, eG, eY]);
  let ew = a.useCallback(() => {
    var e;
    null != (null == eY ? void 0 : null === (e = eY.guild) || void 0 === e ? void 0 : e.id) && (E ? eF() : (0, $.redirectToLogin)({
      [eE]: "true"
    }))
  }, [eY, E, eF]);
  a.useEffect(() => {
    null != _ && (eL === e_.ApplicationDirectoryProfileSections.GENERAL ? (0, en.replaceAppDirectoryURLWith)("".concat(em.Routes.APPLICATION_DIRECTORY_PROFILE(_)).concat(location.search)) : (0, en.replaceAppDirectoryURLWith)("".concat(em.Routes.APPLICATION_DIRECTORY_PROFILE(_, eL.toLowerCase())).concat(location.search)))
  }, [_, eL]), a.useEffect(() => {
    null != _ && z.getApplication(_)
  }, [_]), a.useEffect(() => {
    if ((null == eY ? void 0 : eY.directory_entry) != null) {
      let e = eY.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eO(t.map(e => (0, T.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eO(void 0)
    }
  }, [eY]), a.useEffect(() => {
    null != _ && R.current !== _ && (eD(e_.ApplicationDirectoryProfileSections.GENERAL), R.current = void 0)
  }, [_]);
  let eU = B.default.getApplicationIconURL({
      id: null !== (r = null == eY ? void 0 : eY.id) && void 0 !== r ? r : "-1",
      icon: null == eY ? void 0 : eY.icon,
      size: eA
    }),
    eB = (0, j.default)({
      id: null !== (o = null == eY ? void 0 : eY.id) && void 0 !== o ? o : "",
      label: ef.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eV,
      install: eW
    } = (0, Q.useInstallApplication)(eY, h),
    eK = null === (t = (0, ea.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eY ? void 0 : eY.id) != null && U.default.track(em.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eK,
      application_id: eY.id,
      guild_id: h,
      shown_mutual_guilds_count: eH.length
    })
  }, [null == eY ? void 0 : eY.id, h, eH]);
  let ez = a.useMemo(() => {
      var e;
      let t = null == eY ? void 0 : null === (e = eY.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return S.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eY ? void 0 : null === (n = eY.install_params) || void 0 === n ? void 0 : n.permissions]),
    eZ = a.useCallback(e => {
      eD(e), P.current = !0, (null == eY ? void 0 : eY.id) != null && U.default.track(em.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eY.id,
        guild_id: h,
        tab_name: e
      })
    }, [null == eY ? void 0 : eY.id, h]),
    eq = a.useMemo(() => {
      var e, t, l;
      return null !== (l = (null !== (t = null == eY ? void 0 : null === (e = eY.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(eN).filter(W.isNotNullish)) && void 0 !== l ? l : []
    }, [eY]),
    eX = a.useCallback((e, t) => {
      if (e.type === em.CarouselMediaTypes.IMG) {
        let t = eq.filter(e => e.type === em.CarouselMediaTypes.IMG),
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
              modalCarouselItemClassName: eh.appSlide
            })
          }
        })
      }
    }, [eq]),
    eJ = a.useCallback(e => {
      (null == eY ? void 0 : eY.id) != null && U.default.track(em.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eY.id,
        guild_id: h
      }), (0, en.goToCategory)({
        categoryId: e.id
      })
    }, [eY, h]);
  a.useEffect(() => {
    null != _ && z.getSimilarApplications({
      applicationId: _,
      guildId: h
    })
  }, [_, h]);
  let eQ = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      (null == eY ? void 0 : eY.id) != null && U.default.track(em.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eY.id,
        suggested_application_id: t.id,
        load_id: eR,
        guild_id: h,
        shown_mutual_guilds_count: l.length
      }), (0, en.goToApplication)({
        applicationId: t.id
      })
    }, [null == eY ? void 0 : eY.id, eR, h]),
    e$ = a.useCallback(() => {
      null != eY && (0, x.default)(function(e, t) {
        let l = "https://".concat(em.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
      }(eb, eY))
    }, [eb, eY]),
    e0 = a.useCallback(e => (0, i.jsxs)(C.Menu, {
      navId: "application-directory-profile",
      "aria-label": ef.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(C.MenuGroup, {
        children: (0, i.jsx)(C.MenuItem, {
          id: "report",
          label: ef.default.Messages.REPORT_APP,
          color: "danger",
          action: e$
        })
      }), null != eB ? (0, i.jsx)(C.MenuGroup, {
        children: eB
      }) : null]
    }), [eB, e$]),
    [e1, e7] = (0, v.default)(!1, 1e3),
    e4 = a.useCallback(() => {
      null != eY && (U.default.track(em.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eY.id,
        guild_id: h
      }), (0, V.copy)(ex(eY.id)), e7(!0))
    }, [eY, e7, h]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (E && "true" === e.searchParams.get(ev)) {
      e.searchParams.delete(ev);
      let t = e.pathname + e.search;
      (0, D.replaceWith)(t), eW("product_page")
    }
  }, [E, eW]);
  let e8 = a.useCallback(() => {
      null != eY && (E ? eW("product_page") : (U.default.track(em.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: _,
        guild_id: h,
        auth_type: null != eY.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, $.redirectToLogin)({
        [ev]: "true"
      })))
    }, [eY, E, eW, _, h]),
    {
      applicationSubscriptionListingsShown: e3
    } = (0, O.default)({
      applicationId: null == eY ? void 0 : eY.id,
      groupListingId: null == eY ? void 0 : eY.primary_sku_id,
      guildId: h
    }),
    e9 = (null == eY ? void 0 : eY.id) === "936929561302675456",
    [e6, e5] = a.useState(!1),
    [e2, te] = a.useState(!1),
    [tt, tl] = a.useState(!0),
    ti = e => {
      null != e && e5(e.scrollHeight > e.clientHeight)
    },
    ta = null != ez && ez.length > 0,
    tn = (null == eY ? void 0 : eY.flags) != null,
    {
      enabled: ts
    } = N.appStorefrontExperiment.useExperiment({
      location: "ApplicationDirectoryProfile"
    }),
    tr = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (eL) {
        case e_.ApplicationDirectoryProfileSections.GENERAL: {
          var l, a;
          let n = null == eY ? void 0 : null === (l = eY.directory_entry) || void 0 === l ? void 0 : l.detailed_description;
          null != n && n.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eh.sectionHeader,
              variant: "heading-md/semibold",
              children: ef.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: ti,
              className: s()({
                [eh.descriptionClamp]: !e2,
                [eh.descriptionClampSafari]: !e2 && "Safari" === c().name
              }),
              children: (0, i.jsx)(H.default, {
                className: eh.detailedDescription,
                parser: eg,
                output: eI,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e6 || e2) && (0, i.jsx)(eP, {
              isViewAll: e2,
              onToggle: () => {
                te(e => !e)
              }
            })]
          })), t = !1) : (null == eY ? void 0 : null === (a = eY.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eh.sectionHeader,
              variant: "heading-md/semibold",
              children: ef.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eY.directory_entry.short_description
            })]
          })) : (null == eY ? void 0 : eY.description) != null && e.push((0, i.jsx)(M.default, {
            className: eh.description,
            userBio: eY.description
          })), null != eS && eS.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eh.sectionHeader,
              variant: "heading-md/semibold",
              children: ef.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(ec.default, {
              className: eh.commandList,
              commands: eS
            })]
          })), t = !0);
          break
        }
        case e_.ApplicationDirectoryProfileSections.IMAGES: {
          let t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: eh.errorImage,
              src: eC,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(C.Heading, {
              variant: "heading-xl/semibold",
              children: ef.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eq.forEach((e, t) => {
            null != eY ? e.alt = ef.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: eq.length,
              name: eY.name
            }) : e.alt = ef.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, i.jsx)(A.default, {
            className: eh.carousel,
            themedPagination: !0,
            items: eq,
            autoplayInterval: 8e3,
            paused: !eM,
            videoAutoPlay: !0,
            onCurrentItemClick: eX,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: l
              } = e;
              null != l && null != eY && U.default.track(em.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eY.id,
                load_time_ms: l,
                src: t
              })
            }
          }));
          break
        }
        case e_.ApplicationDirectoryProfileSections.PREMIUM:
          e3 && (null == eY ? void 0 : eY.primary_sku_id) != null && e.push((0, i.jsx)(L.default, {
            applicationId: eY.id,
            applicationPrimarySkuId: null == eY ? void 0 : eY.primary_sku_id,
            analyticsLocation: em.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case e_.ApplicationDirectoryProfileSections.PRIVACY:
          ta && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eh.sectionHeader,
              variant: "heading-md/semibold",
              children: ef.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(g.default, {
              className: eh.commandList,
              grantedPermissions: ez,
              grantedPermissionsHeader: ef.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tn && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: eh.sectionHeader,
              variant: "heading-md/semibold",
              children: ef.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(eo.default, {
              application: eY
            })]
          }));
          break;
        default:
          (0, W.assertNever)(eL)
      }
      return tl(t), e.map((e, t) => (0, i.jsx)("div", {
        className: eh.section,
        children: e
      }, t))
    }, [eY, e3, eq, eS, ez, eX, eM, eL, e2, e6, ta, tn]),
    tc = a.useMemo(() => {
      let e = R.current === _ && !P.current,
        t = [{
          sectionName: e_.ApplicationDirectoryProfileSections.GENERAL,
          sectionText: ef.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
        }];
      return eq.length > 0 && (t.push({
        sectionName: e_.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: ef.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), e && f === e_.ApplicationDirectoryProfileSections.IMAGES && eD(f)), e3 && !ts && (t.push({
        sectionName: e_.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: ef.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), e && f === e_.ApplicationDirectoryProfileSections.PREMIUM && eD(f)), (ta || tn) && (t.push({
        sectionName: e_.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: ef.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e && f === e_.ApplicationDirectoryProfileSections.PRIVACY && eD(f)), t
    }, [eq.length, e3, ta, tn, f, _, ts]);
  return d = null == eY ? null == ey || ey === Z.FetchState.FETCHING ? (0, i.jsx)(el.default, {
    loading: ey === Z.FetchState.FETCHING
  }) : (0, i.jsx)("div", {
    className: eh.__invalid_page,
    children: (0, i.jsxs)("div", {
      className: eh.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: eh.emptyImage,
        src: eC,
        alt: ""
      }), (0, i.jsx)(C.Heading, {
        variant: "heading-xl/semibold",
        children: ef.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(el.default, {
    loading: ey === Z.FetchState.FETCHING,
    children: [(0, i.jsx)(ej, {
      app: eY,
      iconSrc: eU
    }), (0, i.jsxs)("div", {
      className: eh.__invalid_page,
      children: [(0, i.jsxs)("div", {
        className: eh.header,
        children: [(0, i.jsxs)("div", {
          className: eh.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: eh.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eU,
            width: eA,
            height: eA
          }), (0, i.jsx)(et.default, {
            application: eY,
            mutualGuilds: eH,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: eh.headerContent,
          children: [(0, i.jsxs)("div", {
            className: eh.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: eh.headerNameAndIcon,
              children: [(0, i.jsx)(C.Heading, {
                className: eh.name,
                variant: "heading-xxl/semibold",
                children: eY.name
              }), e3 && (0, i.jsx)(C.Tooltip, {
                tooltipClassName: eh.premiumIconTooltip,
                text: ef.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: ef.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eh.premiumIcon,
                  src: l("744050")
                })
              }), e9 && (0, i.jsx)(ei.default, {
                className: eh.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: eh.buttons,
              children: [ts && (0, i.jsx)(er.ApplicationDirectoryStoreBtn, {
                appId: eY.id,
                guildId: null != h ? h : void 0
              }), (0, i.jsx)(C.Button, {
                onClick: e4,
                color: C.Button.Colors.PRIMARY,
                children: e1 ? ef.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : ef.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(C.Button, {
                color: C.Button.Colors.BRAND,
                onClick: e8,
                disabled: !eV,
                children: ef.default.Messages.APP_DIRECTORY_PROFILE_ADD_BUTTON
              }), (0, i.jsx)(C.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e0(t)
                },
                position: "left",
                align: "top",
                animation: C.Popout.Animation.NONE,
                children: e => (0, i.jsx)(C.Clickable, {
                  className: eh.overflow,
                  ...e,
                  children: (0, i.jsx)(w.default, {
                    width: 20,
                    height: 20,
                    className: eh.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(ep.default, {
            activeSection: eL,
            setSection: eZ,
            shownSections: tc
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: eh.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: eh.content,
          children: [tr, null != eT && eT.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [tt && (0, i.jsx)("div", {
              className: eh.separator
            }), (0, i.jsxs)("div", {
              className: eh.section,
              children: [(0, i.jsx)(C.Heading, {
                className: eh.relatedHeader,
                variant: "eyebrow",
                children: ef.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(el.default, {
                loading: G,
                children: (0, i.jsx)(ee.default, {
                  applications: eT,
                  onViewOne: eQ
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(eu.default, {
          className: eh.sidebar,
          application: eY,
          guildId: h,
          onViewCategory: eJ,
          onClickGuildWidget: ew
        })]
      })]
    })]
  }), (0, i.jsx)(J.default, {
    children: d
  })
}

function eN(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: em.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let i = eR(e.url);
      if (null != i) return {
        type: em.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eP = e => {
    let t, {
      onToggle: l,
      isViewAll: a
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: eh.showMoreButtonText,
        variant: "eyebrow",
        children: ef.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(F.default, {
        className: eh.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: eh.showMoreButtonText,
        variant: "eyebrow",
        children: ef.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(G.default, {
        className: eh.showMoreButtonIcon
      })]
    }), (0, i.jsx)(ey, {
      children: (0, i.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        color: C.Button.Colors.TRANSPARENT,
        size: C.Button.Sizes.NONE,
        className: eh.showMoreButton,
        innerClassName: eh.showMoreButtonInner,
        onClick: l,
        children: t
      })
    })
  },
  ey = e => {
    let {
      className: t,
      contentClassName: l,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: s()([eh.dividerContainer, t]),
      children: [(0, i.jsx)("div", {
        className: eh.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(eh.contentDivider, l),
          children: a
        }), (0, i.jsx)("div", {
          className: eh.divider
        })]
      }) : null]
    })
  };

function ej(e) {
  let {
    app: t,
    iconSrc: l
  } = e, n = (0, P.default)(l, f.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, m.useStateFromStores)([R.default], () => R.default.useReducedMotion), c = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, B.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, B.getUserBannerURL)({
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
    className: eh.headerBanner
  })
}