import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HelixWebPartStrings';
import Helix from './components/Helix';
import { IHelixProps } from './components/IHelixProps';
require('../../../src/css/bootstrap.min.css');
require('../../../src/css/custom.css');

export interface IHelixWebPartProps {
  description: string;
  listName:string
}

export default class HelixWebPart extends BaseClientSideWebPart<IHelixWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelixProps> = React.createElement(
      Helix,
      {
        description: this.properties.description,
        listName: this.properties.listName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('listName', {
                  label: strings.ListNameFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
