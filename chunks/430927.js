i.d(n, {
	T: function () {
		return h;
	},
	o: function () {
		return d;
	}
});
var l = i(512722),
	a = i.n(l),
	t = i(287734),
	s = i(471253),
	r = i(922482),
	c = i(592125),
	o = i(19780),
	u = i(765305);
async function d(e, n) {
	let { entity_type: i } = e;
	switch (i) {
		case u.WX.STAGE_INSTANCE: {
			let n = o.Z.getChannelId(),
				i = c.Z.getChannel(e.channel_id);
			a()(null != i, 'could not find channel'),
				n !== i.id && (await r.TM(i, !0), await r.R5(i, null, !1)),
				await (0, s.RK)(i, !1, !0);
			break;
		}
		case u.WX.VOICE: {
			let n = o.Z.getChannelId(),
				i = c.Z.getChannel(e.channel_id);
			a()(null != i, 'could not find channel'), n !== i.id && t.default.selectVoiceChannel(i.id);
		}
	}
}
function h(e, n) {
	let { entity_type: i } = e;
	switch (i) {
		case u.WX.STAGE_INSTANCE:
		case u.WX.VOICE:
		case u.WX.EXTERNAL:
			null == n || n();
	}
	return Promise.resolve();
}
