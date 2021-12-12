import React from "react";


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.todousers.id,
            project: props.projects.id,
            todo_text: ''
            // proms.todousers.id
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        console.log([event.target.name], event.target.value)
    }

    // handleProjectChange(event){
    //     if(!event.target.selectedOptions){
    //         this.setState({
    //             'project_user': []
    //         })
    //         return;
    //     }
    //     let project_user = []
    //     for(let i=0; i<event.target.selectedOptions.length; i++){
    //         project_user.push(event.target.selectedOptions.item(i).value)
    //     }
    //     this.setState({
    //         'project_user': project_user
    //     })
    // }

    handleSubmit(event) {
        // this.props.get_token(this.state.login, this.state.password)
        // console.log(this.state.project_name + ' ' + this.state.project_user)
        this.props.createTodo(this.state.user, this.state.project, this.state.todo_text)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="login">Text</label>
                    <input type="text" className="form-control" name="todo_text" value={this.state.todo_text}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">user/project</label>

                    <select name="user" onChange={(event) => this.handleChange(event)}>
                        {this.props.todousers.map((item) => <option value={item.id}>{item.username}</option>)}
                    </select>
                    <select name="project" onChange={(event) => this.handleChange(event)}>
                        {this.props.projects.map((item) => <option value={item.id}>{item.project_name}</option>)}
                    </select>

                    {/*<input type="number" className="form-control" name="project_user" value={this.state.project_user}*/}
                    {/*       onChange={(event) => this.handleChange(event)}/>*/}
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }

}

export default TodoForm