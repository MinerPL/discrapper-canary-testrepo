"use strict";
a.r(t), a.d(t, {
  completeSignUp: function() {
    return c
  }
});
var s = a("917351"),
  n = a("151426"),
  l = a("913144"),
  i = a("10641"),
  r = a("599110"),
  o = a("49111");

function c(e) {
  let {
    targetKey: t,
    data: a,
    completed: c
  } = e;
  !(0, s.isEmpty)(a) && (!(0, i.isDismissibleContentDismissed)(n.DismissibleContent.GAME_ONE_USER_SIGNUPS) && r.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: a.selectedOptionKey,
    email: a.email,
    completed: c
  }), (0, i.markDismissibleContentAsDismissed)(n.DismissibleContent.GAME_ONE_USER_SIGNUPS), l.default.dispatch({
    type: "COMPLETE_USER_SIGN_UP",
    email: a.email,
    targetKey: t,
    selectedOptionKey: a.selectedOptionKey
  }))
}