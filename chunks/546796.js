"use strict";
let i, r;
n.d(t, {
  Z: function() {
    return _
  }
}), n(411104);
var s = n(594174),
  o = n(831160);
let a = () => {
  throw Error("updateModal has not been implemented.")
};
{
  let e = n(169480);
  i = e.showModal, a = e.updateModalProps, r = n(952265).Mr
}

function l(e) {
  let {
    promiseFn: t,
    resolve: n,
    reject: s,
    modalProps: o = {},
    hooks: {
      onEarlyClose: l
    } = {}
  } = e;
  if (null == i) {
    null == l || l();
    return
  }
  let _ = i(I, d, o);

  function d() {
    null == l || l()
  }

  function c(e) {
    r(_), n(e)
  }

  function E(e) {
    r(_), s(e)
  }

  function I(e) {
    return a(_, I, d, {
      ...o,
      isLoading: !0
    }), u({
      promiseFn: t,
      resolve: c,
      reject: E,
      code: e,
      mfaCodeHandler: T,
      isModalOpen: !0
    })
  }

  function T(e) {
    let {
      res: t
    } = e;
    a(_, I, d, {
      ...o,
      error: t.body.message
    })
  }
}

function u(e) {
  let {
    promiseFn: t,
    resolve: n,
    reject: i,
    code: r,
    mfaCodeHandler: s = l,
    isModalOpen: o = !1,
    ...a
  } = e;
  return t(null != r ? {
    code: r
  } : {}).then(n, e => {
    var r, l;
    if (r = e, l = o, r.body && 60008 === r.body.code || l && 429 === r.status) return s({
      promiseFn: t,
      resolve: n,
      reject: i,
      res: e,
      ...a
    });
    i(e)
  })
}

function _(e, t) {
  var n, i;
  let {
    checkEnabled: r = null !== (i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
    ...a
  } = null != t ? t : {};
  return new Promise((t, n) => {
    ((0, o.d)(r) ? l : u)({
      promiseFn: e,
      resolve: t,
      reject: n,
      ...a
    })
  })
}