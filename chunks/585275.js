let r;
n(242167),
	n(970173),
	n(520712),
	n(268111),
	n(941497),
	n(32026),
	n(480839),
	n(744285),
	n(492257),
	n(873817),
	n(411104),
	n(773603);
var i = n(512722),
	a = n.n(i),
	s = n(392711),
	o = n.n(s),
	l = n(544891),
	u = n(992774),
	c = n(649754),
	d = n(376398),
	_ = n(846519),
	E = n(570140),
	f = n(710845),
	h = n(314897),
	p = n(358085),
	I = n(998502),
	m = n(569545),
	T = n(70722),
	g = n(981631),
	S = n(65154);
let A = {},
	N = new _.V7(),
	v = !1,
	O = window.document.createElement('canvas');
(O.width = 512), (O.height = 288);
let R = O.getContext('2d');
function C() {
	N.stop(), null != r && (c.Z.removeSink(r, A), (r = null));
}
let y = o().debounce((e, t, n, r) => {
	D(
		e,
		(0, m.V9)({
			streamType: null != t ? T.lo.GUILD : T.lo.CALL,
			guildId: t,
			channelId: n,
			ownerId: r
		})
	);
}, 500);
async function D(e, t) {
	if (r !== e) return;
	let n = () => D(e, t);
	if (!v)
		try {
			let n = await (function (e, t) {
				let n = 0;
				return (
					p.isPlatformEmbedded
						? function (e, t) {
								let n = (0, u.zS)(),
									i = (null == n ? void 0 : n.getNextVideoOutputFrame) != null;
								return new Promise((a, s) => {
									let o = (e) => {
										try {
											null != e && t(e) && a(e);
										} catch (e) {
											s(e);
										}
									};
									i
										? n.getNextVideoOutputFrame(e).then(o, (t) => {
												if (r === e) throw t;
											})
										: c.Z.addSink(e, A, o);
								}).finally(() => {
									!i && c.Z.removeSink(e, A);
								});
							}
						: function (e, t) {
								let n = (0, d.aG)(e);
								if (null == n) return Promise.resolve(new ImageData(0, 0));
								let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
									a = document.createElement('video'),
									s = document.createElement('canvas');
								(a.width = s.width = null != r ? r : 512),
									(a.height = s.height = null != i ? i : 288),
									(a.srcObject = n),
									a.play();
								let o = s.getContext('2d');
								return new Promise((e, n) => {
									a.ontimeupdate = () => {
										null == o || o.drawImage(a, 0, 0, s.width, s.height);
										let r = null == o ? void 0 : o.getImageData(0, 0, s.width, s.height);
										try {
											null != r && t(r) && e(r);
										} catch (e) {
											n(e);
										}
									};
								}).finally(() => {
									(a.ontimeupdate = null), a.removeAttribute('srcObject'), a.load();
								});
							}
				)(e, (e) => {
					if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
					if (++n > t) throw Error('Timed out awaiting non-black frame after '.concat(t, ' frames'));
					return !1;
				});
			})(e, 60);
			await (function (e) {
				let t = 512 / e.width,
					n = Math.min(t, 288 / e.height),
					r = e.width * n,
					i = e.height * n;
				(O.width = r), (O.height = i);
				let a = window.document.createElement('canvas'),
					s = a.getContext('2d');
				(a.width = e.width), (a.height = e.height);
				let o = new ImageData(e.data, e.width, e.height);
				return (
					null == s || s.putImageData(o, 0, 0),
					new Promise((t) => {
						null == R || R.drawImage(a, 0, 0, e.width, e.height, 0, 0, r, i), t();
					})
				);
			})(n);
			let i = O.toDataURL('image/jpeg');
			if (
				(E.Z.dispatch({
					type: 'STREAM_PREVIEW_FETCH_SUCCESS',
					streamKey: t,
					previewURL: i
				}),
				p.isPlatformEmbedded)
			) {
				let e = h.default.getToken();
				a()(null != e, 'Auth token was null while sending screenshot.'),
					await I.ZP.makeChunkedRequest(
						g.ANM.STREAM_PREVIEW(t),
						{ thumbnail: i },
						{
							method: 'POST',
							token: e
						}
					);
			} else
				await l.tn.post({
					url: g.ANM.STREAM_PREVIEW(t),
					body: { thumbnail: i },
					oldFormErrors: !0
				});
		} catch (t) {
			new f.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', t),
				r === e && N.start(60000, n);
			return;
		}
	r === e && (v ? N.start(60000, n) : N.start(300000, n));
}
t.Z = {
	init() {
		E.Z.subscribe('CONNECTION_OPEN', C),
			E.Z.subscribe('LOGOUT', C),
			E.Z.subscribe('STREAM_DELETE', C),
			E.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
				let { guildId: t, channelId: n, userId: i, streamId: a, context: s } = e;
				!(null == a || s !== S.Yn.STREAM || i !== h.default.getId() || __OVERLAY__) && (C(), (r = a), y(a, t, n, i));
			}),
			E.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
				let { videoState: t } = e;
				v = t === g.FQ1.PAUSED || !1;
			});
	}
};
