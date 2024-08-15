n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041);
var r = n(147913),
	i = n(339085),
	a = n(592125),
	s = n(768581),
	o = n(176354),
	l = n(176505),
	u = n(149203);
let c = new Worker(new URL('/assets/' + n.u('80493'), n.b));
class d extends r.Z {
	handleChannelPreload(e) {
		let { channelId: t } = e;
		if ((0, l.AB)(t)) return;
		let n = a.Z.getChannel(t);
		null != n &&
			n.isForumLikeChannel() &&
			(function (e) {
				let t = [],
					n = e.defaultReactionEmoji;
				if ((null == n ? void 0 : n.emojiId) != null) {
					var r, a;
					t.push(
						s.ZP.getEmojiURL({
							id: n.emojiId,
							animated:
								null !==
									(a = null === (r = i.ZP.getUsableCustomEmojiById(n.emojiId)) || void 0 === r ? void 0 : r.animated) &&
								void 0 !== a &&
								a,
							size: u.kV.reaction
						})
					);
				} else (null == n ? void 0 : n.emojiName) != null && t.push(o.ZP.getURL(n.emojiName));
				return (
					e.availableTags.forEach((e) => {
						null != e.emojiId
							? t.push(
									s.ZP.getEmojiURL({
										id: e.emojiId,
										animated: !1,
										size: u.kV.reaction
									})
								)
							: null != e.emojiName && t.push(o.ZP.getURL(e.emojiName));
					}),
					t
				);
			})(n).forEach((e) => {
				if (null != e && 0 !== e.length) {
					var t;
					(t = e),
						new Promise((e) => {
							let n = (r) => {
								let {
									data: { url: i }
								} = r;
								null == c || c.removeEventListener('message', n), t === i && e();
							};
							null == c || c.addEventListener('message', n), null == c || c.postMessage({ url: t });
						});
				}
			});
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = { CHANNEL_PRELOAD: this.handleChannelPreload }),
			n in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r);
	}
}
t.Z = new d();
