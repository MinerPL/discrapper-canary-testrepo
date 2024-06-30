n.d(t, {
    i: function () {
        return o;
    }
});
var r = n(544891), i = n(881052), a = n(981631);
async function o(e, t) {
    try {
        await r.tn.patch({
            url: a.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
            body: t
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
