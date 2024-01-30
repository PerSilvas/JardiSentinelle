export interface ICulture {
  get Ascendant(): ICulture;
  get Descendants(): Array<ICulture>;
}