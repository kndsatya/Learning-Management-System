import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget}) =>

    <div>

        <div>
            {
                widgets.map(widget =>
                                <WidgetComponent
                                    key={widget.id}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}/>
                )
            }
        </div>
    </div>

export default WidgetList