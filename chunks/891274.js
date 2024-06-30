n(411104), n(570140);
var r = n(147913);
n(674588);
var i = n(751189), a = n(409059);
n(652898);
var o = n(728675);
n(701190);
var s = n(960904), l = n(830121);
function u(e) {
    let t = (0, l.ZP)(e.content);
    null != t && 0 !== t.length && t.forEach(e => {
        let {
            type: t,
            code: n
        } = e;
        if (t === s.g.INVITE);
        else if (t === s.g.TEMPLATE)
            null == a.Z.getGuildTemplate(n) && i.Z.resolveGuildTemplate(n);
        else if (t === s.g.BUILD_OVERRIDE || t === s.g.MANUAL_BUILD_OVERRIDE);
        else if (t === s.g.EVENT);
        else if (t === s.g.CHANNEL_LINK);
        else if (t === s.g.APP_DIRECTORY_PROFILE);
        else if (t === s.g.ACTIVITY_BOOKMARK);
        else if (t === s.g.EMBEDDED_ACTIVITY_INVITE);
        else if (t === s.g.GUILD_PRODUCT);
        else if (t === s.g.SERVER_SHOP);
        else if (t === s.g.QUESTS_EMBED);
        else if (t === s.g.APP_DIRECTORY_STOREFRONT);
        else if (t === s.g.APP_DIRECTORY_STOREFRONT_SKU);
        else
            throw Error('Unknown coded link type: '.concat(t));
    });
}
class c extends r.Z {
    constructor() {
        super(), (0, o.Z)(this, u);
    }
}
t.Z = new c();
