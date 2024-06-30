n.d(t, {
    t: function () {
        return o;
    }
}), n(411104);
var s = n(120356), a = n.n(s), i = n(481060), r = n(267642), l = n(987174);
function o(e, t) {
    if (t)
        return {
            icon: i.CheckmarkLargeIcon,
            className: l.unlocked
        };
    switch (e) {
    case r.Ro.EMOJI:
        return {
            icon: i.ReactionIcon,
            className: a()(l.icon, l.emoji)
        };
    case r.Ro.AUDIO:
        return {
            icon: i.HeadphonesIcon,
            className: a()(l.icon, l.audio)
        };
    case r.Ro.ANIMATED:
        return {
            icon: i.GifIcon,
            className: a()(l.icon, l.animated)
        };
    case r.Ro.CUSTOMIZATION:
        return {
            icon: i.ImagesIcon,
            className: a()(l.icon, l.customization)
        };
    case r.Ro.UPLOAD:
        return {
            icon: i.UploadIcon,
            className: a()(l.icon, l.upload)
        };
    case r.Ro.VANITY:
        return {
            icon: i.StarIcon,
            className: a()(l.icon, l.vanity)
        };
    case r.Ro.STREAM:
        return {
            icon: i.ScreenArrowIcon,
            className: a()(l.icon, l.stream)
        };
    case r.Ro.STICKER:
        return {
            icon: i.StickerIcon,
            className: a()(l.icon, l.sticker)
        };
    case r.Ro.CUSTOM_ROLE_ICON:
        return {
            icon: i.ShieldUserIcon,
            className: a()(l.icon, l.customRoleIcon)
        };
    case r.Ro.STAGE_VIDEO:
        return {
            icon: i.StageIcon,
            className: a()(l.icon, l.stage)
        };
    case r.Ro.SOUNDBOARD:
        return {
            icon: i.SoundboardIcon,
            className: a()(l.icon, l.soundboard)
        };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
