s(47120);
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(113434);
t.Z = function(e) {
  let {
onSelect: t,
quest: s
  } = e, {
quests: r
  } = (0, i.J2)({
fetchPolicy: 'cache-and-network'
  }), o = [{
  label: 'NONE',
  value: null
},
...r.map(e => ({
  label: e.config.messages.questName,
  value: e
}))
  ];
  return (0, n.jsxs)(a.FormItem, {
children: [
  (0, n.jsx)(a.FormTitle, {
    tag: a.FormTitleTags.H5,
    children: 'Prefill with Quest'
  }),
  (0, n.jsx)(a.FormText, {
    children: (0, n.jsx)(a.Select, {
      'aria-label': 'Prefill Quest',
      options: o,
      isSelected: e => (null == e ? void 0 : e.id) === (null == s ? void 0 : s.id),
      select: t,
      serialize: String
    })
  })
]
  });
};