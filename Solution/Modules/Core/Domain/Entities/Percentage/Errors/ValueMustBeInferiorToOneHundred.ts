import { PercentageError } from "@modules/Core/Domain/Entities/Percentage/Errors/PercentageError";

/**
 * The value must be inferior to one hundred.
 */
export class ValueMustBeInferiorToOneHundred extends PercentageError {
    public constructor() {
        super("Value must be inferior to one hundred.");
    }
}