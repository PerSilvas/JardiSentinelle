import { IBoxView } from "./IBoxView";

export class BoxPresenter {
  private view: IBoxView;

  public constructor(view: IBoxView) {
    this.view = view;
  }

  public MoveForward(): void {
    this.view.MoveForward();
  }

  public MoveBackward(): void {
    this.view.MoveBackward();
  }

  public SetLevelIndex(index: number): void {
    this.view.SetLevelIndex(index);
  }
}