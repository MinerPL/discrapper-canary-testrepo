"use strict";
n.d(t, {
  GI: function() {
    return d
  },
  Jt: function() {
    return a
  },
  Un: function() {
    return _
  },
  wE: function() {
    return u
  }
}), n(47120);
var i = n(735250),
  r = n(470079);
let s = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
    return () => (0, i.jsx)("div", {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: e
      }
    })
  },
  o = () => Promise.resolve();

function a(e) {
  o = e
}
let l = e => new Promise(t => setTimeout(t, e));
async function u(e) {
  let {
    createPromise: t,
    webpackId: i
  } = e, r = 500, s = 0;
  for (;;) try {
    return await t()
  } catch (e) {
    if (console.log(e), i in n.c) throw console.log("Module was found in webpack cache so it has loaded from the network and webpack will not retry"), e;
    if (s >= 50) throw e;
    await l(r), await o(), r = Math.min(5e3, 2 * r), s++
  }
}

function _(e) {
  let {
    createPromise: t,
    webpackId: n,
    renderLoader: o,
    name: a,
    memo: l = !1
  } = e, _ = r.lazy(() => u({
    createPromise: t,
    webpackId: n
  })), d = e => (0, i.jsx)(r.Suspense, {
    fallback: null != o ? o() : s()(),
    children: (0, i.jsx)(_, {
      ...e
    })
  });
  return l && (d = r.memo(d)), d.displayName = "Suspense(".concat(a || "Unknown", ")"), d
}

function d(e) {
  let {
    createPromise: t,
    webpackId: n,
    render: s,
    renderFallback: o
  } = e, [a, l] = r.useState(null);
  return r.useEffect(() => {
    u({
      createPromise: t,
      webpackId: n
    }).then(e => {
      let {
        default: t
      } = e;
      return l(t)
    })
  }, []), (0, i.jsx)(i.Fragment, {
    children: null == a ? o() : s(a)
  })
}