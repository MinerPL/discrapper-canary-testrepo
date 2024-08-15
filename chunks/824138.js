n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(512722),
	o = n.n(l),
	c = n(481060),
	d = n(100527),
	u = n(600164),
	_ = n(184301),
	E = n(103575),
	h = n(237583),
	m = n(63063),
	I = n(870569),
	g = n(345243),
	p = n(115530),
	T = n(981631),
	S = n(689938),
	f = n(233473);
function C(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let N = {
	HOST: 5,
	LISTENER: 4
};
class A extends a.PureComponent {
	isHost() {
		let { currentUser: e, host: t } = this.props;
		return e.id === (null == t ? void 0 : t.id);
	}
	renderTitle() {
		return (0, i.jsxs)('div', {
			children: [
				(0, i.jsx)(p.Z, {
					children: this.isHost()
						? S.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({ count: this.props.party.length })
						: S.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
				}),
				(0, i.jsx)(g.Z, { children: S.Z.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER })
			]
		});
	}
	renderStopListeningButton() {
		let { onStopListening: e } = this.props;
		return this.isHost()
			? null
			: (0, i.jsx)(I.Z, {
					tooltipText: S.Z.Messages.SPOTIFY_LISTEN_ALONG_STOP,
					onClick: e,
					icon: c.XSmallIcon
				});
	}
	renderHelpIcon() {
		return this.isHost()
			? (0, i.jsx)(I.Z, {
					tooltipText: S.Z.Messages.SPOTIFY_LISTEN_ALONG_INFO,
					onClick: () => {
						window.open(m.Z.getArticleURL(T.BhN.SPOTIFY_CONNECTION), '_blank');
					},
					icon: c.CircleInformationIcon
				})
			: null;
	}
	render() {
		return (0, i.jsxs)('div', {
			className: f.listeningAlong,
			children: [
				this.renderTitle(),
				(0, i.jsx)(u.Z, {
					justify: u.Z.Justify.END,
					className: f.party,
					children: (0, i.jsx)(h.Z, {
						users: this.props.party,
						max: this.isHost() ? N.HOST : N.LISTENER,
						renderUser: this.renderPartyMember,
						renderMoreUsers: this.renderPartyMemberOverflow
					})
				}),
				(0, i.jsxs)('div', {
					className: f.icons,
					children: [this.renderHelpIcon(), this.renderStopListeningButton()]
				})
			]
		});
	}
	constructor(...e) {
		super(...e),
			C(this, 'renderPartyMember', (e, t) => {
				let n;
				if (null == e) return null;
				let { host: s, onUserContextMenu: l } = this.props;
				return (
					(n =
						(null == s ? void 0 : s.id) === e.id
							? S.Z.Messages.SPOTIFY_LISTEN_ALONG_HOST
							: S.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENER),
					(0, i.jsx)(
						c.Popout,
						{
							preload: () => (0, _.Z)(e.id, e.getAvatarURL(void 0, 80)),
							renderPopout: (t) => (
								o()(null != e, ''),
								(0, i.jsx)(E.Z, {
									...t,
									location: 'ListeningAlong',
									userId: e.id,
									newAnalyticsLocations: [d.Z.AVATAR]
								})
							),
							position: 'top',
							align: 'center',
							children: (s) =>
								(0, i.jsx)(c.Tooltip, {
									text: n,
									children: (n) => {
										let { onMouseEnter: i, onMouseLeave: o } = n;
										return (0, a.createElement)(c.Avatar, {
											...s,
											key: e.id,
											src: e.getAvatarURL(void 0, 24),
											size: c.AvatarSizes.SIZE_24,
											className: r()(f.avatar, t),
											'aria-label': e.username,
											onMouseEnter: i,
											onMouseLeave: o,
											onContextMenu: (t) => void (null != e && (null == l || l(t, e)))
										});
									}
								})
						},
						e.id
					)
				);
			}),
			C(this, 'renderPartyMemberOverflow', (e, t, n) => {
				let { renderOverflowPopout: a } = this.props;
				return (0, i.jsx)(
					c.Popout,
					{
						renderPopout: a,
						children: (n) =>
							(0, i.jsx)(c.Tooltip, {
								text: S.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
								children: (a) =>
									(0, i.jsx)('div', {
										className: r()(f.overflow, t),
										...a,
										...n,
										children: e
									})
							})
					},
					n
				);
			});
	}
}
t.Z = A;
