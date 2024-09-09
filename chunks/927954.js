n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var s = n(470079),
    a = n(689938);
function i(e) {
    let [t, n] = s.useState(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMAGE_CTA_DEFAULT_FILENAME),
        i = null == e ? a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT;
    return {
        imageCTA: i,
        imageAriaLabel: null == e ? a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT_A11Y.format({ filename: t }),
        setFilename: n
    };
}
