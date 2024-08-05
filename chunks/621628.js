s.d(t, {
  Z: function() {
return O;
  }
}), s(47120), s(518263), s(970173), s(520712), s(268111), s(941497), s(32026), s(480839), s(744285), s(492257), s(873817), s(733860);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(704215),
  c = s(433517),
  d = s(481060),
  _ = s(675478),
  E = s(581883),
  u = s(285952),
  T = s(154921),
  I = s(915486),
  S = s(883904),
  N = s(68985),
  C = s(211644),
  m = s(197369),
  A = s(549856);

function g(e) {
  let {
contents: t,
content: s,
onChange: a
  } = e, i = (0, I.jl)(t, l.z[s]);
  return (0, n.jsx)(n.Fragment, {
children: (0, n.jsx)(d.FormSwitch, {
  value: i,
  onChange: function() {
    a(s), i ? (0, _.w9)(l.z[s]) : (0, _.nm)(l.z[s]);
  },
  children: (0, n.jsx)(d.FormText, {
    size: T.Z.Sizes.SIZE_16,
    className: A.marginTop4,
    children: ''.concat(s.toLowerCase(), ' (').concat(l.z[s], ')')
  })
})
  });
}

function h(e) {
  let {
items: t,
dismissedContents: s,
handleChange: a
  } = e;
  return (0, n.jsx)(n.Fragment, {
children: t.filter(e => isNaN(Number(e))).map(e => (0, n.jsx)(g, {
  contents: s,
  content: e,
  onChange: a
}, e))
  });
}

function O() {
  var e;
  let t = (0, C.ZP)(e => e.recentlyShown),
{
  dailyCapReached: s,
  dailyCapOverridden: i
} = (0, o.cj)([N.Z], () => ({
  dailyCapReached: N.Z.hasUserHitDCCap(),
  dailyCapOverridden: N.Z.dailyCapOverridden
})),
[T, I] = a.useState(''),
g = null !== (e = (0, o.e7)([E.Z], () => {
  var e;
  return null === (e = E.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
})) && void 0 !== e ? e : new Uint8Array(),
[O, p] = function(e, t) {
  let [s, n] = a.useState(() => {
    let s = c.K.get(e);
    return null != s ? s : t;
  });
  return a.useEffect(() => {
    c.K.set(e, s);
  }, [
    e,
    s
  ]), [
    s,
    n
  ];
}('RecentDismissibleOverrides', []),
R = e => {
  p(t => {
    let s = new Set(t);
    s.delete(e);
    let n = Array.from(s).slice(0, 4);
    return n.unshift(e), n;
  });
},
x = t.map(e => l.z[e]),
M = O.filter(e => e.toLowerCase().includes(T.toLowerCase())).filter(e => !x.includes(e)),
f = Object.keys(l.z).filter(e => !x.includes(e)).filter(e => !O.includes(e)).filter(e => e.toLowerCase().includes(T.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(d.FormSection, {
    title: 'Dismissible Content Fatigue',
    tag: d.FormTitleTags.H1,
    className: A.marginBottom60,
    children: [
      (0, n.jsx)(d.FormItem, {
        children: (0, n.jsxs)(d.FormText, {
          className: A.marginBottom4,
          children: [
            'Daily Cap Reached: ',
            s ? 'Yes' : 'No'
          ]
        })
      }),
      (0, n.jsx)(d.FormSwitch, {
        value: i,
        onChange: S.Nj,
        children: 'Override Dismissible Content Daily Cap'
      }),
      (0, n.jsxs)(d.FormItem, {
        children: [
          (0, n.jsx)(d.Button, {
            onClick: () => (0, S.EG)(),
            children: 'Reset DismissibleContentFrameworkStore'
          }),
          (0, n.jsx)(d.FormText, {
            className: A.marginTop4,
            children: 'This will reset the daily cap and content seen during session'
          })
        ]
      })
    ]
  }),
  (0, n.jsxs)(d.FormSection, {
    title: 'Dismissible Contents',
    tag: d.FormTitleTags.H1,
    children: [
      (0, n.jsx)(d.SearchBar, {
        className: A.marginBottom20,
        size: d.SearchBar.Sizes.LARGE,
        query: T,
        onChange: I,
        onClear: () => I('')
      }),
      (0, n.jsxs)(d.FormItem, {
        className: m.buttonsContainer,
        children: [
          (0, n.jsx)(d.Button, {
            onClick: _.sr,
            children: 'Clear All Dismissed Contents'
          }),
          (0, n.jsx)(d.Button, {
            onClick: _.bE,
            children: 'Check All Dismissed Contents'
          })
        ]
      }),
      t.length > 0 ? (0, n.jsxs)('div', {
        className: A.marginBottom20,
        children: [
          (0, n.jsx)('div', {
            className: A.marginBottom20,
            children: (0, n.jsx)(d.FormTitle, {
              children: 'Recently Shown'
            })
          }),
          (0, n.jsx)(h, {
            items: x,
            dismissedContents: g,
            handleChange: R
          })
        ]
      }) : null,
      M.length > 0 ? (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)('div', {
            className: A.marginBottom20,
            children: (0, n.jsx)(d.FormTitle, {
              children: 'Recent Overrides'
            })
          }),
          (0, n.jsx)(h, {
            items: M,
            dismissedContents: g,
            handleChange: R
          })
        ]
      }) : null,
      (0, n.jsx)(u.Z, {
        className: r()(A.marginBottom20, A.marginTop20),
        children: (0, n.jsx)(d.FormTitle, {
          children: 'Available Dismissible Contents'
        })
      }),
      (0, n.jsx)(h, {
        items: f,
        dismissedContents: g,
        handleChange: R
      })
    ]
  })
]
  });
}