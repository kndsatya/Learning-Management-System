import React from 'react'
import HeadingWidget from './HeadingWidget'

import ImageWidget from './ImageWidget';


const WidgetComponent = ({widget, deleteWidget, updateWidget,index,size,moveUp,moveDown,preview}) =>
    <div>




        {
            widget.type=='HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                 widget={widget}
                 deleteWidget={deleteWidget}
                index={index}
                size={size}
                moveUp={moveUp}
                moveDown={moveDown}
                preview={preview}/> ||
            widget.type=='IMAGE'   && <ImageWidget  updateWidget={updateWidget}
                                                    widget={widget}
                                                    deleteWidget={deleteWidget}
                                                    index={index}
                                                    size={size}
                                                    moveUp={moveUp}
                                                    moveDown={moveDown}/>
        }

    </div>

export default WidgetComponent