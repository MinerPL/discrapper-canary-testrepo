n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(442837),
    a = n(963374),
    s = n(735020),
    l = n(905405),
    r = n(786761),
    o = n(937889),
    c = n(699516),
    u = n(768119);
function d(e) {
    let t = (0, l.p)(),
        n = (0, i.e7)(
            [u.Z, s.Z],
            () => {
                var n;
                let i = u.Z.getQuery(e),
                    l = u.Z.getRawResults(e);
                if (null == i || null == l) return [];
                let c = (0, a.nC)(null !== (n = i.content) && void 0 !== n ? n : '');
                return l.map((e) =>
                    e.map((e) => {
                        let n = s.Z.getMessage(e.id, e.channel_id),
                            i = (0, r.e5)(e);
                        return (
                            null != n &&
                                (i = i.merge({
                                    attachments: n.attachments,
                                    embeds: n.embeds
                                })),
                            i.isSearchHit
                                ? i.set(
                                      'customRenderedContent',
                                      (0, o.ZP)(i, {
                                          postProcessor: c,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : i
                        );
                    })
                );
            },
            [e, t],
            i.pF
        ),
        [d, h] = (0, i.e7)(
            [c.Z],
            () => {
                let e = 0;
                return [
                    n.map((t) =>
                        t.filter((t) => {
                            let n = c.Z.isBlockedForMessage(t);
                            return n && t.isSearchHit && e++, !n || t.isSearchHit;
                        })
                    ),
                    e
                ];
            },
            [n],
            i.pF
        );
    return {
        searchResults: d,
        blockCount: h
    };
}
