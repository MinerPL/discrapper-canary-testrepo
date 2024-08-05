n(47120), n(653041);
var s = n(735250),
  a = n(470079),
  o = n(120356),
  r = n.n(o),
  l = n(913527),
  i = n.n(l),
  c = n(481060),
  d = n(987134),
  u = n(689938),
  _ = n(692071);
let f = i()().localeData().months(),
  p = Array.from(Array(31).keys()).map(e => ({
value: e + 1,
label: ''.concat(e + 1)
  })),
  m = Array.from(Array(12).keys()).map(e => ({
value: e + 1,
label: f[e]
  })),
  h = /[a-zA-Z0-9]/;

function E(e) {
  let {
options: t,
selectOption: n,
children: o
  } = e, [r, l] = a.useState('');
  a.useEffect(() => {
if ('' !== r) {
  let e = setTimeout(() => l(''), 1000);
  return () => clearTimeout(e);
}
  }, [
r,
l
  ]);
  let i = a.useCallback(e => {
if (h.test(e.key)) {
  let s = ''.concat(r).concat(e.key.toLowerCase()),
    a = t.find(e => e.label.toLowerCase().startsWith(s));
  null != a && n(a.value), l(s);
}
  }, [
n,
l,
r,
t
  ]);
  return (0, s.jsx)('div', {
onKeyDown: i,
children: o
  });
}

function N() {
  let e = i()().localeData().longDateFormat('L'),
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
let T = a.forwardRef(function(e, t) {
  let {
value: n,
wrapperClassName: o,
onChange: l,
onPopulated: f,
error: h,
autoFocus: T,
required: x
  } = e, {
day: A,
setDay: v,
month: b,
setMonth: C,
year: I,
setYear: g
  } = function(e) {
let t = null,
  n = null,
  s = null;
null != e && (t = e.date(), n = e.month() + 1, s = e.year());
let [o, r] = a.useState(t), [l, i] = a.useState(n), [c, d] = a.useState(s);
return {
  day: o,
  setDay: r,
  month: l,
  setMonth: i,
  year: c,
  setYear: d
};
  }(n), M = a.useMemo(() => null != A && null != b && null != I ? i()(''.concat(A, '/').concat(b, '/').concat(I), 'DD/MM/YYYY') : null, [
A,
b,
I
  ]);
  a.useEffect(() => {
l((null == M ? void 0 : M.isValid()) ? M : null);
  }, [
M,
l
  ]);
  let O = h;
  null != M && !M.isValid() && (O = u.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let S = function() {
  let e = new Date().getFullYear(),
    t = a.useRef(Array.from(Array(150).keys()).map(t => ({
      value: e - t - 3,
      label: ''.concat(e - t - 3)
    })));
  return a.useEffect(() => {
    t.current = Array.from(Array(150).keys()).map(t => ({
      value: e - t - 3,
      label: ''.concat(e - t - 3)
    }));
  }, [e]), t.current;
}(),
[G, R] = a.useState(T ? 0 : -1),
j = a.useRef(null),
F = a.useRef(null),
y = a.useRef(null),
D = a.useMemo(N, []),
Z = a.useCallback(() => {
  var e, t, n, s;
  switch (null === (e = D[G]) || void 0 === e ? void 0 : e.type) {
    case 'day':
      null === (t = j.current) || void 0 === t || t.focus();
      break;
    case 'month':
      null === (n = F.current) || void 0 === n || n.focus();
      break;
    case 'year':
      null === (s = y.current) || void 0 === s || s.focus();
  }
}, [
  G,
  j,
  F,
  y,
  D
]);
  a.useEffect(() => {
setTimeout(Z, 500);
  }, []), a.useEffect(() => {
if (G >= D.length) {
  null == f || f();
  return;
}
Z();
  }, [
G,
Z
  ]);
  let L = [];
  for (let e = 0; e < 3; e++) {
let {
  type: t
} = D[e];
switch (t) {
  case 'day':
    L.push({
      key: 'day',
      input: (0, s.jsx)(E, {
        options: p,
        selectOption: v,
        children: (0, s.jsx)(d.Z, {
          ref: j,
          className: _.__invalid_inputDay,
          'aria-label': u.Z.Messages.AGE_GATE_DOB_DAY,
          menuPlacement: d.Z.MenuPlacements.TOP,
          placeholder: (0, s.jsx)('span', {
            'aria-hidden': !0,
            children: u.Z.Messages.AGE_GATE_DOB_DAY
          }),
          options: p,
          value: A,
          onChange: t => {
            let {
              value: n
            } = t;
            v(n), R(e + 1);
          },
          maxMenuHeight: 215
        })
      })
    });
    break;
  case 'month':
    L.push({
      key: 'month',
      input: (0, s.jsx)(E, {
        options: m,
        selectOption: C,
        children: (0, s.jsx)(d.Z, {
          ref: F,
          className: _.__invalid_inputMonth,
          'aria-label': u.Z.Messages.AGE_GATE_DOB_MONTH,
          menuPlacement: d.Z.MenuPlacements.TOP,
          placeholder: (0, s.jsx)('span', {
            'aria-hidden': !0,
            children: u.Z.Messages.AGE_GATE_DOB_MONTH
          }),
          options: m,
          value: b,
          onChange: t => {
            let {
              value: n
            } = t;
            C(n), R(e + 1);
          },
          maxMenuHeight: 215
        })
      })
    });
    break;
  case 'year':
    L.push({
      key: 'year',
      input: (0, s.jsx)(E, {
        options: S,
        selectOption: g,
        children: (0, s.jsx)(d.Z, {
          ref: y,
          className: _.__invalid_inputYear,
          'aria-label': u.Z.Messages.AGE_GATE_DOB_YEAR,
          menuPlacement: d.Z.MenuPlacements.TOP,
          placeholder: (0, s.jsx)('span', {
            'aria-hidden': !0,
            children: u.Z.Messages.AGE_GATE_DOB_YEAR
          }),
          options: S,
          value: I,
          onChange: t => {
            let {
              value: n
            } = t;
            g(n), R(e + 1);
          },
          maxMenuHeight: 215
        })
      })
    });
}
  }
  return (0, s.jsxs)('fieldset', {
className: r()(_.container, o),
children: [
  (0, s.jsx)(c.FormTitle, {
    tag: 'legend',
    required: x,
    error: O,
    children: u.Z.Messages.AGE_GATE_DATE_OF_BIRTH
  }),
  (0, s.jsx)('div', {
    className: _.inputs,
    children: L.map((e, t) => {
      let {
        key: n,
        input: a
      } = e;
      return (0, s.jsx)('div', {
        tabIndex: t + 1,
        className: _[n],
        children: a
      }, n);
    })
  })
]
  });
});
t.Z = T;