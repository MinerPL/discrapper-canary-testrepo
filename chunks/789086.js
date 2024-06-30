r.d(t, {
    Z: function () {
        return d;
    }
});
var a = r(735250), n = r(442837), i = r(481060), o = r(373791), l = r(146282), c = r(371991), s = r(206583);
function d() {
    let e = (0, n.e7)([l.Z], () => {
            var e;
            return (null === (e = l.Z.getFeed(s.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.refresh_stale_inbox_after_ms) != null;
        }), {
            loading: t,
            nextFetchDate: r
        } = (0, n.cj)([l.Z], () => {
            var e;
            return null !== (e = l.Z.getFeedState(s.YN.GLOBAL_FEED)) && void 0 !== e ? e : { loading: !1 };
        }), d = (0, n.e7)([l.Z], () => l.Z.getLastFeedFetchDate(s.YN.GLOBAL_FEED));
    return (0, a.jsxs)('div', {
        children: [
            t ? (0, a.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: '(fetching)'
            }) : (0, a.jsxs)(i.Text, {
                variant: 'text-md/normal',
                children: [
                    'Next fetch: ',
                    null != r ? (0, a.jsx)(o.Z, { deadline: r }) : e ? '(awaiting push)' : '(unscheduled)'
                ]
            }),
            (0, a.jsxs)(i.Text, {
                variant: 'text-md/normal',
                children: [
                    'Last fetch:',
                    ' ',
                    null != d ? (0, a.jsx)(c.x3, {
                        inline: !0,
                        entry: { start: d.getTime() }
                    }) : '(never)'
                ]
            })
        ]
    });
}
