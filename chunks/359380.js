t(47120), t(653041);
var a = t(735250),
  r = t(470079),
  i = t(481060),
  s = t(214715),
  o = t(18100),
  l = t(308083),
  c = t(689938),
  d = t(363778);
let u = e => {
  let {
title: n,
icon: t,
traits: o,
interests: c,
handleUpdate: u
  } = e, m = r.useCallback(e => {
let n = new Set(c);
n.delete(e), u(n);
  }, [
u,
c
  ]), _ = r.useCallback(e => {
if (c.size === l.c4)
  return;
let n = new Set(c);
n.add(e), u(n);
  }, [
u,
c
  ]);
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(i.Text, {
    className: d.interestsCategoryTitle,
    variant: 'text-xs/semibold',
    color: 'text-muted',
    children: n
  }),
  (0, a.jsx)('div', {
    className: d.utilityTraits,
    children: o.map(e => {
      let n = c.has(e);
      return (0, a.jsx)(s.Z, {
        variant: 'text-xs/semibold',
        color: 'interactive-normal',
        icon: t,
        text: e,
        selected: n,
        onClick: n ? m : _
      }, e);
    })
  })
]
  });
};
n.Z = e => {
  let {
guildId: n,
title: t,
description: s,
handleUpdate: m,
progress: _,
interests: C,
optional: f = !1,
hidePreview: h = !1
  } = e, x = r.useMemo(() => {
let e = [];
return l.gh.forEach(n => e.push({
  value: n,
  label: n
})), e;
  }, []), g = r.useMemo(() => {
var e;
return null !== (e = null != C ? C : null == _ ? void 0 : _.interests) && void 0 !== e ? e : new Set();
  }, [
C,
null == _ ? void 0 : _.interests
  ]), p = r.useMemo(() => Array.from(g), [g]), T = r.useMemo(() => p.filter(e => l.gh.has(e)), [p]), E = r.useCallback(e => {
m(new Set([
  ...p.filter(e => !l.gh.has(e)),
  ...e
]));
  }, [
m,
p
  ]), I = r.useMemo(() => p.filter(e => l.WZ.has(e) || l.gh.has(e)), [p]), b = r.useCallback(e => {
let n = new Set(g);
n.delete(e), m(n);
  }, [
m,
g
  ]);
  return (0, a.jsxs)('div', {
className: d.slideContent,
children: [
  f && (0, a.jsx)(i.Text, {
    variant: 'text-sm/medium',
    color: 'header-secondary',
    className: d.optionalTag,
    children: c.Z.Messages.CLAN_SETUP_OPTIONAL
  }),
  (0, a.jsx)(i.Heading, {
    variant: 'heading-xxl/medium',
    className: d.title,
    children: t
  }),
  (0, a.jsx)(i.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: d.subtitle,
    children: s
  }),
  (0, a.jsxs)('div', {
    className: d.content,
    children: [
      (0, a.jsxs)('div', {
        className: d.mainPanelContainer,
        children: [
          (0, a.jsx)(u, {
            title: c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
            icon: i.HourglassIcon,
            traits: l.jK,
            interests: g,
            handleUpdate: m
          }),
          (0, a.jsx)(u, {
            title: c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
            icon: i.UserIcon,
            traits: l.CT,
            interests: g,
            handleUpdate: m
          }),
          (0, a.jsx)(i.Text, {
            className: d.interestsCategoryTitle,
            variant: 'text-xs/semibold',
            color: 'text-muted',
            children: c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
          }),
          (0, a.jsx)('div', {
            className: d.languageSelect,
            children: (0, a.jsx)(i.SearchableSelect, {
              wrapperClassName: d.input,
              options: x,
              value: T,
              onChange: E,
              placeholder: c.Z.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
              multi: !0
            })
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: d.fixedWidthSidebar,
        children: null != _ && p.length > 0 && !h && (0, a.jsx)(o.Z, {
          guildId: n,
          progress: _,
          traitsToHighlight: I,
          maskDescription: !0,
          onTraitClick: b
        })
      })
    ]
  })
]
  });
};