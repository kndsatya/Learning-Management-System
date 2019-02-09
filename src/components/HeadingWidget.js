import React from 'react'
import WidgetTypes from './WidgetTypes'

const HeadingWidget = ({widget,updateWidget,deleteWidget,index,size,moveUp,moveDown,preview}) =>{

     const makerContent =  <div className="container row">
         <div className="col-sm-9"><h3>Heading Widget</h3></div>
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
                        placeholder="Heading Text" defaultValue={widget.text}
                        onChange={(event)=>{
                            widget.text = event.target.value;
                            updateWidget(widget);
                        }}/>
             </div>
             <div className="form-group">
                 <select name="role" id="role"
                         className="custom-select mr-sm-2 wbdv-heading-dropdown">

                     {
                         widget.size === 1? <option value="HEADING 1" selected>
                             Heading 1
                         </option> :  <option value="HEADING 1">
                             Heading 1
                         </option>
                     }

                     {widget.size === 2 ?   <option value="HEADING 2" selected>
                         Heading 2
                     </option> :   <option value="HEADING 2">
                          Heading 2
                      </option>
                     }

                     {widget.size === 3 ?   <option value="HEADING 3" selected>
                         Heading 3
                     </option> :   <option value="HEADING 3">
                          Heading 3
                      </option>
                     }

                     {widget.size === 4?   <option value="HEADING 4" selected>
                         Heading 4
                     </option> :   <option value="HEADING 4">
                          Heading 4
                      </option>
                     }

                     {widget.size === 5 ?   <option value="HEADING 5" selected>
                         Heading 5
                     </option> :   <option value="HEADING 5">
                          Heading 5
                      </option>
                     }

                 </select>
             </div>
             <div className="form-group wbdev-input-text">
                 <input className="form-control" type="text"
                        placeholder="Widget Name" defaultValue={widget.name}
                        onChange={(event)=>{
                            widget.name= event.target.value;
                            updateWidget(widget);
                        }}/>
             </div>
             <div>
                 <h4>Preview</h4>
             </div>
             <div>{widget.size === 1 && <h1>{widget.text}</h1> ||
                   widget.size === 2 && <h2>{widget.text}</h2> ||
                   widget.size === 3 && <h3>{widget.text}</h3> ||
                   widget.size === 4 && <h4>{widget.text}</h4> ||
                   widget.size === 5 && <h5>{widget.text}</h5>}</div>
             </div>
     </div>

       return(
         <div className="wbdv-widget-list col-sm-12">
                {

                    preview?
                    (<div>{widget.size === 1 && <h1>{widget.text}</h1> ||
                             widget.size === 2 && <h2>{widget.text}</h2> ||
                             widget.size === 3 && <h3>{widget.text}</h3> ||
                             widget.size === 4 && <h4>{widget.text}</h4> ||
                             widget.size === 5 && <h5>{widget.text}</h5>}</div>)
                : makerContent

                }
            </div>)}

export default HeadingWidget