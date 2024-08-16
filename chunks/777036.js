n.d(t, {
    Q: function () {
        return i;
    }
});
var r,
    i,
    a = n(735250);
n(470079);
var s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(571068);
((r = i || (i = {}))[(r.WARNING = 0)] = 'WARNING'), (r[(r.INFO = 1)] = 'INFO'), (r[(r.ERROR = 2)] = 'ERROR'), (r[(r.POSITIVE = 3)] = 'POSITIVE');
t.Z = function (e) {
    let { children: t, messageType: n, className: r, textColor: i = 'text-normal', textVariant: s = 'text-sm/medium' } = e,
        c = (function (e) {
            switch (e) {
                case 0:
                    return l.CircleWarningIcon;
                case 1:
                    return l.CircleInformationIcon;
                case 2:
                    return l.CircleXIcon;
                case 3:
                    return l.CheckmarkLargeIcon;
            }
        })(n),
        d = (function (e) {
            switch (e) {
                case 0:
                    return u.warning;
                case 1:
                    return u.info;
                case 2:
                    return u.error;
                case 3:
                    return u.positive;
            }
        })(n);
    return (0, a.jsxs)('div', {
        className: o()(u.container, d, r),
        children: [
            (0, a.jsx)('div', {
                className: u.iconDiv,
                children: (0, a.jsx)(c, { className: u.icon })
            }),
            (0, a.jsx)(l.Text, {
                className: u.text,
                color: i,
                variant: s,
                children: t
            })
        ]
    });
};
