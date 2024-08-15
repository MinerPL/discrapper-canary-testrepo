n.d(t, {
	Z: function () {
		return i;
	}
});
var r = n(689938);
class i {
	announce(e, t, n) {
		this.announcer.announce(e, t, n);
	}
	announceDrag(e, t) {
		if (null == e) return;
		let n = this.getName(e, t);
		this.announce(r.Z.Messages.DND_ITEM_PICKED_UP.format({ itemName: n }));
	}
	announceHover(e, t) {
		null != e && this.announce(this.getName(e, t));
	}
	announceDrop() {
		this.announce(r.Z.Messages.DND_ITEM_DROPPED);
	}
	announceCancel() {
		this.announce(r.Z.Messages.DND_DRAG_CANCELED);
	}
	clear() {
		this.announcer.clearAnnouncements();
	}
	getName(e, t) {
		var n, r;
		return null !== (r = null !== (n = e.getAttribute('data-dnd-name')) && void 0 !== n ? n : e.getAttribute('aria-label')) && void 0 !== r ? r : t;
	}
	constructor(e) {
		var t, r, i;
		if (
			((t = this),
			(i = void 0),
			(r = 'announcer') in t
				? Object.defineProperty(t, r, {
						value: i,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[r] = i),
			null != e)
		)
			this.announcer = e;
		else {
			let e = n(408160);
			this.announcer = {
				announce: e.announce,
				clearAnnouncements: e.clearAnnouncer
			};
		}
	}
}
