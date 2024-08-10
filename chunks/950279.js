t.d(n, {
  p: function() {
return _;
  }
}), t(47120);
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

function _(e) {
  let {
gameApplicationIds: n,
preventGameRemoval: t,
onUpdateGames: i,
minGames: _ = 1,
error: C
  } = e, {
options: h,
matchSorterOptions: x
  } = (0, l.P)(), g = r.useMemo(() => Array.from(n), [n]), p = r.useCallback(e => {
if (!(e.length < _))
  i(new Set(e));
  }, [
_,
i
  ]);
  return (0, a.jsx)('div', {
className: m.inputContainer,
children: (0, a.jsx)(o.FormItem, {
  error: C,
  children: (0, a.jsx)(o.SearchableSelect, {
    multi: !0,
    hidePills: !0,
    wrapperClassName: s()(f.input, m.input),
    options: h,
    value: g,
    placeholder: u.Z.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
    onChange: p,
    isDisabled: n.size === d.cm,
    matchSorterOptions: x,
    clearQueryOnSelect: !0,
    customPillContainerClassName: m.pills,
    renderCustomPill: e => (0, a.jsx)(o.Tooltip, {
      text: u.Z.Messages.CLAN_SETUP_GAMES_ONE_GAME_REQUIRED,
      shouldShow: t,
      tooltipContentClassName: m.tooltip,
      children: r => (0, a.jsx)('div', {
        ...r,
        children: (0, a.jsx)(c.Z, {
          applicationId: e.value,
          imageContainerClassName: n.size > _ ? m.clickableGame : void 0,
          selected: !0,
          locked: t
        }, e.value)
      })
    })
  })
})
  });
}
n.Z = e => {
  let {
title: n,
description: t,
onUpdateGames: r,
gameApplicationIds: i,
minGames: l = 1,
error: c
  } = e, d = i.size <= l;
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
  (0, a.jsx)(_, {
    minGames: l,
    gameApplicationIds: i,
    preventGameRemoval: d,
    onUpdateGames: r,
    error: c
  })
]
  });
};