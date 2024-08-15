n.d(t, {
	H: function () {
		return T;
	},
	v: function () {
		return _;
	}
}),
	n(47120);
var i = n(512722),
	s = n.n(i),
	o = n(652874),
	a = n(313361),
	l = n(683860),
	r = n(731965),
	c = n(442837),
	u = n(592125),
	d = n(559241);
function h(e, t, n) {
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
let m = new Set(),
	p = {
		layoutType: a.X.LIST,
		sortOrder: l.z.CREATION_DATE,
		tagFilter: m,
		scrollPosition: 0
	};
class g {
	constructor(e, t) {
		h(this, 'set', void 0),
			h(this, 'get', void 0),
			h(this, 'channelStates', void 0),
			h(this, 'setChannelState', void 0),
			h(this, 'getChannelState', void 0),
			h(this, 'toggleTagFilter', void 0),
			h(this, 'setTagFilter', void 0),
			h(this, 'setSortOrder', void 0),
			h(this, 'setLayoutType', void 0),
			h(this, 'setScrollPosition', void 0),
			(this.set = e),
			(this.get = t),
			(this.channelStates = {}),
			(this.setChannelState = (e, t) => {
				let n = this.get(),
					i = this.getChannelState(e),
					s = { ...n.channelStates };
				(s[e] = {
					...i,
					...t
				}),
					(0, r.j)(() => this.set({ channelStates: s }));
			}),
			(this.getChannelState = (e) => {
				if (null == e) return p;
				let { channelStates: t } = this.get(),
					n = t[e];
				if (null == n) {
					let t = u.Z.getChannel(e);
					s()(null != t, '[Forum Channel Store] The channel should not be missing.'),
						(n = {
							layoutType: t.getDefaultLayout(),
							sortOrder: t.getDefaultSortOrder(),
							tagFilter: m,
							scrollPosition: 0
						});
				}
				return n;
			}),
			(this.toggleTagFilter = (e, t) => {
				let n = new Set(this.getChannelState(e).tagFilter);
				n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n);
			}),
			(this.setTagFilter = (e, t) => {
				this.setChannelState(e, { tagFilter: t }), d.Z.setFilterTagIds(t);
			}),
			(this.setSortOrder = (e, t) => {
				this.setChannelState(e, { sortOrder: t }), d.Z.setSortOrder(t);
			}),
			(this.setLayoutType = (e, t) => {
				this.setChannelState(e, { layoutType: t }), d.Z.setLayout(t);
			}),
			(this.setScrollPosition = (e, t) => {
				this.setChannelState(e, { scrollPosition: t });
			});
	}
}
let f = (0, o.Z)((e, t) => new g(e, t)),
	T = (e) => {
		let t = f();
		return null == (0, c.e7)([u.Z], () => u.Z.getChannel(e)) ? p : t.getChannelState(e);
	},
	_ = () => f;
