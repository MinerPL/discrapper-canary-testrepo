"use strict";
t.r(e), t.d(e, {
  completeSignUp: function() {
    return m
  },
  dismissSignUp: function() {
    return p
  }
});
var s = t("524437"),
  n = t("570140"),
  d = t("605236"),
  a = t("626135"),
  o = t("445507"),
  c = t("981631"),
  l = t("921944");

function m(i) {
  let {
    targetKey: e,
    data: t,
    completed: m
  } = i;
  null != t.selectedOptionKey && (!(0, d.isDismissibleContentDismissed)(s.DismissibleContent.GAME_ONE_USER_SIGNUPS) && a.default.track(c.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: e,
    selected_option_key: t.selectedOptionKey,
    email: t.email,
    guild_id: t.guildId,
    metadata: (0, o.extractMetadata)(t),
    completed: m
  }), (0, d.markDismissibleContentAsDismissed)(s.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: l.ContentDismissActionType.PRIMARY
  }), n.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: t.email,
    targetKey: e,
    selectedOptionKey: t.selectedOptionKey
  }))
}

function p(i) {
  (0, d.markDismissibleContentAsDismissed)(s.DismissibleContent.GAME_ONE_USER_SIGNUPS, {
    dismissAction: l.ContentDismissActionType.DISMISS
  }), n.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: i
  })
}