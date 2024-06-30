n.d(t, {
    $G: function () {
        return c;
    },
    OR: function () {
        return d;
    },
    aL: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(345898), r = n(285207);
let o = 660, c = e => (0, i.jsx)(l.Z, {
        ...e,
        className: s()(e.className, {
            [r.embedVertical]: !e.isHorizontal,
            [r.embedHorizontal]: e.isHorizontal
        })
    }), d = e => {
        let {isHorizontal: t} = e;
        return (0, i.jsx)(c, {
            ...e,
            media: () => (0, i.jsx)('div', {
                className: s()(r.loadingDescription),
                children: (0, i.jsx)('div', {
                    className: s()(r.loadingBackgroundWrapper, { [r.loadingBackgroundWrapperHorizontal]: t }),
                    children: (0, i.jsx)('div', { className: r.loadingBackground })
                })
            }),
            title: () => (0, i.jsx)('div', { className: s()(r.loadingImage, { [r.loadingImageHorizontal]: t }) })
        });
    };
