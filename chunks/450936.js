n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(192379),
    l = n(442837),
    a = n(570140),
    r = n(911969),
    s = n(110924),
    o = n(213459),
    c = n(404295),
    d = n(812206),
    u = n(835473),
    h = n(621853),
    p = n(484459),
    m = n(973616),
    f = n(594174),
    g = n(981631);
function C(e) {
    var t, n;
    let { channel: C } = e,
        x = (0, c.bG)('useAppDMChatInputData'),
        v = i.useMemo(() => {
            if (!0 !== C.isDM()) return null;
            let e = f.default.getUser(C.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [C]),
        _ = (0, l.e7)([h.Z], () => {
            var e;
            return h.Z.isFetchingProfile(null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : g.lds);
        }),
        I = (0, s.Z)(_),
        E = (0, l.e7)([d.Z], () => d.Z.getAppIdForBotUserId(null == v ? void 0 : v.id)),
        b = (0, l.e7)([h.Z], () => {
            var e;
            return null !== v ? (null === (e = h.Z.getUserProfile(null == v ? void 0 : v.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        N = null != E ? E : null == b ? void 0 : b.id;
    i.useEffect(() => {
        if (null == N && x) {
            var e;
            (0, p.Z)(null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : g.lds);
        }
    }, [v, N, x]),
        i.useEffect(() => {
            (null == v ? void 0 : v.id) != null &&
                a.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: v.id
                });
        }, [null == v ? void 0 : v.id]);
    let Z = (0, o.v1)(
            C,
            {
                commandTypes: [r.yU.PRIMARY_ENTRY_POINT, r.yU.CHAT, r.yU.MESSAGE, r.yU.USER]
            },
            {
                applicationId: N,
                allowFetch: x && (null == v ? void 0 : v.id) != null,
                allowApplicationState: !0
            }
        ),
        T = Z.commands.filter((e) => e.type === r.yU.PRIMARY_ENTRY_POINT && e.applicationId === N)[0],
        S = Z.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        j = Z.loading,
        A =
            null ===
                (t = Z.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === N;
                })) || void 0 === t
                ? void 0
                : t.application,
        y = i.useMemo(() => (null != A ? m.Z.createFromServer(A) : void 0), [A]),
        P = (0, u.q)(null == y && x ? N : void 0),
        M = null !== (n = null != y ? y : P) && void 0 !== n ? n : void 0,
        R = null == M || (j && 0 === S.length);
    return {
        application: M,
        isInitialLoading: R,
        primaryEntryPointCommand: T,
        isProfileFetching: _,
        wasProfileFetching: I,
        applicationId: N,
        channelId: C.id,
        commands: S
    };
}
