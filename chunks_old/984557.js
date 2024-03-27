"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var r, i = n("884691"),
  s = n("979897"),
  o = n("49671"),
  a = n("773336");
r = class extends i.Component {
  getFileContents() {
    let {
      fileContents: e
    } = this.props;
    return "function" == typeof e && (e = e()), e
  }
  downloadNative(e, t) {
    o.default.fileManager.saveWithDialog(e, t)
  }
  downloadHtml5(e, t) {
    let n = new Blob([e], {
      type: this.props.contentType
    });
    (0, s.saveAs)(n, t)
  }
  render() {
    let {
      children: e
    } = this.props, t = i.Children.only(e);
    return i.cloneElement(t, {
      onClick: this.handleFileDownload
    })
  }
  constructor(...e) {
    super(...e), this.handleFileDownload = e => {
      e.preventDefault();
      let t = this.getFileContents(),
        {
          fileName: n,
          onDownload: r
        } = this.props;
      a.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == r || r()
    }
  }
}