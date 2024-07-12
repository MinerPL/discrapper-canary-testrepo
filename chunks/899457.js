s.d(t, {
  a: function() {
return a;
  }
});
var n, a, i = s(735250);
s(470079);
var r = s(481060);
(n = a || (a = {}))[n.UNENROLLED = 0] = 'UNENROLLED', n[n.ENROLLED = 1] = 'ENROLLED', n[n.COMPLETED_25 = 2] = 'COMPLETED_25', n[n.COMPLETED_50 = 3] = 'COMPLETED_50', n[n.COMPLETED_75 = 4] = 'COMPLETED_75', n[n.COMPLETED_100 = 5] = 'COMPLETED_100', n[n.CLAIMED = 6] = 'CLAIMED';
t.Z = function(e) {
  let {
onChange: t,
value: s
  } = e;
  return (0, i.jsxs)(r.FormItem, {
children: [
  (0, i.jsx)(r.FormTitle, {
    tag: r.FormTitleTags.H5,
    children: 'User State'
  }),
  (0, i.jsx)(r.FormText, {
    children: (0, i.jsx)(r.Select, {
      'aria-label': 'User State',
      options: [{
          label: 'Unenrolled',
          value: 0
        },
        {
          label: 'Enrolled',
          value: 1
        },
        {
          label: '25% Complete',
          value: 2
        },
        {
          label: '50% Complete',
          value: 3
        },
        {
          label: '75% Complete',
          value: 4
        },
        {
          label: '100% Complete',
          value: 5
        },
        {
          label: 'Claimed',
          value: 6
        }
      ],
      isSelected: e => e === s,
      select: t,
      serialize: String
    })
  })
]
  });
};