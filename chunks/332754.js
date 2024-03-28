"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("1964"),
  r = n("852758"),
  o = n("314897"),
  u = n("594174"),
  d = n("725568"),
  c = n("78415"),
  f = n("374023"),
  E = n("886162"),
  h = n("981631"),
  _ = n("815660"),
  C = n("231338");
let m = "AGREEMENTS_MODAL_KEY";
t.default = {
  init() {
    l.default.subscribe("CONNECTION_OPEN", this.handleRequiredAction), l.default.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), l.default.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), o.default.addChangeListener(this.handleAuthenticationStoreChanged)
  },
  handleRequiredAction(e) {
    let t = e.requiredAction;
    !f.ProcessArgs.isDisallowPopupsSet() && null != u.default.getCurrentUser() && (t === h.UserRequiredActions.REQUIRE_CAPTCHA || t === h.UserRequiredActions.REQUIRE_VERIFIED_EMAIL || t === h.UserRequiredActions.REQUIRE_VERIFIED_PHONE || t === h.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === h.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === h.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || i.default.isEmailReverification(t) ? (0, d.openFullScreenLayer)(() => (0, a.jsx)(r.default, {}), {
      layerKey: "verification",
      Layer: c.default
    }) : t === h.UserRequiredActions.AGREEMENTS ? (0, s.openModal)(e => (0, a.jsx)(E.default, {
      ...e
    }), {
      modalKey: m,
      onCloseRequest: C.NOOP_NULL
    }) : null == t && ((0, d.closeFullScreenLayer)("verification"), (0, s.hasModalOpen)(m) && (0, s.closeModal)(m)))
  },
  handleAuthenticationStoreChanged() {
    null == o.default.getId() && ((0, d.closeFullScreenLayer)("verification"), (0, s.closeModal)(m), (0, s.closeModal)(r.PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY), (0, s.closeModal)(r.EMAIL_VERIFICATION_MODAL_KEY), (0, s.closeModal)(_.PHONE_VERIFICATION_MODAL_KEY))
  },
  handleCurrentUserUpdate(e) {
    let {
      user: t
    } = e;
    t.verified && (0, s.closeModal)(r.EMAIL_VERIFICATION_MODAL_KEY)
  }
}