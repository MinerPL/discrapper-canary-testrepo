s.d(t, {
    Z: function () {
        return S;
    }
});
var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(481060), o = s(208049), l = s(242291), c = s(153124), d = s(63063), _ = s(36703), E = s(981631), u = s(689938), T = s(824379);
let I = (0, c.hQ)();
function S() {
    let e = (0, l.pI)();
    return (0, n.jsxs)('div', {
        className: i()(T.soundboardRow),
        children: [
            (0, n.jsxs)('div', {
                className: i()(T.soundboardColumn, T.leftColumn),
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H5,
                        className: T.soundboardTitle,
                        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD
                    }),
                    (0, n.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME_DESCRIPTION_WITH_LINK.format({ helpCenterArticle: d.Z.getArticleURL(E.BhN.SOUNDBOARD) })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: i()(T.soundboardColumn, T.__invalid_rightColumn),
                children: [
                    (0, n.jsx)(r.FormTitle, {
                        id: I,
                        tag: r.FormTitleTags.H5,
                        className: T.soundboardSubtitle,
                        children: u.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
                    }),
                    (0, n.jsx)(r.Slider, {
                        initialValue: (0, _.P)(e),
                        maxValue: 100,
                        onValueRender: e => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: function (t) {
                            e = (0, _.A)(t), (0, o.xz)(e);
                        },
                        'aria-labelledby': I
                    })
                ]
            })
        ]
    });
}
