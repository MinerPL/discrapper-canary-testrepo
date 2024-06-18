"use strict";
let i;
n.d(t, {
  c: function() {
    return r
  }
}), n(411104), n(177593), n(773603);
var r, s, o = n(990547),
  a = n(213919),
  l = n(544891),
  u = n(433517),
  _ = n(570140),
  d = n(881052),
  c = n(882037),
  E = n(710845),
  I = n(57132),
  T = n(703656),
  h = n(365007),
  S = n(314897),
  f = n(480294),
  N = n(573261),
  A = n(572691),
  m = n(981631),
  O = n(792101);
let R = new E.Z("AuthenticationActionCreators"),
  C = null;

function p(e) {
  let t = {
    type: "LOGOUT",
    ...e
  };
  _.Z.dispatch(t).catch(e => {
    var t;
    throw R.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
  })
}

function g() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Z5c.DEFAULT_LOGGED_OUT;
  p();
  let t = (0, I.PP)();
  null != e && (null != t ? (A.Z.popAll(), t.navigate("auth")) : (0, T.uL)(e))
}(s = r || (r = {})).MFA = "MFA", s.SUCCESS = "SUCCESS", t.Z = {
  startSession(e) {
    _.Z.wait(() => {
      _.Z.dispatch({
        type: "START_SESSION",
        token: e
      })
    })
  },
  setLoginCredentials(e, t) {
    _.Z.dispatch({
      type: "SET_LOGIN_CREDENTIALS",
      login: e,
      password: t
    })
  },
  login(e) {
    var t;
    let {
      login: n,
      password: i,
      loginCode: r,
      undelete: s,
      source: a,
      giftCodeSKUId: l,
      invite: u,
      isMultiAccount: c
    } = e;
    _.Z.dispatch({
      type: "LOGIN",
      login: n,
      loginMethod: null != r && "" !== r ? m.nnr.LOGIN_CODE : m.nnr.PASSWORD
    }), this.setLoginCredentials(n, null !== (t = null != i ? i : r) && void 0 !== t ? t : void 0), N.Z.post({
      url: m.ANM.LOGIN,
      body: {
        login: n,
        password: i,
        undelete: s,
        login_code: r,
        login_source: a,
        gift_code_sku_id: l
      },
      retries: 2,
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.USER_LOGIN,
        properties: {
          invite_code: null == u ? void 0 : u.code,
          is_multi_account: c
        }
      },
      ...c ? {
        headers: {
          authorization: ""
        }
      } : {}
    }).then(e => {
      let {
        body: {
          mfa: t,
          sms: n,
          webauthn: i,
          ticket: r,
          token: s,
          backup: o,
          user_id: a,
          required_actions: l,
          totp: u
        }
      } = e;
      _.Z.dispatch({
        type: "LOGIN_ATTEMPTED",
        user_id: a,
        required_actions: l
      }), t ? _.Z.dispatch({
        type: "LOGIN_MFA_STEP",
        ticket: r,
        sms: n,
        webauthn: i,
        totp: u,
        backup: o
      }) : c ? this.switchAccountToken(s) : _.Z.dispatch({
        type: "LOGIN_SUCCESS",
        token: s
      })
    }, e => {
      var t, r, s;
      if (null != e.body && (null === (t = e.body) || void 0 === t ? void 0 : t.suspended_user_token) != null) {
        _.Z.dispatch({
          type: "LOGIN_SUSPENDED_USER",
          suspendedUserToken: null === (s = e.body) || void 0 === s ? void 0 : s.suspended_user_token
        });
        return
      }
      let o = null === (r = e.body) || void 0 === r ? void 0 : r.code;
      o === m.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != i && "" !== i ? _.Z.dispatch({
        type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
        credentials: {
          login: n,
          password: i
        }
      }) : o === m.evJ.ACCOUNT_DISABLED && null != i && "" !== i ? _.Z.dispatch({
        type: "LOGIN_ACCOUNT_DISABLED",
        credentials: {
          login: n,
          password: i
        }
      }) : o === m.evJ.PHONE_VERIFICATION_REQUIRED ? _.Z.dispatch({
        type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
      }) : _.Z.dispatch({
        type: "LOGIN_FAILURE",
        error: new d.yZ(e)
      })
    })
  },
  loginMFAv2(e) {
    let {
      code: t,
      ticket: n,
      source: i,
      giftCodeSKUId: r,
      isMultiAccount: s,
      mfaType: a
    } = e;
    return N.Z.post({
      url: m.ANM.LOGIN_MFA(a),
      body: {
        code: t,
        ticket: n,
        login_source: i,
        gift_code_sku_id: r
      },
      retries: 2,
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.USER_LOGIN_MFA
      }
    }).then(e => {
      s ? this.switchAccountToken(e.body.token) : _.Z.dispatch({
        type: "LOGIN_SUCCESS",
        token: e.body.token
      })
    }).catch(e => {
      var t;
      if (null != e.body && null != e.body.suspended_user_token) {
        _.Z.dispatch({
          type: "LOGIN_SUSPENDED_USER",
          suspendedUserToken: e.body.suspended_user_token
        });
        return
      }
      if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === m.evJ.MFA_INVALID_CODE) throw Error(e.body.message);
      throw e
    })
  },
  authenticatePasswordless(e) {
    let {
      authenticateFunc: t,
      conditionalMediationAbortController: n,
      source: i,
      giftCodeSKUId: r
    } = e;
    return null == n || n.abort("Starting non-conditional mediation"), _.Z.dispatch({
      type: "PASSWORDLESS_START"
    }), (0, h.d$)().then(e => {
      let {
        challenge: n,
        ticket: s
      } = e;
      return t(n).then(e => this.loginWebAuthn({
        ticket: s,
        credential: e,
        source: i,
        giftCodeSKUId: r
      }))
    }).catch(e => {
      throw _.Z.dispatch({
        type: "PASSWORDLESS_FAILURE",
        error: e
      }), e
    })
  },
  loginWebAuthn(e) {
    let {
      ticket: t,
      credential: n,
      source: i,
      giftCodeSKUId: r
    } = e;
    return N.Z.post({
      url: m.ANM.WEBAUTHN_CONDITIONAL_UI_LOGIN,
      body: {
        credential: n,
        ticket: t,
        source: i,
        giftCodeSKUId: r
      },
      retries: 1,
      trackedActionData: {
        event: o.NetworkActionNames.USER_LOGIN_PASSWORDLESS
      }
    }).then(e => {
      let {
        body: {
          token: t,
          user_id: n,
          required_actions: i
        }
      } = e;
      _.Z.dispatch({
        type: "LOGIN_ATTEMPTED",
        user_id: n,
        required_actions: i
      }), _.Z.dispatch({
        type: "LOGIN_SUCCESS",
        token: t
      })
    }).catch(e => {
      if (null != e.body && null != e.body.suspended_user_token) {
        _.Z.dispatch({
          type: "LOGIN_SUSPENDED_USER",
          suspendedUserToken: e.body.suspended_user_token
        });
        return
      }
      throw _.Z.dispatch({
        type: "PASSWORDLESS_FAILURE",
        error: e
      }), e
    })
  },
  loginToken(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.Z.dispatch({
      type: "LOGIN"
    }), new Promise(n => {
      setImmediate(() => {
        _.Z.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), t && this.startSession(e), n()
      })
    })
  },
  loginReset(e) {
    _.Z.dispatch({
      type: "LOGIN_RESET",
      isMultiAccount: e
    })
  },
  loginStatusReset() {
    _.Z.dispatch({
      type: "LOGIN_STATUS_RESET"
    })
  },
  logoutInternal(e) {
    p(e)
  },
  logout() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Z5c.DEFAULT_LOGGED_OUT,
      n = arguments.length > 1 ? arguments[1] : void 0;
    return N.Z.post({
      url: m.ANM.LOGOUT,
      body: {
        provider: (0, O.xJ)(),
        token: u.K.get(m.JkL),
        voip_provider: O.mv,
        voip_token: u.K.get(m.scU)
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.USER_LOGOUT
      },
      ...null != n && {
        headers: {
          authorization: null !== (e = a.getToken(n)) && void 0 !== e ? e : ""
        }
      }
    }).finally(() => {
      (null == n || n === S.default.getId()) && g(t)
    })
  },
  switchAccountToken(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = S.default.getToken();
    R.log("Switching accounts", {
      wasLoggedIn: null != n,
      tokenHasChanged: e !== n
    }), p({
      isSwitchingAccount: !0
    });
    let i = this.loginToken(e, !0).then(() => {
      let t = S.default.getToken();
      R.log("Switched accounts finished", {
        isCorrectToken: e === t
      })
    });
    return t && (0, T.uL)(m.Z5c.ME), i
  },
  verifySSOToken() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.Z5c.DEFAULT_LOGGED_OUT;
    return l.tn.get({
      url: m.ANM.ME,
      oldFormErrors: !0
    }).catch(() => g(e))
  },
  verify(e) {
    null != e ? N.Z.post({
      url: m.ANM.VERIFY,
      body: {
        token: e
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.USER_VERIFY
      }
    }).then(e => {
      _.Z.dispatch({
        type: "LOGIN_SUCCESS",
        token: e.body.token
      }), _.Z.dispatch({
        type: "VERIFY_SUCCESS",
        verifyingUserId: e.body.user_id
      })
    }, e => _.Z.dispatch({
      type: "VERIFY_FAILURE",
      errors: e.body
    })) : _.Z.dispatch({
      type: "VERIFY_FAILURE",
      errors: {}
    })
  },
  async authorizePayment(e) {
    try {
      await N.Z.post({
        url: m.ANM.AUTHORIZE_PAYMENT,
        body: {
          token: e
        },
        oldFormErrors: !0,
        trackedActionData: {
          event: o.NetworkActionNames.AUTHORIZE_PAYMENT
        }
      }), _.Z.dispatch({
        type: "VERIFY_SUCCESS"
      })
    } catch (e) {
      _.Z.dispatch({
        type: "VERIFY_FAILURE",
        errors: {}
      })
    }
  },
  async authorizeIPAddress(e) {
    if (null == e) {
      _.Z.dispatch({
        type: "VERIFY_FAILURE",
        errors: {}
      });
      return
    }
    try {
      await N.Z.post({
        url: m.ANM.AUTHORIZE_IP,
        body: {
          token: e
        },
        oldFormErrors: !0,
        trackedActionData: {
          event: o.NetworkActionNames.AUTHORIZE_IP
        }
      }), _.Z.dispatch({
        type: "VERIFY_SUCCESS"
      })
    } catch (e) {
      _.Z.dispatch({
        type: "VERIFY_FAILURE",
        errors: {}
      })
    }
  },
  verifyResend: () => N.Z.post({
    url: m.ANM.VERIFY_RESEND,
    oldFormErrors: !0,
    trackedActionData: {
      event: o.NetworkActionNames.USER_VERIFY_RESEND
    }
  }),
  async resetPassword(e, t, n) {
    _.Z.dispatch({
      type: "LOGIN"
    });
    let i = {
        token: e,
        password: t,
        source: n
      },
      r = u.K.get(m.JkL),
      s = (0, O.xJ)();
    null != s && null != r && (i.push_provider = s, i.push_token = r);
    let a = u.K.get(m.scU);
    null != O.mv && null != a && (i.push_voip_provider = O.mv, i.push_voip_token = a);
    try {
      let {
        body: {
          mfa: e,
          sms: t,
          webauthn: n,
          ticket: r,
          token: s,
          backup: a,
          totp: l
        }
      } = await N.Z.post({
        url: m.ANM.RESET_PASSWORD,
        body: i,
        oldFormErrors: !0,
        trackedActionData: {
          event: o.NetworkActionNames.USER_RESET_PASSWORD
        }
      });
      return {
        result: e ? "MFA" : "SUCCESS",
        sms: t,
        webauthn: n,
        ticket: r,
        token: s,
        backup: a,
        totp: l
      }
    } catch (e) {
      throw _.Z.dispatch({
        type: "LOGIN_FAILURE",
        error: new d.yZ(e)
      }), e
    }
  },
  async resetPasswordMFAv2(e) {
    let {
      method: t,
      code: n,
      ticket: i,
      password: r,
      token: s,
      source: a
    } = e;
    return _.Z.dispatch({
      type: "LOGIN_MFA"
    }), (await N.Z.post({
      url: m.ANM.RESET_PASSWORD,
      body: {
        code: n,
        ticket: i,
        password: r,
        token: s,
        source: a,
        method: t
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.USER_RESET_PASSWORD,
        properties: {
          mfa: !0
        }
      }
    })).body.token
  },
  async forgotPassword(e) {
    this.setLoginCredentials(e), _.Z.dispatch({
      type: "FORGOT_PASSWORD_REQUEST"
    });
    try {
      await N.Z.post({
        url: m.ANM.FORGOT_PASSWORD,
        body: {
          login: e
        },
        oldFormErrors: !0,
        trackedActionData: {
          event: o.NetworkActionNames.FORGOT_PASSWORD
        }
      }), _.Z.dispatch({
        type: "FORGOT_PASSWORD_SENT"
      })
    } catch (t) {
      let e = new d.yZ(t);
      throw e.code === m.evJ.PHONE_VERIFICATION_REQUIRED ? _.Z.dispatch({
        type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
      }) : _.Z.dispatch({
        type: "LOGIN_FAILURE",
        error: e
      }), t
    }
  },
  setFingerprint(e) {
    _.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: e
    })
  },
  getExperiments(e) {
    _.Z.dispatch({
      type: "EXPERIMENTS_FETCH",
      withGuildExperiments: e
    })
  },
  getLocationMetadata: () => null != C ? C : (clearTimeout(i), i = setTimeout(() => {
    _.Z.dispatch({
      type: "SET_CONSENT_REQUIRED",
      consentRequired: !0
    })
  }, 5e3), C = l.tn.get({
    url: m.ANM.AUTH_LOCATION_METADATA,
    retries: 2,
    oldFormErrors: !0
  }).then(e => {
    var t, n, r, s, o;
    if (clearTimeout(i), null == f.Z.getAuthenticationConsentRequired()) {
      let t = null === (s = null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.consent_required) || void 0 === s || s;
      _.Z.dispatch({
        type: "SET_CONSENT_REQUIRED",
        consentRequired: t
      })
    }
    if (_.Z.dispatch({
        type: "SET_LOCATION_METADATA",
        countryCode: null !== (o = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== o ? o : void 0
      }), C = null, (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null) {
      let t = e.body.promotional_email_opt_in;
      (0, c.K4)({
        required: t.required,
        checked: t.pre_checked,
        preChecked: t.pre_checked
      })
    }
  }, () => {
    clearTimeout(i), _.Z.dispatch({
      type: "SET_CONSENT_REQUIRED",
      consentRequired: !0
    }), C = null
  })),
  closeSuspendedUser() {
    _.Z.dispatch({
      type: "CLOSE_SUSPENDED_USER"
    })
  }
}