n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(735250);
n(470079);
var a = n(120356), i = n.n(a), r = n(780384), l = n(481060), o = n(410030), c = n(44315), d = n(208567), u = n(981631), _ = n(790689);
let E = u.Ilk.PRIMARY_400, I = u.Ilk.PRIMARY_500;
function T(e) {
    let {
            enabled: t,
            imageClassName: n,
            iconWrapperClassName: a,
            ...u
        } = e, T = (0, o.ZP)(), m = (0, r.wj)(T) ? E : I, N = {
            height: 18,
            width: 18,
            color: (0, c.Lq)(m)
        };
    return (0, s.jsx)(d.Z, {
        className: i()({
            [_.avatarUploader]: t,
            [_.avatarUploaderDisabled]: !t
        }),
        imageClassName: i()(n, _.avatarUploaderInnerSquare, { [_.avatarUploaderInnerSquareDisabled]: !t }),
        icon: null != u.image && '' !== u.image ? (0, s.jsx)(l.PencilIcon, {
            size: 'custom',
            ...N
        }) : (0, s.jsx)(l.ImagePlusIcon, {
            size: 'custom',
            ...N
        }),
        iconClassName: i()(_.avatarUploadIcon, _.hideDefaultIcon),
        iconWrapperClassName: a,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...u
    });
}
