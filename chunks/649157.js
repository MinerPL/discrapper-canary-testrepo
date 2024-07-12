s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(153867),
  l = s(706454),
  c = s(689938),
  d = s(21105),
  _ = s(444675);
t.Z = i.ZP.connectStores([l.default], () => ({
  currentLocale: l.default.locale
}))(function(e) {
  let [t, i] = a.useState(e.currentLocale), [l] = a.useState(() => c.Z.getAvailableLocales().map(e => {
let t;
try {
  t = s(621287)('./'.concat(e.value, '.png'));
} catch (e) {
  t = s(1474);
}
return {
  ...e,
  name: (0, n.jsxs)('div', {
    className: d.option,
    children: [
      (0, n.jsx)('span', {
        className: d.localeName,
        children: e.name
      }),
      (0, n.jsx)('span', {
        className: d.localizedName,
        children: e.localizedName
      }),
      (0, n.jsx)('div', {
        className: d.flag,
        'aria-hidden': !0,
        children: (0, n.jsx)('img', {
          alt: '',
          src: t,
          className: d.flagImage
        })
      })
    ]
  })
};
  })), E = a.useCallback(e => {
let {
  value: t
} = e;
i(t), _.nextTick(() => o.ZP.updateLocale(t));
  }, []);
  return (0, n.jsx)(r.FormSection, {
tag: r.FormTitleTags.H1,
title: c.Z.Messages.LANGUAGE,
children: (0, n.jsx)(r.FormSection, {
  children: (0, n.jsx)(r.FormItem, {
    title: c.Z.Messages.LANGUAGE_SELECT,
    children: (0, n.jsx)(r.RadioGroup, {
      onChange: E,
      options: l,
      value: t
    })
  })
})
  });
});