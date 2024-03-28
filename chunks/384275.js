"use strict";
s.r(t);
var a = s("544891"),
  n = s("570140"),
  l = s("981631");
t.default = {
  fetch() {
    a.HTTP.get({
      url: l.Endpoints.OAUTH2_TOKENS,
      oldFormErrors: !0
    }).then(e => n.default.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      apps: e.body
    }), () => n.default.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      apps: []
    }))
  },
  delete(e) {
    a.HTTP.del({
      url: l.Endpoints.OAUTH2_TOKEN(e),
      oldFormErrors: !0
    }).then(() => {
      this.fetch()
    })
  }
}