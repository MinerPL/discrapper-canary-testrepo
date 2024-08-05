
function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
n.d(t, {
  m: function() {
return s;
  }
}), n(951953), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
let i = new(n(259443)).Y('RenderingContextWebGL');
class a {
  static create(e) {
if (null == e)
  return null;
let t = this.createShader(e, e.VERTEX_SHADER, '\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n'),
  n = this.createShader(e, e.FRAGMENT_SHADER, '\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n');
if (null == t || null == n)
  return null;
let r = this.createProgram(e, t, n);
if (null == r)
  return null;
let i = e.getAttribLocation(r, 'position'),
  s = e.getAttribLocation(r, 'texcoord');
if (-1 === i || -1 === s)
  return null;
let o = e.getUniformLocation(r, 'transform'),
  l = e.getUniformLocation(r, 'texture');
if (null == o || null == l)
  return null;
let u = e.createBuffer();
if (null == u)
  return null;
e.bindBuffer(e.ARRAY_BUFFER, u), e.bufferData(e.ARRAY_BUFFER, new Float32Array([
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  0,
  0,
  1,
  1,
  1
]), e.STATIC_DRAW);
let c = e.createTexture();
return null == c ? null : new a({
  gl: e,
  program: r,
  positionLoc: i,
  texcoordLoc: s,
  transformLoc: o,
  textureLoc: l,
  vertexBuffer: u,
  texture: c
});
  }
  static createShader(e, t, n) {
let r = e.createShader(t);
if (null == r)
  return null;
if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
  i.warn('Failed to compile shader!');
  let t = e.getShaderInfoLog(r);
  return null != t && i.log(t), e.deleteShader(r), null;
}
return r;
  }
  static createProgram(e, t, n) {
if (null == t || null == n)
  return null;
let r = e.createProgram();
if (null == r)
  return null;
if (e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r), !e.getProgramParameter(r, e.LINK_STATUS)) {
  i.warn('Failed to link program!');
  let t = e.getProgramInfoLog(r);
  return null != t && i.log(t), e.deleteProgram(r), null;
}
return r;
  }
  render(e) {
if (null == e)
  return;
let t = e.width,
  n = e.height,
  r = this.gl;
r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t, n, 0, r.RGBA, r.UNSIGNED_BYTE, e.data), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.viewport(0, 0, t, n), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT), r.useProgram(this.program), r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer), r.enableVertexAttribArray(this.positionLoc), r.vertexAttribPointer(this.positionLoc, 2, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(this.texcoordLoc), r.vertexAttribPointer(this.texcoordLoc, 2, r.FLOAT, !1, 0, 0), r.uniformMatrix4fv(this.transformLoc, !1, this.transform), r.uniform1i(this.textureLoc, 0), r.drawArrays(r.TRIANGLES, 0, 6);
  }
  constructor({
gl: e,
program: t,
positionLoc: n,
texcoordLoc: i,
transformLoc: a,
textureLoc: s,
vertexBuffer: o,
texture: l
  }) {
r(this, 'transform', new Float32Array([
  2,
  0,
  0,
  0,
  0,
  -2,
  0,
  0,
  0,
  0,
  1,
  0,
  -1,
  1,
  0,
  1
])), r(this, 'gl', void 0), r(this, 'program', void 0), r(this, 'positionLoc', void 0), r(this, 'texcoordLoc', void 0), r(this, 'transformLoc', void 0), r(this, 'textureLoc', void 0), r(this, 'vertexBuffer', void 0), r(this, 'texture', void 0), this.gl = e, this.program = t, this.positionLoc = n, this.texcoordLoc = i, this.transformLoc = a, this.textureLoc = s, this.vertexBuffer = o, this.texture = l;
  }
}

function s(e) {
  let t = e.getContext('webgl2');
  return null == t ? null : a.create(t);
}