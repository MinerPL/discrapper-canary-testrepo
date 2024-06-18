"use strict";
let i, r;
n.d(t, {
  $: function() {
    return _
  },
  i: function() {
    return u
  }
}), n(653041), n(47120), n(177593);
var s = n(570140),
  o = n(229588),
  a = n(689938);
i = n(330711).Z;
let l = !1;

function u(e) {
  r = a.Z.loadPromise, i && i.setLocale(e), a.Z.setLocale(e), _(e)
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (l && a.Z.loadPromise === r) return;
  l = !0, t ? (0, o.f)(e) : s.Z.dispatch({
    type: "I18N_LOAD_START",
    locale: e
  });
  let n = [a.Z.loadPromise];
  i && n.push(i.loadPromise);
  let u = Promise.all(n);
  setImmediate(() => {
    u.then(() => {
      s.Z.dispatch({
        type: "I18N_LOAD_SUCCESS",
        locale: e
      })
    }).catch(t => {
      s.Z.dispatch({
        type: "I18N_LOAD_ERROR",
        error: t,
        locale: e
      })
    })
  })
}