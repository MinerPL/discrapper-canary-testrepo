n(47120);
var r = n(259443),
    i = n(442837),
    a = n(570140),
    s = n(443296),
    o = n(873741),
    l = n(592125),
    u = n(650774),
    c = n(866960),
    d = n(626135),
    _ = n(981631);
let E = new r.Y('MessageRoundtripTrackerStore');
function f(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function h(e) {
    let t = l.Z.getBasicChannel(e.channelId);
    if (null == t) {
        E.warn('Ignoring a messageData for channel '.concat(e.channelId, " because we can't find that channel."));
        return;
    }
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        i = (0, o.d)();
    d.default.track(_.rMx.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, s.Z)(),
        api_latency_ms: n,
        gateway_latency_ms: r,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: u.Z.getMemberCount(t.guild_id),
        mobile_network_type: c.Z.getType(),
        ...(null != i && { mobile_signal_strength_level: i })
    });
}
class p extends i.ZP.Store {
    recordMessageSendAttempt(e, t) {
        let n = {
            initialSendTimestamp: Date.now(),
            apiResponseTimestamp: null,
            gatewaySeenTimestamp: null,
            channelId: e
        };
        this.pendingMessages.set(t, n),
            setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (h(e), this.pendingMessages.delete(t));
            }, 30000);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = {
                ...t,
                apiResponseTimestamp: Date.now()
            };
            f(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = {
                ...t,
                gatewaySeenTimestamp: Date.now()
            };
            f(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'pendingMessages'),
            (r = new Map()),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
let m = new p(a.Z, {
    MESSAGE_CREATE: function (e) {
        let { optimistic: t, message: n } = e,
            r = n.nonce;
        if (!t && null != r) m.recordGatewayResponse(r);
    }
});
t.Z = m;
