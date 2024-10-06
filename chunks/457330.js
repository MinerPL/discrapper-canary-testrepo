n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(275759),
    o = n(185669),
    l = n(710845),
    u = n(314897),
    c = n(553795),
    d = n(626135),
    _ = n(573261),
    E = n(981631);
let f = new l.Z('ConnectedAccounts');
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.tn.post({
        url: E.ANM.CONNECTIONS_CALLBACK(e),
        body: {
            ...t,
            insecure: n,
            friend_sync: E.BFP.has(e)
        },
        oldFormErrors: !0
    });
}
t.Z = {
    fetch: () =>
        i.tn
            .get({
                url: E.ANM.CONNECTIONS,
                oldFormErrors: !0
            })
            .then(
                (e) =>
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: e.body
                    }),
                () =>
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_UPDATE',
                        local: !0,
                        accounts: []
                    })
            ),
    async authorize(e) {
        var t;
        let { location: n, twoWayLinkType: r, userCode: a, twoWayLink: l, successRedirect: _ } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        d.default.track(E.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n
        });
        let f = E.ANM.CONNECTIONS_AUTHORIZE(e),
            h = new URLSearchParams();
        null != a && h.append('two_way_user_code', a), null != _ && h.append('success_redirect', _), null != r ? (h.append('two_way_link_type', r), h.append('two_way_link', 'true')) : null != l && h.append('two_way_link', String(l));
        let { enabled: p } = o.g.getCurrentConfig({ location: 'ConnectedAcountsActionCreators.authorize' }, { autoTrackExposure: !0 });
        if (p) {
            let e = u.default.getSessionId();
            null != e && h.append('session_id', e);
        }
        f = f + '?' + h.toString();
        let I = await i.tn.get({
                url: f,
                oldFormErrors: !0
            }),
            { state: m } = (0, s.xp)(null !== (t = I.body.url) && void 0 !== t ? t : '');
        return null != m && c.Z.addPendingAuthorizedState(m), I;
    },
    callback: h,
    connect(e, t, n, i, a) {
        var s;
        return _.Z.put({
            url: E.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null !== (s = null == a ? void 0 : a.friend_sync) && void 0 !== s ? s : E.BFP.has(e)
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: E.BFP.has(e)
                }
            }
        });
    },
    disconnect: (e, t) =>
        i.tn.del({
            url: E.ANM.CONNECTION(e, t),
            oldFormErrors: !0
        }),
    refresh: (e, t) =>
        i.tn.post({
            url: E.ANM.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0
        }),
    setVisibility(e, t, n) {
        return this.update(e, t, { visibility: 1 === n });
    },
    setMetadataVisibility(e, t, n) {
        return this.update(e, t, { metadata_visibility: 1 === n });
    },
    setFriendSync(e, t, n) {
        return this.update(e, t, { friend_sync: n });
    },
    setShowActivity(e, t, n) {
        return this.update(e, t, { show_activity: n });
    },
    update: (e, t, n) =>
        _.Z.patch({
            url: E.ANM.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: { ...n }
            }
        }),
    joinServer(e, t) {
        a.Z.dispatch({
            type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
            integrationId: e,
            joining: !0
        }),
            i.tn.post(
                {
                    url: E.ANM.INTEGRATION_JOIN(e),
                    oldFormErrors: !0
                },
                (n) => {
                    a.Z.dispatch({
                        type: 'USER_CONNECTIONS_INTEGRATION_JOINING',
                        integrationId: e,
                        joining: !1
                    }),
                        !n.ok &&
                            (a.Z.dispatch({
                                type: 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR',
                                integrationId: e,
                                error: n.hasErr ? void 0 : n.body.message
                            }),
                            null == t || t());
                }
            );
    },
    async refreshAccessToken(e, t) {
        try {
            let {
                body: { access_token: n }
            } = await i.tn.get({
                url: E.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                oldFormErrors: !0
            });
            return (
                a.Z.dispatch({
                    type: 'USER_CONNECTION_UPDATE',
                    platformType: e,
                    id: t,
                    accessToken: n
                }),
                n
            );
        } catch (n) {
            throw (
                (n.body.code === E.evJ.CONNECTION_REVOKED &&
                    a.Z.dispatch({
                        type: 'USER_CONNECTION_UPDATE',
                        platformType: e,
                        id: t,
                        revoked: !0
                    }),
                n)
            );
        }
    },
    linkDispatchAuthCallback: (e, t) =>
        i.tn.post({
            url: E.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) {
            f.error('Two-way link: missing authorize location');
            return;
        }
        let { code: a, error: o, errorDescription: l } = (0, s.xp)(t);
        if (null != o) {
            f.error('Two-way link: missing authorize code', {
                error: o,
                errorDescription: l
            });
            return;
        }
        return await h(e, {
            code: n,
            state: r,
            two_way_link_code: a,
            token_redirect_uri: i
        });
    },
    sessionHandoff: function (e, t, n, r) {
        return i.tn.post({
            url: E.ANM.CONNECTIONS_SESSION_HANDOFF(e),
            body: {
                state: t,
                code: n,
                openid_params: r
            },
            oldFormErrors: !0
        });
    },
    getHandoffStatus: function (e, t) {
        let n = new URLSearchParams();
        n.append('state', t);
        let r = ''.concat(E.ANM.CONNECTIONS_SESSION_HANDOFF(e), '?').concat(n.toString());
        return i.tn.get({
            url: r,
            body: { state: t }
        });
    }
};
