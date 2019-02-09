import React from 'react'
import WidgetTypes from "./WidgetTypes";

const ImageWidget = ({widget,updateWidget,deleteWidget,index,size,moveUp,moveDown,preview}) => {

 const contentMaker =
        <div className="container row">
            <div className="col-sm-9"><h3>Image Widget</h3></div>
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
                    <input className="form-control" type="text"
                           placeholder="Enter Some Image Link. For example: http://lorempixel.com/300/150/"
                           defaultValue={widget.src}
                           onChange={(event) => {
                               widget.src = event.target.value;
                               updateWidget(widget)
                           }}/>
                </div>

                <div className="form-group wbdev-input-text">
                    <input className="form-control" type="text" placeholder="Widget Name"
                           defaultValue={widget.name}
                           onChange={(event) => {
                               widget.name = event.target.value;
                               updateWidget(widget)
                           }}/>
                </div>


                <div>
                    <h4>Preview</h4>
                </div>
                <div>
                    <img src={widget.src} className="img-fluid"
                         alt="Responsive image"/>
                </div>
            </div>
        </div>

        return(<div className="wbdv-widget-list col-sm-12">
            {
                preview?(<div>
                    <img src={widget.src} className="img-fluid"
                         alt="Responsive image"/>
                </div>):contentMaker
            }
        </div>)
}
export default ImageWidget