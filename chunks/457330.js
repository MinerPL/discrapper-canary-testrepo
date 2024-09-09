n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(275759),
    o = n(710845),
    l = n(553795),
    u = n(626135),
    c = n(573261),
    d = n(981631);
let _ = new o.Z('ConnectedAccounts');
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.tn.post({
        url: d.ANM.CONNECTIONS_CALLBACK(e),
        body: {
            ...t,
            insecure: n,
            friend_sync: d.BFP.has(e)
        },
        oldFormErrors: !0
    });
}
t.Z = {
    fetch: () =>
        i.tn
            .get({
                url: d.ANM.CONNECTIONS,
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
        let { location: n, twoWayLinkType: r, userCode: a, twoWayLink: o, successRedirect: c } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        u.default.track(d.rMx.CONNECTED_ACCOUNT_INITIATED, {
            platform_type: e,
            location: n
        });
        let _ = d.ANM.CONNECTIONS_AUTHORIZE(e),
            E = new URLSearchParams();
        null != a && E.append('two_way_user_code', a), null != c && E.append('success_redirect', c), null != r ? (E.append('two_way_link_type', r), E.append('two_way_link', 'true')) : null != o && E.append('two_way_link', String(o)), (_ = _ + '?' + E.toString());
        let f = await i.tn.get({
                url: _,
                oldFormErrors: !0
            }),
            { state: h } = (0, s.xp)(null !== (t = f.body.url) && void 0 !== t ? t : '');
        return null != h && l.Z.addPendingAuthorizedState(h), f;
    },
    callback: E,
    connect(e, t, n, i, a) {
        var s;
        return c.Z.put({
            url: d.ANM.CONNECTION(e, t),
            body: {
                name: n,
                friend_sync: null !== (s = null == a ? void 0 : a.friend_sync) && void 0 !== s ? s : d.BFP.has(e)
            },
            context: { location: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    name: n,
                    friend_sync: d.BFP.has(e)
                }
            }
        });
    },
    disconnect: (e, t) =>
        i.tn.del({
            url: d.ANM.CONNECTION(e, t),
            oldFormErrors: !0
        }),
    refresh: (e, t) =>
        i.tn.post({
            url: d.ANM.CONNECTION_REFRESH(e, t),
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
        c.Z.patch({
            url: d.ANM.CONNECTION(e, t),
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
                    url: d.ANM.INTEGRATION_JOIN(e),
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
                url: d.ANM.CONNECTION_ACCESS_TOKEN(e, t),
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
                (n.body.code === d.evJ.CONNECTION_REVOKED &&
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
            url: d.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: { ...t },
            oldFormErrors: !0
        }),
    async completeTwoWayLink(e, t, n, r, i) {
        if (null == t) {
            _.error('Two-way link: missing authorize location');
            return;
        }
        let { code: a, error: o, errorDescription: l } = (0, s.xp)(t);
        if (null != o) {
            _.error('Two-way link: missing authorize code', {
                error: o,
                errorDescription: l
            });
            return;
        }
        return await E(e, {
            code: n,
            state: r,
            two_way_link_code: a,
            token_redirect_uri: i
        });
    }
};
