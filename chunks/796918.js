t(47120);
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(392711),
  l = t(481060),
  c = t(442837),
  d = t(314897),
  u = t(353093),
  m = t(214715),
  _ = t(18100),
  C = t(308083),
  f = t(689938),
  h = t(293302),
  x = t(363778);
n.Z = e => {
  let {
guildId: n,
handleUpdate: t,
progress: i,
error: g
  } = e, {
interests: p
  } = i, [T, E] = r.useState(''), [I, b] = r.useState(0), N = (0, c.e7)([d.default], () => d.default.getId()), v = r.useMemo(() => (0, o.chunk)((0, u.XV)(C.i6, N), 9), [N]), y = [
...v[I],
...v[(I + 1) % v.length]
  ], S = r.useMemo(() => Array.from(p), [p]), A = r.useMemo(() => S.filter(e => !C.WZ.has(e) && !C.gh.has(e)), [S]), M = e => {
let n = new Set(p);
n.delete(e), t({
  interests: n
});
  }, j = r.useCallback(e => {
if (p.size === C.c4)
  return;
let n = null != e ? e : T.trim();
if (0 === n.length)
  return;
let a = new Set(p);
a.add(n), t({
  interests: a
}), E('');
  }, [
t,
T,
p
  ]), R = r.useCallback(e => {
switch (e.key) {
  case 'Enter':
  case 'Tab':
    e.preventDefault(), e.stopPropagation(), j();
}
  }, [j]), L = r.useCallback(() => {
b(e => (e + 1) % v.length);
  }, [
b,
v
  ]);
  return (0, a.jsxs)('div', {
className: x.slideContent,
children: [
  (0, a.jsx)(l.Heading, {
    variant: 'heading-xxl/medium',
    className: x.title,
    children: f.Z.Messages.CLAN_SETUP_INTERESTS_TITLE
  }),
  (0, a.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: x.subtitle,
    children: f.Z.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
  }),
  null != g && (0, a.jsx)(l.Text, {
    variant: 'text-sm/normal',
    color: 'status-danger',
    className: x.errorText,
    children: g
  }),
  (0, a.jsxs)('div', {
    className: x.content,
    children: [
      (0, a.jsxs)('div', {
        className: x.mainPanelContainer,
        children: [
          (0, a.jsxs)('div', {
            className: x.inputContainer,
            children: [
              (0, a.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                className: x.contentLabel,
                children: f.Z.Messages.CLAN_SETUP_INTERESTS_LABEL
              }),
              (0, a.jsx)(l.TextInput, {
                autoFocus: !0,
                inputClassName: x.input,
                value: T,
                onKeyDown: R,
                onChange: E,
                placeholder: f.Z.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
                maxLength: C.Sq,
                disabled: p.size === C.c4
              }),
              T.length > 0 && (0, a.jsx)(l.Clickable, {
                onClick: () => j(T.trim()),
                className: s()(x.plusIcon, x.clickable),
                children: (0, a.jsx)(l.PlusSmallIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: x.icon
                })
              }),
              T.length > 0 && (0, a.jsx)(l.Text, {
                color: 'text-muted',
                variant: 'text-xs/normal',
                className: x.enterToSearchText,
                children: f.Z.Messages.CLAN_SETUP_INTERESTS_HELP
              })
            ]
          }),
          (0, a.jsx)(l.Text, {
            className: x.interestsCategoryTitle,
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: f.Z.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
          }),
          (0, a.jsx)('div', {
            className: x.interestsCategory,
            children: y.map(e => {
              let n = p.has(e);
              return (0, a.jsx)(m.Z, {
                variant: 'text-xs/semibold',
                color: 'interactive-normal',
                text: e,
                selected: n,
                onClick: n ? M : j
              }, e);
            })
          }),
          (0, a.jsx)('div', {
            children: (0, a.jsxs)(l.Button, {
              color: l.ButtonColors.PRIMARY,
              onClick: L,
              className: h.rerollButton,
              innerClassName: h.innerRerollButton,
              children: [
                (0, a.jsx)(l.MagicWandIcon, {
                  size: 'sm',
                  color: 'currentColor'
                }),
                (0, a.jsx)(l.Text, {
                  variant: 'text-xs/semibold',
                  color: 'none',
                  children: f.Z.Messages.CLAN_SETUP_INTERESTS_GENERATE_MORE
                })
              ]
            })
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: x.fixedWidthSidebar,
        children: S.length > 0 && (0, a.jsx)(_.Z, {
          guildId: n,
          progress: i,
          traitsToHighlight: A,
          maskDescription: !0,
          onTraitClick: M
        })
      })
    ]
  })
]
  });
};