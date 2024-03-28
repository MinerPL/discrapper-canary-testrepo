"use strict";
s.r(t);
var a = s("544891"),
  l = s("981631");
t.default = {
  async updateEstimate(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
      s = arguments.length > 2 ? arguments[2] : void 0;
    return (await a.HTTP.get({
      url: l.Endpoints.GUILD_PRUNE(e),
      query: {
        days: t,
        include_roles: s
      },
      oldFormErrors: !0
    })).body.pruned
  },
  prune: (e, t, s) => a.HTTP.post({
    url: l.Endpoints.GUILD_PRUNE(e),
    body: {
      days: t,
      compute_prune_count: !1,
      include_roles: s
    },
    oldFormErrors: !0
  })
}