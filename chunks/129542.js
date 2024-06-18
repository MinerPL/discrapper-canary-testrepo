"use strict";
n.d(t, {
  D: function() {
    return a
  }
}), n(411104);
var i, r, s = n(358085),
  o = n(981631);

function a() {
  switch ((0, s.getPlatform)()) {
    case s.PlatformTypes.WINDOWS:
      let e = "x86";
      if (null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e) return o.QR$.WIN32;
      return o.QR$.WIN64;
    case s.PlatformTypes.OSX:
      return o.QR$.MACOS;
    case s.PlatformTypes.LINUX:
      return o.QR$.LINUX;
    default:
      throw Error("Unsupported build type")
  }
}(r = i || (i = {})).X86 = "x86", r.IA32 = "ia32"