n(47120);
var r = n(592125),
    i = n(412788);
function a(e, t, n) {
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
let s = new Set(),
    o = new Set(),
    l = !1;
function u(e) {
    return e.isSpam;
}
function c(e) {
    let t = !1;
    if (e.isSpam && !s.has(e.id)) s.add(e.id), (t = !0);
    if (!e.isSpam && s.has(e.id)) s.delete(e.id), (t = !0);
    if (!e.isSpam && o.has(e.id)) o.delete(e.id), (t = !0);
    return t;
}
function d() {
    s.clear(),
        o.clear(),
        Object.values(r.Z.getMutablePrivateChannels()).forEach((e) => {
            c(e);
        }),
        (l = !0);
}
function _(e) {
    let { channelId: t } = e;
    o.add(t);
}
function E(e) {
    let { channel: t } = e;
    return c(t);
}
function f(e) {
    let { channels: t } = e;
    for (let e of t) c(e);
}
function h(e) {
    let { channel: t } = e,
        n = !1;
    return s.has(t.id) && (s.delete(t.id), (n = !0)), n;
}
class p extends i.Z {
    initialize() {
        this.waitFor(r.Z);
    }
    loadCache() {
        let e = this.readSnapshot(p.LATEST_SNAPSHOT_VERSION);
        null != e && (s = new Set(e));
    }
    takeSnapshot() {
        return {
            version: p.LATEST_SNAPSHOT_VERSION,
            data: Array.from(s)
        };
    }
    getSpamChannelIds() {
        return s;
    }
    getSpamChannelsCount() {
        return s.size;
    }
    isSpam(e) {
        return s.has(e);
    }
    isAcceptedOptimistic(e) {
        return o.has(e);
    }
    isReady() {
        return l;
    }
    constructor() {
        super({
            CONNECTION_OPEN: d,
            CONNECTION_OPEN_SUPPLEMENTAL: d,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: E,
            CHANNEL_UPDATES: f,
            CHANNEL_DELETE: h,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: _
        });
    }
}
a(p, 'displayName', 'SpamMessageRequestStore'), a(p, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new p());
