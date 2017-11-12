// @flow

import React from 'react'
import {BigBanner} from 'app/common/BigBanner'

import styles from 'styles/teacher/connect/connect.scss'

export class Connect extends React.Component<*>{

  render = (): React$Element<*> => (
    <div className="container">
      <BigBanner>
        <b>Go to InvolveMe.com</b> and enter Session <b>PIN: 432 AZr</b>
      </BigBanner>
      <div className="content">
        <span className="total-joined">
          Members joined: 16
        </span>
        <button className="join-session-btn btn">START</button>
      </div>
      <div className="image-row">
        <img src={require('assets/iphoneHand.png')} className="outter" />
        <img src={require('assets/tabletHand.png')} className="inner" />
        <img src={require('assets/samsungHand.png')} className="outter" />
      </div>
      <div className="bottom-content curved-bottom">
        <span>Get your <b>phone</b>, <b>laptop</b>, or <b>tablet</b> out now!</span>
      </div>
    </div>
  )
}