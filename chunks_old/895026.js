"use strict";
n.r(t), n.d(t, {
  fetchMemberCounts: function() {
    return E
  },
  requestMembersForRole: function() {
    return _
  }
});
var l = n("693566"),
  u = n.n(l),
  i = n("872717"),
  r = n("913144"),
  d = n("851387"),
  a = n("36402"),
  s = n("49111");
async function o(e) {
  try {
    r.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = await i.HTTP.get({
        url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
      }),
      n = t.body;
    r.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
      guildId: e,
      roleMemberCount: n
    })
  } catch (t) {
    r.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
      guildId: e
    })
  }
}
async function E(e) {
  a.default.shouldFetch(e) && await o(e)
}
let c = new u({
  maxAge: 1e4
});

function _(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = "".concat(e, "-").concat(t);
  if (!n || null == c.get(l)) {
    var u, r;
    return c.set(l, !0), u = e, r = t, i.HTTP.get({
      url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(u, r)
    }).then(e => (d.default.requestMembersById(u, e.body, !1), e.body.length))
  }
  return Promise.resolve(null)
}