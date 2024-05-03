    "use strict";

    function r() {
      return e.e("47674").then(e.bind(e, "305522"))
    }
    async function o(n, t, e, o, u) {
      return (await r()).crop_gif(n, t, e, o, u)
    }
    e.r(t), e.d(t, {
      default: function() {
        return r
      },
      wasmCropGIF: function() {
        return o
      }
    })