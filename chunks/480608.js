"use strict";
n.d(t, {
  E: function() {
    return d
  },
  H: function() {
    return E
  }
});
var i = n(31775),
  r = n.n(i),
  s = n(544891),
  o = n(570140),
  a = n(749210),
  l = n(243730),
  u = n(981631);
async function _(e) {
  try {
    o.Z.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = (await s.tn.get({
      url: u.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
    })).body;
    o.Z.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
      guildId: e,
      roleMemberCount: t
    })
  } catch (t) {
    o.Z.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
      guildId: e
    })
  }
}
async function d(e) {
  l.Z.shouldFetch(e) && await _(e)
}
let c = new(r())({
  maxAge: 1e4
});

function E(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = "".concat(e, "-").concat(t);
  if (!n || null == c.get(i)) {
    var r, o;
    return c.set(i, !0), r = e, o = t, s.tn.get({
      url: u.ANM.GUILD_ROLE_MEMBER_IDS(r, o)
    }).then(e => (a.Z.requestMembersById(r, e.body, !1), e.body.length))
  }
  return Promise.resolve(null)
}