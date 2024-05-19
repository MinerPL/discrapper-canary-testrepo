"use strict";
i.r(t), i.d(t, {
  default: function() {
    return eP
  },
  getApplicationDirectoryProfileUrl: function() {
    return eN
  },
  getYouTubeVideoIdFromUrl: function() {
    return eT
  }
}), i("610138"), i("216116"), i("78328"), i("815648"), i("47120"), i("315314"), i("789020"), i("653041");
var l = i("735250"),
  a = i("470079"),
  n = i("120356"),
  s = i.n(n),
  r = i("525654"),
  o = i.n(r),
  c = i("302454"),
  d = i.n(c),
  u = i("873546"),
  p = i("149765"),
  m = i("468194"),
  _ = i("442837"),
  f = i("692547"),
  h = i("477690"),
  I = i("481060"),
  g = i("995648"),
  v = i("445986"),
  A = i("9807"),
  E = i("911969"),
  C = i("330726"),
  R = i("782568"),
  N = i("607070"),
  T = i("581364"),
  P = i("970321"),
  x = i("220082"),
  S = i("252618"),
  j = i("299206"),
  L = i("422559"),
  O = i("270144"),
  y = i("864843"),
  D = i("703656"),
  M = i("588822"),
  b = i("706454"),
  F = i("314897"),
  U = i("451478"),
  B = i("729035"),
  w = i("86813"),
  G = i("826026"),
  k = i("808268"),
  Y = i("626135"),
  H = i("768581"),
  V = i("572004"),
  W = i("823379"),
  K = i("900849"),
  z = i("674588"),
  Z = i("264043"),
  J = i("303383"),
  q = i("887706"),
  Q = i("738130"),
  X = i("4461"),
  $ = i("34674"),
  ee = i("576958"),
  et = i("924489"),
  ei = i("125909"),
  el = i("409425"),
  ea = i("132871"),
  en = i("147890"),
  es = i("491576"),
  er = i("95650"),
  eo = i("940064"),
  ec = i("626004"),
  ed = i("939893"),
  eu = i("430913"),
  ep = i("606183"),
  em = i("272242"),
  e_ = i("981631"),
  ef = i("558921"),
  eh = i("689938"),
  eI = i("798945"),
  eg = i("902294");
let ev = d().parserFor(ed.default),
  eA = d().reactFor(d().ruleOutput(ed.default, "react")),
  eE = (0, m.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eC = "redirect_to_support_server",
  eR = "start_application_install",
  eN = e => "".concat(location.protocol, "//").concat(location.host).concat(e_.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eT = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function eP(e) {
  var t, n, r, c, d;
  let m, {
      match: {
        params: {
          applicationId: f,
          section: h = em.ApplicationDirectoryProfileSections.GENERAL
        }
      }
    } = e,
    E = (0, ea.useApplicationDirectoryHistory)(e => e.guildId),
    N = (0, q.default)(),
    x = (0, _.useStateFromStores)([J.default], () => J.default.getFetchState({
      applicationId: f,
      guildId: E
    }) === J.FetchState.FETCHING),
    w = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: G,
      similarLoadId: ed
    } = (0, _.useStateFromStoresObject)([J.default], () => {
      let e = {
          applicationId: f,
          guildId: E
        },
        t = J.default.getSimilarApplications(e);
      return null == t ? t = J.default.getSimilarApplications(w.current) : w.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    eT = a.useMemo(() => null == G ? void 0 : G.slice(0, 3), [G]),
    eP = (0, _.useStateFromStores)([Z.default], () => Z.default.getApplicationFetchState(f)),
    [ej, eO] = a.useState(void 0),
    ey = a.useCallback(e => {
      if (null != f) {
        if (e === em.ApplicationDirectoryProfileSections.GENERAL) {
          (0, en.replaceAppDirectoryURLWith)(e_.Routes.APPLICATION_DIRECTORY_PROFILE(f));
          return
        }(0, en.replaceAppDirectoryURLWith)(e_.Routes.APPLICATION_DIRECTORY_PROFILE_SECTION(f, e))
      }
    }, [f]),
    eD = (0, _.useStateFromStores)([U.default], () => U.default.isFocused()),
    eM = (0, _.useStateFromStores)([b.default], () => b.default.locale),
    eb = a.useRef(f),
    eF = (0, _.useStateFromStores)([Z.default], () => {
      let e = Z.default.getApplication(f);
      return null == e ? e = Z.default.getApplication(eb.current) : eb.current = f, e
    }),
    eU = (0, es.default)({
      application: eF
    }),
    eB = (0, _.useStateFromStores)([F.default], () => F.default.getSessionId());
  (0, S.usePageTitle)({
    location: null == eF ? void 0 : eF.name
  });
  let ew = a.useCallback(async () => {
    try {
      var e;
      let t = null == eF ? void 0 : null === (e = eF.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eF ? void 0 : eF.id) != null && Y.default.track(e_.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eF.id,
          guild_id: t
        });
        let e = {
          page: e_.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, K.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eF]);
  a.useEffect(() => {
    if (null == eF) return;
    let e = new URL(location.href);
    if (N && null != eB && "true" === e.searchParams.get(eC)) {
      e.searchParams.delete(eC);
      let t = e.pathname + e.search;
      (0, D.replaceWith)(t), ew()
    }
  }, [N, ew, eB, eF]);
  let eG = a.useCallback(() => {
      var e;
      null != (null == eF ? void 0 : null === (e = eF.guild) || void 0 === e ? void 0 : e.id) && (N ? ew() : (0, $.redirectToLogin)({
        [eC]: "true"
      }))
    }, [eF, N, ew]),
    ek = a.useCallback(() => {
      (0, en.replaceAppDirectoryURLWith)("".concat(e_.Routes.APPLICATION_DIRECTORY_PROFILE(f)).concat(location.search))
    }, [f]);
  a.useEffect(() => {
    h === em.ApplicationDirectoryProfileSections.GENERAL && ek()
  }, [ek, h]), a.useEffect(() => {
    null != f && z.getApplication(f)
  }, [f]), a.useEffect(() => {
    if ((null == eF ? void 0 : eF.directory_entry) != null) {
      let e = eF.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      null != t ? eO(t.map(e => (0, T.buildCommand)({
        rootCommand: e,
        command: e,
        applicationId: e.application_id
      }))) : eO(void 0)
    }
  }, [eF]);
  let eY = H.default.getApplicationIconURL({
      id: null !== (r = null == eF ? void 0 : eF.id) && void 0 !== r ? r : "-1",
      icon: null == eF ? void 0 : eF.icon,
      size: eE
    }),
    eH = (0, j.default)({
      id: null !== (c = null == eF ? void 0 : eF.id) && void 0 !== c ? c : "",
      label: eh.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eV,
      install: eW
    } = (0, X.useInstallApplication)(eF, E),
    eK = null === (t = (0, ea.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eF ? void 0 : eF.id) != null && Y.default.track(e_.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eK,
      application_id: eF.id,
      guild_id: E,
      shown_mutual_guilds_count: eU.length
    })
  }, [null == eF ? void 0 : eF.id, E, eU]);
  let ez = a.useMemo(() => {
      var e;
      let t = null == eF ? void 0 : null === (e = eF.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return L.OrderedPermissions.filter(e => p.has(p.deserialize(t), e))
    }, [null == eF ? void 0 : null === (n = eF.install_params) || void 0 === n ? void 0 : n.permissions]),
    eZ = a.useCallback(e => {
      ey(e), (null == eF ? void 0 : eF.id) != null && Y.default.track(e_.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eF.id,
        guild_id: E,
        tab_name: e
      })
    }, [null == eF ? void 0 : eF.id, E, ey]),
    eJ = a.useMemo(() => {
      var e, t, i;
      return null !== (i = (null !== (t = null == eF ? void 0 : null === (e = eF.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(ex).filter(W.isNotNullish)) && void 0 !== i ? i : []
    }, [eF]),
    eq = a.useCallback((e, t) => {
      if (e.type === e_.CarouselMediaTypes.IMG) {
        let t = eJ.filter(e => e.type === e_.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, v.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, I.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("41814")]).then(i.bind(i, "895023"));
          return t => {
            let {
              ...i
            } = t;
            return (0, l.jsx)(e, {
              ...i,
              items: n,
              startingIndex: a,
              modalCarouselItemClassName: eI.appSlide
            })
          }
        })
      }
    }, [eJ]),
    eQ = a.useCallback(e => {
      (null == eF ? void 0 : eF.id) != null && Y.default.track(e_.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eF.id,
        guild_id: E
      }), (0, en.goToCategory)({
        categoryId: e.id
      })
    }, [eF, E]);
  a.useEffect(() => {
    null != f && z.getSimilarApplications({
      applicationId: f,
      guildId: E
    })
  }, [f, E]);
  let eX = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: i
      } = e;
      (null == eF ? void 0 : eF.id) != null && Y.default.track(e_.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eF.id,
        suggested_application_id: t.id,
        load_id: ed,
        guild_id: E,
        shown_mutual_guilds_count: i.length
      }), (0, en.goToApplication)({
        applicationId: t.id
      })
    }, [null == eF ? void 0 : eF.id, ed, E]),
    e$ = a.useCallback(() => {
      null != eF && (0, R.default)(function(e, t) {
        let i = "https://".concat(e_.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          l = new URLSearchParams;
        return l.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), l.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), l.append("tf_12094971213335", t.id), l.append("ticket_form_id", "12275528604823"), l.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(i, "?").concat(l.toString())
      }(eM, eF))
    }, [eM, eF]),
    e0 = a.useCallback(e => (0, l.jsxs)(I.Menu, {
      navId: "application-directory-profile",
      "aria-label": eh.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, l.jsx)(I.MenuGroup, {
        children: (0, l.jsx)(I.MenuItem, {
          id: "report",
          label: eh.default.Messages.REPORT_APP,
          color: "danger",
          action: e$
        })
      }), null != eH ? (0, l.jsx)(I.MenuGroup, {
        children: eH
      }) : null]
    }), [eH, e$]),
    [e1, e2] = (0, C.default)(!1, 1e3),
    e4 = a.useCallback(() => {
      null != eF && (Y.default.track(e_.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eF.id,
        guild_id: E
      }), (0, V.copy)(eN(eF.id)), e2(!0))
    }, [eF, e2, E]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (N && "true" === e.searchParams.get(eR)) {
      e.searchParams.delete(eR);
      let t = e.pathname + e.search;
      (0, D.replaceWith)(t), eW("product_page")
    }
  }, [N, eW]);
  let e5 = a.useCallback(() => {
      null != eF && (N ? eW("product_page") : (Y.default.track(e_.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: f,
        guild_id: E,
        auth_type: null != eF.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, $.redirectToLogin)({
        [eR]: "true"
      })))
    }, [eF, N, eW, f, E]),
    {
      applicationSubscriptionListingsShown: e7
    } = (0, O.default)({
      applicationId: null == eF ? void 0 : eF.id,
      groupListingId: null == eF ? void 0 : eF.primary_sku_id,
      guildId: E
    }),
    e9 = (null == eF ? void 0 : eF.id) === ef.MIDJOURNEY_BOT_ID,
    [e8, e6] = a.useState(!1),
    [e3, te] = a.useState(!1),
    [tt, ti] = a.useState(!0),
    tl = e => {
      null != e && e6(e.scrollHeight > e.clientHeight)
    },
    ta = null != ez && ez.length > 0,
    tn = (null == eF ? void 0 : eF.flags) != null,
    ts = (0, P.useAppStorefrontAvailable)(null !== (d = null == eF ? void 0 : eF.id) && void 0 !== d ? d : ""),
    tr = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (h) {
        case em.ApplicationDirectoryProfileSections.GENERAL: {
          var i, a;
          let n = null == eF ? void 0 : null === (i = eF.directory_entry) || void 0 === i ? void 0 : i.detailed_description;
          null != n && n.length > 0 ? (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("div", {
              ref: tl,
              className: s()({
                [eI.descriptionClamp]: !e3,
                [eI.descriptionClampSafari]: !e3 && "Safari" === o().name
              }),
              children: (0, l.jsx)(B.default, {
                className: eI.detailedDescription,
                parser: ev,
                output: eA,
                state: {
                  allowLinks: !0
                },
                children: n
              })
            }), (e8 || e3) && (0, l.jsx)(eS, {
              isViewAll: e3,
              onToggle: () => {
                te(e => !e)
              }
            })]
          })), t = !1) : (null == eF ? void 0 : null === (a = eF.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, l.jsx)("span", {
              children: eF.directory_entry.short_description
            })]
          })) : (null == eF ? void 0 : eF.description) != null && e.push((0, l.jsx)(M.default, {
            className: eI.description,
            userBio: eF.description
          })), null != ej && ej.length > 0 && (e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, l.jsx)(eo.default, {
              className: eI.commandList,
              commands: ej
            })]
          })), t = !0);
          break
        }
        case em.ApplicationDirectoryProfileSections.IMAGES: {
          if (0 === eJ.length) break;
          let t = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
              className: eI.errorImage,
              src: eg,
              "aria-hidden": !0,
              alt: ""
            }), (0, l.jsx)(I.Heading, {
              variant: "heading-xl/semibold",
              children: eh.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eJ.forEach((e, t) => {
            null != eF ? e.alt = eh.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: eJ.length,
              name: eF.name
            }) : e.alt = eh.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, l.jsx)(A.default, {
            className: eI.carousel,
            themedPagination: !0,
            items: eJ,
            autoplayInterval: 8e3,
            paused: !eD,
            videoAutoPlay: !0,
            onCurrentItemClick: eq,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: i
              } = e;
              null != i && null != eF && Y.default.track(e_.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eF.id,
                load_time_ms: i,
                src: t
              })
            }
          }));
          break
        }
        case em.ApplicationDirectoryProfileSections.PREMIUM:
          e7 && (null == eF ? void 0 : eF.primary_sku_id) != null && e.push((0, l.jsx)(y.default, {
            applicationId: eF.id,
            applicationPrimarySkuId: null == eF ? void 0 : eF.primary_sku_id,
            analyticsLocation: e_.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case em.ApplicationDirectoryProfileSections.PRIVACY:
          ta && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, l.jsx)(g.default, {
              className: eI.commandList,
              grantedPermissions: ez,
              grantedPermissionsHeader: eh.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tn && e.push((0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(I.Heading, {
              className: eI.sectionHeader,
              variant: "heading-md/semibold",
              children: eh.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, l.jsx)(ec.default, {
              application: eF
            })]
          }))
      }
      return ti(t), 0 === e.length && h !== em.ApplicationDirectoryProfileSections.GENERAL && null != eF && ek(), e.map((e, t) => (0, l.jsx)("div", {
        className: eI.section,
        children: e
      }, t))
    }, [h, ek, eF, ej, e3, e8, eJ, eD, eq, e7, ta, tn, ez]),
    to = a.useMemo(() => {
      let e = [{
        sectionName: em.ApplicationDirectoryProfileSections.GENERAL,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
      }];
      return eJ.length > 0 && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), e7 && !ts && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), (ta || tn) && e.push({
        sectionName: em.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: eh.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), e
    }, [eJ.length, e7, ta, tn, ts]);
  return m = null == eF ? null == eP || eP === Z.FetchState.FETCHING ? (0, l.jsx)(ei.default, {
    loading: eP === Z.FetchState.FETCHING
  }) : (0, l.jsx)("div", {
    className: eI.__invalid_page,
    children: (0, l.jsxs)("div", {
      className: eI.emptyContainer,
      children: [(0, l.jsx)("img", {
        className: eI.emptyImage,
        src: eg,
        alt: ""
      }), (0, l.jsx)(I.Heading, {
        variant: "heading-xl/semibold",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, l.jsxs)(ei.default, {
    loading: eP === Z.FetchState.FETCHING,
    children: [(0, l.jsx)(eL, {
      app: eF,
      iconSrc: eY
    }), (0, l.jsxs)("div", {
      className: eI.__invalid_page,
      children: [(0, l.jsxs)("div", {
        className: eI.header,
        children: [(0, l.jsxs)("div", {
          className: eI.headerSidebar,
          children: [(0, l.jsx)("img", {
            className: eI.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: eY,
            width: eE,
            height: eE
          }), (0, l.jsx)(et.default, {
            application: eF,
            mutualGuilds: eU,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, l.jsxs)("div", {
          className: eI.headerContent,
          children: [(0, l.jsxs)("div", {
            className: eI.headerNameAndButtons,
            children: [(0, l.jsxs)("div", {
              className: eI.headerNameAndIcon,
              children: [(0, l.jsx)(I.Heading, {
                className: eI.name,
                variant: "heading-xxl/semibold",
                children: eF.name
              }), e7 && (0, l.jsx)(I.Tooltip, {
                tooltipClassName: eI.premiumIconTooltip,
                text: eh.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, l.jsx)("img", {
                  ...e,
                  alt: eh.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: eI.premiumIcon,
                  src: i("744050")
                })
              }), e9 && (0, l.jsx)(el.default, {
                className: eI.partnerBadge
              })]
            }), (0, l.jsxs)("div", {
              className: eI.buttons,
              children: [ts && (0, l.jsx)(er.ApplicationDirectoryStoreBtn, {
                appId: eF.id,
                guildId: null != E ? E : void 0
              }), (0, l.jsx)(I.Button, {
                onClick: e4,
                color: I.Button.Colors.PRIMARY,
                children: e1 ? eh.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : eh.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, l.jsx)(I.Button, {
                color: I.Button.Colors.BRAND,
                onClick: e5,
                disabled: !eV,
                children: eh.default.Messages.APPLICATION_ADD_BUTTON
              }), (0, l.jsx)(I.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e0(t)
                },
                position: "left",
                align: "top",
                animation: I.Popout.Animation.NONE,
                children: e => (0, l.jsx)(I.Clickable, {
                  className: eI.overflow,
                  ...e,
                  children: (0, l.jsx)(k.default, {
                    width: 20,
                    height: 20,
                    className: eI.iconInteractive
                  })
                })
              })]
            })]
          }), (0, l.jsx)(ep.default, {
            activeSection: h,
            setSection: eZ,
            shownSections: to
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: eI.contentContainer,
        children: [(0, l.jsxs)("div", {
          className: eI.content,
          children: [tr, null != eT && eT.length > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [tt && (0, l.jsx)("div", {
              className: eI.separator
            }), (0, l.jsxs)("div", {
              className: eI.section,
              children: [(0, l.jsx)(I.Heading, {
                className: eI.relatedHeader,
                variant: "eyebrow",
                children: eh.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, l.jsx)(ei.default, {
                loading: x,
                children: (0, l.jsx)(ee.default, {
                  applications: eT,
                  onViewOne: eX
                })
              })]
            })]
          }) : null]
        }), (0, l.jsx)(eu.default, {
          className: eI.sidebar,
          application: eF,
          guildId: E,
          onViewCategory: eQ,
          onClickGuildWidget: eG
        })]
      })]
    })]
  }), (0, l.jsx)(Q.default, {
    children: m
  })
}

function ex(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let i = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: e_.CarouselMediaTypes.IMG, width: 0, height: 0, src: i
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let l = eT(e.url);
      if (null != l) return {
        type: e_.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: l
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eS = e => {
    let t, {
      onToggle: i,
      isViewAll: a
    } = e;
    return t = a ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, l.jsx)(G.default, {
        className: eI.showMoreButtonIcon
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        className: eI.showMoreButtonText,
        variant: "eyebrow",
        children: eh.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, l.jsx)(w.default, {
        className: eI.showMoreButtonIcon
      })]
    }), (0, l.jsx)(ej, {
      children: (0, l.jsx)(I.Button, {
        look: I.Button.Looks.BLANK,
        color: I.Button.Colors.TRANSPARENT,
        size: I.Button.Sizes.NONE,
        className: eI.showMoreButton,
        innerClassName: eI.showMoreButtonInner,
        onClick: i,
        children: t
      })
    })
  },
  ej = e => {
    let {
      className: t,
      contentClassName: i,
      children: a
    } = e;
    return (0, l.jsxs)("div", {
      className: s()([eI.dividerContainer, t]),
      children: [(0, l.jsx)("div", {
        className: eI.divider
      }), null != a ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: s()(eI.contentDivider, i),
          children: a
        }), (0, l.jsx)("div", {
          className: eI.divider
        })]
      }) : null]
    })
  };

function eL(e) {
  let {
    app: t,
    iconSrc: i
  } = e, n = (0, x.default)(i, f.default.unsafe_rawColors.PRIMARY_800.css), {
    bot: s
  } = t, r = (0, _.useStateFromStores)([N.default], () => N.default.useReducedMotion), o = a.useMemo(() => {
    let e = {
      backgroundColor: n
    };
    if (null != s) {
      let t = (0, H.getUserBannerURL)({
        id: s.id,
        banner: s.banner,
        size: 1024,
        canAnimate: !1
      });
      if (null != t && (e["--custom-background-static"] = "url(".concat(t), e.height = "212px"), !r) {
        let t = (0, H.getUserBannerURL)({
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
  return (0, l.jsx)("div", {
    style: o,
    className: eI.headerBanner
  })
}