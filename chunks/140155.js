n(47120), n(653041);
var r,
    i = n(442837),
    a = n(570140),
    s = n(924301);
n(57132);
var o = n(786761),
    l = n(735778),
    u = n(23750),
    c = n(594174),
    d = n(709054),
    _ = n(497089),
    E = n(178480),
    f = n(981631);
function h(e, t, n) {
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
let p = {
    loading: !1,
    initialized: !1,
    errored: !1,
    isDataStale: !1,
    notifCenterItems: [],
    staleNotifCenterItems: [],
    notifCenterIds: new Set(),
    notifCenterLocalItems: [],
    paginationHasMore: !0,
    paginationCursor: void 0,
    notifCenterActive: !1,
    notifCenterTabFocused: !1
};
function I(e) {
    return null != e.id && null != e.type;
}
function m() {
    p = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1
    };
}
function T(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, o.e5)(e.message) : void 0
    };
}
function S(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? T(e.item) : e.item;
    if (!p.initialized || !I(t) || p.notifCenterIds.has(t.id)) return !1;
    p.notifCenterIds.add(t.id), (p.notifCenterItems = [t, ...p.notifCenterItems]), p.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id));
}
function g(e, t) {
    p.notifCenterItems = p.notifCenterItems
        .map((n) =>
            e.includes(n.id)
                ? {
                      ...n,
                      acked: t
                  }
                : n
        )
        .filter(I);
}
function A(e, t, n) {
    var r;
    return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n;
}
function N(e) {
    if (!!(0, s.Z2)(e))
        p.notifCenterItems = p.notifCenterItems.map((t) =>
            t.type === _.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? {
                      ...t,
                      disable_action: !0
                  }
                : t
        );
}
class O extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(c.default), null != e)) {
            let t = e.notifCenterItems.map((e) => ({
                ...e,
                message: null != e.message ? new u.ZP(e.message) : void 0
            }));
            t.length > 0 &&
                (p = {
                    ...p,
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: t
                });
        }
    }
    getState() {
        let e = (e) => ({
            ...e,
            message: null != e.message ? e.message.toJS() : void 0
        });
        return {
            ...p,
            notifCenterItems: p.notifCenterItems.map(e),
            staleNotifCenterItems: p.staleNotifCenterItems.map(e)
        };
    }
    get loading() {
        return p.loading;
    }
    get initialized() {
        return p.initialized;
    }
    get items() {
        return p.isDataStale ? p.staleNotifCenterItems : p.notifCenterItems;
    }
    get hasMore() {
        return p.paginationHasMore;
    }
    get cursor() {
        return p.paginationCursor;
    }
    get errored() {
        return p.errored;
    }
    get active() {
        return p.notifCenterActive;
    }
    get localItems() {
        return p.notifCenterLocalItems;
    }
    get tabFocused() {
        return p.notifCenterTabFocused;
    }
}
h(O, 'displayName', 'NotificationCenterItemsStore'), h(O, 'persistKey', 'NotificationCenterItemsStore_v2');
let R = new O(a.Z, {
    CONNECTION_OPEN: function (e) {
        m();
        let t = [];
        e.relationships.forEach((e) => {
            let { type: n, user: r, since: i, is_spam_request: a } = e;
            if (n !== f.OGo.PENDING_INCOMING || ((0, l.A)({ location: 'notification-center' }) && a) || null == r || null == i) return null;
            let s = c.default.getUser(r.id);
            if (null == s) return null;
            t.push((0, E.mH)(s, i));
        }),
            e.guilds.forEach((e) => {
                e.guild_scheduled_events.forEach((e) => {
                    N(e);
                });
            }),
            (p.notifCenterLocalItems = t);
    },
    LOGOUT: m,
    NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
        let { ids: t } = e;
        g(t, !0);
    },
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function (e) {
        let { ids: t } = e;
        g(t, !1);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        N(t);
    },
    NOTIFICATION_CENTER_ITEM_CREATE: S,
    NOTIFICATION_CENTER_ITEM_DELETE: function (e) {
        let { id: t } = e;
        if (!p.notifCenterIds.has(t)) return !1;
        p.notifCenterIds.delete(t), (p.notifCenterItems = p.notifCenterItems.filter((e) => e.id !== t));
    },
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: S,
    LOAD_NOTIFICATION_CENTER_ITEMS: function () {
        p.loading = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function () {
        (p.loading = !1), (p.initialized = !0), (p.errored = !0);
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        let { items: t, hasMore: n, cursor: r } = e;
        if (!!p.loading) (p.loading = !1), (p.initialized = !0), (p.errored = !1), (p.isDataStale = !1), (null == r || !p.notifCenterIds.has(r)) && ((p.paginationHasMore = t.length > 0 && n), (p.paginationCursor = t.length > 0 ? r : void 0)), (p.notifCenterItems = [...p.notifCenterItems, ...t.map(T).filter((e) => !p.notifCenterIds.has(e.id))]), p.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id)), t.forEach((e) => p.notifCenterIds.add(e.id));
    },
    RESET_NOTIFICATION_CENTER: m,
    NOTIFICATION_CENTER_SET_ACTIVE: function (e) {
        let { active: t } = e;
        p.notifCenterActive = t;
    },
    NOTIFICATION_CENTER_TAB_FOCUSED: function (e) {
        let { focused: t } = e;
        p.notifCenterTabFocused = t;
    },
    RELATIONSHIP_ADD: function (e) {
        if (e.relationship.type === f.OGo.PENDING_INCOMING && (!(0, l.A)({ location: 'notification-center' }) || !e.relationship.isSpamRequest)) {
            let { user: t, since: n } = e.relationship;
            if (null == n) return null;
            let r = c.default.getUser(t.id);
            if (null == r) return null;
            p.notifCenterLocalItems = [...p.notifCenterLocalItems, (0, E.mH)(r, n)];
        }
        e.relationship.type === f.OGo.FRIEND &&
            (p.notifCenterLocalItems = p.notifCenterLocalItems.map((t) =>
                A(t, _.O7.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)
                    ? {
                          ...t,
                          acked: !0,
                          forceUnacked: !1,
                          local_id: 'incoming_friend_requests_accepted_'.concat(e.relationship.user.id, '_').concat(t.id),
                          type: _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                      }
                    : t
            )),
            e.relationship.type === f.OGo.BLOCKED && (p.notifCenterLocalItems = p.notifCenterLocalItems.filter((t) => !A(t, _.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !A(t, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)));
    },
    RELATIONSHIP_REMOVE: function (e) {
        p.notifCenterLocalItems = p.notifCenterLocalItems.filter((t) => !A(t, _.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !A(t, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
    },
    NOTIFICATION_CENTER_ITEM_COMPLETED: function (e) {
        let { item_enum: t } = e;
        p.notifCenterItems = p.notifCenterItems
            .map((e) =>
                e.item_enum === t
                    ? {
                          ...e,
                          completed: !0,
                          acked: !0
                      }
                    : e
            )
            .filter(I);
    },
    SET_RECENT_MENTIONS_FILTER: m,
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function (e) {
        let { newBuild: t } = e;
        if (null !== t) {
            let e = (0, E.hn)(t);
            void 0 === p.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (p.notifCenterLocalItems = [...p.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
        }
    }
});
t.Z = R;
