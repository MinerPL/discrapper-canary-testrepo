n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(278074),
    r = n(788307),
    a = n(26033),
    o = n(388032);
function s(e) {
    let { entry: t, className: n, textClassName: s } = e,
        { message: c, title: u } = (0, l.EQ)(t)
            .when(a.dX, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t['wgtd/f'],
                    title: t.game_name
                };
            })
            .when(a.Mq, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t['wgtd/f'],
                    title: t.activity_name
                };
            })
            .when(a.y0, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t.nCCdMD,
                    title: t.media_title
                };
            })
            .when(a.dU, (e) => {
                var t, n;
                let { extra: i } = e;
                return {
                    message: o.t.PYEeFh,
                    title: null === (n = i.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.title
                };
            })
            .otherwise(() => ({
                message: null,
                title: null
            }));
    return null == u || '' === u
        ? null
        : (0, i.jsx)('div', {
              className: n,
              children: (0, i.jsx)(r.DD, {
                  text: o.intl.format(c, { title: u }),
                  className: s
              })
          });
}
