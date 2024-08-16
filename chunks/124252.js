n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(390547),
    n(47120),
    n(653041),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var a = n(470079),
    s = n(399606),
    r = n(541716),
    l = n(117530),
    i = n(154135),
    o = n(337077);
function c(e, t) {
    var n, c;
    let { mediaAttachments: d, hasThumbnail: u } = (function (e) {
            let [t, n] = a.useState(null),
                o = (0, s.Wu)([l.Z], () => {
                    let t = l.Z.getUploads(e.id, r.I.CREATE_FORUM_POST.drafts.type),
                        n = t.find((e) => e.isThumbnail);
                    return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                }),
                c = a.useMemo(() => o.some((e) => e.isThumbnail), [o]);
            return (
                a.useEffect(() => {
                    let e = [];
                    return (
                        n(
                            o.slice(0, i.Yh).flatMap((t) => {
                                var n;
                                let a = null == t ? void 0 : null === (n = t.item) || void 0 === n ? void 0 : n.file;
                                if (null == a) return [];
                                let s = URL.createObjectURL(a);
                                return (
                                    e.push(s),
                                    {
                                        id: t.id,
                                        src: s,
                                        spoiler: t.spoiler,
                                        alt: t.description,
                                        isThumbnail: t.isThumbnail,
                                        upload: !0 === t.isThumbnail ? t : void 0,
                                        isVideo: t.isVideo
                                    }
                                );
                            })
                        ),
                        () => {
                            n(null), e.forEach((e) => URL.revokeObjectURL(e));
                        }
                    );
                }, [o]),
                {
                    mediaAttachments: t,
                    hasThumbnail: c
                }
            );
        })(e),
        m = Math.max(i.Yh - (null !== (n = null == d ? void 0 : d.length) && void 0 !== n ? n : 0), 0),
        { embeds: h } = (0, o.M)(u, m, t),
        _ = a.useMemo(
            () =>
                null == h
                    ? void 0
                    : h.flatMap((e) => {
                          let t = (0, i.Vh)(e);
                          return null == t
                              ? []
                              : {
                                    id: t,
                                    src: t,
                                    spoiler: !1,
                                    alt: e.title
                                };
                      }),
            [h]
        ),
        g = [...(null != d ? d : [])];
    return !u && m > 0 && g.push(...(null !== (c = null == _ ? void 0 : _.slice(0, m)) && void 0 !== c ? c : [])), g;
}
