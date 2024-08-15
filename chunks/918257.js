t.d(s, {
  Z: function() {
return S;
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(481060),
  o = t(313201),
  l = t(208049),
  c = t(242291),
  d = t(63063),
  _ = t(36703),
  E = t(981631),
  u = t(689938),
  I = t(238515);
let T = (0, o.hQ)();

function S() {
  let e = (0, c.pI)();
  return (0, n.jsxs)('div', {
className: i()(I.soundboardRow),
children: [
  (0, n.jsxs)('div', {
    className: i()(I.soundboardColumn, I.leftColumn),
    children: [
      (0, n.jsx)(r.FormTitle, {
        tag: r.FormTitleTags.H5,
        className: I.soundboardTitle,
        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD
      }),
      (0, n.jsx)(r.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME_DESCRIPTION_WITH_LINK.format({
          helpCenterArticle: d.Z.getArticleURL(E.BhN.SOUNDBOARD)
        })
      })
    ]
  }),
  (0, n.jsxs)('div', {
    className: i()(I.soundboardColumn, I.__invalid_rightColumn),
    children: [
      (0, n.jsx)(r.FormTitle, {
        id: T,
        tag: r.FormTitleTags.H5,
        className: I.soundboardSubtitle,
        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
      }),
      (0, n.jsx)(r.Slider, {
        initialValue: (0, _.P)(e),
        maxValue: 100,
        onValueRender: e => ''.concat(e.toFixed(0), '%'),
        asValueChanges: function(s) {
          e = (0, _.A)(s), (0, l.xz)(e);
        },
        'aria-labelledby': T
      })
    ]
  })
]
  });
}