n(47120);
var i, a = n(442837), s = n(570140);
n(57132);
var l = n(455199), r = n(70956), o = n(709054), c = n(497089);
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let u = 90 * r.Z.Millis.DAY, _ = {
        tab: null,
        localItemAcks: {},
        hasNewMentions: !1,
        isDataStale: !1,
        isRefreshing: !1
    };
class E extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        if (this.waitFor(l.Z), null != e) {
            var t;
            (_ = e).localItemAcks = function (e) {
                let t = {};
                for (let [n, i] of Object.entries(e))
                    Date.now() - i < u && (t[n] = i);
                return t;
            }(null !== (t = _.localItemAcks) && void 0 !== t ? t : {}), _.isDataStale = !0;
        }
    }
    getState() {
        return _;
    }
    getTab() {
        var e;
        return null !== (e = _.tab) && void 0 !== e ? e : c.b1.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != _.localItemAcks[e.local_id] || o.default.age(e.id) > u);
    }
    hasNewMentions() {
        return _.hasNewMentions;
    }
    isDataStale() {
        return _.isDataStale;
    }
    isRefreshing() {
        return _.isRefreshing;
    }
    shouldReload() {
        return _.hasNewMentions || _.isDataStale || _.isRefreshing;
    }
}
d(E, 'displayName', 'NotificationCenterStore'), d(E, 'persistKey', 'NotificationCenterStore');
function m() {
    _.hasNewMentions = !1, _.isDataStale = !1, _.isRefreshing = !1;
}
t.Z = new E(s.Z, {
    MESSAGE_CREATE: function (e) {
        let {message: t} = e;
    },
    NOTIFICATION_CENTER_SET_TAB: function (e) {
        _ = {
            ..._,
            tab: e.tab
        };
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
        let {localIds: t} = e;
        t.forEach(e => {
            _ = {
                ..._,
                localItemAcks: {
                    ..._.localItemAcks,
                    [e]: Date.now()
                }
            };
        });
    },
    NOTIFICATION_CENTER_REFRESH: function () {
        _.isRefreshing = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: m,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: m
});
