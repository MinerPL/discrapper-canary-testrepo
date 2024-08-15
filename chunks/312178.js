n(411104), n(47120);
var i = n(735250),
	s = n(470079),
	a = n(442837),
	o = n(765250),
	r = n(13245),
	l = n(26229),
	c = n(552062),
	d = n(355863),
	u = n(237997),
	h = n(451478),
	p = n(434529),
	f = n(145597),
	_ = n(382790),
	g = n(990673),
	m = n(906037),
	E = n(430036),
	Z = n(839434),
	I = n(981631);
function S(e, t, n) {
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
let C = {
	[I.Odu.TEXT](e) {
		let { dragging: t, locked: n, pinned: s, dragStart: a } = e;
		return (0, i.jsx)(E.Z, {
			dragStart: a,
			locked: n,
			pinned: s,
			dragging: t
		});
	},
	[I.Odu.GUILDS](e) {
		let { locked: t, dragStart: n } = e;
		return (0, i.jsx)(_.Z, {
			dragStart: n,
			locked: t
		});
	},
	[I.Odu.VOICE](e) {
		let { id: t, anchor: n, isPreviewingInGame: s, locked: a, pinned: o } = e;
		return (0, i.jsx)(Z.Z, {
			anchor: n,
			id: t,
			locked: a,
			pinned: o,
			widget: I.Odu.VOICE,
			isPreviewingInGame: s
		});
	},
	[I.Odu.GUILDS_TEXT](e) {
		let { dragging: t, locked: n, dragStart: s } = e;
		return (0, i.jsx)(g.Z, {
			dragStart: s,
			dragging: t,
			locked: n,
			pinned: !1
		});
	}
};
class v extends s.PureComponent {
	componentDidUpdate(e) {
		this.props.locked &&
			!e.locked &&
			null != this.state.lastLayoutUpdate &&
			(r.Z.track(I.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
	}
	renderWidget(e, t, n) {
		let {
				props: { locked: i, isPreviewingInGame: s },
				state: { dragging: a }
			} = this,
			o = C[e.type];
		if (null == o) throw Error('OverlayLayout: Widget does not exist in WidgetMap');
		return (r) =>
			o({
				id: e.id,
				locked: i,
				pinned: e.pinned,
				dragging: a,
				isPreviewingInGame: s,
				anchor: t,
				size: n,
				dragStart: r
			});
	}
	render() {
		let { widget: e, widgetConfig: t, layoutSize: n, locked: s, isPreviewingInGame: a, isActiveRegion: o } = this.props;
		if (null == e || null == t) return null;
		let { id: r, pinned: l, zIndex: d, size: u, anchor: h } = e,
			f = (0, p.w_)(u, n),
			_ = (0, p.KR)(h, n),
			{ minSize: g, resizeX: E, resizeY: Z, dragAnywhere: I } = t,
			S = (0, m.eM)({
				locked: s,
				isPreviewingInGame: a,
				pinned: l
			}),
			C = {
				minX: 0,
				minY: 0,
				maxX: n.width,
				maxY: n.height
			};
		return (0, i.jsx)(c.Z, {
			id: r,
			size: f,
			anchor: _,
			container: C,
			minSize: g,
			hidden: !S,
			resizeX: E,
			resizeY: Z,
			style: { zIndex: d },
			dragAnywhere: I,
			active: !s || o,
			onUpdate: this.handleUpdate,
			onClick: this.handleFocus,
			onDragStart: this.handleDragStart,
			onDragEnd: this.handleDragEnd,
			children: this.renderWidget(e, _, f)
		});
	}
	constructor(...e) {
		super(...e),
			S(this, 'state', {
				lastLayoutUpdate: null,
				dragging: !1
			}),
			S(this, 'handleUpdate', (e, t, n, i, s) => {
				let {
					props: { layoutSize: a },
					state: { lastLayoutUpdate: r }
				} = this;
				if (!(0, f.Te)(a)) return;
				let l = (0, p.jL)(n, a),
					u = (0, p.Ox)(i, a);
				(0, o.Os)(t), (0, o.nv)(t, l, u);
				let h = e === c.B.MOVE,
					_ = (0, p.PY)(n, a.width, a.height, s.width, s.height);
				this.setState({
					lastLayoutUpdate: {
						was_resized: (null != r && r.was_resized) || !h,
						was_dragged: (null != r && r.was_dragged) || h,
						widget_type: d.Z.getWidgetType(t),
						window_width: a.width,
						window_height: a.height,
						widget_width: s.width,
						widget_height: s.height,
						widget_left: _.left,
						widget_top: _.top
					}
				});
			}),
			S(this, 'handleFocus', (e) => {
				let { layoutSize: t } = this.props;
				(0, f.Te)(t) && (0, o.Os)(e);
			}),
			S(this, 'handleDragStart', () => {
				let { widget: e } = this.props;
				null != e && (e.pinned && r.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
			}),
			S(this, 'handleDragEnd', () => {
				let { widget: e } = this.props;
				null != e && (e.pinned && r.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
			});
	}
}
let x = a.ZP.connectStores([d.Z, u.Z], (e) => {
	let { widgetId: t } = e,
		n = d.Z.getWidget(t),
		i = u.Z.getActiveRegions();
	return {
		widget: n,
		widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
		locked: u.Z.isInstanceUILocked(),
		isPreviewingInGame: u.Z.isPreviewingInGame(),
		isActiveRegion: null != n && n.type === I.Odu.TEXT && i.has(I.O0n.TEXT_WIDGET)
	};
})(v);
function T(e, t) {
	return (0, i.jsx)(
		x,
		{
			widgetId: e,
			layoutSize: t
		},
		e
	);
}
t.Z = a.ZP.connectStores([d.Z, h.Z], () => ({
	layout: d.Z.getLayout(f.qU),
	layoutSize: h.Z.windowSize(),
	renderWidget: T
}))(l.Z);
