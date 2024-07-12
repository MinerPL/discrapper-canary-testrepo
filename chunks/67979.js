n.d(t, {
  W: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(547800),
  s = n(1561),
  l = n(507274),
  u = n(235874),
  c = n(481060),
  d = n(923020),
  _ = n(216315);

function E(e) {
  let {
value: t,
onSelect: n,
dateFormat: i = 'MMM D, YYYY',
minDate: E,
maxDate: f,
disabled: h = !1
  } = e;
  return (0, r.jsx)(u.y, {
renderPopout: function(e) {
  let {
    closePopout: i
  } = e;
  return (0, r.jsx)(l.V, {
    children: (0, r.jsx)(o.CalendarPicker, {
      minDate: E,
      maxDate: f,
      value: t,
      onSelect: e => {
        n(e), i();
      },
      calendarClassName: d.calendarContainer,
      onClickOutside: i,
      autoFocus: !0
    })
  });
},
position: 'bottom',
children: e => {
  let {
    onClick: n,
    ...o
  } = e;
  return (0, r.jsx)(s.P, {
    ...o,
    className: a()(_.inputDefault, d.container, {
      [_.disabled]: h,
      [d.disabled]: h
    }),
    onClick: h ? void 0 : n,
    'aria-disabled': h,
    children: (0, r.jsxs)('div', {
      className: d.content,
      children: [
        (0, r.jsx)('div', {
          className: d.text,
          children: null == t ? void 0 : t.format(i)
        }),
        (0, r.jsx)(c.CalendarIcon, {
          size: 'md',
          color: 'currentColor',
          className: d.icon
        })
      ]
    })
  });
}
  });
}