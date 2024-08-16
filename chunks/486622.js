n.d(t, {
    m: function () {
        return E;
    }
}),
    n(47120);
var i = n(470079),
    a = n(707019),
    s = n.n(a),
    l = n(881052),
    r = n(726521),
    o = n(621853),
    c = n(484459),
    u = n(695346),
    d = n(626135),
    h = n(823162),
    m = n(268699),
    p = n(9389),
    _ = n(687683),
    f = n(981631);
function E(e) {
    let { user: t, onAcceptSuccess: n, onRejectSuccess: a, onError: E } = e,
        g = (0, p.Z)(),
        [C, I] = i.useState(!1),
        [x, T] = i.useState(!1),
        [N, v] = i.useState(!1),
        [S, Z] = i.useState(!1),
        [A, M] = i.useState(!1),
        b = C || x || N,
        R = i.useCallback(
            async (e) => {
                if (!b) {
                    I(!0);
                    try {
                        await (0, h.e4)(e), Z(!0), null == n || n();
                    } catch (t) {
                        let e = new l.Hx(t);
                        null == E || E(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [b, n, E]
        ),
        j = i.useCallback(
            async (e) => {
                if (!b) {
                    T(!0);
                    try {
                        await (0, h.gN)(e), M(!0), null == a || a();
                    } catch (t) {
                        let e = new l.Hx(t);
                        null == E || E(e);
                    } finally {
                        T(!1);
                    }
                }
            },
            [b, a, E]
        ),
        L = i.useCallback(
            async (e) => {
                if (b) return;
                T(!0);
                let t = s()(e, _.t$);
                try {
                    for (let e of t) await (0, h.r_)(e);
                    M(!0), null == a || a();
                } catch (t) {
                    let e = new l.Hx(t);
                    null == E || E(e);
                } finally {
                    T(!1);
                }
            },
            [b, a, E]
        ),
        P = i.useCallback(
            async (e) => {
                if (b) return;
                if (null != t && null == o.Z.getMutualGuilds(t.id)) {
                    v(!0);
                    try {
                        await (0, c.Z)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0
                        });
                    } catch (e) {
                    } finally {
                        v(!1);
                    }
                }
                let n = async () => {
                    var n;
                    let i = null != t ? (null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                    d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                        action: _.cl.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: null != i ? i : [],
                        other_user_id: null == t ? void 0 : t.id
                    }),
                        await R(e);
                };
                (0, m.H)({
                    channelId: e,
                    onConfirm: n,
                    onCancel: () => {
                        var n;
                        let i = null != t ? (null === (n = o.Z.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map((e) => e.guild.id)) : [];
                        d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                            action: _.cl.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != i ? i : [],
                            other_user_id: null == t ? void 0 : t.id
                        });
                    }
                });
            },
            [R, b, t]
        ),
        O = i.useCallback(
            (e, t, n) => {
                let i = (i, a) => {
                        a && u.kJ.updateSetting(i),
                            i && null != t && (0, r.zd)(t),
                            R(e.id),
                            d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                                action: _.cl.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: a,
                                non_spam_retraining_opt_in: i
                            }),
                            null != n && n();
                    },
                    a = u.kJ.getSetting();
                null == a
                    ? (0, m.V)({
                          channel: e,
                          onConfirm: i,
                          onCancel: () => {
                              d.default.track(f.rMx.MESSAGE_REQUEST_ACTION, {
                                  action: _.cl.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id
                              });
                          }
                      })
                    : i(a);
            },
            [R]
        );
    return {
        acceptMessageRequest: g ? P : R,
        rejectMessageRequest: j,
        rejectAll: L,
        markAsNotSpam: O,
        isAcceptLoading: C,
        isRejectLoading: x,
        isUserProfileLoading: N,
        isOptimisticAccepted: S,
        isOptimisticRejected: A
    };
}
