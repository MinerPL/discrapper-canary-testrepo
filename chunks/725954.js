i.d(n, {
    Z: function () {
        return f;
    }
});
var t = i(735250);
i(470079);
var o = i(120356), s = i.n(o), l = i(442837), a = i(481060), r = i(129861), c = i(427217), d = i(158776), u = i(51144), I = i(981631), E = i(689938), _ = i(300139);
function f(e) {
    let {
            user: n,
            displayProfile: i
        } = e, o = (0, l.e7)([d.Z], () => d.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), f = u.ZP.getName(n);
    return (0, t.jsxs)('div', {
        className: _.container,
        children: [
            null == f && (0, t.jsx)(r.Z, {
                user: n,
                className: _.nameTag,
                usernameClass: _.username,
                discriminatorClass: _.discriminator
            }),
            null != f && (0, t.jsxs)('div', {
                children: [
                    (0, t.jsx)(a.Text, {
                        variant: 'text-lg/semibold',
                        style: { marginRight: '12px' },
                        children: f
                    }),
                    (0, t.jsx)(r.Z, {
                        user: n,
                        forceUsername: !0,
                        usernameClass: _.discriminator,
                        discriminatorClass: _.discriminator,
                        className: s()(_.nameTag, _.nameTagSmall)
                    })
                ]
            }),
            (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== '' && (0, t.jsx)(a.Tooltip, {
                text: E.Z.Messages.USER_PROFILE_PRONOUNS,
                children: e => (0, t.jsx)(a.Text, {
                    ...e,
                    variant: 'text-sm/normal',
                    className: s()(_.pronouns, _.nameTagSmall),
                    children: i.pronouns
                })
            }),
            null != o ? (0, t.jsx)('div', {
                className: _.__invalid_customStatusActivity,
                children: (0, t.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: _.customStatusText,
                    children: (0, t.jsx)(c.Z, {
                        activity: o,
                        className: _.customStatus,
                        emojiClassName: _.customStatusEmoji,
                        soloEmojiClassName: _.customStatusSoloEmoji
                    })
                })
            }) : null
        ]
    });
}
