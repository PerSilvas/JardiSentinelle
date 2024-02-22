import { QuantityError } from "@modules/Core/Domain/Entities/Quantity/Errors/QuantityError";

export class QuantityComparisonRequiresSameType extends QuantityError {
    public constructor() {
        super("Quantity comparison requires the same type.");
    }
}