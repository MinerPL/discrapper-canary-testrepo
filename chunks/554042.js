s.d(t, {
  Z: function() {
return O;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(433517),
  c = s(481060),
  d = s(37234),
  _ = s(153867),
  E = s(425493),
  u = s(607070),
  T = s(304761),
  I = s(865427),
  S = s(358085),
  N = s(210887),
  C = s(981631),
  m = s(689938),
  A = s(452935);
let g = [{
label: 'Latin alphabet',
value: 'aBcDeFgHiJkLmNoPqRsTuVwXyZ'
  },
  {
label: 'Latin pangram',
value: 'The quick brown fox jumps over the lazy dog'
  },
  {
label: 'Greek alphabet',
value: 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ'
  },
  {
label: 'Greek pangram',
value: 'ΤΑΧΊΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ'
  },
  {
label: 'Cyrillic alphabet',
value: 'АБВГЃҐДЕЀЁЖЗИЙЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѢѲѴ'
  },
  {
label: 'Cyrillic pangram',
value: 'В ЧАЩАХ ЮГА ЖИЛ БЫ ЦИТРУС? ДА, НО ФАЛЬШИВЫЙ ЭКЗЕМПЛЯР!'
  },
  {
label: 'Custom',
value: 'custom'
  }
];

function h(e, t) {
  let [s, n] = a.useState(() => {
let s = l.K.get(e);
return null != s ? s : t;
  });
  return a.useEffect(() => {
l.K.set(e, s);
  }, [
e,
s
  ]), [
s,
n
  ];
}

function O() {
  let [e, t] = a.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
platformZoom: s,
theme: i
  } = (0, o.cj)([
N.Z,
u.Z
  ], () => ({
theme: N.Z.theme,
platformZoom: u.Z.zoom
  })), [l, O] = a.useState('upright'), p = [
'normal',
'medium',
'semibold',
'bold',
'extrabold'
  ], R = new Map([
[
  'normal',
  400
],
[
  'medium',
  500
],
[
  'semibold',
  600
],
[
  'bold',
  700
],
[
  'extrabold',
  800
]
  ]);
  a.useEffect(() => {
!S.isPlatformEmbedded && window.addEventListener('resize', () => {
  t(Math.round(window.outerWidth / window.innerWidth * 100));
});
  }, []);
  let x = S.isPlatformEmbedded ? s : e,
M = (0, o.e7)([T.C], () => {
  var e, t;
  return (0, I.fD)() ? null === (t = T.C.getCurrentBuildOverride()) || void 0 === t ? void 0 : null === (e = t.overrides) || void 0 === e ? void 0 : e.discord_web : null;
}),
[f, D] = h('playground-overrideText', null),
[P, L] = h('playground-defaultText', g[0].value),
b = a.useCallback(e => {
  let t = g.find(t => {
    let {
      value: s
    } = t;
    return s === e;
  });
  '' === e || null == e ? (L(g[0].value), D(null)) : null != t ? L(t.value) : (L('custom'), D(e));
}, [
  D,
  L
]);
  return (0, n.jsx)('div', {
className: A.fullscreen,
style: {
  '--playground-font-family': 'mono' === l ? 'gg mono' : 'gg sans',
  '--playground-font-style': 'italic' === l ? 'italic' : 'normal'
},
children: (0, n.jsxs)(c.FormSection, {
  tag: c.FormTitleTags.H1,
  children: [
    (0, n.jsxs)('div', {
      className: A.toolbar,
      children: [
        (0, n.jsxs)('div', {
          children: [
            (0, n.jsxs)(c.Text, {
              tag: 'div',
              variant: 'heading-lg/bold',
              style: {
                display: 'inline-block'
              },
              children: [
                'Zoom: ',
                x,
                '%'
              ]
            }),
            null != M ? (0, n.jsxs)(c.Text, {
              tag: 'div',
              variant: 'heading-lg/bold',
              style: {
                display: 'inline-block',
                marginLeft: '1em'
              },
              color: 'header-secondary',
              children: [
                '(',
                M.id,
                ')'
              ]
            }) : null
          ]
        }),
        (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)(c.SingleSelect, {
            className: A.select,
            options: g,
            onChange: e => b(e),
            value: P
          })
        }),
        (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)('div', {
            className: A.input,
            children: (0, n.jsx)(c.TextInput, {
              placeholder: 'Enter custom input...',
              value: null != f ? f : '',
              onChange: b
            })
          })
        }),
        (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)(c.RadioGroup, {
            withTransparentBackground: !0,
            className: A.theme,
            orientation: 'horizontal',
            options: [{
                name: m.Z.Messages.THEME_DARK,
                value: C.BRd.DARK
              },
              {
                name: m.Z.Messages.THEME_LIGHT,
                value: C.BRd.LIGHT
              }
            ],
            onChange: e => {
              (0, _.ZI)({
                theme: e.value
              });
            },
            value: i
          })
        }),
        (0, n.jsx)(c.FormItem, {
          children: (0, n.jsx)(c.RadioGroup, {
            withTransparentBackground: !0,
            className: A.theme,
            orientation: 'horizontal',
            options: [{
                name: 'Upright',
                value: 'upright'
              },
              {
                name: 'Italic',
                value: 'italic'
              },
              {
                name: 'Mono',
                value: 'mono'
              }
            ],
            onChange: e => {
              O(e.value);
            },
            value: l
          })
        }),
        (0, n.jsx)(E.Z, {
          closeAction: d.xf,
          keybind: 'ESC'
        })
      ]
    }),
    (0, n.jsxs)('div', {
      className: A.textGrid,
      children: [
        (0, n.jsx)('div', {}),
        p.map(e => (0, n.jsx)('div', {
          className: A.columnHeading,
          children: (0, n.jsx)(c.Heading, {
            variant: 'eyebrow',
            children: e
          })
        }, e)),
        [
          10,
          12,
          14,
          15,
          16,
          18,
          20,
          24
        ].map(e => (0, n.jsxs)(a.Fragment, {
          children: [
            (0, n.jsxs)('div', {
              className: A.fontSize,
              children: [
                (0, n.jsxs)(c.Heading, {
                  variant: 'eyebrow',
                  children: [
                    e,
                    'px'
                  ]
                }),
                100 !== x ? (0, n.jsxs)(c.Heading, {
                  variant: 'eyebrow',
                  color: 'text-muted',
                  children: [
                    '(',
                    e * x / 100,
                    ')'
                  ]
                }) : null
              ]
            }, e),
            p.map(t => {
              var s;
              let a = null !== (s = 'custom' === P ? f : P) && void 0 !== s ? s : '';
              return (0, n.jsx)('div', {
                className: A.textSample,
                children: (0, n.jsxs)('div', {
                  title: ''.concat(e, 'px at ').concat(t),
                  className: r()(A.text, {
                    [A.breakAnywhere]: !a.includes(' ')
                  }),
                  style: {
                    fontSize: e,
                    fontWeight: R.get(t)
                  },
                  children: [
                    (0, n.jsx)('p', {
                      children: a
                    }),
                    (0, n.jsx)('p', {
                      style: {
                        textTransform: 'lowercase'
                      },
                      children: a
                    }),
                    (0, n.jsx)('p', {
                      style: {
                        textTransform: 'uppercase'
                      },
                      children: a
                    })
                  ]
                })
              }, ''.concat(e, '-').concat(t));
            })
          ]
        }, e))
      ]
    })
  ]
})
  });
}