n.d(t, {
    Dd: function () {
        return d;
    },
    Sw: function () {
        return _;
    },
    To: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(49800), s = n(285952), l = n(534542), u = n(512983), c = n(17183);
let d = o.Z.Types, _ = {
        LEFT: 'left',
        RIGHT: 'right'
    };
function E(e) {
    let t, n, {
            type: i = o.Z.Types.DANGER,
            imageData: d,
            button: E,
            className: f,
            iconClassName: h,
            title: p,
            body: m,
            style: I,
            align: T = s.Z.Align.START
        } = e, g = s.Z.Direction.HORIZONTAL;
    if (null != d) {
        let {
            position: e,
            ...n
        } = d;
        t = (0, r.jsx)(s.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)('img', {
                alt: '',
                className: a()(c.icon, h),
                ...n
            })
        }), e === _.RIGHT && (g = s.Z.Direction.HORIZONTAL_REVERSE);
    } else
        null != E && (n = E);
    let S = !0;
    return i === o.Z.Types.PRIMARY && (S = !1), (0, r.jsx)(o.Z, {
        className: a()(c.formNotice, f),
        type: i,
        style: I,
        children: (0, r.jsxs)(s.Z, {
            direction: g,
            align: T,
            children: [
                t,
                (0, r.jsxs)(s.Z.Child, {
                    children: [
                        null != p && '' !== p ? (0, r.jsx)(u.v, {
                            tag: u.R.H5,
                            className: a()(c.formNoticeTitle, { [c.whiteText]: S }),
                            faded: !0,
                            children: p
                        }) : null,
                        (0, r.jsx)(l.R, {
                            className: a()(c.formNoticeBody, { [c.whiteText]: S }),
                            children: m
                        }),
                        n
                    ]
                })
            ]
        })
    });
}
E.Types = o.Z.Types;
