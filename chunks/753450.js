t.r(n),
    t.d(n, {
        default: function () {
            return eE;
        }
    }),
    t(47120),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(789020),
    t(653041);
var i = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(525654),
    s = t.n(l),
    c = t(302454),
    d = t.n(c),
    u = t(873546),
    _ = t(149765),
    p = t(468194),
    m = t(442837),
    I = t(692547),
    f = t(477690),
    g = t(481060),
    h = t(995648),
    v = t(445986),
    C = t(9807),
    x = t(911969),
    b = t(330726),
    E = t(782568),
    S = t(607070),
    T = t(581364),
    P = t(970321),
    N = t(283836),
    A = t(220082),
    R = t(252618),
    L = t(299206),
    O = t(241209),
    j = t(422559),
    y = t(703656),
    M = t(280885),
    D = t(706454),
    Z = t(314897),
    k = t(451478),
    B = t(626135),
    F = t(768581),
    w = t(572004),
    H = t(823379),
    G = t(900849),
    U = t(674588),
    Y = t(264043),
    W = t(303383),
    V = t(887706),
    z = t(738130),
    K = t(4461),
    q = t(34674),
    X = t(576958),
    J = t(924489),
    Q = t(125909),
    $ = t(409425),
    ee = t(132871),
    en = t(147890),
    et = t(491576),
    ei = t(527564),
    ea = t(326135),
    er = t(940064),
    eo = t(626004),
    el = t(939893),
    es = t(430913),
    ec = t(606183),
    ed = t(272242),
    eu = t(981631),
    e_ = t(558921),
    ep = t(689938),
    em = t(364658),
    eI = t(902294);
let ef = d().parserFor(el.Z),
    eg = d().reactFor(d().ruleOutput(el.Z, 'react')),
    eh = (0, p.Mg)(f.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ev = 'redirect_to_support_server',
    eC = 'start_application_install',
    ex = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
    eb = (e) => {
        if (null == e) return null;
        let n = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
        return null != n ? n[1] : null;
    };
function eE(e) {
    var n, r, l, c;
    let d,
        {
            match: {
                params: { applicationId: p, section: I = ed.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        f = (0, ee.useApplicationDirectoryHistory)((e) => e.guildId),
        x = (0, V.Z)(),
        S = (0, m.e7)(
            [W.Z],
            () =>
                W.Z.getFetchState({
                    applicationId: p,
                    guildId: f
                }) === W.M.FETCHING
        ),
        A = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: el, similarLoadId: eb } = (0, m.cj)([W.Z], () => {
            let e = {
                    applicationId: p,
                    guildId: f
                },
                n = W.Z.getSimilarApplications(e);
            return (
                null == n ? (n = W.Z.getSimilarApplications(A.current)) : (A.current = e),
                {
                    similarApplications: null == n ? void 0 : n.applications,
                    similarLoadId: null == n ? void 0 : n.loadId
                }
            );
        }),
        eE = a.useMemo(() => (null == el ? void 0 : el.slice(0, 3)), [el]),
        eP = (0, m.e7)([Y.Z], () => Y.Z.getApplicationFetchState(p)),
        [eA, eR] = a.useState(void 0),
        eL = a.useCallback(
            (e) => {
                if (null != p) {
                    if (e === ed.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, en.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p));
                        return;
                    }
                    (0, en.replaceAppDirectoryURLWith)(eu.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(p, e));
                }
            },
            [p]
        ),
        eO = (0, m.e7)([k.Z], () => k.Z.isFocused()),
        ej = (0, m.e7)([D.default], () => D.default.locale),
        ey = a.useRef(p),
        eM = (0, m.e7)([Y.Z], () => {
            let e = Y.Z.getApplication(p);
            return null == e ? (e = Y.Z.getApplication(ey.current)) : (ey.current = p), e;
        }),
        eD = (0, et.Z)({ application: eM }),
        eZ = (0, m.e7)([Z.default], () => Z.default.getSessionId());
    (0, R.Tt)({ location: null == eM ? void 0 : eM.name });
    let ek = a.useCallback(async () => {
        try {
            var e;
            let n = null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id;
            if (null != n) {
                (null == eM ? void 0 : eM.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eM.id,
                        guild_id: n
                    });
                let e = { page: eu.ZY5.APPLICATION_DIRECTORY };
                await (0, G.Ub)(n, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eM]);
    a.useEffect(() => {
        if (null == eM) return;
        let e = new URL(location.href);
        if (x && null != eZ && 'true' === e.searchParams.get(ev)) {
            e.searchParams.delete(ev);
            let n = e.pathname + e.search;
            (0, y.dL)(n), ek();
        }
    }, [x, ek, eZ, eM]);
    let eB = a.useCallback(() => {
            var e;
            null != (null == eM ? void 0 : null === (e = eM.guild) || void 0 === e ? void 0 : e.id) && (x ? ek() : (0, q.rf)({ [ev]: 'true' }));
        }, [eM, x, ek]),
        eF = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(eu.Z5c.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search));
        }, [p]);
    a.useEffect(() => {
        I === ed.ApplicationDirectoryProfileSections.GENERAL && eF();
    }, [eF, I]),
        a.useEffect(() => {
            null != p && U.i6(p);
        }, [p]),
        a.useEffect(() => {
            if ((null == eM ? void 0 : eM.directory_entry) != null) {
                let e = eM.directory_entry,
                    n = null == e ? void 0 : e.popular_application_commands;
                null != n
                    ? eR(
                          n.map((e) =>
                              (0, T.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eR(void 0);
            }
        }, [eM]);
    let ew = F.ZP.getApplicationIconURL({
            id: null !== (l = null == eM ? void 0 : eM.id) && void 0 !== l ? l : '-1',
            icon: null == eM ? void 0 : eM.icon,
            size: eh
        }),
        eH = (0, L.Z)({
            id: null !== (c = null == eM ? void 0 : eM.id) && void 0 !== c ? c : '',
            label: ep.Z.Messages.COPY_ID_APPLICATION
        }),
        { canInstall: eG, install: eU } = (0, K.P)(eM, f),
        eY = null === (n = (0, ee.getPreviousView)()) || void 0 === n ? void 0 : n.type;
    a.useEffect(() => {
        (null == eM ? void 0 : eM.id) != null &&
            B.default.track(eu.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eY,
                application_id: eM.id,
                guild_id: f,
                shown_mutual_guilds_count: eD.length,
                profile_section: I,
                referrer: document.referrer
            });
    }, [null == eM ? void 0 : eM.id, f, eD]);
    let eW = a.useMemo(() => {
            var e;
            let n = null == eM ? void 0 : null === (e = eM.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != n) return j.VY.filter((e) => _.e$(_.vB(n), e));
        }, [null == eM ? void 0 : null === (r = eM.install_params) || void 0 === r ? void 0 : r.permissions]),
        eV = a.useCallback(
            (e) => {
                eL(e),
                    (null == eM ? void 0 : eM.id) != null &&
                        B.default.track(eu.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eM.id,
                            guild_id: f,
                            tab_name: e
                        });
            },
            [null == eM ? void 0 : eM.id, f, eL]
        ),
        ez = a.useMemo(() => {
            var e, n, t;
            return null !== (t = (null !== (n = null == eM ? void 0 : null === (e = eM.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(eS).filter(H.lm)) && void 0 !== t ? t : [];
        }, [eM]),
        eK = a.useCallback(
            (e, n) => {
                if (e.type === eu.s9s.IMG) {
                    let n = ez.filter((e) => e.type === eu.s9s.IMG),
                        a = n.findIndex((n) => n === e);
                    if (a < 0) return;
                    let r = n.map((e) => ({
                        src: (0, v.Q)(e.src),
                        width: e.width,
                        height: e.height
                    }));
                    (0, g.openModalLazy)(async () => {
                        let { default: e } = await t.e('41814').then(t.bind(t, 895023));
                        return (n) => {
                            let { ...t } = n;
                            return (0, i.jsx)(e, {
                                ...t,
                                items: r,
                                startingIndex: a,
                                modalCarouselItemClassName: em.appSlide
                            });
                        };
                    });
                }
            },
            [ez]
        ),
        eq = a.useCallback(
            (e) => {
                (null == eM ? void 0 : eM.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eM.id,
                        guild_id: f
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [eM, f]
        );
    a.useEffect(() => {
        if (null != p)
            U.T4({
                applicationId: p,
                guildId: f
            });
    }, [p, f]);
    let eX = a.useCallback(
            (e) => {
                let { application: n, mutualGuilds: t } = e;
                (null == eM ? void 0 : eM.id) != null &&
                    B.default.track(eu.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eM.id,
                        suggested_application_id: n.id,
                        load_id: eb,
                        guild_id: f,
                        shown_mutual_guilds_count: t.length
                    }),
                    (0, en.goToApplication)({ applicationId: n.id });
            },
            [null == eM ? void 0 : eM.id, eb, f]
        ),
        eJ = a.useCallback(() => {
            null != eM &&
                (0, E.Z)(
                    (0, ea.G)({
                        id: eM.id,
                        name: eM.name,
                        locale: ej
                    })
                );
        }, [ej, eM]),
        eQ = a.useCallback(
            (e) =>
                (0, i.jsxs)(g.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': ep.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(g.MenuGroup, {
                            children: (0, i.jsx)(g.MenuItem, {
                                id: 'report',
                                label: ep.Z.Messages.REPORT_APP,
                                color: 'danger',
                                action: eJ
                            })
                        }),
                        null != eH ? (0, i.jsx)(g.MenuGroup, { children: eH }) : null
                    ]
                }),
            [eH, eJ]
        ),
        [e$, e0] = (0, b.Z)(!1, 1000),
        e1 = a.useCallback(() => {
            if (null != eM)
                B.default.track(eu.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eM.id,
                    guild_id: f
                }),
                    (0, w.JG)(ex(eM.id)),
                    e0(!0);
        }, [eM, e0, f]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (x && 'true' === e.searchParams.get(eC)) {
            e.searchParams.delete(eC);
            let n = e.pathname + e.search;
            (0, y.dL)(n), eU('product_page');
        }
    }, [x, eU]);
    let e6 = a.useCallback(() => {
            null != eM &&
                (x
                    ? eU('product_page')
                    : (B.default.track(eu.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: p,
                          guild_id: f,
                          auth_type: null != eM.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [eC]: 'true' })));
        }, [eM, x, eU, p, f]),
        e2 = (null == eM ? void 0 : eM.id) === e_.g,
        [e8, e3] = a.useState(!1),
        [e5, e9] = a.useState(!1),
        [e4, e7] = a.useState(!0),
        ne = (e) => {
            null != e && e3(e.scrollHeight > e.clientHeight);
        },
        nn = null != eW && eW.length > 0,
        nt = (null == eM ? void 0 : eM.flags) != null,
        ni = (0, P.R)(null != p ? p : '');
    a.useEffect(() => {
        ni && null != p && (0, N.Z)(p);
    }, [ni, p]);
    let na = a.useMemo(() => {
            let e = [],
                n = !0;
            switch (I) {
                case ed.ApplicationDirectoryProfileSections.GENERAL: {
                    var t, a;
                    let r = null == eM ? void 0 : null === (t = eM.directory_entry) || void 0 === t ? void 0 : t.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.Heading, {
                                          className: em.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: ne,
                                          className: o()({
                                              [em.descriptionClamp]: !e5,
                                              [em.descriptionClampSafari]: !e5 && 'Safari' === s().name
                                          }),
                                          children: (0, i.jsx)(O.Z, {
                                              className: em.detailedDescription,
                                              parser: ef,
                                              output: eg,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e8 || e5) &&
                                          (0, i.jsx)(eT, {
                                              isViewAll: e5,
                                              onToggle: () => {
                                                  e9((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (n = !1))
                        : (null == eM ? void 0 : null === (a = eM.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                        }),
                                        (0, i.jsx)('span', { children: eM.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eM ? void 0 : eM.description) != null &&
                            e.push(
                                (0, i.jsx)(M.Z, {
                                    className: em.description,
                                    userBio: eM.description
                                })
                            ),
                        null != eA &&
                            eA.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                        }),
                                        (0, i.jsx)(er.Z, {
                                            className: em.commandList,
                                            commands: eA
                                        })
                                    ]
                                })
                            ),
                            (n = !0));
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === ez.length) break;
                    let n = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: em.errorImage,
                                src: eI,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(g.Heading, {
                                variant: 'heading-xl/semibold',
                                children: ep.Z.Messages.ERRORS_IMAGE_NOT_FOUND
                            })
                        ]
                    });
                    ez.forEach((e, n) => {
                        null != eM
                            ? (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                  index: n + 1,
                                  totalImages: ez.length,
                                  name: eM.name
                              }))
                            : (e.alt = ep.Z.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT);
                    }),
                        e.push(
                            (0, i.jsx)(C.Z, {
                                className: em.carousel,
                                themedPagination: !0,
                                items: ez,
                                autoplayInterval: 8000,
                                paused: !eO,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eK,
                                errorComponent: n,
                                onImageLoad: (e) => {
                                    let { src: n, loadTimeMs: t } = e;
                                    null != t &&
                                        null != eM &&
                                        B.default.track(eu.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eM.id,
                                            load_time_ms: t,
                                            src: n
                                        });
                                }
                            })
                        );
                    break;
                }
                case ed.ApplicationDirectoryProfileSections.STORE:
                    ni && null != p && e.push((0, i.jsx)(ei.M, { appId: p }));
                    break;
                case ed.ApplicationDirectoryProfileSections.PRIVACY:
                    nn &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(g.Heading, {
                                        className: em.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        className: em.commandList,
                                        grantedPermissions: eW,
                                        grantedPermissionsHeader: ep.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })
                                ]
                            })
                        ),
                        nt &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: em.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                        }),
                                        (0, i.jsx)(eo.Z, { application: eM })
                                    ]
                                })
                            );
            }
            return (
                e7(n),
                0 === e.length && I !== ed.ApplicationDirectoryProfileSections.GENERAL && null != eM && eF(),
                e.map((e, n) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: em.section,
                            children: e
                        },
                        n
                    )
                )
            );
        }, [I, eF, eM, eA, e5, e8, ez, eO, eK, ni, p, nn, nt, eW]),
        nr = a.useMemo(() => {
            let e = [
                {
                    name: ed.ApplicationDirectoryProfileSections.GENERAL,
                    text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL,
                    Icon: g.AppsIcon
                }
            ];
            return (
                ez.length > 0 &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.IMAGES,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES,
                        Icon: g.ImagesIcon
                    }),
                ni &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.STORE,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_STORE,
                        Icon: g.ShopSparkleIcon
                    }),
                (nn || nt) &&
                    e.push({
                        name: ed.ApplicationDirectoryProfileSections.PRIVACY,
                        text: ep.Z.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY,
                        Icon: g.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [ez.length, nn, nt, ni]);
    return (
        (d =
            null == eM
                ? null == eP || eP === Y.M.FETCHING
                    ? (0, i.jsx)(Q.Z, { loading: eP === Y.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: em.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: em.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: em.emptyImage,
                                      src: eI,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: ep.Z.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)(Q.Z, {
                      loading: eP === Y.M.FETCHING,
                      children: [
                          (0, i.jsx)(eN, {
                              app: eM,
                              iconSrc: ew
                          }),
                          (0, i.jsxs)('div', {
                              className: em.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: em.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: em.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: em.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: ew,
                                                      width: eh,
                                                      height: eh
                                                  }),
                                                  (0, i.jsx)(J.Z, {
                                                      application: eM,
                                                      mutualGuilds: eD,
                                                      mutualGuildShownMax: 3,
                                                      compact: !0
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: em.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: em.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: em.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(g.Heading, {
                                                                      className: em.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eM.name
                                                                  }),
                                                                  ni &&
                                                                      (0, i.jsx)(g.Tooltip, {
                                                                          tooltipClassName: em.premiumIconTooltip,
                                                                          text: ep.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: ep.Z.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                                                  className: em.premiumIcon,
                                                                                  src: t(744050)
                                                                              })
                                                                      }),
                                                                  e2 && (0, i.jsx)($.Z, { className: em.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: em.buttons,
                                                              children: [
                                                                  (0, i.jsx)(g.Button, {
                                                                      onClick: e1,
                                                                      color: g.Button.Colors.PRIMARY,
                                                                      children: e$ ? ep.Z.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : ep.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(g.Button, {
                                                                      color: g.Button.Colors.BRAND,
                                                                      onClick: e6,
                                                                      disabled: !eG,
                                                                      children: ep.Z.Messages.APPLICATION_ADD_BUTTON
                                                                  }),
                                                                  (0, i.jsx)(g.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: n } = e;
                                                                          return eQ(n);
                                                                      },
                                                                      position: 'left',
                                                                      align: 'top',
                                                                      animation: g.Popout.Animation.NONE,
                                                                      children: (e) =>
                                                                          (0, i.jsx)(g.Clickable, {
                                                                              className: em.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(g.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: em.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ec.Z, {
                                                      activeSection: I,
                                                      setSection: eV,
                                                      sections: nr
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: em.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: em.content,
                                              children: [
                                                  na,
                                                  null != eE && eE.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                e4 && (0, i.jsx)('div', { className: em.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: em.section,
                                                                    children: [
                                                                        (0, i.jsx)(g.Heading, {
                                                                            className: em.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: ep.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                                                        }),
                                                                        (0, i.jsx)(Q.Z, {
                                                                            loading: S,
                                                                            children: (0, i.jsx)(X.Z, {
                                                                                applications: eE,
                                                                                onViewOne: eX
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                      : null
                                              ]
                                          }),
                                          (0, i.jsx)(es.Z, {
                                              className: em.sidebar,
                                              application: eM,
                                              guildId: f,
                                              onViewCategory: eq,
                                              onClickGuildWidget: eB
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })),
        (0, i.jsx)(z.Z, { children: d })
    );
}
function eS(e) {
    switch (e.type) {
        case x.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return {
                type: eu.s9s.IMG,
                width: 0,
                height: 0,
                src: t
            };
        case x.ee.YOUTUBE:
            let i = eb(e.url);
            if (null != i)
                return {
                    type: eu.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
let eT = (e) => {
        let n,
            { onToggle: t, isViewAll: a } = e;
        return (
            (n = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: em.showMoreButtonText,
                              variant: 'eyebrow',
                              children: ep.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                          }),
                          (0, i.jsx)(g.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: em.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: em.showMoreButtonText,
                              variant: 'eyebrow',
                              children: ep.Z.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                          }),
                          (0, i.jsx)(g.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: em.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eP, {
                children: (0, i.jsx)(g.Button, {
                    look: g.Button.Looks.BLANK,
                    color: g.Button.Colors.TRANSPARENT,
                    size: g.Button.Sizes.NONE,
                    className: em.showMoreButton,
                    innerClassName: em.showMoreButtonInner,
                    onClick: t,
                    children: n
                })
            })
        );
    },
    eP = (e) => {
        let { className: n, contentClassName: t, children: a } = e;
        return (0, i.jsxs)('div', {
            className: o()([em.dividerContainer, n]),
            children: [
                (0, i.jsx)('div', { className: em.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: o()(em.contentDivider, t),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: em.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function eN(e) {
    let { app: n, iconSrc: t } = e,
        r = (0, A.ZP)(t, I.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = n,
        l = (0, m.e7)([S.Z], () => S.Z.useReducedMotion),
        s = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let n = (0, F.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                if ((null != n && ((e['--custom-background-static'] = 'url('.concat(n)), (e.height = '212px')), !l)) {
                    let n = (0, F.aN)({
                        id: o.id,
                        banner: o.banner,
                        size: 1024,
                        canAnimate: !0
                    });
                    null != n && (e['--custom-background-animated'] = 'url('.concat(n));
                }
            }
            return e;
        }, [r, o, l]);
    return (0, i.jsx)('div', {
        style: s,
        className: em.headerBanner
    });
}
