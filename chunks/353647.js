n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(180335);
let c = new Map(),
    d = new Set(),
    _ = null,
    E = !1;
function f() {
    (c = new Map()), (d = new Set()), (_ = null), (E = !1);
}
class h extends (r = o.ZP.Store) {
    getMatchingOutboxEntry(e) {
        let { activity: t, userId: n } = e,
            r = c.get(n);
        if (null != r && null != t) return (0, u.vu)(r.entries, t);
    }
    getUserOutbox(e) {
        return c.get(e);
    }
    isFetchingUserOutbox(e) {
        return d.has(e);
    }
    get deleteOutboxEntryError() {
        return _;
    }
    get isDeletingEntryHistory() {
        return E;
    }
}
(s = 'ContentInventoryOutboxStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new h(l.Z, {
        CONNECTION_OPEN: function () {
            f();
        },
        LOGOUT: function () {
            f();
        },
        CONTENT_INVENTORY_FETCH_OUTBOX_START: function (e) {
            let { userId: t } = e;
            d.add(t);
        },
        CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function (e) {
            let { outbox: t, userId: n } = e;
            c.set(n, {
                ...t,
                lastFetched: Date.now()
            }),
                d.delete(n);
        },
        CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: function (e) {
            let { userId: t } = e;
            d.delete(t);
        },
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function () {
            (_ = null), (E = !0);
        },
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function (e) {
            let { entry: t, userId: n } = e;
            _ = null;
            let r = c.get(n);
            if (null == r) return !1;
            let i = r.entries.filter((e) => e.id !== t.id);
            c.set(n, {
                ...r,
                entries: i
            }),
                (E = !1);
        },
        CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function (e) {
            let { error: t } = e;
            (_ = t), (E = !1);
        },
        CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function () {
            (_ = null), (E = !1);
        }
    }));
