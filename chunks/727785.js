var r, i, a, s, o, l;
function u(e, t, n) {
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
n.d(t, {
	X5: function () {
		return c;
	},
	a8: function () {
		return r;
	},
	h8: function () {
		return i;
	},
	xQ: function () {
		return a;
	}
});
class c {
	constructor(e) {
		u(this, 'id', void 0), u(this, 'text', void 0), (this.id = e), (this.text = e);
	}
}
((s = r || (r = {})).UP = 'UP'), (s.DOWN = 'DOWN'), ((o = i || (i = {})).GUILD = 'GUILD'), (o.TEXT_CHANNEL = 'TEXT_CHANNEL'), (o.GROUP_DM = 'GROUP_DM'), (o.VOICE_CHANNEL = 'VOICE_CHANNEL'), (o.USER = 'USER'), (o.HEADER = 'HEADER'), (o.APPLICATION = 'APPLICATION'), (o.SKU = 'SKU'), (o.LINK = 'LINK'), (o.IN_APP_NAVIGATION = 'IN_APP_NAVIGATION'), ((l = a || (a = {})).USER = '@'), (l.TEXT_CHANNEL = '#'), (l.VOICE_CHANNEL = '!'), (l.GUILD = '*'), (l.APPLICATION = '$');
