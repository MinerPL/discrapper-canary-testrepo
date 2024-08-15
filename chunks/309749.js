var n = r(147018),
	a = r(926515);
n(
	{
		target: 'URL',
		proto: !0,
		enumerable: !0
	},
	{
		toJSON: function () {
			return a(URL.prototype.toString, this);
		}
	}
);
