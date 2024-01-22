export abstract class Presenter<TypeView> {
  private views: Array<TypeView>;

  public constructor() {
    this.views = new Array<TypeView>();
  }

  protected get Views(): Array<TypeView> { return this.views; }

  public AddView(view: TypeView): void {
    this.views.push(view);
  }

  public RemoveView(view: TypeView): void {
    const index: number = this.views.indexOf(view);
    this.views.splice(index, 1);
  }
}