n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(653041),
    n(47120);
var i = n(275726),
    s = n(135938),
    a = n(55935),
    l = n(709054),
    r = n(554838),
    o = n(493892),
    c = n(356647),
    u = n(981631);
function d(e) {
    let t,
        n,
        d,
        { channel: h, messages: p, oldestUnreadMessageId: m, treatSpam: _, summaries: f, selectedSummary: E } = e,
        g = [],
        C = !1,
        I = null != m ? l.default.extractTimestamp(m) : null,
        T = null;
    return (
        p.forEach((e) => {
            var s, x, S, v, N, A, Z, M;
            if (null != f && f.length > 0) {
                let t = l.default.extractTimestamp(e.id);
                for (let e = 0; (s = e < (null == f ? void 0 : f.length)), s; e++) {
                    if (null == f[e]) continue;
                    let n = l.default.extractTimestamp(f[e].startId),
                        i = l.default.extractTimestamp(f[e].endId);
                    if (t >= n && t <= i) {
                        if (T === f[e].id) break;
                        g.push({
                            type: u.ys_.DIVIDER,
                            content: f[e].topic,
                            contentKey: f[e].id
                        }),
                            (T = f[e].id);
                        break;
                    }
                }
            }
            let b = (0, a.vc)(e.timestamp, 'LL');
            b !== t &&
                null == T &&
                (g.push({
                    type: u.ys_.DIVIDER,
                    content: b,
                    contentKey: b
                }),
                (t = b));
            let R = g[g.length - 1],
                L = null,
                j = (0, o.DQ)(e);
            C = C || j;
            let P = (function (e, t, n) {
                if (i.V.NON_COLLAPSIBLE.has(t.type));
                else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
                else if ((0, o.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
                return null;
            })(h, e, j && _);
            if (null !== P) {
                let t, n;
                [L, R] =
                    ((x = g),
                    (S = e),
                    (v = P),
                    (n = N = R),
                    null == N || N.type !== v
                        ? ((t = {
                              type: v,
                              content: [],
                              key: S.id
                          }),
                          x.push(t))
                        : (n = (t = N).content[t.content.length - 1]),
                    [t, n]);
            }
            if (m === e.id && null != I) {
                if (null != R && R.type === u.ys_.DIVIDER) (R.unreadId = e.id), (I = null);
                else if (null !== L) {
                    (A = L),
                        (Z = h),
                        (M = e).isFirstMessageInForumPost(Z) ||
                            A.content.push({
                                type: u.ys_.DIVIDER,
                                unreadId: M.id
                            }),
                        (A.hasUnread = !0),
                        (I = null);
                } else
                    !e.isFirstMessageInForumPost(h) &&
                        g.push({
                            type: u.ys_.DIVIDER,
                            unreadId: e.id
                        }),
                        (I = null);
            } else
                null != I &&
                    l.default.extractTimestamp(e.id) > I &&
                    (!e.isFirstMessageInForumPost(h) &&
                        g.push({
                            type: u.ys_.DIVIDER,
                            unreadId: e.id
                        }),
                    (I = null));
            let O = (0, c.f)(e, h);
            null != O &&
                g.push({
                    type: u.ys_.MESSAGE,
                    content: O,
                    groupId: O.id
                });
            let y = (null == R ? void 0 : R.type) === u.ys_.MESSAGE ? d : R;
            (0, r.J)(h, y, e) && (n = e.id);
            let D = {
                type: e.type === u.uaV.THREAD_STARTER_MESSAGE ? u.ys_.THREAD_STARTER_MESSAGE : u.ys_.MESSAGE,
                content: e,
                groupId: n
            };
            n === e.id && (d = D);
            let { jumpSequenceId: U, jumpFlash: k, jumpTargetId: w } = p;
            k && e.id === w && null != U && (D.flashKey = U),
                p.jumpTargetId === e.id && (D.jumpTarget = !0),
                null != E &&
                    e.id === E.startId &&
                    E.count > 1 &&
                    g.push({
                        type: u.ys_.DIVIDER,
                        content: E.topic,
                        contentKey: E.startId,
                        isSummaryDivider: !0
                    }),
                null !== L ? (L.content.push(D), D.jumpTarget && (L.hasJumpTarget = !0)) : g.push(D),
                e.isFirstMessageInForumPost(h) && g.push({ type: u.ys_.FORUM_POST_ACTION_BAR }),
                null != E &&
                    e.id === E.endId &&
                    E.count > 1 &&
                    g.push({
                        type: u.ys_.DIVIDER,
                        contentKey: E.endId,
                        isSummaryDivider: !0
                    });
        }),
        C && (0, o.P1)(h) && s.Z.trackExposure({ location: '416cc9_1' }),
        g
    );
}
