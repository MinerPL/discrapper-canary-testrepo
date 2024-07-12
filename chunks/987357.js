n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(735250),
  i = n(470079);

function a(e) {
  let {
paddingFix: t = !0,
orientation: n = 'vertical',
dir: a,
className: o,
scrollerRef: s,
specs: l
  } = e, u = (0, i.useRef)(null);
  return (0, i.useLayoutEffect)(() => {
var e;
let {
  current: r
} = s;
if (null == r || 'auto' === n || !t)
  return;
let i = null === (e = r.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
if (null == i)
  return;
r.style.paddingTop = '', r.style.paddingBottom = '', r.style.paddingLeft = '', r.style.paddingRight = '';
let o = i.getComputedStyle(r);
if ('vertical' === n) {
  if ('rtl' === a) {
    let e = parseInt(o.getPropertyValue('padding-left'), 10);
    r.style.paddingLeft = ''.concat(Math.max(0, e - l.width), 'px'), r.style.paddingRight = '';
  } else {
    let e = parseInt(o.getPropertyValue('padding-right'), 10);
    r.style.paddingRight = ''.concat(Math.max(0, e - l.width), 'px'), r.style.paddingLeft = '';
  }
  let {
    current: e
  } = u;
  null != e && (e.style.height = o.getPropertyValue('padding-bottom'));
} else {
  let e = parseInt(o.getPropertyValue('padding-bottom'), 10);
  r.style.paddingBottom = ''.concat(Math.max(0, e - l.height), 'px');
  let {
    current: t
  } = u;
  null != t && (t.style.width = o.getPropertyValue('padding-left'));
}
  }, [
n,
a,
o,
s,
t,
l
  ]), (0, i.useMemo)(() => {
var e;
return 'auto' !== n ? (0, r.jsx)('div', {
  'aria-hidden': !0,
  style: {
    position: 'vertical' === (e = n) ? 'absolute' : 'relative',
    pointerEvents: 'none',
    minHeight: 'vertical' === e ? 0 : 1,
    minWidth: 'horizontal' === e ? 0 : 1,
    flex: '0 0 auto'
  },
  ref: u
}) : null;
  }, [n]);
}