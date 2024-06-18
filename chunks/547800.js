"use strict";
n.r(t), n.d(t, {
  CalendarPicker: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(913527),
  o = n.n(s),
  a = n(578807),
  l = n.n(a),
  u = n(442837),
  _ = n(706454);
n(700659);
var d = n(756166);

function c(e) {
  let {
    value: t = o()().local(),
    minDate: n,
    maxDate: s,
    onSelect: a,
    calendarClassName: c,
    autoFocus: E,
    onClickOutside: I
  } = e, T = r.useCallback((e, t) => {
    null == a || a(o()(e), t)
  }, [a]), h = r.useMemo(() => t.toDate(), [t]), S = r.useMemo(() => null == s ? void 0 : s.toDate(), [s]), f = r.useMemo(() => null == n ? void 0 : n.toDate(), [n]), N = (0, u.e7)([_.default], () => _.default.locale), A = r.useRef(null), m = r.useCallback(e => {
    let t = e.currentTarget;
    if (!!t.classList.contains("react-datepicker__day")) setTimeout(() => {
      var e, n;
      if (null === (e = A.current) || void 0 === e ? void 0 : e.contains(t)) return;
      let i = null === (n = A.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
      if (null != i) i.focus()
    }, 100)
  }, []);
  return (0, i.jsx)("div", {
    ref: A,
    className: d.calendarPicker,
    children: (0, i.jsx)(l(), {
      calendarClassName: c,
      selected: h,
      onChange: T,
      autoFocus: E,
      fixedHeight: !0,
      inline: !0,
      locale: N,
      maxDate: S,
      minDate: f,
      onKeyDown: m,
      onClickOutside: I
    })
  })
}
t.default = c