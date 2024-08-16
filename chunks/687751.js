var i = n(735250);
n(470079);
var a = n(481060),
    s = n(570140),
    r = n(317770),
    l = n(592125),
    o = n(944486),
    c = n(914010),
    d = n(594174),
    u = n(758119),
    _ = n(920644),
    E = n(208381),
    h = n(723359),
    m = n(981631);
function I(e, t) {
    var n;
    if (null == e) return;
    let i = d.default.getCurrentUser();
    (null === (n = l.Z.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW()) && null != i && null == i.nsfwAllowed && (0, u.mN)(h.L0.NSFW_CHANNEL);
}
class g extends r.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), s.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect), s.Z.subscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), s.Z.subscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), s.Z.subscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), s.Z.subscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), s.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect), s.Z.unsubscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), s.Z.unsubscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), s.Z.unsubscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), s.Z.unsubscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        I(t, n);
    }
    handleConnectionOpen() {
        let e = c.Z.getGuildId();
        I(e, o.Z.getChannelId());
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('96427'), n.e('1716')]).then(n.bind(n, 746882));
                return (n) =>
                    (0, i.jsx)(e, {
                        source: t,
                        ...n
                    });
            },
            {
                modalKey: h.dG,
                onCloseRequest: m.dG4
            }
        );
    }
    handleAgeGateSuccess() {
        (0, a.updateModal)(h.dG, (e) => (0, i.jsx)(E.Z, { ...e }));
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, a.updateModal)(h.dG, (e) =>
            (0, i.jsx)(_.Z, {
                underageMessage: t,
                ...e
            })
        );
    }
    handleAgeGateModalClose() {
        (0, a.closeModal)(h.dG);
    }
}
t.Z = new g();
