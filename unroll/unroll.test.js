const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("returns [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const result = unroll(square);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it('returns ["a", "b", "c", "f", "i", "h", "g", "d", "e"]', function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const result = unroll(smallerSquare);
    expect(result).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("returns [1, 2, 3, 4, 8, 7, 6, 5]", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    const result = unroll(square);
    expect(result).toEqual([1, 2, 3, 4, 8, 7, 6, 5]);
  });

  it("returns []", function () {
    const square = [];
    const result = unroll(square);
    expect(result).toEqual([]);
  });

});
