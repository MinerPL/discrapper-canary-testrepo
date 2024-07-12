t(47120);
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(481060),
  l = t(442837),
  c = t(314897),
  d = t(353093),
  u = t(214715),
  m = t(18100),
  f = t(308083),
  C = t(689938),
  _ = t(363778);
n.Z = e => {
  let {
guildId: n,
handleUpdate: t,
progress: i,
error: h
  } = e, {
interests: x
  } = i, [g, p] = r.useState(''), T = (0, l.e7)([c.default], () => c.default.getId()), I = r.useMemo(() => (0, d.SS)(f.i6, T), [T]), E = r.useMemo(() => Array.from(x), [x]), b = r.useMemo(() => E.filter(f.O6), [E]), N = r.useMemo(() => [
...I,
...b
  ], [
b,
I
  ]), v = r.useMemo(() => E.filter(e => !f.WZ.has(e) && !f.gh.has(e)), [E]), y = e => {
let n = new Set(x);
n.delete(e), t({
  interests: n
});
  }, S = r.useCallback(e => {
if (x.size === f.c4)
  return;
let n = null != e ? e : g.trim();
if (0 === n.length)
  return;
let a = new Set(x);
a.add(n), t({
  interests: a
}), p('');
  }, [
t,
g,
x
  ]), A = r.useCallback(e => {
switch (e.key) {
  case 'Enter':
  case 'Tab':
    e.preventDefault(), e.stopPropagation(), S();
}
  }, [S]);
  return (0, a.jsxs)('div', {
className: _.slideContent,
children: [
  (0, a.jsx)(o.Heading, {
    variant: 'heading-xxl/medium',
    className: _.title,
    children: C.Z.Messages.CLAN_SETUP_INTERESTS_TITLE
  }),
  (0, a.jsx)(o.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: _.subtitle,
    children: C.Z.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
  }),
  null != h && (0, a.jsx)(o.Text, {
    variant: 'text-sm/normal',
    color: 'status-danger',
    className: _.errorText,
    children: h
  }),
  (0, a.jsxs)('div', {
    className: _.content,
    children: [
      (0, a.jsxs)('div', {
        className: _.mainPanelContainer,
        children: [
          (0, a.jsxs)('div', {
            className: _.inputContainer,
            children: [
              (0, a.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                className: _.contentLabel,
                children: C.Z.Messages.CLAN_SETUP_INTERESTS_LABEL
              }),
              (0, a.jsx)(o.TextInput, {
                autoFocus: !0,
                inputClassName: _.input,
                value: g,
                onKeyDown: A,
                onChange: p,
                placeholder: C.Z.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
                maxLength: f.Sq,
                disabled: x.size === f.c4
              }),
              g.length > 0 && (0, a.jsx)(o.Clickable, {
                onClick: () => S(g.trim()),
                className: s()(_.plusIcon, _.clickable),
                children: (0, a.jsx)(o.PlusSmallIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: _.icon
                })
              }),
              g.length > 0 && (0, a.jsx)(o.Text, {
                color: 'text-muted',
                variant: 'text-xs/normal',
                className: _.enterToSearchText,
                children: C.Z.Messages.CLAN_SETUP_INTERESTS_HELP
              })
            ]
          }),
          (0, a.jsx)(o.Text, {
            className: _.interestsCategoryTitle,
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: C.Z.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
          }),
          (0, a.jsx)('div', {
            className: _.interestsCategory,
            children: N.map(e => {
              let n = x.has(e);
              return (0, a.jsx)(u.Z, {
                variant: 'text-xs/semibold',
                color: 'interactive-normal',
                text: e,
                selected: n,
                onClick: n ? y : S
              }, e);
            })
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: _.fixedWidthSidebar,
        children: E.length > 0 && (0, a.jsx)(m.Z, {
          guildId: n,
          progress: i,
          traitsToHighlight: v,
          maskDescription: !0,
          onTraitClick: y
        })
      })
    ]
  })
]
  });
};