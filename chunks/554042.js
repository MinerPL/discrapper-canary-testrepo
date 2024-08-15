t.d(s, {
  Z: function() {
return h;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(433517),
  c = t(481060),
  d = t(37234),
  _ = t(153867),
  E = t(425493),
  u = t(607070),
  I = t(304761),
  T = t(865427),
  S = t(358085),
  N = t(210887),
  C = t(981631),
  m = t(689938),
  A = t(945437);
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

function O(e, s) {
  let [t, n] = a.useState(() => {
let t = l.K.get(e);
return null != t ? t : s;
  });
  return a.useEffect(() => {
l.K.set(e, t);
  }, [
e,
t
  ]), [
t,
n
  ];
}

function h() {
  let [e, s] = a.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
platformZoom: t,
theme: i
  } = (0, o.cj)([
N.Z,
u.Z
  ], () => ({
theme: N.Z.theme,
platformZoom: u.Z.zoom
  })), [l, h] = a.useState('upright'), p = [
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
  s(Math.round(window.outerWidth / window.innerWidth * 100));
});
  }, []);
  let x = S.isPlatformEmbedded ? t : e,
M = (0, o.e7)([I.C], () => {
  var e, s;
  return (0, T.fD)() ? null === (s = I.C.getCurrentBuildOverride()) || void 0 === s ? void 0 : null === (e = s.overrides) || void 0 === e ? void 0 : e.discord_web : null;
}),
[f, D] = O('playground-overrideText', null),
[P, L] = O('playground-defaultText', g[0].value),
b = a.useCallback(e => {
  let s = g.find(s => {
    let {
      value: t
    } = s;
    return t === e;
  });
  '' === e || null == e ? (L(g[0].value), D(null)) : null != s ? L(s.value) : (L('custom'), D(e));
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
              h(e.value);
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
            p.map(s => {
              var t;
              let a = null !== (t = 'custom' === P ? f : P) && void 0 !== t ? t : '';
              return (0, n.jsx)('div', {
                className: A.textSample,
                children: (0, n.jsxs)('div', {
                  title: ''.concat(e, 'px at ').concat(s),
                  className: r()(A.text, {
                    [A.breakAnywhere]: !a.includes(' ')
                  }),
                  style: {
                    fontSize: e,
                    fontWeight: R.get(s)
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
              }, ''.concat(e, '-').concat(s));
            })
          ]
        }, e))
      ]
    })
  ]
})
  });
}