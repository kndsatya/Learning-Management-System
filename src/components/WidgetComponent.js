import React from 'react'
import HeadingWidget from './HeadingWidget'

import ImageWidget from './ImageWidget';
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";


const WidgetComponent = ({widget, deleteWidget, updateWidget,index,size,moveUp,moveDown,preview}) =>
    <div>




        {
            widget.widgetType=='HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                 widget={widget}
                 deleteWidget={deleteWidget}
                index={index}
                size={size}
                moveUp={moveUp}
                moveDown={moveDown}
                preview={preview}/> ||
            widget.widgetType=='IMAGE'   && <ImageWidget  updateWidget={updateWidget}
                                                    widget={widget}
                                                    deleteWidget={deleteWidget}
                                                    index={index}
                                                    size={size}
                                                    moveUp={moveUp}
                                                    moveDown={moveDown}
                                                    preview={preview}/> ||
            widget.widgetType=='PARAGRAPH'   && <ParagraphWidget  updateWidget={updateWidget}
            widget={widget}
            deleteWidget={deleteWidget}
            index={index}
            size={size}
            moveUp={moveUp}
            moveDown={moveDown}
            preview={preview}/> ||

            widget.widgetType=='LIST'   && <ListWidget  updateWidget={updateWidget}
                                                            widget={widget}
                                                            deleteWidget={deleteWidget}
                                                            index={index}
                                                            size={size}
                                                            moveUp={moveUp}
                                                            moveDown={moveDown}
                                                            preview={preview}/> ||
            widget.widgetType=='LINK'   && <LinkWidget  updateWidget={updateWidget}
                                                    widget={widget}
                                                    deleteWidget={deleteWidget}
                                                    index={index}
                                                    size={size}
                                                    moveUp={moveUp}
                                                    moveDown={moveDown}
                                                    preview={preview}/>
        }

    </div>

export default WidgetComponent