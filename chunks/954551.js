n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(665149),
  r = n(453473),
  l = n(689938);

function o(e) {
  let {
onOpen: t,
onClose: n,
className: o
  } = e;
  return (0, i.jsx)(r.P, {
onOpen: t,
onClose: n,
popoutPosition: 'bottom',
popoutAlign: 'right',
children: (e, t, n) => (0, i.jsx)('div', {
  children: (0, i.jsx)(s.JO, {
    ...n,
    className: o,
    onClick: e,
    icon: a.BookmarkIcon,
    'aria-label': l.Z.Messages.FOR_LATER,
    tooltip: t ? null : l.Z.Messages.FOR_LATER,
    selected: t
  })
})
  });
}