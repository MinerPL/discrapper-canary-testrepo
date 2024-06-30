i.d(n, {
    Z: function () {
        return M;
    }
});
var t = i(735250);
i(470079);
var l = i(442837), s = i(481060), a = i(787014), u = i(362721), o = i(339340), r = i(869768), d = i(496675), c = i(12498), Z = i(981631), E = i(689938);
function M(e, n) {
    let M = (0, l.e7)([d.Z], () => d.Z.can(Z.Plq.MANAGE_CHANNELS, n)), _ = (0, u.Z)(e), N = (0, r.W)(e), C = (0, l.e7)([c.Z], () => c.Z.getChannelStatus(e)), h = null != C && C.length > 0;
    return e.isGuildVoice() && (M || _) ? !N && M && h ? (0, t.jsx)(s.MenuItem, {
        id: 'clear-status',
        label: E.Z.Messages.VOICE_CHANNEL_CLEAR_STATUS,
        action: () => {
            a.ZP.updateVoiceChannelStatus(e.id, '');
        }
    }) : N && _ ? (0, t.jsx)(s.MenuItem, {
        id: 'set-status',
        label: E.Z.Messages.VOICE_CHANNEL_SET_STATUS,
        action: () => {
            (0, s.openModalLazy)(async () => {
                let {default: n} = await Promise.resolve().then(i.bind(i, 339340));
                return i => (0, t.jsx)(n, {
                    channel: e,
                    ...i
                });
            }, { modalKey: o.VOICE_CHANNEL_STATUS_MODAL_KEY });
        }
    }) : null : null;
}
