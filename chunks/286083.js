n.d(t, {
    $: function () {
        return r;
    }
}),
    n(653041);
var i = n(652874),
    a = n(731965);
function s(e, t) {
    let n = [];
    for (let i = 0; i < e.length; i += t) n.push(e.slice(i, i + t));
    return n;
}
let r = (0, i.Z)((e) => ({
    currentPage: 1,
    pageSize: 18,
    totalItems: 0,
    chunkedPages: [],
    _rawItems: [],
    updatePage: (t) => {
        (0, a.j)(() => {
            e(() => ({ currentPage: t }));
        });
    },
    updatePaginationSettings: function (t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        (0, a.j)(() => {
            let i = t * n;
            e((e) => ({
                pageSize: i,
                currentPage: 1,
                chunkedPages: s(e._rawItems, i)
            }));
        });
    },
    updatePaginationResults: (t) => {
        (0, a.j)(() => {
            e((e) => ({
                _rawItems: t,
                chunkedPages: s(t, e.pageSize),
                totalItems: t.length
            }));
        });
    }
}));
