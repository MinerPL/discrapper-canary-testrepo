t.d(A, {
  B: function() {
return o;
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  r = t(120651),
  s = t(689938);

function o(e, A, t) {
  let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, r.Z)({
title: e,
body: 'string' == typeof A ? A : A.format({
  highlightHook: e => (0, n.jsx)(a.Text, {
    variant: 'text-md/normal',
    color: 'text-normal',
    style: {
      display: 'inline'
    },
    children: e
  }),
  ...o
}),
cta: s.Z.Messages.GOT_IT,
onConfirm: () => {},
iconVariant: t
  });
}