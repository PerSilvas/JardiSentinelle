/**
 * Error threw when the value exceeded one hundred.
 */
export class ValueExceededOneHundredError extends Error {
    public constructor() {
        super("Value exceeded one hundred error.");
    }
}