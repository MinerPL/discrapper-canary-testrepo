n.r(a), n.d(a, {
    default: function () {
        return m;
    }
}), n(47120);
var t = n(735250);
n(470079);
var s = n(512722), c = n.n(s), o = n(481060), r = n(584825), i = n(353254), d = n(866104), l = n(689938), _ = n(457867);
function m(e) {
    let {
            onClose: a,
            guildId: n,
            transitionState: s
        } = e, m = (0, r.YB)(n);
    c()(null != m, 'subscriptionsSettings cannot be null');
    let u = m.cover_image_asset, [h] = (0, i.Z)(null != u ? u : void 0);
    return (0, t.jsxs)(o.ModalRoot, {
        className: _.modal,
        size: o.ModalSize.MEDIUM,
        transitionState: s,
        'aria-label': l.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_ARIA,
        children: [
            (0, t.jsx)('div', {
                ref: h,
                className: _.coverImageContainer,
                children: null != u && (0, t.jsx)(d.Z, { coverImageAsset: u })
            }),
            (0, t.jsx)(o.Heading, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: _.header,
                children: l.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_HEADER
            }),
            (0, t.jsx)(o.ModalContent, {
                className: _.content,
                children: (0, t.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    className: _.description,
                    children: m.description
                })
            }),
            (0, t.jsx)(o.ModalFooter, {
                className: _.__invalid_footer,
                children: (0, t.jsx)(o.Button, {
                    onClick: a,
                    children: l.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_CTA
                })
            })
        ]
    });
}
