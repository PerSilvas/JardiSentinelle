import { QuantityError } from "@modules/Core/Domain/Entities/Quantity/Errors/QuantityError";

export class QuantityMustBePositive extends QuantityError {
    public constructor() {
        super("Quantity must be positive.");
    }
}