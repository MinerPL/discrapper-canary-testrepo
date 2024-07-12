i.d(n, {
  Z: function() {
return s;
  }
});
var t = i(735250);
i(470079);
var a = i(120356),
  r = i.n(a),
  o = i(481060),
  l = i(933975);

function s(e) {
  let {
supportedLanguages: n
  } = e;
  return (0, t.jsx)('ul', {
className: l.outerContainer,
children: n.map(e => (0, t.jsx)('li', {
  className: r()(l.innerContainer, l.languageItem),
  children: (0, t.jsx)(o.Text, {
    variant: 'text-md/normal',
    children: e
  })
}, e))
  });
}