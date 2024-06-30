n.d(t, {
    Z: function () {
        return r;
    }
}), n(757143);
var i = n(689938);
let l = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function r(e) {
    let t = i.Z.Messages.ACTIVITY_PANEL_GO_LIVE;
    return null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName), {
        sanitizedTitle: t.replace(l, ''),
        title: t
    };
}
