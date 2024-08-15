n.d(t, {
	Mb: function () {
		return o;
	},
	Z0: function () {
		return a;
	},
	d1: function () {
		return u;
	},
	fy: function () {
		return s;
	},
	r5: function () {
		return l;
	}
});
var r = n(313201),
	i = n(689938);
let a = (0, r.hQ)(),
	s = (0, r.hQ)(),
	o = (0, r.hQ)(),
	l = (0, r.hQ)();
function u() {
	[
		{
			id: a,
			text: ','
		},
		{
			id: s,
			text: ','
		},
		{
			id: o,
			text: i.Z.Messages.REACTIONS
		},
		{
			id: l,
			text: i.Z.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
		}
	].forEach((e) => {
		let { id: t, text: n } = e,
			r = document.getElementById(t);
		null == r &&
			((r = document.createElement('div')).setAttribute('id', t),
			(r.innerText = n),
			(r.style.display = 'none'),
			document.body.appendChild(r));
	});
}
