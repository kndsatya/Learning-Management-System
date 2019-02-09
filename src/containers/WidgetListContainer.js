import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => {
    return {widgets: state.widgets,
            preview: state.preview}
}

const dispatchToPropertyMapper = dispatch => ({
    deleteWidget: widget =>
        dispatch({
                     type: 'DELETE_WIDGET',
                     widget: widget
                 }),
    addWidget: () =>
        dispatch({
                     type: 'CREATE_WIDGET'
                 }),

    updateWidget: widget =>
        dispatch({
                     type: 'UPDATE_WIDGET',
                     widget: widget
                 }),

    moveUp: widget =>
        dispatch({
                     type: 'MOVE_UP',
                     widget: widget
                 }),

    moveDown: widget =>
        dispatch({
                     type: 'MOVE_DOWN',
                     widget: widget
                 }),
    togglePreview : ()=> dispatch({
                                      type: 'TOGGLE_PREVIEW'
                                  }),

    save : () => dispatch({
                              type: 'SAVE'
                          })
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer