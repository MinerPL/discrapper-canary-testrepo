n.d(t, {
    $: function () {
        return l;
    },
    a: function () {
        return d;
    }
}),
    n(653041),
    n(47120);
var r = n(652874),
    i = n(868888),
    a = n(731965),
    s = n(433517),
    o = n(229893);
let l = 10;
function u(e, t) {
    if (0 === t || e.length <= t) return [e];
    let n = [];
    for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
    return n;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3 * l,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        i = Math.min((t + r) * n, e.length);
    return e.slice(t * n, i).filter((e) => o.Z.shouldFetchGuild(e));
}
let d = (0, r.Z)(
    (0, i.tJ)(
        (e) => ({
            currentPage: 1,
            pageSize: 3 * l,
            currentColumnCount: 3,
            totalItems: 0,
            chunkedPages: [],
            fetchableGuildIds: [],
            _rawItems: [],
            _removedItems: [],
            updatePage: (t) => {
                (0, a.j)(() => {
                    e((e) => {
                        let { _rawItems: n, pageSize: r } = e;
                        return {
                            currentPage: t,
                            fetchableGuildIds: c(n, t - 1, r)
                        };
                    });
                });
            },
            updatePaginationSettings: function (t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                    { pageMemoryEnabled: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                (0, a.j)(() => {
                    let i = t * n;
                    e((e) => {
                        let { currentPage: n, _rawItems: a } = e;
                        return {
                            currentColumnCount: t,
                            pageSize: i,
                            currentPage: r ? n : 1,
                            chunkedPages: u(a, i),
                            fetchableGuildIds: c(a, n - 1, i)
                        };
                    });
                });
            },
            updatePaginationResults: (t) => {
                (0, a.j)(() => {
                    e((e) => {
                        let { _removedItems: n, pageSize: r, currentPage: i } = e,
                            a = t.filter((e) => !n.includes(e));
                        return {
                            _rawItems: a,
                            chunkedPages: u(a, r),
                            totalItems: a.length,
                            fetchableGuildIds: c(a, i - 1, r)
                        };
                    });
                });
            },
            resetPagination: function () {
                let { pageMemoryEnabled: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, a.j)(() => {
                    e((e) => {
                        let { currentPage: n } = e;
                        return {
                            currentPage: t ? n : 1,
                            totalItems: 0,
                            _rawItems: [],
                            chunkedPages: []
                        };
                    });
                });
            },
            removeGuilds: (t) => {
                (0, a.j)(() => {
                    e((e) => {
                        let { _rawItems: n, _removedItems: r, pageSize: i, currentPage: a } = e,
                            s = n.filter((e) => !t.includes(e)),
                            o = t.filter((e) => !r.includes(e));
                        return {
                            _rawItems: s,
                            _removedItems: [...r, ...o],
                            chunkedPages: u(s, i),
                            totalItems: s.length,
                            fetchableGuildIds: c(s, a - 1, i)
                        };
                    });
                });
            }
        }),
        {
            name: 'clan-discovery-pagination',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = s.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => s.K.set(e, t),
                removeItem: (e) => s.K.remove(e)
            }),
            partialize: (e) => ({ currentPage: e.currentPage })
        }
    )
);
