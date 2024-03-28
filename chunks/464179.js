"use strict";
t.r(a), t.d(a, {
  CANADA: function() {
    return L
  },
  COUNTRIES_WITHOUT_POSTAL_CODES: function() {
    return v
  },
  COUNTRY_CODE_OPTIONS: function() {
    return M
  },
  UNITED_STATES: function() {
    return R
  },
  US_POSTAL_CODE_VALID_LENGTH: function() {
    return A
  }
}), t("47120"), t("411104");
var l, n, s, i, o, r, u, d = t("735250"),
  c = t("470079"),
  I = t("588391"),
  h = t("217986"),
  S = t("971809"),
  m = t("481060"),
  N = t("812169"),
  E = t("153124"),
  b = t("823379"),
  p = t("754103"),
  _ = t("689938"),
  D = t("451893");

function C(e, a, t) {
  return a in e ? Object.defineProperty(e, a, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = t, e
}
let R = "US",
  L = "CA",
  A = 5,
  v = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  M = h.default.map(e => ({
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  g = (0, E.uid)(),
  f = (0, E.uid)(),
  T = (0, E.uid)(),
  O = (0, E.uid)(),
  y = (0, E.uid)(),
  U = (0, E.uid)(),
  B = (0, E.uid)();
(o = l || (l = {})).NAME = "name", o.COUNTRY = "country", o.LINE1 = "line1", o.LINE2 = "line2", o.CITY = "city", o.POSTAL_CODE = "postalCode", o.STATE = "state", (r = n || (n = {})).MODAL_US = "modalUS", r.MODAL_INTL = "modalInternational", r.MODAL_US_WITH_NAME = "modalUSWithName", r.MODAL_INTL_WITH_NAME = "modalInternationalWithName", r.MODAL_US_REDUCED = "modalUSReduced", r.SETTINGS_US = "settingsUS", r.SETTINGS_INTL = "settingsInternational", r.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", r.SETTINGS_US_MOBILE = "settingsUSMobile", r.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", r.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", (u = s || (s = {})).EDIT = "edit", u.CREATE = "create";
let w = {
    [R]: S.States,
    [L]: I.CanadaProvinces
  },
  G = {
    name: e => ({
      name: "name",
      id: g,
      title: () => _.default.Messages.BILLING_ADDRESS_NAME,
      autoComplete: "name",
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? D.width100 : D.width60,
      renderInput: e => (0, d.jsx)(m.TextInput, {
        ...e
      })
    }),
    country: e => ({
      name: "country",
      id: f,
      title: () => _.default.Messages.BILLING_ADDRESS_COUNTRY,
      autoComplete: "country",
      getClassNameForLayout: e => {
        switch (e) {
          case "modalUS":
          case "modalInternational":
          case "modalUSWithName":
          case "modalInternationalWithName":
            return D.width100;
          case "modalUSReduced":
            return D.width50;
          default:
            return D.width75
        }
      },
      renderInput(e, a) {
        let {
          onChange: t,
          ...l
        } = e;
        return (0, d.jsx)(m.SearchableSelect, {
          ...l,
          autoFocus: !0,
          maxVisibleItems: 8,
          isDisabled: "edit" === a.mode,
          options: M,
          onChange: a => {
            null != t && t(a, e.name)
          }
        })
      }
    }),
    line1: e => ({
      name: "line1",
      id: T,
      title: () => _.default.Messages.BILLING_ADDRESS_ADDRESS,
      autoComplete: "address-line1",
      placeholder: () => _.default.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? D.width100 : D.width60,
      renderInput: e => (0, d.jsx)(m.TextInput, {
        ...e
      })
    }),
    line2: e => ({
      name: "line2",
      id: O,
      title: () => _.default.Messages.BILLING_ADDRESS_ADDRESS2,
      placeholder: () => _.default.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
      autoComplete: "address-line2",
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? D.width100 : D.width40,
      renderInput: e => (0, d.jsx)(m.TextInput, {
        ...e
      })
    }),
    city: e => ({
      name: "city",
      id: y,
      title: () => _.default.Messages.BILLING_ADDRESS_CITY,
      autoComplete: "address-level2",
      placeholder: () => _.default.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalUS":
          case "modalInternationalWithName":
          case "modalUSWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return D.width100;
          case "settingsInternational":
            return D.width60;
          default:
            return D.width50
        }
      },
      renderInput: e => (0, d.jsx)(m.TextInput, {
        ...e
      })
    }),
    postalCode: e => {
      let a, t;
      switch (e) {
        case R:
          a = _.default.Messages.BILLING_ADDRESS_ZIP_CODE, t = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
          break;
        case L:
          a = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE, t = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
          break;
        default:
          a = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE
      }
      return {
        name: "postalCode",
        id: U,
        title: () => a,
        autoComplete: "postal-code",
        placeholder: () => t,
        getClassNameForLayout: e => {
          switch (e) {
            case "modalInternational":
            case "modalInternationalWithName":
              return D.width100;
            case "modalUS":
            case "modalUSWithName":
            case "modalUSReduced":
            case "settingsUSMobile":
            case "settingsInternationalMobile":
            case "settingsInternationalWithoutNameMobile":
              return D.width50;
            case "settingsInternational":
              return D.width30;
            default:
              return D.width25
          }
        },
        renderInput: e => "modalUSReduced" === e.layout ? (0, d.jsx)(m.TextInput, {
          style: {
            minHeight: "45px"
          },
          ...e
        }) : (0, d.jsx)(m.TextInput, {
          ...e
        })
      }
    },
    state: e => {
      let a;
      switch (e) {
        case R:
          a = _.default.Messages.BILLING_ADDRESS_STATE;
          break;
        case L:
          a = _.default.Messages.BILLING_ADDRESS_PROVINCE;
          break;
        default:
          a = _.default.Messages.BILLING_ADDRESS_REGION
      }
      return {
        name: "state",
        id: B,
        title: () => a,
        autoComplete: "address-level1",
        getClassNameForLayout: e => {
          switch (e) {
            case "modalInternational":
            case "modalInternationalWithName":
            case "settingsUSMobile":
            case "settingsInternationalMobile":
            case "settingsInternationalWithoutNameMobile":
              return D.width100;
            case "modalUS":
            case "modalUSWithName":
              return D.width50;
            case "settingsInternational":
              return D.width30;
            default:
              return D.width25
          }
        },
        renderInput(a) {
          let t = w[e],
            l = null == a.value || "" === a.value || null != t && null != t.find(e => {
              let {
                value: t
              } = e;
              return t === a.value
            }),
            {
              layout: n,
              onChange: s,
              ...i
            } = a;
          return [R, L].includes(e) && l ? (0, d.jsx)(m.SearchableSelect, {
            ...i,
            popoutPosition: ["modalUS", "modalInternational"].includes(n) ? "top" : void 0,
            options: t,
            onChange: e => {
              null != s && s(e, a.name)
            }
          }) : (0, d.jsx)(m.TextInput, {
            ...a
          })
        }
      }
    }
  },
  W = {
    modalUS: [
      [G.country],
      [G.line1],
      [G.line2],
      [G.city],
      [G.state, G.postalCode]
    ],
    modalInternational: [
      [G.country],
      [G.line1],
      [G.line2],
      [G.city],
      [G.state],
      [G.postalCode]
    ],
    modalUSWithName: [
      [G.country],
      [G.name],
      [G.line1],
      [G.line2],
      [G.city],
      [G.state, G.postalCode]
    ],
    modalInternationalWithName: [
      [G.country],
      [G.name],
      [G.line1],
      [G.line2],
      [G.city],
      [G.state],
      [G.postalCode]
    ],
    modalUSReduced: [
      [G.country, G.postalCode]
    ],
    settingsUS: [
      [G.name],
      [G.line1, G.line2],
      [G.city, G.state, G.postalCode],
      [G.country]
    ],
    settingsUSMobile: [
      [G.name],
      [G.line1],
      [G.line2],
      [G.city],
      [G.state],
      [G.postalCode],
      [G.country]
    ],
    settingsInternational: [
      [G.name],
      [G.line1, G.line2],
      [G.city],
      [G.state, G.postalCode],
      [G.country]
    ],
    settingsInternationalMobile: [
      [G.name],
      [G.line1],
      [G.line2],
      [G.city],
      [G.state],
      [G.postalCode],
      [G.country]
    ],
    settingsInternationalWithoutName: [
      [G.line1, G.line2],
      [G.city],
      [G.state, G.postalCode],
      [G.country]
    ],
    settingsInternationalWithoutNameMobile: [
      [G.line1],
      [G.line2],
      [G.city],
      [G.state],
      [G.postalCode],
      [G.country]
    ]
  };
class P extends(i = c.PureComponent) {
  componentDidMount() {
    this.handleInfoChange()
  }
  componentDidUpdate(e, a) {
    this.state !== a && this.handleInfoChange()
  }
  hasValue(e) {
    return null != e && "" !== e
  }
  validateForm(e) {
    let {
      values: a,
      dirtyFields: t
    } = this.state, l = {}, n = (0, N.reducedPaymentInfoExperiment)({
      autoTrackExposure: !1
    }).enabled;
    (!e || t.name) && !this.hasValue(a.name) && "edit" === this.props.mode && (l.name = _.default.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED), (!e || t.country) && !this.hasValue(a.country) && (l.country = _.default.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED), (!e || t.line1) && !this.hasValue(a.line1) && !n && (l.line1 = _.default.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED), (!e || t.city) && !this.hasValue(a.city) && !n && (l.city = _.default.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
    let s = a.country;
    switch (s) {
      case R:
        if (!e || t.postalCode) {
          let e = a.postalCode;
          this.hasValue(e) ? e.length !== A ? l.postalCode = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(e) && (l.postalCode = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID) : l.postalCode = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED
        }(!e || t.state) && !this.hasValue(a.state) && !n && (l.state = _.default.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
        break;
      case L:
        (!e || t.postalCode) && !this.hasValue(a.postalCode) && (l.postalCode = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED), (!e || t.state) && !this.hasValue(a.state) && !n && (l.state = _.default.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
        break;
      default:
        (!e || t.postalCode) && !this.hasValue(a.postalCode) && !v.includes(null != s ? s : "") && (l.postalCode = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return l
  }
  handleInfoChange() {
    let {
      values: e,
      dirtyFields: a
    } = this.state, t = this.validateForm(!1);
    this.props.onBillingAddressChange(e, 0 === Object.keys(t).length, Object.keys(a).length > 0)
  }
  render() {
    let {
      errors: e,
      values: a
    } = this.state, {
      layout: t,
      mode: l,
      className: n,
      error: s
    } = this.props, i = W[t];
    if (null == i) throw Error("Provide a proper layout property.");
    let o = a.country,
      r = i.map(e => {
        let a = e.map(e => e(null != o ? o : "")).filter(b.isNotNullish);
        return a.length > 0 ? {
          fields: a
        } : null
      }).filter(b.isNotNullish);
    return (0, d.jsx)(p.default, {
      className: n,
      form: r,
      layout: t,
      values: a,
      errors: e,
      formError: s,
      onFieldChange: this.handleFieldChange,
      onFieldBlur: this.handleFieldBlur,
      mode: l
    })
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      values: {
        name: this.props.name,
        country: this.props.country,
        line1: this.props.line1,
        line2: this.props.line2,
        city: this.props.city,
        postalCode: this.props.postalCode,
        state: this.props.state
      },
      dirtyFields: {},
      errors: {}
    }), C(this, "handleFieldBlur", () => {
      this.setState({
        errors: this.validateForm(!0)
      })
    }), C(this, "handleFieldChange", (e, a) => {
      if (null == a) return;
      let {
        values: t,
        errors: l,
        dirtyFields: n
      } = this.state;
      delete l[a], this.setState({
        values: {
          ...t,
          [a]: e
        },
        dirtyFields: {
          ...n,
          [a]: !0
        },
        errors: l
      })
    })
  }
}
C(P, "Layouts", n), C(P, "Modes", s), C(P, "defaultProps", {
  name: "",
  country: "",
  line1: "",
  line2: "",
  city: "",
  postalCode: "",
  state: "",
  layout: "modalUS",
  mode: "create",
  error: null
}), a.default = P