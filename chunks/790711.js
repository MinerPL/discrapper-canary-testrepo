n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(832450);
function o(e) {
    let {
            user: t,
            nickname: n
        } = e, o = null != n;
    return (0, r.jsx)(i.Avatar, {
        src: t.getAvatarURL(void 0, o ? 16 : 24),
        size: o ? i.AvatarSizes.SIZE_16 : i.AvatarSizes.SIZE_24,
        className: o ? a.miniAvatar : a.largeAvatar,
        'aria-hidden': !0
    });
}
