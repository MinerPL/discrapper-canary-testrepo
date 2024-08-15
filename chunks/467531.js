n.d(t, {
	B: function () {
		return r;
	},
	W: function () {
		return l;
	}
});
var i = n(544891),
	a = n(881052),
	s = n(981631);
async function r(e) {
	let { channelId: t, messageId: n, answerIds: r } = e;
	try {
		await i.tn.put({
			url: s.ANM.POLL_ANSWERS(t, n),
			body: { answer_ids: r }
		});
	} catch (e) {
		throw new a.Hx(e);
	}
}
async function l(e) {
	let { channelId: t, messageId: n } = e;
	try {
		await i.tn.post({ url: s.ANM.POLL_EXPIRE(t, n) });
	} catch (e) {
		throw new a.Hx(e);
	}
}
