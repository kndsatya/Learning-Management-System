import React from 'react'
import WidgetTypes from "./WidgetTypes";

const ImageWidget = ({widget,updateWidget,deleteWidget,index,size,moveUp,moveDown}) =>


    <div className="wbdv-widget-list col-sm-12">
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
                           placeholder="http://lorempixel.com/300/150/"
                           defaultValue={"http://lorempixel.com/300/150/"}/>
                </div>

                <div className="form-group wbdev-input-text">
                    <input className="form-control" type="text" placeholder="Widget Name"/>
                </div>


                <div>
                    <h4>Preview</h4>
                </div>
                <div>
                    <img src="http://lorempixel.com/300/150/" className="img-fluid"
                         alt="Responsive image"/>
                </div>
            </div>
        </div>
    </div>

export default ImageWidget