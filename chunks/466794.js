n.d(t, {
  X: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(277366);

function r(e) {
  let {
tooltipText: t,
textColor: n
  } = e;
  return (0, i.jsxs)('span', {
className: s.tooltipTextContainer,
children: [
  (0, i.jsx)(a.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: s.nitroWheel
  }),
  (0, i.jsx)(a.Text, {
    className: s.tooltipText,
    variant: 'text-sm/medium',
    color: null != n ? n : 'text-normal',
    children: t
  })
]
  });
}