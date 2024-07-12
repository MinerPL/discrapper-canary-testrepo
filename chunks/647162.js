n.d(t, {
  KV: function() {
return f;
  },
  PY: function() {
return E;
  },
  Wo: function() {
return h;
  },
  iy: function() {
return I;
  },
  yp: function() {
return p;
  }
}), n(411104), n(177593), n(47120);
var r = n(763472),
  i = n(726542),
  a = n(594190),
  o = n(70956),
  s = n(781518),
  l = n(18323),
  u = n(768419),
  c = n(616922),
  d = n(981631);
let _ = 30 * o.Z.Millis.SECOND;

function E(e) {
  return null != e.getActiveSocketAndDevice() || l.Z.isProtocolRegistered();
}

function f() {
  let e = u.Z.getActiveSocketAndDevice();
  if (null != e)
return Promise.resolve(e);
  if (!l.Z.isProtocolRegistered())
return Promise.reject(Error('protocol is not registered'));
  let t = u.Z.getPlayableComputerDevices();
  if (a.ZP.isObservedAppRunning(i.Z.get(d.ABu.SPOTIFY).name) && t.length > 0) {
let {
  socket: e,
  device: n
} = t[0];
return (0, s.Tu)(e.accountId, n.id), Promise.resolve({
  socket: e,
  device: n
});
  }
  return new Promise((e, n) => {
let r = setTimeout(() => {
    u.Z.removeChangeListener(i), n(Error('timeout launching spotify'));
  }, _),
  i = () => {
    for (let {
        socket: n,
        device: a
      }
      of u.Z.getPlayableComputerDevices())
      null == t.find(e => e.device.id === a.id) && (clearTimeout(r), u.Z.removeChangeListener(i), setImmediate(() => {
        (0, s.Tu)(n.accountId, a.id), e({
          socket: n,
          device: a
        });
      }));
  };
u.Z.addChangeListener(i), window.open(''.concat(c.M5, ':'));
  });
}

function h() {
  let e = u.Z.getActiveSocketAndDevice();
  if (null == e)
return null;
  let {
socket: t
  } = e;
  return t.isPremium;
}

function p() {
  let e = u.Z.getActiveSocketAndDevice();
  if (null == e)
return Promise.reject(Error('no active profile'));
  let {
socket: t
  } = e;
  return t.isPremium ? Promise.resolve() : (0, s.Ai)(t.accountId, t.accessToken).then(() => {
if (!t.isPremium)
  return Promise.reject(Error('spotify account is not premium'));
  });
}

function m(e) {
  if ('string' == typeof e)
return e;
  throw Error('value is not a string');
}
async function I(e, t) {
  var n;
  let i = await (0, r.sd)(e, t),
a = (0, c.c8)(m(null !== (n = i.type) && void 0 !== n ? n : c.Hw.TRACK));
  if (null === a)
throw Error('invalid type '.concat(i.type));
  return {
context_uri: 'string' == typeof i.context_uri ? i.context_uri : void 0,
album_id: m(i.album_id),
artist_ids: Array.isArray(i.artist_ids) ? i.artist_ids.map(m) : [],
type: a,
button_urls: Array.isArray(i.button_urls) ? i.button_urls.map(m) : []
  };
}