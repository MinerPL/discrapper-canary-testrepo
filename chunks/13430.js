"use strict";
n(47120), n(653041);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(913527),
  o = n.n(l),
  u = n(481060),
  c = n(987134),
  d = n(689938),
  h = n(653198);
let E = o()().localeData().months(),
  _ = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  m = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: E[e]
  })),
  g = /[a-zA-Z0-9]/;

function f(e) {
  let {
    options: t,
    selectOption: n,
    children: i
  } = e, [a, l] = r.useState("");
  r.useEffect(() => {
    if ("" !== a) {
      let e = setTimeout(() => l(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [a, l]);
  let o = r.useCallback(e => {
    if (g.test(e.key)) {
      let s = "".concat(a).concat(e.key.toLowerCase()),
        r = t.find(e => e.label.toLowerCase().startsWith(s));
      null != r && n(r.value), l(s)
    }
  }, [n, l, a, t]);
  return (0, s.jsx)("div", {
    onKeyDown: o,
    children: i
  })
}

function p() {
  let e = o()().localeData().longDateFormat("L"),
    t = e.indexOf("D"),
    n = e.indexOf("M"),
    s = e.indexOf("Y");
  return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
    index: t,
    type: "day"
  }, {
    index: n,
    type: "month"
  }, {
    index: s,
    type: "year"
  }].sort((e, t) => e.index < t.index ? -1 : 1)
}
let I = r.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: i,
    onChange: l,
    onPopulated: E,
    error: g,
    autoFocus: I,
    required: N
  } = e, {
    day: A,
    setDay: T,
    month: R,
    setMonth: S,
    year: C,
    setYear: x
  } = function(e) {
    let t = null,
      n = null,
      s = null;
    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
    let [i, a] = r.useState(t), [l, o] = r.useState(n), [u, c] = r.useState(s);
    return {
      day: i,
      setDay: a,
      month: l,
      setMonth: o,
      year: u,
      setYear: c
    }
  }(n), O = r.useMemo(() => null != A && null != R && null != C ? o()("".concat(A, "/").concat(R, "/").concat(C), "DD/MM/YYYY") : null, [A, R, C]);
  r.useEffect(() => {
    l((null == O ? void 0 : O.isValid()) ? O : null)
  }, [O, l]);
  let Z = g;
  null != O && !O.isValid() && (Z = d.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let L = function() {
      let e = new Date().getFullYear(),
        t = r.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return r.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [M, v] = r.useState(I ? 0 : -1),
    D = r.useRef(null),
    b = r.useRef(null),
    y = r.useRef(null),
    j = r.useMemo(p, []),
    P = r.useCallback(() => {
      var e, t, n, s;
      switch (null === (e = j[M]) || void 0 === e ? void 0 : e.type) {
        case "day":
          null === (t = D.current) || void 0 === t || t.focus();
          break;
        case "month":
          null === (n = b.current) || void 0 === n || n.focus();
          break;
        case "year":
          null === (s = y.current) || void 0 === s || s.focus()
      }
    }, [M, D, b, y, j]);
  r.useEffect(() => {
    setTimeout(P, 500)
  }, []), r.useEffect(() => {
    if (M >= j.length) {
      null == E || E();
      return
    }
    P()
  }, [M, P]);
  let U = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = j[e];
    switch (t) {
      case "day":
        U.push({
          key: "day",
          input: (0, s.jsx)(f, {
            options: _,
            selectOption: T,
            children: (0, s.jsx)(c.Z, {
              ref: D,
              className: h.__invalid_inputDay,
              "aria-label": d.Z.Messages.AGE_GATE_DOB_DAY,
              menuPlacement: c.Z.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: d.Z.Messages.AGE_GATE_DOB_DAY
              }),
              options: _,
              value: A,
              onChange: t => {
                let {
                  value: n
                } = t;
                T(n), v(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "month":
        U.push({
          key: "month",
          input: (0, s.jsx)(f, {
            options: m,
            selectOption: S,
            children: (0, s.jsx)(c.Z, {
              ref: b,
              className: h.__invalid_inputMonth,
              "aria-label": d.Z.Messages.AGE_GATE_DOB_MONTH,
              menuPlacement: c.Z.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: d.Z.Messages.AGE_GATE_DOB_MONTH
              }),
              options: m,
              value: R,
              onChange: t => {
                let {
                  value: n
                } = t;
                S(n), v(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "year":
        U.push({
          key: "year",
          input: (0, s.jsx)(f, {
            options: L,
            selectOption: x,
            children: (0, s.jsx)(c.Z, {
              ref: y,
              className: h.__invalid_inputYear,
              "aria-label": d.Z.Messages.AGE_GATE_DOB_YEAR,
              menuPlacement: c.Z.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: d.Z.Messages.AGE_GATE_DOB_YEAR
              }),
              options: L,
              value: C,
              onChange: t => {
                let {
                  value: n
                } = t;
                x(n), v(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        })
    }
  }
  return (0, s.jsxs)("fieldset", {
    className: a()(h.container, i),
    children: [(0, s.jsx)(u.FormTitle, {
      tag: "legend",
      required: N,
      error: Z,
      children: d.Z.Messages.AGE_GATE_DATE_OF_BIRTH
    }), (0, s.jsx)("div", {
      className: h.inputs,
      children: U.map((e, t) => {
        let {
          key: n,
          input: r
        } = e;
        return (0, s.jsx)("div", {
          tabIndex: t + 1,
          className: h[n],
          children: r
        }, n)
      })
    })]
  })
});
t.Z = I