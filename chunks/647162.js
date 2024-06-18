"use strict";
n.d(t, {
  KV: function() {
    return I
  },
  PY: function() {
    return E
  },
  Wo: function() {
    return T
  },
  iy: function() {
    return f
  },
  yp: function() {
    return h
  }
}), n(411104), n(177593), n(47120);
var i = n(763472),
  r = n(726542),
  s = n(594190),
  o = n(70956),
  a = n(781518),
  l = n(18323),
  u = n(768419),
  _ = n(616922),
  d = n(981631);
let c = 30 * o.Z.Millis.SECOND;

function E(e) {
  return null != e.getActiveSocketAndDevice() || l.Z.isProtocolRegistered()
}

function I() {
  let e = u.Z.getActiveSocketAndDevice();
  if (null != e) return Promise.resolve(e);
  if (!l.Z.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
  let t = u.Z.getPlayableComputerDevices();
  if (s.ZP.isObservedAppRunning(r.Z.get(d.ABu.SPOTIFY).name) && t.length > 0) {
    let {
      socket: e,
      device: n
    } = t[0];
    return (0, a.Tu)(e.accountId, n.id), Promise.resolve({
      socket: e,
      device: n
    })
  }
  return new Promise((e, n) => {
    let i = setTimeout(() => {
        u.Z.removeChangeListener(r), n(Error("timeout launching spotify"))
      }, c),
      r = () => {
        for (let {
            socket: n,
            device: s
          }
          of u.Z.getPlayableComputerDevices()) null == t.find(e => e.device.id === s.id) && (clearTimeout(i), u.Z.removeChangeListener(r), setImmediate(() => {
          (0, a.Tu)(n.accountId, s.id), e({
            socket: n,
            device: s
          })
        }))
      };
    u.Z.addChangeListener(r), window.open("".concat(_.M5, ":"))
  })
}

function T() {
  let e = u.Z.getActiveSocketAndDevice();
  if (null == e) return null;
  let {
    socket: t
  } = e;
  return t.isPremium
}

function h() {
  let e = u.Z.getActiveSocketAndDevice();
  if (null == e) return Promise.reject(Error("no active profile"));
  let {
    socket: t
  } = e;
  return t.isPremium ? Promise.resolve() : (0, a.Ai)(t.accountId, t.accessToken).then(() => {
    if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
  })
}

function S(e) {
  if ("string" == typeof e) return e;
  throw Error("value is not a string")
}
async function f(e, t) {
  var n;
  let r = await (0, i.sd)(e, t),
    s = (0, _.c8)(S(null !== (n = r.type) && void 0 !== n ? n : _.Hw.TRACK));
  if (null === s) throw Error("invalid type ".concat(r.type));
  return {
    context_uri: "string" == typeof r.context_uri ? r.context_uri : void 0,
    album_id: S(r.album_id),
    artist_ids: Array.isArray(r.artist_ids) ? r.artist_ids.map(S) : [],
    type: s,
    button_urls: Array.isArray(r.button_urls) ? r.button_urls.map(S) : []
  }
}