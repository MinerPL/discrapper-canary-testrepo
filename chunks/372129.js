"use strict";
t.d(s, {
  _: function() {
    return u
  }
}), t(411104), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(53281),
  r = t(813197),
  o = t(426642),
  c = t(869783);
async function d(e) {
  try {
    var s;
    let t = await (s = e, new Promise((e, t) => {
        if (null != s) {
          let n = new FileReader;
          n.onload = s => {
            var n;
            "string" == typeof(null === (n = s.target) || void 0 === n ? void 0 : n.result) ? e(s.target.result): t(Error("Failed to read file"))
          }, n.readAsDataURL(s)
        }
      })),
      n = new Image;
    return n.src = t, await n.decode(), {
      image: n,
      dataURI: t
    }
  } catch {
    throw o.d.WRONG_TYPE
  }
}
async function u(e, s) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    try {
      let {
        image: e,
        dataURI: n
      } = await d(i), l = i.type === c.m.MP4 ? await s(n, i) : await s(n, i, e);
      null != l && t.push({
        type: l,
        filename: i.name
      })
    } catch (e) {
      t.push({
        type: e,
        filename: i.name
      })
    }
  }
  t.length > 0 && E(t)
}
let E = e => {
  (0, l.openModalLazy)(async () => {
    let {
      default: s
    } = await Promise.all([t.e("99387"), t.e("68720")]).then(t.bind(t, 70846));
    return t => (0, n.jsx)(s, {
      errors: e,
      ...t
    })
  })
};
s.Z = e => {
  let {
    onChange: s,
    multiple: o = !0,
    disabled: c,
    className: d,
    tabIndex: E = -1,
    "aria-label": _,
    filters: I,
    setLoading: T
  } = e, N = i.createRef(), m = i.useRef(null), [S, h] = i.useState(!1);
  i.useEffect(() => {
    S && g()
  }, [S]);
  let g = () => {
      null !== m.current && ((0, l.closeModal)(m.current), m.current = null)
    },
    x = async e => {
      null == T || T(!0), await u(e, s), h(!0), null == T || T(!1)
    }, C = async e => {
      var s, i, a;
      if (e.stopPropagation(), e.preventDefault(), (null === (s = e.currentTarget) || void 0 === s ? void 0 : s.files) == null || (null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (i = a.files) || void 0 === i ? void 0 : i.length) === 0) return;
      let r = e.currentTarget.files;
      m.current = await (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("16169")]).then(t.bind(t, 935333));
        return s => (0, n.jsx)(e, {
          processFiles: () => x(r),
          ...s
        })
      })
    };
  return (0, n.jsx)(a.Z, {
    onChange: C,
    filters: null != I ? I : (0, r.Zj)(),
    multiple: o,
    disabled: c,
    className: d,
    tabIndex: E,
    "aria-label": _,
    ref: N
  })
}