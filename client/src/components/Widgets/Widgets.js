import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Test", 'Top news - 90999 readers')}
            {newsArticle("Coronavirus", 'UK Updates - 809 readers')}
            {newsArticle("Coronavirus", 'UK Updates - 809 readers')}
            {newsArticle("Coronavirus", 'UK Updates - 809 readers')}
            {newsArticle("Coronavirus", 'UK Updates - 809 readers')}
            {newsArticle("Coronavirus", 'UK Updates - 809 readers')}
            {newsArticle("aaaaaaaa", 'aaaaaaaaaaaaa - 10578 readers')}
        </div>
    )
}

export default Widgets
