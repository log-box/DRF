import React, {Component} from 'react';
// import '../bootstrap/dist/css/bootstrap.min.css';
import './style.css'

class TodoHeader extends Component {
    render() {
        return (
            <div class="header">
                <div class='menu'>
                    <ul>
                        <li>
                            <a href="http://127.0.0.1:8000/api/users">Пользователи (API)</a>
                        </li>
                        <li>
                            <a href="http://127.0.0.1:3000">Домой</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoHeader;