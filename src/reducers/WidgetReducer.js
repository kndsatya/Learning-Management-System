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
                 widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
                courseService: state.courseService,
                topicId: state.topicId,
                preview: state.preview
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
                ],
                courseService: state.courseService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget
            return {
                widgets: state.widgets.map(widget =>
                                               widget.id === action.widget.id ? action.widget : widget
                ),
                courseService: state.courseService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'FIND_WIDGET' : return{
            widget : state.widgets.find(widget => widget.id === action.widget.id),
            courseService: state.courseService,
            topicId: state.topicId,
            preview: state.preview
        }

        case 'FIND_ALL_WIDGETS_FOR_TOPIC' :
            return {
            widgets : action.courseService.findWidgets(action.topicId),
            courseService : action.courseService,
            topicId: action.topicId,
            preview:action.preview
        }

        case 'MOVE_UP':
            const index = state.widgets.indexOf(action.widget);
            const upperWidget = state.widgets[index-3]
            state.widgets[index-3] = state.widgets[index]
            state.widgets[index] = upperWidget
            return {
               widgets:[...state.widgets],
                courseService: state.courseService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'MOVE_DOWN':
            const downIndex= state.widgets.indexOf(action.widget);
            const downWidget = state.widgets[downIndex+3]
            state.widgets[downIndex+3] = state.widgets[downIndex]
            state.widgets[downIndex] = downWidget
            return {
                widgets:[...state.widgets],
                courseService: state.courseService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'TOGGLE_PREVIEW':

              const preview = state.preview?false:true
            return{
                  preview:preview,
                  widgets: [...state.widgets],
                courseService: state.courseService,
                topicId: state.topicId
            }
        case 'SAVE':
            console.log(state.courseService)
               return {
                     widgets: state.courseService.saveWidgets(state.topicId,state.widgets),
                     courseService: state.courseService,
                     topicId: state.topicId,
                     preview : state.preview
               }

        default:
            return state;
    }
}

export default widgetReducer;