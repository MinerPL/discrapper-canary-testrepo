"use strict";
n.d(t, {
  KK: function() {
    return l
  },
  Z5: function() {
    return _
  },
  aG: function() {
    return u
  },
  d$: function() {
    return d
  }
}), n(411104);
var i = n(358085),
  r = n(18323),
  s = n(647162),
  o = n(616922);

function a(e, t, n) {
  let a;
  !(0, i.isDesktop)() && (a = window.open("", "_blank")), (0, s.iy)(e, t).then(e => n(e)).then(e => {
    let {
      resourceType: t,
      resourceId: n
    } = e, i = r.Z.isProtocolRegistered() ? o.C7.PLAYER_OPEN(t, n) : o.C7.WEB_OPEN(t, n);
    null != a ? a.location.href = i : window.open(i)
  }).catch(() => {
    null != a && a.close()
  })
}

function l() {
  window.open(o.C7.PREMIUM_SITE)
}

function u(e) {
  var t;
  let {
    sync_id: n,
    metadata: i
  } = e;
  if (null == n) return;
  let s = (0, o.c8)(null !== (t = null == i ? void 0 : i.type) && void 0 !== t ? t : o.Hw.TRACK);
  if (null == s) return;
  let a = r.Z.isProtocolRegistered() ? o.C7.PLAYER_OPEN(s, n) : o.C7.WEB_OPEN(s, n);
  window.open(a)
}

function _(e, t) {
  a(e, t, t => {
    var n;
    let {
      album_id: i
    } = t;
    return {
      resourceType: (0, o.c8)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === o.Hw.EPISODE ? o.Hw.SHOW : o.Hw.ALBUM,
      resourceId: i
    }
  })
}

function d(e, t, n) {
  a(e, t, e => {
    let {
      artist_ids: t
    } = e;
    if (null == t) throw Error("no artist ids in metadata");
    let i = t[n];
    if (null == i) throw Error("invalid artist index");
    return {
      resourceType: o.Hw.ARTIST,
      resourceId: i
    }
  })
}