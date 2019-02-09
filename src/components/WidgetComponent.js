import React from 'react'
import HeadingWidget from './HeadingWidget'

import ImageWidget from './ImageWidget';
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";


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
                                                    moveDown={moveDown}
                                                    preview={preview}/> ||
            widget.type=='PARAGRAPH'   && <ParagraphWidget  updateWidget={updateWidget}
            widget={widget}
            deleteWidget={deleteWidget}
            index={index}
            size={size}
            moveUp={moveUp}
            moveDown={moveDown}
            preview={preview}/> ||

            widget.type=='LIST'   && <ListWidget  updateWidget={updateWidget}
                                                            widget={widget}
                                                            deleteWidget={deleteWidget}
                                                            index={index}
                                                            size={size}
                                                            moveUp={moveUp}
                                                            moveDown={moveDown}
                                                            preview={preview}/> ||
            widget.type=='LINK'   && <LinkWidget  updateWidget={updateWidget}
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