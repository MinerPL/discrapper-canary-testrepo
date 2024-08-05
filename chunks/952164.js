n.d(t, {
  KK: function() {
return l;
  },
  Z5: function() {
return c;
  },
  aG: function() {
return u;
  },
  d$: function() {
return d;
  }
}), n(411104);
var r = n(358085),
  i = n(18323),
  a = n(647162),
  s = n(616922);

function o(e, t, n) {
  let o;
  !(0, r.isDesktop)() && (o = window.open('', '_blank')), (0, a.iy)(e, t).then(e => n(e)).then(e => {
let {
  resourceType: t,
  resourceId: n
} = e, r = i.Z.isProtocolRegistered() ? s.C7.PLAYER_OPEN(t, n) : s.C7.WEB_OPEN(t, n);
null != o ? o.location.href = r : window.open(r);
  }).catch(() => {
null != o && o.close();
  });
}

function l() {
  window.open(s.C7.PREMIUM_SITE);
}

function u(e) {
  var t;
  let {
sync_id: n,
metadata: r
  } = e;
  if (null == n)
return;
  let a = (0, s.c8)(null !== (t = null == r ? void 0 : r.type) && void 0 !== t ? t : s.Hw.TRACK);
  if (null == a)
return;
  let o = i.Z.isProtocolRegistered() ? s.C7.PLAYER_OPEN(a, n) : s.C7.WEB_OPEN(a, n);
  window.open(o);
}

function c(e, t) {
  o(e, t, t => {
var n;
let {
  album_id: r
} = t;
return {
  resourceType: (0, s.c8)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === s.Hw.EPISODE ? s.Hw.SHOW : s.Hw.ALBUM,
  resourceId: r
};
  });
}

function d(e, t, n) {
  o(e, t, e => {
let {
  artist_ids: t
} = e;
if (null == t)
  throw Error('no artist ids in metadata');
let r = t[n];
if (null == r)
  throw Error('invalid artist index');
return {
  resourceType: s.Hw.ARTIST,
  resourceId: r
};
  });
}