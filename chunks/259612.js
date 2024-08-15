n.d(t, {
	R: function () {
		return a;
	},
	W: function () {
		return i;
	}
}),
	n(411104);
var r = n(356659);
function i(e) {
	let t = document.createElement('canvas');
	(t.width = e.width), (t.height = e.height);
	let n = t.getContext('2d');
	if (null == n) throw Error('Could not create canvas context');
	return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL('image/jpeg', 0.9);
}
async function a(e, t) {
	let n = document.createElement('video');
	(n.muted = !0), (n.src = e), (n.currentTime = t), await n.play(), n.pause();
	let i = r.f_ / n.videoWidth,
		a = Math.min(i, r.wD / n.videoHeight),
		s = n.videoWidth * a,
		o = n.videoHeight * a,
		l = document.createElement('canvas');
	(l.width = s), (l.height = o);
	let u = l.getContext('2d');
	if (null == u) throw Error('Could not create canvas context');
	return u.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, s, o), l.toDataURL('image/jpeg', 0.9);
}
