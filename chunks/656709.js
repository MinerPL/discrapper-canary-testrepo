n.d(t, {
	p: function () {
		return l;
	}
});
var i = n(904245),
	a = n(790642),
	s = n(957730);
function l(e) {
	let t,
		{ channel: n, content: l, entry: r } = e,
		o = s.ZP.parse(n, l);
	return (
		(t = (0, a.bx)('sendMessageWithEmbed') ? { unverified_content: r } : { content: r }),
		i.Z.sendMessage(n.id, o, void 0, { contentInventoryEntry: t })
	);
}
