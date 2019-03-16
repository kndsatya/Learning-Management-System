import WidgetService from "../services/WidgetService";

const widgetReducer = (state, action) => {
    switch(action.type) {

        case 'DELETE_WIDGET':

            return {

                widgets: state.widgets.filter(widget => widget.widgetId !== action.widget.widgetId),
                widgetService: state.widgetService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'CREATE_WIDGET':

            const widget = {
                widgetId : Math.floor((Math.random() * 1000000) + 1),
                                widgetType: 'HEADING',
                text: 'New Widget',
                size: 1,
                order:0
            }

            return {
                widgets: [
                    ...state.widgets,
                    widget
                ],
                widgetService: state.widgetService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'UPDATE_WIDGET':
            // replace the old widget with the new widget

            return {
                widgets: state.widgets.map(widget =>
                                               widget.widgetId === action.widget.widgetId ? action.widget : widget
                ),
                widgetService: state.widgetService,
                topicId: state.topicId,
                preview: state.preview

            }

        case 'FIND_WIDGET' : return{
            widget : state.widgets.find(widget => widget.widgetId === action.widget.widgetId),
            widgetService: state.widgetService,
            topicId: state.topicId,
            preview: state.preview
        }

        case 'FIND_ALL_WIDGETS_FOR_TOPIC' :

            return {
            widgets : action.widgets,
            widgetService : action.widgetService,
            topicId: action.topicId,
            preview:action.preview
        }

        case 'MOVE_UP':
            const index = state.widgets.indexOf(action.widget);
            const upperWidget = state.widgets[index-1]
            state.widgets[index-1] = state.widgets[index]
            state.widgets[index] = upperWidget
            return {
               widgets:[...state.widgets],
                widgetService: state.widgetService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'MOVE_DOWN':
            const downIndex= state.widgets.indexOf(action.widget);
            const downWidget = state.widgets[downIndex+1]
            state.widgets[downIndex+1] = state.widgets[downIndex]
            state.widgets[downIndex] = downWidget
            return {
                widgets:[...state.widgets],
                widgetService: state.widgetService,
                topicId: state.topicId,
                preview: state.preview
            }

        case 'TOGGLE_PREVIEW':

              const preview = state.preview?false:true
            return{
                  preview:preview,
                  widgets: [...state.widgets],
                widgetService: state.widgetService,
                topicId: state.topicId
            }

        case 'SAVE':
            state.widgetService.deleteWidgetsOfTopic(state.topicId).then(
                ()=>{
                        state.widgets.map((widget,index)=>{
                        widget.orderNumber = index;
                        state.widgetService.createWidget(state.topicId,widget)
                    })
                }
            )
               return {

                     widgets: state.widgets,
                     widgetService: state.widgetService,
                     topicId: state.topicId,
                     preview : state.preview
               }

        default:
            return state;
    }
}

export default widgetReducer;