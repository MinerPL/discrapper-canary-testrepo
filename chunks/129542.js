n.d(t, {
	D: function () {
		return o;
	}
}),
	n(411104);
var r,
	i,
	a = n(358085),
	s = n(981631);
function o() {
	switch ((0, a.getPlatform)()) {
		case a.PlatformTypes.WINDOWS:
			let e = 'x86';
			if ((null != window.DiscordNative && (e = window.DiscordNative.os.arch), 'x86' === e || 'ia32' === e))
				return s.QR$.WIN32;
			return s.QR$.WIN64;
		case a.PlatformTypes.OSX:
			return s.QR$.MACOS;
		case a.PlatformTypes.LINUX:
			return s.QR$.LINUX;
		default:
			throw Error('Unsupported build type');
	}
}
((i = r || (r = {})).X86 = 'x86'), (i.IA32 = 'ia32');
