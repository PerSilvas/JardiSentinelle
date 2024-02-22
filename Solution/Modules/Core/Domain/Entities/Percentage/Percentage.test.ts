import { PercentageMustBePositive } from "@modules/Core/Domain/Entities/Percentage/Errors/PercentageMustBePositive";
import { ValueMustBeInferiorToOneHundred } from "@modules/Core/Domain/Entities/Percentage/Errors/ValueMustBeInferiorToOneHundred";
import { Percentage } from "@modules/Core/Domain/Entities/Percentage/Percentage";

describe("Percentage", () => {
    it("should create a Percentage object for valid values", () => {
        const validValue = 50;
        const percentage = Percentage.Create(validValue).Success;
        expect(percentage.Value).toBe(validValue);
    });

    it("should calculate the correct ratio for a Percentage object", () => {
        const validValue = 50;
        const expectedRatio = validValue / 100;
        const percentage = Percentage.Create(validValue).Success;
        expect(percentage.Ratio).toBe(expectedRatio);
    });

    it("should be a failure for values below 0", () => {
        const invalidValue = -1;
        const percentage = Percentage.Create(invalidValue);
        expect(percentage.IsFailure).toBe(true);
        expect(percentage.Failure).toBeInstanceOf(PercentageMustBePositive);
    });

    it("should be a failure for values exceeding 100", () => {
        const invalidValue = 101;
        const percentage = Percentage.Create(invalidValue);
        expect(percentage.IsFailure).toBe(true);
        expect(percentage.Failure).toBeInstanceOf(ValueMustBeInferiorToOneHundred);
    });
});