import { QuantityType } from "@modules/Core/Domain/Entities/Quantity/QuantityType";
import { QuantityComparisonRequiresSameType } from "@modules/Core/Domain/Entities/Quantity/Errors/QuantityComparisonRequiresSameType";
import { Either, Failure, Success } from "simply-either-ts";
import { QuantityMustBePositive } from "@modules/Core/Domain/Entities/Quantity/Errors/QuantityMustBePositive";

/**
 * Represents a quantity of something either it is a Unity, a Mass, a Volume etc.
 */
export class Quantity {
    private readonly value: number;
    private readonly type: QuantityType;

    private constructor(value: number, type: QuantityType) {
        this.value = value;
        this.type = type;
    }

    /**
     * Create a quantity.
     * @param value - The value of the quantity.
     * @param type - The type of the quantity.
     * @returns Either the quantity either an error if the value is negative.
     */
    public static Create(value: number, type: QuantityType): Either<Quantity, QuantityMustBePositive> {
        if (value < 0)
            return Failure(new QuantityMustBePositive());

        return Success(new Quantity(value, type));
    }

    public get Value(): number { return this.value; }
    public get Type(): QuantityType { return this.type; }

    /**
     * Check if the quantity is comparable to another quantity.
     * @param quantity - The quantity to compare to.
     * @returns Either void either an error if the quantity to compare is not from the same type.
     */
    private IsComparableTo(quantity: Quantity): Either<void, QuantityComparisonRequiresSameType> {
        if (this.type != quantity.type)
            return Failure(new QuantityComparisonRequiresSameType());

        return Success(void 0);
    }

    /**
     * Add a quantity to the current quantity.
     * @param quantity - The quantity to add.
     * @returns Either the quantity either an error if the quantity to compare is not from the same type.
     */
    public Add(quantity: Quantity): Either<Quantity, QuantityComparisonRequiresSameType> {
        const result = this.IsComparableTo(quantity);

        if (result.IsFailure)
            return Failure(result.Failure);

        return Success(new Quantity(this.value + quantity.Value, this.type));
    }

    /**
     * Subtract a quantity to the current quantity.
     * @param quantity - The quantity to subtract.
     * @returns Either the quantity either an error if the quantity to compare is not from the same type.
     */
    public Subtract(quantity: Quantity): Either<Quantity, QuantityComparisonRequiresSameType> {
        const result = this.IsComparableTo(quantity);

        if (result.IsFailure)
            return Failure(result.Failure);

        return Success(new Quantity(this.value - quantity.Value, this.type));
    }

    /**
     * Check if the current quantity is greater than another quantity.
     * @param quantity - The quantity to compare to.
     * @returns Either a boolean either an error if the quantity to compare is not from the same type.
     */
    public IsGreaterThan(quantity: Quantity): Either<boolean, QuantityComparisonRequiresSameType> {
        const result = this.IsComparableTo(quantity);

        if (result.IsFailure)
            return Failure(result.Failure);

        return Success(this.value > quantity.Value);
    }

    /**
     * Check if the current quantity is lower than another quantity.
     * @param quantity - The quantity to compare to.
     * @returns Either a boolean either an error if the quantity to compare is not from the same type.
     */
    public IsLowerThan(quantity: Quantity): Either<boolean, QuantityComparisonRequiresSameType> {
        const result = this.IsComparableTo(quantity);

        if (result.IsFailure)
            return Failure(result.Failure);

        return Success(this.value < quantity.Value);
    }

    /**
     * Check if the current quantity is equal to another quantity.
     * @param quantity - The quantity to compare to.
     * @returns Either a boolean either an error if the quantity to compare is not from the same type.
     */
    public IsEqualTo(quantity: Quantity): Either<boolean, QuantityComparisonRequiresSameType> {
        const result = this.IsComparableTo(quantity);

        if (result.IsFailure)
            return Failure(result.Failure);

        return Success(this.value === quantity.Value);
    }
}
