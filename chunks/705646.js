n.d(t, {
	S: function () {
		return s;
	},
	Z: function () {
		return o;
	}
});
var r = n(433517),
	i = n(314897),
	a = n(981631);
function s(e, t) {
	if (0 === e.length) return 'No logs';
	let n = r.K.get(a.JkL),
		i = r.K.get(a.scU),
		s = e
			.map((e) => {
				let n = e.silent ? 'Silent' : 'Displayed',
					r = t ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
				return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(n, ' - ').concat(r);
			})
			.join('\n');
	return ''
		.concat(null != n ? 'Device Token: '.concat(n) : '', '\n')
		.concat(null != i ? 'Device Voip Token: '.concat(i) : '', '\n\n')
		.concat(s);
}
async function o() {
	let e = i.default.getId();
	return [];
}
