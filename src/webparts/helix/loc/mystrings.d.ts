declare interface IHelixWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  ListNameFieldLabel:string;
}

declare module 'HelixWebPartStrings' {
  const strings: IHelixWebPartStrings;
  export = strings;
}
