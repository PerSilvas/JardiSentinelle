import { ServiceNotFound } from "./ServiceNotFound";

export class ServiceLocator {
  private dependencies: Map<symbol, unknown>;

  public constructor() {
    this.dependencies = new Map<symbol, unknown>();  
  }
  
  public Register<Type>(symbol: symbol, dependency: Type): void {
    this.dependencies.set(symbol, dependency);
    console.log(symbol.toString());
  }

  public Unregister(symbol: symbol): void {
    this.dependencies.delete(symbol);
  }

  public Get<Type>(symbol: symbol): Type {
    if (!this.dependencies.has(symbol))
      throw new ServiceNotFound(symbol.toString());

    return this.dependencies.get(symbol) as Type;
  }
}