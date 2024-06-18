"use strict";
n.d(t, {
  Z: function() {
    return eu
  }
}), n(757143), n(47120), n(627341);
var s, r = n(735250),
  i = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(593473),
  u = n(278074),
  c = n(990547),
  d = n(442837),
  h = n(846519),
  E = n(481060),
  _ = n(893776),
  m = n(899370),
  g = n(224841),
  f = n(13430),
  p = n(213609),
  I = n(882037),
  N = n(201207),
  A = n(481230),
  T = n(853268),
  R = n(639946),
  S = n(616952),
  C = n(792766),
  x = n(692483),
  O = n(100159),
  Z = n(473855),
  L = n(726745),
  M = n(929809),
  v = n(541692),
  D = n(986197),
  b = n(135200),
  y = n(219496),
  j = n(794099),
  P = n(807369),
  U = n(180529),
  w = n(108427),
  G = n(314897),
  F = n(480294),
  k = n(896797),
  B = n(819570),
  H = n(292937),
  V = n(626135),
  z = n(585483),
  K = n(70956),
  Y = n(624138),
  W = n(481153),
  q = n(588705),
  Q = n(163671),
  J = n(981631),
  X = n(355142),
  $ = n(188785),
  ee = n(701476),
  et = n(801461),
  en = n(689938),
  es = n(355770),
  er = n(611273);

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
d.ZP.initialize();
let ea = /\.$/,
  el = e => Array.isArray(e) ? e.map(e => e.replace(ea, "")).join(". ").trim() : e;
class eo extends(s = i.PureComponent) {
  get registrationSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n
    } = this.props;
    if (null != e) return "gift";
    if (null != t) return "guild_template";
    if (null != n) {
      if (null != n.guild) return "guild_invite";
      if (null != n.channel) return "dm_invite";
      else if (null != n.inviter) return "friend_invite"
    }
    return null
  }
  hasConsent() {
    let {
      consentRequired: e
    } = this.props, {
      consent: t
    } = this.state;
    return null != e && t
  }
  componentDidMount() {
    this.redirectIfAuthenticated(), N.Z.trackExposure({
      location: "0ba758_1"
    });
    let {
      giftCodeSKU: e,
      invite: t
    } = this.props;
    V.default.track(J.rMx.REGISTER_VIEWED, {
      location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
      registration_source: this.registrationSource,
      ...null != e ? (0, O.Z)(e, !1, !1) : {}
    }, {
      flush: !0
    }), null == this.props.consentRequired && _.Z.getLocationMetadata(), (0, w.e)("register")
  }
  componentWillUnmount() {
    this._retryTimer.stop()
  }
  static getDerivedStateFromProps(e, t) {
    let {
      consentRequired: n
    } = e, {
      consentRequiredProp: s
    } = t;
    return null == s && null != n ? {
      consent: !n,
      consentRequiredProp: n
    } : {
      consentRequiredProp: n
    }
  }
  componentDidUpdate(e, t) {
    let {
      apiErrors: n,
      authenticated: s,
      isUnderage: r,
      invite: i,
      onChangeStep: a
    } = this.props, {
      parsedDateOfBirth: l
    } = this.state;
    (e.apiErrors !== n || t.parsedDateOfBirth !== l) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
      isRateLimited: !0
    }), this._retryTimer.start(this.props.apiErrors.retry_after * K.Z.Millis.SECOND, () => {
      this.setState({
        isRateLimited: !1
      })
    }))), s && !e.authenticated && ((0, M.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
    let o = X.E.FULL;
    r || this.hasError("date_of_birth") ? o = X.E.AGE_GATE : null != i && (null != i.guild || null != i.channel) && (o = X.E.INVITE), a(o)
  }
  redirectIfAuthenticated() {
    let {
      authenticated: e,
      transitionTo: t,
      redirectTo: n
    } = this.props;
    if (!!e) t(null != n ? n : k.Z.defaultRoute)
  }
  async handleRegister() {
    let {
      email: e,
      username: t,
      globalName: n,
      password: s,
      consent: r,
      parsedDateOfBirth: i
    } = this.state, {
      invite: a,
      guildTemplate: l,
      giftCode: o,
      onRegister: u,
      usernameSuggestion: c,
      isMobileWebInviteRegistration: d
    } = this.props, h = null != a ? a.code : null, E = null != o ? o.skuId : null, _ = I.MD.getState(), m = (0, Y.Ew)(c) ? null : t === c, g = $.a ? await (0, x.K)(t) : t, f = $.a ? await (0, x.K)(n) : n;
    z.S.dispatch(J.CkL.WAVE_EMPHASIZE);
    try {
      d || null == a ? await (0, A.R$)({
        email: e,
        username: g,
        globalName: f,
        consent: r,
        password: s,
        invite: h,
        usedUsernameSuggestion: m,
        guildTemplateCode: null == l ? void 0 : l.code,
        giftCodeSKUId: E,
        birthday: i,
        promoEmailConsent: _.required ? _ : null
      }) : await (0, A.ZP)({
        consent: r,
        invite: h,
        giftCodeSKUId: E,
        usedUsernameSuggestion: m,
        globalName: f
      }), null == u || u()
    } catch (e) {}
  }
  hasError(e) {
    return null != this.props.apiErrors[e]
  }
  renderConsentComponents() {
    let {
      consent: e
    } = this.state, {
      consentRequired: t,
      registrationCopyExperimentConfig: {
        enableNewCopy: n,
        hasProminentCopy: s
      }
    } = this.props, i = null, a = null;
    return t ? a = (0, r.jsx)(T.Z, {
      value: e,
      onChange: e => this.setState({
        consent: e
      }),
      subText: en.Z.Messages.TERMS_PRIVACY_OPT_IN.format({
        termsURL: J.EYA.TERMS,
        privacyURL: J.EYA.PRIVACY
      })
    }) : i = (0, r.jsx)(B.i_, {
      isProminent: !!s,
      className: er.marginTop8,
      children: n ? en.Z.Messages.TERMS_PRIVACY_ON_REGISTER.format({
        buttonText: en.Z.Messages.CONTINUE,
        termsURL: J.EYA.TERMS,
        privacyURL: J.EYA.PRIVACY
      }) : en.Z.Messages.TERMS_PRIVACY.format({
        termsURL: J.EYA.TERMS,
        privacyURL: J.EYA.PRIVACY
      })
    }), {
      subText: i,
      consentText: a
    }
  }
  renderInviteResolving() {
    let {
      authBoxClassName: e
    } = this.props, t = e => {
      this.setState({
        globalName: e
      })
    }, n = this.state.globalName;
    return (0, r.jsxs)(B.ZP, {
      className: e,
      children: [(0, r.jsx)(q.R, {}), (0, r.jsxs)(B.gO, {
        className: er.marginTop40,
        children: [(0, r.jsx)(E.FormTitle, {
          children: en.Z.Messages.FORM_LABEL_USERNAME
        }), (0, r.jsx)(E.Tooltip, {
          text: en.Z.Messages.AUTH_USERNAME_TOOLTIP,
          position: "right",
          color: E.Tooltip.Colors.BRAND,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: i
            } = e;
            return (0, r.jsx)(B.II, {
              autoFocus: !0,
              className: er.marginBottom8,
              name: "username",
              value: n,
              placeholder: en.Z.Messages.FORM_PLACEHOLDER_USERNAME,
              onChange: t,
              onMouseEnter: s,
              onMouseLeave: i
            })
          }
        }), (0, r.jsx)(B.zx, {
          className: er.marginTop20,
          disabled: !0,
          children: en.Z.Messages.CONTINUE
        }), (0, r.jsx)(B.i_, {
          disabled: !0,
          className: er.marginTop8,
          children: en.Z.Messages.TERMS_PRIVACY.format({
            termsURL: J.EYA.TERMS,
            privacyURL: J.EYA.PRIVACY
          })
        }), $.a ? null : (0, r.jsx)(B.zx, {
          look: B.zx.Looks.LINK,
          color: B.zx.Colors.LINK,
          disabled: !0,
          className: er.marginTop20,
          children: en.Z.Messages.ALREADY_HAVE_ACCOUNT
        })]
      })]
    })
  }
  renderInviteHeader() {
    let {
      invite: e
    } = this.props;
    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, r.jsx)(C.Z, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, r.jsx)(R.r, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, r.jsx)(q.Z, {
      invite: e
    })
  }
  renderInviteButton() {
    let {
      invite: e,
      registering: t,
      consentRequired: n
    } = this.props, {
      consent: s
    } = this.state, i = B.zx.Colors.BRAND, a = en.Z.Messages.CONTINUE;
    return (null == e ? void 0 : e.stage_instance) != null && (i = B.zx.Colors.GREEN, a = en.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, r.jsx)(E.Tooltip, {
      text: !s && n ? en.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, r.jsx)("div", {
        className: er.marginTop20,
        ...e,
        children: (0, r.jsx)(B.zx, {
          type: "submit",
          submitting: t,
          disabled: !this.hasConsent(),
          color: i,
          children: a
        })
      })
    })
  }
  renderInvite() {
    let {
      invite: e,
      authBoxClassName: t,
      apiErrors: {
        username: n,
        global_name: s
      }
    } = this.props, {
      subText: i,
      consentText: a
    } = this.renderConsentComponents(), l = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
      this.setState({
        globalName: e
      })
    }, u = this.state.globalName;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(B.ZP, {
        onSubmit: this.handleSubmit,
        tag: "form",
        className: t,
        children: [this.renderInviteHeader(), l ? (0, r.jsx)("div", {
          className: es.divider
        }) : null, (0, r.jsxs)(B.gO, {
          className: l ? void 0 : er.marginTop40,
          children: [(0, r.jsx)(E.FormTitle, {
            error: el(null != s ? s : n),
            children: en.Z.Messages.DISPLAY_NAME
          }), (0, r.jsx)(E.Tooltip, {
            text: en.Z.Messages.AUTH_USERNAME_TOOLTIP,
            position: "right",
            color: E.Tooltip.Colors.BRAND,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: i
              } = e;
              return (0, r.jsx)(B.II, {
                autoFocus: !0,
                className: er.marginBottom8,
                name: "global_name",
                value: u,
                placeholder: en.Z.Messages.FORM_PLACEHOLDER_USERNAME,
                onChange: o,
                error: null != n || null != s ? "" : null,
                onMouseEnter: t,
                onMouseLeave: i
              })
            }
          }), (0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: en.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
          }), this.renderInviteButton(), i, a, $.a ? null : (0, r.jsx)(B.zx, {
            look: B.zx.Looks.LINK,
            color: B.zx.Colors.LINK,
            onClick: this.handleGotoLogin,
            className: er.marginTop20,
            children: en.Z.Messages.ALREADY_HAVE_ACCOUNT
          })]
        })]
      }), null != e && l ? (0, r.jsx)(B.ZP, {
        className: er.marginTop20,
        children: (0, r.jsx)(C.y, {
          guild: e.guild,
          onlineCount: e.approximate_presence_count
        })
      }) : null]
    })
  }
  renderErrorMessage() {
    let {
      apiErrors: {
        message: e
      }
    } = this.props;
    return "string" != typeof e ? null : (0, r.jsx)(B.i_, {
      className: l()(er.marginTop20, es.errorMessage),
      children: e
    })
  }
  renderFull(e, t) {
    let {
      email: n,
      username: s,
      globalName: a,
      password: o,
      consent: u,
      parsedDateOfBirth: c,
      globalNameFocused: d,
      emailClientError: h,
      usernameClientError: _,
      passwordClientError: m,
      dateOfBirthClientError: g
    } = this.state, {
      registering: p,
      consentRequired: I,
      isMobileWebInviteRegistration: N,
      uniqueUsernameRegistrationConfig: {
        suggestions: A
      },
      authBoxClassName: T,
      apiErrors: {
        email: R,
        username: C,
        global_name: x,
        password: O,
        date_of_birth: Z
      } = {},
      hasLoggedInAccounts: L,
      registrationCopyExperimentConfig: {
        hasCopyAboveButton: M
      }
    } = this.props, {
      subText: v,
      consentText: y
    } = this.renderConsentComponents(), j = this.renderErrorMessage(), P = (0, r.jsx)(E.Tooltip, {
      text: !u && I ? en.Z.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
      children: e => (0, r.jsx)("div", {
        className: er.marginTop20,
        ...e,
        children: (0, r.jsx)(B.zx, {
          type: "submit",
          submitting: p,
          disabled: !this.hasConsent() || this.state.isRateLimited,
          children: en.Z.Messages.CONTINUE
        })
      })
    }), w = async () => {
      this.setState({
        usernameFocused: !0
      }), A && a.length > 0 && !b.Z.wasRegistrationSuggestionFetched(a) && await D.Z.fetchSuggestionsRegistration(a)
    }, G = null != e ? (0, r.jsx)(i.Fragment, {
      children: e()
    }, "custom-header") : (0, r.jsx)(B.Dx, {
      children: en.Z.Messages.REGISTER_TITLE
    }, "title"), F = (0, r.jsxs)(B.gO, {
      className: er.marginTop20,
      children: [(0, r.jsx)(B.II, {
        autoFocus: !0,
        className: er.marginBottom20,
        label: en.Z.Messages.FORM_LABEL_EMAIL,
        name: "email",
        value: n,
        onChange: e => this.setState({
          email: e,
          emailClientError: 0 === e.length ? en.Z.Messages.REQUIRED : null
        }),
        error: null != h ? h : el(R),
        type: "email",
        setRef: e => {
          this.emailRef = e
        },
        required: !0
      }), (0, r.jsx)(B.II, {
        label: en.Z.Messages.DISPLAY_NAME,
        className: er.marginBottom20,
        name: "global_name",
        value: a,
        onChange: e => this.setState({
          globalName: e
        }),
        error: el(x),
        maxLength: et.hy,
        setRef: e => {
          this.globalNameRef = e
        },
        onFocus: () => this.setState({
          globalNameFocused: !0
        }),
        onBlur: () => this.setState({
          globalNameFocused: !1
        })
      }), (0, r.jsx)(U.Z, {
        show: d,
        top: -12,
        bottom: 20,
        children: (0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: en.Z.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
        })
      }), (0, r.jsxs)("div", {
        onBlur: () => this.setState({
          usernameFocused: !1
        }),
        onFocus: w,
        tabIndex: -1,
        children: [(0, r.jsx)(B.II, {
          label: en.Z.Messages.FORM_LABEL_USERNAME,
          className: er.marginBottom20,
          name: "username",
          value: s,
          onChange: e => {
            this.setState({
              username: e.toLocaleLowerCase(),
              usernameClientError: 0 === e.length ? en.Z.Messages.REQUIRED : null
            })
          },
          error: null != _ ? _ : el(C),
          setRef: e => {
            this.usernameRef = e
          },
          required: !0
        }), this.renderUsernameValidation()]
      }), (0, r.jsx)(B.II, {
        label: en.Z.Messages.FORM_LABEL_PASSWORD,
        name: "password",
        value: o,
        onChange: e => this.setState({
          password: e,
          passwordClientError: 0 === e.length ? en.Z.Messages.REQUIRED : null
        }),
        error: null != m ? m : el(O),
        type: "password",
        setRef: e => {
          this.passwordRef = e
        },
        required: !0
      }), (0, r.jsx)(f.Z, {
        label: en.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
        wrapperClassName: er.marginTop20,
        name: "date_of_birth",
        onChange: this.handleBirthdayChange,
        ref: this.dateOfBirthRef,
        error: null != g ? g : el(Z),
        value: c,
        required: !0
      }), M && v, (0, r.jsx)(S.Z, {}), P, j, y, !M && v, $.a ? null : (0, r.jsx)(B.zx, {
        look: N ? B.zx.Looks.FILLED : B.zx.Looks.LINK,
        color: N ? B.zx.Colors.PRIMARY : B.zx.Colors.LINK,
        onClick: this.handleGotoLogin,
        className: er.marginTop20,
        children: en.Z.Messages.ALREADY_HAVE_ACCOUNT
      })]
    });
    return t ? (0, r.jsx)(Q.Z, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: l()(T, es.horizontalAuthBox),
      children: () => [G, (0, r.jsxs)("div", {
        className: es.flex,
        children: [(0, r.jsx)(B.Dx, {
          className: es.createAccountTemplateHeader,
          children: en.Z.Messages.REGISTER_TITLE
        }), F]
      }, "register-title")]
    }) : (0, r.jsxs)(B.ZP, {
      onSubmit: this.handleSubmit,
      tag: "form",
      className: T,
      children: [L && !N ? (0, r.jsx)(B.zx, {
        onClick: this.handleGotoLogin,
        look: B.zx.Looks.LINK,
        color: B.zx.Colors.PRIMARY,
        className: es.goBackButton,
        children: (0, r.jsxs)("div", {
          className: es.content,
          children: [(0, r.jsx)(H.Z, {
            width: 16,
            height: 16,
            className: es.caret
          }), (0, r.jsx)(E.Text, {
            variant: "text-md/normal",
            children: en.Z.Messages.AGE_GATE_GO_BACK
          })]
        })
      }) : null, G, F]
    })
  }
  render() {
    let {
      isUnderage: e,
      isMobileWebInviteRegistration: t
    } = this.props;
    if (e || this.hasError("date_of_birth")) return (0, r.jsx)(g.Z, {});
    let {
      invite: n,
      giftCode: s,
      guildTemplate: i
    } = this.props, a = null != n && null == n.guild && null == n.channel && null != n.inviter;
    return null == n || a || t ? null != i ? this.renderFull(() => (0, r.jsx)(Z.Z, {
      guildTemplate: i
    }), !0) : null != s ? this.renderFull(() => (0, r.jsx)(W.Z, {
      giftCode: s
    })) : null != n && a && n.state === J.r2o.RESOLVED && !t ? this.renderFull(() => (0, r.jsx)(q.Z, {
      invite: n,
      isRegister: !0
    })) : this.renderFull() : n.state === J.r2o.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
  }
  constructor(e) {
    var t;
    super(e), ei(this, "emailRef", void 0), ei(this, "usernameRef", void 0), ei(this, "globalNameRef", void 0), ei(this, "passwordRef", void 0), ei(this, "dateOfBirthRef", i.createRef()), ei(this, "_retryTimer", new h.V7), ei(this, "handleGotoLogin", e => {
      let t;
      let {
        email: n
      } = this.state, {
        giftCode: s,
        guildTemplate: r,
        invite: i,
        location: a,
        onLoginStart: l,
        redirectTo: u,
        transitionTo: c,
        isMobileWebInviteRegistration: d
      } = this.props;
      if (d) {
        null == l || l(e);
        return
      }
      let h = null != a ? (0, o.parse)(a.search) : {};
      null != i ? t = J.Z5c.INVITE_LOGIN(i.code) : null != s ? t = J.Z5c.GIFT_CODE_LOGIN(s.code) : null != r ? t = J.Z5c.GUILD_TEMPLATE_LOGIN(r.code) : null != u ? (t = J.Z5c.LOGIN, h.redirect_to = u) : (t = J.Z5c.LOGIN, "" !== n && (h = {
        email: n
      })), _.Z.loginReset(), c(t, {
        search: (0, o.stringify)(h)
      }), null == l || l(e), z.S.dispatch(J.CkL.WAVE_EMPHASIZE)
    }), ei(this, "handleSubmit", e => {
      null == e || e.preventDefault();
      let {
        email: t,
        username: n,
        password: s,
        parsedDateOfBirth: r
      } = this.state, {
        invite: i,
        consentRequired: a
      } = this.props;
      if (null !== a) {
        if (null == i) {
          let e = !1;
          if (0 === t.length && (this.setState({
              emailClientError: en.Z.Messages.REQUIRED
            }), e = !0), 0 === n.length && (this.setState({
              usernameClientError: en.Z.Messages.REQUIRED
            }), e = !0), 0 === s.length && (this.setState({
              passwordClientError: en.Z.Messages.REQUIRED
            }), e = !0), null == r && (this.setState({
              dateOfBirthClientError: en.Z.Messages.REQUIRED
            }), e = !0), e) return
        }
        this.handleRegister()
      }
    }), ei(this, "handleBirthdayChange", e => {
      this.setState({
        parsedDateOfBirth: e
      }), null != e && this.setState({
        dateOfBirthClientError: null
      })
    }), ei(this, "renderUsernameValidation", () => {
      let {
        username: e,
        globalName: t,
        usernameFocused: n
      } = this.state, {
        usernameSuggestion: s,
        uniqueUsernameRegistrationConfig: {
          livecheckEnabled: i
        }
      } = this.props;
      return (0, r.jsx)(ec, {
        username: e,
        suggestion: s,
        livecheckEnabled: i,
        globalName: t,
        isUsernameFocused: n,
        onClickSuggestion: () => {
          null != this.usernameRef && this.usernameRef.focus(), null != s && s.length > 0 && this.setState({
            username: s
          })
        }
      })
    });
    let n = null != e.location ? (0, o.parse)(e.location.search) : {};
    this.state = {
      email: null !== (t = n.email) && void 0 !== t ? t : "",
      username: "",
      globalName: "",
      password: "",
      parsedDateOfBirth: null,
      emailClientError: null,
      usernameClientError: null,
      passwordClientError: null,
      dateOfBirthClientError: null,
      consent: !e.consentRequired,
      consentRequiredProp: e.consentRequired,
      isRateLimited: !1,
      globalNameFocused: !1,
      usernameFocused: !1
    }
  }
}

function eu(e) {
  let t = (0, d.cj)([F.Z, G.default, m.Z, v.Z, L.Z], () => ({
      consentRequired: F.Z.getAuthenticationConsentRequired(),
      registering: G.default.getRegisterStatus() === J.$ib.REGISTERING,
      apiErrors: G.default.getErrors(),
      authenticated: G.default.isAuthenticated(),
      isUnderage: m.Z.isUnderageAnonymous(),
      country: v.Z.getCountryCode(),
      hasLoggedInAccounts: L.Z.getHasLoggedInAccounts()
    })),
    n = (0, j.F4)(),
    s = (0, d.e7)([b.Z], () => b.Z.registrationUsernameSuggestion()),
    [a, l] = i.useState(X.E.FULL);
  return (0, p.Z)({
    type: c.ImpressionTypes.VIEW,
    name: c.ImpressionNames.USER_REGISTRATION,
    properties: {
      impression_group: c.ImpressionGroups.USER_REGISTRATION_FLOW,
      step: a
    }
  }, {}, [a]), (0, r.jsx)(eo, {
    onChangeStep: e => l(e),
    registrationCopyExperimentConfig: N.Z.getCurrentConfig({
      location: "0ba758_2"
    }, {
      autoTrackExposure: !1
    }),
    uniqueUsernameRegistrationConfig: n,
    usernameSuggestion: s,
    ...e,
    ...t
  })
}

function ec(e) {
  let t, {
      username: n,
      suggestion: s,
      globalName: i,
      livecheckEnabled: a,
      isUsernameFocused: l,
      onClickSuggestion: o
    } = e,
    c = (0, P.a)(n, a, !0),
    d = a && n.length > 0;
  return t = d ? (0, u.EQ)(c).with({
    type: y.K.ERROR,
    message: u.P.select()
  }, e => (0, r.jsx)(E.Text, {
    className: es.messageNegative,
    variant: "text-sm/normal",
    children: e
  })).with({
    type: y.K.AVAILABLE,
    message: u.P.select()
  }, e => (0, r.jsx)(E.Text, {
    className: es.messagePositive,
    variant: "text-sm/normal",
    children: e
  })).otherwise(() => (0, r.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  })) : null != s && s.length > 0 && i.length > 0 ? (0, r.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.Z.Messages.UU_REGISTER_SUGGESTION.format({
      suggestion: s,
      nameOnClick: o
    })
  }) : (0, r.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: en.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }), (0, r.jsx)(U.Z, {
    show: d && (null == c ? void 0 : c.type) === y.K.ERROR || l,
    top: -12,
    bottom: 20,
    children: t
  })
}
ei(eo, "defaultProps", {
  giftCodeResolved: !1,
  transitionTo: e => n.g.location.assign(e)
})