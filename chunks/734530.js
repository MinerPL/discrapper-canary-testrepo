var r;
(r = 0),
    (function (e, t) {
        function n(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? n(Object(r), !0).forEach(function (t) {
                          a(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : n(Object(r)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
            }
            return e;
        }
        function i(e) {
            return (i =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        function a(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (e[t] = n),
                e
            );
        }
        function s(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    var n,
                        r,
                        i = e && (('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']);
                    if (null != i) {
                        var a = [],
                            s = !0,
                            o = !1;
                        try {
                            for (i = i.call(e); !(s = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                        } catch (e) {
                            (o = !0), (r = e);
                        } finally {
                            try {
                                !s && null != i.return && i.return();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        return a;
                    }
                })(e, t) ||
                (function (e, t) {
                    if (e) {
                        if ('string' == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
                    }
                })(e, t) ||
                (function () {
                    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                })()
            );
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var l,
            u,
            c,
            d,
            f,
            _ = { exports: {} };
        _.exports = (function () {
            if (f) return d;
            f = 1;
            var e = c ? u : ((c = 1), (u = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'));
            function t() {}
            function n() {}
            return (
                (n.resetWarningCache = t),
                (d = function () {
                    function r(t, n, r, i, a, s) {
                        if (s !== e) {
                            var o = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                            throw ((o.name = 'Invariant Violation'), o);
                        }
                    }
                    function i() {
                        return r;
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
                    return (a.PropTypes = a), a;
                })
            );
        })()();
        var h = (l = _.exports) && l.__esModule && Object.prototype.hasOwnProperty.call(l, 'default') ? l.default : l,
            p = function (e, n, r) {
                var i = !!r,
                    a = t.useRef(r);
                t.useEffect(
                    function () {
                        a.current = r;
                    },
                    [r]
                ),
                    t.useEffect(
                        function () {
                            if (!i || !e) return function () {};
                            var t = function () {
                                a.current && a.current.apply(a, arguments);
                            };
                            return (
                                e.on(n, t),
                                function () {
                                    e.off(n, t);
                                }
                            );
                        },
                        [i, n, e, a]
                    );
            },
            m = function (e) {
                var n = t.useRef(e);
                return (
                    t.useEffect(
                        function () {
                            n.current = e;
                        },
                        [e]
                    ),
                    n.current
                );
            },
            g = function (e) {
                return null !== e && 'object' === i(e);
            },
            E = '[object Object]',
            v = function e(t, n) {
                if (!g(t) || !g(n)) return t === n;
                var r = Array.isArray(t);
                if (r !== Array.isArray(n)) return !1;
                var i = Object.prototype.toString.call(t) === E;
                if (i !== (Object.prototype.toString.call(n) === E)) return !1;
                if (!i && !r) return t === n;
                var a = Object.keys(t),
                    s = Object.keys(n);
                if (a.length !== s.length) return !1;
                for (var o = {}, l = 0; l < a.length; l += 1) o[a[l]] = !0;
                for (var u = 0; u < s.length; u += 1) o[s[u]] = !0;
                var c = Object.keys(o);
                return (
                    c.length === a.length &&
                    c.every(function (r) {
                        return e(t[r], n[r]);
                    })
                );
            },
            I = function (e, t, n) {
                return g(e)
                    ? Object.keys(e).reduce(function (i, s) {
                          var o = !g(t) || !v(e[s], t[s]);
                          return n.includes(s) ? (o && console.warn('Unsupported prop change: options.'.concat(s, ' is not a mutable property.')), i) : o ? r(r({}, i || {}), {}, a({}, s, e[s])) : i;
                      }, null)
                    : null;
            },
            S = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
            T = function (e) {
                var t,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
                if (null === e || (g((t = e)) && 'function' == typeof t.elements && 'function' == typeof t.createToken && 'function' == typeof t.createPaymentMethod && 'function' == typeof t.confirmCardPayment)) return e;
                throw Error(n);
            },
            b = function (e) {
                var t,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
                if (g((t = e)) && 'function' == typeof t.then)
                    return {
                        tag: 'async',
                        stripePromise: Promise.resolve(e).then(function (e) {
                            return T(e, n);
                        })
                    };
                var r = T(e, n);
                return null === r
                    ? { tag: 'empty' }
                    : {
                          tag: 'sync',
                          stripe: r
                      };
            },
            y = function (e) {
                if (!!e && !!e._registerWrapper && !!e.registerAppInfo)
                    e._registerWrapper({
                        name: 'react-stripe-js',
                        version: '2.7.0'
                    }),
                        e.registerAppInfo({
                            name: 'react-stripe-js',
                            version: '2.7.0',
                            url: 'https://stripe.com/docs/stripe-js/react'
                        });
            },
            A = t.createContext(null);
        A.displayName = 'ElementsContext';
        var N = function (e, t) {
                if (!e) throw Error('Could not find Elements context; You need to wrap the part of your app that '.concat(t, ' in an <Elements> provider.'));
                return e;
            },
            C = function (e) {
                var n = e.stripe,
                    r = e.options,
                    i = e.children,
                    a = t.useMemo(
                        function () {
                            return b(n);
                        },
                        [n]
                    ),
                    o = s(
                        t.useState(function () {
                            return {
                                stripe: 'sync' === a.tag ? a.stripe : null,
                                elements: 'sync' === a.tag ? a.stripe.elements(r) : null
                            };
                        }),
                        2
                    ),
                    l = o[0],
                    u = o[1];
                t.useEffect(
                    function () {
                        var e = !0,
                            t = function (e) {
                                u(function (t) {
                                    return t.stripe
                                        ? t
                                        : {
                                              stripe: e,
                                              elements: e.elements(r)
                                          };
                                });
                            };
                        return (
                            'async' !== a.tag || l.stripe
                                ? 'sync' === a.tag && !l.stripe && t(a.stripe)
                                : a.stripePromise.then(function (n) {
                                      n && e && t(n);
                                  }),
                            function () {
                                e = !1;
                            }
                        );
                    },
                    [a, l, r]
                );
                var c = m(n);
                t.useEffect(
                    function () {
                        null !== c && c !== n && console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
                    },
                    [c, n]
                );
                var d = m(r);
                return (
                    t.useEffect(
                        function () {
                            if (!!l.elements) {
                                var e = I(r, d, ['clientSecret', 'fonts']);
                                e && l.elements.update(e);
                            }
                        },
                        [r, d, l.elements]
                    ),
                    t.useEffect(
                        function () {
                            y(l.stripe);
                        },
                        [l.stripe]
                    ),
                    t.createElement(A.Provider, { value: l }, i)
                );
            };
        C.propTypes = {
            stripe: h.any,
            options: h.object
        };
        var R = function (e) {
                return N(t.useContext(A), e);
            },
            O = function (e) {
                return (0, e.children)(R('mounts <ElementsConsumer>'));
            };
        O.propTypes = { children: h.func.isRequired };
        var D = ['on', 'session'],
            L = t.createContext(null);
        L.displayName = 'CustomCheckoutSdkContext';
        var x = function (e, t) {
                if (!e) throw Error('Could not find CustomCheckoutProvider context; You need to wrap the part of your app that '.concat(t, ' in an <CustomCheckoutProvider> provider.'));
                return e;
            },
            w = t.createContext(null);
        w.displayName = 'CustomCheckoutContext';
        var M = function (e, t) {
                if (!e) return null;
                e.on, e.session;
                var n = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) {
                            if (((n = a[r]), !(t.indexOf(n) >= 0))) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                    }
                    return i;
                })(e, D);
                return t ? r(r({}, n), t) : r(r({}, n), e.session());
            },
            P = function (e) {
                var n = e.stripe,
                    r = e.options,
                    i = e.children,
                    a = t.useMemo(
                        function () {
                            return b(n, 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.');
                        },
                        [n]
                    ),
                    o = s(t.useState(null), 2),
                    l = o[0],
                    u = o[1],
                    c = s(
                        t.useState(function () {
                            return {
                                stripe: 'sync' === a.tag ? a.stripe : null,
                                customCheckoutSdk: null
                            };
                        }),
                        2
                    ),
                    d = c[0],
                    f = c[1],
                    _ = function (e, t) {
                        f(function (n) {
                            return n.stripe && n.customCheckoutSdk
                                ? n
                                : {
                                      stripe: e,
                                      customCheckoutSdk: t
                                  };
                        });
                    },
                    h = t.useRef(!1);
                t.useEffect(
                    function () {
                        var e = !0;
                        return (
                            'async' !== a.tag || d.stripe
                                ? 'sync' === a.tag &&
                                  a.stripe &&
                                  !h.current &&
                                  ((h.current = !0),
                                  a.stripe.initCustomCheckout(r).then(function (e) {
                                      e && (_(a.stripe, e), e.on('change', u));
                                  }))
                                : a.stripePromise.then(function (t) {
                                      t &&
                                          e &&
                                          !h.current &&
                                          ((h.current = !0),
                                          t.initCustomCheckout(r).then(function (e) {
                                              e && (_(t, e), e.on('change', u));
                                          }));
                                  }),
                            function () {
                                e = !1;
                            }
                        );
                    },
                    [a, d, r, u]
                );
                var p = m(n);
                t.useEffect(
                    function () {
                        null !== p && p !== n && console.warn('Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                    },
                    [p, n]
                );
                var E = m(r);
                t.useEffect(
                    function () {
                        if (!!d.customCheckoutSdk) {
                            r.clientSecret && !g(E) && !v(r.clientSecret, E.clientSecret) && console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
                            var e,
                                t,
                                n = null == E ? void 0 : null === (e = E.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                                i = null == r ? void 0 : null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                            i && !v(i, n) && d.customCheckoutSdk.changeAppearance(i);
                        }
                    },
                    [r, E, d.customCheckoutSdk]
                ),
                    t.useEffect(
                        function () {
                            y(d.stripe);
                        },
                        [d.stripe]
                    );
                var I = t.useMemo(
                    function () {
                        return M(d.customCheckoutSdk, l);
                    },
                    [d.customCheckoutSdk, l]
                );
                return d.customCheckoutSdk ? t.createElement(L.Provider, { value: d }, t.createElement(w.Provider, { value: I }, i)) : null;
            };
        P.propTypes = {
            stripe: h.any,
            options: h.shape({
                clientSecret: h.string.isRequired,
                elementsOptions: h.object
            }).isRequired
        };
        var k = function (e) {
                var n = t.useContext(L),
                    r = t.useContext(A);
                if (n && r) throw Error('You cannot wrap the part of your app that '.concat(e, ' in both <CustomCheckoutProvider> and <Elements> providers.'));
                return n ? x(n, e) : N(r, e);
            },
            U = function (e, n) {
                var r,
                    i = ''.concat((r = e).charAt(0).toUpperCase() + r.slice(1), 'Element'),
                    a = n
                        ? function (e) {
                              k('mounts <'.concat(i, '>'));
                              var n = e.id,
                                  r = e.className;
                              return t.createElement('div', {
                                  id: n,
                                  className: r
                              });
                          }
                        : function (n) {
                              var r,
                                  a = n.id,
                                  o = n.className,
                                  l = n.options,
                                  u = void 0 === l ? {} : l,
                                  c = n.onBlur,
                                  d = n.onFocus,
                                  f = n.onReady,
                                  _ = n.onChange,
                                  h = n.onEscape,
                                  g = n.onClick,
                                  E = n.onLoadError,
                                  v = n.onLoaderStart,
                                  S = n.onNetworksChange,
                                  T = n.onConfirm,
                                  b = n.onCancel,
                                  y = n.onShippingAddressChange,
                                  A = n.onShippingRateChange,
                                  N = k('mounts <'.concat(i, '>')),
                                  C = 'elements' in N ? N.elements : null,
                                  R = 'customCheckoutSdk' in N ? N.customCheckoutSdk : null,
                                  O = s(t.useState(null), 2),
                                  D = O[0],
                                  L = O[1],
                                  x = t.useRef(null),
                                  w = t.useRef(null);
                              p(D, 'blur', c),
                                  p(D, 'focus', d),
                                  p(D, 'escape', h),
                                  p(D, 'click', g),
                                  p(D, 'loaderror', E),
                                  p(D, 'loaderstart', v),
                                  p(D, 'networkschange', S),
                                  p(D, 'confirm', T),
                                  p(D, 'cancel', b),
                                  p(D, 'shippingaddresschange', y),
                                  p(D, 'shippingratechange', A),
                                  p(D, 'change', _),
                                  f &&
                                      (r =
                                          'expressCheckout' === e
                                              ? f
                                              : function () {
                                                    f(D);
                                                }),
                                  p(D, 'ready', r),
                                  t.useLayoutEffect(
                                      function () {
                                          if (null === x.current && null !== w.current && (C || R)) {
                                              var t = null;
                                              R ? (t = R.createElement(e, u)) : C && (t = C.create(e, u)), (x.current = t), L(t), t && t.mount(w.current);
                                          }
                                      },
                                      [C, R, u]
                                  );
                              var M = m(u);
                              return (
                                  t.useEffect(
                                      function () {
                                          if (!!x.current) {
                                              var e = I(u, M, ['paymentRequest']);
                                              e && x.current.update(e);
                                          }
                                      },
                                      [u, M]
                                  ),
                                  t.useLayoutEffect(function () {
                                      return function () {
                                          if (x.current && 'function' == typeof x.current.destroy)
                                              try {
                                                  x.current.destroy(), (x.current = null);
                                              } catch (e) {}
                                      };
                                  }, []),
                                  t.createElement('div', {
                                      id: a,
                                      className: o,
                                      ref: w
                                  })
                              );
                          };
                return (
                    (a.propTypes = {
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
                    }),
                    (a.displayName = i),
                    (a.__elementType = e),
                    a
                );
            },
            G = 'undefined' == typeof window,
            B = t.createContext(null);
        B.displayName = 'EmbeddedCheckoutProviderContext';
        var Z = function () {
                var e = t.useContext(B);
                if (!e) throw Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
                return e;
            },
            F = G
                ? function (e) {
                      var n = e.id,
                          r = e.className;
                      return (
                          Z(),
                          t.createElement('div', {
                              id: n,
                              className: r
                          })
                      );
                  }
                : function (e) {
                      var n = e.id,
                          r = e.className,
                          i = Z().embeddedCheckout,
                          a = t.useRef(!1),
                          s = t.useRef(null);
                      return (
                          t.useLayoutEffect(
                              function () {
                                  return (
                                      !a.current && i && null !== s.current && (i.mount(s.current), (a.current = !0)),
                                      function () {
                                          if (a.current && i)
                                              try {
                                                  i.unmount(), (a.current = !1);
                                              } catch (e) {}
                                      }
                                  );
                              },
                              [i]
                          ),
                          t.createElement('div', {
                              ref: s,
                              id: n,
                              className: r
                          })
                      );
                  },
            V = U('auBankAccount', G),
            j = U('card', G),
            H = U('cardNumber', G),
            Y = U('cardExpiry', G),
            W = U('cardCvc', G),
            K = U('fpxBank', G),
            z = U('iban', G),
            q = U('idealBank', G),
            Q = U('p24Bank', G),
            X = U('epsBank', G),
            J = U('payment', G),
            $ = U('expressCheckout', G),
            ee = U('paymentRequestButton', G),
            et = U('linkAuthentication', G),
            en = U('address', G),
            er = U('shippingAddress', G),
            ei = U('paymentMethodMessaging', G),
            ea = U('affirmMessage', G),
            es = U('afterpayClearpayMessage', G);
        (e.AddressElement = en),
            (e.AffirmMessageElement = ea),
            (e.AfterpayClearpayMessageElement = es),
            (e.AuBankAccountElement = V),
            (e.CardCvcElement = W),
            (e.CardElement = j),
            (e.CardExpiryElement = Y),
            (e.CardNumberElement = H),
            (e.CustomCheckoutProvider = P),
            (e.Elements = C),
            (e.ElementsConsumer = O),
            (e.EmbeddedCheckout = F),
            (e.EmbeddedCheckoutProvider = function (e) {
                var n = e.stripe,
                    r = e.options,
                    i = e.children,
                    a = t.useMemo(
                        function () {
                            return b(n, 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.');
                        },
                        [n]
                    ),
                    o = t.useRef(null),
                    l = t.useRef(null),
                    u = s(t.useState({ embeddedCheckout: null }), 2),
                    c = u[0],
                    d = u[1];
                t.useEffect(
                    function () {
                        if (!l.current && !o.current) {
                            var e = function (e) {
                                !l.current &&
                                    !o.current &&
                                    ((l.current = e),
                                    (o.current = l.current.initEmbeddedCheckout(r).then(function (e) {
                                        d({ embeddedCheckout: e });
                                    })));
                            };
                            'async' === a.tag && !l.current && (r.clientSecret || r.fetchClientSecret)
                                ? a.stripePromise.then(function (t) {
                                      t && e(t);
                                  })
                                : 'sync' === a.tag && !l.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe);
                        }
                    },
                    [a, r, c, l]
                ),
                    t.useEffect(
                        function () {
                            return function () {
                                c.embeddedCheckout
                                    ? ((o.current = null), c.embeddedCheckout.destroy())
                                    : o.current &&
                                      o.current.then(function () {
                                          (o.current = null), c.embeddedCheckout && c.embeddedCheckout.destroy();
                                      });
                            };
                        },
                        [c.embeddedCheckout]
                    ),
                    t.useEffect(
                        function () {
                            y(l);
                        },
                        [l]
                    );
                var f = m(n);
                t.useEffect(
                    function () {
                        null !== f && f !== n && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                    },
                    [f, n]
                );
                var _ = m(r);
                return (
                    t.useEffect(
                        function () {
                            if (null != _) {
                                if (null == r) {
                                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
                                    return;
                                }
                                void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn('Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.'), null != _.clientSecret && r.clientSecret !== _.clientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != _.fetchClientSecret && r.fetchClientSecret !== _.fetchClientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != _.onComplete && r.onComplete !== _.onComplete && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
                            }
                        },
                        [_, r]
                    ),
                    t.createElement(B.Provider, { value: c }, i)
                );
            }),
            (e.EpsBankElement = X),
            (e.ExpressCheckoutElement = $),
            (e.FpxBankElement = K),
            (e.IbanElement = z),
            (e.IdealBankElement = q),
            (e.LinkAuthenticationElement = et),
            (e.P24BankElement = Q),
            (e.PaymentElement = J),
            (e.PaymentMethodMessagingElement = ei),
            (e.PaymentRequestButtonElement = ee),
            (e.ShippingAddressElement = er),
            (e.useCustomCheckout = function () {
                (e = 'calls useCustomCheckout()'), x(t.useContext(L), e);
                var e,
                    n = t.useContext(w);
                if (!n) throw Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
                return n;
            }),
            (e.useElements = function () {
                return R('calls useElements()').elements;
            }),
            (e.useStripe = function () {
                return k('calls useStripe()').stripe;
            });
    })(t, n(192379));
