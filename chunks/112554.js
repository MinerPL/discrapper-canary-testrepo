t.d(n, {
    K: function () {
        return r;
    },
    b: function () {
        return s;
    }
});
var i = t(399606),
    a = t(375954),
    l = t(163268);
let r = (e, n, t) => {
        var r, s;
        let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
        if (null == o) return [];
        let u =
            void 0 !== t
                ? (e) => e.url === t
                : (e) =>
                      (0, l.KP)(
                          {
                              type: l.lJ.Attachment,
                              media: e
                          },
                          (0, l.HH)(o)
                      );
        return null !== (s = null == o ? void 0 : null === (r = o.attachments) || void 0 === r ? void 0 : r.filter(u)) && void 0 !== s ? s : [];
    },
    s = (e, n, t) => {
        var r, s;
        let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
        if (null == o) return [];
        let u =
            void 0 !== t
                ? (e) => e.id === t
                : (e) =>
                      (0, l.KP)(
                          {
                              type: l.lJ.Embed,
                              media: e
                          },
                          (0, l.HH)(o)
                      );
        return null !== (s = null == o ? void 0 : null === (r = o.embeds) || void 0 === r ? void 0 : r.filter(u)) && void 0 !== s ? s : [];
    };
