"use strict";
n(47120);
var i = n(259443),
  r = n(442837),
  s = n(570140),
  o = n(443296),
  a = n(873741),
  l = n(592125),
  u = n(650774),
  _ = n(866960),
  d = n(626135),
  c = n(981631);
let E = new i.Y("MessageRoundtripTrackerStore");

function I(e) {
  return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
}

function T(e) {
  let t = l.Z.getBasicChannel(e.channelId);
  if (null == t) {
    E.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
    return
  }
  if (Math.random() > .1) return;
  let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
    i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
    r = (0, a.d)();
  d.default.track(c.rMx.SEND_MESSAGE_ROUNDTRIP, {
    ...(0, o.Z)(),
    api_latency_ms: n,
    gateway_latency_ms: i,
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.guild_id,
    guild_size: u.Z.getMemberCount(t.guild_id),
    mobile_network_type: _.Z.getType(),
    ...null != r && {
      mobile_signal_strength_level: r
    }
  })
}
class h extends r.ZP.Store {
  recordMessageSendAttempt(e, t) {
    let n = {
      initialSendTimestamp: Date.now(),
      apiResponseTimestamp: null,
      gatewaySeenTimestamp: null,
      channelId: e
    };
    this.pendingMessages.set(t, n), setTimeout(() => {
      let e = this.pendingMessages.get(t);
      null != e && (T(e), this.pendingMessages.delete(t))
    }, 3e4)
  }
  recordMessageSendApiResponse(e) {
    let t = this.pendingMessages.get(e);
    if (null != t) {
      let n = {
        ...t,
        apiResponseTimestamp: Date.now()
      };
      I(n) ? (T(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
    }
  }
  recordGatewayResponse(e) {
    let t = this.pendingMessages.get(e);
    if (null != t) {
      let n = {
        ...t,
        gatewaySeenTimestamp: Date.now()
      };
      I(n) ? (T(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
    }
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "pendingMessages", i = new Map, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
let S = new h(s.Z, {
  MESSAGE_CREATE: function(e) {
    let {
      optimistic: t,
      message: n
    } = e, i = n.nonce;
    if (!t && null != i) S.recordGatewayResponse(i)
  }
});
t.Z = S