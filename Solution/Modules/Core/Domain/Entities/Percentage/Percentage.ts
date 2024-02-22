import { PercentageMustBePositive } from "@modules/Core/Domain/Entities/Percentage/Errors/PercentageMustBePositive";
import { ValueMustBeInferiorToOneHundred } from "./Errors/ValueMustBeInferiorToOneHundred";
import { Either, Failure, Success } from "simply-either-ts";
import { PercentageError } from "@modules/Core/Domain/Entities/Percentage/Errors/PercentageError";

/**
 * This represents a ratio value in percentage.
 */
export class Percentage {
    private readonly value: number;

    private constructor(value: number) {
        this.value = value;
    }

    /**
     * Factory method to create a percentage.
     * @param value - The value must be between 0 and 100.
     */
    public static Create(value: number): Either<Percentage, PercentageError> {
        if (value < 0)
            return Failure(new PercentageMustBePositive());
        else if (value > 100)
            return Failure(new ValueMustBeInferiorToOneHundred());

        return Success(new Percentage(value));
    }

    public get Value(): number { return this.value; }
    public get Ratio(): number { return this.value / 100; }
}