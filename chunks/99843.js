var i = n(735250);
n(470079);
var a = n(493683),
  s = n(599059),
  l = n(762914),
  r = n(933557),
  o = n(981631),
  c = n(402846);
t.Z = e => {
  let {
channel: t
  } = e, n = (0, r.ZP)(t), u = (0, l.Dd)(t.id);
  return (0, i.jsx)('div', {
className: c.container,
onDoubleClick: e => e.stopPropagation(),
children: u ? (0, i.jsx)('div', {
  className: c.channelName,
  children: n
}) : (0, i.jsx)(s.Z, {
  minLen: 1,
  maxLen: o.HN8,
  className: c.channelName,
  name: 'channel_name',
  autoComplete: 'off',
  value: null != n ? n : '',
  onBlur: e => {
    n !== e.currentTarget.value && a.Z.setName(t.id, e.currentTarget.value);
  }
})
  });
};