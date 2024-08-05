n.r(t), n.d(t, {
  default: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(266067),
  r = n(608787),
  l = n(765717),
  o = n(981631);
let c = a.lazy(() => (0, r.wE)({
createPromise: () => Promise.all([
  n.e('29549'),
  n.e('6380'),
  n.e('31605'),
  n.e('65840'),
  n.e('77172'),
  n.e('18101'),
  n.e('53937'),
  n.e('26124'),
  n.e('89131'),
  n.e('11256'),
  n.e('77065')
]).then(n.bind(n, 753450)),
webpackId: 753450
  })),
  d = a.lazy(() => (0, r.wE)({
createPromise: () => Promise.all([
  n.e('6380'),
  n.e('65840'),
  n.e('18101'),
  n.e('26124'),
  n.e('63972')
]).then(n.bind(n, 74438)),
webpackId: 74438
  })),
  u = a.lazy(() => (0, r.wE)({
createPromise: () => Promise.all([
  n.e('6380'),
  n.e('65840'),
  n.e('18101'),
  n.e('26124'),
  n.e('96278')
]).then(n.bind(n, 675869)),
webpackId: 675869
  }));

function _() {
  return (0, i.jsxs)(s.rs, {
children: [
  (0, i.jsx)(l.Z, {
    path: o.Z5c.APPLICATION_DIRECTORY,
    exact: !0,
    component: d
  }),
  (0, i.jsx)(l.Z, {
    path: o.Z5c.APPLICATION_DIRECTORY_SEARCH,
    component: u
  }),
  (0, i.jsx)(l.Z, {
    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
    component: c
  })
]
  });
}