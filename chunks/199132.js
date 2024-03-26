"use strict";
a.r(t), a.d(t, {
  completeSignUp: function() {
    return d
  }
});
var l = a("917351"),
  s = a("151426"),
  n = a("913144"),
  i = a("10641"),
  r = a("599110"),
  c = a("874595"),
  o = a("49111");

function d(e) {
  let {
    targetKey: t,
    data: a,
    completed: d
  } = e;
  !(0, l.isEmpty)(a) && (!(0, i.isDismissibleContentDismissed)(s.DismissibleContent.GAME_ONE_USER_SIGNUPS) && r.default.track(o.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: a.selectedOptionKey,
    email: a.email,
    guild_id: a.guildId,
    metadata: (0, c.extractMetadata)(a),
    completed: d
  }), (0, i.markDismissibleContentAsDismissed)(s.DismissibleContent.GAME_ONE_USER_SIGNUPS), n.default.dispatch({
    type: "COMPLETE_USER_SIGN_UP",
    email: a.email,
    targetKey: t,
    selectedOptionKey: a.selectedOptionKey
  }))
}