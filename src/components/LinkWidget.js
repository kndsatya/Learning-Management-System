import React from 'react'
import WidgetTypes from "./WidgetTypes";

const LinkWidget = ({widget,updateWidget,deleteWidget,index,size,moveUp,moveDown,preview}) =>{

const makerContent =
        <div className="container row">
            <div className="col-sm-9"><h3>Link Widget</h3></div>
            <div className="col-sm-3">
                <WidgetTypes widget={widget}
                             updateWidget={updateWidget}
                             deleteWidget={deleteWidget}
                             index={index}
                             size={size}
                             moveUp={moveUp}
                             moveDown={moveDown}/>
            </div>
            <div className="col-12">
                <br/>
                <div className="form-group wbdev-input-text">
                    <input className="form-control" id="link" type="text"
                           placeholder="Enter any Link"
                           defaultValue={widget.href}
                           onChange={(event)=>{
                               widget.href=event.target.value;
                               updateWidget(widget)
                           }}/>
                </div>
                <div className="form-group wbdev-input-text">
                    <input className="form-control" type="text" placeholder="Link text"
                    defaultValue={widget.linkText}
                           onChange={(event)=>{
                               widget.linkText=event.target.value;
                               updateWidget(widget)
                           }}/>
                </div>
                <div className="form-group wbdev-input-text">
                    <input className="form-control" type="text" placeholder="Widget Name"
                    defaultValue={widget.name}
                           onChange={(event)=>{
                               widget.name=event.target.value;
                               updateWidget(widget)
                           }}/>
                </div>
                <div>
                    <h4>Preview</h4>
                </div>
                <div>
                    <a href={widget.href}>{widget.linkText}</a>
                </div>
            </div>
        </div>

    return(<div className="wbdv-widget-list col-sm-12">
        {
            preview ?(<div>
                <a href={widget.href}>{widget.linkText}</a>
            </div>): makerContent
        }
    </div>)

}
export default LinkWidget