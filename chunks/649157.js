t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(153867),
  l = t(706454),
  c = t(689938),
  d = t(311929),
  _ = t(444675);
s.Z = i.ZP.connectStores([l.default], () => ({
  currentLocale: l.default.locale
}))(function(e) {
  let [s, i] = a.useState(e.currentLocale), [l] = a.useState(() => c.Z.getAvailableLocales().map(e => {
let s;
try {
  s = t(621287)('./'.concat(e.value, '.png'));
} catch (e) {
  s = t(1474);
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
          src: s,
          className: d.flagImage
        })
      })
    ]
  })
};
  })), E = a.useCallback(e => {
let {
  value: s
} = e;
i(s), _.nextTick(() => o.ZP.updateLocale(s));
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
      value: s
    })
  })
})
  });
});