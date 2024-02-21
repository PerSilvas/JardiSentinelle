import { ValueBelowZeroError } from "@modules/Core/Domain/Entities/Percentage/ValueBelowZeroError";
import { ValueExceededOneHundredError } from "@modules/Core/Domain/Entities/Percentage/ValueExceededOneHundredError";
import { Percentage } from "@modules/Core/Domain/Entities/Percentage/Percentage";

describe("Percentage", () => {
    it("should create a Percentage object for valid values", () => {
        const validValue = 50;
        const percentage = new Percentage(validValue);
        expect(percentage.Value).toBe(validValue);
    });

    it("should calculate the correct ratio for a Percentage object", () => {
        const validValue = 50;
        const expectedRatio = validValue / 100;
        const percentage = new Percentage(validValue);
        expect(percentage.Ratio).toBe(expectedRatio);
    });

    it("should throw error for values below 0", () => {
        const invalidValue = -1;
        expect(() => new Percentage(invalidValue)).toThrow(ValueBelowZeroError);
    });

    it("should throw error for values exceeding 100", () => {
        const invalidValue = 101;
        expect(() => new Percentage(invalidValue)).toThrow(ValueExceededOneHundredError);
    });
});