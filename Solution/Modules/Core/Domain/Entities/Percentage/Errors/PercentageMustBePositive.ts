import { PercentageError } from "@modules/Core/Domain/Entities/Percentage/Errors/PercentageError";

/**
 * The percentage must be positive.
 */
export class PercentageMustBePositive extends PercentageError {
    public constructor() {
        super("Percentage must be positive.");
    }
}