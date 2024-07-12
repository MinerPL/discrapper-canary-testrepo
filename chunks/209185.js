let r, i;
n.d(t, {
  $: function() {
return c;
  },
  i: function() {
return u;
  }
}), n(653041), n(47120), n(177593);
var a = n(570140),
  o = n(229588),
  s = n(689938);
r = n(330711).Z;
let l = !1;

function u(e) {
  i = s.Z.loadPromise, r && r.setLocale(e), s.Z.setLocale(e), c(e);
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (l && s.Z.loadPromise === i)
return;
  l = !0, t ? (0, o.f)(e) : a.Z.dispatch({
type: 'I18N_LOAD_START',
locale: e
  });
  let n = [s.Z.loadPromise];
  r && n.push(r.loadPromise);
  let u = Promise.all(n);
  setImmediate(() => {
u.then(() => {
  a.Z.dispatch({
    type: 'I18N_LOAD_SUCCESS',
    locale: e
  });
}).catch(t => {
  a.Z.dispatch({
    type: 'I18N_LOAD_ERROR',
    error: t,
    locale: e
  });
});
  });
}