n.d(t, {
    Wc: function () {
        return i;
    },
    xY: function () {
        return h;
    }
}), n(47120), n(411104), n(653041);
var i, s, a = n(230367), r = n(320215), l = n(240773), o = n(495852);
(s = i || (i = {}))[s.UNSPECIFIED = 0] = 'UNSPECIFIED', s[s.OPEN_MARKETING_PAGE = 1] = 'OPEN_MARKETING_PAGE', s[s.OPEN_TIER_2_PAYMENT_MODAL = 2] = 'OPEN_TIER_2_PAYMENT_MODAL';
class c extends o.C {
    create(e) {
        let t = {
            header: '',
            pill: '',
            body: '',
            imageLink: '',
            imageLinkLightTheme: ''
        };
        return globalThis.Object.defineProperty(t, l.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, r.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, i) {
        let s = null != i ? i : this.create(), r = e.pos + t;
        for (; e.pos < r;) {
            let [t, i] = e.tag();
            switch (t) {
            case 1:
                s.header = e.string();
                break;
            case 2:
                s.pill = e.string();
                break;
            case 3:
                s.body = e.string();
                break;
            case 4:
                s.imageLink = e.string();
                break;
            case 5:
                s.imageLinkLightTheme = e.string();
                break;
            default:
                let r = n.readUnknownField;
                if ('throw' === r)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let l = e.skip(i);
                !1 !== r && (!0 === r ? a.z.onRead : r)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.header && t.tag(1, a.TD.LengthDelimited).string(e.header), '' !== e.pill && t.tag(2, a.TD.LengthDelimited).string(e.pill), '' !== e.body && t.tag(3, a.TD.LengthDelimited).string(e.body), '' !== e.imageLink && t.tag(4, a.TD.LengthDelimited).string(e.imageLink), '' !== e.imageLinkLightTheme && t.tag(5, a.TD.LengthDelimited).string(e.imageLinkLightTheme);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.FeatureCard', [
            {
                no: 1,
                name: 'header',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'pill',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'body',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'image_link',
                kind: 'scalar',
                T: 9
            },
            {
                no: 5,
                name: 'image_link_light_theme',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let d = new c();
class u extends o.C {
    create(e) {
        let t = {
            copy: '',
            buttonAction: 0
        };
        return globalThis.Object.defineProperty(t, l.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, r.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, i) {
        let s = null != i ? i : this.create(), r = e.pos + t;
        for (; e.pos < r;) {
            let [t, i] = e.tag();
            switch (t) {
            case 1:
                s.copy = e.string();
                break;
            case 2:
                s.buttonAction = e.int32();
                break;
            default:
                let r = n.readUnknownField;
                if ('throw' === r)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let l = e.skip(i);
                !1 !== r && (!0 === r ? a.z.onRead : r)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.copy && t.tag(1, a.TD.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, a.TD.Varint).int32(e.buttonAction);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.SubscriptionButton', [
            {
                no: 1,
                name: 'copy',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'button_action',
                kind: 'enum',
                T: () => [
                    'discord_protos.premium_marketing.v1.ButtonAction',
                    i,
                    'BUTTON_ACTION_'
                ]
            }
        ]);
    }
}
let _ = new u();
class E extends o.C {
    create(e) {
        let t = {
            header: '',
            subheader: '',
            videoLink: '',
            helpArticleId: '',
            featureCards: [],
            dismissKey: '',
            heroArtVideoLinkLightTheme: '',
            heroArtImageLinkDarkTheme: '',
            heroArtImageLinkLightTheme: '',
            modalTopPill: ''
        };
        return globalThis.Object.defineProperty(t, l.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, r.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, i) {
        let s = null != i ? i : this.create(), r = e.pos + t;
        for (; e.pos < r;) {
            let [t, i] = e.tag();
            switch (t) {
            case 1:
                s.header = e.string();
                break;
            case 2:
                s.subheader = e.string();
                break;
            case 3:
                s.videoLink = e.string();
                break;
            case 4:
                s.helpArticleId = e.string();
                break;
            case 5:
                s.featureCards.push(d.internalBinaryRead(e, e.uint32(), n));
                break;
            case 6:
                s.button = _.internalBinaryRead(e, e.uint32(), n, s.button);
                break;
            case 7:
                s.dismissKey = e.string();
                break;
            case 8:
                s.heroArtVideoLinkLightTheme = e.string();
                break;
            case 9:
                s.heroArtImageLinkDarkTheme = e.string();
                break;
            case 10:
                s.heroArtImageLinkLightTheme = e.string();
                break;
            case 11:
                s.modalTopPill = e.string();
                break;
            default:
                let r = n.readUnknownField;
                if ('throw' === r)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let l = e.skip(i);
                !1 !== r && (!0 === r ? a.z.onRead : r)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.header && t.tag(1, a.TD.LengthDelimited).string(e.header), '' !== e.subheader && t.tag(2, a.TD.LengthDelimited).string(e.subheader), '' !== e.videoLink && t.tag(3, a.TD.LengthDelimited).string(e.videoLink), '' !== e.helpArticleId && t.tag(4, a.TD.LengthDelimited).string(e.helpArticleId);
        for (let i = 0; i < e.featureCards.length; i++)
            d.internalBinaryWrite(e.featureCards[i], t.tag(5, a.TD.LengthDelimited).fork(), n).join();
        e.button && _.internalBinaryWrite(e.button, t.tag(6, a.TD.LengthDelimited).fork(), n).join(), '' !== e.dismissKey && t.tag(7, a.TD.LengthDelimited).string(e.dismissKey), '' !== e.heroArtVideoLinkLightTheme && t.tag(8, a.TD.LengthDelimited).string(e.heroArtVideoLinkLightTheme), '' !== e.heroArtImageLinkDarkTheme && t.tag(9, a.TD.LengthDelimited).string(e.heroArtImageLinkDarkTheme), '' !== e.heroArtImageLinkLightTheme && t.tag(10, a.TD.LengthDelimited).string(e.heroArtImageLinkLightTheme), '' !== e.modalTopPill && t.tag(11, a.TD.LengthDelimited).string(e.modalTopPill);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties', [
            {
                no: 1,
                name: 'header',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'subheader',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'video_link',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'help_article_id',
                kind: 'scalar',
                T: 9
            },
            {
                no: 5,
                name: 'feature_cards',
                kind: 'message',
                repeat: 1,
                T: () => d
            },
            {
                no: 6,
                name: 'button',
                kind: 'message',
                T: () => _
            },
            {
                no: 7,
                name: 'dismiss_key',
                kind: 'scalar',
                T: 9
            },
            {
                no: 8,
                name: 'hero_art_video_link_light_theme',
                kind: 'scalar',
                T: 9
            },
            {
                no: 9,
                name: 'hero_art_image_link_dark_theme',
                kind: 'scalar',
                T: 9
            },
            {
                no: 10,
                name: 'hero_art_image_link_light_theme',
                kind: 'scalar',
                T: 9
            },
            {
                no: 11,
                name: 'modal_top_pill',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let h = new E();
