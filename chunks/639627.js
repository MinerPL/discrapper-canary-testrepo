n.d(t, {
  T: function() {
return s;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(952265),
  o = n(813197);
let s = i.forwardRef(function(e, t) {
  let s = i.useRef(null);
  return i.useImperativeHandle(t, () => ({
focus: () => null,
activate: () => {
  var e;
  return null === (e = s.current) || void 0 === e || e.activateUploadDialogue(), !1;
}
  }), []), (0, r.jsx)('div', {
style: {
  position: 'relative'
},
children: (0, r.jsx)(o.ZP, {
  ...e,
  ref: s,
  onChange: function(t, i) {
    (0, a.ZD)(async () => {
      let {
        default: a
      } = await n.e('48017').then(n.bind(n, 850085));
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