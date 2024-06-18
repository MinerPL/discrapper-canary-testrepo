"use strict";
n(411104);
var i = n(141795),
  r = n(476326),
  s = n(956664),
  o = n(693824);
t.Z = class e {
  toDataUrl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return e.toDataURL(t, n)
  }
  async exportCanvas(e, t) {
    let {
      format: n,
      fileType: a = "png",
      quality: l = 1,
      fileName: u
    } = t;
    if (n === o.kH.Base64) return this.toDataUrl(e, a, l);
    if (n === o.kH.Blob) {
      let t = this.toDataUrl(e, a, l);
      return (0, s.kD)(t)
    }
    if (n === o.kH.File) {
      let t = this.toDataUrl(e, a, l);
      return await (0, s.Bo)(t, u, "image/png")
    }
    if (n === o.kH.CloudUpload) {
      let {
        channelId: n
      } = t, o = this.toDataUrl(e, a, l), _ = await (0, s.Bo)(o, u, "image/png");
      return new i.n({
        file: _,
        platform: r.ow.WEB,
        isThumbnail: !1
      }, n)
    }
    throw Error("DiscordCanvas: ".concat(n, " is not a valid export format."))
  }
}