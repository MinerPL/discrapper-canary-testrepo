var i,
    a,
    s = n(735250);
n(470079);
var r = n(756647),
    l = n(481060),
    o = n(570140),
    c = n(355467),
    d = n(899742),
    u = n(457330),
    _ = n(533307),
    E = n(447543),
    h = n(962220),
    m = n(703656),
    I = n(314897),
    g = n(553795),
    p = n(594174),
    T = n(626135),
    S = n(585483),
    C = n(591759),
    f = n(998502),
    N = n(996106),
    A = n(186901),
    v = n(981631);
function L(e, t) {
    if (null != e)
        T.default.track(v.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, r.s)(e),
            link_type: t
        });
}
((i = a || (a = {})).SETTINGS = 'settings'),
    (i.CHANGELOG = 'changelog'),
    (i.LIBRARY = 'library'),
    (i.STORE = 'store'),
    (i.INVITE = 'invite'),
    (i.CHANNEL = 'channel'),
    (i.GUILD_SETTINGS = 'guild_settings'),
    (i.QUEST_HOME = 'quest_home'),
    (t.Z = {
        [v.Etm.INVITE_BROWSER]: {
            scope: A.cE,
            async handler(e) {
                let {
                        args: { code: t }
                    } = e,
                    { invite: n } = await E.Z.resolveInvite(t, 'Desktop Modal');
                if (null == n) throw new N.Z({ errorCode: v.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
                return (
                    I.default.isAuthenticated()
                        ? o.Z.dispatch({
                              type: 'INVITE_MODAL_OPEN',
                              invite: n,
                              code: t,
                              context: v.IlC.APP
                          })
                        : (0, m.dL)(v.Z5c.INVITE(t)),
                    {
                        invite: n,
                        code: t
                    }
                );
            }
        },
        [v.Etm.GUILD_TEMPLATE_BROWSER]: {
            scope: A.cE,
            async handler(e) {
                let {
                    args: { code: t }
                } = e;
                if (null == p.default.getCurrentUser()) return;
                let { guildTemplate: i } = await h.Z.resolveGuildTemplate(t);
                if (null == i) throw new N.Z({ errorCode: v.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
                return (
                    f.ZP.focus(),
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('10778'), n.e('44839')]).then(n.bind(n, 766775));
                        return (t) =>
                            (0, s.jsx)(e, {
                                ...t,
                                guildTemplate: i
                            });
                    }),
                    {
                        guildTemplate: i,
                        code: t
                    }
                );
            }
        },
        [v.Etm.GIFT_CODE_BROWSER]: {
            scope: A.cE,
            handler(e) {
                let {
                    args: { code: t }
                } = e;
                return new Promise((e, i) => {
                    o.Z.wait(() => {
                        _.Z.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: a } = i;
                                f.ZP.focus(),
                                    T.default.track(v.rMx.OPEN_MODAL, {
                                        type: 'gift_accept',
                                        location: v.SaU
                                    }),
                                    (0, l.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('92446'), n.e('47933')]).then(n.bind(n, 409858));
                                        return (n) =>
                                            (0, s.jsx)(e, {
                                                code: t,
                                                ...n
                                            });
                                    }),
                                    e({ giftCode: a });
                            })
                            .catch(() => i(new N.Z({ errorCode: v.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                    });
                });
            }
        },
        [v.Etm.DEEP_LINK]: {
            scope: A.cE,
            handler(e) {
                let {
                    args: { type: t, params: n }
                } = e;
                switch ((f.ZP.focus(), t)) {
                    case A.jE.USER_SETTINGS:
                        null != n && ((0, m.dL)(v.Z5c.SETTINGS(n.section, n.subsection)), L(n.fingerprint, 'settings'));
                        break;
                    case A.jE.CHANGELOG:
                        null != n && ((0, m.dL)(C.Z.formatPathWithQuery(v.Z5c.CHANGELOGS(n.date), n.query)), L(n.fingerprint, 'changelog'));
                        break;
                    case A.jE.LIBRARY:
                        (0, m.dL)(v.Z5c.APPLICATION_LIBRARY), null != n && L(n.fingerprint, 'library');
                        break;
                    case A.jE.STORE_HOME:
                        (0, m.dL)(v.Z5c.APPLICATION_STORE), null != n && L(n.fingerprint, 'store');
                        break;
                    case A.jE.STORE_LISTING:
                        null != n && ((0, m.dL)(v.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), L(n.fingerprint, 'store'));
                        break;
                    case A.jE.PICK_GUILD_SETTINGS:
                        null != n &&
                            ((0, m.dL)({
                                pathname: v.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                                search: n.search
                            }),
                            L(n.fingerprint, 'guild_settings'));
                        break;
                    case A.jE.CHANNEL:
                        null != n &&
                            ((0, m.dL)({
                                pathname: v.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                                search: n.search
                            }),
                            L(n.fingerprint, 'channel'));
                        break;
                    case A.jE.QUEST_HOME:
                        null != n
                            ? ((0, m.dL)({
                                  pathname: v.Z5c.QUEST_HOME,
                                  hash: n.questId
                              }),
                              L(n.fingerprint, 'quest_home'))
                            : (0, m.dL)(v.Z5c.QUEST_HOME);
                }
            }
        },
        [v.Etm.BROWSER_HANDOFF]: {
            scope: A.CN,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n }
                } = e;
                f.ZP.focus(null, !0), (0, d.lx)(t, n);
            }
        },
        [v.Etm.CONNECTIONS_CALLBACK]: {
            scope: A.cE,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, state: a }
                } = e;
                if (!g.Z.hasPendingAuthorizedState(a)) throw new N.Z({ errorCode: v.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
                try {
                    return (
                        g.Z.deletePendingAuthorizedState(a),
                        await u.Z.callback(t, {
                            code: n,
                            openid_params: i,
                            state: a
                        })
                    );
                } catch (e) {
                    if ((null == e ? void 0 : e.status) === 400) throw new N.Z({ errorCode: v.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                    throw (S.S.dispatch(v.CkL.CONNECTIONS_CALLBACK_ERROR), e);
                }
            }
        },
        [v.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: A.cE,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i }
                } = e;
                return (0, c.rt)({
                    paymentSourceType: v.HeQ.PAYPAL,
                    state: t,
                    path: n,
                    query: i
                });
            }
        },
        [v.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
            scope: A.cE,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i, payment_source_type: a }
                } = e;
                return (0, c.rt)({
                    paymentSourceType: a,
                    state: t,
                    path: n,
                    query: i
                });
            }
        }
    });
