n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(493683),
	r = n(239091),
	l = n(730749),
	o = n(430824);
function c(e) {
	return (0, l.Z)(
		class extends a.Component {
			render() {
				return (0, i.jsx)(e, {
					...this.props,
					onMessageUser: this.handleMessageUser,
					onUserContextMenu: this.handleUserContextMenu,
					onGuildContextMenu: this.handleGuildContextMenu,
					onChannelContextMenu: this.handleChannelContextMenu
				});
			}
			handleMessageUser(e, t) {
				return s.Z.openPrivateChannel(t.id);
			}
			handleUserContextMenu(e, t, a) {
				(0, r.jW)(
					e,
					async () => {
						let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('740')]).then(n.bind(n, 881351));
						return (n) =>
							(0, i.jsx)(e, {
								...n,
								user: t
							});
					},
					{ onClose: a }
				);
			}
			handleGuildContextMenu(e, t) {
				(0, r.jW)(e, async () => {
					let { default: e } = await Promise.all([n.e('96427'), n.e('33053'), n.e('37581'), n.e('7654'), n.e('44156'), n.e('14203'), n.e('85552'), n.e('58227'), n.e('75531'), n.e('33213'), n.e('12303')]).then(n.bind(n, 545135));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							guild: t
						});
				});
			}
			handleChannelContextMenu(e, t) {
				let a = o.Z.getGuild(t.getGuildId());
				if (null == a) return null;
				(0, r.jW)(e, async () => {
					let { default: e } = await n.e('40283').then(n.bind(n, 428108));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							channel: t,
							guild: a
						});
				});
			}
		}
	);
}
