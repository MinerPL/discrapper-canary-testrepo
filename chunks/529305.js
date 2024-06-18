var i = {
  "./ggsans-400-normal.woff2": "776764",
  "./ggsans-500-mediumitalic.woff2": "811135",
  "./ggsans-600-semibolditalic.woff2": "480854",
  "./ggsans-700-bold.woff2": "909671",
  "./ggsans-600-semibold.woff2": "151859",
  "./ggsans-400-normalitalic.woff2": "963686",
  "./ggsans-500-medium.woff2": "5983",
  "./ggsans-800-extrabolditalic.woff2": "69891",
  "./ggsans-700-bolditalic.woff2": "228978",
  "./ggsans-800-extrabold.woff2": "362799"
};

function r(e) {
  return Promise.resolve().then(function() {
    if (!n.o(i, e)) {
      var t = Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    var r = i[e];
    return n.t(r, 17)
  })
}
r.keys = function() {
  return Object.keys(i)
}, r.id = "529305", e.exports = r