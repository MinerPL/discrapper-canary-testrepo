n.d(t, {
    n: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(187753), a = n(596454), o = n(73346);
function s(e, t) {
    if (null != t)
        switch (t.type) {
        case i.T.STORE_ASSET:
            let n = (0, o._W)(e, t.store_asset_id);
            return (0, r.jsx)('img', {
                src: n,
                alt: '',
                className: 'emoji'
            });
        case i.T.EMOJI:
            return (0, r.jsx)(a.Z, { emojiName: t.emoji });
        }
}
