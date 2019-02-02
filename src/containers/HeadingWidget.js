import React from 'react'

const HeadingWidget = () =>


        <div className="wbdv-widget-list col-sm-12">
            <div className="container row">
            <div className="col-sm-9"><h3>Heading Widget</h3></div>
            <div className="col-sm-3">
                <a href="#" className="btn-warning wbdev-uparrow">
                    <i className="fa fa-arrow-up"></i> </a>
                <a href="#" className="btn-warning wbdev-down-arrow">
                    <i className="fa fa-arrow-down"></i></a>

                <select name="heading">
                    <option value="HEADING" selected>
                        Heading
                    </option>
                    <option value="LIST">
                        List
                    </option>
                    <option value="PARAGRAPH">
                        Paragraph
                    </option>
                    <option value="IMAGE">
                        Image
                    </option>
                    <option value="LINK">
                        Link
                    </option>
                </select>
                <a href="#"> <i
                    className="fa fa-window-close ml-sm-2  wbdev-close-icon"></i>
                </a>
            </div>
            <div className="col-12">
                <br/>
                <div className="form-group wbdev-input-text">
                    <input className="form-control" type="text"
                           placeholder="Heading Text"/>
                </div>
                <div className="form-group">
                    <select name="role" id="role"
                            className="custom-select mr-sm-2 wbdv-heading-dropdown">
                        <option value="" selected>
                            Choose Size
                        </option>
                        <option value="HEADING 1">
                            Heading 1
                        </option>
                        <option value="HEADING 2">
                            Heading 2
                        </option>
                        <option value="HEADING 3">
                            Heading 3
                        </option>
                    </select>
                </div>
                <div className="form-group wbdev-input-text">
                    <input className="form-control" type="text"
                           placeholder="Widget Name"/>
                </div>
                <div>
                    <h4>Preview</h4>
                </div>
                <div>
                    <h1>Heading Text</h1>
                </div>
            </div>
        </div>
    </div>

export default HeadingWidget