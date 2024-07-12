t(47120);
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(481060),
  l = t(364083),
  c = t(92373),
  d = t(308083),
  u = t(689938),
  m = t(832116),
  f = t(363778);
n.Z = e => {
  let {
title: n,
description: t,
handleUpdate: i,
gameApplicationIds: C,
error: _,
requiredGameId: h,
inSettings: x
  } = e, {
options: g,
matchSorterOptions: p
  } = (0, l.P)();
  r.useEffect(() => {
if (!x && null != h && !C.has(h) && g.length > 0) {
  let e = new Set(C);
  e.add(h), i(e);
}
  }, [
g.length,
h,
x
  ]);
  let T = r.useMemo(() => Array.from(C), [C]),
I = r.useCallback(e => {
  let n = new Set(e);
  (null == h || n.has(h)) && i(n);
}, [
  i,
  h
]);
  return (0, a.jsxs)('div', {
className: s()(f.slideContent, m.container),
children: [
  (0, a.jsx)(o.Heading, {
    variant: 'heading-xxl/medium',
    className: f.title,
    children: n
  }),
  (0, a.jsx)(o.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: f.subtitle,
    children: t
  }),
  (0, a.jsx)('div', {
    className: m.inputContainer,
    children: (0, a.jsx)(o.FormItem, {
      error: _,
      children: (0, a.jsx)(o.SearchableSelect, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: s()(f.input, m.input),
        options: g,
        value: T,
        placeholder: u.Z.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: I,
        isDisabled: C.size === d.cm,
        matchSorterOptions: p,
        clearQueryOnSelect: !0,
        customPillContainerClassName: m.pills,
        renderCustomPill: e => (0, a.jsx)(c.Z, {
          applicationId: e.value,
          imageContainerClassName: e.value !== h ? m.clickableGame : m.defaultGame,
          selected: !0,
          locked: e.value === h
        }, e.value)
      })
    })
  })
]
  });
};