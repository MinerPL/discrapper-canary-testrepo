n.r(t), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(593473),
    a = n(990547),
    l = n(873546),
    o = n(442837),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    h = n(447543),
    g = n(126399),
    f = n(521379),
    m = n(765717),
    p = n(267394),
    _ = n(761305),
    x = n(698177),
    E = n(353926),
    v = n(409059),
    I = n(962220),
    N = n(637776),
    b = n(264229),
    C = n(677760),
    S = n(893607),
    T = n(314897),
    A = n(82142),
    Z = n(701190),
    j = n(626135),
    R = n(81063),
    O = n(449934),
    L = n(768581),
    y = n(625054),
    P = n(645499),
    D = n(320830),
    k = n(721751),
    M = n(718182),
    w = n(223543),
    B = n(73906),
    G = n(299852),
    U = n(39514),
    F = n(236446),
    z = n(9325),
    V = n(344295),
    K = n(781428),
    H = n(209411),
    W = n(649156),
    q = n(423527),
    Y = n(424044),
    J = n(479495),
    X = n(881317),
    Q = n(886806),
    $ = n(981631),
    ee = n(188785),
    et = n(245335);
n(179645);
o.ZP.initialize();
let en = (0, D.Z)(K.Z),
    ei = (0, D.Z)(H.Z),
    er = (0, D.Z)(V.Z),
    es = (0, D.Z)(F.Z),
    ea = (0, D.Z)(U.Z),
    el = (0, D.Z)(C.Z),
    eo = (0, D.Z)(q.Z),
    ec = (0, D.Z)(M.Z),
    eu = (0, D.Z)(w.Z),
    ed = (0, D.Z)(Q.Z),
    eh = (0, D.Z)(x.Z),
    eg = (0, D.Z)(J.Z),
    ef = (0, D.Z)(G.Z),
    em = (0, D.Z)(_.Z),
    ep = (0, D.Z)(N.Z),
    e_ = (0, D.Z)(B.Z),
    ex = (0, D.Z)(W.Z),
    eE = (0, D.Z)(X.Z),
    ev = (0, D.Z)(Y.Z),
    eI = (0, D.Z)(f.Z);
class eN extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: i, location: r } = e,
            { backgroundId: a } = t,
            l = null !== (n = (0, s.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == l || '' === l || !(0, P.B)(l) || l.startsWith($.Z5c.ME)) && (l = null);
        let o = null;
        if (null == i) o = (0, O.gK)(l);
        else if ((null == i ? void 0 : i.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = i;
            null != t
                ? null != a && (o = (0, R.getAssetImage)(t.id, a, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (o = L.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash
                  }));
        }
        return {
            redirectTo: l,
            splash: o
        };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && u.Z.getExperiments(!0),
            j.default.track(
                $.rMx.INVITE_OPENED,
                {
                    invite_code: (0, b.jX)(e),
                    load_time: y.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            g.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !ee.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        g.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, R.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await h.Z.resolveInvite(e, $.Usc.INVITE);
        null != t && ((0, p.A)(t), null != t.type && et.xf.has(t.type) && h.Z.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        if (null != e)
            j.default.track(
                $.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: y.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            ),
                I.Z.resolveGuildTemplate(e),
                I.Z.openNativeAppModal(e);
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        if (null != e)
            d.Z.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && c.Z.wait(() => d.Z.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, i.jsxs)(k.Z, {
            splash: e,
            children: [
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.LOGIN_HANDOFF,
                    render: (e) =>
                        (0, i.jsx)(ei, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(m.Z, {
                    impressionName: a.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) =>
                        (0, i.jsx)(en, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(m.Z, {
                    impressionName: a.ImpressionNames.USER_REGISTRATION,
                    path: $.Z5c.REGISTER,
                    render: (e) =>
                        ee.a
                            ? (0, i.jsx)(er, {
                                  ...e,
                                  redirectTo: t,
                                  inviteKey: n
                              })
                            : (0, i.jsx)(eo, {
                                  ...e,
                                  redirectTo: t
                              })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) =>
                        (0, i.jsx)(ea, {
                            login: !0,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, i.jsx)(ea, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: [$.Z5c.INVITE_LOGIN(':inviteCode'), $.Z5c.INVITE(':inviteCode')],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n
                                },
                                location: r,
                                transitionTo: s
                            } = e,
                            a = (0, b.mb)(t, r.search);
                        return l.tq || l.Em
                            ? (0, i.jsx)(
                                  el,
                                  {
                                      inviteKey: a,
                                      transitionTo: s
                                  },
                                  a
                              )
                            : (0, i.jsx)(er, {
                                  inviteKey: a,
                                  location: r,
                                  transitionTo: s,
                                  login: n === $.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, i.jsx)(m.Z, {
                    path: [$.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), $.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n
                            },
                            location: r,
                            transitionTo: s
                        } = e;
                        return l.tq || l.Em
                            ? (0, i.jsx)(z.Z, { code: t }, t)
                            : (0, i.jsx)(es, {
                                  code: t,
                                  location: r,
                                  transitionTo: s,
                                  login: n === $.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.VERIFY,
                    render: (e) => (0, i.jsx)(ed, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, i.jsx)(ep, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, i.jsx)(eh, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(ef, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(em, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, i.jsx)(ec, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, i.jsx)(eg, {
                            source: $.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, i.jsx)(eg, {
                            source: $.Z5c.REJECT_MFA,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, i.jsx)(eu, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.RESET,
                    render: (e) =>
                        (0, i.jsx)(eg, {
                            source: $.Z5c.RESET,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, i.jsx)(ex, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.CHANNEL(S.Hw.guildId(), S.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, i.jsx)(e_, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, i.jsx)(eE, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, i.jsx)(ev, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.ACCOUNT_REVERT(':token'),
                    render: (e) => (0, i.jsx)(eI, { ...e })
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (i = {
                splash: null,
                redirectTo: null,
                backgroundId: null
            }),
            (n = 'state') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.default = o.ZP.connectStores([T.default, Z.Z, A.Z, E.Z, v.Z], (e) => {
    var t, n, i;
    let { match: r, location: s } = e,
        a = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        l = ee.a ? ee.Y : void 0,
        o = null != a ? (0, b.mb)(a, s.search) : l,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        u = null == r ? void 0 : null === (i = r.params) || void 0 === i ? void 0 : i.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: T.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? A.Z.get(c) : null,
        invite: null != o ? Z.Z.getInvite(o) : null,
        guildTemplate: null != u ? v.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: E.Z.hasLoadedExperiments
    };
})(eN);
