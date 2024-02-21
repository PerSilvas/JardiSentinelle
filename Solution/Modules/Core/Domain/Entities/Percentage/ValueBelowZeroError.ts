/**
 * Error threw when the value is below zero.
 */
export class ValueBelowZeroError extends Error {
    public constructor() {
        super("Value below zero error.");
    }
}