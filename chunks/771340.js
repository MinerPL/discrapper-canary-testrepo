"use strict";
n.r(t);
var a = n("544891"),
  l = n("570140"),
  s = n("981631");
t.default = {
  fetchRegions(e) {
    a.HTTP.get({
      url: s.Endpoints.REGIONS(e),
      retries: 1,
      oldFormErrors: !0
    }).then(t => l.default.dispatch({
      type: "LOAD_REGIONS",
      regions: t.body,
      guildId: e
    }), () => l.default.dispatch({
      type: "LOAD_REGIONS",
      regions: [],
      guildId: e
    }))
  },
  changeCallRegion(e, t) {
    a.HTTP.patch({
      url: s.Endpoints.CALL(e),
      body: {
        region: t
      },
      oldFormErrors: !0
    })
  }
}