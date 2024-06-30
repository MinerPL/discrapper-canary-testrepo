n.d(t, {
    d: function () {
        return l;
    }
});
var i = n(652874), s = n(868888), a = n(433517), r = n(49898);
let l = (0, i.Z)((0, s.tJ)(e => ({
    selectedPage: r.S.SERVERS,
    setSelectedPage: t => e({ selectedPage: t }),
    selectedServerTab: 'gaming',
    setSelectedServerTab: t => e({ selectedServerTab: t })
}), {
    name: 'global-discovery',
    getStorage: () => ({
        getItem: e => {
            var t;
            return null !== (t = a.K.get(e)) && void 0 !== t ? t : null;
        },
        setItem: (e, t) => a.K.set(e, t),
        removeItem: e => a.K.remove(e)
    }),
    partialize: e => ({ selectedPage: e.selectedPage })
}));
