n.r(t), n.d(t, {
    UPLOAD_ERROR_MODAL_KEY: function () {
        return f;
    },
    default: function () {
        return E;
    },
    openUploadError: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(952265), s = n(466377), l = n(355314), u = n(153124), c = n(310752), d = n(731994), _ = n(214932);
function E(e) {
    let {
            title: t,
            help: n,
            showPremiumUpsell: i,
            transitionState: o,
            icons: E,
            fileSize: f,
            onClose: h
        } = e, p = (0, u.Dt)(), m = null != E ? E : d.J6;
    return i ? (0, r.jsx)(l.Z, {
        transitionState: o,
        onClose: h,
        fileSize: f
    }) : (0, r.jsx)(s.Y0, {
        size: s.Cg.DYNAMIC,
        'aria-labelledby': p,
        transitionState: o,
        children: (0, r.jsx)('div', {
            className: a()(_.uploadDropModal, _.error),
            children: (0, r.jsxs)('div', {
                className: _.inner,
                children: [
                    (0, r.jsx)(c.Z, { icons: m }),
                    (0, r.jsx)('div', {
                        id: p,
                        className: _.title,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: _.instructions,
                        children: n
                    })
                ]
            })
        })
    });
}
let f = 'UPLOAD_ERROR_MODAL_KEY';
function h(e) {
    (0, o.h7)(t => (0, r.jsx)(E, {
        ...t,
        ...e
    }), { modalKey: f });
}
