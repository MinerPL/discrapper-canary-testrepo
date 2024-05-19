var r, i;
r = this, i = function(e, t) {
  "use strict";

  function n(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })), n.push.apply(n, r)
    }
    return n
  }

  function r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? n(Object(r), !0).forEach(function(t) {
        a(e, t, r[t])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      })
    }
    return e
  }

  function i(e) {
    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function o(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      var n, r, i = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
      if (null != i) {
        var a = [],
          o = !0,
          s = !1;
        try {
          for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
        } catch (e) {
          s = !0, r = e
        } finally {
          try {
            !o && null != i.return && i.return()
          } finally {
            if (s) throw r
          }
        }
        return a
      }
    }(e, t) || function(e, t) {
      if (e) {
        if ("string" == typeof e) return s(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
      }
    }(e, t) || function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
  }
  var u, c, l, d, f, p = {
    exports: {}
  };
  p.exports = (function() {
    if (f) return d;
    f = 1;
    var e = l ? c : (l = 1, c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");

    function t() {}

    function n() {}
    return n.resetWarningCache = t, d = function() {
      function r(t, n, r, i, a, o) {
        if (o !== e) {
          var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s.name = "Invariant Violation", s
        }
      }

      function i() {
        return r
      }
      r.isRequired = r;
      var a = {
        array: r,
        bool: r,
        func: r,
        number: r,
        object: r,
        string: r,
        symbol: r,
        any: r,
        arrayOf: i,
        element: r,
        elementType: r,
        instanceOf: i,
        node: r,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: n,
        resetWarningCache: t
      };
      return a.PropTypes = a, a
    }
  })()();
  var h = (u = p.exports) && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u,
    m = function(e, n, r) {
      var i = !!r,
        a = t.useRef(r);
      t.useEffect(function() {
        a.current = r
      }, [r]), t.useEffect(function() {
        if (!i || !e) return function() {};
        var t = function() {
          a.current && a.current.apply(a, arguments)
        };
        return e.on(n, t),
          function() {
            e.off(n, t)
          }
      }, [i, n, e, a])
    },
    g = function(e) {
      var n = t.useRef(e);
      return t.useEffect(function() {
        n.current = e
      }, [e]), n.current
    },
    _ = function(e) {
      return null !== e && "object" === i(e)
    },
    b = "[object Object]",
    v = function e(t, n) {
      if (!_(t) || !_(n)) return t === n;
      var r = Array.isArray(t);
      if (r !== Array.isArray(n)) return !1;
      var i = Object.prototype.toString.call(t) === b;
      if (i !== (Object.prototype.toString.call(n) === b)) return !1;
      if (!i && !r) return t === n;
      var a = Object.keys(t),
        o = Object.keys(n);
      if (a.length !== o.length) return !1;
      for (var s = {}, u = 0; u < a.length; u += 1) s[a[u]] = !0;
      for (var c = 0; c < o.length; c += 1) s[o[c]] = !0;
      var l = Object.keys(s);
      return l.length === a.length && l.every(function(r) {
        return e(t[r], n[r])
      })
    },
    y = function(e, t, n) {
      return _(e) ? Object.keys(e).reduce(function(i, o) {
        var s = !_(t) || !v(e[o], t[o]);
        return n.includes(o) ? (s && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), i) : s ? r(r({}, i || {}), {}, a({}, o, e[o])) : i
      }, null) : null
    },
    E = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
    S = function(e) {
      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
      if (null === e || _(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
      throw Error(n)
    },
    x = function(e) {
      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
      if (_(t = e) && "function" == typeof t.then) return {
        tag: "async",
        stripePromise: Promise.resolve(e).then(function(e) {
          return S(e, n)
        })
      };
      var r = S(e, n);
      return null === r ? {
        tag: "empty"
      } : {
        tag: "sync",
        stripe: r
      }
    },
    w = function(e) {
      e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
        name: "react-stripe-js",
        version: "2.7.0"
      }), e.registerAppInfo({
        name: "react-stripe-js",
        version: "2.7.0",
        url: "https://stripe.com/docs/stripe-js/react"
      }))
    },
    T = t.createContext(null);
  T.displayName = "ElementsContext";
  var C = function(e, t) {
      if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
      return e
    },
    D = function(e) {
      var n = e.stripe,
        r = e.options,
        i = e.children,
        a = t.useMemo(function() {
          return x(n)
        }, [n]),
        s = o(t.useState(function() {
          return {
            stripe: "sync" === a.tag ? a.stripe : null,
            elements: "sync" === a.tag ? a.stripe.elements(r) : null
          }
        }), 2),
        u = s[0],
        c = s[1];
      t.useEffect(function() {
        var e = !0,
          t = function(e) {
            c(function(t) {
              return t.stripe ? t : {
                stripe: e,
                elements: e.elements(r)
              }
            })
          };
        return "async" !== a.tag || u.stripe ? "sync" === a.tag && !u.stripe && t(a.stripe) : a.stripePromise.then(function(n) {
            n && e && t(n)
          }),
          function() {
            e = !1
          }
      }, [a, u, r]);
      var l = g(n);
      t.useEffect(function() {
        null !== l && l !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
      }, [l, n]);
      var d = g(r);
      return t.useEffect(function() {
        if (u.elements) {
          var e = y(r, d, ["clientSecret", "fonts"]);
          e && u.elements.update(e)
        }
      }, [r, d, u.elements]), t.useEffect(function() {
        w(u.stripe)
      }, [u.stripe]), t.createElement(T.Provider, {
        value: u
      }, i)
    };
  D.propTypes = {
    stripe: h.any,
    options: h.object
  };
  var O = function(e) {
      return C(t.useContext(T), e)
    },
    M = function(e) {
      return (0, e.children)(O("mounts <ElementsConsumer>"))
    };
  M.propTypes = {
    children: h.func.isRequired
  };
  var A = ["on", "session"],
    k = t.createContext(null);
  k.displayName = "CustomCheckoutSdkContext";
  var R = function(e, t) {
      if (!e) throw Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t, " in an <CustomCheckoutProvider> provider."));
      return e
    },
    N = t.createContext(null);
  N.displayName = "CustomCheckoutContext";
  var I = function(e, t) {
      if (!e) return null;
      e.on, e.session;
      var n = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++) {
            if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
        }
        return i
      }(e, A);
      return t ? r(r({}, n), t) : r(r({}, n), e.session())
    },
    L = function(e) {
      var n = e.stripe,
        r = e.options,
        i = e.children,
        a = t.useMemo(function() {
          return x(n, "Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
        }, [n]),
        s = o(t.useState(null), 2),
        u = s[0],
        c = s[1],
        l = o(t.useState(function() {
          return {
            stripe: "sync" === a.tag ? a.stripe : null,
            customCheckoutSdk: null
          }
        }), 2),
        d = l[0],
        f = l[1],
        p = function(e, t) {
          f(function(n) {
            return n.stripe && n.customCheckoutSdk ? n : {
              stripe: e,
              customCheckoutSdk: t
            }
          })
        },
        h = t.useRef(!1);
      t.useEffect(function() {
        var e = !0;
        return "async" !== a.tag || d.stripe ? "sync" === a.tag && a.stripe && !h.current && (h.current = !0, a.stripe.initCustomCheckout(r).then(function(e) {
            e && (p(a.stripe, e), e.on("change", c))
          })) : a.stripePromise.then(function(t) {
            t && e && !h.current && (h.current = !0, t.initCustomCheckout(r).then(function(e) {
              e && (p(t, e), e.on("change", c))
            }))
          }),
          function() {
            e = !1
          }
      }, [a, d, r, c]);
      var m = g(n);
      t.useEffect(function() {
        null !== m && m !== n && console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.")
      }, [m, n]);
      var b = g(r);
      t.useEffect(function() {
        if (d.customCheckoutSdk) {
          r.clientSecret && !_(b) && !v(r.clientSecret, b.clientSecret) && console.warn("Unsupported prop change: options.client_secret is not a mutable property.");
          var e, t, n = null == b ? void 0 : null === (e = b.elementsOptions) || void 0 === e ? void 0 : e.appearance,
            i = null == r ? void 0 : null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
          i && !v(i, n) && d.customCheckoutSdk.changeAppearance(i)
        }
      }, [r, b, d.customCheckoutSdk]), t.useEffect(function() {
        w(d.stripe)
      }, [d.stripe]);
      var y = t.useMemo(function() {
        return I(d.customCheckoutSdk, u)
      }, [d.customCheckoutSdk, u]);
      return d.customCheckoutSdk ? t.createElement(k.Provider, {
        value: d
      }, t.createElement(N.Provider, {
        value: y
      }, i)) : null
    };
  L.propTypes = {
    stripe: h.any,
    options: h.shape({
      clientSecret: h.string.isRequired,
      elementsOptions: h.object
    }).isRequired
  };
  var P = function(e) {
      var n = t.useContext(k),
        r = t.useContext(T);
      if (n && r) throw Error("You cannot wrap the part of your app that ".concat(e, " in both <CustomCheckoutProvider> and <Elements> providers."));
      return n ? R(n, e) : C(r, e)
    },
    F = function(e, n) {
      var r, i = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
        a = n ? function(e) {
          P("mounts <".concat(i, ">"));
          var n = e.id,
            r = e.className;
          return t.createElement("div", {
            id: n,
            className: r
          })
        } : function(n) {
          var r, a = n.id,
            s = n.className,
            u = n.options,
            c = void 0 === u ? {} : u,
            l = n.onBlur,
            d = n.onFocus,
            f = n.onReady,
            p = n.onChange,
            h = n.onEscape,
            _ = n.onClick,
            b = n.onLoadError,
            v = n.onLoaderStart,
            E = n.onNetworksChange,
            S = n.onConfirm,
            x = n.onCancel,
            w = n.onShippingAddressChange,
            T = n.onShippingRateChange,
            C = P("mounts <".concat(i, ">")),
            D = "elements" in C ? C.elements : null,
            O = "customCheckoutSdk" in C ? C.customCheckoutSdk : null,
            M = o(t.useState(null), 2),
            A = M[0],
            k = M[1],
            R = t.useRef(null),
            N = t.useRef(null);
          m(A, "blur", l), m(A, "focus", d), m(A, "escape", h), m(A, "click", _), m(A, "loaderror", b), m(A, "loaderstart", v), m(A, "networkschange", E), m(A, "confirm", S), m(A, "cancel", x), m(A, "shippingaddresschange", w), m(A, "shippingratechange", T), m(A, "change", p), f && (r = "expressCheckout" === e ? f : function() {
            f(A)
          }), m(A, "ready", r), t.useLayoutEffect(function() {
            if (null === R.current && null !== N.current && (D || O)) {
              var t = null;
              O ? t = O.createElement(e, c) : D && (t = D.create(e, c)), R.current = t, k(t), t && t.mount(N.current)
            }
          }, [D, O, c]);
          var I = g(c);
          return t.useEffect(function() {
            if (R.current) {
              var e = y(c, I, ["paymentRequest"]);
              e && R.current.update(e)
            }
          }, [c, I]), t.useLayoutEffect(function() {
            return function() {
              if (R.current && "function" == typeof R.current.destroy) try {
                R.current.destroy(), R.current = null
              } catch (e) {}
            }
          }, []), t.createElement("div", {
            id: a,
            className: s,
            ref: N
          })
        };
      return a.propTypes = {
        id: h.string,
        className: h.string,
        onChange: h.func,
        onBlur: h.func,
        onFocus: h.func,
        onReady: h.func,
        onEscape: h.func,
        onClick: h.func,
        onLoadError: h.func,
        onLoaderStart: h.func,
        onNetworksChange: h.func,
        onConfirm: h.func,
        onCancel: h.func,
        onShippingAddressChange: h.func,
        onShippingRateChange: h.func,
        options: h.object
      }, a.displayName = i, a.__elementType = e, a
    },
    B = "undefined" == typeof window,
    U = t.createContext(null);
  U.displayName = "EmbeddedCheckoutProviderContext";
  var Y = function() {
      var e = t.useContext(U);
      if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
      return e
    },
    j = B ? function(e) {
      var n = e.id,
        r = e.className;
      return Y(), t.createElement("div", {
        id: n,
        className: r
      })
    } : function(e) {
      var n = e.id,
        r = e.className,
        i = Y().embeddedCheckout,
        a = t.useRef(!1),
        o = t.useRef(null);
      return t.useLayoutEffect(function() {
        return !a.current && i && null !== o.current && (i.mount(o.current), a.current = !0),
          function() {
            if (a.current && i) try {
              i.unmount(), a.current = !1
            } catch (e) {}
          }
      }, [i]), t.createElement("div", {
        ref: o,
        id: n,
        className: r
      })
    },
    z = F("auBankAccount", B),
    H = F("card", B),
    G = F("cardNumber", B),
    V = F("cardExpiry", B),
    $ = F("cardCvc", B),
    W = F("fpxBank", B),
    K = F("iban", B),
    q = F("idealBank", B),
    Q = F("p24Bank", B),
    Z = F("epsBank", B),
    X = F("payment", B),
    J = F("expressCheckout", B),
    ee = F("paymentRequestButton", B),
    et = F("linkAuthentication", B),
    en = F("address", B),
    er = F("shippingAddress", B),
    ei = F("paymentMethodMessaging", B),
    ea = F("affirmMessage", B),
    eo = F("afterpayClearpayMessage", B);
  e.AddressElement = en, e.AffirmMessageElement = ea, e.AfterpayClearpayMessageElement = eo, e.AuBankAccountElement = z, e.CardCvcElement = $, e.CardElement = H, e.CardExpiryElement = V, e.CardNumberElement = G, e.CustomCheckoutProvider = L, e.Elements = D, e.ElementsConsumer = M, e.EmbeddedCheckout = j, e.EmbeddedCheckoutProvider = function(e) {
    var n = e.stripe,
      r = e.options,
      i = e.children,
      a = t.useMemo(function() {
        return x(n, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
      }, [n]),
      s = t.useRef(null),
      u = t.useRef(null),
      c = o(t.useState({
        embeddedCheckout: null
      }), 2),
      l = c[0],
      d = c[1];
    t.useEffect(function() {
      if (!u.current && !s.current) {
        var e = function(e) {
          !u.current && !s.current && (u.current = e, s.current = u.current.initEmbeddedCheckout(r).then(function(e) {
            d({
              embeddedCheckout: e
            })
          }))
        };
        "async" === a.tag && !u.current && (r.clientSecret || r.fetchClientSecret) ? a.stripePromise.then(function(t) {
          t && e(t)
        }) : "sync" === a.tag && !u.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe)
      }
    }, [a, r, l, u]), t.useEffect(function() {
      return function() {
        l.embeddedCheckout ? (s.current = null, l.embeddedCheckout.destroy()) : s.current && s.current.then(function() {
          s.current = null, l.embeddedCheckout && l.embeddedCheckout.destroy()
        })
      }
    }, [l.embeddedCheckout]), t.useEffect(function() {
      w(u)
    }, [u]);
    var f = g(n);
    t.useEffect(function() {
      null !== f && f !== n && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")
    }, [f, n]);
    var p = g(r);
    return t.useEffect(function() {
      if (null != p) {
        if (null == r) {
          console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
          return
        }
        void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."), null != p.clientSecret && r.clientSecret !== p.clientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.fetchClientSecret && r.fetchClientSecret !== p.fetchClientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.onComplete && r.onComplete !== p.onComplete && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.")
      }
    }, [p, r]), t.createElement(U.Provider, {
      value: l
    }, i)
  }, e.EpsBankElement = Z, e.ExpressCheckoutElement = J, e.FpxBankElement = W, e.IbanElement = K, e.IdealBankElement = q, e.LinkAuthenticationElement = et, e.P24BankElement = Q, e.PaymentElement = X, e.PaymentMethodMessagingElement = ei, e.PaymentRequestButtonElement = ee, e.ShippingAddressElement = er, e.useCustomCheckout = function() {
    e = "calls useCustomCheckout()", R(t.useContext(k), e);
    var e, n = t.useContext(N);
    if (!n) throw Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");
    return n
  }, e.useElements = function() {
    return O("calls useElements()").elements
  }, e.useStripe = function() {
    return P("calls useStripe()").stripe
  }
}, "object" == typeof t ? i(t, n("470079")) : "function" == typeof define && define.amd ? define(["exports", "react"], i) : i((r = "undefined" != typeof globalThis ? globalThis : r || self).ReactStripe = {}, r.React)