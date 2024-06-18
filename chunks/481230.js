"use strict";
n.d(t, {
  R$: function() {
    return g
  },
  ZP: function() {
    return m
  }
});
var s = n(913527),
  r = n.n(s),
  i = n(990547),
  a = n(570140),
  l = n(479531),
  o = n(771308),
  u = n(314897),
  c = n(626135),
  d = n(573261),
  h = n(959776),
  E = n(981631),
  _ = n(723359);

function m(e) {
  let {
    invite: t = null,
    giftCodeSKUId: n = null,
    ...s
  } = e;
  return g({
    ...s,
    invite: t,
    giftCodeSKUId: n
  })
}

function g(e) {
  let {
    email: t,
    phoneToken: n,
    username: s,
    globalName: m,
    consent: g,
    password: f,
    guildTemplateCode: p,
    birthday: I,
    invite: N = null,
    giftCodeSKUId: A = null,
    multiStep: T = !1,
    promoEmailConsent: R = null,
    usedUsernameSuggestion: S = null
  } = e;
  return a.Z.dispatch({
    type: "REGISTER",
    birthday: T ? I : null
  }), null != I && ((0, h.Z)(I, E.jXE.REGISTER), c.default.track(E.rMx.AGE_GATE_ACTION, {
    source: _.L0.REGISTER,
    action: _.Al.AGE_GATE_SUBMITTED
  }), ! function(e) {
    let t;
    let n = r()().diff(e, "years");
    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", c.default.track(E.rMx.USER_AGE_SUBMITTED, {
      age_bucket: t
    }))
  }(I)), d.Z.post({
    url: E.ANM.REGISTER,
    body: {
      fingerprint: u.default.getFingerprint(),
      email: t,
      username: s,
      global_name: m,
      password: f,
      invite: N,
      consent: g,
      phone_token: n,
      date_of_birth: null == I ? void 0 : I.format("YYYY-MM-DD"),
      gift_code_sku_id: A,
      guild_template_code: p,
      promotional_email_opt_in: null == R ? void 0 : R.checked
    },
    trackedActionData: {
      event: i.NetworkActionNames.USER_REGISTER,
      properties: {
        invite_code: N,
        used_username_suggestion: S,
        promotional_email_opt_in: null == R ? void 0 : R.checked,
        promotional_email_pre_checked: null == R ? void 0 : R.preChecked,
        was_unique_username: !0
      }
    }
  }).then(e => {
    a.Z.dispatch({
      type: "REGISTER_SUCCESS",
      token: e.body.token
    }), c.default.track(E.rMx.AGE_GATE_ACTION, {
      source: _.L0.REGISTER,
      action: _.Al.AGE_GATE_SUCCESS
    })
  }, e => {
    let t = new l.Z(e);
    throw a.Z.dispatch({
      type: "REGISTER_FAILURE",
      error: t
    }), null != t.getFieldErrors("date_of_birth") && o.wE(_.L0.REGISTER), c.default.track(E.rMx.REGISTER_SUBMIT_ERRORED, {
      is_unique_username_registration: !0,
      email_error_reason: t.getFirstFieldErrorMessage("email"),
      phone_error_reason: t.getFirstFieldErrorMessage("phone"),
      password_error_reason: t.getFirstFieldErrorMessage("password"),
      username_error_reason: t.getFirstFieldErrorMessage("username"),
      global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
      date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
    }), e
  })
}