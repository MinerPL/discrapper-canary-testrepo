let r, i;
n.d(t, {
  Z: function() {
return c;
  }
}), n(411104);
var a = n(594174),
  o = n(831160);
let s = () => {
  throw Error('updateModal has not been implemented.');
};
{
  let e = n(169480);
  r = e.showModal, s = e.updateModalProps, i = n(952265).Mr;
}

function l(e) {
  let {
promiseFn: t,
resolve: n,
reject: a,
modalProps: o = {},
hooks: {
  onEarlyClose: l
} = {}
  } = e;
  if (null == r) {
null == l || l();
return;
  }
  let c = r(f, d, o);

  function d() {
null == l || l();
  }

  function _(e) {
i(c), n(e);
  }

  function E(e) {
i(c), a(e);
  }

  function f(e) {
return s(c, f, d, {
  ...o,
  isLoading: !0
}), u({
  promiseFn: t,
  resolve: _,
  reject: E,
  code: e,
  mfaCodeHandler: h,
  isModalOpen: !0
});
  }

  function h(e) {
let {
  res: t
} = e;
s(c, f, d, {
  ...o,
  error: t.body.message
});
  }
}

function u(e) {
  let {
promiseFn: t,
resolve: n,
reject: r,
code: i,
mfaCodeHandler: a = l,
isModalOpen: o = !1,
...s
  } = e;
  return t(null != i ? {
code: i
  } : {}).then(n, e => {
var i, l;
if (i = e, l = o, i.body && 60008 === i.body.code || l && 429 === i.status)
  return a({
    promiseFn: t,
    resolve: n,
    reject: r,
    res: e,
    ...s
  });
r(e);
  });
}

function c(e, t) {
  var n, r;
  let {
checkEnabled: i = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
...s
  } = null != t ? t : {};
  return new Promise((t, n) => {
((0, o.d)(i) ? l : u)({
  promiseFn: e,
  resolve: t,
  reject: n,
  ...s
});
  });
}