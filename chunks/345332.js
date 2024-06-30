n.d(t, {
    F: function () {
        return d;
    },
    Y: function () {
        return c;
    }
});
var r = n(735250), i = n(470079), a = n(772848), o = n(993365), s = n(481060), l = n(561466), u = n(354603);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.si, {
            position: r = l.si.position,
            component: i = l.si.component,
            duration: o = l.si.duration
        } = n;
    return {
        message: e,
        id: (0, a.Z)(),
        type: t,
        options: {
            position: r,
            component: i,
            duration: o
        }
    };
}
let d = i.memo(function (e) {
    let {
        message: t,
        type: n,
        id: i,
        options: {
            component: a = l.si.component
        } = l.si
    } = e;
    return null != a ? (0, r.jsx)(r.Fragment, { children: a }) : (0, r.jsxs)('div', {
        id: i,
        className: u.toast,
        children: [
            function (e) {
                switch (e) {
                case l.pC.SUCCESS:
                    return (0, r.jsx)(s.CheckmarkLargeIcon, {
                        size: 'md',
                        className: u.icon,
                        color: s.tokens.colors.STATUS_POSITIVE.css
                    });
                case l.pC.FAILURE:
                    return (0, r.jsx)(s.CloseLargeIcon, {
                        size: 'md',
                        className: u.icon,
                        color: s.tokens.colors.STATUS_DANGER.css
                    });
                case l.pC.CLIP:
                    return (0, r.jsx)(s.ClipsIcon, {
                        size: 'xs',
                        className: u.clipIcon,
                        color: s.tokens.colors.HEADER_PRIMARY.css
                    });
                case l.pC.LINK:
                    return (0, r.jsx)(s.LinkIcon, {
                        className: u.icon,
                        color: s.tokens.colors.HEADER_PRIMARY.css
                    });
                case l.pC.FORWARD:
                    return (0, r.jsx)(s.ChatArrowRightIcon, {
                        className: u.icon,
                        color: s.tokens.colors.STATUS_POSITIVE.css
                    });
                default:
                    return null;
                }
            }(n),
            (0, r.jsx)(o.x, {
                className: u.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: t
            })
        ]
    });
});
