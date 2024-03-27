"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("892313"),
  r = n("61928"),
  o = n("271938"),
  u = n("697218"),
  d = n("708169"),
  c = n("668596"),
  f = n("197881"),
  E = n("177632"),
  h = n("49111"),
  _ = n("482931"),
  C = n("843455");
let S = "AGREEMENTS_MODAL_KEY";
var I = {
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
      modalKey: S,
      onCloseRequest: C.NOOP_NULL
    }) : null == t && ((0, d.closeFullScreenLayer)("verification"), (0, s.hasModalOpen)(S) && (0, s.closeModal)(S)))
  },
  handleAuthenticationStoreChanged() {
    let e = o.default.getId();
    null == e && ((0, d.closeFullScreenLayer)("verification"), (0, s.closeModal)(S), (0, s.closeModal)(r.PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY), (0, s.closeModal)(r.EMAIL_VERIFICATION_MODAL_KEY), (0, s.closeModal)(_.PHONE_VERIFICATION_MODAL_KEY))
  },
  handleCurrentUserUpdate(e) {
    let {
      user: t
    } = e;
    t.verified && (0, s.closeModal)(r.EMAIL_VERIFICATION_MODAL_KEY)
  }
}