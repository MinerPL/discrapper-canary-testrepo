var i = n(735250);
n(470079);
var s = n(481060), a = n(570140), r = n(317770), l = n(592125), o = n(944486), c = n(914010), d = n(594174), u = n(758119), _ = n(920644), E = n(208381), h = n(723359), I = n(981631);
function m(e, t) {
    var n;
    if (null == e)
        return;
    let i = d.default.getCurrentUser();
    (null === (n = l.Z.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW()) && null != i && null == i.nsfwAllowed && (0, u.mN)(h.L0.NSFW_CHANNEL);
}
class p extends r.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect), a.Z.subscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), a.Z.subscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), a.Z.subscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), a.Z.subscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect), a.Z.unsubscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), a.Z.unsubscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), a.Z.unsubscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), a.Z.unsubscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    handleChannelSelect(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        m(t, n);
    }
    handleConnectionOpen() {
        let e = c.Z.getGuildId();
        m(e, o.Z.getChannelId());
    }
    handleAgeGateModalOpen(e) {
        let {source: t} = e;
        (0, s.openModalLazy)(async () => {
            let {default: e} = await Promise.all([
                n.e('96427'),
                n.e('1716')
            ]).then(n.bind(n, 746882));
            return n => (0, i.jsx)(e, {
                source: t,
                ...n
            });
        }, {
            modalKey: h.dG,
            onCloseRequest: I.dG4
        });
    }
    handleAgeGateSuccess() {
        (0, s.updateModal)(h.dG, e => (0, i.jsx)(E.Z, { ...e }));
    }
    handleAgeGateFailure(e) {
        let {underageMessage: t} = e;
        (0, s.updateModal)(h.dG, e => (0, i.jsx)(_.Z, {
            underageMessage: t,
            ...e
        }));
    }
    handleAgeGateModalClose() {
        (0, s.closeModal)(h.dG);
    }
}
t.Z = new p();
