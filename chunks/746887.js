t.d(n, {
    u: function () {
        return u;
    }
});
var i = t(211739), l = t(680089), o = t(984933), E = t(914010), r = t(981631);
let u = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let e = E.Z.getGuildId();
        return null != e && (o.ZP.getChannels(e)[r.d4z.GUILD_CATEGORY].some(e => {
            let {channel: n} = e;
            return 'null' !== n.id && !l.Z.isCollapsed(n.id);
        }) ? (0, i.N5)(e) : (0, i.lc)(e), !1);
    }
};
