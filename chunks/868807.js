n.d(t, {
    a: function () {
        return p;
    }
}),
    n(47120);
var i = n(392711),
    a = n.n(i),
    s = n(442837),
    l = n(544891),
    r = n(570140),
    o = n(375954),
    c = n(306680),
    u = n(748902),
    d = n(981631);
let h = new Set(),
    m = null;
function p(e) {
    let { id: t } = e,
        {
            loaded: n,
            message: i,
            error: a
        } = (0, s.cj)(
            [u.Z, o.Z, c.ZP],
            () => {
                let e = c.ZP.lastMessageId(t),
                    n = u.Z.getMessageRequestPreview(t);
                if (null == n.message && null != e) {
                    let n = o.Z.getMessage(t, e);
                    if (null != n)
                        return {
                            loaded: !0,
                            error: !1,
                            message: n
                        };
                }
                return n;
            },
            [t]
        ),
        l = (0, s.e7)([u.Z], () => u.Z.shouldLoadMessageRequestPreview(t), [t]);
    return (
        !n &&
            null == i &&
            l &&
            (function (e) {
                h.add(e), null == m && (m = setTimeout(_, 0));
            })(t),
        {
            loaded: n,
            error: a,
            message: i
        }
    );
}
async function _() {
    try {
        for (; !a().isEmpty(h); ) await f();
    } finally {
        m = null;
    }
}
async function f() {
    let e = Array.from(h).slice(0, 25);
    try {
        let t = await l.tn.get({
            url: d.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
            query: { channel_ids: e }
        });
        r.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS',
            requestedChannelIds: e,
            supplementalData: t.body
        });
    } catch (t) {
        r.Z.dispatch({
            type: 'LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR',
            requestedChannelIds: e
        });
    } finally {
        for (let t of e) h.delete(t);
    }
}
