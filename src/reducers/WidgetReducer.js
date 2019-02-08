// const widgets =
//     {
//         widgets: [
//             {
//                 id: 123,
//                 title: 'Widget 1',
//                 type: 'HEADING',
//                 text: 'This is a heading',
//                 size: 2
//             },
//             {
//                 id: 234,
//                 title: 'Widget 2',
//                 type: 'IMAGE'
//             }
//         ]
//     }

import CourseService from "../services/CourseService";

const widgetReducer = (state, action) => {
    switch(action.type) {

        case 'DELETE_WIDGET':

            return {
                 widgets: state.widgets.filter(widget => widget.id !== action.widget.id)
            }

        case 'CREATE_WIDGET':

            const widget = {
                id: Math.random(),
                type: 'HEADING',
                text: 'New Widget',
                size: 1
            }

            return {
                widgets: [
                    ...state.widgets,
                    widget
                ]
            }

        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                                               widget.id === action.widget.id ? action.widget : widget
                )
            }

        case 'FIND_WIDGET' : return{
            widget : state.widgets.find(widget => widget.id === action.widget.id)
        }

        case 'FIND_ALL_WIDGETS_FOR_TOPIC' :
            return {
            widgets : action.courseService.findWidgets(action.topicId)
        }


        default:
            return state;
    }
}

export default widgetReducer;