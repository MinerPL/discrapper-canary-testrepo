n.d(t, {
  M: function() {
return u;
  },
  V: function() {
return c;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(597442),
  s = n(84735),
  o = n(337033),
  l = n(812663);
let u = i.createContext(void 0),
  c = i.forwardRef(function(e, t) {
let {
  children: n,
  impressionType: c,
  impression: d,
  disableTrack: _,
  returnRef: E,
  ...f
} = e, h = i.useRef(null);
return (0, a.T)(h, {
  returnRef: E
}), i.useContext(l.Z)({
  type: c,
  name: null == d ? void 0 : d.impressionName,
  properties: null == d ? void 0 : d.impressionProperties
}, {
  disableTrack: _
}), i.useImperativeHandle(t, () => h.current), (0, r.jsx)(u.Provider, {
  value: !0,
  children: (0, r.jsx)('div', {
    ...f,
    ref: h,
    role: 'dialog',
    tabIndex: -1,
    'aria-modal': !0,
    children: (0, r.jsx)(o.y, {
      forceLevel: 1,
      children: (0, r.jsx)(s.J, {
        containerRef: h,
        children: n
      })
    })
  })
});
  });