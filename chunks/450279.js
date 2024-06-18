"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(47120), n(653041);
var i = n(878604);

function r(e) {
  return {
    id: e.payloadType,
    name: e.mimeType.split("/").slice(1)[0]
  }
}

function s(e, t, n, s) {
  var o, a, l;
  let u = {},
    _ = {},
    d = [],
    c = [];
  for (let t of e.values()) switch (t.type) {
    case "candidate-pair":
      u[t.id] = t;
      break;
    case "codec":
      _[t.id] = t;
      break;
    case "inbound-rtp":
      d.push(t);
      break;
    case "outbound-rtp":
      c.push(t)
  }
  let E = Object.values(u).find(e => "succeeded" === e.state);
  if (void 0 === E) return null;
  let I = [];
  for (let e of c) {
    let t = _[e.codecId];
    if (null == t) continue;
    let s = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, i.f)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, i.F)(n, e.ssrc),
      codec: r(t),
      bytesSent: e.bytesSent,
      packetsSent: e.packetsSent
    };
    if ("audio" === e.kind) I.push({
      ...s,
      type: "audio"
    });
    else if ("video" === e.kind) {
      ;
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : void 0;
      I.push({
        ...s,
        framesEncoded: e.framesEncoded,
        keyFramesEncoded: e.keyFramesEncoded,
        firCount: e.firCount,
        nackCount: e.nackCount,
        pliCount: e.pliCount,
        bitrateTarget: e.targetBitrate,
        qpSum: e.qpSum,
        averageEncodeTime: null == e.framesEncoded || null === (l = e.totalEncodeTime) || 0 === l ? void 0 : (1e3 * e.totalEncodeTime / e.framesEncoded).toFixed(1),
        resolution: t,
        framesSent: e.framesSent,
        frameRateInput: e.framesPerSecond,
        type: "video"
      })
    }
  }
  let T = {};
  for (let e of d) {
    let o = _[e.codecId];
    if (null == o) continue;
    let a = t(e.ssrc);
    if (null == a) continue;
    let l = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, i.f)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, i.F)(n, e.ssrc),
      sinkWantLocal: (0, i.f)(s, e.ssrc, "video" === e.kind),
      codec: r(o),
      bytesReceived: e.bytesReceived,
      packetsReceived: e.packetsReceived,
      packetsLost: e.packetsLost
    };
    if ("audio" === e.kind) {
      let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round(1e3 * e.jitterBufferDelay / e.jitterBufferEmittedCount) : 0;
      null == T[a] && (T[a] = []), T[a].push({
        ...l,
        audioLevel: e.audioLevel,
        jitter: 1e3 * e.jitter,
        jitterBuffer: t
      })
    } else if ("video" === e.kind) {
      null == T[a] && (T[a] = []);
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : void 0;
      T[a].push({
        ...l,
        resolution: t,
        framesDecoded: e.framesDecoded,
        keyFramesDecoded: e.keyFramesDecoded,
        framesDropped: e.framesDropped,
        framesReceived: e.framesReceived,
        frameRateDecode: e.framesPerSecond,
        averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? void 0 : (1e3 * e.totalDecodeTime / e.framesDecoded).toFixed(1),
        firCount: e.firCount,
        nackCount: e.nackCount,
        pliCount: e.pliCount,
        freezeCount: e.freezeCount,
        pauseCount: e.pauseCount,
        totalFreezesDuration: e.totalFreezesDuration,
        totalPausesDuration: e.totalPausesDuration,
        qpSum: e.qpSum,
        decoderImplementationName: "WebRTC"
      })
    }
  }
  let h = (null !== (o = E.currentRoundTripTime) && void 0 !== o ? o : 0) * 1e3;
  return {
    transport: {
      availableOutgoingBitrate: null !== (a = E.availableOutgoingBitrate) && void 0 !== a ? a : 0,
      bytesReceived: E.bytesReceived,
      bytesSent: E.bytesSent,
      ping: h
    },
    rtp: {
      inbound: T,
      outbound: I
    }
  }
}