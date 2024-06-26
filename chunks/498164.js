var i, s, a = n(735250);
n(470079);
var r = n(756647), l = n(481060), o = n(570140), c = n(355467), d = n(899742), u = n(457330), _ = n(533307), E = n(447543), h = n(962220), I = n(703656), m = n(314897), p = n(594174), g = n(626135), T = n(585483), S = n(591759), C = n(998502), N = n(996106), f = n(186901), A = n(981631);
function Z(e, t) {
    if (null != e)
        g.default.track(A.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, r.s)(e),
            link_type: t
        });
}
(i = s || (s = {})).SETTINGS = 'settings', i.CHANGELOG = 'changelog', i.LIBRARY = 'library', i.STORE = 'store', i.INVITE = 'invite', i.CHANNEL = 'channel', i.GUILD_SETTINGS = 'guild_settings', t.Z = {
    [A.Etm.INVITE_BROWSER]: {
        scope: f.cE,
        async handler(e) {
            let {
                    args: {code: t}
                } = e, {invite: n} = await E.Z.resolveInvite(t, 'Desktop Modal');
            if (null == n)
                throw new N.Z({ errorCode: A.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
            return m.default.isAuthenticated() ? o.Z.dispatch({
                type: 'INVITE_MODAL_OPEN',
                invite: n,
                code: t,
                context: A.IlC.APP
            }) : (0, I.dL)(A.Z5c.INVITE(t)), {
                invite: n,
                code: t
            };
        }
    },
    [A.Etm.GUILD_TEMPLATE_BROWSER]: {
        scope: f.cE,
        async handler(e) {
            let {
                args: {code: t}
            } = e;
            if (null == p.default.getCurrentUser())
                return;
            let {guildTemplate: i} = await h.Z.resolveGuildTemplate(t);
            if (null == i)
                throw new N.Z({ errorCode: A.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
            return C.ZP.focus(), (0, l.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('10778'),
                    n.e('62974')
                ]).then(n.bind(n, 766775));
                return t => (0, a.jsx)(e, {
                    ...t,
                    guildTemplate: i
                });
            }), {
                guildTemplate: i,
                code: t
            };
        }
    },
    [A.Etm.GIFT_CODE_BROWSER]: {
        scope: f.cE,
        handler(e) {
            let {
                args: {code: t}
            } = e;
            return new Promise((e, i) => {
                o.Z.wait(() => {
                    _.Z.resolveGiftCode(t, !0, !0).then(i => {
                        let {giftCode: s} = i;
                        C.ZP.focus(), g.default.track(A.rMx.OPEN_MODAL, {
                            type: 'gift_accept',
                            location: A.SaU
                        }), (0, l.openModalLazy)(async () => {
                            let {default: e} = await Promise.all([
                                n.e('92446'),
                                n.e('56257')
                            ]).then(n.bind(n, 409858));
                            return n => (0, a.jsx)(e, {
                                code: t,
                                ...n
                            });
                        }), e({ giftCode: s });
                    }).catch(() => i(new N.Z({ errorCode: A.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                });
            });
        }
    },
    [A.Etm.DEEP_LINK]: {
        scope: f.cE,
        handler(e) {
            let {
                args: {
                    type: t,
                    params: n
                }
            } = e;
            switch (C.ZP.focus(), t) {
            case f.jE.USER_SETTINGS:
                null != n && ((0, I.dL)(A.Z5c.SETTINGS(n.section, n.subsection)), Z(n.fingerprint, 'settings'));
                break;
            case f.jE.CHANGELOG:
                null != n && ((0, I.dL)(S.Z.formatPathWithQuery(A.Z5c.CHANGELOGS(n.date), n.query)), Z(n.fingerprint, 'changelog'));
                break;
            case f.jE.LIBRARY:
                (0, I.dL)(A.Z5c.APPLICATION_LIBRARY), null != n && Z(n.fingerprint, 'library');
                break;
            case f.jE.STORE_HOME:
                (0, I.dL)(A.Z5c.APPLICATION_STORE), null != n && Z(n.fingerprint, 'store');
                break;
            case f.jE.STORE_LISTING:
                null != n && ((0, I.dL)(A.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), Z(n.fingerprint, 'store'));
                break;
            case f.jE.PICK_GUILD_SETTINGS:
                null != n && ((0, I.dL)({
                    pathname: A.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                    search: n.search
                }), Z(n.fingerprint, 'guild_settings'));
                break;
            case f.jE.CHANNEL:
                null != n && ((0, I.dL)({
                    pathname: A.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                    search: n.search
                }), Z(n.fingerprint, 'channel'));
            }
        }
    },
    [A.Etm.BROWSER_HANDOFF]: {
        scope: f.CN,
        handler(e) {
            let {
                args: {
                    handoffToken: t,
                    fingerprint: n
                }
            } = e;
            C.ZP.focus(null, !0), (0, d.lx)(t, n);
        }
    },
    [A.Etm.CONNECTIONS_CALLBACK]: {
        scope: f.cE,
        handler: async e => {
            let {
                args: {
                    providerType: t,
                    code: n,
                    openid_params: i,
                    state: s
                }
            } = e;
            try {
                return await u.Z.callback(t, {
                    code: n,
                    openid_params: i,
                    state: s
                });
            } catch (e) {
                throw T.S.dispatch(A.CkL.CONNECTIONS_CALLBACK_ERROR), e;
            }
        }
    },
    [A.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: f.cE,
        handler(e) {
            let {
                args: {
                    state: t,
                    path: n,
                    query: i
                }
            } = e;
            return (0, c.rt)({
                paymentSourceType: A.HeQ.PAYPAL,
                state: t,
                path: n,
                query: i
            });
        }
    },
    [A.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: f.cE,
        handler(e) {
            let {
                args: {
                    state: t,
                    path: n,
                    query: i,
                    payment_source_type: s
                }
            } = e;
            return (0, c.rt)({
                paymentSourceType: s,
                state: t,
                path: n,
                query: i
            });
        }
    }
};
