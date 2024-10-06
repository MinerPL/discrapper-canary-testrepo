n(47120), n(653041);
var r,
    i = n(442837),
    a = n(570140),
    s = n(973616);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = [],
    u = {},
    c = {},
    d = {},
    _ = {},
    E = {},
    f = { botUserIdToAppUsage: {} };
function h(e) {
    for (let t of ((u[e.id] = e), (_[e.id] = Date.now()), (d[e.name.toLowerCase()] = e), e.aliases)) d[t.toLowerCase()] = e;
    delete E[e.id];
}
function p(e) {
    h(s.Z.createFromServer(e));
}
function I(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) (null == e ? void 0 : e.application) != null && (h(s.Z.createFromServer(e.application)), (n = !0));
    return n;
}
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e && 'object' == typeof e.botUserIdToAppUsage)
            for (let t in e.botUserIdToAppUsage) {
                let n = e.botUserIdToAppUsage[t],
                    r = n.applicationId,
                    i = n.lastUsedMs;
                'string' == typeof r &&
                    r.length > 0 &&
                    'number' == typeof i &&
                    i > 0 &&
                    (f.botUserIdToAppUsage[t] = {
                        applicationId: r,
                        lastUsedMs: i
                    });
            }
    }
    getState() {
        return f;
    }
    _getAllApplications() {
        return Object.values(u);
    }
    getGuildApplication(e, t) {
        if (null != e) {
            for (let n of Object.values(u)) if (n.guildId === e && n.type === t) return n;
        }
    }
    getGuildApplicationIds(e) {
        var t;
        return null == e ? l : null !== (t = c[e]) && void 0 !== t ? t : l;
    }
    getApplication(e) {
        return u[e];
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(d, t) ? d[t] : void 0;
    }
    getApplicationLastUpdated(e) {
        return _[e];
    }
    isFetchingApplication(e) {
        return !0 === E[e];
    }
    didFetchingApplicationFail(e) {
        return !1 === E[e];
    }
    getFetchingOrFailedFetchingIds() {
        return Object.keys(E);
    }
    getAppIdForBotUserId(e) {
        var t;
        if (null != e) return null === (t = f.botUserIdToAppUsage[e]) || void 0 === t ? void 0 : t.applicationId;
    }
}
o(m, 'displayName', 'ApplicationStore'),
    o(m, 'persistKey', 'ApplicationStore'),
    (t.Z = new m(a.Z, {
        LOGOUT: function () {
            (u = {}), (c = {}), (d = {}), (_ = {}), (E = {});
        },
        OVERLAY_INITIALIZE: function (e) {
            let { applications: t } = e;
            for (let e of t) h(new s.Z(e));
        },
        APPLICATION_FETCH: function (e) {
            let { applicationId: t } = e,
                n = E[t];
            return (E[t] = !0), !0 !== n;
        },
        APPLICATION_FETCH_SUCCESS: function (e) {
            let { application: t } = e;
            p(t);
        },
        APPLICATION_FETCH_FAIL: function (e) {
            let { applicationId: t } = e,
                n = E[t];
            return (E[t] = !1), !1 !== n;
        },
        APPLICATIONS_FETCH: function (e) {
            let { applicationIds: t } = e,
                n = !1;
            for (let e of t) {
                let t = E[e];
                (E[e] = !0), (n = !0 !== t);
            }
            return n;
        },
        APPLICATIONS_FETCH_SUCCESS: function (e) {
            let { applications: t } = e;
            for (let e of t) h(s.Z.createFromServer(e));
        },
        APPLICATIONS_FETCH_FAIL: function (e) {
            let { applicationIds: t } = e,
                n = !1;
            for (let e of t) {
                let t = E[e];
                (E[e] = !1), (n = !1 !== t);
            }
            return n;
        },
        APPLICATION_UPDATE: function (e) {
            let { application: t } = e;
            p(t);
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: I,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: I,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: I,
        GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
            let { integrations: t, guildId: n } = e,
                r = !1,
                i = [];
            for (let { application: e } of t) null != e && (h(e), i.push(e.id), (r = !0));
            return r && (c[n] = i), r;
        },
        GUILD_APPLICATIONS_FETCH_SUCCESS: function (e) {
            let { guildId: t, applications: n } = e,
                r = [];
            for (let e of n) r.push(e.id), h(s.Z.createFromServer(e));
            c[t] = r;
        },
        BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
            let { payments: t } = e,
                n = new Set();
            for (let e of t) {
                var r;
                let t = null === (r = e.sku) || void 0 === r ? void 0 : r.application;
                !(null == t || n.has(t.id)) && h(s.Z.createFromServer(t));
            }
            return n.size > 0;
        },
        PAYMENT_UPDATE: function (e) {
            var t;
            let { payment: n } = e;
            if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null) return !1;
            h(s.Z.createFromServer(n.sku.application));
        },
        INVITE_RESOLVE_SUCCESS: function (e) {
            let { invite: t } = e;
            if (null == t.target_application) return !1;
            h(s.Z.createFromServer(t.target_application));
        },
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            var t;
            let { giftCode: n } = e;
            if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null) return !1;
            h(s.Z.createFromServer(n.store_listing.sku.application));
        },
        LIBRARY_FETCH_SUCCESS: function (e) {
            let { libraryApplications: t } = e;
            for (let e of t) h(s.Z.createFromServer(e.application));
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { storeListing: t } = e;
            if (null == t.sku.application) return !1;
            h(s.Z.createFromServer(t.sku.application));
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) =>
                (function (e) {
                    var t;
                    null === (t = e.attachments) ||
                        void 0 === t ||
                        t.forEach((e) => {
                            null != e.application && h(s.Z.createFromServer(e.application));
                        });
                })(e)
            );
        },
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let { recommendations: t } = e;
            t.forEach((e) => {
                e.items.forEach((e) => {
                    h(s.Z.createFromServer(e.application));
                });
            });
        },
        USER_PROFILE_FETCH_SUCCESS: function (e) {
            let { user: t, application: n } = e;
            t.bot &&
                null != n &&
                !(function (e) {
                    let { userId: t, applicationId: n } = e,
                        r = f.botUserIdToAppUsage[t];
                    null == r
                        ? (f.botUserIdToAppUsage[t] = {
                              applicationId: n,
                              lastUsedMs: Date.now()
                          })
                        : (f.botUserIdToAppUsage[t] = {
                              applicationId: n,
                              lastUsedMs: r.lastUsedMs
                          });
                    let i = new Map();
                    for (let [e, t] of Object.entries(f.botUserIdToAppUsage)) i.set(e, t);
                    let a = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
                    for (let e = 0; e < a.length; e++)
                        if (e >= 10) {
                            let t = a[e][0];
                            delete f.botUserIdToAppUsage[t];
                        }
                })({
                    userId: t.id,
                    applicationId: n.id
                });
        },
        APP_DM_OPEN: function (e) {
            let { botUserId: t } = e,
                n = f.botUserIdToAppUsage[t];
            null != n &&
                (f.botUserIdToAppUsage[t] = {
                    ...n,
                    lastUsedMs: Date.now()
                });
        }
    }));
