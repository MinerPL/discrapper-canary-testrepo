n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(990547),
    l = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    f = n(213609),
    _ = n(28546),
    h = n(675478),
    p = n(19780),
    m = n(208049),
    g = n(522811),
    E = n(763296),
    v = n(526617),
    I = n(126857);
function S(e) {
    let { guildId: t, channel: n, containerWidth: a, onClose: S, onSelect: T, analyticsSource: b, suppressPlaySound: y, shouldValidateSelectedSound: A, shouldShowUpsell: N = !0, gridNotice: C, inExpressionPicker: R, soundButtonOverlay: O, listPadding: D, renderHeader: L, defaultSoundsOnly: x } = e,
        w = (0, l.e7)([E.Z], () => E.Z.isFetchingSounds() || E.Z.isFetchingDefaultSounds()),
        M = (0, l.e7)([p.Z], () => p.Z.getMediaSessionId()),
        { analyticsLocations: P } = (0, d.ZP)(c.Z.SOUNDBOARD_POPOUT);
    (0, f.Z)({
        type: o.ImpressionTypes.POPOUT,
        name: o.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
            source: b,
            guild_id: t,
            media_session_id: M
        }
    }),
        i.useEffect(() => {
            m.w(), h.DZ.loadIfNecessary(), (0, _.ql)('');
        }, []);
    let { refreshEnabled: k } = (0, g.Z)({ location: 'SoundboardSoundPicker' });
    return (0, r.jsx)(d.Gt, {
        value: P,
        children: (0, r.jsx)(u.Dialog, {
            className: s()(I.picker, {
                [I.fetching]: w,
                [I.inExpressionPicker]: R,
                [I.refresh]: k
            }),
            children: w
                ? (0, r.jsx)(u.Spinner, {})
                : (0, r.jsx)(v.Z, {
                      guildId: t,
                      channel: n,
                      onClose: S,
                      onSelect: T,
                      shouldValidateSelectedSound: A,
                      containerWidth: a,
                      suppressPlaySound: y,
                      shouldShowUpsell: N,
                      gridNotice: C,
                      soundButtonOverlay: O,
                      listPadding: D,
                      renderHeader: L,
                      defaultSoundsOnly: x,
                      inExpressionPicker: R,
                      refreshEnabled: k
                  })
        })
    });
}
