n.d(t, {
  Wc: function() {
return i;
  },
  xY: function() {
return p;
  }
}), n(47120), n(411104), n(653041);
var i, a, s = n(230367),
  r = n(320215),
  l = n(240773),
  o = n(495852);
(a = i || (i = {}))[a.UNSPECIFIED = 0] = 'UNSPECIFIED', a[a.OPEN_MARKETING_PAGE = 1] = 'OPEN_MARKETING_PAGE', a[a.OPEN_TIER_2_PAYMENT_MODAL = 2] = 'OPEN_TIER_2_PAYMENT_MODAL';
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
let a = null != i ? i : this.create(),
  r = e.pos + t;
for (; e.pos < r;) {
  let [t, i] = e.tag();
  switch (t) {
    case 1:
      a.header = e.string();
      break;
    case 2:
      a.pill = e.string();
      break;
    case 3:
      a.body = e.string();
      break;
    case 4:
      a.imageLink = e.string();
      break;
    case 5:
      a.imageLinkLightTheme = e.string();
      break;
    default:
      let r = n.readUnknownField;
      if ('throw' === r)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
      let l = e.skip(i);
      !1 !== r && (!0 === r ? s.z.onRead : r)(this.typeName, a, t, i, l);
  }
}
return a;
  }
  internalBinaryWrite(e, t, n) {
'' !== e.header && t.tag(1, s.TD.LengthDelimited).string(e.header), '' !== e.pill && t.tag(2, s.TD.LengthDelimited).string(e.pill), '' !== e.body && t.tag(3, s.TD.LengthDelimited).string(e.body), '' !== e.imageLink && t.tag(4, s.TD.LengthDelimited).string(e.imageLink), '' !== e.imageLinkLightTheme && t.tag(5, s.TD.LengthDelimited).string(e.imageLinkLightTheme);
let i = n.writeUnknownFields;
return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.premium_marketing.v1.FeatureCard', [{
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
let a = null != i ? i : this.create(),
  r = e.pos + t;
for (; e.pos < r;) {
  let [t, i] = e.tag();
  switch (t) {
    case 1:
      a.copy = e.string();
      break;
    case 2:
      a.buttonAction = e.int32();
      break;
    default:
      let r = n.readUnknownField;
      if ('throw' === r)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
      let l = e.skip(i);
      !1 !== r && (!0 === r ? s.z.onRead : r)(this.typeName, a, t, i, l);
  }
}
return a;
  }
  internalBinaryWrite(e, t, n) {
'' !== e.copy && t.tag(1, s.TD.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, s.TD.Varint).int32(e.buttonAction);
let i = n.writeUnknownFields;
return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.premium_marketing.v1.SubscriptionButton', [{
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
class h extends o.C {
  create(e) {
let t = {
  heroArtLocalizedVideoLinksDarkTheme: {},
  heroArtLocalizedVideoLinksLightTheme: {},
  heroArtVideoSubtitleLinks: {}
};
return globalThis.Object.defineProperty(t, l.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, r.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, i) {
let a = null != i ? i : this.create(),
  r = e.pos + t;
for (; e.pos < r;) {
  let [t, i] = e.tag();
  switch (t) {
    case 1:
      this.binaryReadMap1(a.heroArtLocalizedVideoLinksDarkTheme, e, n);
      break;
    case 2:
      this.binaryReadMap2(a.heroArtLocalizedVideoLinksLightTheme, e, n);
      break;
    case 3:
      this.binaryReadMap3(a.heroArtVideoSubtitleLinks, e, n);
      break;
    default:
      let r = n.readUnknownField;
      if ('throw' === r)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
      let l = e.skip(i);
      !1 !== r && (!0 === r ? s.z.onRead : r)(this.typeName, a, t, i, l);
  }
}
return a;
  }
  binaryReadMap1(e, t, n) {
let i = t.uint32(),
  a = t.pos + i,
  s, r;
for (; t.pos < a;) {
  let [e, n] = t.tag();
  switch (e) {
    case 1:
      s = t.string();
      break;
    case 2:
      r = t.string();
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme');
  }
}
e[null != s ? s : ''] = null != r ? r : '';
  }
  binaryReadMap2(e, t, n) {
let i = t.uint32(),
  a = t.pos + i,
  s, r;
for (; t.pos < a;) {
  let [e, n] = t.tag();
  switch (e) {
    case 1:
      s = t.string();
      break;
    case 2:
      r = t.string();
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme');
  }
}
e[null != s ? s : ''] = null != r ? r : '';
  }
  binaryReadMap3(e, t, n) {
let i = t.uint32(),
  a = t.pos + i,
  s, r;
for (; t.pos < a;) {
  let [e, n] = t.tag();
  switch (e) {
    case 1:
      s = t.string();
      break;
    case 2:
      r = t.string();
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links');
  }
}
e[null != s ? s : ''] = null != r ? r : '';
  }
  internalBinaryWrite(e, t, n) {
for (let n of Object.keys(e.heroArtLocalizedVideoLinksDarkTheme))
  t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(n).tag(2, s.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksDarkTheme[n]).join();
for (let n of Object.keys(e.heroArtLocalizedVideoLinksLightTheme))
  t.tag(2, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(n).tag(2, s.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksLightTheme[n]).join();
for (let n of Object.keys(e.heroArtVideoSubtitleLinks))
  t.tag(3, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(n).tag(2, s.TD.LengthDelimited).string(e.heroArtVideoSubtitleLinks[n]).join();
let i = n.writeUnknownFields;
return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.premium_marketing.v1.Variant1Storage', [{
    no: 1,
    name: 'hero_art_localized_video_links_dark_theme',
    kind: 'map',
    K: 9,
    V: {
      kind: 'scalar',
      T: 9
    }
  },
  {
    no: 2,
    name: 'hero_art_localized_video_links_light_theme',
    kind: 'map',
    K: 9,
    V: {
      kind: 'scalar',
      T: 9
    }
  },
  {
    no: 3,
    name: 'hero_art_video_subtitle_links',
    kind: 'map',
    K: 9,
    V: {
      kind: 'scalar',
      T: 9
    }
  }
]);
  }
}
let E = new h();
class I extends o.C {
  create(e) {
let t = {
  link: '',
  locale: '',
  isDefault: !1
};
return globalThis.Object.defineProperty(t, l.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, r.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, i) {
let a = null != i ? i : this.create(),
  r = e.pos + t;
for (; e.pos < r;) {
  let [t, i] = e.tag();
  switch (t) {
    case 1:
      a.link = e.string();
      break;
    case 2:
      a.locale = e.string();
      break;
    case 3:
      a.isDefault = e.bool();
      break;
    default:
      let r = n.readUnknownField;
      if ('throw' === r)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
      let l = e.skip(i);
      !1 !== r && (!0 === r ? s.z.onRead : r)(this.typeName, a, t, i, l);
  }
}
return a;
  }
  internalBinaryWrite(e, t, n) {
'' !== e.link && t.tag(1, s.TD.LengthDelimited).string(e.link), '' !== e.locale && t.tag(2, s.TD.LengthDelimited).string(e.locale), !1 !== e.isDefault && t.tag(3, s.TD.Varint).bool(e.isDefault);
let i = n.writeUnknownFields;
return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.premium_marketing.v1.Subtitle', [{
    no: 1,
    name: 'link',
    kind: 'scalar',
    T: 9
  },
  {
    no: 2,
    name: 'locale',
    kind: 'scalar',
    T: 9
  },
  {
    no: 3,
    name: 'is_default',
    kind: 'scalar',
    T: 8
  }
]);
  }
}
let m = new I();
class g extends o.C {
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
  modalTopPill: '',
  body: '',
  heroArtVideoSubtitles: []
};
return globalThis.Object.defineProperty(t, l.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, r.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, i) {
let a = null != i ? i : this.create(),
  r = e.pos + t;
for (; e.pos < r;) {
  let [t, i] = e.tag();
  switch (t) {
    case 1:
      a.header = e.string();
      break;
    case 2:
      a.subheader = e.string();
      break;
    case 3:
      a.videoLink = e.string();
      break;
    case 4:
      a.helpArticleId = e.string();
      break;
    case 5:
      a.featureCards.push(d.internalBinaryRead(e, e.uint32(), n));
      break;
    case 6:
      a.button = _.internalBinaryRead(e, e.uint32(), n, a.button);
      break;
    case 7:
      a.dismissKey = e.string();
      break;
    case 8:
      a.heroArtVideoLinkLightTheme = e.string();
      break;
    case 9:
      a.heroArtImageLinkDarkTheme = e.string();
      break;
    case 10:
      a.heroArtImageLinkLightTheme = e.string();
      break;
    case 11:
      a.modalTopPill = e.string();
      break;
    case 12:
      a.body = e.string();
      break;
    case 13:
      a.heroArtVideoSubtitles.push(m.internalBinaryRead(e, e.uint32(), n));
      break;
    case 14:
      a.storage = E.internalBinaryRead(e, e.uint32(), n, a.storage);
      break;
    default:
      let r = n.readUnknownField;
      if ('throw' === r)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
      let l = e.skip(i);
      !1 !== r && (!0 === r ? s.z.onRead : r)(this.typeName, a, t, i, l);
  }
}
return a;
  }
  internalBinaryWrite(e, t, n) {
'' !== e.header && t.tag(1, s.TD.LengthDelimited).string(e.header), '' !== e.subheader && t.tag(2, s.TD.LengthDelimited).string(e.subheader), '' !== e.videoLink && t.tag(3, s.TD.LengthDelimited).string(e.videoLink), '' !== e.helpArticleId && t.tag(4, s.TD.LengthDelimited).string(e.helpArticleId);
for (let i = 0; i < e.featureCards.length; i++)
  d.internalBinaryWrite(e.featureCards[i], t.tag(5, s.TD.LengthDelimited).fork(), n).join();
e.button && _.internalBinaryWrite(e.button, t.tag(6, s.TD.LengthDelimited).fork(), n).join(), '' !== e.dismissKey && t.tag(7, s.TD.LengthDelimited).string(e.dismissKey), '' !== e.heroArtVideoLinkLightTheme && t.tag(8, s.TD.LengthDelimited).string(e.heroArtVideoLinkLightTheme), '' !== e.heroArtImageLinkDarkTheme && t.tag(9, s.TD.LengthDelimited).string(e.heroArtImageLinkDarkTheme), '' !== e.heroArtImageLinkLightTheme && t.tag(10, s.TD.LengthDelimited).string(e.heroArtImageLinkLightTheme), '' !== e.modalTopPill && t.tag(11, s.TD.LengthDelimited).string(e.modalTopPill), '' !== e.body && t.tag(12, s.TD.LengthDelimited).string(e.body);
for (let i = 0; i < e.heroArtVideoSubtitles.length; i++)
  m.internalBinaryWrite(e.heroArtVideoSubtitles[i], t.tag(13, s.TD.LengthDelimited).fork(), n).join();
e.storage && E.internalBinaryWrite(e.storage, t.tag(14, s.TD.LengthDelimited).fork(), n).join();
let i = n.writeUnknownFields;
return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties', [{
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
  },
  {
    no: 12,
    name: 'body',
    kind: 'scalar',
    T: 9
  },
  {
    no: 13,
    name: 'hero_art_video_subtitles',
    kind: 'message',
    repeat: 1,
    T: () => m
  },
  {
    no: 14,
    name: 'storage',
    kind: 'message',
    T: () => E
  }
]);
  }
}
let p = new g();