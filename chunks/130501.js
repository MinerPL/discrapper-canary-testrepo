n.d(t, {
	Q: function () {
		return s;
	}
});
var r = n(430901),
	i = n(229579),
	a = n(222285),
	s = (function () {
		function e(e, t) {
			(this.target = e),
				(this.observedBox = t || r.z.CONTENT_BOX),
				(this.lastReportedSize = {
					inlineSize: 0,
					blockSize: 0
				});
		}
		return (
			(e.prototype.isActive = function () {
				var e,
					t = (0, i.Y)(this.target, this.observedBox, !0);
				if (((e = this.target), !(0, a.zd)(e) && !(0, a.jD)(e) && 'inline' === getComputedStyle(e).display)) this.lastReportedSize = t;
				return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize || !1;
			}),
			e
		);
	})();
