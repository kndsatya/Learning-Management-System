import React from 'react'
import WidgetTypes from './WidgetTypes'

const ParagraphWidget = ({widget,updateWidget,deleteWidget,index,size,moveUp,moveDown,preview}) =>{

    const makerContent =  <div className="container row">
        <div className="col-sm-9"><h3>Paragraph Widget</h3></div>
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
                <textarea className="form-control" rows="3" id="comment"
                          placeholder="Lorem ipsum"
                          onChange={(event)=>{
                              widget.text = event.target.value;
                              updateWidget(widget);
                          }}
                defaultValue={widget.text}>

                </textarea>
            </div>

            <div className="form-group wbdev-input-text">
                <input className="form-control" type="text" placeholder="Widget Name" onChange={(event)=>{
                    widget.name = event.target.value
                    updateWidget(widget)

                }} defaultValue={widget.name}/>
            </div>

            <div>
                <h4>Preview</h4>
            </div>
            <div>
                <p>{widget.text}</p>
            </div>
        </div>
    </div>

    return(
        <div className="wbdv-widget-list col-sm-12">
            {

                preview?
                (<div>
                    <p>{widget.text}</p>
                </div>)
                       : makerContent

            }
        </div>)}

export default ParagraphWidget