import React from "react";


class ProjectForm extends React.Component {
    constructor(proms) {
        super(proms);
        this.state = {
            project_name: '',
            project_user: []
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

    handleProjectChange(event){
        if(!event.target.selectedOptions){
            this.setState({
                'project_user': []
            })
            return;
        }
        let project_user = []
        for(let i=0; i<event.target.selectedOptions.length; i++){
            project_user.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'project_user': project_user
        })
    }

    handleSubmit(event) {
        // this.props.get_token(this.state.login, this.state.password)
        // console.log(this.state.project_name + ' ' + this.state.project_user)
        this.props.createProject(this.state.project_name, this.state.project_user)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="login">projectName</label>
                    <input type="text" className="form-control" name="project_name" value={this.state.project_name}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">user</label>

                    <select name="project_user"  multiple onChange={(event) => this.handleProjectChange(event)}>
                        {this.props.todousers.map((item) => <option value={item.id}>{item.username}</option>)}
                    </select>

                    {/*<input type="number" className="form-control" name="project_user" value={this.state.project_user}*/}
                    {/*       onChange={(event) => this.handleChange(event)}/>*/}
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }

}

export default ProjectForm