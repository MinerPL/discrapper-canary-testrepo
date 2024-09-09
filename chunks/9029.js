var i = n(481060),
    a = n(570140),
    s = n(317770),
    r = n(507294),
    l = n(458034);
class o extends s.Z {
    _initialize() {
        a.Z.subscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    _terminate() {
        a.Z.unsubscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        if (!(0, i.hasModalOpen)('GUILD_ROLE_CONNECTIONS_MODAL_KEY')) {
            var a;
            null != t && (null === (a = t.tags) || void 0 === a ? void 0 : a.guild_connections) === null ? (0, r.openGuildRoleConnectionsConnectAccountModal)(t, n) : (0, l.Am)(n);
        }
    }
}
t.Z = new o();
