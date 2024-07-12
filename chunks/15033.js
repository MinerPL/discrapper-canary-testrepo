s(47120);
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(46140);
t.Z = function(e) {
  let {
onChange: t,
values: s
  } = e, r = [{
  label: 'Playtime Task',
  value: i.S7.PLAYTIME_TASK
},
{
  label: 'Post Enrollment CTA',
  value: i.S7.POST_ENROLLMENT_CTA
},
{
  label: 'Quest Bar V2',
  value: i.S7.QUEST_BAR_V2
}
  ];
  return (0, n.jsxs)(a.FormItem, {
children: [
  (0, n.jsx)(a.FormTitle, {
    tag: a.FormTitleTags.H5,
    children: (0, n.jsxs)('div', {
      style: {
        display: 'flex',
        gap: '4px',
        placeItems: 'center'
      },
      children: [
        'Variants',
        (0, n.jsx)(a.Tooltip, {
          text: 'Heads up: Some variants are still in the works. Test with care!',
          children: e => (0, n.jsx)(a.CircleInformationIcon, {
            size: 'xs',
            ...e
          })
        })
      ]
    })
  }),
  (0, n.jsx)(a.FormText, {
    children: (0, n.jsx)(a.SearchableSelect, {
      'aria-label': 'Variants',
      options: r,
      onChange: t,
      value: s,
      multi: !0
    })
  })
]
  });
};