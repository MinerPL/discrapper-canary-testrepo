n(47120);
var r = n(470079), i = n(442837), a = n(812457), o = n(166625), s = n(271383), l = n(594174), u = n(768581), c = n(660097);
t.Z = e => {
    var t;
    let {
            user: n,
            guildId: d,
            size: _,
            onlyAnimateOnHover: E = !1,
            showPending: f = !1,
            showTryItOut: h = !1,
            avatarDecorationOverride: p
        } = e, [m, I] = r.useState(!1), {canAnimate: T} = (0, a.j)(m, E), g = (0, i.e7)([s.ZP], () => null != d && null != n ? s.ZP.getMember(d, n.id) : null), [S, A] = (0, i.Wu)([l.default], () => {
            var e;
            return [
                null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
                l.default.getUser(null == n ? void 0 : n.id)
            ];
        }), N = null == g ? null == A ? void 0 : A.avatarDecoration : null === g.avatarDecoration ? null : null !== (t = g.avatarDecoration) && void 0 !== t ? t : null == A ? void 0 : A.avatarDecoration, {pendingAvatarDecoration: v} = (0, o.Z)({
            isTryItOut: h,
            guildId: d
        }), O = f && void 0 !== v && void 0 !== S && S === (null == n ? void 0 : n.id), R = null != d && null === v, C = O ? R ? null == n ? void 0 : n.avatarDecoration : null != v ? v : N : null != N ? N : null == n ? void 0 : n.avatarDecoration, y = r.useMemo(() => (0, u.NZ)({
            avatarDecoration: void 0 !== p ? p : C,
            canAnimate: T,
            size: _
        }), [
            C,
            T,
            _,
            p
        ]), D = r.useCallback(() => I(!0), []);
    return {
        avatarPlaceholderSrc: c,
        avatarDecorationSrc: y,
        isAvatarDecorationAnimating: T,
        eventHandlers: {
            onMouseEnter: D,
            onMouseLeave: r.useCallback(() => I(!1), [])
        }
    };
};
