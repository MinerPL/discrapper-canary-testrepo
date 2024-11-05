n.r(t),
    n.d(t, {
        default: function () {
            return eN;
        }
    }),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(789020),
    n(653041);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(525654),
    s = n.n(l),
    c = n(302454),
    d = n.n(c),
    u = n(873546),
    p = n(149765),
    m = n(468194),
    _ = n(442837),
    f = n(692547),
    h = n(477690),
    g = n(481060),
    I = n(995648),
    b = n(445986),
    x = n(9807),
    v = n(330726),
    C = n(782568),
    N = n(581364),
    S = n(970321),
    T = n(283836),
    j = n(220082),
    y = n(252618),
    P = n(299206),
    A = n(241209),
    L = n(341176),
    E = n(312097),
    R = n(422559),
    k = n(703656),
    B = n(280885),
    w = n(706454),
    O = n(314897),
    Z = n(451478),
    H = n(626135),
    D = n(768581),
    F = n(572004),
    M = n(823379),
    U = n(900849),
    G = n(135431),
    z = n(674588),
    W = n(264043),
    V = n(303383),
    Y = n(887706),
    K = n(738130),
    X = n(4461),
    q = n(34674),
    J = n(576958),
    Q = n(924489),
    $ = n(125909),
    ee = n(409425),
    et = n(132871),
    en = n(147890),
    ei = n(824606),
    ea = n(527564),
    er = n(326135),
    eo = n(940064),
    el = n(626004),
    es = n(939893),
    ec = n(430913),
    ed = n(606183),
    eu = n(272242),
    ep = n(981631),
    em = n(558921),
    e_ = n(388032),
    ef = n(613250),
    eh = n(902294);
let eg = d().parserFor(es.Z),
    eI = d().reactFor(d().ruleOutput(es.Z, 'react')),
    eb = (0, m.Mg)(h.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ex = 'redirect_to_support_server',
    ev = 'start_application_install',
    eC = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
function eN(e) {
    var t, r, l, c;
    let d,
        {
            match: {
                params: { applicationId: m, section: f = eu.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        h = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
        j = (0, Y.Z)(),
        es = (0, _.e7)(
            [V.Z],
            () =>
                V.Z.getFetchState({
                    applicationId: m,
                    guildId: h
                }) === V.M.FETCHING
        ),
        eN = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: eT, similarLoadId: ey } = (0, _.cj)([V.Z], () => {
            let e = {
                    applicationId: m,
                    guildId: h
                },
                t = V.Z.getSimilarApplications(e);
            return (
                null == t ? (t = V.Z.getSimilarApplications(eN.current)) : (eN.current = e),
                {
                    similarApplications: null == t ? void 0 : t.applications,
                    similarLoadId: null == t ? void 0 : t.loadId
                }
            );
        }),
        eP = a.useMemo(() => (null == eT ? void 0 : eT.slice(0, 3)), [eT]),
        eA = (0, _.e7)([W.Z], () => W.Z.getApplicationFetchState(m)),
        [eL, eE] = a.useState(void 0),
        eR = a.useCallback(
            (e) => {
                if (null != m) {
                    if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, en.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m));
                        return;
                    }
                    (0, en.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e));
                }
            },
            [m]
        ),
        ek = (0, _.e7)([Z.Z], () => Z.Z.isFocused()),
        eB = (0, _.e7)([w.default], () => w.default.locale),
        ew = a.useRef(m),
        eO = (0, _.e7)([W.Z], () => {
            let e = W.Z.getApplication(m);
            return null == e ? (e = W.Z.getApplication(ew.current)) : (ew.current = m), e;
        }),
        eZ = (0, ei.Z)({ application: eO }),
        eH = (0, _.e7)([O.default], () => O.default.getSessionId());
    (0, y.Tt)({ location: null == eO ? void 0 : eO.name });
    let eD = a.useCallback(async () => {
        try {
            var e;
            let t = null == eO ? void 0 : null === (e = eO.guild) || void 0 === e ? void 0 : e.id;
            if (null != t) {
                (null == eO ? void 0 : eO.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eO.id,
                        guild_id: t
                    });
                let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
                await (0, U.Ub)(t, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eO]);
    a.useEffect(() => {
        if (null == eO) return;
        let e = new URL(location.href);
        if (j && null != eH && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eD();
        }
    }, [j, eD, eH, eO]);
    let eF = a.useCallback(() => {
            var e;
            null != (null == eO ? void 0 : null === (e = eO.guild) || void 0 === e ? void 0 : e.id) && (j ? eD() : (0, q.rf)({ [ex]: 'true' }));
        }, [eO, j, eD]),
        eM = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search));
        }, [m]);
    a.useEffect(() => {
        f === eu.ApplicationDirectoryProfileSections.GENERAL && eM();
    }, [eM, f]),
        a.useEffect(() => {
            if (null != m) {
                let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
                z.i6(m, { noCache: e });
            }
        }, [m]),
        a.useEffect(() => {
            if ((null == eO ? void 0 : eO.directory_entry) != null) {
                let e = eO.directory_entry,
                    t = null == e ? void 0 : e.popular_application_commands;
                null != t
                    ? eE(
                          t.map((e) =>
                              (0, N.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eE(void 0);
            }
        }, [eO]);
    let eU = D.ZP.getApplicationIconURL({
            id: null !== (l = null == eO ? void 0 : eO.id) && void 0 !== l ? l : '-1',
            icon: null == eO ? void 0 : eO.icon,
            size: eb
        }),
        eG = (0, P.Z)({
            id: null !== (c = null == eO ? void 0 : eO.id) && void 0 !== c ? c : '',
            label: e_.intl.string(e_.t['FfCL+/'])
        }),
        { canInstall: ez, install: eW } = (0, X.P)(eO, h),
        eV = null === (t = (0, et.getPreviousView)()) || void 0 === t ? void 0 : t.type;
    a.useEffect(() => {
        (null == eO ? void 0 : eO.id) != null &&
            H.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: 'product',
                previous_page: eV,
                application_id: eO.id,
                guild_id: h,
                shown_mutual_guilds_count: eZ.length,
                profile_section: f,
                referrer: document.referrer
            });
    }, [null == eO ? void 0 : eO.id, h, eZ]);
    let eY = a.useMemo(() => {
            var e;
            let t = null == eO ? void 0 : null === (e = eO.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return R.VY.filter((e) => p.e$(p.vB(t), e));
        }, [null == eO ? void 0 : null === (r = eO.install_params) || void 0 === r ? void 0 : r.permissions]),
        eK = a.useCallback(
            (e) => {
                eR(e),
                    (null == eO ? void 0 : eO.id) != null &&
                        H.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eO.id,
                            guild_id: h,
                            tab_name: e
                        });
            },
            [null == eO ? void 0 : eO.id, h, eR]
        ),
        eX = a.useMemo(() => {
            var e, t, n;
            return null !== (n = (null !== (t = null == eO ? void 0 : null === (e = eO.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(q.RF).filter(M.lm)) && void 0 !== n ? n : [];
        }, [eO]),
        eq = a.useCallback(
            (e, t) => {
                if (e.type === ep.s9s.IMG) {
                    let t = eX.filter((e) => e.type === ep.s9s.IMG),
                        n = t.findIndex((t) => t === e);
                    if (n < 0) return;
                    let i = t.map((e) => ({
                        url: (0, b.Q)(e.src),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: 'IMAGE'
                    }));
                    (0, E.K)({
                        items: i,
                        startingIndex: n,
                        fit: L.D.CONTAIN,
                        shouldHideMediaOptions: !0,
                        shouldAnimateCarousel: !0,
                        location: 'ApplicationDirectoryProfile'
                    });
                }
            },
            [eX]
        ),
        eJ = a.useCallback(
            (e) => {
                (null == eO ? void 0 : eO.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eO.id,
                        guild_id: h
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [eO, h]
        );
    a.useEffect(() => {
        if (null != m)
            z.T4({
                applicationId: m,
                guildId: h
            });
    }, [m, h]);
    let eQ = a.useCallback(
            (e) => {
                let { application: t, mutualGuilds: n } = e;
                (null == eO ? void 0 : eO.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eO.id,
                        suggested_application_id: t.id,
                        load_id: ey,
                        guild_id: h,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, en.goToApplication)({ applicationId: t.id });
            },
            [null == eO ? void 0 : eO.id, ey, h]
        ),
        e$ = a.useCallback(() => {
            null != eO &&
                (0, C.Z)(
                    (0, er.G)({
                        id: eO.id,
                        name: eO.name,
                        locale: eB
                    })
                );
        }, [eB, eO]),
        e0 = a.useCallback(
            (e) =>
                (0, i.jsxs)(g.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': e_.intl.string(e_.t['/7I4/P']),
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(g.MenuGroup, {
                            children: (0, i.jsx)(g.MenuItem, {
                                id: 'report',
                                label: e_.intl.string(e_.t.NgA5vr),
                                color: 'danger',
                                action: e$
                            })
                        }),
                        null != eG ? (0, i.jsx)(g.MenuGroup, { children: eG }) : null
                    ]
                }),
            [eG, e$]
        ),
        [e1, e6] = (0, v.Z)(!1, 1000),
        e3 = a.useCallback(() => {
            if (null != eO)
                H.default.track(ep.rMx.APP_SHARE_BUTTON_CLICKED, {
                    source: 'product_page',
                    application_id: eO.id,
                    guild_id: h
                }),
                    (0, F.JG)(eC(eO.id)),
                    e6(!0);
        }, [eO, e6, h]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (j && 'true' === e.searchParams.get(ev)) {
            e.searchParams.delete(ev);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eW('product_page');
        }
    }, [j, eW]);
    let e2 = a.useCallback(() => {
            if (null != eO) {
                if ((u.tq || u.Em) && null == eO.custom_install_url) {
                    let e = (0, G.Er)({
                        applicationId: eO.id,
                        customInstallUrl: eO.custom_install_url,
                        installParams: eO.install_params,
                        integrationTypesConfig: eO.integration_types_config
                    });
                    if (null != e) {
                        window.open(e, '_blank');
                        return;
                    }
                }
                j
                    ? eW('product_page')
                    : (H.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: m,
                          guild_id: h,
                          auth_type: null != eO.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, q.rf)({ [ev]: 'true' }));
            }
        }, [eO, j, eW, m, h]),
        e8 = (null == eO ? void 0 : eO.id) === em.g,
        [e5, e9] = a.useState(!1),
        [e4, e7] = a.useState(!1),
        [te, tt] = a.useState(!0),
        tn = (e) => {
            null != e && e9(e.scrollHeight > e.clientHeight);
        },
        ti = null != eY && eY.length > 0,
        ta = (null == eO ? void 0 : eO.flags) != null,
        tr = (0, S.R)(null != m ? m : '');
    a.useEffect(() => {
        tr && null != m && (0, T.Z)(m);
    }, [tr, m]);
    let to = a.useMemo(() => {
            let e = [],
                t = !0;
            switch (f) {
                case eu.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, a;
                    let r = null == eO ? void 0 : null === (n = eO.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.Heading, {
                                          className: ef.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: e_.intl.string(e_.t.txraKS)
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: tn,
                                          className: o()({
                                              [ef.descriptionClamp]: !e4,
                                              [ef.descriptionClampSafari]: !e4 && 'Safari' === s().name
                                          }),
                                          children: (0, i.jsx)(A.Z, {
                                              className: ef.detailedDescription,
                                              parser: eg,
                                              output: eI,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e5 || e4) &&
                                          (0, i.jsx)(eS, {
                                              isViewAll: e4,
                                              onToggle: () => {
                                                  e7((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (t = !1))
                        : (null == eO ? void 0 : null === (a = eO.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.txraKS)
                                        }),
                                        (0, i.jsx)('span', { children: eO.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eO ? void 0 : eO.description) != null &&
                            e.push(
                                (0, i.jsx)(B.Z, {
                                    className: ef.description,
                                    userBio: eO.description
                                })
                            ),
                        null != eL &&
                            eL.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.swIgTE)
                                        }),
                                        (0, i.jsx)(eo.Z, {
                                            className: ef.commandList,
                                            commands: eL
                                        })
                                    ]
                                })
                            ),
                            (t = !0));
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eX.length) break;
                    let t = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: ef.errorImage,
                                src: eh,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(g.Heading, {
                                variant: 'heading-xl/semibold',
                                children: e_.intl.string(e_.t.UvDfMz)
                            })
                        ]
                    });
                    eX.forEach((e, t) => {
                        null != eO
                            ? (e.alt = e_.intl.formatToPlainString(e_.t.sSEhHR, {
                                  index: t + 1,
                                  totalImages: eX.length,
                                  name: eO.name
                              }))
                            : (e.alt = e_.intl.string(e_.t['5UVm9/']));
                    }),
                        e.push(
                            (0, i.jsx)(x.Z, {
                                className: ef.carousel,
                                themedPagination: !0,
                                items: eX,
                                autoplayInterval: 8000,
                                paused: !ek,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eq,
                                errorComponent: t,
                                onImageLoad: (e) => {
                                    let { src: t, loadTimeMs: n } = e;
                                    null != n &&
                                        null != eO &&
                                        H.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eO.id,
                                            load_time_ms: n,
                                            src: t
                                        });
                                }
                            })
                        );
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.STORE:
                    tr && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
                    break;
                case eu.ApplicationDirectoryProfileSections.PRIVACY:
                    ti &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(g.Heading, {
                                        className: ef.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: e_.intl.string(e_.t.runNFx)
                                    }),
                                    (0, i.jsx)(I.Z, {
                                        className: ef.commandList,
                                        grantedPermissions: eY,
                                        grantedPermissionsHeader: e_.intl.string(e_.t.SLgiND)
                                    })
                                ]
                            })
                        ),
                        ta &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.QzDgMj)
                                        }),
                                        (0, i.jsx)(el.Z, { application: eO })
                                    ]
                                })
                            );
            }
            return (
                tt(t),
                0 === e.length && f !== eu.ApplicationDirectoryProfileSections.GENERAL && null != eO && eM(),
                e.map((e, t) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: ef.section,
                            children: e
                        },
                        t
                    )
                )
            );
        }, [f, eM, eO, eL, e4, e5, eX, ek, eq, tr, m, ti, ta, eY]),
        tl = a.useMemo(() => {
            let e = [
                {
                    name: eu.ApplicationDirectoryProfileSections.GENERAL,
                    text: e_.intl.string(e_.t.r4vJeX),
                    Icon: g.AppsIcon
                }
            ];
            return (
                eX.length > 0 &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.IMAGES,
                        text: e_.intl.string(e_.t.BEFwGR),
                        Icon: g.ImagesIcon
                    }),
                tr &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.STORE,
                        text: e_.intl.string(e_.t.pylO39),
                        Icon: g.ShopSparkleIcon
                    }),
                (ti || ta) &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.PRIVACY,
                        text: e_.intl.string(e_.t.hrodJy),
                        Icon: g.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [eX.length, ti, ta, tr]);
    return (
        (d =
            null == eO
                ? null == eA || eA === W.M.FETCHING
                    ? (0, i.jsx)($.Z, { loading: eA === W.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: ef.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: ef.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: ef.emptyImage,
                                      src: eh,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: e_.intl.string(e_.t.T48fKS)
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)($.Z, {
                      loading: eA === W.M.FETCHING,
                      children: [
                          (0, i.jsx)(ej, {
                              app: eO,
                              iconSrc: eU
                          }),
                          (0, i.jsxs)('div', {
                              className: ef.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: ef.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ef.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: ef.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: eU,
                                                      width: eb,
                                                      height: eb
                                                  }),
                                                  (0, i.jsx)(Q.Z, {
                                                      application: eO,
                                                      mutualGuilds: eZ,
                                                      mutualGuildShownMax: 3,
                                                      compact: !0
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ef.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: ef.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: ef.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(g.Heading, {
                                                                      className: ef.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: eO.name
                                                                  }),
                                                                  tr &&
                                                                      (0, i.jsx)(g.Tooltip, {
                                                                          tooltipClassName: ef.premiumIconTooltip,
                                                                          text: e_.intl.string(e_.t['7B10XF']),
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: e_.intl.string(e_.t['7B10XF']),
                                                                                  className: ef.premiumIcon,
                                                                                  src: n(744050)
                                                                              })
                                                                      }),
                                                                  e8 && (0, i.jsx)(ee.Z, { className: ef.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ef.buttons,
                                                              children: [
                                                                  (0, i.jsx)(g.Button, {
                                                                      onClick: e3,
                                                                      color: g.Button.Colors.PRIMARY,
                                                                      children: e1 ? e_.intl.string(e_.t.wwdb3t) : e_.intl.string(e_.t.z4sP5O)
                                                                  }),
                                                                  (0, i.jsx)(g.Button, {
                                                                      color: g.Button.Colors.BRAND,
                                                                      onClick: e2,
                                                                      disabled: !ez,
                                                                      children: e_.intl.string(e_.t.NgXl3N)
                                                                  }),
                                                                  (0, i.jsx)(g.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: t } = e;
                                                                          return e0(t);
                                                                      },
                                                                      position: 'left',
                                                                      align: 'top',
                                                                      animation: g.Popout.Animation.NONE,
                                                                      children: (e) =>
                                                                          (0, i.jsx)(g.Clickable, {
                                                                              className: ef.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(g.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: ef.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ed.Z, {
                                                      activeSection: f,
                                                      setSection: eK,
                                                      sections: tl
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: ef.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ef.content,
                                              children: [
                                                  to,
                                                  null != eP && eP.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                te && (0, i.jsx)('div', { className: ef.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: ef.section,
                                                                    children: [
                                                                        (0, i.jsx)(g.Heading, {
                                                                            className: ef.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: e_.intl.string(e_.t.E8wCnp)
                                                                        }),
                                                                        (0, i.jsx)($.Z, {
                                                                            loading: es,
                                                                            children: (0, i.jsx)(J.Z, {
                                                                                applications: eP,
                                                                                onViewOne: eQ
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                      : null
                                              ]
                                          }),
                                          (0, i.jsx)(ec.Z, {
                                              className: ef.sidebar,
                                              application: eO,
                                              guildId: h,
                                              onViewCategory: eJ,
                                              onClickGuildWidget: eF
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })),
        (0, i.jsx)(K.Z, { children: d })
    );
}
let eS = (e) => {
        let t,
            { onToggle: n, isViewAll: a } = e;
        return (
            (t = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.intl.string(e_.t['vtfc4+'])
                          }),
                          (0, i.jsx)(g.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.intl.string(e_.t.ZDRyur)
                          }),
                          (0, i.jsx)(g.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eT, {
                children: (0, i.jsx)(g.Button, {
                    look: g.Button.Looks.BLANK,
                    color: g.Button.Colors.TRANSPARENT,
                    size: g.Button.Sizes.NONE,
                    className: ef.showMoreButton,
                    innerClassName: ef.showMoreButtonInner,
                    onClick: n,
                    children: t
                })
            })
        );
    },
    eT = (e) => {
        let { className: t, contentClassName: n, children: a } = e;
        return (0, i.jsxs)('div', {
            className: o()([ef.dividerContainer, t]),
            children: [
                (0, i.jsx)('div', { className: ef.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: o()(ef.contentDivider, n),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: ef.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function ej(e) {
    let { app: t, iconSrc: n } = e,
        r = (0, j.ZP)(n, f.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = t,
        l = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let t = (0, D.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != t && ((e['--custom-background-static'] = 'url('.concat(t)), (e.height = 'auto'));
                let n = (0, D.xR)(o.banner)
                    ? (0, D.aN)({
                          id: o.id,
                          banner: o.banner,
                          size: 1024,
                          canAnimate: !0
                      })
                    : null;
                null != n && (e['--custom-background-animated'] = 'url('.concat(n));
            }
            return e;
        }, [r, o]);
    return (0, i.jsx)('div', {
        style: l,
        className: ef.headerBanner,
        'data-has-animated': '--custom-background-animated' in l
    });
}
