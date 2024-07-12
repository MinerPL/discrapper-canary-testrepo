r.d(t, {
  Z: function() {
return Z;
  }
}), r(47120), r(724458), r(757143), r(390547), r(653041);
var a = r(735250),
  n = r(470079),
  i = r(688619),
  o = r.n(i),
  l = r(221762),
  c = r.n(l),
  s = r(392711),
  d = r.n(s),
  u = r(470716),
  h = r(433517),
  m = r(640971),
  g = r(544342),
  p = r(203165),
  b = r(559760),
  f = r(481060),
  y = r(410030),
  x = r(246992),
  k = r(979756);

function v(e, t) {
  return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
raw: {
  value: Object.freeze(t)
}
  }));
}

function _() {
  let e = v([
'\n    import {defineColorTokens, themedToken} from \'../tools/define\';\n\n    const semanticTokenValues = {\n      ',
'\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  '
  ]);
  return _ = function() {
return e;
  }, e;
}

function C() {
  let e = v([
'\n      export const rawPalette = {\n        ',
'\n      } as const;\n    '
  ]);
  return C = function() {
return e;
  }, e;
}
let w = {
...b.K,
...m.J,
...g.c
  },
  j = {
...I(b.K),
...I(m.J)
  },
  N = [
'100',
'130',
'160',
'200',
'230',
'260',
'300',
'330',
'345',
'360',
'400',
'430',
'460',
'500',
'530',
'560',
'600',
'630',
'645',
'660',
'700',
'730',
'760',
'800',
'830',
'860',
'900'
  ];

function S(e) {
  var t;
  let r = 'string' == typeof e ? 1 : null !== (t = e.opacity) && void 0 !== t ? t : 1;
  return {
color: 'string' == typeof e ? e : e.color,
opacity: r
  };
}

function T(e) {
  return 'name' in e;
}

function I(e) {
  let t = {};
  return Object.keys(e).forEach(r => {
let a = e[r];
if ('name' in a)
  a = function e(t) {
    let r = w[t.name];
    return 'name' in r ? e(r) : r;
  }(a);
t[r] = {
  light: S(a.light),
  dark: S(a.dark),
  darker: S(null != a.darker ? a.darker : a.dark),
  midnight: S(null != a.midnight ? a.midnight : a.dark)
};
  }), t;
}

function E(e, t) {
  let [r, a] = n.useState(() => {
let r = h.K.get(e);
return null != r ? r : t;
  });
  return n.useEffect(() => {
h.K.set(e, r);
  }, [
e,
r
  ]), [
r,
a
  ];
}

function Z() {
  let e = (0, y.Fg)(),
[{
  rawPalette: t,
  semanticTokens: r
}, i, l, s, h, m] = function(e, t) {
  let [r, a] = E(''.concat(e, '-states'), [t]), [i, o] = E(''.concat(e, '-index'), 0), l = r[i], c = n.useCallback(e => {
    a([
      e,
      ...r
    ].slice(0, 20)), o(0);
  }, [
    o,
    a,
    r
  ]), s = n.useCallback(() => {
    o(Math.min(r.length - 1, i + 1));
  }, [
    i,
    o,
    r.length
  ]), d = n.useCallback(() => {
    o(Math.max(0, i - 1));
  }, [
    i,
    o
  ]), u = i < r.length - 1;
  return [
    l,
    c,
    s,
    d,
    u,
    i > 0
  ];
}('color-override-03-03-23', {
  rawPalette: p.b,
  semanticTokens: j
}),
[g, b] = n.useState(''),
[v, w] = n.useState({}),
[S, T] = n.useState({}),
I = n.useMemo(() => Object.keys(t).reduce((e, t) => [
  ...e,
  {
    value: t,
    label: t
  }
], []), [t]),
Z = n.useCallback((e, a, n, o) => {
  let l = d().cloneDeep(r);
  l[e][a] = {
    color: n,
    opacity: o
  }, i({
    rawPalette: t,
    semanticTokens: l
  });
}, [
  r,
  t,
  i
]),
R = n.useMemo(() => {
  let a = Object.keys(r).map(t => {
      let {
        color: a,
        opacity: n
      } = r[t][e];
      return '--'.concat(t, ': hsl(var(--').concat(a.replace('.', '-'), '-hsl) / ').concat(n, ');');
    }),
    n = Object.keys(t).flatMap(e => {
      let {
        hex: r
      } = t[e], {
        h: a,
        s: n,
        l: i
      } = function(e) {
        let [t, r, a] = 'transparent' === e ? [
          0,
          0,
          0
        ] : o()(e).hsl(), n = isNaN(t) ? 0 : d().round(t, 1), i = d().round(100 * a, 1);
        return {
          h: n,
          s: d().round(100 * r, 1),
          l: i
        };
      }(r), l = d().kebabCase(e);
      return [
        '--'.concat(l, '-hsl: ').concat(a, ' calc(var(--saturation-factor, 1) * ').concat(n, '%) ').concat(i, '% !important;'),
        '--'.concat(l, ': hsl(var(--').concat(l, '-hsl)) !important;')
      ];
    });
  return '\n      .theme-'.concat(e, ' {\n        ').concat(a.join('\n'), '\n\n        ').concat(Object.keys(v).filter(e => v[e]).map(e => '--'.concat(e, ': magenta !important;')).join('\n'), '\n\n        ').concat(Object.keys(S).filter(e => S[e]).map(e => '--'.concat(e, ': magenta !important;')).join('\n'), '\n      }\n\n      html {\n        ').concat(n.join('\n'), '\n      }\n    ');
}, [
  e,
  r,
  t,
  v,
  S
]),
B = n.useCallback(e => {
  let t = '',
    r = '',
    a = !1;
  return c()(_(), Object.keys(e).map(n => {
    (r = n.split('-')[0]) !== t ? (t = r, a = !0) : a = !1;
    let i = e[n],
      o = i.light,
      l = i.dark,
      c = i.midnight,
      s = [
        [
          'dark',
          l
        ],
        [
          'light',
          o
        ]
      ];
    (c.opacity !== l.opacity || c.color !== l.color) && s.push([
      'midnight',
      c
    ]);
    let d = s.map(e => {
        let [t, {
          color: r,
          opacity: a
        }] = e;
        return 1 === a ? ''.concat(t, ': "').concat(r, '"') : ''.concat(t, ': { color: "').concat(r, '", opacity: ').concat(a, ' }');
      }).join(',\n'),
      u = '"'.concat(n, '": themedToken({ ').concat(d, ' })');
    return ''.concat(a ? '\n' : '').concat(u);
  }).join(',\n'));
}, []),
O = n.useCallback(e => c()(C(), Object.keys(e).map(t => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))), []),
P = n.useCallback(e => {
  let t = {};
  Object.keys(e).forEach(r => {
    Object.keys(e[r]).map(a => {
      let n = [...N];
      'primary' !== r && (n = n.filter(e => '645' !== e)), t[''.concat(r, '.').concat(n[+a])] = {
        hex: e[r][a]
      };
    });
  }), i({
    rawPalette: t,
    semanticTokens: r
  });
}, [
  r,
  i
]);
  return (0, a.jsxs)('div', {
className: k.panel,
style: {
  display: 'flex',
  flexDirection: 'column'
},
children: [
  (0, a.jsxs)('div', {
    className: k.toolbar,
    style: {
      flex: '0 0 34px',
      padding: '0 4px'
    },
    children: [
      (0, a.jsxs)('div', {
        className: k.toolbarGroup,
        children: [
          (0, a.jsx)(f.Button, {
            onClick: l,
            disabled: !h,
            size: f.Button.Sizes.MIN,
            children: 'Undo'
          }),
          (0, a.jsx)(f.Button, {
            onClick: s,
            disabled: !m,
            size: f.Button.Sizes.MIN,
            children: 'Redo'
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: k.toolbarDivider
      }),
      (0, a.jsxs)('div', {
        className: k.toolbarGroup,
        children: [
          (0, a.jsx)('span', {
            className: k.toolbarGroupLabel,
            children: 'Raw'
          }),
          (0, a.jsx)(f.Button, {
            size: f.Button.Sizes.MIN,
            onClick: () => {
              navigator.clipboard.readText().then(e => {
                P(JSON.parse(e));
              });
            },
            children: 'Import'
          }),
          (0, a.jsx)(f.Button, {
            size: f.Button.Sizes.MIN,
            onClick: () => {
              navigator.clipboard.writeText(O(t));
            },
            children: 'Export'
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: k.toolbarDivider
      }),
      (0, a.jsxs)('div', {
        className: k.toolbarGroup,
        children: [
          (0, a.jsx)('span', {
            className: k.toolbarGroupLabel,
            children: 'Semantic'
          }),
          (0, a.jsx)(f.Button, {
            size: f.Button.Sizes.MIN,
            onClick: () => {
              navigator.clipboard.writeText(B(r));
            },
            children: 'Export'
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: k.toolbarDivider
      }),
      (0, a.jsx)('div', {
        className: k.toolbarGroup,
        children: (0, a.jsx)(f.Button, {
          size: f.Button.Sizes.MIN,
          type: 'reset',
          color: f.Button.Colors.RED,
          onClick: () => {
            i({
              rawPalette: p.b,
              semanticTokens: j
            });
          },
          children: 'Reset all'
        })
      }),
      (0, a.jsx)('div', {
        className: k.toolbarDivider
      }),
      (0, a.jsxs)('div', {
        className: k.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [
          (0, a.jsx)(f.SearchBar, {
            size: f.SearchBar.Sizes.SMALL,
            query: g,
            onChange: b,
            onClear: () => b(''),
            placeholder: 'Search tokens',
            'aria-label': 'Search tokens'
          }),
          ' '
        ]
      })
    ]
  }),
  (0, a.jsx)(f.ScrollerThin, {
    children: (0, a.jsx)('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'min-content 1fr 1fr min-content min-content',
        gap: 8,
        margin: 8,
        alignItems: 'center'
      },
      children: Object.keys(j).filter(e => '' === g || e.toLowerCase().includes(g)).map(t => {
        var i;
        let o = j[t][e],
          l = null == r[t] ? {
            ...o
          } : r[t][e],
          c = l.color !== o.color || l.opacity !== o.opacity;
        return (0, a.jsxs)(n.Fragment, {
          children: [
            (0, a.jsx)('div', {
              onMouseEnter: () => {
                T(e => ({
                  ...e,
                  [t]: !0
                }));
              },
              onMouseLeave: () => {
                T(e => ({
                  ...e,
                  [t]: !1
                }));
              },
              children: (0, a.jsx)(f.Checkbox, {
                value: v[t],
                onChange: () => {
                  w(e => ({
                    ...e,
                    [t]: !e[t]
                  }));
                }
              })
            }),
            (0, a.jsx)('span', {
              children: t
            }),
            (0, a.jsx)(f.SearchableSelect, {
              value: l.color,
              options: I,
              onChange: r => {
                Z(t, e, r, l.opacity);
              },
              renderOptionPrefix: t => null == t ? null : (0, a.jsx)('div', {
                style: {
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'var(--'.concat(t.value.replace('.', '-'), ')'),
                  border: '1px solid '.concat('dark' === e ? 'white' : 'black')
                }
              }),
              popoutLayerContext: x.O$
            }),
            (0, a.jsx)(f.TextInput, {
              type: 'number',
              style: {
                width: '4em'
              },
              value: null === (i = l.opacity) || void 0 === i ? void 0 : i.toString(),
              onChange: r => {
                '' !== r && Z(t, e, l.color, parseFloat(r));
              }
            }),
            (0, a.jsx)(f.Clickable, {
              style: c ? {} : {
                opacity: 0,
                pointerEvents: 'none'
              },
              onClick: () => {
                var r;
                c && Z(t, e, o.color, null !== (r = o.opacity) && void 0 !== r ? r : 1);
              },
              children: (0, a.jsx)(f.CloseSmallIcon, {
                size: 'xs',
                color: 'currentColor'
              })
            })
          ]
        }, t);
      })
    })
  }),
  (0, a.jsx)(u.ql, {
    children: (0, a.jsx)('style', {
      id: 'devtools-color-overrides',
      children: R
    })
  })
]
  });
}