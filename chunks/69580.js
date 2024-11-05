n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return ef;
        },
        OAuth2AuthorizePage: function () {
            return ed;
        },
        getOAuth2AuthorizeProps: function () {
            return eg;
        },
        openOAuth2Modal: function () {
            return em;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return ep;
        },
        useOAuth2AuthorizeForm: function () {
            return e_;
        }
    }),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(512969),
    c = n(729594),
    d = n(873546),
    f = n(373793),
    _ = n(243814),
    h = n(149765),
    p = n(442837),
    m = n(336317),
    g = n(693789),
    E = n(952265),
    v = n(21340),
    I = n(922770),
    S = n(481060),
    T = n(893776),
    b = n(384275),
    y = n(596454),
    A = n(434650),
    N = n(367907),
    C = n(702493),
    R = n(424602),
    O = n(728345),
    D = n(979200),
    L = n(388905),
    x = n(560067),
    w = n(353926),
    M = n(341298),
    P = n(703656),
    k = n(973616),
    U = n(598077),
    G = n(314897),
    B = n(585483),
    Z = n(176354),
    F = n(700785),
    V = n(591759),
    j = n(807675),
    H = n(489863),
    Y = n(228763),
    W = n(422559),
    K = n(713938),
    z = n(166148),
    q = n(807989),
    Q = n(627799),
    X = n(260430),
    J = n(668185),
    $ = n(407546),
    ee = n(41259),
    et = n(28752),
    en = n(787025),
    er = n(397394),
    ei = n(574384),
    ea = n(960662),
    es = n(981631),
    eo = n(186901),
    el = n(388032),
    eu = n(195943);
let ec = 'oauth2-authorize-header-id';
function ed() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, j.y)(e.search), [e.search]);
    (0, C.Z)();
    let r = !e.search.includes('response_type'),
        [i, o] = s.useState(!1),
        l = s.useRef(!1),
        [c, f] = s.useState(null),
        _ = r && !d.tq && !i;
    if (
        (s.useEffect(() => {
            if (d.eL && r) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            } else
                r &&
                    !d.tq &&
                    !l.current &&
                    (Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            n.request(es.Etm.DEEP_LINK, {
                                type: eo.jE.OAUTH2,
                                params: { search: e.search }
                            })
                                .then((e) => {
                                    f(null != e && e);
                                })
                                .catch(() => f(!1))
                                .then(() => n.disconnect());
                        }),
                    (l.current = !0));
        }, [e.search, r]),
        _ && !1 !== c)
    ) {
        let e;
        return (
            (e =
                !0 === c
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(L.Dx, { children: el.intl.string(el.t.csrAMD) }),
                              (0, a.jsx)(L.DK, { children: el.intl.string(el.t['m1+IBg']) }),
                              (0, a.jsx)(g.zx, {
                                  onClick: () => o(!0),
                                  color: g.zx.Colors.BRAND,
                                  children: el.intl.string(el.t.fIv16O)
                              })
                          ]
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(L.Dx, { children: el.intl.string(el.t['Z+hCVV']) }), (0, a.jsx)(I.$, {})]
                      })),
            (0, a.jsx)(en.G, {
                removeChildWrapper: !0,
                children: (0, a.jsx)('div', {
                    className: eu.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, a.jsx)(en.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(ef, {
            transitionState: S.ModalTransitionState.ENTERED,
            ...t,
            showLogout: !0
        })
    });
}
function ef(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c, minimalPadding: d } = e_({ ...n }),
        f = (0, a.jsxs)(a.Fragment, {
            children: [
                r,
                (0, a.jsxs)('div', {
                    className: l()(eu.content, c ? eu.contentBackground : null, d ? eu.minimalPadding : null),
                    children: [i, null == o ? u : null]
                })
            ]
        });
    return (0, a.jsx)(en.j, {
        transitionState: t,
        'aria-labelledby': ec,
        footer: s,
        children: (0, a.jsx)('div', {
            className: l()(eu.authorize),
            children: (0, a.jsx)(v.zJ, {
                orientation: 'auto',
                children: f
            })
        })
    });
}
function e_(e) {
    var t, n, r, i, o;
    let d,
        E,
        v,
        C,
        R,
        L,
        { clientId: x, responseType: M, redirectUri: B, codeChallenge: en, codeChallengeMethod: eo, state: ed, nonce: ef, prompt: e_, authorizations: eh, scopes: ep, permissions: em, guildId: eg, channelId: eE, integrationType: ev, disableGuildSelect: eI = !1, showLogout: eS = !1, cancelCompletesFlow: eT = !0, isTrustedName: eb = !1, isEmbeddedFlow: ey = !1, callback: eA, callbackWithoutPost: eN, onClose: eC, disclosures: eR } = e,
        eO = null != ev ? (null == eh ? void 0 : eh.get(ev)) : void 0,
        eD = (0, u.TH)(),
        eL = (0, p.e7)([w.Z], () => w.Z.hasLoadedExperiments);
    s.useEffect(() => {
        G.default.isAuthenticated() && !eL && T.Z.getExperiments();
    }, [eL]);
    let [ex, ew] = s.useState(null),
        [eM, eP] = s.useState(null),
        [ek, eU] = s.useState(null),
        [eG, eB] = s.useState(!1),
        [eZ, eF] = s.useState(!1),
        eV = null == ex ? void 0 : ex.guilds,
        [ej, eH] = s.useState(null != eg ? eg : null),
        [eY, eW] = s.useState(null != eE ? eE : null),
        [eK, ez] = s.useState(F.Hn),
        eq = s.useMemo(() => ((null == ex ? void 0 : ex.user) != null ? new U.Z(ex.user) : null), [null == ex ? void 0 : ex.user]),
        eQ = s.useMemo(() => (null == eV ? void 0 : eV.find((e) => e.id === ej)), [eV, ej]),
        [eX, eJ] = s.useState(null),
        e$ = s.useMemo(() => {
            var e;
            return null == eO && null == ev && (null !== (e = null == ep ? void 0 : ep.length) && void 0 !== e ? e : 0) === 0 && null == B;
        }, [eO, null == ep ? void 0 : ep.length, B, ev]),
        [e0, e1] = s.useState(null);
    s.useEffect(() => {
        e$ && O.ZP.fetchApplication(x).then((e) => e1(k.Z.createFromServer(e)));
    }, [x, e$]);
    let e2 = s.useMemo(() => {
            var e, t;
            return null == eX ? null : null == e0 ? void 0 : null === (t = e0.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eX]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e0 ? void 0 : e0.integrationTypesConfig, eX]),
        { requestedScopes: e3, accountScopes: e4 } = s.useMemo(() => {
            let e = e$ ? (null == e2 ? void 0 : e2.scopes) : ep,
                t = (0, j.K)(null != e ? e : []),
                n = K.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e2 ? void 0 : e2.scopes, ep, e$]),
        e6 = s.useMemo(() => {
            var e;
            let t = e$ ? h.vB(null !== (e = null == e2 ? void 0 : e2.permissions) && void 0 !== e ? e : 0) : em;
            return null != t ? t : F.Hn;
        }, [null == e2 ? void 0 : e2.permissions, em, e$]),
        e5 = s.useRef(!1),
        [e7, e8] = s.useState(null != eR ? eR : []),
        [e9, te] = s.useState(null != eR && eR.length > 0);
    s.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, D.de)(x);
                te(!t), e8(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, H.c$)(eD);
                    return;
                }
                eU(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e5.current = !1;
            }
        };
        if (null == eR) {
            if (!G.default.isAuthenticated()) {
                (0, H.c$)(eD);
                return;
            }
            e();
        }
    }, [x, eD, eR, e8, eU, te, eP]);
    let tt = s.useCallback(
            async (e) => {
                if (null != eN) {
                    eB(!0), eN(e);
                    return;
                }
                if (!e && !eT) {
                    null != eA &&
                        (eA({
                            application: null == ex ? void 0 : ex.application,
                            guild: eQ
                        }),
                        null == eC || eC());
                    return;
                }
                if (null == eX) {
                    eU(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eB(!0);
                    let t = await (0, H.Iq)({
                        authorize: e,
                        clientId: x,
                        scopes: e3,
                        responseType: M,
                        redirectUri: B,
                        codeChallenge: en,
                        codeChallengeMethod: eo,
                        state: ed,
                        nonce: ef,
                        integrationType: eX,
                        permissions: h.Od(e6, eK),
                        guildId: eX === f.Y.GUILD_INSTALL && null != ej ? ej : void 0,
                        channelId: eX === f.Y.GUILD_INSTALL && null != eY ? eY : void 0
                    });
                    if (
                        (e &&
                            (await (0, D.x9)(x, e7),
                            setTimeout(() => {
                                b.Z.fetch();
                            }, 100)),
                        null != eA)
                    )
                        eA({
                            application: null == ex ? void 0 : ex.application,
                            location: t.location,
                            guild: eQ
                        }),
                            null == eC || eC();
                    else if (null != t.location) {
                        let { host: e, path: n } = c.parse(t.location);
                        V.Z.isDiscordHostname(e) && n === es.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)(es.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ex ? void 0 : ex.application,
                                      guild: eQ
                                  }
                              })
                            : (window.location = t.location);
                    } else eB(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eU(Error(e.message)) : eU(e), eP('AUTHORIZE_SCOPES'), eB(!1);
                }
            },
            [eN, eT, eA, null == ex ? void 0 : ex.application, eQ, eC, x, e3, M, B, en, eo, ed, ef, e6, eK, ej, eX, eY, e7]
        ),
        tn = s.useRef(!1),
        tr = s.useCallback(async () => {
            if (!G.default.isAuthenticated()) {
                (0, H.c$)(eD);
                return;
            }
            if (!e5.current) {
                if (!tn.current) {
                    tn.current = !0;
                    try {
                        let e =
                            null != eO
                                ? eO
                                : await (0, H.Ww)({
                                      clientId: x,
                                      scopes: e3,
                                      responseType: M,
                                      redirectUri: B,
                                      codeChallenge: en,
                                      codeChallengeMethod: eo,
                                      state: ed,
                                      nonce: ef,
                                      integrationType: null != eX ? eX : void 0
                                  });
                        ew((0, Y.d)(e)), e_ === z.s.NONE && e.authorized && !e9 && tt(!0), (0, N.yw)(es.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, H.c$)(eD);
                            return;
                        }
                        eU(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        tn.current = !1;
                    }
                }
            }
        }, [eD, eO, x, e3, M, B, en, eo, ed, ef, eX, e_, tt, e9]),
        ti = s.useMemo(() => {
            var e;
            return null != e0 && e$
                ? Object.entries(null !== (e = e0.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e0, e$]),
        ta = s.useRef(null);
    s.useEffect(() => {
        eM !== ta.current &&
            ((ta.current = eM),
            (0, N.yw)(es.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eM,
                application_id: x,
                integration_type: eX,
                scopes: e3,
                permissions: e6.toString()
            }));
    }, [x, eX, e6, e3, eM]),
        s.useEffect(() => {
            if (null == eM && (!e$ || null != e0) && !!eL)
                if (null != eO) {
                    var e;
                    eJ(null !== (e = eO.integration_type) && void 0 !== e ? e : f.Y.GUILD_INSTALL), eP('AUTHORIZE_SCOPES');
                } else ti.length > 1 ? eP('SELECT_INSTALL_TYPE') : (1 === ti.length ? eJ(ti[0]) : null != ev ? eJ(ev) : eJ(f.Y.GUILD_INSTALL), eP('AUTHORIZE_SCOPES'));
        }, [eO, ti, e0, e$, ev, eM, eL]),
        s.useEffect(() => {
            if (null == eX || null != ex || null != ek) return;
            eX === f.Y.USER_INSTALL && (eH(null), eW(null));
            let e = e3.filter((e) => !K.ak.includes(e));
            0 === e3.length ? eU(Error('No scopes were provided.')) : e.length > 0 ? eU(Error('Invalid scope: '.concat(e[0]))) : (0, W._$)(e6) ? eU(Error('Invalid permission(s) provided.')) : tr();
        }, [e9, tr, e3, e6, eX, ex, ek]);
    let ts = s.useCallback((e) => {
            e && eF(!0);
        }, []),
        to = (0, A.O)(ts);
    if (ek instanceof Error) return { body: (0, a.jsx)(er.Lk, { message: ek.message }) };
    let tl = !1,
        tu = !1,
        tc = !0,
        td = !0,
        tf = !0,
        t_ = !1;
    switch (eM) {
        case null:
            return { body: (0, a.jsx)(I.$, { className: eu.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e0) return { body: (0, a.jsx)(I.$, { className: eu.spinner }) };
            (d = (0, a.jsx)(et.Z, {
                application: e0,
                onSelect: (e) => {
                    eJ(e), ew(null), eP('AUTHORIZE_SCOPES');
                },
                onClose: eC
            })),
                (tc = !1),
                (td = !1),
                (tf = !1),
                (t_ = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ex || null == eq || null == eX) return { body: (0, a.jsx)(I.$, { className: eu.spinner }) };
            let th = null == ek || ek instanceof Error ? {} : ek,
                tp = null == eV ? void 0 : eV.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tm = eX === f.Y.GUILD_INSTALL && e3.includes(_.x.WEBHOOK_INCOMING),
                tg = tm || (eX === f.Y.GUILD_INSTALL && (e3.includes(_.x.BOT) || e3.includes(_.x.APPLICATIONS_COMMANDS)));
            (d = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(Q.Z, { accountScopes: e4 }),
                    (0, a.jsx)(X.Z, {
                        application: ex.application,
                        accountScopes: e4,
                        requestedScopes: e3,
                        integrationType: eX,
                        errors: th,
                        isTrustedName: eb
                    }),
                    (0, a.jsx)('div', {
                        className: eu.intObserver,
                        ref: to
                    }),
                    tg
                        ? (0, a.jsx)($.Z, {
                              error: (null !== (n = null !== (t = th[_.x.BOT]) && void 0 !== t ? t : th[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: ej,
                              onGuildChange: eH,
                              guilds: null != tp ? tp : [],
                              disabled: '' !== ej && null != ej && !0 === eI
                          })
                        : null,
                    tm
                        ? (0, a.jsx)(ei.Z, {
                              error: (null !== (r = th[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eY,
                              selectedGuildId: ej,
                              onChannelChange: eW
                          })
                        : null
                ]
            })),
                e3.includes(_.x.BOT) && !h.fS(e6, F.Hn) && (v = 'AUTHORIZE_BOT_PERMISSIONS'),
                ti.length > 1 && (E = 'SELECT_INSTALL_TYPE'),
                (tu = (tg && null == eQ) || (tm && null == eY)),
                (tl = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ex) return { body: (0, a.jsx)(I.$, { className: eu.spinner }) };
            (d = (0, a.jsx)(J.Z, {
                application: ex.application,
                permissions: e6,
                deniedPermissions: eK,
                onPermissionsChange: (e, t) => {
                    ez((n) => (e ? h.Od(n, t) : h.IH(n, t)));
                },
                guild: eQ
            })),
                (E = 'AUTHORIZE_SCOPES'),
                (tl = !0);
    }
    if (tc && null != ex) {
        let e = null === (i = ex.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        C = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(q.Z, {
                    application: ex.application,
                    scopes: e3,
                    disclosures: e7,
                    redirectUri: null !== (o = ex.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ey
                }),
                (0, a.jsx)('div', {
                    className: eu.intObserver,
                    ref: to
                })
            ]
        });
    }
    return (
        td &&
            null != ex &&
            null != eq &&
            (R = (0, a.jsx)(ee.Z, {
                id: ec,
                user: eq,
                application: ex.application,
                bot: ex.bot,
                accountScopes: e4,
                showLogout: eS || !1,
                location: eD
            })),
        tf &&
            (L = (0, a.jsxs)('div', {
                className: l()(eu.footer),
                children: [
                    null != E
                        ? (0, a.jsx)(g.zx, {
                              look: g.zx.Looks.LINK,
                              color: g.zx.Colors.PRIMARY,
                              onClick: () => eP(E),
                              children: el.intl.string(el.t['13/7kZ'])
                          })
                        : (0, a.jsx)(g.zx, {
                              look: g.zx.Looks.LINK,
                              color: g.zx.Colors.PRIMARY,
                              onClick: () => tt(!1),
                              children: el.intl.string(el.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eM
                        ? eZ
                            ? (0, a.jsx)('div', {
                                  className: eu.action,
                                  children: (0, a.jsx)(g.zx, {
                                      onClick: null != v ? () => eP(v) : () => tt(!0),
                                      submitting: eG,
                                      disabled: null == C || tu,
                                      children: tu ? el.intl.string(el.t.BwwiSE) : null != v ? el.intl.string(el.t['3PatS0']) : el.intl.string(el.t['y+/PEx'])
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: eu.action,
                                  children: (0, a.jsx)(S.Tooltip, {
                                      text: el.intl.string(el.t['7UiwCw']),
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: eu.tooltip,
                                              children: (0, a.jsxs)(g.zx, {
                                                  disabled: !0,
                                                  submitting: eG,
                                                  innerClassName: eu.buttonWithEmoji,
                                                  children: [
                                                      el.intl.string(el.t.N22i9P),
                                                      ' ',
                                                      (0, a.jsx)(y.Z, {
                                                          className: eu.emoji,
                                                          src: Z.ZP.getURL(m.Z.convert.fromCodePoint(ea.I)),
                                                          emojiName: ':point_down:',
                                                          animated: !1
                                                      })
                                                  ]
                                              })
                                          })
                                  })
                              })
                        : null
                ]
            })),
        {
            header: R,
            body: d,
            footer: L,
            nextStep: v,
            appDetails: C,
            sendAuthorize: tt,
            hasContentBackground: tl,
            minimalPadding: t_
        }
    );
}
function eh(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = c.parse(t.location, !0),
        s = V.Z.isDiscordHostname(n) || window.location.host === n;
    if (s && r === es.Z5c.OAUTH2_AUTHORIZED) {
        let e = R._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(es.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? B.S.safeDispatch(es.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, E.h7)((e) => {
                  let n = (0, a.jsx)(er._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, a.jsx)(en.j, {
                      ...e,
                      'aria-labelledby': ec,
                      footer: n,
                      children: (0, a.jsx)(er.Jh, {
                          guild: t.guild,
                          application: t.application,
                          onClose: e.onClose
                      })
                  });
              });
    } else if (s && (null == r ? void 0 : r.startsWith(es.Z5c.OAUTH2_ERROR)))
        (0, E.h7)((e) => {
            let t = i.error_description || i.error || el.intl.string(el.t['mqn87+']);
            return (
                Array.isArray(t) && (t = t[0]),
                (0, a.jsx)(en.j, {
                    ...e,
                    'aria-labelledby': ec,
                    children: (0, a.jsx)(er.Lk, {
                        message: t,
                        onClose: e.onClose
                    })
                })
            );
        });
    else {
        var o;
        null === (o = window.open(t.location, '_blank')) || void 0 === o || o.focus();
    }
}
function ep(e, t) {
    if ((0, M.g)('create-guild-and-oauth2-modal')) {
        x.Z.openCreateGuildModal({
            onSuccess: (n) =>
                em(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    em(e, t);
}
function em(e, t) {
    (0, E.h7)(
        (t) =>
            (0, a.jsx)(ef, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: eh.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function eg(e) {
    let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
    return null != r && null != i && (V.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(es.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(es.Z5c.OAUTH2_AUTHORIZE)) ? (0, j.y)(i) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
