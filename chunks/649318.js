"use strict";
n.d(t, {
  $6: function() {
    return M
  },
  MP: function() {
    return p
  },
  Mg: function() {
    return m
  },
  Nl: function() {
    return v
  },
  Ns: function() {
    return r
  },
  Rx: function() {
    return g
  },
  nX: function() {
    return P
  },
  sc: function() {
    return D
  }
}), n(47120), n(536091), n(411104), n(653041), n(724458), n(852437);
var i, r, s, o, a = n(403644),
  l = n.n(a),
  u = n(565925),
  _ = n.n(u),
  d = n(21690),
  c = n.n(d),
  E = n(264344),
  I = n.n(E),
  T = n(988367),
  h = n(259443),
  S = n(65154),
  f = n(436620);
let N = new h.Y("SDP");
(s = i || (i = {})).AUDIO = "a", s.VIDEO = "v", (o = r || (r = {})).SENDRECV = "sendrecv", o.SENDONLY = "sendonly", o.RECVONLY = "recvonly", o.INACTIVE = "inactive";
let A = "UDP/TLS/RTP/SAVPF";

function m(e) {
  switch (e) {
    case "recvonly":
      return "sendonly";
    case "sendonly":
      return "recvonly";
    case "sendrecv":
      return "sendrecv";
    default:
      return "inactive"
  }
}

function O(e, t, n) {
  let i = "".concat(e, "-").concat(t),
    r = "".concat(n).concat(i);
  return [{
    attribute: "cname",
    id: t,
    value: i
  }, {
    attribute: "msid",
    id: t,
    value: "".concat(i, " ").concat(r)
  }, {
    attribute: "mslabel",
    id: t,
    value: i
  }, {
    attribute: "label",
    id: t,
    value: r
  }]
}

function R(e) {
  return T.write({
    version: 0,
    timing: {
      start: 0,
      stop: 0
    },
    origin: {
      address: "127.0.0.1",
      ipVer: 4,
      netType: "IN",
      sessionId: "1420070400000",
      sessionVersion: 0,
      username: "-"
    },
    name: "-",
    msidSemantic: {
      semantic: "WMS",
      token: "*"
    },
    groups: [{
      type: "BUNDLE",
      mids: e.filter(e => null != e.mid).map(e => e.mid).join(" ")
    }],
    media: e
  })
}

function C(e) {
  let {
    mid: t,
    type: n,
    setup: i,
    direction: r,
    baseSDP: s,
    codec: o,
    payload: a,
    bitrate: u,
    ssrcs: _,
    extensions: d,
    rtxPayload: c,
    sendingVideo: E
  } = e;
  if ("inactive" === r && !f.WS) return {
    connection: {
      ip: "0.0.0.0",
      version: 4
    },
    direction: "inactive",
    fmtp: [],
    payloads: a,
    port: 0,
    protocol: A,
    rtp: [{
      codec: "NULL",
      payload: a,
      rate: 0
    }],
    mid: void 0,
    type: n
  };
  let {
    media: [h]
  } = T.parse(s);
  if (h.type = n, h.protocol = A, h.payloads = a, h.setup = i, h.mid = t, h.rtcpMux = "rtcp-mux", h.direction = r, h.ssrcs = _, _.length > 0 && (null != c && (h.ssrcGroups = l()(_, 4).map(e => {
      let t = e[0].id;
      return {
        semantics: "FID",
        ssrcs: "".concat(t, " ").concat(t + 1)
      }
    }), h.ssrcs = l()(_, 4).map(e => {
      let t = e.map(e => (e = {
        ...e
      }, e.id += 1, e));
      return [...e, ...t]
    }).flat()), f.WS || "Firefox" === I().name)) {
    let e = _.find(e => "msid" === e.attribute);
    if (null == e) throw Error("msid missing");
    h.msid = e.value, h.ssrcs = h.ssrcs.filter(e => "cname" === e.attribute)
  }
  switch (n) {
    case "audio":
      "Firefox" === I().name ? h.ext = d.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri) : (h.ext = d.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri), h.rtcpFb = [{
        type: "transport-cc",
        payload: a
      }]), h.rtp.push({
        codec: o,
        encoding: 2,
        payload: a,
        rate: 48e3
      }), o === S.ad.OPUS && h.fmtp.push({
        config: "minptime=10;useinbandfec=1;usedtx=".concat(E ? "0" : "1"),
        payload: a
      }), h.maxptime = 60;
      break;
    case "video":
      h.ext = d.filter(e => "urn:ietf:params:rtp-hdrext:toffset" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri || "urn:3gpp:video-orientation" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri), h.rtp.push({
        codec: o,
        payload: a,
        rate: 9e4
      });
      let N = "x-google-max-bitrate=".concat(u);
      o === S.ad.H264 && (N += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f"), h.fmtp.push({
        config: N,
        payload: a
      }), h.rtcpFb = [{
        type: "ccm",
        subtype: "fir",
        payload: a
      }, {
        type: "nack",
        payload: a
      }, {
        type: "nack",
        subtype: "pli",
        payload: a
      }, {
        type: "goog-remb",
        payload: a
      }, {
        type: "transport-cc",
        payload: a
      }], null != c && (h.rtp.push({
        codec: "rtx",
        payload: c,
        rate: 9e4
      }), h.fmtp.push({
        config: "apt=".concat(a),
        payload: c
      }), h.payloads = "".concat(h.payloads, " ").concat(c))
  }
  return h
}

function p(e) {
  let {
    type: t,
    baseSDP: n,
    direction: i,
    audioCodec: r,
    audioPayloadType: s,
    audioBitRate: o,
    videoCodec: a,
    videoPayloadType: l,
    videoBitRate: u,
    rtxPayloadType: _,
    ssrcs: d,
    extensions: c
  } = e, E = [];
  if (N.info("generateSessionDescription: ".concat(JSON.stringify(d))), "Firefox" === I().name) {
    let e = "answer" === t ? "passive" : "active";
    d.forEach(t => {
      let [i, d, I, T, h] = t;
      if ("video" !== I || 0 !== l && 0 !== _) E.push(C({
        mid: h,
        type: I,
        setup: e,
        direction: T,
        baseSDP: n,
        codec: "audio" === I ? r : a,
        payload: "audio" === I ? s : l,
        bitrate: "audio" === I ? o : u,
        ssrcs: O(d, i, "audio" === I ? "a" : "v"),
        extensions: c
      }))
    })
  } else {
    let e = "answer" === t ? "passive" : "actpass",
      I = d.filter(e => {
        let [t, n, i, r, s] = e;
        return "inactive" !== r && "audio" === i
      }).map(e => {
        let [t, n] = e;
        return O(n, t, "a")
      });
    if (E.push(C({
        mid: "audio",
        type: "audio",
        setup: e,
        direction: i,
        baseSDP: n,
        codec: r,
        payload: s,
        bitrate: o,
        ssrcs: I.flat(),
        extensions: c
      })), l > 0) {
      let t = d.filter(e => {
        let [t, n, i, r, s] = e;
        return "inactive" !== r && "video" === i
      }).map(e => {
        let [t, n] = e;
        return O(n, t, "v")
      });
      E.push(C({
        mid: "video",
        type: "video",
        setup: e,
        direction: i,
        baseSDP: n,
        codec: a,
        payload: l,
        bitrate: u,
        ssrcs: t.flat(),
        extensions: c,
        rtxPayload: _
      }))
    }
  }
  return new RTCSessionDescription({
    type: t,
    sdp: R(E)
  })
}

function g(e) {
  let {
    type: t,
    baseSDP: n,
    audioCodec: i,
    audioPayloadType: r,
    audioBitRate: s,
    videoCodec: o,
    videoPayloadType: a,
    videoBitRate: l,
    sendingVideo: u,
    rtxPayloadType: _,
    ssrcs: d,
    extensions: c
  } = e, E = [], I = "answer" === t ? "passive" : "actpass";
  return d.forEach(e => {
    let t, {
      ssrc: d,
      cname: T,
      type: h,
      direction: S,
      mid: f
    } = e;
    "" !== T ? t = O(T, d, "audio" === h ? "a" : "v") : (t = [], "sendonly" === S ? S = "inactive" : "sendrecv" === S && (S = "recvonly"));
    E.push(C({
      mid: f,
      type: h,
      setup: I,
      direction: S,
      baseSDP: n,
      codec: "audio" === h ? i : o,
      payload: "audio" === h ? r : a,
      bitrate: "audio" === h ? s : l,
      ssrcs: t,
      extensions: c,
      rtxPayload: "audio" === h ? null : _,
      sendingVideo: u
    }))
  }), new RTCSessionDescription({
    type: t,
    sdp: R(E)
  })
}

function L(e, t, n, i, r) {
  let s = e.find(e => e.codec === i);
  if (null == s) return null;
  let o = t.find(e => RegExp("^apt=".concat(s.payload)).test(e.config)),
    a = null;
  if (null != o) {
    let t = e.find(e => e.codec === S.ad.RTX && e.payload === o.payload);
    null != t && (a = t.payload)
  }
  return {
    type: n,
    name: i,
    priority: r + 1,
    payloadType: s.payload,
    rtxPayloadType: a
  }
}

function v(e) {
  let t = T.parse(e).media.reduce((e, t) => {
    let n, {
      type: i,
      rtp: r,
      ssrcs: s,
      fmtp: o,
      direction: a,
      mid: l
    } = t;
    switch (e.outboundStreams.push({
        type: i,
        direction: a,
        mid: l
      }), i) {
      case "audio":
        [S.ad.OPUS].forEach((t, n) => {
          let s = L(r, o, i, t, n);
          null != s && e.codecs.push(s)
        }), "sendrecv" === a && null != (n = null == s ? void 0 : s.find(e => "cname" === e.attribute)) && (e.audioSSRC = n.id);
        break;
      case "video":
        [S.ad.H264, S.ad.VP8, S.ad.VP9].forEach((t, n) => {
          let s = L(r, o, i, t, n);
          null != s && e.codecs.push(s)
        }), "sendrecv" === a && (null != (n = null == s ? void 0 : s.find(e => "cname" === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == s ? void 0 : s.findLast(e => "cname" === e.attribute)) && (n.id === e.videoSSRC && N.warn("Unable to find a unique rtx SSRC!"), e.rtxSSRC = n.id))
    }
    return e
  }, {
    outboundStreams: [],
    codecs: [],
    audioSSRC: 0,
    videoSSRC: 0,
    rtxSSRC: 0
  });
  return t.codecs = c()(t.codecs, _()), t
}

function D(e) {
  var t;
  let {
    codecs: n
  } = v(e), i = n.find(e => e.name === S.ad.VP8), r = RegExp("^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(null !== (t = null == i ? void 0 : i.rtxPayloadType) && void 0 !== t ? t : 0, " rtx"), "i");
  return {
    sdp: [...new Set(e.split(/\r\n/).filter(e => r.test(e)))].join("\n"),
    codecs: n
  }
}

function M(e) {
  if (!e.includes("a=fingerprint")) return N.error("Remote SDP does not include fingerprint!"), !1;
  if (!e.includes("a=ice-ufrag")) return N.error("Remote SDP does not include ICE user name!"), !1;
  if (!e.includes("a=ice-pwd")) return N.error("Remote SDP does not include ICE password!"), !1;
  if (!e.includes("a=candidate")) return N.error("Remote SDP does not include ICE candidate!"), !1;
  if (!e.includes("c=")) return N.error("Remote SDP does not include c-line!"), !1;
  let t = e.split("\n").filter(e => e.startsWith("c=")).join().trim();
  return !(t.split(" ").length < 3) || (N.error("Incorrect c-line: ".concat(t)), !1)
}

function P(e) {
  return [...new Set(e.split(/\r\n/).filter(e => e.startsWith("a=extmap:")))].map(e => {
    let t = e.split(" ");
    return {
      value: parseInt(t[0].split("/")[0].substr(9), 10),
      uri: t[1]
    }
  })
}