v.d(g, { H: () => Q });
var B = v(200651);
v(192379);
var t = v(331595),
    e = v(84502);
let f = ['#4282d8', '#47baff', '#b5e3ff', '#f0f0f0'],
    r = ['#816bee', '#b79cf8', '#f0f0f0'],
    C = [0.1, 0.4, 0.8, 1],
    h = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    n = [0.1, 0.5, 1],
    w = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 1,
            tint: 1
        },
        {
            base: 8,
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
                            d: 'M14 7V6h-2V5h-1V4h-1V2H9V1H7v1H6v2H5v1H4v1H2v1H1v2h1v1h2v1h1v1h1v2h1v1h2v-1h1v-2h1v-1h1v-1h2V9h1V7h-1Z',
                            fill: M[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M11 7H9V6H7v1H5v2h2v1h2V9h2V7Z',
                            fill: M[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 0H1v1h2V0ZM5 1H3v1h2V1ZM4 5H2v1h2V5ZM1 1H0v2h1V1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 1H1v2h1V2h1V1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M1 7H0v2h1V7ZM16 1h-1v2h1V1ZM15 3h-1v2h1V3ZM2 3H1v2h1V3ZM6 2H5v2h1V2ZM11 2h-1v2h1V2ZM7 1H6v1h1V1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M7 2H6v1h1V2ZM8 3H7v1h1V3ZM5 5H4v1h1V5ZM3 6H2v1h1V6ZM2 7H1v1h1V7Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M3 15v-1h2v-2H4v-1H2v2H1v2h2Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 13H1v1h1v-1Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 4H4v1h1V4Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 2H2v3h2V4h1V2ZM14 5V2h-3v2h1v1h2Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 2H4v2h1V2ZM4 4H3v1h1V4ZM14 3h-1v2h1V3ZM15 2h-1v1h1V2Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M13 15v-1h-2v-2h1v-1h2v2h1v2h-2Z',
                            fill: a[1]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 13h-1v1h1v-1ZM14 11h-1v1h1v-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 6H1v1h1V6ZM16 7h-1v2h1V7ZM15 6h-1v1h1V6ZM10 1H9v1h1V1ZM12 4h-1v1h1V4ZM9 0H7v1h2V0Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 1H7v1h2V1ZM9 7H7v2h2V7Z',
                            fill: M[3]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 1h-2v1h2V1ZM13 2h-2v1h2V2Z',
                            fill: a[2]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M9 5H7v1h2V5ZM9 10H7v1h2v-1ZM15 0h-2v1h2V0ZM13 1h-2v1h2V1ZM14 5h-2v1h2V5ZM3 15H1v1h2v-1ZM5 14H3v1h2v-1ZM4 10H2v1h2v-1ZM1 13H0v2h1v-2ZM16 13h-1v2h1v-2ZM15 11h-1v2h1v-2ZM2 11H1v2h1v-2ZM6 12H5v2h1v-2ZM11 12h-1v2h1v-2ZM7 14H6v1h1v-1ZM5 11H4v1h1v-1Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M5 12H4v2h1v-2ZM4 11H3v1h1v-1Z',
                            fill: a[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M2 9H1v1h1V9ZM5 7H4v2h1V7ZM7 6H5v1h2V6ZM7 9H5v1h2V9ZM12 7h-1v2h1V7ZM11 6H9v1h2V6ZM11 9H9v1h2V9ZM15 9h-1v1h1V9Z',
                            fill: '#000'
                        }),
                        (0, B.jsx)('path', {
                            d: 'M15 7h-1v2h1V7ZM14 6h-1v1h1V6ZM14 9h-1v1h1V9ZM12 9h-1v1h1V9ZM9 11H7v1h2v-1ZM10 10H9v1h1v-1ZM7 10H6v1h1v-1ZM9 14H7v1h2v-1ZM10 13H9v1h1v-1ZM7 13H6v1h1v-1ZM5 9H4v1h1V9ZM2 8H1v1h1V8ZM3 9H2v1h1V9Z',
                            fill: M[0]
                        }),
                        (0, B.jsx)('path', {
                            d: 'M10 14H9v1h1v-1ZM12 11h-1v1h1v-1ZM9 15H7v1h2v-1ZM15 15h-2v1h2v-1ZM13 14h-2v1h2v-1ZM14 10h-2v1h2v-1Z',
                            fill: '#000'
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
