n.d(t, {
  X: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(163525);

function r(e) {
  let {
tooltipText: t,
textColor: n
  } = e;
  return (0, i.jsxs)('span', {
className: a.tooltipTextContainer,
children: [
  (0, i.jsx)(s.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: a.nitroWheel
  }),
  (0, i.jsx)(s.Text, {
    className: a.tooltipText,
    variant: 'text-sm/medium',
    color: null != n ? n : 'text-normal',
    children: t
  })
]
  });
}