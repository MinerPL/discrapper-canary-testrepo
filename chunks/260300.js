"use strict";
n.r(t);
var a = n("544891"),
  l = n("570140"),
  s = n("981631");
t.default = {
  show(e, t) {
    l.default.wait(() => l.default.dispatch({
      type: "TUTORIAL_INDICATOR_SHOW",
      tutorialId: e,
      renderData: t
    }))
  },
  hide(e) {
    l.default.wait(() => l.default.dispatch({
      type: "TUTORIAL_INDICATOR_HIDE",
      tutorialId: e
    }))
  },
  dismiss(e) {
    l.default.wait(() => l.default.dispatch({
      type: "TUTORIAL_INDICATOR_DISMISS",
      tutorialId: e
    })), a.HTTP.put({
      url: s.Endpoints.TUTORIAL_INDICATOR(e),
      oldFormErrors: !0
    })
  },
  suppressAll() {
    l.default.dispatch({
      type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
    }), a.HTTP.post({
      url: s.Endpoints.TUTORIAL_INDICATORS_SUPPRESS,
      oldFormErrors: !0
    })
  }
}