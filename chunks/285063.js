n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(916752),
  o = n(153521);

function s(e) {
  let {
node: t
  } = e, n = (0, a.Z)(t);
  return (0, r.jsx)(i.Tooltip, {
text: t.full,
tooltipClassName: o.timestampTooltip,
children: e => (0, r.jsx)('span', {
  ...e,
  className: o.timestamp,
  children: n
})
  });
}