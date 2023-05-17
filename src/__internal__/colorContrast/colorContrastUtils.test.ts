import {
  convertHexToRgb,
  getColorChannelChroma,
  getContrastRatio,
  getLuminance,
  HexCode,
  isContrastRatioHighEnough,
  AcceptableContrastRatios,
} from "./colorContrastUtils";

describe("color constrast utils", () => {
  describe("convertHexToRgb", () => {
    it.each`
      input
      ${"#0"}
      ${"#00"}
      ${"#000"}
      ${"#0000"}
      ${"#00000"}
      ${"#0000000"}
      ${"#gggggg"}
      ${"#00000g"}
      ${"#ghjklm"}
    `("throws an error for $input", ({ input }: { input: string }) => {
      expect(() => convertHexToRgb(input as HexCode)).toThrow(
        'Invalid hex code. Hex code must begin with a "#" and only contain numeric or a-f characters. Received ' +
          input
      );
    });

    it.each`
      input        | expected
      ${"#000000"} | ${{ red: 0, green: 0, blue: 0 }}
      ${"#aaaaaa"} | ${{ red: 170, green: 170, blue: 170 }}
      ${"#bbbbbb"} | ${{ red: 187, green: 187, blue: 187 }}
      ${"#cccccc"} | ${{ red: 204, green: 204, blue: 204 }}
      ${"#ffffff"} | ${{ red: 255, green: 255, blue: 255 }}
      ${"#abc123"} | ${{ red: 171, green: 193, blue: 35 }}
    `("returns $expected for $input", ({ input, expected }) => {
      expect(convertHexToRgb(input)).toEqual(expected);
    });
  });

  describe("getColorChannelChroma", () => {
    it.each`
      input
      ${-5}
      ${-1}
      ${256}
      ${3404}
    `("throws an out of bounds error for $input", ({ input }) => {
      expect(() => getColorChannelChroma(input)).toThrow(
        `Invalid color channel value. Value must be between 0 and 255, inclusive. Received ${input}`
      );
    });

    it.each`
      input  | expected
      ${0}   | ${0}
      ${10}  | ${0.003035269835488375}
      ${30}  | ${0.012983032342173012}
      ${120} | ${0.18782077230067787}
      ${194} | ${0.5394794890121071}
      ${255} | ${1}
    `("returns $expected for $input", ({ input, expected }) => {
      expect(getColorChannelChroma(input)).toBe(expected);
    });
  });

  describe("getLuminance", () => {
    it.each`
      input        | expected
      ${"#000000"} | ${0}
      ${"#aaaaaa"} | ${0.40197777983219574}
      ${"#bbbbbb"} | ${0.4969329950608704}
      ${"#cccccc"} | ${0.6038273388553377}
      ${"#ffffff"} | ${1}
      ${"#abc123"} | ${0.469192045727981}
    `("returns $expected for $input", ({ input, expected }) => {
      expect(getLuminance(input)).toBe(expected);
    });
  });

  describe("getContrastRatio", () => {
    it.each`
      colorOne     | colorTwo     | expected
      ${"#000000"} | ${"#000000"} | ${1}
      ${"#ffffff"} | ${"#ffffff"} | ${1}
      ${"#999999"} | ${"#999999"} | ${1}
      ${"#000000"} | ${"#ffffff"} | ${21}
      ${"#abc123"} | ${"#ffffff"} | ${2.022373047968697}
      ${"#facade"} | ${"#abc123"} | ${1.4029294195744573}
      ${"#050505"} | ${"#e4e452"} | ${15.060858633499699}
    `(
      "returns $expected for $colorOne, $colorTwo",
      ({ colorOne, colorTwo, expected }) => {
        expect(getContrastRatio(colorOne, colorTwo)).toBe(expected);
      }
    );
  });

  describe("isContrastRatioHighEnough", () => {
    it.each`
      colorOne     | colorTwo     | expected
      ${"#000000"} | ${"#000000"} | ${false}
      ${"#ffffff"} | ${"#ffffff"} | ${false}
      ${"#999999"} | ${"#999999"} | ${false}
      ${"#abc123"} | ${"#ffffff"} | ${false}
      ${"#facade"} | ${"#abc123"} | ${false}
      ${"#888888"} | ${"#ffffff"} | ${true}
      ${"#050505"} | ${"#e4e452"} | ${true}
      ${"#000000"} | ${"#ffffff"} | ${true}
    `(
      "returns $expected for $colorOne and $colorTwo for large text",
      ({ colorOne, colorTwo, expected }) => {
        expect(
          isContrastRatioHighEnough(
            colorOne,
            colorTwo,
            AcceptableContrastRatios.LARGE_TEXT
          )
        ).toBe(expected);
      }
    );

    it.each`
      colorOne     | colorTwo     | expected
      ${"#000000"} | ${"#000000"} | ${false}
      ${"#ffffff"} | ${"#ffffff"} | ${false}
      ${"#999999"} | ${"#999999"} | ${false}
      ${"#abc123"} | ${"#ffffff"} | ${false}
      ${"#facade"} | ${"#abc123"} | ${false}
      ${"#888888"} | ${"#ffffff"} | ${false}
      ${"#050505"} | ${"#e4e452"} | ${true}
      ${"#000000"} | ${"#ffffff"} | ${true}
    `(
      "returns $expected for $colorOne and $colorTwo for regular text",
      ({ colorOne, colorTwo, expected }) => {
        expect(
          isContrastRatioHighEnough(
            colorOne,
            colorTwo,
            AcceptableContrastRatios.TEXT
          )
        ).toBe(expected);
      }
    );
  });
});
