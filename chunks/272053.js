n(47120), n(411104), n(653041), n(998459);
var r, i = n(348327),
  a = n.n(i),
  o = n(442837),
  s = n(544891),
  l = n(570140),
  u = n(457330),
  c = n(726542),
  d = n(81063),
  _ = n(70956),
  E = n(553795),
  f = n(246946),
  h = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = 1 * _.Z.Millis.MINUTE,
  I = e => 'https://youtube.com/watch?v='.concat(e),
  T = 5 * _.Z.Millis.MINUTE,
  g = /live_user_(.*)-\{width\}/,
  S = null,
  A = 0,
  N = null,
  v = new Set(),
  O = {};

function R(e, t, n) {
  return s.tn.get({
url: ''.concat('https://api.twitch.tv/helix').concat(e),
query: t,
headers: {
  'Client-ID': '33kozedd0zs6fbauka98psnc7zwom2s',
  Authorization: 'Bearer '.concat(n)
}
  });
}
async function C(e, t) {
  let n = O[e];
  if (null != n)
return n;
  let {
body: {
  data: r
}
  } = await R('/games', {
id: e
  }, t), i = r[0].name;
  return O[e] = i, i;
}
let y = new class e {
  start() {
!this._started && (this._started = !0, E.Z.isFetching() ? u.Z.fetch() : this._check());
  }
  stop() {
this._started = !1, N = null, A = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.Z.dispatch({
  type: 'STREAMING_UPDATE',
  stream: null
});
  }
  async _checkTwitch(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
if (e.revoked || null == (t = null != t ? t : e.accessToken))
  return null;
try {
  var n, r, i, a, o;
  let {
    body: {
      data: s
    }
  } = await R('/streams', {
    user_id: e.id,
    first: 1
  }, t), l = s[0];
  if (null == l || 'live' !== l.type)
    throw Error('no stream');
  let {
    thumbnail_url: u,
    game_id: _,
    title: E
  } = l, f = {
    large_image: null != u && null !== (r = (0, d.getAssetFromImageURL)(h.ABu.TWITCH, u)) && void 0 !== r ? r : void 0
  }, p = await C(_, t), m = c.Z.get(h.ABu.TWITCH);
  let I = null !== (a = u, i = null === (o = g.exec(a)) || void 0 === o ? void 0 : o[1]) && void 0 !== i ? i : e.name;
  return {
    url: null === (n = m.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(m, {
      id: e.id,
      name: I
    }),
    name: m.name,
    assets: f,
    details: E,
    state: p
  };
} catch (n) {
  if (401 === n.status && null == t)
    return u.Z.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
  return null;
}
  }
  async _checkYouTube(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
if (N = null, e.revoked || v.has(e.id))
  return null;
try {
  var n;
  let {
    body: {
      items: r
    }
  } = await s.tn.get({
    url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
    query: {
      part: 'id,snippet',
      broadcastStatus: 'active',
      broadcastType: 'all'
    },
    headers: {
      Authorization: 'Bearer '.concat(null != t ? t : e.accessToken)
    },
    oldFormErrors: !0
  });
  if (r.length < 1)
    throw Error('no stream');
  let {
    id: i,
    snippet: {
      title: a,
      thumbnails: o
    }
  } = r[0], l = {
    large_image: null !== (n = (0, d.getAssetFromImageURL)(h.ABu.YOUTUBE, o.high.url)) && void 0 !== n ? n : void 0
  };
  return N = {
    url: I(i),
    name: c.Z.get(h.ABu.YOUTUBE).name,
    details: a,
    assets: l
  };
} catch (n) {
  if (401 === n.status && null == t)
    return u.Z.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
  return 403 === n.status && v.add(e.id), null;
}
  }
  _check() {
if (!this._started)
  return;
let e = E.Z.getAccounts();
if (null == e)
  return;
null != this._nextCheck && clearTimeout(this._nextCheck);
let t = [h.ABu.TWITCH],
  n = Date.now();
A <= n && (t.push(h.ABu.YOUTUBE), A = n + T), Promise.allSettled(e.filter(e => t.includes(e.type)).map(e => e.type === h.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))).then(e => {
  if (this._started) {
    var t;
    let n = null === (t = e.find(e => 'fulfilled' === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
    null == n && null != N && (n = N), l.Z.dispatch({
      type: 'STREAMING_UPDATE',
      stream: n
    });
  }
  this._scheduleCheck();
});
  }
  _scheduleCheck() {
this._started && (this._nextCheck = setTimeout(() => this._check(), m));
  }
  constructor() {
p(this, '_nextCheck', void 0), p(this, '_started', void 0), this._started = !1;
  }
}();

function D() {
  f.Z.enabled ? y.start() : y.stop();
}
class L extends(r = o.ZP.Store) {
  initialize() {
D(), this.waitFor(E.Z), this.syncWith([f.Z], D);
  }
  getStream() {
return S;
  }
}
p(L, 'displayName', 'ExternalStreamingStore'), t.Z = new L(l.Z, {
  STREAMING_UPDATE: function(e) {
var t;
if (a()(e.stream, S))
  return !1;
S = null !== (t = e.stream) && void 0 !== t ? t : null;
  },
  USER_CONNECTIONS_UPDATE: () => y._check()
});