n(47120), n(653041);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(913527),
  o = n.n(l),
  c = n(481060),
  u = n(987134),
  d = n(689938),
  h = n(692071);
let _ = o()().localeData().months(),
  E = Array.from(Array(31).keys()).map(e => ({
value: e + 1,
label: ''.concat(e + 1)
  })),
  g = Array.from(Array(12).keys()).map(e => ({
value: e + 1,
label: _[e]
  })),
  p = /[a-zA-Z0-9]/;

function f(e) {
  let {
options: t,
selectOption: n,
children: i
  } = e, [a, l] = r.useState('');
  r.useEffect(() => {
if ('' !== a) {
  let e = setTimeout(() => l(''), 1000);
  return () => clearTimeout(e);
}
  }, [
a,
l
  ]);
  let o = r.useCallback(e => {
if (p.test(e.key)) {
  let s = ''.concat(a).concat(e.key.toLowerCase()),
    r = t.find(e => e.label.toLowerCase().startsWith(s));
  null != r && n(r.value), l(s);
}
  }, [
n,
l,
a,
t
  ]);
  return (0, s.jsx)('div', {
onKeyDown: o,
children: i
  });
}

function I() {
  let e = o()().localeData().longDateFormat('L'),
t = e.indexOf('D'),
n = e.indexOf('M'),
s = e.indexOf('Y');
  return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
  index: t,
  type: 'day'
},
{
  index: n,
  type: 'month'
},
{
  index: s,
  type: 'year'
}
  ].sort((e, t) => e.index < t.index ? -1 : 1);
}
let m = r.forwardRef(function(e, t) {
  let {
value: n,
wrapperClassName: i,
onChange: l,
onPopulated: _,
error: p,
autoFocus: m,
required: N
  } = e, {
day: T,
setDay: x,
month: A,
setMonth: C,
year: S,
setYear: O
  } = function(e) {
let t = null,
  n = null,
  s = null;
null != e && (t = e.date(), n = e.month() + 1, s = e.year());
let [i, a] = r.useState(t), [l, o] = r.useState(n), [c, u] = r.useState(s);
return {
  day: i,
  setDay: a,
  month: l,
  setMonth: o,
  year: c,
  setYear: u
};
  }(n), v = r.useMemo(() => null != T && null != A && null != S ? o()(''.concat(T, '/').concat(A, '/').concat(S), 'DD/MM/YYYY') : null, [
T,
A,
S
  ]);
  r.useEffect(() => {
l((null == v ? void 0 : v.isValid()) ? v : null);
  }, [
v,
l
  ]);
  let Z = p;
  null != v && !v.isValid() && (Z = d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let R = function() {
  let e = new Date().getFullYear(),
    t = r.useRef(Array.from(Array(150).keys()).map(t => ({
      value: e - t - 3,
      label: ''.concat(e - t - 3)
    })));
  return r.useEffect(() => {
    t.current = Array.from(Array(150).keys()).map(t => ({
      value: e - t - 3,
      label: ''.concat(e - t - 3)
    }));
  }, [e]), t.current;
}(),
[b, D] = r.useState(m ? 0 : -1),
L = r.useRef(null),
M = r.useRef(null),
P = r.useRef(null),
j = r.useMemo(I, []),
y = r.useCallback(() => {
  var e, t, n, s;
  switch (null === (e = j[b]) || void 0 === e ? void 0 : e.type) {
    case 'day':
      null === (t = L.current) || void 0 === t || t.focus();
      break;
    case 'month':
      null === (n = M.current) || void 0 === n || n.focus();
      break;
    case 'year':
      null === (s = P.current) || void 0 === s || s.focus();
  }
}, [
  b,
  L,
  M,
  P,
  j
]);
  r.useEffect(() => {
setTimeout(y, 500);
  }, []), r.useEffect(() => {
if (b >= j.length) {
  null == _ || _();
  return;
}
y();
  }, [
b,
y
  ]);
  let G = [];
  for (let e = 0; e < 3; e++) {
let {
  type: t
} = j[e];
switch (t) {
  case 'day':
    G.push({
      key: 'day',
      input: (0, s.jsx)(f, {
        options: E,
        selectOption: x,
        children: (0, s.jsx)(u.Z, {
          ref: L,
          className: h.__invalid_inputDay,
          'aria-label': d.Z.Messages.AGE_GATE_DOB_DAY,
          menuPlacement: u.Z.MenuPlacements.TOP,
          placeholder: (0, s.jsx)('span', {
            'aria-hidden': !0,
            children: d.Z.Messages.AGE_GATE_DOB_DAY
          }),
          options: E,
          value: T,
          onChange: t => {
            let {
              value: n
            } = t;
            x(n), D(e + 1);
          },
          maxMenuHeight: 215
        })
      })
    });
    break;
  case 'month':
    G.push({
      key: 'month',
      input: (0, s.jsx)(f, {
        options: g,
        selectOption: C,
        children: (0, s.jsx)(u.Z, {
          ref: M,
          className: h.__invalid_inputMonth,
          'aria-label': d.Z.Messages.AGE_GATE_DOB_MONTH,
          menuPlacement: u.Z.MenuPlacements.TOP,
          placeholder: (0, s.jsx)('span', {
            'aria-hidden': !0,
            children: d.Z.Messages.AGE_GATE_DOB_MONTH
          }),
          options: g,
          value: A,
          onChange: t => {
            let {
              value: n
            } = t;
            C(n), D(e + 1);
          },
          maxMenuHeight: 215
        })
      })
    });
    break;
  case 'year':
    G.push({
      key: 'year',
      input: (0, s.jsx)(f, {
        options: R,
        selectOption: O,
        children: (0, s.jsx)(u.Z, {
          ref: P,
          className: h.__invalid_inputYear,
          'aria-label': d.Z.Messages.AGE_GATE_DOB_YEAR,
          menuPlacement: u.Z.MenuPlacements.TOP,
          placeholder: (0, s.jsx)('span', {
            'aria-hidden': !0,
            children: d.Z.Messages.AGE_GATE_DOB_YEAR
          }),
          options: R,
          value: S,
          onChange: t => {
            let {
              value: n
            } = t;
            O(n), D(e + 1);
          },
          maxMenuHeight: 215
        })
      })
    });
}
  }
  return (0, s.jsxs)('fieldset', {
className: a()(h.container, i),
children: [
  (0, s.jsx)(c.FormTitle, {
    tag: 'legend',
    required: N,
    error: Z,
    children: d.Z.Messages.AGE_GATE_DATE_OF_BIRTH
  }),
  (0, s.jsx)('div', {
    className: h.inputs,
    children: G.map((e, t) => {
      let {
        key: n,
        input: r
      } = e;
      return (0, s.jsx)('div', {
        tabIndex: t + 1,
        className: h[n],
        children: r
      }, n);
    })
  })
]
  });
});
t.Z = m;