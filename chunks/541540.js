"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120"), s("411104");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("533307"),
  o = s("930114"),
  d = s("246946"),
  u = s("285952"),
  c = s("626135"),
  S = s("669079"),
  E = s("981631"),
  T = s("689938"),
  f = s("314664");

function _(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class m extends n.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return {
      ...e,
      object: E.AnalyticsObjects.BUTTON_CTA
    }
  }
  render() {
    let {
      obscureInput: e
    } = this.props, {
      codeInput: t,
      submitting: s,
      hasError: n,
      isPromoCode: l
    } = this.state;
    return (0, a.jsxs)(i.FormSection, {
      tag: i.FormTitleTags.H1,
      title: T.default.Messages.GIFT_INVENTORY_REDEEM_CODES,
      children: [(0, a.jsx)(i.FormTitle, {
        children: T.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMPT
      }), (0, a.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: (0, a.jsxs)(u.default, {
          children: [(0, a.jsx)(i.TextInput, {
            type: e ? "password" : "text",
            value: t,
            onChange: this.handleChange,
            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
            error: !l && n ? T.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_INVALID : null,
            className: f.codeRedemptionInput
          }), (0, a.jsx)(i.Button, {
            type: "submit",
            submitting: s,
            children: T.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_REDEEM
          })]
        })
      }), l ? (0, a.jsx)(i.Text, {
        className: f.errorMessage,
        variant: "text-sm/normal",
        children: T.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMOTION.format({
          promoLink: () => {
            window.open("https://discord.com/billing/promotions/".concat(t))
          }
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      codeInput: "",
      submitting: !1,
      hasError: !1,
      isPromoCode: !1
    }), _(this, "handleChange", e => {
      this.setState({
        codeInput: e,
        hasError: !1
      })
    }), _(this, "handleSubmit", async e => {
      e.preventDefault();
      let {
        codeInput: t
      } = this.state;
      if ("" === t) return;
      let s = (0, S.processGiftCodeInput)(t);
      if (null == s) {
        this.setState({
          hasError: !0
        });
        return
      }
      this.setState({
        submitting: !0
      });
      try {
        let e = await r.default.resolveGiftCode(s);
        if (null != e && null != e.giftCode.promotion) throw this.setState({
          isPromoCode: !0
        }), Error("Cannnot redeem promotion code as gift");
        c.default.track(E.AnalyticEvents.OPEN_MODAL, {
          type: "gift_accept",
          location: {
            ...this.analyticsLocation,
            object: E.AnalyticsObjects.BUTTON_CTA
          }
        }), (0, o.openGiftCodeAcceptModal)({
          processedCode: s
        }), this.setState({
          codeInput: ""
        })
      } catch (e) {
        this.setState({
          hasError: !0
        })
      } finally {
        this.setState({
          submitting: !1
        })
      }
    })
  }
}

function g() {
  let e = n.useContext(c.AnalyticsContext),
    t = (0, l.useStateFromStores)([d.default], () => d.default.enabled);
  return (0, a.jsx)(m, {
    analyticsContext: e,
    obscureInput: t
  })
}