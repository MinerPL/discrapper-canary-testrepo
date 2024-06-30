n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var s = n(481060), i = n(847033), o = n(544978), a = n(689938), l = n(149429);
function c() {
    let {
        selectedTab: e,
        isPhantomPreview: t,
        handlePreviewDismiss: n
    } = (0, i.m)();
    return t ? (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: l.previewNotice,
                children: [
                    (0, r.jsx)(s.EyeSlashIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        className: l.previewNoticeText,
                        children: e === o.y.GUILD_PRODUCTS_PREVIEW ? a.Z.Messages.GUILD_SHOP_TAB_PREVIEW_NOTICE_LABEL : a.Z.Messages.GUILD_SHOP_PAGE_PREVIEW_NOTICE_LABEL
                    })
                ]
            }),
            (0, r.jsx)(s.Button, {
                size: s.Button.Sizes.MIN,
                color: s.Button.Colors.PRIMARY,
                className: l.removePreviewButton,
                onClick: n,
                children: e === o.y.GUILD_PRODUCTS_PREVIEW ? a.Z.Messages.GUILD_SHOP_REMOVE_PREVIEW_TAB_BUTTON : a.Z.Messages.GUILD_SHOP_REMOVE_PREVIEW_PAGE_BUTTON
            })
        ]
    }) : null;
}
