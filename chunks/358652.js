n(47120);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(570140),
    c = n(131704),
    u = n(251625),
    d = n(592125),
    h = n(306680),
    p = n(944486),
    _ = n(55589);
let f = [];
function g() {
    let e = _.Z.getPrivateChannelIds().filter((e) => h.ZP.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, u.EF)(e, f) && ((f = e), !0);
}
function m() {
    return g();
}
function C(e) {
    let { channelId: t } = e,
        n = d.Z.getChannel(t);
    return !!(null != n && (0, c.hv)(n.type)) && g();
}
class I extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, d.Z, p.Z, h.ZP);
    }
    getUnreadPrivateChannelIds() {
        return f;
    }
}
(a = 'PrivateChannelReadStateStore'),
    (r = 'displayName') in (l = I)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new I(o.Z, {
        CONNECTION_OPEN: m,
        OVERLAY_INITIALIZE: m,
        MESSAGE_CREATE: C,
        MESSAGE_ACK: C,
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        CHANNEL_DELETE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        WINDOW_FOCUS: function () {
            let e = d.Z.getChannel(p.Z.getChannelId());
            return !!(null != e && (0, c.hv)(e.type)) && g();
        },
        CHANNEL_CREATE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let { id: e } of t) {
                let t = d.Z.getChannel(e);
                null != t && (0, c.hv)(t.type) && (n = !0);
            }
            return !!n && g();
        }
    }));
