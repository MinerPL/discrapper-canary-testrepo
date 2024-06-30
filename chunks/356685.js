l.d(n, {
    X: function () {
        return t;
    }
});
var s = l(544891), a = l(981631);
async function t(e, n, l) {
    return (await s.tn.get({
        url: a.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
        query: {
            type: n,
            entity_id: l
        }
    })).body;
}
