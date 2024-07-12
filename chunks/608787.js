n.d(t, {
  GI: function() {
return d;
  },
  Jt: function() {
return s;
  },
  Un: function() {
return c;
  },
  wE: function() {
return u;
  }
}), n(47120);
var r = n(735250),
  i = n(470079);
let a = function() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'transparent';
return () => (0, r.jsx)('div', {
  style: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: e
  }
});
  },
  o = () => Promise.resolve();

function s(e) {
  o = e;
}
let l = e => new Promise(t => setTimeout(t, e));
async function u(e) {
  let {
createPromise: t,
webpackId: r
  } = e, i = 500, a = 0;
  for (;;)
try {
  return await t();
} catch (e) {
  if (console.log(e), r in n.c)
    throw console.log('Module was found in webpack cache so it has loaded from the network and webpack will not retry'), e;
  if (a >= 50)
    throw e;
  await l(i), await o(), i = Math.min(5000, 2 * i), a++;
}
}

function c(e) {
  let {
createPromise: t,
webpackId: n,
renderLoader: o,
name: s,
memo: l = !1
  } = e, c = i.lazy(() => u({
createPromise: t,
webpackId: n
  })), d = e => (0, r.jsx)(i.Suspense, {
fallback: null != o ? o() : a()(),
children: (0, r.jsx)(c, {
  ...e
})
  });
  return l && (d = i.memo(d)), d.displayName = 'Suspense('.concat(s || 'Unknown', ')'), d;
}

function d(e) {
  let {
createPromise: t,
webpackId: n,
render: a,
renderFallback: o
  } = e, [s, l] = i.useState(null);
  return i.useEffect(() => {
u({
  createPromise: t,
  webpackId: n
}).then(e => {
  let {
    default: t
  } = e;
  return l(t);
});
  }, []), (0, r.jsx)(r.Fragment, {
children: null == s ? o() : a(s)
  });
}