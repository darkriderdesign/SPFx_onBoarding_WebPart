import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'onBoardingWebpartV3Strings';
import OnBoardingWebpartV3 from './components/OnBoardingWebpartV3';
import { IOnBoardingWebpartV3Props } from './components/IOnBoardingWebpartV3Props';
import { IOnBoardingWebpartV3WebPartProps } from './IOnBoardingWebpartV3WebPartProps';

export default class OnBoardingWebpartV3WebPart extends BaseClientSideWebPart<IOnBoardingWebpartV3WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IOnBoardingWebpartV3Props > = React.createElement(
      OnBoardingWebpartV3,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
