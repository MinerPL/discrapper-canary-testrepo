var r;
r = 0, function (e, t) {
    function n(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? n(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
        }
        return e;
    }
    function i(e) {
        return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
            return typeof e;
        } : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
    }
    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function o(e, t) {
        return function (e) {
            if (Array.isArray(e))
                return e;
        }(e) || function (e, t) {
            var n, r, i = e && ('undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator']);
            if (null != i) {
                var a = [], o = !0, s = !1;
                try {
                    for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
                } catch (e) {
                    s = !0, r = e;
                } finally {
                    try {
                        !o && null != i.return && i.return();
                    } finally {
                        if (s)
                            throw r;
                    }
                }
                return a;
            }
        }(e, t) || function (e, t) {
            if (e) {
                if ('string' == typeof e)
                    return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)
                    return Array.from(e);
                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return s(e, t);
            }
        }(e, t) || function () {
            throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++)
            r[n] = e[n];
        return r;
    }
    var l, u, c, d, _, E = { exports: {} };
    E.exports = function () {
        if (_)
            return d;
        _ = 1;
        var e = c ? u : (c = 1, u = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        function t() {
        }
        function n() {
        }
        return n.resetWarningCache = t, d = function () {
            function r(t, n, r, i, a, o) {
                if (o !== e) {
                    var s = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                    throw s.name = 'Invariant Violation', s;
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
            return a.PropTypes = a, a;
        };
    }()();
    var f = (l = E.exports) && l.__esModule && Object.prototype.hasOwnProperty.call(l, 'default') ? l.default : l, h = function (e, n, r) {
            var i = !!r, a = t.useRef(r);
            t.useEffect(function () {
                a.current = r;
            }, [r]), t.useEffect(function () {
                if (!i || !e)
                    return function () {
                    };
                var t = function () {
                    a.current && a.current.apply(a, arguments);
                };
                return e.on(n, t), function () {
                    e.off(n, t);
                };
            }, [
                i,
                n,
                e,
                a
            ]);
        }, p = function (e) {
            var n = t.useRef(e);
            return t.useEffect(function () {
                n.current = e;
            }, [e]), n.current;
        }, m = function (e) {
            return null !== e && 'object' === i(e);
        }, I = '[object Object]', T = function e(t, n) {
            if (!m(t) || !m(n))
                return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n))
                return !1;
            var i = Object.prototype.toString.call(t) === I;
            if (i !== (Object.prototype.toString.call(n) === I))
                return !1;
            if (!i && !r)
                return t === n;
            var a = Object.keys(t), o = Object.keys(n);
            if (a.length !== o.length)
                return !1;
            for (var s = {}, l = 0; l < a.length; l += 1)
                s[a[l]] = !0;
            for (var u = 0; u < o.length; u += 1)
                s[o[u]] = !0;
            var c = Object.keys(s);
            return c.length === a.length && c.every(function (r) {
                return e(t[r], n[r]);
            });
        }, g = function (e, t, n) {
            return m(e) ? Object.keys(e).reduce(function (i, o) {
                var s = !m(t) || !T(e[o], t[o]);
                return n.includes(o) ? (s && console.warn('Unsupported prop change: options.'.concat(o, ' is not a mutable property.')), i) : s ? r(r({}, i || {}), {}, a({}, o, e[o])) : i;
            }, null) : null;
        }, S = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.', A = function (e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
            if (null === e || m(t = e) && 'function' == typeof t.elements && 'function' == typeof t.createToken && 'function' == typeof t.createPaymentMethod && 'function' == typeof t.confirmCardPayment)
                return e;
            throw Error(n);
        }, N = function (e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
            if (m(t = e) && 'function' == typeof t.then)
                return {
                    tag: 'async',
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return A(e, n);
                    })
                };
            var r = A(e, n);
            return null === r ? { tag: 'empty' } : {
                tag: 'sync',
                stripe: r
            };
        }, v = function (e) {
            if (!!e && !!e._registerWrapper && !!e.registerAppInfo)
                e._registerWrapper({
                    name: 'react-stripe-js',
                    version: '2.7.0'
                }), e.registerAppInfo({
                    name: 'react-stripe-js',
                    version: '2.7.0',
                    url: 'https://stripe.com/docs/stripe-js/react'
                });
        }, O = t.createContext(null);
    O.displayName = 'ElementsContext';
    var R = function (e, t) {
            if (!e)
                throw Error('Could not find Elements context; You need to wrap the part of your app that '.concat(t, ' in an <Elements> provider.'));
            return e;
        }, C = function (e) {
            var n = e.stripe, r = e.options, i = e.children, a = t.useMemo(function () {
                    return N(n);
                }, [n]), s = o(t.useState(function () {
                    return {
                        stripe: 'sync' === a.tag ? a.stripe : null,
                        elements: 'sync' === a.tag ? a.stripe.elements(r) : null
                    };
                }), 2), l = s[0], u = s[1];
            t.useEffect(function () {
                var e = !0, t = function (e) {
                        u(function (t) {
                            return t.stripe ? t : {
                                stripe: e,
                                elements: e.elements(r)
                            };
                        });
                    };
                return 'async' !== a.tag || l.stripe ? 'sync' === a.tag && !l.stripe && t(a.stripe) : a.stripePromise.then(function (n) {
                    n && e && t(n);
                }), function () {
                    e = !1;
                };
            }, [
                a,
                l,
                r
            ]);
            var c = p(n);
            t.useEffect(function () {
                null !== c && c !== n && console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
            }, [
                c,
                n
            ]);
            var d = p(r);
            return t.useEffect(function () {
                if (!!l.elements) {
                    var e = g(r, d, [
                        'clientSecret',
                        'fonts'
                    ]);
                    e && l.elements.update(e);
                }
            }, [
                r,
                d,
                l.elements
            ]), t.useEffect(function () {
                v(l.stripe);
            }, [l.stripe]), t.createElement(O.Provider, { value: l }, i);
        };
    C.propTypes = {
        stripe: f.any,
        options: f.object
    };
    var y = function (e) {
            return R(t.useContext(O), e);
        }, D = function (e) {
            return (0, e.children)(y('mounts <ElementsConsumer>'));
        };
    D.propTypes = { children: f.func.isRequired };
    var L = [
            'on',
            'session'
        ], b = t.createContext(null);
    b.displayName = 'CustomCheckoutSdkContext';
    var M = function (e, t) {
            if (!e)
                throw Error('Could not find CustomCheckoutProvider context; You need to wrap the part of your app that '.concat(t, ' in an <CustomCheckoutProvider> provider.'));
            return e;
        }, P = t.createContext(null);
    P.displayName = 'CustomCheckoutContext';
    var U = function (e, t) {
            if (!e)
                return null;
            e.on, e.session;
            var n = function (e, t) {
                if (null == e)
                    return {};
                var n, r, i = function (e, t) {
                        if (null == e)
                            return {};
                        var n, r, i = {}, a = Object.keys(e);
                        for (r = 0; r < a.length; r++)
                            n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
                        return i;
                    }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        if (n = a[r], !(t.indexOf(n) >= 0))
                            Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                }
                return i;
            }(e, L);
            return t ? r(r({}, n), t) : r(r({}, n), e.session());
        }, w = function (e) {
            var n = e.stripe, r = e.options, i = e.children, a = t.useMemo(function () {
                    return N(n, 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.');
                }, [n]), s = o(t.useState(null), 2), l = s[0], u = s[1], c = o(t.useState(function () {
                    return {
                        stripe: 'sync' === a.tag ? a.stripe : null,
                        customCheckoutSdk: null
                    };
                }), 2), d = c[0], _ = c[1], E = function (e, t) {
                    _(function (n) {
                        return n.stripe && n.customCheckoutSdk ? n : {
                            stripe: e,
                            customCheckoutSdk: t
                        };
                    });
                }, f = t.useRef(!1);
            t.useEffect(function () {
                var e = !0;
                return 'async' !== a.tag || d.stripe ? 'sync' === a.tag && a.stripe && !f.current && (f.current = !0, a.stripe.initCustomCheckout(r).then(function (e) {
                    e && (E(a.stripe, e), e.on('change', u));
                })) : a.stripePromise.then(function (t) {
                    t && e && !f.current && (f.current = !0, t.initCustomCheckout(r).then(function (e) {
                        e && (E(t, e), e.on('change', u));
                    }));
                }), function () {
                    e = !1;
                };
            }, [
                a,
                d,
                r,
                u
            ]);
            var h = p(n);
            t.useEffect(function () {
                null !== h && h !== n && console.warn('Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.');
            }, [
                h,
                n
            ]);
            var I = p(r);
            t.useEffect(function () {
                if (!!d.customCheckoutSdk) {
                    r.clientSecret && !m(I) && !T(r.clientSecret, I.clientSecret) && console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
                    var e, t, n = null == I ? void 0 : null === (e = I.elementsOptions) || void 0 === e ? void 0 : e.appearance, i = null == r ? void 0 : null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                    i && !T(i, n) && d.customCheckoutSdk.changeAppearance(i);
                }
            }, [
                r,
                I,
                d.customCheckoutSdk
            ]), t.useEffect(function () {
                v(d.stripe);
            }, [d.stripe]);
            var g = t.useMemo(function () {
                return U(d.customCheckoutSdk, l);
            }, [
                d.customCheckoutSdk,
                l
            ]);
            return d.customCheckoutSdk ? t.createElement(b.Provider, { value: d }, t.createElement(P.Provider, { value: g }, i)) : null;
        };
    w.propTypes = {
        stripe: f.any,
        options: f.shape({
            clientSecret: f.string.isRequired,
            elementsOptions: f.object
        }).isRequired
    };
    var x = function (e) {
            var n = t.useContext(b), r = t.useContext(O);
            if (n && r)
                throw Error('You cannot wrap the part of your app that '.concat(e, ' in both <CustomCheckoutProvider> and <Elements> providers.'));
            return n ? M(n, e) : R(r, e);
        }, G = function (e, n) {
            var r, i = ''.concat((r = e).charAt(0).toUpperCase() + r.slice(1), 'Element'), a = n ? function (e) {
                    x('mounts <'.concat(i, '>'));
                    var n = e.id, r = e.className;
                    return t.createElement('div', {
                        id: n,
                        className: r
                    });
                } : function (n) {
                    var r, a = n.id, s = n.className, l = n.options, u = void 0 === l ? {} : l, c = n.onBlur, d = n.onFocus, _ = n.onReady, E = n.onChange, f = n.onEscape, m = n.onClick, I = n.onLoadError, T = n.onLoaderStart, S = n.onNetworksChange, A = n.onConfirm, N = n.onCancel, v = n.onShippingAddressChange, O = n.onShippingRateChange, R = x('mounts <'.concat(i, '>')), C = 'elements' in R ? R.elements : null, y = 'customCheckoutSdk' in R ? R.customCheckoutSdk : null, D = o(t.useState(null), 2), L = D[0], b = D[1], M = t.useRef(null), P = t.useRef(null);
                    h(L, 'blur', c), h(L, 'focus', d), h(L, 'escape', f), h(L, 'click', m), h(L, 'loaderror', I), h(L, 'loaderstart', T), h(L, 'networkschange', S), h(L, 'confirm', A), h(L, 'cancel', N), h(L, 'shippingaddresschange', v), h(L, 'shippingratechange', O), h(L, 'change', E), _ && (r = 'expressCheckout' === e ? _ : function () {
                        _(L);
                    }), h(L, 'ready', r), t.useLayoutEffect(function () {
                        if (null === M.current && null !== P.current && (C || y)) {
                            var t = null;
                            y ? t = y.createElement(e, u) : C && (t = C.create(e, u)), M.current = t, b(t), t && t.mount(P.current);
                        }
                    }, [
                        C,
                        y,
                        u
                    ]);
                    var U = p(u);
                    return t.useEffect(function () {
                        if (!!M.current) {
                            var e = g(u, U, ['paymentRequest']);
                            e && M.current.update(e);
                        }
                    }, [
                        u,
                        U
                    ]), t.useLayoutEffect(function () {
                        return function () {
                            if (M.current && 'function' == typeof M.current.destroy)
                                try {
                                    M.current.destroy(), M.current = null;
                                } catch (e) {
                                }
                        };
                    }, []), t.createElement('div', {
                        id: a,
                        className: s,
                        ref: P
                    });
                };
            return a.propTypes = {
                id: f.string,
                className: f.string,
                onChange: f.func,
                onBlur: f.func,
                onFocus: f.func,
                onReady: f.func,
                onEscape: f.func,
                onClick: f.func,
                onLoadError: f.func,
                onLoaderStart: f.func,
                onNetworksChange: f.func,
                onConfirm: f.func,
                onCancel: f.func,
                onShippingAddressChange: f.func,
                onShippingRateChange: f.func,
                options: f.object
            }, a.displayName = i, a.__elementType = e, a;
        }, k = 'undefined' == typeof window, B = t.createContext(null);
    B.displayName = 'EmbeddedCheckoutProviderContext';
    var F = function () {
            var e = t.useContext(B);
            if (!e)
                throw Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
            return e;
        }, V = k ? function (e) {
            var n = e.id, r = e.className;
            return F(), t.createElement('div', {
                id: n,
                className: r
            });
        } : function (e) {
            var n = e.id, r = e.className, i = F().embeddedCheckout, a = t.useRef(!1), o = t.useRef(null);
            return t.useLayoutEffect(function () {
                return !a.current && i && null !== o.current && (i.mount(o.current), a.current = !0), function () {
                    if (a.current && i)
                        try {
                            i.unmount(), a.current = !1;
                        } catch (e) {
                        }
                };
            }, [i]), t.createElement('div', {
                ref: o,
                id: n,
                className: r
            });
        }, H = G('auBankAccount', k), Z = G('card', k), Y = G('cardNumber', k), j = G('cardExpiry', k), W = G('cardCvc', k), K = G('fpxBank', k), z = G('iban', k), q = G('idealBank', k), Q = G('p24Bank', k), X = G('epsBank', k), $ = G('payment', k), J = G('expressCheckout', k), ee = G('paymentRequestButton', k), et = G('linkAuthentication', k), en = G('address', k), er = G('shippingAddress', k), ei = G('paymentMethodMessaging', k), ea = G('affirmMessage', k), eo = G('afterpayClearpayMessage', k);
    e.AddressElement = en, e.AffirmMessageElement = ea, e.AfterpayClearpayMessageElement = eo, e.AuBankAccountElement = H, e.CardCvcElement = W, e.CardElement = Z, e.CardExpiryElement = j, e.CardNumberElement = Y, e.CustomCheckoutProvider = w, e.Elements = C, e.ElementsConsumer = D, e.EmbeddedCheckout = V, e.EmbeddedCheckoutProvider = function (e) {
        var n = e.stripe, r = e.options, i = e.children, a = t.useMemo(function () {
                return N(n, 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.');
            }, [n]), s = t.useRef(null), l = t.useRef(null), u = o(t.useState({ embeddedCheckout: null }), 2), c = u[0], d = u[1];
        t.useEffect(function () {
            if (!l.current && !s.current) {
                var e = function (e) {
                    !l.current && !s.current && (l.current = e, s.current = l.current.initEmbeddedCheckout(r).then(function (e) {
                        d({ embeddedCheckout: e });
                    }));
                };
                'async' === a.tag && !l.current && (r.clientSecret || r.fetchClientSecret) ? a.stripePromise.then(function (t) {
                    t && e(t);
                }) : 'sync' === a.tag && !l.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe);
            }
        }, [
            a,
            r,
            c,
            l
        ]), t.useEffect(function () {
            return function () {
                c.embeddedCheckout ? (s.current = null, c.embeddedCheckout.destroy()) : s.current && s.current.then(function () {
                    s.current = null, c.embeddedCheckout && c.embeddedCheckout.destroy();
                });
            };
        }, [c.embeddedCheckout]), t.useEffect(function () {
            v(l);
        }, [l]);
        var _ = p(n);
        t.useEffect(function () {
            null !== _ && _ !== n && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
        }, [
            _,
            n
        ]);
        var E = p(r);
        return t.useEffect(function () {
            if (null != E) {
                if (null == r) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
                    return;
                }
                void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn('Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.'), null != E.clientSecret && r.clientSecret !== E.clientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != E.fetchClientSecret && r.fetchClientSecret !== E.fetchClientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != E.onComplete && r.onComplete !== E.onComplete && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
            }
        }, [
            E,
            r
        ]), t.createElement(B.Provider, { value: c }, i);
    }, e.EpsBankElement = X, e.ExpressCheckoutElement = J, e.FpxBankElement = K, e.IbanElement = z, e.IdealBankElement = q, e.LinkAuthenticationElement = et, e.P24BankElement = Q, e.PaymentElement = $, e.PaymentMethodMessagingElement = ei, e.PaymentRequestButtonElement = ee, e.ShippingAddressElement = er, e.useCustomCheckout = function () {
        e = 'calls useCustomCheckout()', M(t.useContext(b), e);
        var e, n = t.useContext(P);
        if (!n)
            throw Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
        return n;
    }, e.useElements = function () {
        return y('calls useElements()').elements;
    }, e.useStripe = function () {
        return x('calls useStripe()').stripe;
    };
}(t, n(470079));
