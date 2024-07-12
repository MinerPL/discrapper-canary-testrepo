n.d(t, {
  $6: function() {
return L;
  },
  MP: function() {
return O;
  },
  Mg: function() {
return S;
  },
  Nl: function() {
return y;
  },
  Ns: function() {
return i;
  },
  Rx: function() {
return R;
  },
  nX: function() {
return b;
  },
  sc: function() {
return D;
  }
}), n(47120), n(536091), n(411104), n(653041), n(724458), n(852437);
var r, i, a, o, s = n(403644),
  l = n.n(s),
  u = n(565925),
  c = n.n(u),
  d = n(21690),
  _ = n.n(d),
  E = n(264344),
  f = n.n(E),
  h = n(988367),
  p = n(259443),
  m = n(65154),
  I = n(436620);
let T = new p.Y('SDP');
(a = r || (r = {})).AUDIO = 'a', a.VIDEO = 'v', (o = i || (i = {})).SENDRECV = 'sendrecv', o.SENDONLY = 'sendonly', o.RECVONLY = 'recvonly', o.INACTIVE = 'inactive';
let g = 'UDP/TLS/RTP/SAVPF';

function S(e) {
  switch (e) {
case 'recvonly':
  return 'sendonly';
case 'sendonly':
  return 'recvonly';
case 'sendrecv':
  return 'sendrecv';
default:
  return 'inactive';
  }
}

function A(e, t, n) {
  let r = ''.concat(e, '-').concat(t),
i = ''.concat(n).concat(r);
  return [{
  attribute: 'cname',
  id: t,
  value: r
},
{
  attribute: 'msid',
  id: t,
  value: ''.concat(r, ' ').concat(i)
},
{
  attribute: 'mslabel',
  id: t,
  value: r
},
{
  attribute: 'label',
  id: t,
  value: i
}
  ];
}

function N(e) {
  return h.write({
version: 0,
timing: {
  start: 0,
  stop: 0
},
origin: {
  address: '127.0.0.1',
  ipVer: 4,
  netType: 'IN',
  sessionId: '1420070400000',
  sessionVersion: 0,
  username: '-'
},
name: '-',
msidSemantic: {
  semantic: 'WMS',
  token: '*'
},
groups: [{
  type: 'BUNDLE',
  mids: e.filter(e => null != e.mid).map(e => e.mid).join(' ')
}],
media: e
  });
}

function v(e) {
  let {
mid: t,
type: n,
setup: r,
direction: i,
baseSDP: a,
codec: o,
payload: s,
bitrate: u,
ssrcs: c,
extensions: d,
rtxPayload: _,
sendingVideo: E
  } = e;
  if ('inactive' === i && !I.WS)
return {
  connection: {
    ip: '0.0.0.0',
    version: 4
  },
  direction: 'inactive',
  fmtp: [],
  payloads: s,
  port: 0,
  protocol: g,
  rtp: [{
    codec: 'NULL',
    payload: s,
    rate: 0
  }],
  mid: void 0,
  type: n
};
  let {
media: [p]
  } = h.parse(a);
  if (p.type = n, p.protocol = g, p.payloads = s, p.setup = r, p.mid = t, p.rtcpMux = 'rtcp-mux', p.direction = i, p.ssrcs = c, c.length > 0 && (null != _ && (p.ssrcGroups = l()(c, 4).map(e => {
  let t = e[0].id;
  return {
    semantics: 'FID',
    ssrcs: ''.concat(t, ' ').concat(t + 1)
  };
}), p.ssrcs = l()(c, 4).map(e => {
  let t = e.map(e => (e = {
    ...e
  }, e.id += 1, e));
  return [
    ...e,
    ...t
  ];
}).flat()), I.WS || 'Firefox' === f().name)) {
let e = c.find(e => 'msid' === e.attribute);
if (null == e)
  throw Error('msid missing');
p.msid = e.value, p.ssrcs = p.ssrcs.filter(e => 'cname' === e.attribute);
  }
  switch (n) {
case 'audio':
  'Firefox' === f().name ? p.ext = d.filter(e => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri) : (p.ext = d.filter(e => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri), p.rtcpFb = [{
    type: 'transport-cc',
    payload: s
  }]), p.rtp.push({
    codec: o,
    encoding: 2,
    payload: s,
    rate: 48000
  }), o === m.ad.OPUS && p.fmtp.push({
    config: 'minptime=10;useinbandfec=1;usedtx='.concat(E ? '0' : '1'),
    payload: s
  }), p.maxptime = 60;
  break;
case 'video':
  p.ext = d.filter(e => 'urn:ietf:params:rtp-hdrext:toffset' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' === e.uri || 'urn:3gpp:video-orientation' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay' === e.uri), p.rtp.push({
    codec: o,
    payload: s,
    rate: 90000
  });
  let T = 'x-google-max-bitrate='.concat(u);
  o === m.ad.H264 && (T += ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f'), p.fmtp.push({
    config: T,
    payload: s
  }), p.rtcpFb = [{
      type: 'ccm',
      subtype: 'fir',
      payload: s
    },
    {
      type: 'nack',
      payload: s
    },
    {
      type: 'nack',
      subtype: 'pli',
      payload: s
    },
    {
      type: 'goog-remb',
      payload: s
    },
    {
      type: 'transport-cc',
      payload: s
    }
  ], null != _ && (p.rtp.push({
    codec: 'rtx',
    payload: _,
    rate: 90000
  }), p.fmtp.push({
    config: 'apt='.concat(s),
    payload: _
  }), p.payloads = ''.concat(p.payloads, ' ').concat(_));
  }
  return p;
}

function O(e) {
  let {
type: t,
baseSDP: n,
direction: r,
audioCodec: i,
audioPayloadType: a,
audioBitRate: o,
videoCodec: s,
videoPayloadType: l,
videoBitRate: u,
rtxPayloadType: c,
ssrcs: d,
extensions: _
  } = e, E = [];
  if (T.info('generateSessionDescription: '.concat(JSON.stringify(d))), 'Firefox' === f().name) {
let e = 'answer' === t ? 'passive' : 'active';
d.forEach(t => {
  let [r, d, f, h, p] = t;
  if ('video' !== f || 0 !== l && 0 !== c)
    E.push(v({
      mid: p,
      type: f,
      setup: e,
      direction: h,
      baseSDP: n,
      codec: 'audio' === f ? i : s,
      payload: 'audio' === f ? a : l,
      bitrate: 'audio' === f ? o : u,
      ssrcs: A(d, r, 'audio' === f ? 'a' : 'v'),
      extensions: _
    }));
});
  } else {
let e = 'answer' === t ? 'passive' : 'actpass',
  f = d.filter(e => {
    let [t, n, r, i, a] = e;
    return 'inactive' !== i && 'audio' === r;
  }).map(e => {
    let [t, n] = e;
    return A(n, t, 'a');
  });
if (E.push(v({
    mid: 'audio',
    type: 'audio',
    setup: e,
    direction: r,
    baseSDP: n,
    codec: i,
    payload: a,
    bitrate: o,
    ssrcs: f.flat(),
    extensions: _
  })), l > 0) {
  let t = d.filter(e => {
    let [t, n, r, i, a] = e;
    return 'inactive' !== i && 'video' === r;
  }).map(e => {
    let [t, n] = e;
    return A(n, t, 'v');
  });
  E.push(v({
    mid: 'video',
    type: 'video',
    setup: e,
    direction: r,
    baseSDP: n,
    codec: s,
    payload: l,
    bitrate: u,
    ssrcs: t.flat(),
    extensions: _,
    rtxPayload: c
  }));
}
  }
  return new RTCSessionDescription({
type: t,
sdp: N(E)
  });
}

function R(e) {
  let {
type: t,
baseSDP: n,
audioCodec: r,
audioPayloadType: i,
audioBitRate: a,
videoCodec: o,
videoPayloadType: s,
videoBitRate: l,
sendingVideo: u,
rtxPayloadType: c,
ssrcs: d,
extensions: _
  } = e, E = [], f = 'answer' === t ? 'passive' : 'actpass';
  return d.forEach(e => {
let t, {
  ssrc: d,
  cname: h,
  type: p,
  direction: m,
  mid: I
} = e;
'' !== h ? t = A(h, d, 'audio' === p ? 'a' : 'v') : (t = [], 'sendonly' === m ? m = 'inactive' : 'sendrecv' === m && (m = 'recvonly'));
E.push(v({
  mid: I,
  type: p,
  setup: f,
  direction: m,
  baseSDP: n,
  codec: 'audio' === p ? r : o,
  payload: 'audio' === p ? i : s,
  bitrate: 'audio' === p ? a : l,
  ssrcs: t,
  extensions: _,
  rtxPayload: 'audio' === p ? null : c,
  sendingVideo: u
}));
  }), new RTCSessionDescription({
type: t,
sdp: N(E)
  });
}

function C(e, t, n, r, i) {
  let a = e.find(e => e.codec === r);
  if (null == a)
return null;
  let o = t.find(e => RegExp('^apt='.concat(a.payload)).test(e.config)),
s = null;
  if (null != o) {
let t = e.find(e => e.codec === m.ad.RTX && e.payload === o.payload);
null != t && (s = t.payload);
  }
  return {
type: n,
name: r,
priority: i + 1,
payloadType: a.payload,
rtxPayloadType: s
  };
}

function y(e) {
  let t = h.parse(e).media.reduce((e, t) => {
let n, {
  type: r,
  rtp: i,
  ssrcs: a,
  fmtp: o,
  direction: s,
  mid: l
} = t;
switch (e.outboundStreams.push({
    type: r,
    direction: s,
    mid: l
  }), r) {
  case 'audio':
    [m.ad.OPUS].forEach((t, n) => {
      let a = C(i, o, r, t, n);
      null != a && e.codecs.push(a);
    }), 'sendrecv' === s && null != (n = null == a ? void 0 : a.find(e => 'cname' === e.attribute)) && (e.audioSSRC = n.id);
    break;
  case 'video':
    [
      m.ad.H264,
      m.ad.VP8,
      m.ad.VP9
    ].forEach((t, n) => {
      let a = C(i, o, r, t, n);
      null != a && e.codecs.push(a);
    }), 'sendrecv' === s && (null != (n = null == a ? void 0 : a.find(e => 'cname' === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == a ? void 0 : a.findLast(e => 'cname' === e.attribute)) && (n.id === e.videoSSRC && T.warn('Unable to find a unique rtx SSRC!'), e.rtxSSRC = n.id));
}
return e;
  }, {
outboundStreams: [],
codecs: [],
audioSSRC: 0,
videoSSRC: 0,
rtxSSRC: 0
  });
  return t.codecs = _()(t.codecs, c()), t;
}

function D(e) {
  var t;
  let {
codecs: n
  } = y(e), r = n.find(e => e.name === m.ad.VP8), i = RegExp('^a=ice|a=extmap|a=fingerprint|opus|VP8|'.concat(null !== (t = null == r ? void 0 : r.rtxPayloadType) && void 0 !== t ? t : 0, ' rtx'), 'i');
  return {
sdp: [...new Set(e.split(/\r\n/).filter(e => i.test(e)))].join('\n'),
codecs: n
  };
}

function L(e) {
  if (!e.includes('a=fingerprint'))
return T.error('Remote SDP does not include fingerprint!'), !1;
  if (!e.includes('a=ice-ufrag'))
return T.error('Remote SDP does not include ICE user name!'), !1;
  if (!e.includes('a=ice-pwd'))
return T.error('Remote SDP does not include ICE password!'), !1;
  if (!e.includes('a=candidate'))
return T.error('Remote SDP does not include ICE candidate!'), !1;
  if (!e.includes('c='))
return T.error('Remote SDP does not include c-line!'), !1;
  let t = e.split('\n').filter(e => e.startsWith('c=')).join().trim();
  return !(t.split(' ').length < 3) || (T.error('Incorrect c-line: '.concat(t)), !1);
}

function b(e) {
  return [...new Set(e.split(/\r\n/).filter(e => e.startsWith('a=extmap:')))].map(e => {
let t = e.split(' ');
return {
  value: parseInt(t[0].split('/')[0].substr(9), 10),
  uri: t[1]
};
  });
}