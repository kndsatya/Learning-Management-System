import React from 'react'
import HeadingWidget from './HeadingWidget'

import ImageWidget from './ImageWidget';


const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
    <div>

        {
            widget.type=='HEADING' &&
            <HeadingWidget
                updateWidget={updateWidget}
                 widget={widget}
                 deleteWidget={deleteWidget}/> ||
            widget.type=='IMAGE'   && <ImageWidget  updateWidget={updateWidget}
                                                    widget={widget}
                                                    deleteWidget={deleteWidget}/>
        }

    </div>

export default WidgetComponent