import React from 'react'
import WidgetTypes from './WidgetTypes'

const ListWidget = ({widget,updateWidget,deleteWidget,index,size,moveUp,moveDown,preview}) =>{

    let itemsOfList=widget.items[0];
    for(var i=1;i<widget.items.length;i++){
        itemsOfList = itemsOfList.concat("\n",widget.items[i])
    }
    const makerContent =  <div className="container row">
        <div className="col-sm-9"><h3>List Widget</h3></div>
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
                    <textarea className="form-control" rows="3" id="list-paragraph"
                              placeholder="Enter one list item per line"
                              defaultValue={itemsOfList}
                              onChange={(event)=>{
                                  widget.items = event.target.value!==""?(event.target.value).split("\n"):
                                                 [];
                                  updateWidget(widget)
                              }}></textarea>
            </div>

            <div className="form-group">
                <select name="role" id="list"
                        className="custom-select mr-sm-2 wbdv-heading-dropdown"
                  onChange={(event)=>{
                      if(event.target.value==="UNORDERED LIST"){
                          widget.ordered = false
                      }else{
                          widget.ordered = true;
                      }
                      updateWidget(widget)
                   }
                  }>
                    {
                        widget.ordered?<option value="UNORDERED LIST">
                                                Unordered list
                                            </option>:<option value="UNORDERED LIST" selected>
                                             Unordered list
                        </option>
                    }

                    {
                        widget.ordered?<option value="ORDERED LIST" selected>
                            Ordered list
                        </option>:<option value="ORDERED LIST">
                            Ordered list
                        </option>
                    }

                </select>
            </div>

            <div className="form-group wbdev-input-text">
                <input className="form-control" type="text" placeholder="Widget Name"
                 defaultValue={widget.name}
                 onChange={(event)=>{
                  widget.name=event.target.value
                  updateWidget(widget)
                 }
                 }/>
            </div>

            <div>
                <h4>Preview</h4>
            </div>
            <div>

                {
                    widget.ordered?(<ol>{
                        widget.items.map((item,index)=><li key={index}>{item}</li>)}
                    </ol>):(<ul>{
                        widget.items.map((item,index)=><li key={index}>{item}</li>)}</ul>)
                }
            </div>
        </div>
    </div>

    return(
        <div className="wbdv-widget-list col-sm-12">
            {

                preview?
                (<div>
                    {
                        widget.ordered?(<ol>
                                          {widget.items.map((item,index)=><li key={index}>{item}</li>)}
                        </ol>):(<ul>{widget.items.map((item,index)=><li key={index}>{item}</li>)}</ul>)
                    }
                </div>)
                       : makerContent
            }
        </div>)}

export default ListWidget