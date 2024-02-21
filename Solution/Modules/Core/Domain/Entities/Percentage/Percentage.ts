import { ValueBelowZeroError } from "@modules/Core/Domain/Entities/Percentage/ValueBelowZeroError";
import { ValueExceededOneHundredError } from "./ValueExceededOneHundredError";

/**
 * This represents a ratio value in percentage.
 */
export class Percentage {
    private readonly value: number;

    /**
     * Constructor.
     * @param value - The value must be between 0 and 100.
     */
    public constructor(value: number) {
        if (value < 0)
            throw new ValueBelowZeroError();
        else if (value > 100)
            throw new ValueExceededOneHundredError();

        this.value = value;
    }

    public get Value(): number { return this.value; }
    public get Ratio(): number { return this.value / 100; }
}