v.d(g, { h: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#ba3500', '#fd6214', '#ffb84b', '#f0f0f0'],
    r = ['#35363a', '#57595f', '#d8d8d8'],
    C = [0.05, 0.15, 0.4, 0.9],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        },
        {
            base: 3,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    n = [0.05, 0.3, 0.95],
    w = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        }
    ],
    Q = (A) => {
        var g,
            v,
            { width: Q = 24, height: D = 24, primaryTintColor: o, secondaryTintColor: s } = A,
            i = (function (A, g) {
                if (null == A) return {};
                var v,
                    B,
                    t = (function (A, g) {
                        if (null == A) return {};
                        var v,
                            B,
                            t = {},
                            e = Object.keys(A);
                        for (B = 0; B < e.length; B++) (v = e[B]), g.indexOf(v) >= 0 || (t[v] = A[v]);
                        return t;
                    })(A, g);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(A);
                    for (B = 0; B < e.length; B++) (v = e[B]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (t[v] = A[v]);
                }
                return t;
            })(A, ['width', 'height', 'primaryTintColor', 'secondaryTintColor']);
        let { primaryColorsTransformed: M, secondaryColorsTransformed: a } = (0, e.s)({
            primaryBaseColors: f,
            primaryTintColor: o,
            primaryTintLuminances: C,
            primaryLuminanceWeights: h,
            secondaryBaseColors: r,
            secondaryTintColor: s,
            secondaryTintLuminances: n,
            secondaryLuminanceWeights: w
        });
        return (0, B.jsxs)(
            'svg',
            ((g = (function (A) {
                for (var g = 1; g < arguments.length; g++) {
                    var v = null != arguments[g] ? arguments[g] : {},
                        B = Object.keys(v);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (B = B.concat(
                            Object.getOwnPropertySymbols(v).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(v, A).enumerable;
                            })
                        )),
                        B.forEach(function (g) {
                            var B;
                            (B = v[g]),
                                g in A
                                    ? Object.defineProperty(A, g, {
                                          value: B,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (A[g] = B);
                        });
                }
                return A;
            })({}, (0, t.Z)(i))),
            (v = v =
                {
                    width: Q,
                    height: D,
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, B.jsx)('path', {
                            d: 'M14 7V6h-1v1h-3V6H9V3h1V2H7v4H6v1H1v2h1v1h1V9h3v1h1v3H6v1h1v1h2v-1h1v-1H9v-3h1V9h3v1h1V9h1V7h-1Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 0H7v1h2V0ZM6 2H3v1h3V2ZM3 3H2v3h1V3ZM7 3H6v3h1V3ZM10 3H9v3h1V3ZM14 3h-1v3h1V3ZM13 2h-3v1h3V2ZM6 6H3v1h3V6ZM13 6h-3v1h3V6ZM7 1H6v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 3H5v1h1V3ZM5 4H4v1h1V4ZM13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM13 10h-1v1h1v-1ZM12 11h-1v1h1v-1ZM6 10H5v1h1v-1ZM5 11H4v1h1v-1Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 1H9v1h1V1ZM1 7H0v2h1V7Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 4v1H3v1h3V4H5ZM12 4v1h-2v1h3V4h-1ZM5 11v1H3v1h3v-2H5ZM12 11v1h-2v1h3v-2h-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 9H1v1h1V9ZM2 6H1v1h1V6ZM16 7h-1v2h1V7Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 7h-1v2h1V7Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 7H1v2h1V7Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 6h-1v1h1V6ZM15 9h-1v1h1V9Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M14 9h-1v1h1V9ZM7 9H6v1h1V9ZM3 9H2v1h1V9ZM10 9H9v1h1V9Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 15H7v1h2v-1ZM6 13H3v1h3v-1ZM3 10H2v3h1v-3ZM7 10H6v3h1v-3ZM10 10H9v3h1v-3ZM14 10h-1v3h1v-3ZM13 13h-3v1h3v-1ZM6 9H3v1h3V9ZM13 9h-3v1h3V9Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M6 8H3v1h3V8ZM13 8h-3v1h3V8Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 14H6v1h1v-1ZM10 14H9v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 14H7v1h2v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 1H7v1h2V1ZM7 2H6v1h1V1Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 13H9v1h1v-1Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 3H3v2h1V4h1V3ZM12 3h-2v2h1V4h1V3ZM5 10H3v2h1v-1h1v-1ZM12 10h-2v2h1v-1h1v-1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 5V4H8V2H7v3h2ZM9 6H8v1H7v1H6v1h1v2h1v3h1v-4H8V8h2V7H9V6ZM14 7h-1v1h1V7Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 6H6v1h1V6ZM3 7H2v1h1V7ZM5 7H4v1h1V7Z',
                            fill: M[1]
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(v))
                : (function (A, g) {
                      var v = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var B = Object.getOwnPropertySymbols(A);
                          v.push.apply(v, B);
                      }
                      return v;
                  })(Object(v)).forEach(function (A) {
                      Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(v, A));
                  }),
            g)
        );
    };
