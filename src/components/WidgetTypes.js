import React from 'react'
import '../containers/CourseEditor.css'






const WidgetTypes = ({widget,updateWidget,deleteWidget,index,size,moveUp,moveDown}) =>

        <div>

            {
                index===0?<a></a>:
            <i className="fa fa-arrow-up wbdev-uparrow btn-warning"
               onClick={()=>{moveUp(widget)}}></i>}


            {index===size-1?<a></a>:<i className="fa fa-arrow-down wbdev-down-arrow btn-warning"
                                       onClick={()=>{moveDown(widget)}}></i>}

            <select name="heading"  onChange={(event) => {

                widget.type = event.target.value


                switch(widget.type){
                    case "IMAGE" : widget.src = "https://picsum.photos/200";
                                   break;
                    case "HEADING" :
                        widget.size = 1
                        widget.text="Heading 1"
                }

                updateWidget(widget)
            }}>

                {
                    widget.type==="HEADING"?
                    <option value="HEADING" selected>
                        Heading
                    </option>:
                    <option value="HEADING">
                        Heading
                    </option>
                }

                {
                    widget.type==="LIST"?

                    <option value="LIST" selected>
                        List
                    </option> :
                    <option value="LIST">
                        List
                    </option>

                }

                {
                    widget.type==="PARAGRAPH"?
                    <option value="PARAGRAPH" selected>
                        Paragraph
                    </option>:<option value="PARAGRAPH">
                        Paragraph
                    </option>
                }

                {
                    widget.type==="IMAGE"?

                    <option value="IMAGE" selected>
                        Image
                    </option>:
                    <option value="IMAGE">
                        Image
                    </option>
                }
                {
                    widget.type==="LINK"?

                    <option value="LINK" selected>
                        Link
                    </option>:
                    <option value="LINK">
                        Link
                    </option>
                }
            </select>
             <i
                className="fa fa-window-close ml-sm-2  wbdev-close-icon" onClick={(event)=>

                 deleteWidget(widget)}></i>
        </div>

export default WidgetTypes;