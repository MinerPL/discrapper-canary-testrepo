"use strict";
l.r(t), l.d(t, {
  completeSignUp: function() {
    return c
  }
});
var s = l("917351"),
  a = l("151426"),
  n = l("913144"),
  i = l("10641"),
  r = l("599110"),
  o = l("49111");

function c(e) {
  let {
    targetKey: t,
    data: l,
    completed: c
  } = e;
  !(0, s.isEmpty)(l) && (!(0, i.isDismissibleContentDismissed)(a.DismissibleContent.GAME_ONE_USER_SIGNUPS) && r.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: l.selectedOptionKey,
    email: l.email,
    completed: c
  }), (0, i.markDismissibleContentAsDismissed)(a.DismissibleContent.GAME_ONE_USER_SIGNUPS), n.default.dispatch({
    type: "COMPLETE_USER_SIGN_UP",
    email: l.email,
    targetKey: t,
    selectedOptionKey: l.selectedOptionKey
  }))
}