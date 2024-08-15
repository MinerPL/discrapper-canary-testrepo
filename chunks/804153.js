n(47120), n(733860);
var s = n(735250),
	a = n(470079),
	i = n(392711),
	r = n.n(i),
	l = n(149765),
	o = n(442837),
	c = n(481060),
	d = n(497321),
	u = n(484614),
	_ = n(933557),
	I = n(984933),
	E = n(496675),
	T = n(699516),
	m = n(246946),
	N = n(594174),
	S = n(434404),
	h = n(999382),
	g = n(981631),
	C = n(689938),
	x = n(115992);
function p(e, t, n) {
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
let R = 'NO_INSTANT_INVITE',
	f = l.$e(g.Plq.VIEW_CHANNEL, g.Plq.CREATE_INSTANT_INVITE);
class L extends a.PureComponent {
	static getDerivedStateFromProps(e, t) {
		let { widgetEnabled: n } = e,
			{ widgetEnabledProp: s } = t;
		return n !== s
			? {
					internalEnabled: n,
					widgetEnabledProp: n
				}
			: null;
	}
	renderChannelSelect(e) {
		let { widgetChannelId: t } = this.props,
			n = I.ZP.getChannels(e.id),
			a = r()([...n[I.sH], ...n[I.Zb]])
				.filter((t) => {
					let { channel: n } = t;
					return n.guild_id === e.id;
				})
				.filter((e) => {
					let { channel: n } = e;
					return n.id === t || E.Z.can(f, n);
				})
				.map((e) => {
					let { channel: t } = e;
					return {
						value: t.id,
						label: (0, _.F6)(t, N.default, T.Z, !0)
					};
				})
				.value();
		return (
			a.unshift({
				value: R,
				label: C.Z.Messages.NO_INSTANT_INVITE
			}),
			(0, s.jsxs)(c.FormItem, {
				title: C.Z.Messages.FORM_LABEL_INSTANT_INVITE_CHANNEL,
				children: [
					(0, s.jsx)(c.SingleSelect, {
						className: x.spacing,
						options: a,
						value: t,
						onChange: this.handleChannelSelect
					}),
					(0, s.jsx)(c.FormText, {
						type: c.FormTextTypes.DESCRIPTION,
						children: C.Z.Messages.FORM_HELP_INSTANT_INVITE_CHANNEL
					})
				]
			})
		);
	}
	renderAPIInfo(e) {
		let t = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/guilds/').concat(e.id, '/widget.json');
		return (0, s.jsxs)('div', {
			className: x.infoWrapper,
			children: [
				(0, s.jsx)(c.FormItem, {
					title: C.Z.Messages.FORM_LABEL_SERVER_ID,
					className: x.infoItem,
					children: (0, s.jsx)(u.Z, { value: e.id })
				}),
				(0, s.jsx)(c.FormItem, {
					title: C.Z.Messages.FORM_LABEL_JSON_API,
					className: x.infoItem,
					children: (0, s.jsx)(u.Z, { value: t })
				})
			]
		});
	}
	renderWidget(e) {
		let t = ''.concat(location.protocol).concat(window.GLOBAL_ENV.WIDGET_ENDPOINT, '?id=').concat(e.id, '&theme=dark');
		return (0, s.jsx)('div', {
			children: (0, s.jsxs)('div', {
				className: x.infoWrapper,
				children: [
					(0, s.jsxs)(c.FormItem, {
						className: x.infoItem,
						title: C.Z.Messages.FORM_LABEL_PREMADE_WIDGET,
						children: [
							(0, s.jsx)(u.Z, { value: '<iframe src="'.concat(t, '" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>') }),
							(0, s.jsx)(c.FormText, {
								type: c.FormTextTypes.DESCRIPTION,
								children: C.Z.Messages.GUILD_SETTINGS_WIDGET_EMBED_HELP.format()
							})
						]
					}),
					(0, s.jsx)('img', {
						className: x.infoItem,
						'data-accessibility': 'desaturate',
						alt: '',
						src: n(329488)
					})
				]
			})
		});
	}
	render() {
		let { guild: e } = this.props;
		return null == e
			? null
			: this.props.hide
				? (0, s.jsx)(d.Z, {})
				: (0, s.jsxs)(c.FormSection, {
						tag: c.FormTitleTags.H1,
						title: C.Z.Messages.GUILD_SETTINGS_TITLE_SERVER_WIDGET,
						children: [this.renderToggle(), this.renderChannelSelect(e), (0, s.jsx)(c.FormDivider, { className: x.divider }), this.renderAPIInfo(e), (0, s.jsx)(c.FormDivider, { className: x.divider }), this.renderWidget(e)]
					});
	}
	constructor(...e) {
		super(...e),
			p(this, 'state', {
				internalEnabled: this.props.widgetEnabled,
				widgetEnabledProp: this.props.widgetEnabled
			}),
			p(this, 'renderToggle', () =>
				(0, s.jsx)(c.FormSwitch, {
					className: x.spacing,
					value: this.state.internalEnabled,
					onChange: this.handleToggleWidget,
					children: C.Z.Messages.GUILD_SETTINGS_WIDGET_ENABLE_WIDGET
				})
			),
			p(this, 'handleToggleWidget', (e) => {
				let { guild: t, widgetChannelId: n } = this.props;
				if (null != t) this.setState({ internalEnabled: e }), S.Z.updateEmbed(t.id, e, n);
			}),
			p(this, 'handleChannelSelect', (e) => {
				let { guild: t, widgetEnabled: n } = this.props;
				if (null != t) S.Z.updateEmbed(t.id, n, e !== R ? e : null);
			});
	}
}
t.Z = o.ZP.connectStores([h.Z, m.Z], () => {
	let { guild: e, embedChannelId: t, embedEnabled: n } = h.Z.getProps();
	return {
		guild: e,
		widgetChannelId: t,
		widgetEnabled: n,
		hide: m.Z.enabled
	};
})(L);
