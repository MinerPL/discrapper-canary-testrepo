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
  _ = t(363778);
n.Z = e => {
  let {
title: n,
description: t,
handleUpdate: i,
gameApplicationIds: C,
error: f
  } = e, {
options: h,
matchSorterOptions: x
  } = (0, l.P)(), g = r.useMemo(() => Array.from(C), [C]), p = r.useCallback(e => {
if (0 !== e.length)
  i(new Set(e));
  }, [i]), T = C.size <= 1;
  return (0, a.jsxs)('div', {
className: s()(_.slideContent, m.container),
children: [
  (0, a.jsx)(o.Heading, {
    variant: 'heading-xxl/medium',
    className: _.title,
    children: n
  }),
  (0, a.jsx)(o.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: _.subtitle,
    children: t
  }),
  (0, a.jsx)('div', {
    className: m.inputContainer,
    children: (0, a.jsx)(o.FormItem, {
      error: f,
      children: (0, a.jsx)(o.SearchableSelect, {
        multi: !0,
        hidePills: !0,
        wrapperClassName: s()(_.input, m.input),
        options: h,
        value: g,
        placeholder: u.Z.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: p,
        isDisabled: C.size === d.cm,
        matchSorterOptions: x,
        clearQueryOnSelect: !0,
        customPillContainerClassName: m.pills,
        renderCustomPill: e => (0, a.jsx)(o.Tooltip, {
          text: u.Z.Messages.CLAN_SETUP_GAMES_ONE_GAME_REQUIRED,
          shouldShow: T,
          tooltipContentClassName: m.tooltip,
          children: n => (0, a.jsx)('div', {
            ...n,
            children: (0, a.jsx)(c.Z, {
              applicationId: e.value,
              imageContainerClassName: C.size > 1 ? m.clickableGame : void 0,
              selected: !0,
              locked: T
            }, e.value)
          })
        })
      })
    })
  })
]
  });
};