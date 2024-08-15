t(47120);
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(392711),
  l = t(481060),
  c = t(442837),
  d = t(355932),
  u = t(314897),
  m = t(353093),
  _ = t(214715),
  f = t(18100),
  C = t(308083),
  h = t(689938),
  x = t(631965),
  p = t(318577);
n.Z = e => {
  let {
guildId: n,
handleUpdate: t,
progress: i,
error: g
  } = e, {
interests: T
  } = i, [E, I] = r.useState(''), [b, N] = r.useState(0), v = (0, c.e7)([u.default], () => u.default.getId()), y = r.useMemo(() => (0, o.chunk)((0, m.XV)(C.i6, v), 9), [v]), S = [
...y[b],
...y[(b + 1) % y.length]
  ], A = r.useMemo(() => Array.from(T), [T]), M = r.useMemo(() => A.filter(e => !C.WZ.has(e) && !C.gh.has(e)), [A]), j = e => {
let n = new Set(T);
n.delete(e), t({
  interests: n
});
  }, R = r.useCallback(e => {
if (T.size === C.c4)
  return;
let n = null != e ? e : E.trim();
if (0 === n.length)
  return;
let a = new Set(T);
a.add(n), t({
  interests: a
}), I('');
  }, [
t,
E,
T
  ]), L = r.useCallback(e => {
switch (e.key) {
  case 'Enter':
  case 'Tab':
    e.preventDefault(), e.stopPropagation(), R();
}
  }, [R]), O = r.useCallback(() => {
N(e => (e + 1) % y.length);
  }, [
N,
y
  ]);
  return (0, a.jsxs)('div', {
className: p.slideContent,
children: [
  (0, a.jsx)(l.Heading, {
    variant: 'heading-xxl/medium',
    className: p.title,
    children: h.Z.Messages.CLAN_SETUP_INTERESTS_TITLE
  }),
  (0, a.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: p.subtitle,
    children: h.Z.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
  }),
  null != g && (0, a.jsx)(l.Text, {
    variant: 'text-sm/normal',
    color: 'status-danger',
    className: p.errorText,
    children: g
  }),
  (0, a.jsxs)('div', {
    className: p.content,
    children: [
      (0, a.jsxs)('div', {
        className: p.mainPanelContainer,
        children: [
          (0, a.jsxs)('div', {
            className: p.inputContainer,
            children: [
              (0, a.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                className: p.contentLabel,
                children: h.Z.Messages.CLAN_SETUP_INTERESTS_LABEL
              }),
              (0, a.jsx)(l.TextInput, {
                autoFocus: !0,
                inputClassName: p.input,
                value: E,
                onKeyDown: L,
                onChange: I,
                placeholder: h.Z.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
                maxLength: C.Sq,
                disabled: T.size === C.c4
              }),
              E.length > 0 && (0, a.jsx)(l.Clickable, {
                onClick: () => R(E.trim()),
                className: s()(p.plusIcon, p.clickable),
                children: (0, a.jsx)(l.PlusSmallIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: p.icon
                })
              }),
              E.length > 0 && (0, a.jsx)(l.Text, {
                color: 'text-muted',
                variant: 'text-xs/normal',
                className: p.enterToSearchText,
                children: h.Z.Messages.CLAN_SETUP_INTERESTS_HELP
              })
            ]
          }),
          (0, a.jsx)(l.Text, {
            className: p.interestsCategoryTitle,
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: h.Z.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
          }),
          (0, a.jsx)(d.ZP, {
            items: S,
            renderItem: e => (0, a.jsx)(_.Z, {
              variant: 'text-xs/semibold',
              color: 'interactive-normal',
              text: e,
              selected: T.has(e),
              onClick: T.has(e) ? j : R
            }, e),
            maxLines: 2,
            className: p.interestsCategory,
            itemGapPx: 8,
            renderOverflow: () => null
          }),
          (0, a.jsx)('div', {
            children: (0, a.jsxs)(l.Button, {
              color: l.ButtonColors.PRIMARY,
              onClick: O,
              className: x.rerollButton,
              innerClassName: x.innerRerollButton,
              children: [
                (0, a.jsx)(l.MagicWandIcon, {
                  size: 'sm',
                  color: 'currentColor'
                }),
                (0, a.jsx)(l.Text, {
                  variant: 'text-xs/semibold',
                  color: 'none',
                  children: h.Z.Messages.CLAN_SETUP_INTERESTS_GENERATE_MORE
                })
              ]
            })
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: p.fixedWidthSidebar,
        children: A.length > 0 && (0, a.jsx)(f.Z, {
          guildId: n,
          progress: i,
          traitsToHighlight: M,
          maskDescription: !0,
          onTraitClick: j
        })
      })
    ]
  })
]
  });
};