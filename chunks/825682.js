var i = n(735250);
n(470079);
var s = n(788307),
  a = n(51144),
  r = n(893389);
t.Z = function(e) {
  let {
hovered: t,
activities: n,
applicationStream: l,
status: o,
user: c
  } = e;
  return n.length > 0 ? (0, i.jsx)(s.Z, {
className: r.activity,
textClassName: r.text,
emojiClassName: r.customStatusEmoji,
activities: n,
applicationStream: l,
animate: t,
user: c
  }) : (0, i.jsx)('div', {
className: r.text,
children: (0, a.u5)(o)
  });
};