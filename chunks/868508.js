a.r(t), a.d(t, {
    default: function () {
        return D;
    }
});
var r = a(735250);
a(470079);
var n = a(442837), s = a(704215), o = a(481060), d = a(2052), l = a(100527), c = a(906732), u = a(963249), i = a(706454), _ = a(594174), h = a(626135), N = a(63063), f = a(74538), g = a(290347), E = a(474936), m = a(981631), C = a(689938), p = a(870108), O = a(913907), A = a(82341), M = a(309539), x = a(74316);
let T = '2023_summer_bogo', b = 'DnkvLW5052Y';
function D(e) {
    let {renderModalProps: t} = e, {onClose: a} = t, D = (0, n.e7)([i.default], () => i.default.locale), y = D.split('-')[0], R = 'zh-CN' === D ? 'zh-Hans' : 'zh-TW' === D ? 'zh-Hant' : y, B = {
            url: ''.concat((0, m.ivE)(b), '?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=').concat('en' === y ? '0' : '1', '&cc_lang_pref=').concat(R),
            width: 498,
            height: 280
        }, {location: G} = (0, d.O)(), {analyticsLocations: S} = (0, c.ZP)(l.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), v = (0, n.e7)([_.default], () => _.default.getCurrentUser()), L = (0, f.M5)(v, E.p9.TIER_2), H = (0, f.I5)(v) && !L;
    return (0, r.jsx)(g.Z, {
        renderModalProps: t,
        heroArt: {
            type: 'embed',
            embed: B,
            thumbnail: {
                url: 'https://i.ytimg.com/vi/'.concat(b, '/maxresdefault.jpg'),
                width: 498,
                height: 280
            },
            href: 'https://youtu.be/'.concat(b)
        },
        modalDismissibleContent: s.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
        header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
        subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
        subHeaderExtra: () => (0, r.jsx)(o.Anchor, {
            className: p.termsApplyAnchor,
            href: N.Z.getArticleURL(m.BhN.SUMMER_2023_BOGO),
            children: (0, r.jsx)(o.Heading, {
                variant: 'heading-md/normal',
                className: p.termsApplyBodyText,
                children: C.Z.Messages.BOGO_TERMS_APPLY
            })
        }),
        featureCards: [
            {
                header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({ helpCenterLink: N.Z.getArticleURL(m.BhN.REMIXING) }),
                imageSrc: O,
                tagText: C.Z.Messages.EARLY_ACCESS
            },
            {
                header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                imageSrc: M
            },
            {
                header: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                subHeader: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                imageSrc: A
            }
        ],
        changeLogId: T,
        button: () => {
            let e = H ? 'upgrade_plan_button' : 'get_nitro_button', t = Date.now();
            return (0, r.jsxs)(o.ShinyButton, {
                className: p.buttonWide,
                innerClassName: p.innerButton,
                color: o.Button.Colors.GREEN,
                size: o.Button.Sizes.SMALL,
                onClick: () => {
                    h.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: T,
                        cta_type: e,
                        seconds_open: Math.round((Date.now() - t) / 1000),
                        target: 'bogo_payment_model'
                    }), (0, u.Z)({
                        subscriptionTier: E.Si.TIER_2,
                        analyticsLocations: S,
                        analyticsObject: {
                            ...G,
                            object: m.qAy.BUTTON_CTA,
                            objectType: m.Qqv.TIER_2
                        },
                        onClose: e => {
                            e && a();
                        }
                    });
                },
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: p.nitroIconSubHeader,
                        src: x
                    }),
                    C.Z.Messages.BOGO_CLAIM_OFFER
                ]
            });
        }
    });
}
