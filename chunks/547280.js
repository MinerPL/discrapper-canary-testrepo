"use strict";
n.r(t), n.d(t, {
  completeSignUp: function() {
    return u
  },
  dismissSignUp: function() {
    return d
  }
});
var a = n("570140"),
  s = n("605236"),
  l = n("626135"),
  i = n("445507"),
  r = n("981631"),
  o = n("921944");

function u(e) {
  let {
    targetKey: t,
    dismissibleContent: n,
    data: u,
    completed: d
  } = e;
  null != u.selectedOptionKey && (!(0, s.isDismissibleContentDismissed)(n) && l.default.track(r.AnalyticEvents.SIGNUP_COMPLETED, {
    target_key: t,
    selected_option_key: u.selectedOptionKey,
    email: u.email,
    guild_id: u.guildId,
    metadata: (0, i.extractMetadata)(u),
    completed: d
  }), (0, s.markDismissibleContentAsDismissed)(n, {
    dismissAction: o.ContentDismissActionType.PRIMARY,
    forceTrack: !0
  }), a.default.dispatch({
    type: "COMPLETE_SIGN_UP",
    email: u.email,
    targetKey: t,
    selectedOptionKey: u.selectedOptionKey
  }))
}

function d(e, t) {
  (0, s.markDismissibleContentAsDismissed)(t, {
    dismissAction: o.ContentDismissActionType.DISMISS,
    forceTrack: !0
  }), a.default.dispatch({
    type: "DISMISS_SIGN_UP",
    targetKey: e
  })
}