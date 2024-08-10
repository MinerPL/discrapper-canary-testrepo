n.d(t, {
  T: function() {
return o;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(952265),
  s = n(813197);
let o = i.forwardRef(function(e, t) {
  let o = i.useRef(null);
  return i.useImperativeHandle(t, () => ({
focus: () => null,
activate: () => {
  var e;
  return null === (e = o.current) || void 0 === e || e.activateUploadDialogue(), !1;
}
  }), []), (0, r.jsx)('div', {
style: {
  position: 'relative'
},
children: (0, r.jsx)(s.ZP, {
  ...e,
  ref: o,
  onChange: function(t, i) {
    (0, a.ZD)(async () => {
      let {
        default: a
      } = await Promise.all([
        n.e('48017'),
        n.e('54144')
      ]).then(n.bind(n, 850085));
      return n => (0, r.jsx)(a, {
        imgURI: t,
        file: i,
        onCrop: e.onChange,
        ...n
      });
    });
  }
})
  });
});