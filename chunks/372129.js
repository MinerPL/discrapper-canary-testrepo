"use strict";
s.r(t), s.d(t, {
  processImages: function() {
    return c
  }
}), s("411104"), s("653041"), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("53281"),
  r = s("813197"),
  o = s("426642"),
  d = s("869783");
async function u(e) {
  try {
    var t;
    let s = await (t = e, new Promise((e, s) => {
        if (null != t) {
          let a = new FileReader;
          a.onload = t => {
            var a;
            "string" == typeof(null === (a = t.target) || void 0 === a ? void 0 : a.result) ? e(t.target.result): s(Error("Failed to read file"))
          }, a.readAsDataURL(t)
        }
      })),
      a = new Image;
    return a.src = s, await a.decode(), {
      image: a,
      dataURI: s
    }
  } catch {
    throw o.ImageInputUploadErrors.WRONG_TYPE
  }
}
async function c(e, t) {
  let s = [];
  for (let a = 0; a < e.length; a++) {
    let l = e[a];
    try {
      let {
        image: e,
        dataURI: a
      } = await u(l), n = l.type === d.FileTypes.MP4 ? await t(a, l) : await t(a, l, e);
      null != n && s.push({
        type: n,
        filename: l.name
      })
    } catch (e) {
      s.push({
        type: e,
        filename: l.name
      })
    }
  }
  s.length > 0 && E(s)
}
let E = e => {
  (0, n.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([s.e("99387"), s.e("68720")]).then(s.bind(s, "70846"));
    return s => (0, a.jsx)(t, {
      errors: e,
      ...s
    })
  })
};
t.default = e => {
  let {
    onChange: t,
    multiple: o = !0,
    disabled: d,
    className: u,
    tabIndex: E = -1,
    "aria-label": _,
    filters: I,
    setLoading: T
  } = e, S = l.createRef(), f = l.useRef(null), [m, N] = l.useState(!1);
  l.useEffect(() => {
    m && g()
  }, [m]);
  let g = () => {
      null !== f.current && ((0, n.closeModal)(f.current), f.current = null)
    },
    h = async e => {
      null == T || T(!0), await c(e, t), N(!0), null == T || T(!1)
    }, C = async e => {
      var t, l, i;
      if (e.stopPropagation(), e.preventDefault(), (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.files) == null || (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (l = i.files) || void 0 === l ? void 0 : l.length) === 0) return;
      let r = e.currentTarget.files;
      f.current = await (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("16169")]).then(s.bind(s, "935333"));
        return t => (0, a.jsx)(e, {
          processFiles: () => h(r),
          ...t
        })
      })
    };
  return (0, a.jsx)(i.default, {
    onChange: C,
    filters: null != I ? I : (0, r.getFilters)(),
    multiple: o,
    disabled: d,
    className: u,
    tabIndex: E,
    "aria-label": _,
    ref: S
  })
}