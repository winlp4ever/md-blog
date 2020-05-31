import React, {Component} from "react"

import MdRender from '../markdown-render/markdown-render'

import TextareaAutosize from '@material-ui/core/TextareaAutosize'

import './_editor.scss'

export default class Editor extends Component {
    state = {
        post: '',
        editMode: true
    }

    enableEditMode = () => {
        this.setState({editMode: true})
    }

    disableEditMode = () => {
        if (this.state.post != '') this.setState({editMode: false})
    }

    handleChange = (e) => {
        this.setState({post: e.target.value})
    }

    componentDidMount() {}

    render() {
        return <div className='editor'>
            {this.state.editMode? 
                <TextareaAutosize 
                    defaultValue={this.state.post}
                    placeholder='Write your post'
                    onChange={this.handleChange}
                    onBlur={this.disableEditMode}
                />: 
                <div 
                    className='rendered-post' 
                    onDoubleClick={this.enableEditMode}
                >
                    <MdRender 
                        source={this.state.post} 
                    />
                </div>
            }
        </div>
    }
}