import React, {Component} from "react"

import MdRender from '../markdown-render/markdown-render'

import TextareaAutosize from '@material-ui/core/TextareaAutosize'

export default class Editor extends Component {
    state = {
        post: '',
        editMode: true
    }

    toggleMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleChange = (e) => {
        this.setState({post: e.target.value})
    }

    componentDidMount() {}

    render() {
        console.log(this.state.post)
        return <div className='editor'>
            {this.state.editMode? <TextareaAutosize 
                defaultValue={this.state.post}
                placeholder='Write your post'
                onChange={this.handleChange}
                onBlur={this.toggleMode}
            />: <div className='rendered-post' onDoubleClick={this.toggleMode}>
                <MdRender 
                    source={this.state.post} 
                />
            </div>}
        </div>
    }
}