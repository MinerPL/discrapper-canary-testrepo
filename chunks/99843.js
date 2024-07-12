var i = n(735250);
n(470079);
var a = n(493683),
  l = n(599059),
  s = n(762914),
  r = n(933557),
  o = n(981631),
  c = n(402846);
t.Z = e => {
  let {
channel: t
  } = e, n = (0, r.ZP)(t), d = (0, s.Dd)(t.id);
  return (0, i.jsx)('div', {
className: c.container,
onDoubleClick: e => e.stopPropagation(),
children: d ? (0, i.jsx)('div', {
  className: c.channelName,
  children: n
}) : (0, i.jsx)(l.Z, {
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