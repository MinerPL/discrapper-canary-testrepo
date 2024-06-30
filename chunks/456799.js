var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(481060), o = s(614771);
t.Z = function (e) {
    let {
        children: t,
        withBorder: s = !1
    } = e;
    return (0, n.jsx)(r.FocusBlock, {
        children: (0, n.jsx)(r.Card, {
            className: i()(o.componentPreviewWrapper, { [o.componentPreviewWrapperBordered]: s }),
            outline: s,
            children: (0, n.jsx)('div', {
                className: o.componentPreview,
                onClickCapture: function (e) {
                    e.stopPropagation();
                },
                children: t
            })
        })
    });
};
