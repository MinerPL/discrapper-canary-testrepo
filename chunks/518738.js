"use strict";
n.d(t, {
  Kz: function() {
    return a
  },
  oC: function() {
    return u
  },
  p9: function() {
    return l
  }
});
var i = n(470079),
  r = n(442837),
  s = n(430824),
  o = n(829883);

function a(e, t) {
  var n;
  let {
    customIconSrc: i,
    unicodeEmoji: r
  } = null !== (n = (0, o.zy)(e, t)) && void 0 !== n ? n : {};
  if (null != i || null != r) return {
    src: i,
    name: e.name,
    roleId: e.id,
    size: t,
    unicodeEmoji: r
  }
}

function l(e) {
  let {
    guildId: t,
    roleId: n,
    size: l = 20
  } = e, {
    guild: u,
    roles: _
  } = (0, r.cj)([s.Z], () => ({
    guild: s.Z.getGuild(t),
    roles: s.Z.getRoles(t)
  }), [t]);
  return i.useMemo(() => {
    if (null == u || null == n) return;
    let e = _[n];
    if (!!(0, o._b)(u, e)) return a(e, l)
  }, [u, _, n, l])
}

function u(e, t) {
  let n = (0, r.e7)([s.Z], () => s.Z.getGuild(e));
  if (null != n && !!(0, o._b)(n, t)) return a(t)
}