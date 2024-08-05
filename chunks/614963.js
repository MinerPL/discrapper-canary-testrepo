n.d(t, {
  Z: function() {
return p;
  }
});
var i, a, s = n(251625),
  l = n(823379),
  r = n(981631),
  o = n(689938);

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
  return e <= 5 ? 3 : e <= 15 ? 10 : 15;
}

function u(e, t) {
  let n = {
  packetsSentOrReceived: 0,
  packetsLost: 0,
  packetLossRate: 0,
  frameRate: 0,
  resolution: 0,
  numDatapoints: 0
},
i = e.slice(-1 * t).filter(l.lm);
  if (0 === i.length)
return {
  type: 'streamer',
  ...n
};
  i.forEach((e, t, i) => {
n.packetsSentOrReceived += t > 0 ? i[t].packetsSentOrReceived - i[t - 1].packetsSentOrReceived : 0, n.packetsLost += t > 0 ? i[t].packetsLost - i[t - 1].packetsLost : 0, n.frameRate += e.frameRate, n.resolution += e.resolution;
  });
  let a = i[0].type,
s = i.length;
  return {
type: a,
packetsSentOrReceived: n.packetsSentOrReceived,
packetsLost: n.packetsLost,
packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
frameRate: n.frameRate / s,
resolution: n.resolution / s,
numDatapoints: s
  };
}
(i = a || (a = {})).PACKET_LOSS = 'Packet Loss', i.FRAME_RATE_INPUT = 'Frame Rate Encode', i.FRAME_RATE_NETWORK = 'Frame Rate Decode', i.SOUNDSHARE_FAILED = 'Soundshare Failed', i.BAD_CONNECTION = 'Bad Connection';
let d = (0, s.oH)((e, t) => ({
  message: e,
  errorType: t
}));

function h(e, t) {
  if ('streamer' === e.type) {
if (100 * e.packetLossRate > 10)
  return d(o.Z.Messages.STREAM_BAD_STREAMER, 'Packet Loss');
if (e.frameRate <= c(t))
  return d(o.Z.Messages.STREAM_BAD_STREAMER, 'Frame Rate Encode');
  } else {
if (100 * e.packetLossRate > 10)
  return d(o.Z.Messages.STREAM_BAD_SPECTATOR, 'Packet Loss');
if (e.frameRate <= c(t))
  return d(o.Z.Messages.STREAM_BAD_SPECTATOR, 'Frame Rate Decode');
  }
  return null;
}

function p(e, t, n, i) {
  if (n)
return d(o.Z.Messages.STREAM_SOUNDSHARE_FAILED, 'Soundshare Failed');
  if (null != t) {
let e = u(t, 5),
  n = u(t, 30);
if (n.numDatapoints >= 5) {
  var a;
  return null !== (a = h(e, null == i ? void 0 : i.maxFrameRate)) && void 0 !== a ? a : h(n, null == i ? void 0 : i.maxFrameRate);
}
  }
  return e === r.IE4.BAD ? d(o.Z.Messages.STREAM_NETWORK_QUALITY_ERROR, 'Bad Connection') : null;
}