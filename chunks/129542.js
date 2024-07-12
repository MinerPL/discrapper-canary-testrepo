n.d(t, {
  D: function() {
return s;
  }
}), n(411104);
var r, i, a = n(358085),
  o = n(981631);

function s() {
  switch ((0, a.getPlatform)()) {
case a.PlatformTypes.WINDOWS:
  let e = 'x86';
  if (null != window.DiscordNative && (e = window.DiscordNative.os.arch), 'x86' === e || 'ia32' === e)
    return o.QR$.WIN32;
  return o.QR$.WIN64;
case a.PlatformTypes.OSX:
  return o.QR$.MACOS;
case a.PlatformTypes.LINUX:
  return o.QR$.LINUX;
default:
  throw Error('Unsupported build type');
  }
}
(i = r || (r = {})).X86 = 'x86', i.IA32 = 'ia32';