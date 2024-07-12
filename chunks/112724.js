n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(794037);

function o(e) {
  return i.forwardRef(function(t, n) {
let o = i.useRef();
return i.useImperativeHandle(n, () => ({
  triggerResize: () => {
    var e;
    null === (e = o.current) || void 0 === e || e.onResize();
  }
})), (0, r.jsx)(a.default, {
  ref: o,
  children: n => {
    let {
      width: i,
      height: a
    } = n;
    return (0, r.jsx)(e, {
      ...t,
      width: i,
      height: a
    });
  }
});
  });
}