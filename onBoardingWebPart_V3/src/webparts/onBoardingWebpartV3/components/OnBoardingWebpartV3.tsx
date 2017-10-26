import * as React from 'react';
import styles from './OnBoardingWebpartV3.module.scss';
import { IOnBoardingWebpartV3Props } from './IOnBoardingWebpartV3Props';
import { escape } from '@microsoft/sp-lodash-subset';

import Header from "./HeaderGraphic";





export default class OnBoardingWebpartV3 extends React.Component<IOnBoardingWebpartV3Props, void> {
  public render(): React.ReactElement<IOnBoardingWebpartV3Props> {
    return (
      <div >

        <Header />
 
          
         
      </div>
    );
  }
}
