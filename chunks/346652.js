r.d(t, {
    L: function () {
        return E;
    }
});
var a = r(599295),
    n = r(383237),
    s = r(521464),
    o = r(157680),
    i = r(337309),
    c = r(774375),
    u = r(748024),
    l = r(692378),
    b = r(922474),
    f = r(470079),
    d = r(639519),
    h = r.n(d),
    p = r(852153),
    y = r(140201),
    g = r(667929),
    v = ['data', 'keyPath', 'postprocessValue', 'hideRoot', 'theme', 'invertTheme'];
function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? m(Object(r), !0).forEach(function (t) {
                  (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var w = function (e) {
    return e;
};
function k(e) {
    var t,
        r,
        a,
        n,
        s =
            ((t = e.theme),
            (r = e),
            (n = Object.keys(
                (a = {
                    getArrowStyle: 'arrow',
                    getListStyle: 'nestedNodeChildren',
                    getItemStringStyle: 'nestedNodeItemString',
                    getLabelStyle: 'label',
                    getValueStyle: 'valueText'
                })
            ).filter(function (e) {
                return r[e];
            })).length > 0 &&
                ((t = 'string' == typeof t ? { extend: t } : O({}, t)),
                n.forEach(function (e) {
                    console.error('Styling method "'.concat(e, '" is deprecated, use "theme" property instead')),
                        (t[a[e]] = function (t) {
                            for (var a = t.style, n = arguments.length, s = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) s[o - 1] = arguments[o];
                            return { style: O(O({}, a), r[e].apply(r, s)) };
                        });
                })),
            t);
    return e.invertTheme && (s = (0, g.y7)(s)), { styling: (0, y.Z)(s) };
}
var E = (function (e) {
    (0, i.Z)(b, e);
    var t,
        r,
        l =
            ((t = b),
            (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    a = (0, u.Z)(t);
                return (e = r ? Reflect.construct(a, arguments, (0, u.Z)(this).constructor) : a.apply(this, arguments)), (0, c.Z)(this, e);
            });
    function b(e) {
        var t;
        return (0, s.Z)(this, b), ((t = l.call(this, e)).state = k(e)), t;
    }
    return (
        (0, o.Z)(b, [
            {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                    var t = this;
                    ['theme', 'invertTheme'].find(function (r) {
                        return e[r] !== t.props[r];
                    }) && this.setState(k(e));
                }
            },
            {
                key: 'shouldComponentUpdate',
                value: function (e) {
                    var t = this;
                    return !!Object.keys(e).find(function (r) {
                        return 'keyPath' === r ? e[r].join('/') !== t.props[r].join('/') : e[r] !== t.props[r];
                    });
                }
            },
            {
                key: 'render',
                value: function () {
                    var e = this.props,
                        t = e.data,
                        r = e.keyPath,
                        s = e.postprocessValue,
                        o = e.hideRoot,
                        i = (e.theme, e.invertTheme, (0, n.Z)(e, v)),
                        c = this.state.styling;
                    return f.createElement(
                        'ul',
                        c('tree'),
                        f.createElement(
                            p.Z,
                            (0, a.Z)(
                                {},
                                O(
                                    {
                                        postprocessValue: s,
                                        hideRoot: o,
                                        styling: c
                                    },
                                    i
                                ),
                                {
                                    keyPath: o ? [] : r,
                                    value: s(t)
                                }
                            )
                        )
                    );
                }
            }
        ]),
        b
    );
})(f.Component);
(0, l.Z)(E, 'propTypes', {
    data: h().any,
    hideRoot: h().bool,
    theme: h().oneOfType([h().object, h().string]),
    invertTheme: h().bool,
    keyPath: h().arrayOf(h().oneOfType([h().string, h().number])),
    postprocessValue: h().func,
    sortObjectKeys: h().oneOfType([h().func, h().bool])
}),
    (0, l.Z)(E, 'defaultProps', {
        shouldExpandNode: function (e, t, r) {
            return 0 === r;
        },
        hideRoot: !1,
        keyPath: ['root'],
        getItemString: function (e, t, r, a) {
            return f.createElement('span', null, r, ' ', a);
        },
        labelRenderer: function (e) {
            var t = (0, b.Z)(e, 1)[0];
            return f.createElement('span', null, t, ':');
        },
        valueRenderer: w,
        postprocessValue: w,
        isCustomNode: function () {
            return !1;
        },
        collectionLimit: 50,
        invertTheme: !0
    });
