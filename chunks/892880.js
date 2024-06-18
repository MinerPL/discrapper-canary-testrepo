"use strict";
let i;
n(653041);
var r = n(392711),
  s = n.n(r),
  o = n(31775),
  a = n.n(o),
  l = n(749210),
  u = n(430824),
  _ = n(594174),
  d = n(70956),
  c = n(51144),
  E = n(689938);
let I = new(a())({
  maxAge: 1 * d.Z.Millis.MINUTE
});

function T(e, t, n) {
  null != i && clearTimeout(i), i = setTimeout(() => {
    let i = [],
      r = e => {
        i.push(e.id)
      };
    if (null == e) s().forEach(u.Z.getGuilds(), r);
    else if (Array.isArray(e)) e.forEach(e => {
      let t = u.Z.getGuild(e);
      null != t && r(t)
    });
    else {
      let t = u.Z.getGuild(e);
      null != t && r(t)
    }
    i.length > 0 && l.Z.requestMembers(i, t.toLocaleLowerCase(), n)
  }, 200)
}

function h(e, t) {
  let n = "".concat(null != e ? e : "", ":").concat(t),
    i = I.get(n);
  if (null != i) return i;
  I.set(n, !0)
}
t.Z = {
  getGuildNameSuggestion: function(e) {
    let t = _.default.getCurrentUser(),
      n = c.oY(t);
    return null == n || 0 === n.length ? "" : E.Z.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
      username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
    })
  },
  requestMembers(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      i = Array.isArray(e),
      r = [],
      s = !1;
    i ? e.forEach(e => {
      null == h(e, t) && r.push(e)
    }) : null == h(e, t) && (s = !0), r.length > 0 && i ? T(r, t, n) : s && T(e, t, n)
  }
}