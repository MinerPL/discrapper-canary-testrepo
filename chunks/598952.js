n.d(t, {
    Z: function () {
        return o;
    }
});
var a = n(735250);
n(470079);
var r = n(481060),
    i = n(252892);
function o(e) {
    var t;
    let { attachment: n } = e,
        o = Math.round(((null !== (t = n.size) && void 0 !== t ? t : 0) / 1024 / 1024) * 100) / 100;
    return (0, a.jsxs)('div', {
        className: i.container,
        children: [
            (0, a.jsx)(r.ImageFileIcon, {
                size: 'xs',
                color: 'currentColor',
                className: i.fileIcon
            }),
            (0, a.jsx)(r.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: i.fileName,
                children: n.filename
            }),
            (0, a.jsx)(r.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)('div', { className: i.dot }),
            (0, a.jsx)(r.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsxs)(r.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [o, 'MB']
            })
        ]
    });
}
