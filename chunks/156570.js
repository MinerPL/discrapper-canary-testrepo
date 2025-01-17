n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(81825),
    i = n(218946),
    u = n(598077);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o extends r.Z {
    static createFromServer(e) {
        let t = e.staff_notes;
        return new o({
            id: e.id,
            skuId: e.sku.id,
            summary: e.summary,
            tagline: e.tagline,
            flavorText: e.flavor_text,
            description: e.description,
            childSkuIds: null != e.child_skus ? e.child_skus.map((e) => e.id) : null,
            alternativeSkuIds: null != e.alternative_skus ? e.alternative_skus.map((e) => e.id) : null,
            carouselItems:
                null != e.carousel_items
                    ? e.carousel_items.map((e) => ({
                          assetId: e.asset_id,
                          youtubeVideoId: e.youtube_video_id
                      }))
                    : null,
            assets: null != e.assets ? e.assets.map(i.m) : null,
            staffNotes:
                null != t
                    ? {
                          content: t.content,
                          user: null != t.user ? new u.Z(t.user) : null
                      }
                    : null,
            guild:
                null != e.guild
                    ? {
                          id: e.guild.id,
                          name: e.guild.name,
                          icon: e.guild.icon,
                          approximateMemberCount: e.guild.approximate_member_count,
                          approximatePresenceCount: e.guild.approximate_presence_count
                      }
                    : null,
            thumbnail: null != e.thumbnail ? (0, i.m)(e.thumbnail) : null,
            previewVideo: null != e.preview_video ? (0, i.m)(e.preview_video) : null,
            headerBackground: null != e.header_background ? (0, i.m)(e.header_background) : null,
            headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, i.m)(e.header_logo_dark_theme) : null,
            headerLogoLightTheme: null != e.header_logo_light_theme ? (0, i.m)(e.header_logo_light_theme) : null,
            boxArt: null != e.box_art ? (0, i.m)(e.box_art) : null,
            heroBackground: null != e.hero_background ? (0, i.m)(e.hero_background) : null,
            heroVideo: null != e.hero_video ? (0, i.m)(e.hero_video) : null,
            entitlementBranchId: e.entitlement_branch_id,
            benefits: e.benefits,
            published: e.published
        });
    }
    isSlimDirectoryVersion() {
        return null == this.description;
    }
    constructor(e) {
        super(), l(this, 'id', void 0), l(this, 'skuId', void 0), l(this, 'summary', void 0), l(this, 'tagline', void 0), l(this, 'flavorText', void 0), l(this, 'description', void 0), l(this, 'carouselItems', void 0), l(this, 'childSkuIds', void 0), l(this, 'alternativeSkuIds', void 0), l(this, 'assets', void 0), l(this, 'staffNotes', void 0), l(this, 'guild', void 0), l(this, 'thumbnail', void 0), l(this, 'boxArt', void 0), l(this, 'previewVideo', void 0), l(this, 'headerBackground', void 0), l(this, 'headerLogoDarkTheme', void 0), l(this, 'headerLogoLightTheme', void 0), l(this, 'heroBackground', void 0), l(this, 'heroVideo', void 0), l(this, 'entitlementBranchId', void 0), l(this, 'benefits', void 0), l(this, 'published', void 0), (this.id = e.id), (this.skuId = e.skuId), (this.summary = e.summary), (this.tagline = e.tagline), (this.flavorText = e.flavorText), (this.description = e.description), (this.carouselItems = e.carouselItems || []), (this.childSkuIds = e.childSkuIds || []), (this.alternativeSkuIds = e.alternativeSkuIds || []), (this.assets = e.assets || []), (this.staffNotes = e.staffNotes), (this.guild = e.guild), (this.thumbnail = e.thumbnail || null), (this.boxArt = e.boxArt || null), (this.previewVideo = e.previewVideo || null), (this.headerBackground = e.headerBackground || null), (this.headerLogoDarkTheme = e.headerLogoDarkTheme || null), (this.headerLogoLightTheme = e.headerLogoLightTheme || null), (this.heroBackground = e.heroBackground || null), (this.heroVideo = e.heroVideo || null), (this.entitlementBranchId = e.entitlementBranchId || null), (this.benefits = e.benefits || []), (this.published = !!e.published);
    }
}
