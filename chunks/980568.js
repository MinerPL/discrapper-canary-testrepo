"use strict";
i.r(t);
var n = i("570140"),
  a = i("626135"),
  s = i("981631");
t.default = {
  dismissForApplicationId(e) {
    n.default.dispatch({
      type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
      key: e,
      value: !0
    }), a.default.track(s.AnalyticEvents.CLOSE_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e,
      acknowledged: !0
    })
  }
}