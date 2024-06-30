n.d(t, {
    H: function () {
        return f;
    },
    v: function () {
        return T;
    }
}), n(47120);
var i = n(512722), s = n.n(i), o = n(652874), a = n(313361), l = n(683860), r = n(442837), c = n(592125), u = n(559241);
function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let h = new Set(), m = {
        layoutType: a.X.LIST,
        sortOrder: l.z.CREATION_DATE,
        tagFilter: h,
        scrollPosition: 0
    };
class p {
    constructor(e, t) {
        d(this, 'set', void 0), d(this, 'get', void 0), d(this, 'channelStates', void 0), d(this, 'setChannelState', void 0), d(this, 'getChannelState', void 0), d(this, 'toggleTagFilter', void 0), d(this, 'setTagFilter', void 0), d(this, 'setSortOrder', void 0), d(this, 'setLayoutType', void 0), d(this, 'setScrollPosition', void 0), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
            let n = this.get(), i = this.getChannelState(e), s = { ...n.channelStates };
            s[e] = {
                ...i,
                ...t
            }, this.set({ channelStates: s });
        }, this.getChannelState = e => {
            if (null == e)
                return m;
            let {channelStates: t} = this.get(), n = t[e];
            if (null == n) {
                let t = c.Z.getChannel(e);
                s()(null != t, '[Forum Channel Store] The channel should not be missing.'), n = {
                    layoutType: t.getDefaultLayout(),
                    sortOrder: t.getDefaultSortOrder(),
                    tagFilter: h,
                    scrollPosition: 0
                };
            }
            return n;
        }, this.toggleTagFilter = (e, t) => {
            let n = new Set(this.getChannelState(e).tagFilter);
            n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
        }, this.setTagFilter = (e, t) => {
            this.setChannelState(e, { tagFilter: t }), u.Z.setFilterTagIds(t);
        }, this.setSortOrder = (e, t) => {
            this.setChannelState(e, { sortOrder: t }), u.Z.setSortOrder(t);
        }, this.setLayoutType = (e, t) => {
            this.setChannelState(e, { layoutType: t }), u.Z.setLayout(t);
        }, this.setScrollPosition = (e, t) => {
            this.setChannelState(e, { scrollPosition: t });
        };
    }
}
let g = (0, o.Z)((e, t) => new p(e, t)), f = e => {
        let t = g();
        return null == (0, r.e7)([c.Z], () => c.Z.getChannel(e)) ? m : t.getChannelState(e);
    }, T = () => g;
